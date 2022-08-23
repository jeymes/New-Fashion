import {ScrollView} from 'react-native';
import Header from '../../Components/Header'
import Carrousel from '../../Components/Carrousel'
import Banner from '../../Components/Banner'
import Category from '../../Components/Category'
import * as S from './styles'
import products from '../../data/Products';
import Cards from '../../Components/Cards';




const ImgBanners = [
    <Banner ImagBanner={
        require('../../Assets/banner3.png')}/>,
    <Banner ImagBanner={
        require('../../Assets/banner1.jpg')}/>,
    <Banner ImagBanner={
        require('../../Assets/banner2.jpg')}/>,
    <Banner ImagBanner={
        require('../../Assets/banner4.png')}/>,
];
const CardsCategory = [
    <Category TitleCategory='Category' TitleIcon='Masculino' TitleIcon1='Feminino' TitleIcon2='Sports' TitleIcon3='Unisex' Icon='event-seat' Icon1='card-giftcard' Icon2='sports' Icon3='wc'/>,

    <Category TitleCategory=' ' TitleIcon='Acessorios' TitleIcon1='Kids' TitleIcon2='Beleza' TitleIcon3='Outros' Icon='ad-units' Icon1='baby-changing-station' Icon2='content-cut' Icon3='info'/>,
];
export default function Home() {
    return (
        <S.Container>
            <Header/>
            <ScrollView>

                <S.SubContainer>
                    <Carrousel Card={ImgBanners}/>
                </S.SubContainer>

                <Carrousel Card={CardsCategory}/>

                <S.ContainerCard> 
                    {products.map((products) => (
                        <Cards key={products._id}
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
