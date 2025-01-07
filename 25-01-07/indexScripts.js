async function carregaUF() {
    const select = document.getElementById("estados");
    const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
    const dados = await res.json();
    for(let i = 0; i < dados.length; i++) {
        const option = document.createElement("option");
        option.innerText = dados[i].sigla;
        select.append(option);
    }
}
carregaUF();

// function carregaCidade() {
//     const estado = document.getElementById("estado").value;
//     const select = document.getElementById("cidade");
//     select.innerHTML = "";
//     fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
//     .then((res) => {
//         return res.json();
//     })
//     .then((dados) => {
//         for(let i = 0; i < dados.length; i++) {
//             const option = document.createElement("option");
//             option.innerText = dados[i].nome;
//             select.append(option);
//         }
//     });
// }
 
async function carregaCidade() {
    const estado = document.getElementById("estados").value;
    const select = document.getElementById("cidade");
    select.innerHTML = "";

    const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
    const dados = await res.json();

    for(let i = 0; i < dados.length; i++) {
        const option = document.createElement("option");
        option.innerText = dados[i].nome;
        select.append(option);
    }
}

document.getElementById("estados").addEventListener("change", carregaCidade);
carregaCidade();