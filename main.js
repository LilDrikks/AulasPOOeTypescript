"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Personagem_1 = __importDefault(require("./Personagem"));
let drikks = new Personagem_1.default("Drikks", 50, 50, 20, 20);
let teclado = (0, prompt_sync_1.default)();
let option = 0;
let condition = 9;
while (option != condition) {
    console.log("============Personagem============");
    console.log("|1. Treinar ataque               |");
    console.log("|2. Treinar defesa               |");
    console.log("|3. Meditar|Descansar            |");
    console.log("|4. Batalhar                     |");
    console.log("|8. Mostrar atributos            |");
    console.log("|9. Sair                         |");
    console.log("==================================");
    option = +teclado("Escolha uma ação: ");
    switch (option) {
        case 1:
            drikks.status();
            drikks.treinarAtaque();
            break;
        case 2:
            drikks.status();
            drikks.treinarDefesa();
            break;
        case 3:
            drikks.status();
            drikks.meditar();
            break;
        case 4:
            drikks.status();
            drikks.batalhar();
            option = drikks.batalhar();
            break;
        default:
            break;
    }
}
