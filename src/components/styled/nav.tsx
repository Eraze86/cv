import styled from "styled-components";

export const Nav= styled.nav`
background: rgba(0, 0, 0, 0.48);
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
background: rgba(0, 0, 0, 0.48);
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