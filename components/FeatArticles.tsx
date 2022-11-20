import { FC } from "react";
import { motion } from "framer-motion";
const FeatArticles: FC<any>= (props) => {

    let launch = props.launch;
    return(<motion.div key={launch.id} className="bg-blue-400 w-full h-96 rounded-3xl text-white flex">
    <img className="h-full w-2/6 object-cover rounded-lg mx-auto" src={launch.image}/>
   <div className="">
    <h1 className="text-center font-semibold text-3xl">{launch.name}</h1>
        <h1 className="text-center font-bold text-2xl">{launch.net}</h1>
   </div>
</motion.div>)
}

export default FeatArticles;