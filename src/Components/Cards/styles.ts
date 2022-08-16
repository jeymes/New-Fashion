import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
justify-content: center;
align-items: center;
`;
export const SubContainer = styled.View`
width: 100%;
height: 300px;
justify-content: space-evenly;
flex-direction: row;
align-items: center;
`;
export const Cards = styled.View`
width: 45%;
height: 290px;
border-radius: 10px;
justify-content:space-around;
align-items: center;
border: 1px solid gray;
`;
export const ImageContainer = styled.View`
width: 90%;
height: 70%;
border-radius: 10px;
justify-content: center;
align-items: center;
`;
export const Images = styled.Image`
width: 100%;
height: 100%;
`;
export const DescriptionContainer = styled.View`
width: 90%;
height: 25%;
border-radius: 10px;
justify-content: space-around;
align-items: center;
`;
export const Description = styled.View`
width: 90%;
flex-direction: row;
border-radius: 10px;
justify-content: space-between;
align-items: center;
`;
export const  Valor = styled.Text`
font-size: 15px;
font-weight: 900;
color:  #DC143C;
`;
export const  Title = styled.Text`
font-size: 12px;
font-weight: 900;
`;



