import { NextPage } from "next";
import LaunchCardMain from "../../components/Launches/LaunchCardMain";
import Navbar from "../../components/Navbar";
import LaunchCard from '../../components/Launches/LaunchCard';
import Footer from '../../components/Footer';

const launches: NextPage = ({launchList}: any) => {

    const launches = JSON.parse(launchList)
   
    return(<div>
        <Navbar/>
        <h1 className="text-8xl py-10 px-16 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">All upcoming launches</h1>
        <div id="content" className="px-16 py-4 flex flex-wrap gap-4">
          {launches.map((launch: any)=>{
            return(<LaunchCard launch={launch} />)
          })}
        </div>
        <Footer/>
    </div>)
}

export default launches;

export async function getServerSideProps(context: any) {

    var launches = await fetch("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/").then(res => res.json()).then((data)=>{
      return data
    })
    var launchList = JSON.stringify(launches.results);
  
    var newsList = await fetch("https://api.spaceflightnewsapi.net/v3/articles").then(res => res.json()).then((data)=>{
      return data
    })
  
    var news = JSON.stringify(newsList)
  
    return{
      props: {launchList,news},
    }
  }