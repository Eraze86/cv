import styled from "styled-components";

export const Section= styled.section`
color: black;
padding: 1rem;
margin: 1rem;
@media (min-width: 768px) {
    position: static;
}
`
export const SectionPort= styled.section`
padding: 1rem;
margin: 1rem;
`

export const SectionEd= styled.section`
display: flex;
padding: 1rem;
margin: 1rem;
flex-direction: column;
@media (min-width: 768px) {
    flex-direction: row;
}
`

export const ArticleFront = styled.article`

background: #FFB4A2;
box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.5);
padding: 1rem 2rem;
margin: 1rem;
@media (min-width: 768px) {
    
 width: 40vw;
    left: 4rem;
   
    }
}
`
export const ArticleLia = styled.article`

background: #6D6875;
box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.5);
margin: auto;
@media (min-width: 768px) {
    position: absolute;
    right: 0rem;
    top: 12rem;
    border-radius: 1rem 0rem 0rem 1rem;
    }
    H3{
        margin: 0;
    }
}
`
export const ArticleAboute = styled.article`

padding: 1rem 2rem;

background: #FFCDB2;
box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.5);
@media (min-width: 768px) {
    position: absolute;
    margin: 1rem;
    width: 35vw;
    right: 0rem;
    top: 25rem;
    }
`

export const ArticlePort = styled.article`
display: flex;
flex-direction: column;


@media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
   
    
}

`

