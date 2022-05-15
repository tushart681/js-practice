/*console.log(5 + 6)
var x = 'tushar';
let y = 16;
const z = 16.5;
console.log(`ver x: ${x}\nlet y: ${y}\nconst z: ${z}`)
const a = {
    name: 'tushar',
    number: '01' + '537615124'
}
console.log(`my name is ${a.name} and number is ${a.number}`)
function ageCalculator(age1, age2) {
    // console.log(age1 + age2)
    return age1 + age2
}
const adder = ageCalculator(24, 25)
console.log(`const adder: ${adder}`)
if (adder % 2 == 0) {
    console.log('you not got job')
}
else {
    console.log('you got job')
}

function ageCalculator(age1, age2) {
    return (age1 + age2) % 2 !== 0 ? 'we got the job' : 'we didnt got the job'
}*/

/*const gotJob = ageCalculator(25, 25)
console.log(ageCalculator(25, 25))
if (gotJob) {
    console.log('we got the job')
}
const family = {
    father: {
        name: 'monirullah',
        age: 50,
        number: [12, 45, 35]
    },
    mother: {
        name: 'bilkis',
        age: 35,
        number: [45, 65, 26]
    },
    sister: {
        name: 'rafa',
        age: 22,
        number: [47, 21, 23]
    },
    my: {
        name: 'tushar',
        age: 26,
        number: [69, 96, 6996]
    }
}
console.log(`my father name is ${family.father.name}.\nage is ${family.father.age}.\nnumber is ${family.father.number[2] + family.father.number[0]} `)*/
const person = {
    firstName: 'tushar',
    lastName: 'khan',
    age: 24
}
person: function() {
    return this.firstName + ' ' + this.lastName + ' ' + this.age
}

console.log(`my name is ${person.full_name()}`)
const myfunc = (name, age) => {
    return name + ' ' + age
}
console.log(myfunc('tushar', 24))
console.log(document.getElementById('timeButton'))
timeButton.addEventListener('click' function () {
    console.log(myfunc('tushar', 24), Date())
})
const c = {
    name: 'abul bashar',
    age8: 24,
    sex: 'male',
    number: 01537615124
}
const d = {
    house: 01,
    line: 02,
    block: 'C',
    section: 'Mirpur 11'
}
console.log(document.getElementById('persone1'))
console.log(document.getElementById('address'))
persone1.addEvenListener('click', function () {
    console.log(`my name is ${c.name} and age is ${c.age} and sex is ${c.sex} and number is ${c.number}`)
})
address.addEvenListener('click', function () {
    console.log(`my house number is ${d.house} and line is ${d.line} and block is ${d.block} and section is ${d.section}`)
})