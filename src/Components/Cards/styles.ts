import styled from "styled-components/native";

export const Container = styled.View`
padding: 5px 6px 5px;
justify-content: center;
align-items: center;
`;
export const SubContainer = styled.View`
height: 300px;
justify-content: center;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
`;
export const Cards = styled.Pressable`
width: 180px;
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
/* border: 1px solid red; */
`;
export const Description = styled.View`
width: 100%;
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
text-align: center;
width: 100%;
font-size: 13px;
font-weight: 900;
`;
export const ContainerIcon = styled.Pressable`
justify-content: center;
align-items: center;
`;



