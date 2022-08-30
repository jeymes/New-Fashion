import * as S from './styles'
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react'
import {useRoute} from '@react-navigation/native'
import { Button } from '../../Components/Button'

type ParamsProps ={
    item: string
}

export function PagProductor() {
    const [value, setValue] = useState(0);
    const route = useRoute();
    const {item} = route.params as ParamsProps
    return (<S.Container>
        <S.SubContainerProductor>
            <S.ContainerImagem source={item}/>
           
        </S.SubContainerProductor>
        <S.SubContainerDescriptions>
            <S.ViewProductor>
                <S.Contador>
                    <NumericInput
                    // iconStyle={{ color: 'white' }} 
                     value={value} 
                     onChange={value => setValue(value)}
                     onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                     totalWidth={130} 
                     totalHeight={45} 
                     iconSize={25}
                     maxValue={15}
                     minValue={0}
                     step={1}
                     valueType='real'
                     rounded 
                     textColor='#DC143C' 
                     rightButtonBackgroundColor='white' 
                     leftButtonBackgroundColor='white'/>
                </S.Contador>
                <S.ContainerTitle>
                    <S.Title>
                        $ 549,00
                    </S.Title>
                </S.ContainerTitle>
            </S.ViewProductor>
            <S.ViewDescrption>
                <S.TitleDescription>
                    Description
                </S.TitleDescription>
                <S.DescriptionProductor>
                    Lorem Ipsum é simplesmente uma simulação de 
                    texto da indústria tipográfica e de impressos,
                    e vem sendo utilizado desde o século XVI,
                    quando um impressor desconhecido pegou uma
                    bandeja de tipos e os embaralhou para fazer
                    um livro de modelos de tipos.
                </S.DescriptionProductor>
            </S.ViewDescrption>
            <Button ButtonScreenPag='cart' ButtonTitle='Add to Cart' />
        </S.SubContainerDescriptions>
    </S.Container>)
}
