import Footer from "@/components/navigation/Footer"
import Menu from "@/components/navigation/Menu"
import Navbar from "@/components/navigation/Navbar"




export default async function DashboardLayout ({
    children,
   

}: {
    children: React.ReactNode
    
}) {

    

    return (
        < div className= ' bg-main-bg text-main-color h-screen'>
        <Navbar />
        <div className=' flex'>
          <div className="w-[250px] px-1 py-2 border-r-2 border-soft-bg">
            <Menu />
          </div>

        <div className="px-2 py-5 w-full ">

        {children}
        </div>
        </div>
        <div className="fixed inset-x-2 bottom-2">
        <Footer />
        </div>
        </div>
    )
}