import {MaterialIcons} from '@expo/vector-icons';

import * as S from './styles';

type props = {
    Image1: any
    Image2: any

    Title1: any
    Title2: any

    Valor1: any
    Valor2: any
}

export default function Cards({Image1, Image2, Title1, Title2, Valor1, Valor2}: props) {

    return (<S.Container>
        <S.SubContainer>
            <S.Cards>
                <S.ImageContainer>
                    <S.Images source={Image1}/>
                </S.ImageContainer>
                <S.DescriptionContainer>
                    <S.Title>
                        {Title1}
                    </S.Title>
                    <S.Description>
                        <S.Valor>
                                {Valor1}
                        </S.Valor>
                        <MaterialIcons name={'favorite-outline'}
                            color={'black'}
                            size={30}/>
                    </S.Description>

                </S.DescriptionContainer>
            </S.Cards>
            <S.Cards>
                <S.ImageContainer>
                    <S.Images source={Image2}/>
                </S.ImageContainer>
                <S.DescriptionContainer>
                    <S.Title>
                        {Title2}
                    </S.Title>
                    <S.Description>
                        <S.Valor>
                          {Valor2}
                        </S.Valor>
                        <MaterialIcons name={'favorite-outline'}
                            color={'black'}
                            size={30}/>
                    </S.Description>

                </S.DescriptionContainer>
            </S.Cards>
        </S.SubContainer>
    </S.Container>)
}
