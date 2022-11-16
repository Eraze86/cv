import styled from "styled-components";


export const Header = styled.header`
height: 9rem;
margin: 0;
text-align: center;
@media (min-width: 768px) {
    height: 20rem;
  
}
`
export const HeaderDiv = styled.header`
height: 9rem;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #141C22 99.99%, #393E46 100%);
z-index: 2;
@media (min-width: 768px) {
    height: 20rem;

    
}
`
export const Nav= styled.nav`
position: fixed;
top: 0rem;
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
margin-top: 2rem;
height: 3rem;

@media (min-width: 768px) {
    display: none;
}
`
export const NavBar= styled.nav`
display: none;
@media (min-width: 768px) {
position: fixed;
top: 0rem;
display: flex;
width: 100vw;
height: 3rem;
justify-content: center;
align-items: center;
margin-top: 2rem;  
}
`

