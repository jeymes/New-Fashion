import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
height: 100%;
justify-content: flex-start;
align-items: center;
background-color: white;
/* border: 1px solid red; */
`;
export const SubContainer = styled.View`
justify-content: center;
align-items: center;
`;
export const ButtonContainer = styled.Pressable`
width: 100px;
height: 100px;
justify-content: center;
align-items: center;
background-color: white;
`;

export const ContainerTotal = styled.View`
width: 370px;
height: 40px;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-radius: 55px;
border: 1px solid gray;
`;
export const ContainerText = styled.View`
width: 100px;
height: 40px;
justify-content: center;
align-items: center;
`;
export const TextTotal = styled.Text`
color: black;
font-weight: 700;
font-size: 15px;
`;
export const ContainerValor = styled.View`
width: 110px;
height: 40px;
border-radius: 50px;
justify-content: center;
align-items: center;
background-color: green;
`
export const TextValor = styled.Text`
font-weight: 500;
color: white;
font-size: 15px;
`;