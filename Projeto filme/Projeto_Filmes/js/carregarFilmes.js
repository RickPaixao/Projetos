const criarCards = function (dados){

    let divCardProdutos = document.getElementById('cardProdutos')

    dados.filmes.forEach(function(itemFilme){


    let divCaixaProduto     = document.createElement('div') 
    let h2CaixaTitulo       = document.createElement('h2')  
    let textTitulo          = document.createTextNode(itemFilme.nome)
    let figureCaixaImagem   = document.createElement('figure')
    let img                 = document.createElement('img') 
    let divCaixaTexto       = document.createElement('div')
    let textDescricao       = document.createTextNode(itemFilme.sinopse)


    divCaixaProduto.setAttribute('class', 'caixa_produto') 

    h2CaixaTitulo.setAttribute('class', 'caixa_titulo') 
    figureCaixaImagem.setAttribute('class', 'caixa_imagem') 
    img.setAttribute('src', itemFilme.image) 
    divCaixaTexto.setAttribute('class', 'caixa_texto') 


    divCardProdutos.appendChild(divCaixaProduto)
    divCaixaProduto.appendChild(h2CaixaTitulo)
    h2CaixaTitulo.appendChild(textTitulo)
    divCaixaProduto.appendChild(figureCaixaImagem)
    figureCaixaImagem.appendChild(img)
    divCaixaProduto.appendChild(divCaixaTexto)
    divCaixaTexto.appendChild(textDescricao)

})
}


const getAPIFilmes = async function(){


    let url = 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto1/fecaf/listar/filmes'

    const response = await fetch(url)

    const dadosFilme = await response.json()

    criarCards(dadosFilme)
}


window.addEventListener('load', function(){
    getAPIFilmes()
})