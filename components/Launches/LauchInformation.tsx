import { FC, useEffect, useState} from "react";
import { motion } from "framer-motion";
import ArrowUpRight from "../icons/ArrowUpRight";

const LaunchInfo: FC<any>= ({launch, launcher}) => {
    

    // console.log(launcher)

    const variants = {
        rest: {
            x: 0,
            transition: {
              duration: 4,
              type: "tween",
              ease: "easeIn"
            }
          },
        hover: {
            scale: 0.97,
            transition: { type: "spring", duration: 0.8, ease: "linear" }
        }
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
    
    return(<motion.div key={launch.id} variants={variants} whileHover="hover" initial="rest" className="bg-gradient-to-r from-blue-400 to-pink-800 w-full rounded-3xl text-white ">
    <motion.div className="grid place-content-center w-full text-white p-10 gap-6">
        {/* <h1 className="text-center font-bold text-4xl">{launch.name}</h1> */}
        <h1 className="text-center font-bold text-2xl">Launcher: {launcher.full_name}</h1>
        <h1 className="text-center font-medium text-xl">Description: {launcher.description}</h1>
        <div className="flex flex-wrap gap-4 place-content-center">
            <h1 className="text-center font-medium text-xl">Active: {launcher.active == true ? <span className="text-green-500">Yes</span>: <span className="text-red-500">No</span>}</h1>
            <h1 className="text-center font-medium text-xl">Diameter: {launcher.diameter}</h1>
            <h1 className="text-center font-medium text-xl">Length: {launcher.length}</h1>
            <h1 className="text-center font-medium text-xl">Launch Mass: {launcher.launch_mass == null ? "Unavailable" : launcher.mass}</h1>
          <h1 className="text-center font-medium text-xl">Reusable: {launcher.reusable ? "Yes" : "No"}</h1>
          <h1 className="text-center font-medium text-xl">Launch cost: {formatter.format(launcher.launch_cost)}</h1>
          <h1 className="text-center font-medium text-xl">Launcher link: <a target="_blank" href={launcher.info_url} className="underline text-blue-300">Learn more</a></h1>
          <h1 className="text-center font-medium text-xl">Wiki link: <a target="_blank" href={launcher.wiki_url} className="underline text-blue-300">Learn more</a></h1>
          {/* <h1 className="text-center font-medium text-xl">Provider type: {provider.type}</h1> */}
        </div>
   </motion.div>
</motion.div>)
}

export default LaunchInfo;