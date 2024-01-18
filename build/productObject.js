"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const myProduct = {
    name: "uiui",
    cidade: null,
    kilos: 12,
};
let dados = ["ana", "pedro", "adriana"];
let dados2 = ["ana", "pedro", "adriana"];
let infos = ["1", "ana", "2", "pedro", "3", "adriana"];
let boleto = ["agua", 199.9, 1234];
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "conteudo";
    });
}
const nums = [1, 2, 3];
console.log("products");
class Robo {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    toString() {
        return `${this.name}:${this.id}`;
    }
}
const bobo = new Robo(1, "bobo");
console.log(bobo.toString());
class Robo2 extends Robo {
    constructor(id, nome, velocidade) {
        super(id, nome);
        this.velocidade = velocidade;
    }
}
const robo2 = new Robo2(123, "robo2.0", 300);
console.log(robo2);
