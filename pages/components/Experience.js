import React from "react"
import Link from "next/link"
import { BsArrowUpRight } from 'react-icons/bs'


export default function Experience() {

    return (
        <div className="bg-inherit py-5 rounded-3xl flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="flex gap-10 justify-center">
                <a href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" alt="intel" className="w-20 h-20 cursor-pointer duration-[500ms] hover:scale-110"/>
                </a>
                <a href="https://www.usc.edu/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/USC_Trojans_logo.svg" alt="usc" className="w-20 h-20 cursor-pointer duration-[500ms] hover:scale-110"/>
                </a>
                <a href="https://www.7qubes.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://asset.brandfetch.io/idAcFPe0IW/idvVOtqsnC.jpeg" alt="7qubes" className="w-25 h-20 rounded-3xl cursor-pointer duration-[500ms] hover:scale-110"/>
                </a>
            </div>
            <Link href="#" className='w-40 h-10 text-center text-white bg-zinc-800 rounded-3xl flex items-center justify-center hidden md:flex cursor-pointer duration-[500ms] hover:scale-110'>
                Back to top
            </Link>
        </div>
    )
}


/*

    TODO:
    - get company logos
    - import it 
    - align it 

    - USC IYA
    - 7Qubes 
    - Intel Corporation
*/