import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
padding: 15px;
justify-content: center;
align-items: center;
`;
export const ButtonContainer = styled.Pressable`
width: 100%;
justify-content: center;
margin-top: 5px;
align-items: center;
background-color: white;
border-radius: 10px;
border: 1px solid gray;
`;
export const ContainerDiv = styled.View`
width: 100%;
justify-content: center;
align-items: center;
`;
export const ContainerArow = styled.View`
width: 370px;
justify-content: space-between;
align-items: center;
flex-direction: row;
overflow: hidden;
`;
export const ContainerImage = styled.View`
padding: 5px;
justify-content: center;
align-items: center;
flex-direction: row;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;

`;
export const Image = styled.Image`
width:100px;
height: 100px;
`;
export const ContainerText = styled.View`
justify-content: center;
align-items: flex-start;
`;
export const Text = styled.Text`
align-items: center;
font-size: 15px;
color: black;
`;
export const ContainerQuant = styled.Pressable`
margin-right: 10px;
width: 30px;
height: 50px;
border-radius: 10px;
justify-content: center;
align-items: center;
background-color: green;
`;
export const TextQuant = styled.Text`
color: white;
font-size: 17px;
font-weight: 500;
`;

// Hidden

export const ButtonHiddenContainer = styled.Pressable`
width: 100%;
height: 100%;
justify-content: center;
align-items: flex-end;
margin-top: 5px;
`;
export const ContainerHiddenDiv = styled.View`
background-color: red;
border-radius: 10px;
width: 70px;
height: 70px;
justify-content: center;
align-items: center;
`;