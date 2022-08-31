import * as S from './styles'
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
// type ParamsProps ={
//     item: string
// }

export function PagProductor({ route }) {

    const [value, setValue] = useState(0);

    const navigation = useNavigation();

    const product = route.params;

    return (<S.Container>
        <S.SubContainerProductor>
            <S.ContainerImagem source={{ uri: product.image }} />

        </S.SubContainerProductor>
        <S.SubContainerDescriptions>
            <S.ViewProductor>
                <S.Contador>
                    {product.countInstock > 0 ? (
                        <NumericInput

                            // iconStyle={{ color: 'white' }} 
                            value={value}
                            onChange={value => setValue(value)}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={130}
                            totalHeight={45}
                            iconSize={25}
                            maxValue={product.countInstock}
                            minValue={0}
                            step={1}
                            valueType='real'
                            rounded
                            textColor='#DC143C'
                            rightButtonBackgroundColor='white'
                            leftButtonBackgroundColor='white' />
                    ) : (
                        <S.TitleSemEstoque>
                            Sem Estoque
                        </S.TitleSemEstoque>
                    )}

                </S.Contador>
                <S.ContainerTitle>
                    <S.Title>
                        $ {product.price}
                    </S.Title>
                </S.ContainerTitle>
            </S.ViewProductor>
            <S.ViewDescrption>
                <S.TitleDescription>
                    Description
                </S.TitleDescription>
                <S.DescriptionProductor>
                    {product.description}
                </S.DescriptionProductor>
            </S.ViewDescrption>

            <S.SubTitle onPress={() => navigation.navigate('cart', product)}>
            <S.TitleButton>
                Add to Cart
            </S.TitleButton>
           </S.SubTitle>
        </S.SubContainerDescriptions>
    </S.Container>)
}
