import { NextPage } from "next"
// import { type } from "os";
import { useEffect } from "react";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import FeatArticlesMain from "../components/News/FeatArticlesMain";
import OtherArticles from "../components/News/OtherArticles";

const news: NextPage = ({launches, news, moreNews}: any) => {

  const launchList = JSON.parse(launches).results
  const newsList = JSON.parse(news);
  const other = JSON.parse(moreNews);
//   console.log(other, newsList)

  return (
    <div className="bg-dark">
    <Navbar/>
    <h1 className="lg:text-8xl md:text-8xl sm:text-7xl xs:text-6xl py-10 lg:px-16 md:px-16 sm:px-12 xs:px-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">Latest news</h1>

    <h1 className="lg:text-6xl md:text-6xl sm:text-5xl xs:text-4xl lg:px-16 md:px-16 sm:px-12 xs:px-10 font-bold text-white">Featured articles</h1>

      
    <div id="featured-launch-section" className="mx-auto mt-6 flex flex-wrap px-10 gap-4 place-content-center ">
        {newsList.map((event:any, i: number)=>{
            return(<FeatArticlesMain key={i} event={event} />)
        })}
    </div>



    <h1 className="lg:text-6xl md:text-6xl sm:text-5xl xs:text-4xl lg:px-16 md:px-16 sm:px-12 xs:px-10 py-10 font-extrabold text-white">More articles from other sources</h1>
    <p className="text-white font-medium text-xl lg:px-16 md:px-16 sm:px-12 xs:px-10 py-10">Do note that these are manually queried, and some data might not be relevant.</p>

    <div id="featured-launch-section" className="mx-auto px-10 mt-6 flex flex-wrap gap-4 place-content-center">
        {other.map((article:any, i: number)=>{
            return(<OtherArticles key={i} article={article} />)
        })}
    </div>
    
    <Footer/>  
    </div>
  )
}

export default news;

export async function getServerSideProps(context: any) {

  var launchList = await fetch("https://ll.thespacedevs.com/2.2.0/launch/upcoming/").then(res => res.json()).then((data)=>{
    return data
  })
  var launches = JSON.stringify(launchList);

  var newsList = await fetch("https://api.spaceflightnewsapi.net/v3/articles").then(res => res.json()).then((data)=>{
    return data
  })

  var news = JSON.stringify(newsList)

  var otherNews = await fetch("https://newsapi.org/v2/everything?apiKey=4864f447c8ea42c3ac9760781facbde1&q=spacex OR  nasa OR rocketlaunch&sortBy=popularity")
  .then(res => res.json())
  .then((data)=>{
    return data
  })

  var moreNews = JSON.stringify((otherNews.articles).slice(0,20))

  return{
    props: {launches,news, moreNews},
  }
}