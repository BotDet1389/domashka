// Первое задание
let num = 10;
if (num > 0) {
    console.log("Положительное");
} else if (num < 0) {
    console.log("Отрицательное");
} else {
    console.log("Число равно нулю");
}

// Второе задание
let num2 = 17;
if (num2 % 2 === 0) {
    console.log("Четное");
} else {
    console.log("Нечетное");
}

// Третье задание
let object = { ab: 'england' }; 
if (typeof object === 'object' && object !== null) {
    console.log("Объект является ссылочным типом данных");
} else {
    console.log(`Тип ${typeof object} является примитивным типом данных`);
}

// Четвертое задание
let nameage = {
    name:"Islam",
    age:16
}
if (nameage.age > 17){
    console.log(`Привет, меня зовут ${nameage.name} и это мой первый код `);
}
else{
    console.log(`Привет, меня зовут ${nameage.name} и я не совершеннолетний `);

}

// Пятое задание
let name = "Islam";
let age = 16;
if (typeof name === 'string' && typeof age === 'number') {
    console.log("Все введено верно");
} else {
   console.log("Данные введены неверно");
}

// Шестое задание
let str = "hello world!";
if (str === str.toLowerCase()) {
    str = str.toUpperCase();
} else if (str === str.toUpperCase()) {
    str = str.toLowerCase();
}
console.log(str);

// Седьмое задание
let lang = 'de';
let ms = lang === 'en' ? 'This is english' :
lang === 'ru' ? 'Это русский' :
lang === 'de' ? 'Das ist Deutsch' :
lang === 'kg' ? 'Бул кыргыз тили' :
'хз какой язык'; 
console.log(ms);

// Восьмое задание
const person = {
    name: "Islam",
    age: 19,
    status: "student",
    class: "JS-54",
    school: "Makers"
};
if (person.age >= 20 && person.status === "student" && person.school === "Makers") {
    console.log(`Привет, меня зовут ${person.name} и я студент в ${person.school} классе ${person.class}`);
} else {
    console.log(`Привет, меня зовут ${person.name} и мне ${person.age} лет`);
}

// Девятое задание
let minute = 60;
if (minute >= 1 && minute <= 15) {
    console.log("первая четверть часа");
} else if (minute > 15 && minute <= 30) {
    console.log("вторая четверть часа");
} else if (minute > 30 && minute <= 45) {
    console.log("третья четверть часа");
} else if (minute > 45 && minute <= 60) {
    console.log("четвертая четверть часа");
} else {
    console.log("число не верное (наверное --)");
}

// Десятое задание
let sttr = "123321";
if (sttr.length === 6) {
    let sum1 = Number(sttr[0]) + Number(sttr[1]) + Number(sttr[2]);
    let sum2 = Number(sttr[3]) + Number(sttr[4]) + Number(sttr[5]);
    if (sum1 === sum2) {
        console.log('да');
    } else {
        console.log('нет');
    }
} else {
    console.log('Строка должна содержать ровно 6 цифр');
}