import styled from "styled-components";

export const Header = styled.header`
height: 4rem;
background-color: #012340;
color: white;

position: static;
margin: 0;
padding: 1rem;
`

export const Nav= styled.nav`
position: absolute;
top: 1rem;
right: 2rem;

`
export const H1= styled.h1`
position: absolute;
top: 4.5rem;
font-family: 'Dancing Script', cursive;
font-size: 2.5rem;
color: white;
margin: 0rem 1rem;

@media (min-width: 768px) {
    font-size: 4rem;
    margin: 0rem 2rem;
    top: 3rem;
 
}
`
