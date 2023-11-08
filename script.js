let a = +prompt('Введите первое число') // 2
let b = +prompt('Введите второе число') // 5

if (isNaN(a) || isNaN(b)) {
    console.log('Введите числа')
} else if (a < b) {
    console.log(`Минимальное число ${a}`)
} else if (a > b) {
    console.log(`Минимальное число ${b}`)
} else {
    console.log(`Числа равны ( ${a} )`)
}


