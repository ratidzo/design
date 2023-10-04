import Image from "next/image"
import logo from "../../public/logo-ionic.svg"





export default function Nav() {
    return(
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex bg-white py-4">
                <div className="flex items-center pt-2 pl-4">
                    <Image alt="ionic logo"
                     src={logo} width={32} height={32} />
                    <h1 className="font-bold text-2xl cursor-pointer
                    text-gray-800 ">
                        Design
                    </h1>
                </div>
            </div>
        </div>
    )
}