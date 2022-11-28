import { FC, useEffect, useState} from "react";
import { motion } from "framer-motion";
import ArrowUpRight from "../icons/ArrowUpRight";

const LaunchCardMain: FC<any>= (props) => {
    let launch = props.launch;
  

    const [tminus, setCount] = useState({
      secs: 0,
      mins: 0,
      hours: 0,
      days: 0
    });


    const countdown: any = () => {
      const now = new Date();
      const date = new Date(launch.net)

     let diffMs = date.getTime() - now.getTime()
     var days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
     var hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
     var secs = Math.floor((diffMs % (1000 * 60)) / 1000);
     setCount({secs, mins, hours, days})
   }

    setTimeout(()=>{
      countdown();
      console.log(tminus.secs)
    }, 1000)


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

    
    return(<motion.div key={launch.id} variants={variants} whileHover="hover" initial="rest" className="bg-gradient-to-r from-blue-500 to-blue-800 w-full rounded-3xl text-white flex flex-wrap">
    <div className="px-10 py-10 w-1/3 mx-auto my-auto h-full lg:block md:hidden sm:hdiden xs:hidden">
      <img className="lg:block h-full rounded-3xl object-cover mx-auto my-auto" src={launch.image}/>
    </div>
   <motion.div className="grid place-content-center lg:w-2/3 md:w-full sm:w-full xs:w-full text-white p-10 gap-6">
        {/* <h1 className="text-center font-bold text-4xl">{launch.name}</h1> */}
        {/* <h1 className="text-center font-bold text-2xl">Launch Provider: {launch.launch_service_provider.name}</h1> */}
        <h1 className="text-center font-bold text-xl">Location: {launch.pad.name} | {launch.pad.location.name}</h1>
        {<div id="t-minus-section" className="text-center flex flex-wrap gap-3 place-content-center">
          <h1 className="font-medium text-2xl text-center">T-{(tminus.secs >= 0 && tminus.mins >= 0 && tminus.hours >= 0 && tminus.days >= 0) ? "MINUS": "PLUS"}: </h1>
        <div className="flex my-auto gap-2 text-lg align-center">
        <div>
          <h1>{Math.abs(tminus.days)}</h1>
          <h1>Days</h1>
        </div>
        <span>|</span>
        <div>
          <h1>{Math.abs(tminus.hours)}</h1>
          <h1>Hours</h1>
        </div>
        <span>|</span>
        <div>
          <h1>{Math.abs(tminus.mins)}</h1>
          <h1>Mins</h1>
        </div>
        <span>|</span>
        <div>
          <h1>{Math.abs(tminus.secs)}</h1>
          <h1>Secs</h1>
        </div>
      </div>
      </div>}
       <div className="flex flex-wrap gap-4 place-content-center">
       {((launch.status.abbrev).toLowerCase() != "success") && <h1 className="w-full text-center mx-auto rounded-xl bg-white p-2 text-primary">Status: {launch.status.name}</h1>}
        {((launch.status.abbrev).toLowerCase() == "success") && <h1 className="w-full text-center mx-auto rounded-xl bg-white p-2 text-green-500 text-semibold">Status: {launch.status.name}</h1>}
        <h1 className="w-full text-center mx-auto rounded-xl bg-white px-4 py-3 text-primary">Status: {launch.status.description}</h1>
        <h1 className="text-center font-medium text-xl">Date: {new Date(launch.net).toUTCString()}</h1>
       </div>
   </motion.div>
</motion.div>)
}

export default LaunchCardMain;