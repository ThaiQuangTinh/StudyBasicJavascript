// == Inner html và Outer html (chèn )

//Inner html (thay đổi nội dung bên trong phần tử: phần tử, thuộc tinh, text)

var box = document.querySelector('.box');
box.innerHTML = '<h1>Đây là nội dung</h1>';
console.log(box.innerHTML);

//Oouter html (truy cập và thay đổi phần tử hiện tại - chính nó)
var box2 = document.querySelector('.box2');
console.log(box2.outerHTML);  //Lấy ra chính nó và cả những gì nó chứa
box2.outerHTML = '<h3>Đã bị thay thế </h3>';