"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 2, 3, 4], [55, 6, 7, 89]);
console.log(numArray);
