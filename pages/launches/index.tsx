import { NextPage } from "next";

const launches: NextPage = ({launchList, news}: any) => {

   
    return(<div>
        
    </div>)
}

export default launches;

export async function getServerSideProps(context: any) {

    var launches = await fetch("https://lldev.thespacedevs.com/2.2.0/launch/upcoming/").then(res => res.json()).then((data)=>{
      return data
    })
    var launchList = JSON.stringify(launches);
  
    var newsList = await fetch("https://api.spaceflightnewsapi.net/v3/articles").then(res => res.json()).then((data)=>{
      return data
    })
  
    var news = JSON.stringify(newsList)
  
    return{
      props: {launchList,news},
    }
  }