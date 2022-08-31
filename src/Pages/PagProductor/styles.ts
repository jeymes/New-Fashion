import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
flex: 1;
justify-content: space-between;
align-items: center;
background-color: white;
/* background-color: #DC143C; */


`;
export const SubContainerProductor = styled.View`
width: 100%;
height: 40%;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
`;
export const ContainerImagem = styled.Image`
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
`;
export const SubContainerDescriptions = styled.View`
width: 100%;
height: 1000px;
justify-content: flex-start;
align-items: center;
border-radius: 50px;
background-color: whitesmoke;
/* border: 1px solid gray; */

`;
export const ViewProductor = styled.View`
width: 90%;
height: 100px;
flex-direction: row;
justify-content: space-between;
align-items: center;
/* border: 1px solid red; */
`;
export const Contador = styled.View`
width: 50%;
justify-content: center;
align-items: flex-start;
/* border: 1px solid red; */
`;
export const ContainerTitle = styled.View`
width: 50%;
justify-content: center;
align-items: flex-end;
/* border: 1px solid red; */
`;
export const Title = styled.Text`
font-size: 20px;
color: black;
font-weight: 700;
`;
export const TitleSemEstoque = styled.Text`
font-size: 20px;
color: red;
font-weight: 700;
`;
export const ViewDescrption = styled.View`
width: 90%;
justify-content: center;
align-items: flex-start;
/* border: 1px solid red; */
`;
export const TitleDescription = styled.Text`
font-size: 15px;
color: #DC143C;
padding: 5px;
font-weight: 700;
`;
export const DescriptionProductor = styled.Text`
width: 100%;
font-size: 15px;
color: black;
padding: 5px;
`;
export const TitleButton = styled.Text`
font-size: 20px;
color: white;
font-weight: 600;
/* border: 1px solid red; */
`;
export const SubTitle = styled.Pressable`
margin-top: 50px;
align-items: center;
justify-content: center;
background-color: #111;
border-radius: 10px;
width: 300px;
height: 50px;
`;