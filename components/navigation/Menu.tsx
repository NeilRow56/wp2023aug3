"use client"


import Image from "next/image"
import Link from "next/link"
import { datafile } from "@/data"


const Menu = () => {
  return (
    <div className="p-3 space-y-3">

      {datafile.map((item) => (
       < div key={item.id}>
      <div className="mb-1 space">
      <span className="font-bold text-blue-500">{item.title}</span>
      </div>
    {item.listItems.map( listItem => (
    <div key={listItem.id} className="flex flex-col space-y-3">
      <Link href='/' >
      <div className="flex flex-row space-x-3 space-y-3  hover:bg-soft-bg hover:rounded-md">
        
        <Image src={listItem.icon} alt={listItem.title } width={25}
              height={25}/>
               
        <span className=" ">{listItem.title}</span>
        
    </div>

      </Link>
      
      
      </div>  
      ))} 
      </div> 
      )
      )}

<Link href='/api/auth/signout' >
      <div className="flex flex-row mt-2 space-x-3 space-y-3  hover:bg-soft-bg hover:rounded-md">
        
      <Image src="/images/logout-svgrepo-com.svg" alt="logo" width={40} height={40} />         
        <span className="text-red-700 ">Sign Out</span>
        
    </div>

      </Link>

     
      </div>
  )
}

export default Menu