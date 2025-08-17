let visor = "";
function adicionarAoVisor(numero) {
    visor += numero;
    atualizarVisor();
}


function limpar() {
    visor = "";
    atualizarVisor();
}


function deletar() {
    visor = visor.slice(0, -1);
    atualizarVisor();
}

function atualizarVisor() {
    document.getElementById("visor").value = visor;
}

function calcular() {
    if( visor === "") {
        return;
    }
    else{
        let expressao = visor.replace(/x/g, "*").replace(/÷/g, "/");
        try {
            visor = eval(expressao).toString();
            atualizarVisor();
        } catch {
            visor = "Erro";
            atualizarVisor();
        }
    }
}

