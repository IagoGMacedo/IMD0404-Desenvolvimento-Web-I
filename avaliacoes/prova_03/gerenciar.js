//entrei na pagina
document.addEventListener('DOMContentLoaded', function() {
    montarTabela();
});

function montarTabela(){
    let meuVetor = JSON.parse(localStorage.getItem('meuVetor')) || [];

    let tbody = document.querySelector('tbody');

    meuVetor.forEach((carro, index) => {
        let tr = document.createElement('tr');

        tr.innerHTML = `
            <th scope="row">${carro.id}</th>
            <td>${carro.marca}</td>
            <td>${carro.modelo}</td>
            <td>${carro.anoFabricacao}</td>
            <td>${carro.cor}</td>
            <td>${carro.tipo}</td>
            <td>${carro.kilometragem}</td>
            <td>${carro.numeroPortas}</td>
            <td>R$${carro.preco}</td>
            <td><button type="button" onclick="deletarVeiculo(${carro.id - 1})" class="btn btn-danger">Excluir</button></td>
        `;

        tbody.appendChild(tr);
    });
}

function deletarVeiculo(id){
    let meuVetor = JSON.parse(localStorage.getItem('meuVetor')) || [];
    meuVetor.splice(id, 1);
    localStorage.setItem('meuVetor', JSON.stringify(meuVetor));
    window.location.reload();
    alert("Veiculo deletado!");
}