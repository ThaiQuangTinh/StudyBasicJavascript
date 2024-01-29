// ==== Inner text & Text content 
/**
 * inner text: tồn tại trên element node
 * text content: tồn tại trên cả element node và text node
 */

// Dùng inner text và text content để lấy ra nội dung bên trong phần tử
console.log('=========');
var headingElement = document.querySelector('.headingText');
console.log(headingElement.innerText);
console.log(headingElement.textContent);

//Thay đổi nội dung của text node bên trong element node
var headingElement2 = document.querySelector('.headingText2');
headingElement2.innerText = 'Xin chào các bạn';
console.log('=========');
console.log(headingElement2);

/**
 * The similarities and differences between innerText and textContent.
 * Text node là đối tượng đại diện cho đoạn văn bản trong html
 * Element node chứa text node
 * Inner text: lấy ra nội dung của những element con ở bên trong (bị ảnh hưởng từ css)
 *  bỏ qua thẻ script và style,
 *  hay nói cách khác là lấy ra những gì nhìn thấy trên trình duyệt
 * Text content: lấy ra nội dung, lấy ra các khoảng cách bên trong, 
 *  lấy cả phần tử bên trong tag name (không bị ảnh hưởng bởi css)
 */

// === Ví dụ ===
console.log('=== Ví dụ 1 === ');
var ex1 = document.querySelector('.classHeading');
console.log(ex1.innerText);
console.log(ex1.textContent);

console.log('=== Ví dụ 2 === ');
var ex2 = document.querySelector('.classHeading2');
console.log(ex2.innerText);
console.log(ex2.textContent);

console.log('=== Ví dụ 3 === ');
var ex3 = document.querySelector('.classHeading3');
console.log(ex3.innerText);
console.log(ex3.textContent);

//Viết như này thì nó sẽ không hiểu đây là một element node
(document.querySelector('.h4E')).textContent = '<a>Đây là đường dẫn</a>';



var text, text2;
text = document.querySelector('.text');
text2 = document.querySelector('.text2');

//Thêm text vào bên trong element
document.querySelector('.text').textContent = 'Hello các bạn';
document.querySelector('.text2').innerText = ` Hello 

các bạn nhé

`;

console.log(text2);