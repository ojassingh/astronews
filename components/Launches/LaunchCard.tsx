import { FC, useEffect, useState} from "react";
import { motion } from "framer-motion";
import ArrowUpRight from "../icons/ArrowUpRight";

const LaunchCard: FC<any>= (props) => {
    let launch = props.launch;
    
    // console.log(launch)

    // function getDate(){
    //   const date = new Date(launch.net);
    //   return date.toLocaleString()
    // }


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
    
    return(<motion.a key={launch.id} variants={variants} whileHover="hover" initial="rest" href={"/launches/" + launch.id} className="bg-gradient-to-r from-blue-300 to-blue-700 rounded-3xl text-white flex place-content-center w-full">
    <img className="lg:block md:hidden sm:hidden xs:hidden h-full ml-0 w-1/3 object-cover rounded-l-3xl mx-auto" src={launch.image}/>
   <motion.div className="grid place-content-center xs:w-full lg:w-2/3 md:w-full sm:w-full text-white p-10 gap-6">
        <h1 className="text-center font-bold lg:text-4xl md:text-4xl sm:text-4xl xs:text-3xl">{launch.name}</h1>
        <h1 className="text-center font-bold text-2xl">{launch.launch_service_provider.name}</h1>
        <h1 className="text-center font-medium text-xl">{launch.pad.name} | {launch.pad.location.name}</h1>
        <div id="t-minus-section" className="text-center flex flex-wrap gap-3 place-content-center">
          <h1 className="font-medium text-2xl text-center">T-MINUS: </h1>
          <div className="flex my-auto gap-2 text-lg align-center">
            <div>
              <h1>{tminus.days}</h1>
              <h1>Days</h1>
            </div>
            <span>|</span>
            <div>
              <h1>{tminus.hours}</h1>
              <h1>Hours</h1>
            </div>
            <span>|</span>
            <div>
              <h1>{tminus.mins}</h1>
              <h1>Mins</h1>
            </div>
            <span>|</span>
            <div>
              <h1>{tminus.secs}</h1>
              <h1>Secs</h1>
            </div>
          </div>
        </div>
        <h1 className="w-full text-center mx-auto rounded-xl bg-white p-2 text-primary">Status: {launch.status.name}</h1>
        <h1 className="text-center font-medium text-xl">{new Date(launch.net).toUTCString()}</h1>
         
   </motion.div>
   <div className="lg:block md:hidden sm:hidden xs:hidden flex">
    <div className="relative"><div className="p-6 bottom-0 left-0"><ArrowUpRight/></div></div>
   </div>
</motion.a>)
}

export default LaunchCard;