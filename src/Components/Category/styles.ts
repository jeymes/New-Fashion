import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
height: 110px;
justify-content: space-around;
align-items: center;
padding: 10px 10px;
/* border: 1px solid red; */
`;
export const Title = styled.Text`
width: 95%;
height: 25px;
color: black;
font-weight: 600;
/* border: 1px solid red; */
`;
export const SubContainer = styled.View`
width: 100%;
height: 80px;
flex-direction: row;
justify-content: space-around;
align-items: center;
/* border: 1px solid red; */
`;
export const CardsCategory = styled.Pressable`
width: 80px;
height: 60px;
background-color: #DC143C;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
/* border: 1px solid red; */
`;
export const SubTitle = styled.Text`
color: white;
font-size: 10px;
font-weight: 600;
/* border: 1px solid red; */
`;
