
import { FC } from "react";
import { motion } from "framer-motion";

const Blink: FC = () => {
    return(<motion.div animate={{opacity: 0}} transition={{ease:"easeInOut" ,duration: 1, repeat:Infinity, repeatType:"mirror"}} className="relative group my-auto pt-4">
    <div className="mt-6 animate-tilt transition group-hover:duration-200 duration-500 group-hover:opacity-100 opacity-75 absolute rounded-lg -inset-0.5 bg-red-500 filter blur h-4 my-auto"></div>
    <div className="bg-red-500 rounded-xl w-6 h-6 rounded-full my-auto"/>
    {/* </button> */}
</motion.div>)
}

export default Blink;