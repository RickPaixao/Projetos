document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    
    let url = "https://back-login.vercel.app/usuarios"
    let response = await fetch(url);
    let userData = await response.json();

    const usuario = userData.find(data => (data.nome === nome || data.email === nome) && data.senha === senha);


        if (usuario) {
            alert('Login bem-sucedido!');
            window.location.href = 'http://127.0.0.1:5500/Projeto%20filme/cadastro.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    
})
