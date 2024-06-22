import Image from "next/image"
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <div className="flex px-6 py-4 items-center justify-between w-full backdrop-blur-lg">
                <div className="flex items-center text-center gap-4 md:gap-10">
                    <Link href="./" className="font-bold">
                        <Image width={100} height={50}  src="/logo.svg" alt='logo'/>
                    </Link>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium">
                        <Link className="hover:text-[#ff1c19]" href='./about'>About</Link>
                    </div>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium ">
                        <Link className="hover:text-[#ff1c19]" href='./chat'>Chat</Link>
                    </div>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium ">
                        <Link className="hover:text-[#ff1c19]" href='./directions'>Directions</Link>
                    </div>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium ">
                        <Link className="hover:text-[#ff1c19]" href='./mentors'>Mentors</Link>
                    </div>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium ">
                        <Link className="hover:text-[#ff1c19]" href='./courses'>Courses</Link>
                    </div>
                    <div className="flex md:gap-3 gap-2 md:text-md text-lg font-medium ">
                        <Link className="hover:text-[#ff1c19]" href='./contacts'>Contacts</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
