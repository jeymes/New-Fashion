import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
justify-content: center;
align-items: center;
background-color: white;
margin-top: 20px;
`;
export const SubContainer = styled.View`
width: 100%;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
border-radius: 10px;
`;
export const MiniCards = styled.Pressable`
width: 110px;
height: 150px;
justify-content: center;
align-items: center;
border-radius: 10px;
/* border: 1px solid red; */
`;
export const ImageContainer = styled.ImageBackground`
width: 100%;
height: 100%;
overflow: hidden;
border-radius: 10px;
justify-content: center;
align-items: center;
`;
export const ContainerTitle = styled.View`
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
background-color: #0007;
border-radius: 10px;
`;
export const  Title = styled.Text`
font-size: 18px;
font-weight: 900;
color: white;
`;