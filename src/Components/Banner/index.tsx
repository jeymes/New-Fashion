import * as S from './styles';

type  props = {
    ImagBanner: any
}



export default function Banner({ImagBanner}: props) {
    
    

    return (<S.Container>
        <S.Banner source={ImagBanner}/>
    </S.Container>)
}
