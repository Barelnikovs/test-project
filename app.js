var str = 'abcde';
var num = 12345;
var bool = true;
var arr = ['a', 'b', 'c', 'd', 'e'];
var arr2 = ['a', 1, 'b', 2, 'c', 3];
var a = 'error';
function func(a) {
    var sum = '';
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var elem_1 = a_1[_i];
        sum += elem_1;
    }
    return sum;
}
var date1; // необязательное значение
var date2;
var data3 = [2024, 5, 27]; // только для чтения
date1 = [24];
var time = [12, 59, 59]; // деструктуризация
var hour = time[0], minute = time[1], second = time[2];
console.log(hour);
var tpl; // rest
tpl = ['abc', 'def', 8, 9, 6, 1];
var Week;
(function (Week) {
    Week[Week["Monday"] = 0] = "Monday";
    Week[Week["Tuesday"] = 1] = "Tuesday";
    Week[Week["Wednasday"] = 2] = "Wednasday";
    Week[Week["Thursday"] = 3] = "Thursday";
    Week[Week["Friday"] = 4] = "Friday";
    Week[Week["Saturday"] = 5] = "Saturday";
    Week[Week["Sunday"] = 6] = "Sunday";
})(Week || (Week = {})); // enum перечисления
var day = Week[2];
console.log(day);
var key = Week.Wednasday; // Найти ключ по значению в enum перечислениях
console.log(key);
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["February"] = 2] = "February";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["May"] = 5] = "May";
    Months[Months["June"] = 6] = "June";
    Months[Months["July"] = 7] = "July";
    Months[Months["August"] = 8] = "August";
    Months[Months["September"] = 9] = "September";
    Months[Months["October"] = 10] = "October";
    Months[Months["November"] = 11] = "November";
    Months[Months["December"] = 12] = "December";
})(Months || (Months = {})); // enam перечисления с любого числа
var month = [Months.March, Months.June];
console.log(month);
var Season;
(function (Season) {
    Season["Winter"] = "\u0417\u0438\u043C\u0430";
    Season["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Season["Summer"] = "\u041B\u0435\u0442\u043E";
    Season["Autumn"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season || (Season = {}));
;
console.log(Season.Winter);
var date4 = new Date(2030, 1, 5); // переменная с датой
var reg = new RegExp('.+?'); // переменная с регулярным вырожением
var elem = document.querySelector('h1'); // переменная с DOM элементом
var div = document.querySelector('div'); // переменная с DOM элементом с более точным указанием типа
var employee1 = { name: 'Daniil', age: 28, salaryday: 50000 };
var employee2 = { name: 'Yuriy', age: 28, salaryday: 300000 };
var employee3 = { name: 'Alexander', age: 27, salaryday: 140000 };
var country1 = {
    name: 'Russian Federation',
    cities: ['Moscow', 'Saint Petersburg', 'Ekatirinburg', 'Novosibirsk']
};
var employee = {
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
var athlets = [];
athlets.push({ name: 'Daniil', 1500: '3.58', 5000: '14.57', 10000: '31.48' });
console.log(athlets);
var date = new Date(); // Значения параметров функции по умолчанию
var dateToday = date.getDate();
var monthToday = date.getMonth();
var yearToday = date.getFullYear();
function getDayOfWeek(year, month, day) {
    if (year === void 0) { year = yearToday; }
    if (month === void 0) { month = monthToday; }
    if (day === void 0) { day = dateToday; }
    var date = new Date(year, month, day).getDay();
    console.log(date);
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return week[date];
}
console.log(getDayOfWeek(1996, 0, 5));
console.log(getDayOfWeek());
function sumOfNum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var num_1 = rest_1[_a];
        sum += num_1;
    }
    return sum;
}
console.log(sumOfNum(1, 2, 3, 4, 5));
var func2 = function (text) {
    alert(text);
};
var func3 = function (a, b, c) {
    return a + b + c;
};
console.log(func3(1, 2, 3));
var func4 = function (a, b) {
    b.push(a);
    return b;
};
console.log(func4(1, [2, 3]));
var func5 = function (num1, num2) { return num1 + num2; }; // стрелочная функция
console.log(func5(5, 5));
