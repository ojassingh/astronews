import { Fragment } from "react";
import { FC } from "react";
import { motion, Variants} from "framer-motion";
import dynamic from "next/dynamic";
import Blink from "./icons/Blinking";

const Featured = dynamic(() => import('./Featured'))

const Intro: FC<any>= (props: any) => {

    const launches = props.launches;
    const news = props.news;
    // console.log(launches)

    return(<Fragment>
        <div id="content" className="pt-10">
            <div className="lg:px-16 md:px-16 sm:px-16 xs:px-10 flex flex-wrap lg:gap-6">
                <h1 className="lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">AstroNews Live</h1>
             
                <div className="lg:block md:hidden sm:hidden xs:hidden my-auto"><Blink/></div>

            </div>
            <h3 className="lg:px-20 md:px-17 sm:px-17 xs:px-11 text-white font-bold">Per Aspera Ad Astra</h3>
            
        </div>
        <Featured launches={launches} news={news}/>
    </Fragment>)
}

export default Intro;