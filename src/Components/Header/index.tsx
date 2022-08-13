import * as S from './styles'
import {MaterialIcons} from '@expo/vector-icons';

export default function Header() {
    return (<S.Container>

        <S.SubContainer>
            <S.TextContainer>
                Hello,
            </S.TextContainer>
            <S.TextSubContainer>
                Jeymes
            </S.TextSubContainer>
        </S.SubContainer>

        <S.IconContainer>
            <MaterialIcons name='shopping-cart'
                color={'black'}
                size={30}/>
                <MaterialIcons name='notifications'
                color={'black'}
                size={30}/>
                
        </S.IconContainer>

    </S.Container>)
}
