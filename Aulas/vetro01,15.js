let valor = [8,1,7,2,4,9]
valor.indexOf(1)
valor.sort()
console.log(valor)

/*
console.log(valores)
console.log(valores)
console.log(valores)
console.log(valores)


for( let pos = 0; pos < valor.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valor[pos]}`)
}

*/

for(let pos in valor){
    console.log(`A posicao ${pos} tem o valor ${valor[pos]}`)
}