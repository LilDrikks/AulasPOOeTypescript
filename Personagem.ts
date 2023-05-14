// nome, energia, vida, ataque, defesa
//Classes
export default class Personagem {
  //Atributos
  // nome: string = "";
  // energia: number = 0;
  // vida: number = 0;
  // ataque: number = 0;
  // defesa: number = 0;
  dano: number = 0;
  gold: number = 0;
  //Constructor elimina a construção padrão sem valores e agora ele quem define os atributos
  constructor(
    //Ao construir os atributos não precisamos definir no incio da nossa classe
    //E ao instanciar o objeto o mesmo pede os atributos na hora da criação
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}
  //Métodos

  status(): void {
    console.log(`Paladino: `);
    console.log("Nome:", this.nome);
    console.log("Energia:", this.energia.toFixed(1));
    console.log("Vida:", this.vida.toFixed(1));
    console.log("Ataque:", this.ataque.toFixed(1));
    console.log("Defesa:", this.defesa.toFixed(1));
    console.log("Dano:", this.dano.toFixed(1));
    console.log("Gold:", this.gold.toFixed(1));
  }
  treinarAtaque(): void {
    if (this.ataque >= 50) {
      this.ataque = 50;
      console.log("Você atingiu o máximo de ataque!");
      return;
    } else if (this.energia <= 0) {
      this.energia = 0;
      this.descansar();
      return;
    }
    this.ataque += Math.random() * 5;
    this.energia -= Math.random() * 30;
  }
  treinarDefesa(): void {
    if (this.defesa >= 60) {
      this.defesa = 60;
      console.log("Você atingiu o máximo de defesa!");
      return;
    } else if (this.energia <= 0) {
      this.energia = 0;
      this.descansar();
      return;
    }
  }
  batalhar(): number {
    if (this.vida < 0) {
      this.vida = 0;
      this.dano = 0;
      this.morreu();
      return 9;
    } else if (this.dano > 50) {
      this.gold += 50;
      this.dano = 0;
      console.log("Voce venceu: recompença 50GOLD");
      return 0
    }
    if (Math.random() * 10 > 5) {
      this.dano += Math.random() * 10;
    } else if (Math.random() * 10 < 5) {
      this.vida -= Math.random() * 10;
    }
    return 0;
  }
  meditar(): void {
    if (this.energia >= 50) {
      this.energia = 50;
      console.log("Energia total!");
      return;
    }
    this.energia += Math.random() * 30;
  }
  descansar(): void {
    console.log("Energia esgotada, medite para recuperar energia!");
  }
  morreu(): void {
    console.log("Voce morreu :'(");
  }
}
