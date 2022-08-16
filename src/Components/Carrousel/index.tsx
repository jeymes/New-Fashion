import { FlatList } from 'react-native'
import * as S from './styles'

type props ={
    Card: any
}

export default function Carrousel ({Card}: props){
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