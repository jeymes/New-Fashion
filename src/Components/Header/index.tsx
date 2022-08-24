import * as S from './styles'
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Header() {

    const navigation = useNavigation();

    function OpenScreen(){
        navigation.navigate('cart')
    }


    return (<S.Container>

        <S.SubContainer>
            <S.TextContainer>
                Hello,
            </S.TextContainer>
            <S.TextSubContainer>
                Jeymes
            </S.TextSubContainer>
        </S.SubContainer>


        <S.IconContainer onPress={OpenScreen} >
            <MaterialIcons
                name='shopping-cart'
                color={'black'}
                size={30}/>
                <MaterialIcons name='notifications'
                color={'black'}
                size={30}/>
                
        </S.IconContainer>

    </S.Container>)
}
