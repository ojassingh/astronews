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
        <div key={props.id} id="content" className="w-full lg:px-16 md:px-16  sm:px-16 xs:px-0 pt-10 lg:flex lg:flex-wrap place-content-center">
            <div id="launches" className="lg:flex-2">
                <h1 className="text-3xl text-white font-bold lg:px-0 md:px-0 sm:px-0 xs:px-10">Featured launches:</h1>
                <div id="featured-launch-section" className="mt-6 lg:flex flex-wrap px-10 grid gap-4 w-full">
                    {launches.slice(0,3).map((launch:any)=>{
                        return(<LaunchCard key={launch.id} launch={launch} />)
                    })}
                </div>
            </div>
            <div id="articles" className="lg:flex-1 w-full px-10">
                <h1 className="text-3xl text-white font-bold mt-10">Latest articles:</h1>
                <div id="featured-launch-section" className="w-full mt-6 lg:flex lg:flex-wrap lg:px-10 md:px-10 sm:px-4 xs:px-0 grid gap-4">
                    {news.slice(0,7).map((event:any)=>{
                        return(<FeatArticles key={event.id} event={event} />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Featured;