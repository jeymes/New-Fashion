import * as S from './styles';

type  props = {
    Banner: any 
}



export default function Banner({Banner}: props) {
    
    const Img = {
        uri: `${Banner}`
    }

    return (<S.Container>
        <S.Banner source={Img}/>
    </S.Container>)
}
