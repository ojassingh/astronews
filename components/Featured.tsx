import { Fragment, useEffect, useState } from "react";
import { FC } from "react";
import { motion } from "framer-motion";
import LaunchCard from "./Launches/LaunchCard";
import FeatArticles from "./FeatArticles";

const Featured: FC<any>= (props: any) => {

    const launches = props.launches;

    return(
        <div key={props.id} id="content" className="px-16 pt-10 flex">
            <div id="launches" className="w-2/3">
                <h1 className="text-3xl text-white font-bold">Featured launches:</h1>
                <div id="featured-launch-section" className="mt-6 flex flex-wrap px-10 gap-4">
                    {launches.slice(0,3).map((launch:any)=>{
                        return(<LaunchCard key={launch.id} launch={launch} />)
                    })}
                </div>
            </div>
            <div id="articles" className="w-1/3">
                <h1 className="text-3xl text-white font-bold">Latest articles:</h1>
                <div id="featured-launch-section" className="mt-6 flex flex-wrap px-10 gap-4">
                    {launches.slice(0,3).map((launch:any)=>{
                        return(<FeatArticles key={launch.id} launch={launch} />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Featured;