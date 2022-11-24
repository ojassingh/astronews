import { FC, useEffect, useState} from "react";
import { motion } from "framer-motion";
import ArrowUpRight from "../icons/ArrowUpRight";

const MissionInfo: FC<any>= ({launch, provider}) => {

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

    // console.log(provider);
    
    return(<motion.div key={launch.id} variants={variants} whileHover="hover" initial="rest" className="bg-gradient-to-r from-blue-400 to-pink-800 w-full rounded-3xl text-white flex flex-wrap">
    <div className="p-10 w-1/3 mx-auto my-auto lg:block md:block sm:hidden xs:hidden"><img className="bg-white p-10  rounded-2xl object-cover mx-auto" src={provider.logo_url}/></div>
   <motion.div className="grid place-content-center lg:w-2/3 md:w-full sm:w-full xs:w-full text-white p-10 gap-6">
        {/* <h1 className="text-center font-bold text-4xl">{launch.name}</h1> */}
        <h1 className="text-center font-bold text-3xl">Mission Provider: {launch.launch_service_provider.name}</h1>
        <h1 className="text-center font-medium text-xl">{provider.description}</h1>
        <div className="flex flex-wrap gap-4 place-content-center">
          <h1 className="text-center font-medium text-xl">Launchers: {provider.launcher_list.map((launcher: any)=>{
            return(launcher.name + " | ")
          })}</h1>
           {(provider.spacecraft_list).length > 0 ? <h1 className="text-center font-medium text-xl">Spacecrafts: {provider.spacecraft_list.map((spacecraft: any)=>{
            return(spacecraft.name + " | ")
          })}</h1> : <h1 className="text-center font-medium text-xl">Spacecrafts: None to display</h1>}
          <h1 className="text-center font-medium text-xl">Country: {provider.country_code}</h1>
          <h1 className="text-center font-medium text-xl">Founded: {provider.founding_year}</h1>
          <h1 className="text-center font-medium text-xl">Provider type: {provider.type}</h1>
          <h1 className="text-center font-medium text-xl">Learn more: <a target="_blank" href={provider.wiki_url} className="underline text-blue-300">Wikipedia</a></h1>
          <h1 className="text-center font-medium text-xl">Learn more: <a target="_blank" href={provider.info_url} className="underline text-blue-300">{provider.name}</a></h1>
        </div>
   </motion.div>
</motion.div>)
}

export default MissionInfo;