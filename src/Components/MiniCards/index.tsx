import * as S from './styles';

type props ={
    CategoryTitle1: string
    CategoryTitle2: string
    CategoryTitle3: string

    CategoryImage1: any
    CategoryImage2: any
    CategoryImage3: any
}
export function MiniCards({
    CategoryTitle1, 
    CategoryTitle2, 
    CategoryTitle3,

    CategoryImage1,
    CategoryImage2,
    CategoryImage3,
}: props) {

    return (
        <S.Container>
            <S.SubContainer>

                <S.MiniCards>
                    <S.ImageContainer source={CategoryImage1}>
                        <S.ContainerTitle>
                        <S.Title>
                           {CategoryTitle1}
                        </S.Title>
                        </S.ContainerTitle>
                    </S.ImageContainer>
                </S.MiniCards>

                <S.MiniCards>
                    <S.ImageContainer source={CategoryImage2}>
                        <S.ContainerTitle>
                        <S.Title>
                       {CategoryTitle2}
                        </S.Title>
                        </S.ContainerTitle>
                    </S.ImageContainer>
                </S.MiniCards>

                <S.MiniCards>
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
