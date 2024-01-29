//==== GET ELEMENT METHODS =====
/**
 * Element:  id, class, tag name(tên của thẻ: div, h, p,..), css selector, html collection
 * Get element by id 
 * Get element by class
 * Get element by tag name
 * Query selector
 * 
 */

//Get element by id: lấy phần tử dựa vào ID 
console.log('==== ID ===');
var idHeading = document.getElementById('heading'); //Trả về duy nhất một đối tượng
console.log(idHeading); 

//Get element by className: lấy phần tử dựa vào class 
console.log('==== Class ===');
var classHeading = document.getElementsByClassName('heading2'); 
console.log(classHeading);
//Lấy riêng từng phần tử
for (let value of classHeading) {
    console.log(value);
}

//Get element by tag Name: lấy phần tử thông qua tên của các thẻ
console.log('==== Tag name ===');
var tagNameP = document.getElementsByTagName('p');
//Lấy riêng từng phần tử
console.log(tagNameP);
for (let value of tagNameP) {
    console.log(value);
}

//Query selector: trả về duy nhất 1 phần tử
console.log('==== Query selector ===');
var querySelector1 = document.querySelector('#heading');
console.log(querySelector1);
var querySelector2 = document.querySelector('.heading2');
console.log(querySelector2);
var querySelector3 = document.querySelector('.qselector li');
console.log(querySelector3);

//Query selector all: trả về nhiều phần tử
var querySelectorAll1 = document.querySelectorAll('.qselector li');
console.log(querySelectorAll1);
for (let value of querySelectorAll1) {
    console.log(value);
}