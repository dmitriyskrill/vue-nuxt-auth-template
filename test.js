const test = 1
console.log(test2)

const fn2 = () => {

}
console.log(test) // 1

var test2 // тоже всплывают





function fn () { // тоже всплывают

}



const string = 'string'
string.length // заменяет строку объектом, делает работу, и далее удаляет
// созданный объект

//Посмотреть функцию контруктор без классов

// Класс - описание объекта
// в js классов нет, Класс награждает объекты своим типом данных

let name = 'John'

function sayHi () {
  console.log('Hi, ' + name)
}

name = 'Pete'

sayHi() // что будет показано: "John" или "Pete"?

//


