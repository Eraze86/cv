import styled from "styled-components";

export const Header = styled.header`
height: 5rem;
position: static;
margin: 0;
padding: 1rem;
text-align: center;
@media (min-width: 768px) {
    height: 8rem;
}
`

export const Nav= styled.nav`
text-align: center;
@media (min-width: 768px) {
    position: absolute;
    top: 1rem;
    right: 2rem;
}

`

