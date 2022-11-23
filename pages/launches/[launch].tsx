import { NextPage } from "next";
import { useState } from "react";
import LaunchCardMain from "../../components/Launches/LaunchCardMain";
import LaunchInfo from "../../components/Launches/LauchInformation";
import MissionInfo from "../../components/Launches/MissionInfo";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const launch: NextPage = ({launch, provider, launcher}: any) => {

    const mylaunch = JSON.parse(launch)
    // console.log(mylaunch)
    let mylauncher = JSON.parse(launcher);
    let myprovider = JSON.parse(provider);
      
      return(<div>
        <Navbar/>
        <h1 className="py-4 px-16 text-white text-5xl font-bold">{mylaunch.name}</h1>
 
        <div className="flex flex-wrap gap-4 py-4 px-16">
            <LaunchCardMain key={launch.id} launch={mylaunch} />
            <MissionInfo key={launch.id} provider={myprovider} launch={mylaunch} />
            <LaunchInfo key={launch.id} launcher={mylauncher} launch={mylaunch}/>
        </div>
        <Footer/>
      </div>)
}

export default launch;



export async function getStaticProps(context: any){
    
    const launchID = context.params.launch;
    var launchList = await fetch("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/").then(res => res.json()).then((data)=>{
        return data
    })

    // let index = launchList.findIndex((launch: any) => {launch.id === launchID});

    let index: number = -1;

    launchList.results.map((launch: any, i: number)=>{
        if(launch.id == launchID){
            index = i
        }
    })


    let launch = (launchList.results)[index]

    let providerID = launch.launch_service_provider.id;

    let provider = await fetch("https://lldev.thespacedevs.com/2.2.0/agencies/" + providerID).then(res => res.json()).then((data)=>{
        return data
    })

    let launcherID = launch.rocket.configuration.id;

    let launcher = await fetch("https://lldev.thespacedevs.com/2.2.0/config/launcher/" + launcherID).then(res => res.json()).then((data)=>{
        return data
    })

    return {
      props: {
          launch: JSON.stringify(launch),
          provider: JSON.stringify(provider),
          launcher: JSON.stringify(launcher),
        //   provider: providerID
       },
      revalidate: 20
    }

}


export async function getStaticPaths() {
  
    var launchList = await fetch("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/").then(res => res.json()).then((data)=>{
        return data
    })

    let launches = launchList.results;

    let paths = launches.map((launch: any) => ({
        params: { launch: launch.id.toString() },
    }))
  
    return { paths, fallback: false}
}
