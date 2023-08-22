
import UserCard from "@/components/navigation/UserCard"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth";



export default async function Home() {
  const session = await getServerSession(options)

   return (
     <main className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        
      {session ? (
        <UserCard user={session?.user} pagetype={"Dashboard"} />
      ) : (
        <>
        <h1 className="text-5xl text-bubble-gum">Dashboard page - protected route- you must sign in!</h1>
        
        </>
      )}
      </div>
    </main>
    )
 }
