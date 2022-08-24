import * as S from './styles'
import { useNavigation } from '@react-navigation/native';



export default function Cart(){

    const navigation = useNavigation();

    function OpenScreen(){
        navigation.navigate('home')
    }
   
    return(
        <S.Container>
           <S.ButtonContainer onPress={OpenScreen}  >
           <S.ContainerText>
                Cart
            </S.ContainerText>
           </S.ButtonContainer>
        </S.Container>
    )
}