import * as S from './styles'
import { SwipeListView } from 'react-native-swipe-list-view';
import products from '../../data/Products';
import {FontAwesome } from '@expo/vector-icons';



const Swiper = () => (
    <SwipeListView
    rightActionValue={-50}
    previewRowKey='0'
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0,2)}
    renderItem={renderIterms}
    renderHiddenItem={renderIterm}
    showsHorizontalScrollIndicator={false}
    />
)

const renderIterms = (data) => 
    <S.ButtonContainer>
        <S.ContainerDiv>
            <S.ContainerArow>
               <S.ContainerImage>

               <S.Image source={{uri: data.item.image}} />

               </S.ContainerImage>

               <S.ContainerText>

                <S.Text>{data.item.name}</S.Text>
                <S.Text>{data.item.price}</S.Text>

               </S.ContainerText>

               <S.ContainerQuant>
                <S.TextQuant>5</S.TextQuant>
               </S.ContainerQuant>
              
            </S.ContainerArow>
        </S.ContainerDiv>
    </S.ButtonContainer>


 //Hidden

const renderIterm = () => 
    <S.ButtonHiddenContainer>
       <S.ContainerHiddenDiv>
             <FontAwesome
            name='trash' size={24} color={'white'}/>
        </S.ContainerHiddenDiv>
     </S.ButtonHiddenContainer>


export default function CartItems(){

    return(
        <S.Container>
            <Swiper/>
        </S.Container>
    )
}