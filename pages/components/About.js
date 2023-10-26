

export default function About() {

    const tech = [
        "Javascript",
        "React.js",
        "Node.js",
        "Python",
        "Java",
        "C++"
    ]

    return (

        <div className="p-10 text-sm h-auto max-h-auto bg-gradient-to-r from-zinc-300 to-zinc-100  rounded-b-3xl md:rounded-bl-none md:rounded-tr-3xl md:text-lg">
            

                {/* whoami */}
                <p className="text-justify pb-4">
                    I am a first-gen Malaysian tech trooper, currently enrolled at the <b>University of Southern California</b>. I'm pursuing a B.S. and M.S. in Computer Science, and I'm on track to graduate in <b>May 2024</b>.
                </p>

                {/* teck stack */}
                <p className="pb-2">Here are some technologies I have been Working With: </p>
                <ul className="list-none grid grid-cols-2 gap-4 pb-5">
                    {tech.map(function (item) {
                        return (
                            <li className="relative pl-2">
                                <span className="text-xs font-extralight px-[1rem]">{"▹ "}</span>{item}
                            </li>
                        )
                    })}
                </ul>

                {/* outside of work woohoo */}
                <p className="">
                    Outside of work, you'll find me getting a good sweat session at the gym, exploring scenic hiking trails, and fearlessly experimenting in the kitchen.
                </p>

        </div>

    )
}