// lista de objetos
let contacts = [];

// clickou para ver os contatos
function showContactList() {
    let mustShow = document.getElementById('showButton').textContent === 'Exibir contatos';

    //verifica se deve mostrar ou não os contatos
    switchControls(mustShow);

    if (mustShow === true) {
        const contactList = document.getElementById("contacts");
        contactList.textContent = '';
        contacts.forEach(
            obj => {
                const line = document.createElement("li");
                line.className = "list-group-item";
                line.textContent = printContact(obj);
                contactList.appendChild(line);
            }
        );
    } 
};

function switchControls(mustShow) {
    if (mustShow === true) {
        document.getElementById('contactsList').classList.remove("d-none");
        document.getElementById('showButton').textContent = 'Fechar';
    } else {
        document.getElementById('contactsList').classList.add("d-none")
        document.getElementById('showButton').textContent = 'Exibir contatos';
    }
};


// clickou para pesquisar um contato
function searchContact() {
    let searchCPF = prompt("Digite o CPF do contato que deseja buscar: ");

    if (!validateCPF(searchCPF)) {
        alert("Insira o cpf no formato válido!")
        return;
    }

    let returnString = "";


    let foundContact = contacts.find(obj => obj.cpf === searchCPF);

    if (foundContact) {
        returnString = printContact(foundContact);
    } else {
        returnString = "CPF não encontrado!"
    }

    alert(returnString);
};

// clickou para deletar um contato
function deleteContact() {
    let searchCPF = prompt("Digite o CPF do contato que deseja remover: ");

    if (!validateCPF(searchCPF)) {
        alert("Insira o cpf no formato válido!")
        return;
    }

    let returnString = "";

    let foundContact = contacts.find(obj => obj.cpf === searchCPF);

    if (foundContact) {
        contacts = contacts.filter(obj => obj.cpf !== searchCPF)
        returnString = "Contato removido!";
    } else {
        returnString = "CPF não encontrado!";
    }

    alert(returnString);

};

// clickou para adicionar um contato
document.getElementById('formContacts').addEventListener('submit', function (event) {
    event.preventDefault();

    let cpf = document.getElementById('cpfInput').value;

    if (!validateCPF(cpf)) {
        alert("Insira o cpf no formato válido!")
        return;
    }

    let name = document.getElementById('name').value;
    let birthday = document.getElementById('birthday').value;
    let address = document.getElementById('address').value;

    let foundContact = contacts.find(obj => obj.cpf === cpf);

    if (foundContact) {
        alert("Já existe um Contato com esse cpf!")
        return;
    }

    contacts.push({
        name: name,
        cpf: cpf,
        birthday: birthday,
        address: address
    });

    document.getElementById('formContacts').reset();

    alert("Contato salvo com sucesso!")
});

// para formatar o cpf
document.getElementById('cpfInput').addEventListener('input', function (event) {
    const formattedValue = event.target.value.replace(/\D/g, '');
    const formattedText = formattedValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    event.target.value = formattedText;
});

// validando cpf
function validateCPF(cpf) {
    let regex = /^(\d{3})\.(\d{3})\.(\d{3})-(\d{2})$/;
    console.log(regex.test(cpf));
    return regex.test(cpf);
}

// formata o contato para string
function printContact(contact){
    return `Nome: ${contact.name}, CPF: ${contact.cpf}, Data de aniversário: ${contact.birthday}, Endereço: ${contact.address}`;
}