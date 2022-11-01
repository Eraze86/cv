import styled from "styled-components";

export const Section= styled.section`
color: black;
padding: 1rem;
margin: 1rem;
@media (min-width: 768px) {
    position: static;
}
`
export const SectionMe= styled.section`
color: black;
padding: 1rem;
margin: 1rem;
display: flex;
flex-direction: column;

@media (min-width: 768px) {
    flex-direction: row;
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

background:#dbb4bc;
box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.5);
padding: 1rem 2rem;
margin: 1rem;
@media (min-width: 768px) {
    

   
    }
}
`
export const ArticleLia = styled.article`
text-align: center;
background: #6D6875;
box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.5);
margin: auto;
@media (min-width: 768px) {
    position: absolute;
    right: 1rem;
    top: 4rem;
    text-align: left;
   
    }
    H3{
        margin: 0;
    }
}
`
export const ArticleAboute = styled.article`

padding: 1rem 2rem;
margin: 1rem;
background: #e8cabb;
box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.5);
@media (min-width: 768px) {
    
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

