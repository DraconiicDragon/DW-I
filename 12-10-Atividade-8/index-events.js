function trocarImagem(event) {
    const espacos = document.getElementsByClassName("selecionadas");
    const linkImagem = event.target.src;
    for(let i = 0; i < espacos.length; i++) {
        if(espacos[i].name == "vazia") {
            espacos[i].src = linkImagem;
            espacos[i].name = "ocupada";
            break;
        }
    }
}

function limparImagem(event) {
    event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4kkcgq5wgT1QktrrFAMbkaB7Q5mITlIkgA&s";
    event.target.name = "vazia";
}


document.getElementById("selecionada1").addEventListener("click", limparImagem);
document.getElementById("selecionada2").addEventListener("click", limparImagem);
document.getElementById("selecionada3").addEventListener("click", limparImagem);
document.getElementById("carta1").addEventListener("click", trocarImagem);
document.getElementById("carta2").addEventListener("click", trocarImagem);
document.getElementById("carta3").addEventListener("click", trocarImagem);
document.getElementById("carta4").addEventListener("click", trocarImagem);
document.getElementById("carta5").addEventListener("click", trocarImagem);
document.getElementById("carta6").addEventListener("click", trocarImagem);
document.getElementById("carta7").addEventListener("click", trocarImagem);
document.getElementById("carta8").addEventListener("click", trocarImagem);
document.getElementById("carta9").addEventListener("click", trocarImagem);
document.getElementById("carta10").addEventListener("click", trocarImagem);