/*
const KeepYS = () => {
    document.getElementById("imagem").src = "https://media.tenor.com/OoCablOllPsAAAAe/ltg-low-tier-god.png";
};

const KrillYS = () => {
    document.getElementById("imagem").src = "https://steamuserimages-a.akamaihd.net/ugc/2009198719971119201/780370102320BF7C8FED0C14C17B4B446E49CAA1/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
};
*/

/*
export function KeepYS() {
    document.getElementById("imagem").src = "https://media.tenor.com/OoCablOllPsAAAAe/ltg-low-tier-god.png";
};

export function KrillYS() {
    document.getElementById("imagem").src = "https://steamuserimages-a.akamaihd.net/ugc/2009198719971119201/780370102320BF7C8FED0C14C17B4B446E49CAA1/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
};
*/

const Trocador = {
    "KeepYS": () => {
        document.getElementById("imagem").src = "https://media.tenor.com/OoCablOllPsAAAAe/ltg-low-tier-god.png";
    },
    "KrillYS": () => {
        document.getElementById("imagem").src = "https://steamuserimages-a.akamaihd.net/ugc/2009198719971119201/780370102320BF7C8FED0C14C17B4B446E49CAA1/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
    }
};

export default Trocador;