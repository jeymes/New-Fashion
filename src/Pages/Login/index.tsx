import * as S from './styles'
import {useNavigation} from '@react-navigation/native';
import {Alert, Modal} from 'react-native';
import {useState} from 'react';


export function Login() {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    function OpenScreenHome() {
        navigation.navigate('tab')
    }
    function OpenScreenCadastro() {
        navigation.navigate('cadastro')
    }
    return (<S.Container source={
        require('../../Assets/fashion.jpg')
    }>

        <S.SubContainer>
            <S.TitleContainer>
                <S.TextTitle>
                    Login
                </S.TextTitle>
            </S.TitleContainer>
            <S.TextInput placeholderTextColor='#fff9' placeholder="E-mail"/>

            <S.TextInput placeholderTextColor='#fff9' placeholder="Senha"/>
            <S.ButtonContainer>
                <S.Button onPress={OpenScreenHome}>
                    <S.ButtonTitle>
                        Entrar
                    </S.ButtonTitle>
                </S.Button>
                <S.Button onPress={OpenScreenCadastro}>
                    <S.ButtonTitle >
                        Cadastrar
                    </S.ButtonTitle>
                </S.Button>
            </S.ButtonContainer>

            <S.ButtonLog onPress={
                () => setModalVisible(true)
            }>
                <S.TextSenha>
                    Esqueci minha senha
                </S.TextSenha>
            </S.ButtonLog>
        </S.SubContainer>

        <S.ContainerModal>
            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={
                    () => {
                        Alert.alert("Envio Concluido...");
                        setModalVisible(!modalVisible);
                    }
            }>
                <S.ContainerModal>
                    <S.SubContainerModal>
                        <S.Modal>
                            <S.TextTitleModal>
                                Recuperar Senha
                            </S.TextTitleModal>
                            <S.TextInputModal placeholderTextColor='#1119' placeholder="E-mail"/>
                            <S.ButtonModal onPress={() => setModalVisible(false)}>
                                <S.ButtonTitle >
                                    Enviar
                                </S.ButtonTitle>
                            </S.ButtonModal>
                        </S.Modal>
                    </S.SubContainerModal>
                </S.ContainerModal>

            </Modal>
        </S.ContainerModal>
    </S.Container>)
}
