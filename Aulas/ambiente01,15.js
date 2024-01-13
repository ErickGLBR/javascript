let num = [5, 8, 9, 3, 2]
num.sort()
num.push(3)
console.log(num)
console.log(`O vetor tem ${num.length} posicoes `)
console.log(`O primeiro valor de vetor ${num[0]}`)
let pos = num.indexOf(1)
if (pos == -1){
    console.log("O valor nao foi encontrado")
}
console.log(`O valor 9 esta na possicao ${pos}`)

