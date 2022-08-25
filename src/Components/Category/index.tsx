import * as S from './styles';
import {MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

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

    OpenCategory: any
    OpenCategory1: any
    OpenCategory2: any
    OpenCategory3: any
}

export default function Category({ 
   TitleCategory,
    Icon, Icon1, Icon2, Icon3,
    TitleIcon, TitleIcon1, TitleIcon2, TitleIcon3, 
    OpenCategory, OpenCategory1, OpenCategory2, OpenCategory3,
}: props) {

const navigation = useNavigation();

function Category(){
    navigation.navigate(OpenCategory)
}
function Category1(){
    navigation.navigate(OpenCategory1)
}
function Category2(){
    navigation.navigate(OpenCategory2)
}
function Category3(){
    navigation.navigate(OpenCategory3)
}
    return (<S.Container>

        <S.Title>
            {TitleCategory}
        </S.Title>

        <S.SubContainer>

            <S.CardsCategory onPress={Category} >
                <FontAwesome5
                name={Icon}
                    color={'white'}
                    size={30}
                   />
                <S.SubTitle>

                    {TitleIcon}
                </S.SubTitle>
            </S.CardsCategory>

            <S.CardsCategory onPress={Category1} >
                <FontAwesome  name={Icon1}
                    color={'white'}
                    size={30}/>

                <S.SubTitle>

                    {TitleIcon1}
                </S.SubTitle>
            </S.CardsCategory>
            <S.CardsCategory onPress={Category2} >
                <MaterialIcons name={Icon2}
                    color={'white'}
                    size={30}/>

                <S.SubTitle>

                    {TitleIcon2}
                </S.SubTitle>
            </S.CardsCategory>
            <S.CardsCategory onPress={Category3} >
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
