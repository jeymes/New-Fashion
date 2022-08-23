import { MiniCards } from '../../Components/MiniCards';
import * as S from './styles';

const Feminina = {
    uri: 'https://eloamodas.com.br/wp-content/uploads/2018/04/banner-colecao-atual-rose-dreams.jpg'
}
const Masculina = {
    uri: 'https://cdn.shopify.com/s/files/1/1802/7807/files/Banner-Camiseta-Basica-Preta-Lisa-Marca-Ezutus-Slim-Fit-Tradicional-Plus-Size-Masculino-1000x800-02_720x.jpg?v=1651271516'
}
const Unisex = {
    uri: 'https://primedia.primark.com/i/primark/genderless-1000x1000crop'
}
const Sports = {
    uri: 'https://static.wixstatic.com/media/d3583f_54a66bef0a7a459ea2eec5101b2ea8d6~mv2.jpg/v1/fill/w_640,h_544,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d3583f_54a66bef0a7a459ea2eec5101b2ea8d6~mv2.jpg'
}
const Kids = {
    uri: 'https://www.iguatemi365.com/media/wysiwyg/banner-marca-reservamini-roupas-moda-infantil-masculino-iguatemi365-180321.jpg'
}
const Acessórios = {
    uri: 'https://images.tcdn.com.br/img/img_prod/835226/box_de_relogio_e_oculos_double_chandelier_bobo_bird_36956405_1_20201214022258.jpg'
}
const Pets = {
    uri: 'https://www.chefbob.com.br/wp-content/uploads/2021/01/2021-01-07-caes-podem-comer-sal.jpg'
}
const Calçados = {
    uri: 'https://novonegocio.com.br/wp-content/uploads/2018/12/revenda-de-cal%C3%A7ados.jpg'
}
const Beleza = {
    uri: 'https://thumbs.dreamstime.com/b/ajuste-das-ferramentas-profissionais-do-cabeleireiro-com-o-modelo-cor-de-rosa-da-opini%C3%A3o-superior-fundo-dos-pentes-133294374.jpg'
}
const Mochilas = {
    uri: 'https://www.tilibra.com.br/storage/categories/mochilas-61fd24b93cb14.jpeg'
}
const Saude = {
    uri: 'https://medicosdeolhos.com.br/wp-content/uploads/2020/08/Alimentos-que-fazem-bem-para-a-sa%C3%BAde-dos-olhos.jpg'
}
const Joias = {
    uri: 'https://thumbs.dreamstime.com/b/acess%C3%B3rios-de-moda-femininos-em-estilo-oriental-fundo-branco-joias-azuis-com-len%C3%A7o-feminina-an%C3%A9is-bolsa-azul-158147363.jpg'
}
export function Categories() {
    return (
        <S.Container>
                <MiniCards 
                CategoryImage1={Feminina} CategoryTitle1='Feminina'
                CategoryImage2={Masculina} CategoryTitle2='Masculino'
                CategoryImage3={Unisex} CategoryTitle3='Unisex'/>
                <MiniCards 
                CategoryImage1={Sports} CategoryTitle1='Sports'
                CategoryImage2={Kids} CategoryTitle2='Kids'
                CategoryImage3={Acessórios} CategoryTitle3='Acessórios'/>
                <MiniCards 
                CategoryImage1={Pets} CategoryTitle1='Pets'
                CategoryImage2={Beleza} CategoryTitle2='Beleza'
                CategoryImage3={Calçados} CategoryTitle3='Calçados'/>
                <MiniCards 
                CategoryImage1={Saude} CategoryTitle1='Saude'
                CategoryImage2={Mochilas} CategoryTitle2='Mochilas'
                CategoryImage3={Joias} CategoryTitle3='Joias'/>
                
        </S.Container>
    )
}
