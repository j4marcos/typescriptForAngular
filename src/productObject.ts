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
interface robo {
  id: number;
  name: String;
  utility: string
}

interface robclass {
  readonly id: number;
  name: String;
}

type robtype = {
  readonly id: number,
  name: String
}

console.log("products")

class robo implements robclass {
  id : number;
  name: String;
  constructor(id: number, name:string) {
    this.id = id 
    this.name = name

  }
}