//==== KIỂU DŨ LIỆU MẢNG(ARRAY) TRONG JAVASCRIPT =====

//=== Mảng một chhiều === 
/*Khai báo mảng*/
var arr = new Array(1, 2, 3, 4); //Mảng số
var arr2 = [1, 2, 3, 4, 5]; //Mảng số
var arr3 = ['Suna', 'Lika', 'Sunny', 'Luna']; //Mảng chuỗi 
var arr4 = [{
    name: 'Suna',
    age: 20
},
{
    name: 'Luna',
    age: 21
}
]; //Mảng đối tượng
/**
 * console.log(Array.isArray(arr3)); //kiểm tra xem có phải là mảng không
 * console.log(typeof arr3); //object
 */

/* Các phương thức để thao tác với mảng */

//length: trả về độ dài của mảng (hay là số lượng phần tử)
var soLuongPt = arr2.length;
//Duyệt mảng thì dùng vòng lặp để duyệt
function duyetMang(arr) {
    let slArr = arr.length;
    for (let i = 0; i < slArr; i++) {
        console.log(arr[i]);
    }
}

//to string: hiển thị các phần tử của mảng
console.log(arr3.toString()); //Suna,Lika,Sunny,Luna

//join: kết hợp các phần tử của mảng bằng 1 kí tự phân tách
console.log(arr3.join(' ')); //Suna Lika Sunny Luna
console.log(arr3.join(' - ')); //Suna - Lika - Sunny - Luna

//push: thêm một hoặc nhiều phần tử vào cuối mảng
arr3.push('Liliana', 'Butterfly');

//unshift: thêm một hoặc nhiều phần tử vào đầu mảng
arr3.unshift('Hellen');

//pop: xóa phần tử cuối cùng của mảng về trả về phần tử đó
arr3.pop();

//shift: xóa phần tử đầu tiên của mảng về trả về phần tử đó
arr3.shift();

//concat: kết hợp hay hay nhiều mảng với nhau
var arrnumber = [1, 2, 3, 4];
var arrstr = ['Một', 'Hai', 'Ba'];
console.log(arrnumber.concat(arrstr));

//slice: sao chép một phàn của mảng và bỏ vào mảng mới dựa vào vị trí start, end
var newSlice = arrnumber.slice(2, 4); //[3, 4]

/** splice: dùng để thêm, xóa, sửa phần tử bên trong mảng
 * array.splice(startIndex, deleteCount, item1, item2, ..., itemN)
 * startIndex là chỉ số bắt đầu của phần tử trong mảng mà ta muốn bắt đầu thay đổi.
 * deleteCount là số lượng phần tử muốn xóa từ startIndex
 * item1, item2, ..., itemN là các phần tử mà ta muốn thêm vào mảng, bắt đầu từ vị trí startIndex.
 */
var fruits = ['apple', 'bnana', 'mango', 'orange'];
console.log(fruits.splice(1, 2)); //xóa 2 phần tử từ vị trí thứ 1
fruits.splice(1, 0, 'coconut'); //Thêm 1 phần tử coconut từ vị trí thứ 1
fruits.splice(1, 1, 'papaya', 'guava'); //Xóa 1 phần tử từ vị trí số 1 và thay thế bằng papaya, guava

//index of: dùng để tìm chỉ mục của phần tử trong mảng
console.log(arrnumber.indexOf(2));

//includes: kiểm tra xem 1 phần tử có thuộc 1 mảng nào đó hay không
var number2 = 2;
console.log(arrnumber.includes(number2));

console.log('============');

var arrnumber = new Array(1, 2, 3, 4, 5);
var arrnumber2 = ['red', 'blue', 'violet'];
console.log(arrnumber);

//=== Bổ sung ===

//at: trả về giá trị của phần tử ứng với chỉ mục (chỉ mục là đối số)
console.log('== At ===');
console.log(arrnumber2.at(1));

//copyWithin: sao chép các phần tử của mảng vào các vị trí khác trong chính mảng đó (không làm thay đổi số lượng phần tử của mảng)
var arrCurrent = [1, 2, 3, 4, 5, 6];
arrCurrent.copyWithin(2, 0, 2); //Sao chép các phần tử từ vị trí 0 đến 2, sao đó copy chúng vào vị trí thứ 2 của mảng

//entries: trả về 1 hoặc nhiều cặp [key, value] của mảng
console.log('== Entries ===');
for (let [index, value] of arrCurrent.entries()) {
    console.log(index, value);
}

//flat: làm phẳng mảng (biến mảng đa chiều thành 1 chiều)
console.log('== Flat == ');
var arr = [
    [1, 2, 3],
    [4, 5], 6
];
console.log(arr.flat());

//IndexOf: tìm chỉ mục của phần tử
var rsIndexOf = arrnumber2.indexOf('blue'); //1

//LastIndex of: tìm vị trí cuối cùng của phần tử ở trong mảng
var rsIndexOf = arrnumber2.lastIndexOf('blue'); //1

//reverse: đảo ngược thứ tự của mảng
var arrReserve = [1, 2, 3, 4, 5];
console.log(arrReserve.reverse());

//shift: loại bỏ phần tử đầu tiên và trả về phần tử đó
var fruits = ['apple', 'orange', 'mango', 'bnana', 'coconut'];
var rsFruit = fruits.shift(); //xóa apple ra khỏi mảng và trả về giá trị của apple cho biến được gán

//slice: copy mảng ban đầu và trả về mảng mới
var sliceFruits = fruits.slice(1, 3);
console.log(sliceFruits);

//sort: sắp xếp mảng theo thứ tự unicode
console.log(fruits.sort());


//Hàm thêm 1 phần tử vào cuối mảng
function themCuoiMang(arr, value) {
    arr[arr.length] = value;
}

//Hàm thêm 1 phần tử vào đầu mảng
function themDauManng(arr, value) {
    let newArr = new Array(length + 1);
    for (let i = 0; i < arr.length; i++) {
        newArr[i + 1] = arr[i];
    }
    newArr[0] = value;
    for (let i = 0; i < newArr.length; i++) {
        arr[i] = newArr[i];
    }
}

//Hàm thêm 1 phần tử vào vị trí bất kì trong mảng
function themBatKi(arr, value, index) {
    if (index <= arr.length) {
        if (index === 0) {
            themDauManng(arr, value);
        } else if (index === arr.length) {
            themCuoiMang(arr, value);
        } else {
            for (let i = arr.length; i > index; i--) {
                arr[i] = arr[i - 1];
            }
            arr[index] = value;
        }
    }
}

//Hàm xóa 1 phần tử đầu tiên của mảng
function xoaDauTien(arr) {
    let newArr = new Array(arr.length - 1);
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = arr[i + 1];
    }
    for (let i = 0; i < newArr.length; i++) {
        arr[i] = newArr[i];
    }
}

//Hàm xóa phần tử tại vị trí bất kì
function xoaBatKi(arr, index) {
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
}


//=== Mảng hai chhiều === 
var numberHaiChieu = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
/* Hiển thị mảng 2 chiều */
for (let i = 0; i < numberHaiChieu.length; i++) {
    let row = '';
    for (let j = 0; j < numberHaiChieu[i].length; j++) {
        row += numberHaiChieu[i][j] + ' ';
    }
    console.log(row);
}