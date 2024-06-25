let str: string = 'abcde'
let num: number = 12345
let bool: boolean = true
let arr: string[] = ['a', 'b', 'c', 'd', 'e']
type numstr = string | number
let arr2: numstr[] = ['a', 1, 'b', 2, 'c', 3]
type massage = 'error' | 'warning' | 'success'
let a: massage = 'error'

function func(a: numstr[]): string {
    let sum: string = ''
    for(let elem of a){
        sum += elem
    }
    return sum
}

let date1: [number, number?, boolean?] // необязательное значение
let date2: [number, string]
let data3: readonly [number, number, number] = [2024, 5, 27] // только для чтения
date1 = [24]

let time: [number, number, number] = [12, 59, 59]; // деструктуризация
let [hour, minute, second] = time
console.log(hour)

let tpl: [string, string, ...number[]]; // rest
tpl = ['abc', 'def', 8, 9, 6, 1]

enum Week {Monday, Tuesday, Wednasday, Thursday, Friday, Saturday, Sunday} // enum перечисления
let day: string = Week[2]
console.log(day)

let key: number = Week.Wednasday // Найти ключ по значению в enum перечислениях
console.log(key)

enum Months {January = 1, February, March, April, May, June, July, August, September, October, November, December} // enam перечисления с любого числа
let month: Months[] = [Months.March, Months.June]
console.log(month)

enum Season { // enam перечисления c строчным значением
	Winter = 'Зима',
	Spring = 'Весна',
	Summer = 'Лето',
	Autumn = 'Осень'
};
console.log(Season.Winter)

let date4: Date = new Date(2030, 1, 5) // переменная с датой
let reg: RegExp = new RegExp('.+?'); // переменная с регулярным вырожением
let elem: HTMLElement = document.querySelector('h1'); // переменная с DOM элементом
let div: HTMLDivElement = document.querySelector('div'); // переменная с DOM элементом с более точным указанием типа

interface Employee { // продвинутый вариант типизации объектов в typescript
	name: string,
	age: number,
	salaryday: number
}
let employee1: Employee = {name: 'Daniil', age: 28, salaryday: 50000}
let employee2: Employee = {name: 'Yuriy', age: 28, salaryday: 300000}
let employee3: Employee = {name: 'Alexander', age: 27, salaryday: 140000}

interface Countries { // Интерфейс с обектом массивов
    name: string,
    cities: string[]
}
let country1: Countries = {
    name: 'Russian Federation',
    cities: ['Moscow', 'Saint Petersburg', 'Ekatirinburg', 'Novosibirsk']
}

interface User { // Сложные интерфейсы для объектов
	name: string,
	age: number,
	parents: {
		mother: string,
		father: string
	}
}

interface Position { // Интерфейс в интерфейсе
    name: string,
    salary: number
}
interface Adres {
    country: string,
    city: string
}
interface Workers {
    name: string,
    potision: Position,
    addr: Adres
}

let employee: Workers = {
	name: 'andrew',
	potision: {
		name: 'programmer',
		salary: 1000,
	},
	addr: {
		country: 'Belarus',
		city: 'minsk'
	}
};

interface Athlet { // интерфейс для массива объектов
	name: string,
	1500: string,
	5000: string,
	10000: string
}

let athlets: Athlet[] = []
athlets.push({name: 'Daniil', 1500: '3.58', 5000: '14.57', 10000: '31.48'})
console.log(athlets)

let date: Date = new Date() // Значения параметров функции по умолчанию
let dateToday = date.getDate()
let monthToday = date.getMonth()
let yearToday =  date.getFullYear()

function getDayOfWeek(year: number = yearToday, month: number = monthToday, day: number = dateToday) {
	let date = new Date(year, month, day).getDay()
	console.log(date)
	let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	return week[date]
}

console.log(getDayOfWeek(1996, 0, 5))
console.log(getDayOfWeek())

function sumOfNum(...rest: number[]): number { // rest как параметр функции
	let sum = 0
	for (let num of rest) {
		sum += num
	}
	return sum
}
console.log(sumOfNum(1, 2, 3, 4, 5))

let func2: (text: string) => void = function(text: string): void { // тип функций
	alert(text);
};

type Func = (x: number, y: number, z: number) => number; // Свой тип функции

let func3: Func = function(a, b, c) {
	return a + b + c
}
console.log(func3(1, 2, 3))

type Func2 = (a: number, b: number[]) => number[]

let func4: Func2 = function(a, b) {
	b.push(a)
	return b
}
console.log(func4(1, [2, 3]))

let func5 = (num1: number, num2: number): number => num1 + num2 // стрелочная функция
console.log(func5(5, 5))