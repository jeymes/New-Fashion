import Cards from "../Cards/";

const img1 = {
    uri: 'https://t-static.dafiti.com.br/o9-Ee_rUhybX9saeGmNdUKjNrbA=/fit-in/430x623/static.dafiti.com.br/p/blequi-jaqueta-corta-vento-masculina-bord%c3%b4-steel-8772-72349011-1-zoom.jpg'

}
const img2 = {
    uri: 'https://t-static.dafiti.com.br/L4seqYsLrW7hfcWMbwQ8rPAIghU=/fit-in/325x471/static.dafiti.com.br/p/blequi-jaqueta-corta-vento-masculina-preto-candy-5469-72119011-1-zoom.jpg'
}
const img3 = {
    uri: 'https://t-static.dafiti.com.br/W-QjrNMyqhDsM2towVv_hJLQ5QA=/fit-in/325x471/static.dafiti.com.br/p/blequi-jaqueta-corta-vento-feminina-blequi-classic-preto-4672-50339011-1-zoom.jpg'
}
const img4 = {
    uri: 'https://t-static.dafiti.com.br/WGKkdLJqy0GaLgMpmrOimu9dk18=/fit-in/860x1246/static.dafiti.com.br/p/blequi-short-feminino-praia-estampado-blequi-classic-beach-6649-39446021-1-zoom.jpg'
}
const img5 = {
    uri: 'https://t-static.dafiti.com.br/noG64QMDKYj9bBHT0-IuwfDQqaQ=/fit-in/430x623/static.dafiti.com.br/p/adidas-adidas-t%c3%aanis-ozweego-0698-70712511-1-zoom.jpg'
}
const img6 = {
    uri: 'https://t-static.dafiti.com.br/4Bx3tKLS-0MOgG5z8fEzTscSSTk=/fit-in/325x471/static.dafiti.com.br/p/adidas-adidas-t%c3%aanis-questar-2396-52616801-1-zoom.jpg'
}

export default function ScrollCards (){
    return(
        <>
        <Cards 
        Valor1='R$: 149,99' 
        Title1=' JAQUETA CORTA VENTO MASCULINA BORDÔ' 
        Image1={img1} 
        Valor2='R$: 104,90' 
        Title2='JAQUETA CORTA VENTO MASCULINA PRETO' 
        Image2={img2} />

        <Cards 
        Valor1='89,90' 
        Title1='JAQUETA CORTA VENTO FEMININA' 
        Valor2='59,90' 
        Title2='SHORT FEMININO PRAIA ESTAMPADO BLEQUI' 
        Image1={img3} 
        Image2={img4} />
        
        <Cards 
        Valor1='R$: 599,99' 
        Title1='ADIDAS TÊNIS OZWEEGO' 
        Image1={img5} 
        Valor2='R$: 549,99' 
        Title2='ADIDAS TÊNIS QUESTAR' 
        Image2={img6} />
        </>
    )
}