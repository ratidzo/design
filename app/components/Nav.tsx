import Image from "next/image"
import logo from "../../public/logo-ionic.svg"
import menu from "../../public/menu.svg"
import close from "../../public/close.svg"
import Link from "next/link"
import Button from "./Button"

const Links = [
    {
        name: "HOME", link: '/'
    },
    {
        name: "PRODUCT", link: '/'
    },
    {
        name: "COMPANY", link: '/'
    },
    {
        name: "BLOG", link: '/'
    },
    {
        name: "CONTACT", link: '/'
    }
]



export default function Nav() {
    return(
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center
            justify-between bg-white py-4 px-4">
                <div className="flex items-center pt-2">
                    <Image alt="ionic logo"
                     src={logo} width={32} height={32} />
                    <h1 className="font-bold text-2xl cursor-pointer
                    text-gray-800 ">
                        Design
                    </h1>
                </div>
                <div className="text-3xl absolute 
                    right-8 top-6 cursor-pointer md:hidden">
                    <Image alt="menu"
                     src={menu} width={32} height={32} />
                </div>
                <ul className="md:flex md:items-center md:pb-0 pb-12 
                    absolute md:static bg-white md:z-auto z-[-1]
                    left-0 w-full md:w-auto md:pl-0 pl-9
                    transition-all duration-500 ease-in" >
                    {
                        Links.map((link) => (
                            <li key={link.name}
                            className="md:ml-8 text-lg md:my-0 my-6" >
                                <Link href={link.link}
                                className="text-gray-800 hover:text-gray-400
                            duration-500 " >
                                    {link.name}
                                </Link>   
                            </li>
                        ) )
                    }
                    <Button>
                        Get Started
                    </Button>
                    
                </ul>



            </div>
        </div>
    )
}