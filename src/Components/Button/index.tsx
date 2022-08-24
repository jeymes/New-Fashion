import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export function Button() {

    const navigation = useNavigation();

    function OpenScreen(){
        navigation.navigate('cart')
    }

    return (
        <S.Container>
           
           <S.SubTitle onPress={OpenScreen} >
            <S.Title>
                Teste
            </S.Title>
           </S.SubTitle>

        </S.Container>
    )
}
