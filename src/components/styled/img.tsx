import styled from "styled-components";

export const ImgNav= styled.img`
height: 2rem;
width: 2rem;
margin: 0rem 0.5rem;
`

export const ImgMe= styled.img`
display: none;

@media (min-width: 768px) {
    position: absolute;
    top: 8rem;
    right: 7rem;
    border: 2px solid #03A688;
    border-radius: 20%;
    display: inline;
    height: 15rem;
    width: 15rem;
 
}
`
export const ImgPort= styled.img`

width: 15rem;
padding: 1rem;
@media (min-width: 768px) {

    width: 30rem;
 
}
`