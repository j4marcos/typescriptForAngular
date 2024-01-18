type StoreProduct = {
  name: String;
  cidade: String | null;
  kilos: Number;
};

const myProduct: StoreProduct = {
  name: "uiui",
  cidade: null,
  kilos: 12,
};

let dados: string[] = ["ana", "pedro", "adriana"];
let dados2: Array<String> = ["ana", "pedro", "adriana"];

let infos: (string | number)[] = ["1", "ana", "2", "pedro", "3", "adriana"];

// Tuplas
let boleto: [string, number, number] = ["agua", 199.9, 1234];


async function getDatabase(id: number): Promise<string> {
  return "conteudo"
}

type contagem = [number, number, number]

const nums: contagem = [1, 2, 3]

// interface é usado pra tipar uma classe 
// interface robo {
//   id: number;
//   name: String;
//   utility: string
// }

interface robclass {
  readonly id: number;
  name: string;
  toString(): string;
}

type robtype = {
  readonly id: number,
  name: string
}

console.log("products")

class Robo implements robclass {
  id : number;
  name: string;
  constructor(id: number, name:string) {
    this.id = id 
    this.name = name
  }
  toString(): string {
  return `${this.name}:${this.id}`
  }
}

const bobo = new Robo(1,"bobo")
console.log(bobo.toString())

// data modifiers
/*
public 
private 
protected ( privado onde as sub classes que herdaram a classe, podem acessar)
*/

class Robo2 extends Robo {
  velocidade:number;
  constructor(id:number,nome:string,velocidade:number) {
    super(id,nome);
    this.velocidade  = velocidade;
  }
}

const robo2 = new Robo2(123,"robo2.0",300);

console.log(robo2)
