import * as S from './styles'
import { useNavigation } from '@react-navigation/native';


const img6 = {
    uri: 'https://img.freepik.com/fotos-gratis/menina-bonita-sorridente-e-seu-namorado-bonito-em-roupas-de-verao-casual-homem-carregando-sua-namorada-nas-costas-e-ela-levantando-as-maos_158538-5439.jpg?w=2000'
}

export function Login() {

    const navigation = useNavigation();

    function OpenScreen(){
        navigation.navigate('tab')
    }
    return (
        <S.Container source={img6}>

            <S.SubContainer>
                <S.TitleContainer>
                    <S.TextTitle>
                        Login
                    </S.TextTitle>
                </S.TitleContainer>
                <S.TextInput placeholderTextColor='#fff9' placeholder="E-mail"/>

                <S.TextInput  placeholderTextColor='#fff9' placeholder="Senha"/>
                <S.ButtonContainer>
                <S.Button>
                    <S.ButtonTitle onPress={OpenScreen} >
                        Entrar
                    </S.ButtonTitle>
                </S.Button>
                <S.Button>
                    <S.ButtonTitle>
                        Cadastrar
                    </S.ButtonTitle>
                </S.Button>
                </S.ButtonContainer>

                <S.TextSenha>
                    Esqueci minha senha
                </S.TextSenha>
            </S.SubContainer>
        </S.Container>
    )
}
