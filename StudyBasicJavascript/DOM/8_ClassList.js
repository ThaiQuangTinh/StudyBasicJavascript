// === CLASS LIST === 
/**
 * Quản lí class của element
 * add: thêm class vào element
 * contains: kiểm tra xem 1 class có nằm trong 1 element không
 * remove: xóa class khỏi elemet
 * toggle: nếu class đã tồn tại thì xóa class đó, ngược lại thì thêm class vào phần tử
 * ................................
 */

var box1 = document.querySelector('.box1');
console.log(box1.classList);

//Lấy ra tất cả các class của phần tử hiện tại
var rs = box1.classList;
for (let value of rs) {
    console.log(value);
}
console.log(rs.value);
console.log('=========');

//Kiểm tra các phương thức
var bal = document.querySelector('.bal');
//add: thêm class 
bal.classList.add('bal1', 'bal2'); //Thêm 2 class bal1 và bal2 vào phần tử có class là bal
console.log(bal.classList);

//contains: kiểm tra xem có class tồn tại bên trong phần tử hay không (true or false)
console.log('== Contains ==');
if (bal.classList.contains('bal1')) {
    console.log('Có tồn tại');
} else {
    console.log('Không tồn tại');
}

//entries: trả về 1 đối tượng hỗ trợ duyệt các class bên trong phần tử
console.log('== Entries ==');
var rsEntries = bal.classList.entries();
for (let entry of rsEntries) {
    console.log(entry);
}

//foreach: lặp qua từng lớp và thực hiện một hàm 1 lần cho mỗi lớp
console.log('== Foreach ==');
bal.classList.forEach(className => {
    console.log(className);
});

//item: trả về class tại vị trí cụ thể
console.log('== Item ==');
console.log(bal.classList.item(1));

//remove: xóa class dựa vào tên của class đó
bal.classList.add('hello');
bal.classList.remove('hello');

/** Replace(classOld, classNew)
 * thay thế class cũ bằng một class mới
 * nếu class cũ không tồn tại thì sẽ không có điều gì xảy ra
 */

bal.classList.replace('bal2', 'bal3');

//toString: chuyển đổi danh sách class thành một chuỗi
console.log('== To string ==');
console.log(bal.classList.toString());

//values: trả về một đối tượng chứa tất cả các tên lớp của phần tử hiện tại
console.log('== Values == ');
var rsValues = bal.classList.values();
for (let value of rsValues) {
    console.log(value);
}

//toggle: nếu class đã tồn tại thì xóa class đó, ngược lại thì thêm class vào phần tử
bal.classList.toggle('bal3'); //xóa class bal3 vì nó đã tồn tại
bal.classList.toggle('bal4'); //xóa class bal4 vì nó chưa tồn tại