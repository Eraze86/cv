import { Link, Outlet } from "react-router-dom";
import { H1, Header, Nav } from "./styled/header";
import house from "../img/house.jpg"
import Edu from "../img/Edu.jpg"
import phone from "../img/phone.jpg"
import port from "../img/portfolio.jpg"
import { ImgNav } from "./styled/img";
export function Layout(){
    return(<>
    <Header>

        <Nav>
<Link to="/"><ImgNav src={house}/></Link>
<Link to="/portfolio"><ImgNav src={port}/></Link>
<Link to="/education"><ImgNav src={Edu}/></Link>
<Link to="/contact"><ImgNav src={phone}/></Link>

</Nav>
    </Header>
    <H1>Therese Rosvall</H1>
    <Outlet></Outlet>
    
    </>)

}