const add = (first, second) => {
    const sum = first + second
    return sum
}
const returnedSum = add(1, 2)
console.log(returnedSum)

const timesTwo = (number) => {
    const product = number * 2
    return product
}

const returnProduct = timesTwo(returnedSum)
console.log(returnProduct)