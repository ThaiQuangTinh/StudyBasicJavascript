// ==== VÒNG LẶP TRONG JAVASCRIPT ====

/* Vòng lặp while (kiểm tra điều kiện rồi mới thực hiện lệnh),
 lặp vói số lần chưa biết trước */
var arr = [1, 2, 3, 4, 5];
var i = 0;
var doDai = arr.length;
console.log('Vòng lặp while: ');
while (i < doDai) {
    console.log(arr[i]);
    i++;
};

/*Vòng lặp do while (chạy lệnh trước và kiểm tra điều kiện sau),
  đảm bảo câu lệnh được thực thi ít nhất 1 lần*/
console.log('==========');
var i2 = 0;
var result = '';
console.log('Vòng lặp do while: ');
do {
    result += arr[i2] + ' ';
    i2++;
}
while (i2 < doDai);

console.log(result);
console.log('==========');

/*Vòng lặp for, lặp với số lần biết trước */
//Cho mảng sau
var dssv = ['Liliana', 'Kirixi', 'Luna', 'Kensi'];
var soLuongSv = dssv.length;
for (let j = 0; j < soLuongSv; j++) {
    console.log(dssv[j]);
}
console.log('==========');
/* Vòng lặp for in : lặp lại các thuộc tính của đối tượng hoặc lấy chỉ số  */
console.log('Vòng lặp for in: ');
for (let index in dssv) {
    console.log(`${index}: ${dssv[index]}`);
}
console.log('==========');
/* Vòng lặp for of : lặp lại các phần tử của mảng hoặc đối tượng */
console.log('Vòng lặp for of: ');
for (let value of dssv) {
    console.log(value);
}