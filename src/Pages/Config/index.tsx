import * as S from './styles'
import { Entypo, MaterialCommunityIcons, FontAwesome,
    FontAwesome5, AntDesign, MaterialIcons } from '@expo/vector-icons'; 

export function Config(){
const photo = {
    uri: 'https://png.pngitem.com/pimgs/s/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png'
}
    return(
        <S.Container>
                

           <S.ContainerPhoto>
            <S.Photo>
            <S.PhotoPerson source={photo}/>
            <S.TitleName>Jeymes Sousa</S.TitleName>
            </S.Photo>
           </S.ContainerPhoto>
           <S.ContainerConfig>
            <S.SubContainerConfig>
                <S.ContainerList>
                <MaterialCommunityIcons name="account-edit" size={24} color="black" />
                    <S.TitleConfig>
                        Editar Perfil
                    </S.TitleConfig>
                </S.ContainerList>
                <S.ContainerList>
                <MaterialCommunityIcons name="truck" size={24} color="black" />
                    <S.TitleConfig>
                        Rastreiar Pedido
                    </S.TitleConfig>
                </S.ContainerList>
                <S.ContainerList>
                <MaterialCommunityIcons name="ticket-percent" size={24} color="black" />
                    <S.TitleConfig>
                        Meus Cupom
                    </S.TitleConfig>
                </S.ContainerList>
                <S.ContainerList>
                <FontAwesome name="file-text" size={24} color="black" />
                    <S.TitleConfig>
                    Meus Pedidos
                    </S.TitleConfig>
                </S.ContainerList>
                <S.ContainerList>
                <MaterialCommunityIcons name="credit-card-multiple" size={24} color="black" />
                    <S.TitleConfig>
                        Meus Cartões
                    </S.TitleConfig>
                </S.ContainerList>
                <S.ContainerList>
                <Entypo name="cog" size={24} color="black" />
                    <S.TitleConfig>
                       Configurações
                    </S.TitleConfig>
                </S.ContainerList>
                <S.ContainerList>
                <MaterialIcons name="privacy-tip" size={24} color="black" />
                    <S.TitleConfig>
                      Privacidade
                    </S.TitleConfig>
                </S.ContainerList>
                <S.ContainerList>
                <FontAwesome5 name="person-booth" size={24} color="black" />
                    <S.TitleConfig>
                       Sair
                    </S.TitleConfig>
                </S.ContainerList>
                
            </S.SubContainerConfig>
           
           </S.ContainerConfig>
        </S.Container>
    )
}