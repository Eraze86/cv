import { Experience } from "./Experience";
import { Home } from "./Home";
import { Portfolio } from "./Portfolio";
import linkedin from "../assets/linkedin.png";
import git from "../assets/github-logo.png";

import logo from "../assets/T.png";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (<>
        <header id="home" className="h-28   ">
            <img className="p-2 absolute h-40 z-10" src={logo}></img>
          
                <div className="justify-center flex flex-col sm:flex-row h-full px-2 md:px-8 sm:items-center items-end sm:justify-end">
                <div className="flex mb-2 sm:mb-0">
                    <a className="mr-6 w-8 h-8" href="https://github.com/Eraze86"><img src={git}/></a>

                    <a className="sm:mr-6 w-8 h-8" href="https://www.linkedin.com/in/therese-rosvall"><img src={linkedin}/></a>
                    </div>
                <div className="text-right text-black">
                    <p>Tel: +46704664185</p>
                    <p>Email: Therese.rosvall@hotmail.se</p>
                </div>

            </div>
        </header>
        <main className=" bg-[#1D5769]">
            <Home />
            <Experience />
            <Portfolio />
      

        </main>
        <footer className="text-black h-20 text-center">
<p>Copyright @ Therese rosvall</p>
        </footer>
    </>)

}