"use strict";
exports.__esModule = true;
var Resultado = /** @class */ (function () {
    function Resultado(pId, pLoteria, pConcurso, pData, pDezenas) {
        this.id = pId;
        this.loteria = pLoteria;
        this.concurso = pConcurso;
        this.data = pData;
        this.dezenas = pDezenas;
    }
    /*
    Resultado.prototype.showThis = function () {
        return Resultado;
    };
    */
    return Resultado;
}());
exports["default"] = Resultado;
var novaData = new Date();
var novoResultado = new Resultado(7, "Loto_Teste", "Primeiro", novaData, {
    "first": 1,
    "second": 2,
    "third": 3
});
console.log(novoResultado);
