import bcryptjs from "bcryptjs";
import { prismadb } from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(
   request: Request
) {
   try {
       const body = await request.json()
       const {
           email,
           name,
           password
         } = body;


       // check if email already exists


       const existingUserByEmail = await prismadb.user.findUnique({
           where: { email: email}
       });


       if(existingUserByEmail) {
           return NextResponse.json({ user: null, message: "User with this email already exists"}, { status: 409 })
       }


        // check if name already exists


        const existingUserByName = await prismadb.user.findFirst({
           where: { name: name}
       });


       if(existingUserByName) {
           return NextResponse.json({ user: null, message: "User with this name already exists"}, { status: 409 })
       }


       const hashedPassword = await bcryptjs.hash(password, 12);


       const newUser = await prismadb.user.create({
           data: {
             email,
             name,
             hashedPassword
           }
         });


      


       return NextResponse.json({ user: newUser, message: "User created successfully"}, { status: 201 });


   } catch (error) {
       return NextResponse.json({ message: "Something went wrong"}, { status: 500 });
   }
 
}
