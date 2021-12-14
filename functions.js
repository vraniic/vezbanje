function greetUser(userName = 'user') {
    console.log(`Hi there ${userName}`)
}

greetUser('max')

function sumUp (...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number
    }
    return result
}
console.log(sumUp(2, 3, 4, 5))