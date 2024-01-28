import styled from 'styled-components';


export const FriendsList = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    padding-inline-start: 0;
    list-style: none;
    margin-top: 30px;
`;




export const FriendsListItem = styled.li` 
    display: flex;
    align-items: center;
    width: 400px;
    height: 130px;
    margin-bottom: 20px;
    border-radius: 10px;
   box-shadow: 2px 3px 5px 0px rgba(114,110,143,1);
`;


export const FriendImage = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-right: 20px; /* Ajusta según sea necesario */
`;



export const SpanItem = styled('span')`

display:block;
text-align:center;
margin-top:5px;
color:black;



`;

export const SpanItemPunto = styled('span')`
display:block;
text-align:center;
margin:20px;
border-radius:25px;
font-size:20px;
background-color: red;
width:25px;
color:transparent;




`;