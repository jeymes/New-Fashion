import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

type props = {
    ButtonTitle: any
    ButtonScreenPag: any
}

export function Button({ButtonTitle, ButtonScreenPag}: props) {

    const navigation = useNavigation();

    function OpenScreen(){
        navigation.navigate(ButtonScreenPag)
    }

    return (
        <S.Container>
           
           <S.SubTitle onPress={OpenScreen} >
            <S.Title>
                {ButtonTitle}
            </S.Title>
           </S.SubTitle>

        </S.Container>
    )
}
