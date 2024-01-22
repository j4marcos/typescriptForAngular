function concatArray<T>(...itens: T[]) : T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,2,3,4],[55,6,7,89])
console.log(numArray)
