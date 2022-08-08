import styled from "styled-components";

export const Section= styled.section`

display: flex;
flex-wrap: wrap;
margin: 1rem;
@media (min-width: 768px) {
    flex-wrap: nowrap;
    padding: 1rem;
    margin: 1rem;
 
}
`

export const SectionOverlap= styled.section`

display: flex;
flex-wrap: wrap;
margin: 1rem;
@media (min-width: 768px) {
    
    flex-wrap: nowrap;
    padding: 1rem;
    margin: 1rem;
 
}

`
export const Article = styled.article`
margin: 0rem 1rem 0rem 1rem;
width: 20rem;
@media (min-width: 768px) {
width: 50%;
    margin: 0rem 2rem;
 
}

`
export const ArticleCon = styled.article`
margin: 0rem 1rem 0rem 1rem;
width: 20rem;
font-size: 1.2rem;
@media (min-width: 768px) {
width: 30rem;
padding-top: 3rem;
    margin: auto;
    
 
}

`

export const P = styled.p`

margin: 2rem 0rem 0rem 0rem;
@media (min-width: 768px) {
    margin: 2rem 0rem 0rem 0rem;
 
}
`

export const P1 = styled.p`

color: #F2668B;
`
export const A = styled.a`

color: #F2668B;
text-decoration: none;
:hover{
    color: #03A688;
}
@media (min-width: 768px) {
   
 
}
`
