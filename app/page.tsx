
import UserCard from "@/components/navigation/UserCard"
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function Home() {
  const session = await getServerSession(options)

   return (
     <main className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <>
        <h1 className="text-5xl text-bubble-gum">You Shall Not Pass- until signed in!</h1>
        <Link href='/sign-in'>
        <Button size="lg" className="bg-bubble-gum mt-4">
           Sign In
        </Button>
        </Link>
        </>
      )}
      </div>
    </main>
    )
 }
