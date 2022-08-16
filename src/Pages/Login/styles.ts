import styled from "styled-components/native";

export const Container = styled.ImageBackground`
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
background-color: white;
`;
export const SubContainer = styled.View`
width: 80%;
height: 50%;
justify-content: center;
align-items: center;
background-color: #80808080;
border-radius: 10px;
`;
export const TitleContainer = styled.View`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
/* border: 1px solid red; */
`;
export const TextTitle = styled.Text`
text-align: center;
font-size: 25px;
font-weight: 900;
color: white;
/* color: 	#DC143C; */
`;

export const TextInput = styled.TextInput`
width: 80%;
height:40px;
text-align: center;
font-weight: 700;
color: black;
margin-top: 20px;
margin-bottom: 20px;
border: 1px solid white;
`;
export const ButtonContainer = styled.Button`
width: 80%;
height:40px;
text-align: center;
color: black;
`;