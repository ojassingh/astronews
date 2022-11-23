import Link from "next/link";
import { Fragment } from "react";
import { motion } from "framer-motion";

const Navbar = () => {

    const navList = [
        {
            id: 1,
            name: "Home",
            url: "/",
        },
        {
            id: 2,
            name: "Launches",
            url: "/launches",
        },
        {
            id: 3,
            name: "News",
            url: "/news",
        },
        // {
        //     id: 4,
        //     name: "Sign in",
        //     url: "home",
        // },
    ]

    return(<Fragment>
        <div id="navbar" className="pt-10 px-16 flex">
            
        <div className="flex-2">
            <button className="rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <h1 className="block text-black bg-clip-text text-transparent px-4 py-2 font-semibold rounded-full">AstroNews Live</h1>
            </button>
        </div>

            <ul className="flex gap-4 my-auto px-10">
                {navList.map((element)=>{
                    return(<motion.li whileHover={{scale:1.07}} className="p-2 text-white" key={element.id}>
                        <div className="flex-2">
                        <button className="rounded-full hover:bg-gradient-to-r hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500 outline outline-1">
                        <h1 className="block text-white hover:bg-clip-text hover:text-black px-4 py-2 font-semibold rounded-full"><Link href={element.url}>{element.name}</Link></h1>
                        </button>
                        </div>
                        
                    </motion.li>)
                })}
            </ul>
        </div>
    </Fragment>)
}

export default Navbar;