import { NextPage } from "next"
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar/>
      <Intro/>
    </div>
  )
}

export default Home;