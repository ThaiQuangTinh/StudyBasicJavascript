// ==== DOM style === 
/**
 * Chỉ dùng để CSS inLine
 * Cung cấp getter và setter
 * Lấy ra value của css inLine hoặc css inLine
 */

var box = document.querySelector('.box');
//Tiến hành css cho class: box
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'red';

/** Viết cách khác
 * Truyền vào 2 đối số: box.style, object được hợp nhất cho đối số thứ nhất
 */
var box2 = document.querySelector('.box2');
//Sao chép các thuộc tính từ 1 hoặc nhiều đối tượng nguồn vào một đối tượng đích, trả về đối tượng đích
Object.assign(box2.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
});

//Lấy ra giá trị của thuộc tính css
console.log(box2.style.backgroundColor);

//
console.log(box.style);