import * as S from './styles'

const img6 = {
    uri: 'https://img.freepik.com/fotos-gratis/menina-bonita-sorridente-e-seu-namorado-bonito-em-roupas-de-verao-casual-homem-carregando-sua-namorada-nas-costas-e-ela-levantando-as-maos_158538-5439.jpg?w=2000'
}

export function Login() {
    return (<S.Container  source={img6}>

        <S.SubContainer>
            <S.TitleContainer>
                <S.TextTitle>
                    Login
                </S.TextTitle>
            </S.TitleContainer>
            <S.TextInput  ></S.TextInput>

            <S.TextInput></S.TextInput>

            <S.ButtonContainer title='Entrar'
            color='#DC143C' />
        </S.SubContainer>
    </S.Container>)
}
