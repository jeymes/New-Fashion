import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
height: 15%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: white;
`;
export const SubContainer = styled.View`
width: 50%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 30px;
`;
export const ContainerIcon = styled.View`
width: 30%;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;
export const IconContainerCart = styled.Pressable`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 30px;
`;
export const IconContainerNotif = styled.Pressable`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 30px;
`;
export const TextContainer = styled.Text`
text-align: center;
font-size: 19px;
font-weight: 700;
color: 	#DC143C;
`;
export const TextSubContainer = styled.Text`
text-align: center;
font-size: 19px;
font-weight: 700;
color: black;
margin-left: 5px;
`;