import { Fragment } from "react";
import { FC } from "react";
import Featured from "./Featured";
import { motion, Variants} from "framer-motion";

const Intro: FC<any>= (props: any) => {

    const launches = props.launches;
    // console.log(launches)

    return(<Fragment>
        <div id="content" className="px-16 pt-10">
            <div className="flex gap-6">
                <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">AstroNews Live</h1>
             
                <motion.div animate={{opacity: 0}} transition={{ease:"easeInOut" ,duration: 1, repeat:Infinity, repeatType:"mirror"}} className="relative group my-auto pt-4">
                    <div className="mt-6 animate-tilt transition group-hover:duration-200 duration-500 group-hover:opacity-100 opacity-75 absolute rounded-lg -inset-0.5 bg-red-500 filter blur h-4 my-auto"></div>
                    <div className="bg-red-500 rounded-xl w-6 h-6 rounded-full my-auto"/>
                    {/* </button> */}
                </motion.div>

            </div>
            <h3 className="text-white px-2 font-bold">Ad Astra Per Aspera.</h3>
            
        </div>
        <Featured launches={launches} />
    </Fragment>)
}

export default Intro;