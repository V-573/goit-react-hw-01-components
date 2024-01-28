import styled from 'styled-components';

export const SectionContainer = styled('section')`
display: flex;
height:200px;
width:400px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
margin-top: 30px;
text-align:center;
flex-direction: column;
align-items:center;

`;

export const TitleSection = styled('h2')`
font-size:40px;
text-transform: uppercase;
`;

export const ListStats = styled('ul')`
display:flex;
padding-inline-start:0;
font-size:24px;
justify-content: space-around;
margin: auto 0 0; 
width:100%;

`;

export const ListStatsItem = styled('li')`
list-style-type:none;
width:20%;
padding:10px;

`;


export const SpanItem = styled('span')`

display:block;
text-align:center;
margin-top:5px;



`;

