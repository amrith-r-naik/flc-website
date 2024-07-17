import Image from "next/image";

import pythonIcon from "~/assets/icons/python.svg"
import footerWave from "~/assets/images/footerwave.svg"

function Footer() {
    return (
        <footer className="mt-60  bg-[#FCAF3C] text-black relative">
            <Image width={800} height={200} priority={false} className="w-full object-cover absolute bottom-[70%] -z-10" src={footerWave} alt="footer wave" />
            <div className="content-container space-y-4">
                <div className=" flex justify-between items-center">
                    <h1 className="text-4xl font-bold">FiniteLoop</h1>
                    <div className="flex gap-4">
                        <Image width={50} height={50} src={pythonIcon} alt="icon" />
                        <Image width={50} height={50} src={pythonIcon} alt="icon" />
                        <Image width={50} height={50} src={pythonIcon} alt="icon" />
                        <Image width={50} height={50} src={pythonIcon} alt="icon" />
                    </div>
                </div>

                <hr />
                <span>copyright @2024</span>
            </div>
        </footer>
    )
}


export default Footer;