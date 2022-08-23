import * as S from './styles'
import Cards from '../../Components/Cards'
import products from '../../data/Products'
import { ScrollView } from 'react-native'


export function Favorite(){

    return(
        <S.Container>
            <ScrollView>
          
            <S.ContainerCard> 
                    {products.map((products) => (
                        <Cards key={products._id}
                        Id={products._id} 
                        Icon1='favorite' 
                        Valor1={products.price} 
                        Title1={products.name} 
                        Image1={{uri:products.image}}
                        />
                    ))} 
                    </S.ContainerCard>
                  </ScrollView>
        </S.Container>
    )
}