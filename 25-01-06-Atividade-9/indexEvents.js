let idAtual = 1;

function botaoExcluir(event) {
    const texto = event.target.getAttribute("data-texto");
    if(confirm(`Apagar ${texto}?`)) {
        event.target.parentNode.parentNode.remove();
    }
}

function testeCriarEncaixar(event) {
    event.preventDefault();
    const inputNome = document.getElementById("nome");
    const inputData = document.getElementById("data_nascimento");
    const inputUsuario = document.getElementById("usuario");
    const inputEmail = document.getElementById("email");
    const inputSenha = document.getElementById("senha");
    const tableBody = document.getElementById("corpo_tabela");
    
    const tr = document.createElement("tr");
    const id = document.createElement("td");
    const nome = document.createElement("td");
    const data = document.createElement("td");
    const usuario = document.createElement("td");
    const email = document.createElement("td");
    const senha = document.createElement("td");
    const excluir = document.createElement("td");

    const btEx = document.createElement("button");
    btEx.innerText = "Excluir";
    btEx.setAttribute("data-texto", inputNome.value);
    btEx.addEventListener("click", botaoExcluir)

    id.innerText = idAtual;
    idAtual++;
    nome.innerText = inputNome.value;
    data.innerText = inputData.value;
    usuario.innerText = inputUsuario.value;
    email.innerText = inputEmail.value;
    senha.innerText = inputSenha.value;

    excluir.append(btEx);
    tr.append(id, nome, data, usuario, email, senha, excluir);
    tableBody.append(tr);

    event.target.reset();
}

document.querySelector("form").addEventListener("submit", testeCriarEncaixar);