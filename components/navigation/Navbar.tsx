import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="p-3 flex items-center justify-between">
      <div className="flex items-center ">
        <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
        <span>WpFile Admin.</span>
      </div>
      <div className="flex space-x-4">
        <Image
          src="/images/search.svg"
          alt="search Icon"
          width={25}
          height={25}
        />
        <Link href="/">
          <div className="px-2 flex  items-center space-x-2 mt-4">
            <Image
              src="/images/app.svg"
              alt="app Icon"
              width={25}
              height={25}
            />
            <span className=" ">Home</span>
          </div>
        </Link>

        <Image
          src="/images/expand.svg"
          alt="expand Icon"
          width={25}
          height={25}
        />

        <div>
          <button
            className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
            aria-label="Cart"
          >
            <Image
              src="/images/notifications.svg"
              alt="expand Icon"
              width={25}
              height={25}
            />

            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                6
              </div>
            </span>
          </button>
        </div>
        <div className="px-2 flex  items-center space-x-2">
          <div className="rounded-full">
            <Image
              src="https://media.istockphoto.com/id/1450268558/photo/summer-selfie.webp?b=1&s=170667a&w=0&k=20&c=Vipvrhj292OQRhFkUTIqKnbtMlSn7EWlIbZRzWE66TU="
              alt="settings Icon"
              width={35}
              height={35}
              className="rounded-full w-8 h-8"
            />
          </div>
          <span>Jane</span>
        </div>
        <Image
          src="/images/settings.svg"
          alt="expand Icon"
          width={25}
          height={25}
        />
      </div>
    </nav>
  )
}

export default Navbar
