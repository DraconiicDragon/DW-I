function funcaoOutroArquivo() {
    let a = 42;
    let b = 3.14;
    let c = false;
    let d = "Ta";
    let e = [];
    let f = {};
    let g = 'Buh';
    let h = `${d} e ${g} são irmãos!`;

    console.log(typeof a); 
    console.log(typeof b); 
    console.log(typeof c); 
    console.log(typeof d); 
    console.log(typeof e); 
    console.log(typeof f); 
    console.log(typeof g);
    console.log(h);
    console.log(Number.parseInt('1') + 1);
}
function testesLetConstVar() {
    // Cria a variavel como uma função
    if(true) {
        var a = 10;
    }
    console.log(a);

    // Pode mudar uma posição no vetor
    const v = [2, 4, 6, 8];
    v[0] = 10;
    v = 10;

    const c = 45;
    c = 80;

    // Comportamento normal de variavel
    if(true) {
        let b = 10;
    }
    console.log(b);
}

function testesConsoles() {
    // Bloqueia a execução da função
    const opt = confirm("Aceita Biscoitos?");
    if(opt) {
        // Bloqueia a execução da função
        alert(":3");
    } else {
        alert(":(");
    }
    console.log("Top");
}

function testesRepeticao() {
    // Existe
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
    // Tbm existe
    let i = 10;
    while(i > 0) {
        console.log(i);
        i--;
    }
}

function testesObjetos() {
    // Sintaxe de objetos
    const pessoa = {
        "nome": "Eu",
        "idade": 8000,
        "cpf": "111.222.333-44"
    };

    // Igual toda linguagem existente
    console.log(typeof pessoa);
    console.log(pessoa);
    console.log(pessoa.nome);
}

function testesVetores() {
    // Heterogeneo
    const vetor = [2, "Palavra", 6];
    console.log(typeof vetor)
    console.log(vetor)
    for(let i = 0; i < vetor.length; i++) {
        console.log(vetor[i]);
    }
}

function testesArrayComObjetos() {
    const pessoas = [
        {"nome": "Pessoa1", "idade": 34},
        {"nome": "Pessoa2", "idade": 23},
        {"nome": "Pessoa3", "idade": 78}
    ];

    for(let i of pessoas) {
        console.log(i.nome);
        console.log(i.idade);
    }
}

function testesObjetosComArrays() {
    const pessoa = {
        "nome": "Tuh",
        "idade": 67,
        "telefones": ["1111-2222", "3333-4444"],
        "fudeu": [
            {"variavel": "valor", "atributo": "valor"},
            {"nome": "top2", "atributo": "valor"}
        ]
    };

    console.log(pessoa.telefones[0]);
    console.log(pessoa.telefones[1]);
    console.log(pessoa.fudeu[0].variavel);
}