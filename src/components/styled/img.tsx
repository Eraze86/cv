import styled from "styled-components";

export const Logo= styled.img`
flex: display;
height: 5rem;
width: 5rem;
margin: 0rem 0.5rem;
`
export const ImgNav= styled.img`
height: 2rem;
width: 2rem;
margin: 0rem 0.5rem;
`
export const ImgLeaf= styled.img`
position: relative;
height: 9rem;
width: 100vw;
object-fit: cover;
z-index: -1;
@media (min-width: 768px) {
    height: 20rem;
}`
export const ImgMe= styled.img`
margin: 0rem 1rem 2rem 2rem;
border-radius: 10px;
height: 5rem;
width: 5rem;
`
export const ImgPort= styled.img`
width: 15rem;
object-fit: cover;
padding: 1rem;
@media (min-width: 768px) {
    width: 10rem;
}`


export const Img= styled.img`
width: 1.5rem;
height: 1.5rem;
margin-right: 1rem;
z-index: 9;
object-fit: contain;
background-color: #6D9886;
border: solid 1px black;
border-radius: 1rem;
padding: 0.5rem;
}`



export const ImgPic = styled.img`


width: 90%;
margin: 0.5rem;
@media (min-width: 768px) {
    width: 70%;

}`