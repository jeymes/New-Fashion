import styled from "styled-components/native";

export const Container = styled.ImageBackground`
width: 100%;
flex: 1;
justify-content: center;
align-items: center;
`;
export const SubContainer = styled.View`
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
background-color: #0009;
border-radius: 10px;
`;
export const TitleContainer = styled.View`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 50px;
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
width: 90%;
height: 50px;
border-radius: 12px;
font-size: 14px;
padding: 7px 0;
padding-left: 20px;
margin-bottom: 12px;
border: 1px solid white;
color:white;
`;
export const ButtonContainer = styled.View`
width: 100%;
padding-top: 20px;
padding-bottom: 20px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`;
export const Button = styled.Pressable`
background-color: #DC143C;
border-radius: 10px;
width: 250px;
height: 40px;
justify-content: center;
align-items: center;
`;
export const ButtonTitle = styled.Text`
color: white;
font-size: 17px;
font-weight: 700;
text-align: center;
`;
export const ButtonLog = styled.Pressable`
border-radius: 10px;
width: 130px;
height: 35px;
justify-content: center;
align-items: center;
`;
export const TextSenha = styled.Text`
color: white;
font-size: 12px;
font-weight: 700;
text-align: center;
`;