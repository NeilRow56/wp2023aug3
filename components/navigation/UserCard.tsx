import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

type User =
  | {
      name?: string | null | undefined
      email?: string | null | undefined
      image?: string | null | undefined
    }
  | undefined

type Props = {
  user: User
  pagetype: string
}

export default function Card({ user, pagetype }: Props) {
  //console.log(user)

  const greeting = user?.name ? (
    <div className="flex flex-col h-[80vh] items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
        <div className='mt-48'>
        Hello {user?.name}!
        </div>
      
    </div>
  ) : null

  // const emailDisplay = user?.email ? (
  //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
  //         {user?.email}
  //     </div>
  // ) : null

  const userImage = user?.image ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? 'Profile Pic'}
      priority={true}
    />
  ) : null

  return (
    <section className="flex flex-col gap-4">
        <nav className='flex w-container mx-auto gap-[800px] '>
        <div className='justiy-end'>
        <p className="text-2xl text-center text-white">{pagetype} Page!</p>
        </div>
       
        <div>
        <Link href='/sign-in'>
            <Button className='bg-bubble-gum'>
                Sign in
            </Button>
        </Link>
        </div>
        
        </nav>

       
      
      {greeting}
      {/* {emailDisplay} */}
      {userImage}
      <p className="text-2xl text-center text-white">Screen height for greeting set to h-[80vh]</p>
    </section>
  )
}
