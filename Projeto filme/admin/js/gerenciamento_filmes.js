const botaoSalvar = document.getElementById('Salvar');


const postFilme = async function () {

    let url = 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto1/fecaf/novo/filme';

    const nome = document.querySelector('#nome');
    const sinopse = document.querySelector('#sinopse');
    const image = document.querySelector('#image');
    const valor = document.querySelector('#valor');

    if (!nome || !sinopse || !image || !valor) {
        alert('Por favor, preencha todos os campos.');
    }

    let filmesJson = {};

    filmesJson.nome = nome.value;
    filmesJson.sinopse = sinopse.value;
    filmesJson.image = image.value;
    filmesJson.valor = valor.value;

    console.log(filmesJson);

    let request = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filmesJson)
    });

    if (request.status == 201)
        alert('Registro inserido com sucesso.');
    else
        alert('Não foi possível realizar a requisição');
}

const getAPIFilme = async function () {

    let url = 'https://projeto-integrado-avaliacao.azurewebsites.net/projeto1/fecaf/listar/filmes';

    let response = await fetch(url);

    let resultFilme = await response.json();

    if (response.status == 200)
        setListDados(resultFilme);
    else
        alert('A API não retornou dados ou está fora do ar.');
}

const setListDados = async function (dadosFilme) {
    let divListDados = document.getElementById('listDados');

    divListDados.innerHTML = '';

    dadosFilme.filmes.forEach(function (filme) {

        let divDados = document.createElement('div');
        let divNome = document.createElement('div');
        let divSinopse = document.createElement('div');
        let divValor = document.createElement('div');
        let divOptions = document.createElement('div');
        let spanEditar = document.createElement('span');
        let spanExcluir = document.createElement('span');

        let textNome = document.createTextNode(filme.nome);
        let textSinopse = document.createTextNode(filme.sinopse);
        let textValor = document.createTextNode(filme.valor);
        let textEditar = document.createTextNode('Editar | ');
        let textExcluir = document.createTextNode('Excluir');

        divDados.setAttribute('id', 'dados');
        divDados.setAttribute('class', 'linha dados');

        spanExcluir.setAttribute('id', 'excluir');

        spanExcluir.setAttribute('idfilme', filme.id);

        divListDados.appendChild(divDados);

        divDados.appendChild(divNome);
        divDados.appendChild(divSinopse);
        divDados.appendChild(divValor);
        divDados.appendChild(divOptions);

        divOptions.appendChild(spanExcluir);

        divNome.appendChild(textNome);
        divSinopse.appendChild(textSinopse);
        divValor.appendChild(textValor);
        spanExcluir.appendChild(textExcluir);

        spanExcluir.addEventListener('click', function () {
            deleteFilme(spanExcluir.getAttribute('idfilme'));
        });
    }); 
}

const deleteFilme = async function (id) {
    let url = `https://projeto-integrado-avaliacao.azurewebsites.net/projeto1/fecaf/excluir/filme/${id}`;
    console.log(url);

    let response = await fetch(url, {
        method: 'DELETE'
    });

    if (response.status == 200)
        alert('Livro excluído com sucesso.');
    else
        alert('Livro não encontrado ou problemas na API');
}

botaoSalvar.addEventListener('click', function () {
    postFilme();
});

window.addEventListener('load', function () {
    getAPIFilme();
});