import { NextPage } from "next";

const launch: NextPage = ({index, launch}: any) => {

    const mylaunch = JSON.parse(launch)
    // console.log(mylaunch)

    return(<div>
        
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

    return {
      props: { 
          index: index,
          launch: JSON.stringify((launchList.results)[index])
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
