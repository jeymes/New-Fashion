import * as S from './styles';
import {MaterialIcons} from '@expo/vector-icons';

type props = {
    Icon: any
    Icon1: any
    Icon2: any
    Icon3: any

    TitleIcon: any
    TitleIcon1: any
    TitleIcon2: any
    TitleIcon3: any

    TitleCategory: string
}

export default function Category({ 
    TitleCategory,
    Icon, Icon1, Icon2, Icon3,
    TitleIcon, TitleIcon1, TitleIcon2, TitleIcon3,
}: props) {


    return (<S.Container>

        <S.Title>
            {TitleCategory}
        </S.Title>

        <S.SubContainer>

            <S.CardsCategory>
                <MaterialIcons name={Icon}
                    color={'white'}
                    size={30}/>

                <S.SubTitle>

                    {TitleIcon}
                </S.SubTitle>
            </S.CardsCategory>

            <S.CardsCategory>
                <MaterialIcons name={Icon1}
                    color={'white'}
                    size={30}/>

                <S.SubTitle>

                    {TitleIcon1}
                </S.SubTitle>
            </S.CardsCategory>
            <S.CardsCategory>
                <MaterialIcons name={Icon2}
                    color={'white'}
                    size={30}/>

                <S.SubTitle>

                    {TitleIcon2}
                </S.SubTitle>
            </S.CardsCategory>
            <S.CardsCategory>
                <MaterialIcons name={Icon3}
                    color={'white'}
                    size={30}/>

                <S.SubTitle>

                    {TitleIcon3}
                </S.SubTitle>
            </S.CardsCategory>

        </S.SubContainer>
    </S.Container>)
}
