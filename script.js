// // 1. Создание объектов с помощью литерала объекта 
// // 1
let person = {
    name: '',
    age: 0,
    job: ''
};
person.name = 'John';
alert(person.name);
person.age = 25;
person.job = 'developer';
person.name = 'Mike';   //изменение свойств person
alert(person.name);
person.hobby = 'books'; //добавление свойства
alert(person.hobby);
delete person.hobby;   // удаление св-ва hobby
let car = {
    brand: '',
    model: '',
    year: 0,
    color: '',
};
car.brand = 'Toyota';
alert(car.brand);
car.model = 'Camry';
car.year = 2020;
car.color = 'blue';
car.brand = 'Nissan';   //изменение свойств car
alert(car.brand);
car.engine = 'diesel';  //добавление свойства
alert(car.engine);
delete car.engine;   //удаление св-ва engine


// // 2. Создание объекта с использованием конструктора объекта
function Person(name,age,job) {
    this.name = 'John';
    this.age = 25;
    this.job = 'developer';
};
function Car(brand,model,year,color) {
    this.brand = 'Toyota';
    this.model = 'Camry';
    this.year = 2020;
    this.color = 'blue';
}
let somebody = new Person;
somebody.hobby = 'books'; //добавление свойства
alert(somebody.hobby);
let newCar =new Car;
newCar.country = 'Japan';  //добавление свойства
let newMan = new Person;   //изменение свойств Person
newMan.name = 'Mike';
newMan.age = 36;
newMan.job = 'hitman';
let oldCar = new Car;  //изменение свойств Car
oldCar.brand = 'Chevrolet'; 
oldCar.model = 'Camaro';
oldCar.year = 1989;
oldCar.color = 'yellow';
delete oldCar.color; // удаление свойства color


// Методы объектов
function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.greet = function() {
        alert('Hello, ' + this.name + '!');
    };
}
let somebody = new Person('Mike', 36, 'developer');
somebody.greet();
function Calculator(first,second){
    this.first = Number(first);
    this.second = Number(second);
    this.add = function() {
        return(this.first + this.second)
    };
    this.subtract = function() {
        return(this.first - this.second)
    };
    this.multiply = function() {
        return(this.first * this.second)
    };
    this.divide = function() {
        return(this.first / this.second)
    };

};
let calc = new Calculator(27,15);
alert(calc.add());
alert(calc.subtract());
alert(calc.multiply());
alert(calc.divide());
function Car() {
    this.start = function() {
        alert('Car start');
    };
    this.stop = function() {
        alert('Car stop');
    };
};
let newCar = new Car;
newCar.start();
newCar.stop();


// Прототипы объекта
const person = {
    name: '',
    age: 0,
};
const John = Object.create(person);
John.name = 'John';
John.age = 35;
const animal = {
    eat: function() {
        alert('Животное кушает');
    }
};
const dog = Object.create(animal);
dog.eat();
const shape = {
    draw: function() {
        alert('Фигура рисуется');
    }
};
const rectangle = Object.create(shape);
rectangle.draw();



// Массивы
// Создание массивов


// slice
let oldArray = ['кто','сидел', 'на', 'моем', 56, 45, 79, 'стуле'];
oldArray.pop();
oldArray.push('кресле');
oldArray.shift();
oldArray.unshift('он');
let newArray = oldArray.slice(0,3);
alert(newArray);
let oldStr = 'Меня зовут Капитан Джек Воробей';
let newStr = oldStr.split(" ").slice(0,3).join(" ");
alert(newStr);
let newArr = oldArray.slice(3,6);
let newString = oldStr.split(" ").slice(2,5).join(" ");
let objArr = [];
objArr[0] = {
    brand:'Toyota',
    model:'Camry',
};
objArr[1] = {
    brand:'MSI',
    model:'G-62',
};
objArr[2] = {
    brand:'Sony',
    model:'PS5',
};
objArr[3] = {
    brand:'AOC',
    model:'24W',
};
let newObjArr = objArr.slice(0,2);


// splice
let oldArray = [1,2,3,4,5,6,7,8,9];
oldArray.splice(0,1);
let oldArrayStr = ['кто','сидел', 'на', 'моем', 'стуле'];
oldArrayStr.splice(0,1);
let newArrayStr = ['кто сидел на моем стуле', 'что делать в данной ситуации', 'быть или не быть вот в чем вопрос'];
newArrayStr.splice(1,1);
let newStr = 'aaaabbbbbcccccc';
let newArray = newStr.split('');
newArray.splice(0,3);
let objArr = [];
objArr[0] = {
    brand:'Toyota',
    model:'Camry',
};
objArr[1] = {
    brand:'MSI',
    model:'G-62',
};
objArr[2] = {
    brand:'Sony',
    model:'PS5',
};
objArr[3] = {
    brand:'AOC',
    model:'24W',
};
objArr.splice(0,1);


// concat
let firstArr = [1,2,3,4,5,6];
let secondArr = [7,7,8,9,5,4,6];
let newArr = [];
newArr = firstArr.concat(secondArr);
let firstStr = 'Кто сидел';
let secondStr = 'На моем стуле';
let newStr = firstStr.concat(secondStr);
let firstStrArr = ['Быть или не быть'];
let secondStrArr = ['Вот в чем вопрос'];
let newStrArr = firstStrArr.concat(secondStrArr);
let oldArray = ['кто','сидел', 'на', 'моем', 56, 45, 79, 'стуле'];
let newArray = [54,2,3];
let fullArray = oldArray.concat(newArray);


