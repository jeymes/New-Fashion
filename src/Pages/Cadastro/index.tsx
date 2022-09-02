import * as S from './styles'
import { useNavigation } from '@react-navigation/native';


export function Cadastro() {

    const navigation = useNavigation();

    function OpenScreen(){
        navigation.navigate('login')
    }
    return (
        <S.Container source={require('../../Assets/fashion2.jpg')}>

            <S.SubContainer>
                <S.TitleContainer>
                    <S.TextTitle>
                        Cadastro
                    </S.TextTitle>
                </S.TitleContainer>
                <S.TextInput placeholderTextColor='#fff9' placeholder="Nome"/>
                <S.TextInput placeholderTextColor='#fff9' placeholder="Sobrenome"/>
                <S.TextInput placeholderTextColor='#fff9' placeholder="E-mail"/>
                <S.TextInput  placeholderTextColor='#fff9' placeholder="Senha"/>
                <S.ButtonContainer>
                <S.Button onPress={OpenScreen}>
                    <S.ButtonTitle  >
                        Salvar
                    </S.ButtonTitle>
                </S.Button>
             
                </S.ButtonContainer>

                <S.ButtonLog onPress={OpenScreen}>
                    <S.TextSenha>
                        Já tenho uma conta
                    </S.TextSenha>
                </S.ButtonLog>
            </S.SubContainer>
        </S.Container>
    )
}
