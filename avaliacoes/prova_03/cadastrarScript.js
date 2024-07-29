// cadastrar
class Veiculo {
    constructor(id, marca, modelo, anoFabricacao, cor,tipo, kilometragem, preco){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.cor = cor;
        this.tipo = tipo;
        this.kilometragem = kilometragem;
        this.preco = preco
    }
}

class Carro extends Veiculo {
    constructor(id, marca, modelo, anoFabricacao, cor, tipo, kilometragem, preco, numeroPortas){
       super(id,marca, modelo, anoFabricacao, cor, tipo, kilometragem, preco);
       this.numeroPortas = numeroPortas;
    }

    descricao() {
        return `${this.tipo} ${this.marca} ${this.modelo} (${this.anoFabricacao}) - ${this.cor}, ${this.kilometragem} km - R$${this.preco}`;
    }
}


document.getElementById('formVehicles').addEventListener('submit', function (event) {
    event.preventDefault();

    let inputs = document.querySelectorAll('#formVehicles input');
    let message = '';
    for (let input of inputs) {
        if (input.value.trim() === '') {
            message += `${input.placeholder}\n`;
        }
    }

    if(message !== ''){
        alert(`Por favor, preencha os seguintes campos:\n${message}`);
        return;
    }
    
    let marca = document.getElementById('marcaInput').value;
    let modelo = document.getElementById('modeloInput').value;
    let anoFabricacao = document.getElementById('anoFabricacaoInput').value;
    let cor = document.getElementById('corInput').value;
    let tipo = document.getElementById('tipoInput').value;
    let kilometragem = document.getElementById('kilometragemInput').value;
    let preco = document.getElementById('precoInput').value;
    let numeroPortas = document.getElementById('numeroPortasInput').value;

    let meuVetor = JSON.parse(localStorage.getItem('meuVetor')) || [];

    let id = meuVetor.length + 1;

    let novoCarro = new Carro(id ,marca, modelo, anoFabricacao, cor,tipo, kilometragem, preco, numeroPortas);

    meuVetor.push(novoCarro);

    localStorage.setItem('meuVetor', JSON.stringify(meuVetor));

    alert(`${novoCarro.descricao()} Carro cadastrado com sucesso!`);
});
