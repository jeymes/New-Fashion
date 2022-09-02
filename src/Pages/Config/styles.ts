import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
flex: 1;
justify-content: center;
align-items: center;
background-color: white;
`;
export const ContainerPhoto = styled.View`
width: 100%;
height: 50%;
justify-content: flex-end;
align-items: center;
background-color: whitesmoke;
border: 0.5px solid gray;
`;
export const Photo = styled.View`
width: 100%;
margin-bottom: 15px;
border-radius: 100px;
justify-content: center;
align-items: center;
`;
export const PhotoPerson = styled.Image`
width: 100px;
height: 100px;
border-radius: 100px;
`;
export const TitleName = styled.Text`
font-size: 20px;
color: black;
margin-top: 5px;
`;
export const ContainerConfig = styled.View`
width: 100%;
height: 100%;
justify-content: flex-start;
align-items: center;
/* border: 1px solid red; */
`;
export const SubContainerConfig = styled.View`
width: 90%;
justify-content: flex-start;
align-items: center;
margin-top: 20px;
/* border: 1px solid red; */
`;
export const ContainerList = styled.View`
width: 100%;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: whitesmoke;
border: 0.5px solid gray;
border-radius: 10px;
margin-top: 10px;
`;
export const TitleConfig = styled.Text`
width: 88%;
padding: 15px 15px 15px 8px;
font-size: 20px;
color: black;
`;