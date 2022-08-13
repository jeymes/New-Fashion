import * as S from './styles';

type  props = {
    Banner: any 
}



export default function Banner({Banner}: props) {
    
    const ImgBanner = {
        uri: `${Banner}`
    }

    return (<S.Container>
        <S.Banner source={ImgBanner}/>
    </S.Container>)
}
