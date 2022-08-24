import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';

 type props = {
     Image1: any
      Title1: any
         Valor1: any
           Icon1: any
           Id: any
 }


export default function Cards({
    Image1,
      Title1,
         Valor1,
           Icon1,
           Id
}:props) {

    const navigation = useNavigation();

    function OpenPagProductor(){
        navigation.navigate('pagProductor')
    }

    return (
        <S.Container key={Id}>
            <S.SubContainer>
                
                    <S.Cards onPress={OpenPagProductor} >
                    <S.ImageContainer>
                        <S.Images source={Image1}/>
                    </S.ImageContainer>
                    <S.DescriptionContainer>
                        <S.Title> {Title1} </S.Title>
                        <S.Description>
                            <S.Valor> R$: {Valor1} </S.Valor>
                            <S.ContainerIcon>
                            <MaterialIcons
                            name={Icon1}
                            size={30}
                            color='Black' />
                            </S.ContainerIcon>
                        </S.Description>

                    </S.DescriptionContainer>

                    
                </S.Cards>
                
              
                
            </S.SubContainer>
        </S.Container>
    )
}
