import { motion } from "framer-motion";
import { Fragment } from "react";
import { FC } from "react";
import Link from "next/link";
import PopoverNavi from "./PopoverNavi";

const Footer: FC = () => {

    return(<Fragment>
        <div id="content" className="mt-10 py-10 px-24 flex bg-gray-800 w-full">
            
            <div className="flex-2 my-auto">
                <button className="rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                <h1 className="block text-black bg-clip-text text-transparent px-4 py-2 font-semibold rounded-full">AstroNews Live</h1>
                </button>
                <p className="text-gray-500 text-xs px-4 py-2">Per Aspera Ad Astra</p>
            </div>

            <div className="my-auto lg:block md:block xs:hidden sm:hidden">
                <ul className="text-gray-300 text-md text-right flex flex-wrap gap-4">
                    <li><a href="/home" className="pt-2" >Home</a></li>
                    <li><a href="/launches" className="pt-2" >Launches</a></li>
                    <li> <a href="/news" className="pt-2">News</a></li>
                    <li><a href="#navbar" className="pt-2">Back to top</a></li>
                </ul>
            </div>

        </div>

        
    </Fragment>)
}

export default Footer;