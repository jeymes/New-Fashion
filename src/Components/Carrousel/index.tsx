import { FlatList } from 'react-native'
import * as S from './styles'
// import Dots from 'react-native-dots-pagination';

type props ={
    Card: any
}

export default function Carrousel ({Card}:props){
    
    return(
        <S.Container>
           
            <FlatList
            data={Card}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
                return <S.SubContainer>
                    <S.ContainerItem>
                    {item}
                    </S.ContainerItem>
                </S.SubContainer>
            }}
            />
        </S.Container>
    )
}