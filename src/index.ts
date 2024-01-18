//data modifiers
// types generiscs
//decorators

console.log("hello world");


function printTarget(target:any):void {
    console.log("target: "+target);
}


function printKey(target:any , key:string):void {
    console.log("target: "+target);
    console.log("key: "+key);
}

function defineVersion(version:string):Function {
    return (target : any ) => {
        Object.assign(target.prototype, {__version:version})
    };
}

function minLenght (lenght: number ) {
    return (target:any,key:string) => {
        let _value = target[key]

        const getter = () => _value;
        const setter = (value:string) => {
            if(value.length < lenght) {
                throw new Error(`key ${key} is less the min lenght which is ${lenght} characters`)
            } else {
                _value = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

@printTarget
@defineVersion("version.1.2.3")
class Funcionario {
    @printKey
    @minLenght(3)
    name: string;
    constructor(name:string) {
        this.name = name;
    }
}

const api = new Funcionario("joao")

