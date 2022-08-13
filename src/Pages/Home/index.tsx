import Banner from '../../Components/Banner'
import Carrousel from '../../Components/Carrousel'
import Header from '../../Components/Header'
import * as S from './styles'


const data = [
    <Banner Banner='https://cdn.shopify.com/s/files/1/0280/5376/6223/files/bannersite_OUTINV-Imporium.jpg?v=1648660849'/>,
    <Banner Banner='https://cdn.dooca.store/739/files/banner-2-site-finna-moda.jpg?v=1632352601&webp=0'/>,
    <Banner Banner='https://siberian.vteximg.com.br/arquivos/ids/180866/BANNER_MASCULINO_MOMENTOS_DESK_01.jpg?v=637895139985330000https://www.nicepng.com/png/detail/593-5933043_promotion-banner-png-promotional-banners.png'/>,
    <Banner Banner='https://www.procuroacho.com/espaco-vip/768/img/1-lo-store-tendenci-loja-de-roupas-femininas-banner.jpg'/>
];

export default function Home (){
    return(
        <S.Container>
            <Header/>
            <Carrousel Card={data}/>
        </S.Container>
    )
}