// map
let nums = [1,2,3,4,5,6];
let newArr = nums.map(function(num) {
    return num += 1;
});
let oldArrayStr = ['кто сидел на моем стуле', 'что делать в данной ситуации', 'быть или не быть вот в чем вопрос'];
let newArrayStr = oldArrayStr.map(function(newStr) {
    return newStr.toUpperCase();
});
let objArr = [];
objArr[0] = {
    name:'John',
    age: 25,
};
objArr[1] = {
    name:'Mike',
    age: 42,
};
objArr[2] = {
    name:'Alex',
    age: 30,
};
objArr[3] = {
    name:'Julia',
    age: 18,
};
let newObjArr = objArr.map(function(somebody) {
    return {fullName: `${somebody.name} ${somebody.age}`};
});
let squareNums = nums.map(function(num) {
    return num ** 2;
});
let lowerStr = newArrayStr.map(function(newStr) {
    return newStr.toLowerCase();
});


// filter
let nums = [1,2,3,4,5,6,7,8,10,12,11,14,16,15];
function positiveInteger(array) {
    return array.filter(item => item % 2 == 0);
};
let oldArrayStr = ['кто сидел на моем стуле', 'что делать в данной ситуации', 'быть или не быть вот в чем вопрос','aaaa'];
function strLength(array) {
    return array.filter(item => item.length >= 5);
};
let objArr = [];
objArr[0] = {
    name:'shoes',
    price: 900,
};
objArr[1] = {
    name:'shirt',
    price: 1200,
};
objArr[2] = {
    name:'cap',
    price: 500,
};
objArr[3] = {
    name:'jacket',
    price: 1500,
};
function getPrice(array) {
    return array.filter(item => item.price > 1000);
};


// reduce
let nums = [1,2,3,4,5,6,7,8,10,12,11,14,16,15];
function getSum(array) {
    let result = array.reduce((sum, item) => sum + item);
    return result;
}
let oldArrayStr = ['кто сидел на моем стуле', 'что делать в данной ситуации', 'быть или не быть вот в чем вопрос','aaaa'];
function concatStr(array) {
    let result = array.reduce((str, item) => str + item);
    return result;
}
function getMulti(array) {
    let result = array.reduce((multi, item) => multi * item);
    return result;
}
let objArr = [];
objArr[0] = {
    name:'John',
    age: 25,
};
objArr[1] = {
    name:'Mike',
    age: 42,
};
objArr[2] = {
    name:'Alex',
    age: 30,
};
objArr[3] = {
    name:'Julia',
    age: 18,
};
function getMidAge(array) {
    let result = array.reduce((sum, item) => sum + item.age, 0) / array.length;
    return result;
};
function getSumPositive(array) {
    let result = array.reduce((sum, item) => sum + item * !(item & 1), 0);
    return result;
}


// sort
let secondArr = [7,7,8,9,5,4,6];
function sortArr(array) {
    let result = array.sort((a, b) => a - b);
    return result;
}
let oldArrayStr = ['ббббббб', 'что делать в данной ситуации', 'быть или не быть вот в чем вопрос','ааааа', 'кто сидел на моем стуле'];
function sortStr(array) {
    let result = array.sort();
    return result;
};
function sortObj(array) {
    let result = array.sort((a, b) => a.age - b.age);
    return result;
}
function sortNewArr(array) {
    let result = array.sort((a, b) => b - a);
    return result;
}
function sortReverse(array) {
    let result = array.sort((a, b) => a < b ? 1 : -1);
    return result;
}


// forEach
let oldArrayStr = ['ббббббб', 'что делать в данной ситуации', 'быть или не быть вот в чем вопрос','ааааа', 'кто сидел на моем стуле'];
let objArr = [];
objArr[0] = {
    name:'John',
    age: 25,
};
objArr[1] = {
    name:'Mike',
    age: 42,
};
objArr[2] = {
    name:'Alex',
    age: 30,
};
objArr[3] = {
    name:'Julia',
    age: 18,
};
let secondArr = [7,7,8,9,5,4,6];
secondArr.forEach((item) => console.log(item));
oldArrayStr.forEach((item) => console.log(item));
objArr.forEach((item) => console.log(`Имя ${item.name} Возраст ${item.age}`));
let newSum = 0;
secondArr.forEach((item) => newSum += item);
console.log(newSum);
oldArrayStr.forEach((item) => console.log(`Количество символов в строке: ${item.length}`));


// find
let nums = [1,2,3,4,5,6,7,8,10,12,11,14,16,15];
let oldArrayStr = ['ббббббб', 'что делать в данной ситуации', 'быть или не быть вот в чем вопрос','ааааа', 'кто сидел на моем стуле'];
let objArr = [];
objArr[0] = {
    name:'John',
    age: 25,
};
objArr[1] = {
    name:'Mike',
    age: 42,
};
objArr[2] = {
    name:'Alex',
    age: 30,
};
objArr[3] = {
    name:'Julia',
    age: 18,
};
console.log(nums.find((item) => item > 10));
console.log(oldArrayStr.find((item) => item.includes('а')));
console.log(objArr.find((item) => item.age > 30));
console.log(nums.find((item) => item % 2 === 0));
console.log(oldArrayStr.find((item) => item.startsWith('а')));