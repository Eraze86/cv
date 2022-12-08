import styled from "styled-components";

export const Div = styled.div`

display: flex;
flex-direction: column;
margin: 1rem;
border: solid 2px #6D9886;
padding: 1rem;
border-radius: 1rem;
justify-content: space-between;
align-items: center;
width: 80%;
  padding: 1rem;

@media (min-width: 768px) {
    width: 10rem;
    height: 12rem;
    
}`

export const DivMenu = styled.div`
position: absolute;
z-index: 10;
top: -2rem;
display: flex;
flex-direction: column;
padding: 0.5rem;
width: 100vw;;
background-color: #6D9886;
align-items: flex-start;
@media (min-width: 768px) {
   display: none;
}`

export const Construct = styled.div`
position: absolute;
top: 6rem;
text-align: center;
width: 100vw;
font-size: 2rem;
@media (min-width: 768px) {
    top: 10rem;
}`

export const SingelPage = styled.div`
display: flex;
justify-content: center;
width: 90%;
margin: 1rem;
padding-bottom: 2rem;
background-color: #282828;
border: solid 2px #6D9886;
border-radius: 1rem;
position: fixed;
z-index: 0;
top: 5rem;
@media (min-width: 768px) {
  Width: 90vw;
  min-height: 70vh;
 
}`
export const Text = styled.div`

text-align: center;
@media (min-width: 768px) {
 
}`

export const ImgDiv = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

@media (min-width: 768px) {

}`

