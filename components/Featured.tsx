import { Fragment, useEffect, useState } from "react";
import { FC } from "react";
import { motion } from "framer-motion";
// import LaunchCard from "./Launches/LaunchCard";
import FeatArticles from "./News/FeatArticles";
import dynamic from "next/dynamic";

const LaunchCard = dynamic(() => import('./Launches/LaunchCard'))

const Featured: FC<any>= (props: any) => {

    const launches = props.launches;
    const news = props.news;

    return(
        <div key={props.id} id="content" className="px-16 pt-10 flex flex-wrap">
            <div id="launches" className="flex-2">
                <h1 className="text-3xl text-white font-bold">Featured launches:</h1>
                <div id="featured-launch-section" className="mt-6 flex flex-wrap px-10 gap-4">
                    {launches.slice(0,3).map((launch:any)=>{
                        return(<LaunchCard key={launch.id} launch={launch} />)
                    })}
                </div>
            </div>
            <div id="articles" className="flex-1">
                <h1 className="text-3xl text-white font-bold">Latest articles:</h1>
                <div id="featured-launch-section" className="mt-6 flex flex-wrap px-10 gap-4">
                    {news.slice(0,7).map((event:any)=>{
                        return(<FeatArticles key={event.id} event={event} />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Featured;