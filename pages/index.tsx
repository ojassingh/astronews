 import { NextPage } from "next"
// import { type } from "os";
import { useEffect } from "react";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: NextPage = ({launches}: any) => {

  const launchList = JSON.parse(launches).results

  return (
    <div className="bg-dark">
      <Navbar/>
      <Intro launches={launchList} />
      <Footer/>
    </div>
  )
}

export default Home;

export async function getServerSideProps(context: any) {

  var launchList = await fetch("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/").then(res => res.json()).then((data)=>{
    return data
  })
  var launches = JSON.stringify(launchList);

  return{
    props: {launches,},
  }
}