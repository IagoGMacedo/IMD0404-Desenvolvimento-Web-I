// login
document.getElementById('formLogin').addEventListener('submit', function (event) {
    event.preventDefault();

    let login = document.getElementById('loginInput').value;
    let senha = document.getElementById('senhaInput').value;

    
    if(login === 'admin' && senha === 'admin'){
        window.location.href = 'menus.html';
    } else{
        alert("Usuário ou senha errados")
    }

});


