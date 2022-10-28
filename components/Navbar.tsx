import Link from "next/link";
import { Fragment } from "react";

const Navbar = () => {

    const navList = [
        {
            id: 1,
            name: "Home",
            url: "home",
        },
        {
            id: 2,
            name: "Launches",
            url: "home",
        },
        {
            id: 3,
            name: "News",
            url: "home",
        },
        {
            id: 4,
            name: "History",
            url: "home",
        },
        {
            id: 4,
            name: "Sign in",
            url: "home",
        },
    ]

    return(<Fragment>
        <div id="content" className="pt-10 px-16">
            <ul className="lg:flex lg:gap-4">
                {navList.map((element)=>{
                    return(<li className="" key={element.id}>
                        <Link href={element.url}>{element.name}</Link>
                    </li>)
                })}
            </ul>
        </div>
    </Fragment>)
}

export default Navbar;