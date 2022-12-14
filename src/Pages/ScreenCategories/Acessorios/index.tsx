import { ScrollView } from 'react-native'
import Cards from '../../../Components/Cards'
import products from '../../../data/Products'
import * as S from './styles'

export function Acessorios(){

    return(
        <S.Container>
            <ScrollView>
          
            <S.ContainerCard> 
                    {products.map((products) => (
                        <Cards key={products._id}
                        ApiProduct={products}
                        Id={products._id} 
                        Icon1='favorite-border'
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