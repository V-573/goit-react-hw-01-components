import styled from 'styled-components'; //Este archivo representa los "componentes estilizados" para definir los estilos del HTML
// npm install styled-components;  con este fragmento de codigo desde la consola debo instalar styled-components


export const ProfileContainer = styled('div')`
background-color: white;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items:center;


height:500px;
width:400px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
padding:35px 0 0 ;

`;
//justify-content: center; 



export const ProfileDescription = styled('div')`
text-align:center;
`;

export const ProfileText = styled('p')`
    font-size: 24px;
     


`;


export const ProfileImage = styled('img')`
border-radius:50%;
height:150px;
width:150px;
border:1px solid black;



`;

export const ProfileList = styled('ul')`
display: flex;
font-size: 24px;
justify-content:space-around;
margin: auto 0 0; 
padding-inline-start:0;
width:100%


`;
//margin: auto 0 0;  con esta linea logre posicionar el Ul en la parte inferior del contenedor
// teniendo en cuenta que al contenedor le coloque las siguientes estilos:
//flex-direction: column;
//align-items:center;
//Aca mismo con width: 100% logre que los 3 li se acomodaran a lo largo del Ul
//


export const ProfileListItem = styled('li')`
list-Style-Type:none;
width:30%;
border:1px solid #ccc;
padding:10px;
text-align: center;
height:100px;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;





`;


export const SpanItem = styled('span')`

display:block;
text-align:center;
margin-top:5px;



`;