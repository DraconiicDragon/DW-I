/*
function executora(f) {
    console.log("executora")
    f();
}
    

function executada() {
    console.log("executada");
}

executora(executada);
*/

/*
function executora(f) {
    console.log("executora")
    f();
}
    

const executada = function() {
    console.log("executada");
}

executora(executada);
*/

/*
function executora(f) {
    console.log("executora")
    f();
}
    

const executada = () => {
    console.log("executada");
}

executora(executada);
*/

/*
function executora(f) {
    console.log("executora")
    f();
}
executora(() => { console.log("executada")});
*/

/*
function executora(f) {
    console.log("executora")
    f();
}
executora(() => console.log("executada"));
*/

/*
window.addEventListener("load", () => {
    alert("Window Load")
});

const botaoKYS = document.getElementById("bt02");
botaoKYS.addEventListener("click", () => {
    document.getElementById("imagem").src = "https://steamuserimages-a.akamaihd.net/ugc/2009198719971119201/780370102320BF7C8FED0C14C17B4B446E49CAA1/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
});

document.getElementById("bt01").addEventListener("click", () => {
    document.getElementById("imagem").src = "https://media.tenor.com/OoCablOllPsAAAAe/ltg-low-tier-god.png";
});
*/

/*
import { KeepYS, KrillYS } from "./eventosBotoes.js";

window.addEventListener("load", () => {
    alert("Window Load")
});

document.getElementById("bt_keepYS").addEventListener("click", KeepYS);
document.getElementById("bt_krillYS").addEventListener("click", KrillYS);
*/

/*
import Trocador from "./eventosBotoes.js";

window.addEventListener("load", () => {
    alert("Window Load")
});

document.getElementById("bt_keepYS").addEventListener("click", Trocador.KeepYS);
document.getElementById("bt_krillYS").addEventListener("click", Trocador.KrillYS);
*/

import troca from "./eventosBotoes.js";

window.addEventListener("load", () => {
    alert("Window Load")
});

document.getElementById("bt_keepYS").addEventListener("click", troca);
document.getElementById("bt_krillYS").addEventListener("click", troca);