import * as S from './styles'
import NumericInput from 'react-native-numeric-input'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Carrousel from '../../Components/Carrousel';


export function PagProductor({ route }) {

    const [value, setValue] = useState(0);

    const navigation = useNavigation();

    const product = route.params;
    const imgs = [
        <S.ContainerImagem source={{ uri: product.image }} />,
        <S.ContainerImagem source={{ uri: product.image1 }} />
    ]
    return (<S.Container>
        <S.SubContainerProductor>
            <Carrousel Card={imgs} />
            {/* 
            <S.ContainerImagem source={{ uri: product.image1 }} /> */}
        </S.SubContainerProductor>
        <S.SubContainerDescriptions>
            <S.Title>
               {product.name}
            </S.Title>
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
                        R$ {product.price}
                    </S.Title>
                </S.ContainerTitle>
            </S.ViewProductor>
            <S.ViewDescrption>
                <S.TitleDescription>
                    Descrição
                </S.TitleDescription>
                <S.DescriptionProductor>
                    {product.description}
                </S.DescriptionProductor>
            </S.ViewDescrption>

            <S.SubTitle onPress={() => navigation.navigate('cart', product)}>
                <S.TitleButton>
                    Adicionar ao carrinho
                </S.TitleButton>
            </S.SubTitle>
        </S.SubContainerDescriptions>
    </S.Container>)
}
