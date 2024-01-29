// === Enhanced object literals === 
/**
 * Định nghĩa key: value cho object
 * Định nghĩa method cho object
 * Định nghĩa key cho object dưới dạng biến
 */

// Định nghĩa key: value cho object
var Name = 'Javascript';
var Price = 1000;

var course = {
    Name,
    Price
};
console.log(course);

//Định nghĩa method cho object

var nameSt = 'Liliana';
var age = 20;
var student = {
    nameSt,
    age,
    get nameSt() {
        return this.nameSt;
    }
};

// Định nghĩa key cho object dưới dạng biến
var n1 = 'weight';
var n2 = 'height';

var Animal = {
    [n1]: 30,
    [n2]: 80
};

console.log(Animal);