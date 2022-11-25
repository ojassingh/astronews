import { NextPage } from "next";
import LaunchCardMain from "../../components/Launches/LaunchCardMain";
import Navbar from "../../components/Navbar";
import LaunchCard from '../../components/Launches/LaunchCard';
import Footer from '../../components/Footer';

const launches: NextPage = ({launchList}: any) => {

    const launches = JSON.parse(launchList)
   
    return(<div>
        <Navbar/>
        <h1 className="lg:text-8xl md:text-8xl sm:text-7xl xs:text-6xl py-10 lg:px-16 md:px-16 sm:px-14 xs:px-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">All upcoming launches</h1>
        <div id="content" className="lg:px-16 md:px-16 xs:px-10 sm:px-14 py-4 flex flex-wrap gap-4">
          {launches.map((launch: any, i:number)=>{
            return(<LaunchCard key={i} launch={launch} />)
          })}
        </div>
        <Footer/>
    </div>)
}

export default launches;

export async function getServerSideProps(context: any) {

    var launches = await fetch("https://ll.thespacedevs.com/2.2.0/launch/upcoming/").then(res => res.json()).then((data)=>{
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