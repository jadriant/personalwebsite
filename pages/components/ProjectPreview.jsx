import React from 'react'
import { motion } from "framer-motion";
import {BsArrowUpRight} from 'react-icons/bs'

export default function ProjectPreview(props) {
    // const projectname = props.name | "Block name"
    // const description = props.description | "This is an amazing block"
    // const imageUrl = props.name | "/project-1.png"
    // const bgColor = props.name | "#e4e4e7"
    // const dark = props.dark | false

    const projectname = props.name? props.name : "Block name"
    const description = props.description? props.description : "This is an amazing block"
    const imageUrl = ""
    const bgColor = props.bgColor? props.bgColor : "#e4e4e7" 
    const dark = props.dark? "dark" : undefined

    console.log(props)

    return (
        <motion.div
            className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
            style={{ background: `${bgColor}` }}
            initial="initial"
            whileInView="animate"
            variants={PreviewAnimation}
        >
            <div
                className={`h-full w-full px-10 py-6 duration-[500ms] hover:scale-105 bg-cover bg-no-repeat bg-center transition-all ease-in-out`}
                style={{ backgroundImage: `url('${imageUrl}')` }}
            >
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-medium text-lg dark:text-white">{projectname}</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-300">
                            {description}
                        </p>
                    </div>

                    {/* Link to Button */}
                    <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
                        <BsArrowUpRight className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const PreviewAnimation = {
    initial: {
        y: 30,
        opacity: 0,
        scale: 0.9,
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.8,
        },
    },
};