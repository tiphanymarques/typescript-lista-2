"use strict";
let dataAtual = new Date();
let aniversario = new Date(2006, 6, 1);
if (dataAtual.getMonth() > aniversario.getMonth()) {
    console.log("fez aniversario");
}
else if (dataAtual.getMonth() < aniversario.getMonth()) {
    console.log("não fez aniversario");
}
else {
    if (dataAtual.getDate() > aniversario.getDate()) {
        console.log("fez aniversario");
    }
    else {
        console.log("não fez aniversario");
    }
}
