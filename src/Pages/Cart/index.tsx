import * as S from './styles'
import {useNavigation} from '@react-navigation/native';
import CartItems from '../../Components/CartItems';
import { Button } from '../../Components/Button';


export default function Cart() {

    const navigation = useNavigation();
    

    return (
        <S.Container>
                <S.SubContainer>
                <CartItems/>
                    <S.ContainerTotal>
                        <S.ContainerText>
                            <S.TextTotal>
                                Total
                            </S.TextTotal>
                        </S.ContainerText>
                        <S.ContainerValor>
                            <S.TextValor>
                                $ 1.000,00
                            </S.TextValor>
                        </S.ContainerValor>
                    </S.ContainerTotal>
                </S.SubContainer>

                <Button ButtonTitle='Comprar' ButtonScreenPag='login'/>
        </S.Container>
    )
}
