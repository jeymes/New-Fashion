import * as S from './styles';
import { useNavigation } from '@react-navigation/native'

type props ={
    CategoryTitle1: string
    CategoryTitle2: string
    CategoryTitle3: string

    CategoryImage1: any
    CategoryImage2: any
    CategoryImage3: any

    OpenCategory: any
    OpenCategory1: any
    OpenCategory2: any
}
export function MiniCards({
    CategoryTitle1, CategoryTitle2, CategoryTitle3,

    CategoryImage1, CategoryImage2, CategoryImage3,

    OpenCategory, OpenCategory1, OpenCategory2,

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

    return (
        <S.Container>
            <S.SubContainer>

                <S.MiniCards onPress={Category} >
                    <S.ImageContainer source={CategoryImage1}>
                        <S.ContainerTitle>
                        <S.Title>
                           {CategoryTitle1}
                        </S.Title>
                        </S.ContainerTitle>
                    </S.ImageContainer>
                </S.MiniCards>

                <S.MiniCards onPress={Category1} >
                    <S.ImageContainer source={CategoryImage2}>
                        <S.ContainerTitle>
                        <S.Title>
                       {CategoryTitle2}
                        </S.Title>
                        </S.ContainerTitle>
                    </S.ImageContainer>
                </S.MiniCards>

                <S.MiniCards onPress={Category2} >
                    <S.ImageContainer source={CategoryImage3}>
                        <S.ContainerTitle>
                        <S.Title>
                           {CategoryTitle3}
                        </S.Title>
                        </S.ContainerTitle>
                    </S.ImageContainer>
                </S.MiniCards>

            </S.SubContainer>


        </S.Container>
    )
}
