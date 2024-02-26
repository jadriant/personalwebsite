import React, { useState } from "react";
import Link from "next/link"
import { LuSprout } from 'react-icons/lu';
import { RiPlantFill, RiLeafFill } from 'react-icons/ri';


// LuSprout  RiLeafFill

export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="pt-5 pb-10 mb-12 flex justify-between mx-5">
            <div className="flex items-center gap-[2px]">
                <span className="font-sf text-xl font-medium md:text-3xl">JT</span>
                <LuSprout className="text-xl md:text-3xl" />
            </div>
            <div className="flex flex-col text-zinc-400 text-lg gap-1 md:flex-row md:gap-5 md:text-3xl">
                <Link href="#" className="text-black cursor-pointer duration-[500ms] hover:scale-110">Home</Link>
                <Link href="#project" className="cursor-pointer duration-[500ms] hover:scale-110">Projects</Link>
                <Link href="#about" className="cursor-pointer duration-[500ms] hover:scale-110">About</Link>
                <a href="https://drive.google.com/file/d/19RdoBGrxGFn1i4naDFPW1J2bO-unJk5-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cursor-pointer duration-[500ms] hover:scale-110">
                    Resume
                </a>
            </div>

        </nav>
    )
}