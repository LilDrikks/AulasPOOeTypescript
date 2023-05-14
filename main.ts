import prompt from "prompt-sync";
import Personagem from "./Personagem";

let drikks: Personagem = new Personagem("Drikks", 50, 50, 20, 20);

let teclado = prompt();
let option: number = 0;

let condition: number = 9;

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
      option = drikks.batalhar()
      break;
    default:
      break;
  }
}
