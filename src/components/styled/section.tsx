import styled from "styled-components";

export const SectionHome= styled.section`

display: flex;
flex-direction: column;
width: 100%;
@media (min-width: 768px) {
    flex-direction: row;
    margin: 1rem;
    }
}`

export const SectionPort= styled.section`
Position: relative;
scroll-margin-top: 4rem;
display: flex;
flex-direction: row;
@media (min-width: 768px) {
padding: 1rem;
margin: 1rem;

}`

export const SectionEd= styled.section`
scroll-margin-top: 4rem;
display: flex;
flex-direction: column;
@media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    margin: 1rem;
    padding: 2rem;
}`

export const Article = styled.article`
margin: 1rem;
border: solid 2px #6D9886;
padding: 1rem;
border-radius: 1rem;
font-weight: 400;
@media (min-width: 768px) {
    margin: 2rem;
    margin: 0rem 1rem 2rem 1rem;
    width: 20rem;
    }
}`