import { FC } from "react";
import { motion } from "framer-motion";
const FeatArticles: FC<any>= (props) => {

     let article = props.event;
     let summary = article.summary;
     let title = article.title;

     if(title.length > 55){
        title = title.substr(0,42) + '...'
     }

     if(article.summary.length > 70){
        summary = article.summary.substr(0,120) + '...'
     }

     const variants = {
        rest: {
            x: 0,
            transition: {
              duration: 4,
              type: "tween",
              ease: "easeIn"
            }
          },
        hover: {
            scale: 0.97,
            transition: { type: "spring", duration: 0.8, ease: "linear" }
        }
    }

    //  console.log(article)
    return(<motion.a target="blank" href={article.url} variants={variants} whileHover="hover" initial="rest" key={article.id} className="bg-dark w-full h-52 rounded-3xl text-white flex place-content-center">
    <div className="w-full relative overflow-hidden rounded-3xl shadow-lg cursor-pointer">
	<img className="opacity-25 object-cover w-full h-full" src={article.imageUrl} alt="company logos"/>

	<div className="absolute top-0 left-0 px-6 py-4">
	  <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">{title}</h4>
	  <p className="leading-normal text-white">{(summary)}</p>
	</div>
  </div>

</motion.a>)
}

export default FeatArticles;