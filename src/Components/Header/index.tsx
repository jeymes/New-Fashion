import * as S from './styles'
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';


export default function Header() {

    const navigation = useNavigation();

    function OpenCart() {
        navigation.navigate('cart')
    }
    function OpenNotificatios() {
        navigation.navigate('notifications')
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


        <S.ContainerIcon>
            <S.IconContainerCart onPress={OpenCart}>
                <MaterialIcons name='shopping-cart'
                    color={'black'}
                    size={30}/>
            </S.IconContainerCart>
            <S.IconContainerNotif onPress={OpenNotificatios}>

                <MaterialIcons name='notifications'
                    color={'black'}
                    size={30}/>
            </S.IconContainerNotif>

        </S.ContainerIcon>
    </S.Container>)
}
