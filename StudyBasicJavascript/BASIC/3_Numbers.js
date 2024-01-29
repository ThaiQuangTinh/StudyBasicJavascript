//====== CÁC VẤN ĐỀ XOAY QUANH KIỂU DỮ LIỆU SỐ ======
/* Kiểm tra xem 1 giá trị có phải là số hay không */
var num1 = 5;
var rsNum1 = (!isNaN(num1)) ? true : false; //true (là 1 số)
var rsNum2 = (typeof num1 === 'number') ? true : false; //true
/* Khao báo theo cách khác */
var num2 = new Number(2);
var num3 = Number(2);
console.log(num2.valueOf());


// ======== ĐỐI TƯỢNG MATH TRONG Javascript

//=== Các phương thức liên quan đến toán học ===
//Abs - trả về giá trị tuyệt đối 
var a1 = Math.abs(-5); // 5
//Celi - làm tròn trên (lên số nguyên gần nhất)
var a2 = Math.ceil(2.1); //3
//Floor - làm tròn dưới (xuống số nguyên gần nhất)
var a3 = Math.floor(2.9); //2
//Round - làm tròn lên trên hoặc dưới phụ thuộc vào phần thập phân
var a4 = Math.round(2.5); //3
var a5 = Math.round(2.1); //2
var a6 = Math.round(2.6); //3
//Min, max - trả về giá trị nhỏ nhất và lớn nhất từ các đối số truyền vào
var a7 = Math.min(1, 2, 3, 4, 5, 0.5); //0.5
var a8 = Math.max(1, 2, 3, 4, 5, 0.5); //5
//Pow - hàm số lũy thừa
var a9 = Math.pow(2, 4); //16
//Sqrt - căn bậc 2
var a10 = Math.sqrt(100); //10

// == Trigonometry === (Hàm số lượng giác)
/** đơn vị là radian
 * sin (x) 
 * cos (x)
 * tan (x)
 * asin (x)
 * ascos (x)
 * atan (x)
 * atan2 (x) (y, x): tính tỉ lệ y/x
 * exp (x) : hàm số e mũ x
 * log (x) : cơ số e của x
 * log10 (x) : cơ số 10 của x 
 */
var b1 = Math.sin(60);

// === Các phương thức khác
//random - phạm vi : 0 <= x < 1  (theo toán học: [0, 1) - từ 0 đến 1 nhưng không có số 1 - vì <1 nên không có số 1) 
var b2 = Math.random();
/* Làm tròn 1 số ngẫu nhiên từ 0 đến n */
var b3 = Math.floor(Math.random());
/**
 * Tạo sô ngẫu nhiên từ 0 đến < n (0 <= x < n hay [0, n) )
 * Mặc định phạm vi ban đầu là 0 <= x < 1
 * Nếu đem nhân 5 thì phạm vi lúc này sẽ là 0 <= x < 5 hay [0, 5)
 */
var b4 = Math.floor(Math.random() * 5); //Nhân với n
/* Taọ só ngẫu nhiên từ 0 đến <= n (0 <= x < n) - có chứa n thì tăng lên 1 đơn vị */
var b5 = Math.floor(Math.random() * 6); //Nhân với n + 1
/* Tạo 1 số ngẫu nhiên trong khoảng min - max [min, max) */
var min = 5;
var max = 10;
var b6 = Math.floor(Math.random() * (max - min) + min);
/** Giải thích 
 * Floor: làm tròn dưới (0.1 -> 0)
 * Random: sinh số ngẫu nhiên từ [0, 1) (không bao gồm số 1 -- tại vì < 1) 
 * Nhân với (max-min) để sinh các số từ 0 đến (max-min) -- [0, (max-min)]
 * Ví dụ: nếu nhân với 5 thì sẽ sinh các số từ [0, 5); -- sinh ra 0, 1, 2, 3, 4
 * Ví dụ: nếu muốn sinh ra các số từ [0, 5] (có chứa 5) thì ta đem hàm random nhân 6 (1, 2, 3, 4, 5)
 * Ở biến b6, lấy random * (10-5) tức là sẽ có phạm vi từ [0, 5)
 * Sau đó đem cộng 2 phạm vi [0, 5) cho min (min = 5) thì ta sẽ có phạm vi [0+5, 5+5) hay [5, 10)
 * Kết quả: nhận ngẫu nhiên 1 trong các số (5, 6, 7, 8, 9);
 */

//==== Bổ sung ===

console.log(new Number(3));
//isFinite: xác định xem 1 giá trị được truyền có phải là 1 số hữu hạn hay không
console.log(Number.isFinite(3)); //true
console.log(Number.isFinite('Hello')); //false

//isInteger: xác định giá trị truyền vào có phải là 1 số nguyên hay không
console.log(Number.isInteger(4)); //true
console.log(Number.isInteger(4.5)); //false

//isNaN: xác định xem giá trị truyền vào có đúng là 1 số không hợp lệ hay không
//NaN: giá trị đại diện cho 1 giá trị không phải là số hợp lệ hoặc không phải là biểu thức hợp lệ trong phép toán số học
console.log(Number.isNaN(10 / 'hello')); //true
console.log(Number.isNaN(10 / 2)); //false

var v1 = 3.2323;
//toFixed: làm tròn và chuyển đổi dựa trên số lượng số các chữ số phần thập phân
console.log(v1.toFixed(2));
//toString: hiển thị số dưới dạng chuỗi
console.log(v1.toString());
console.log(v1.toString(2)); //chuyển về dạng cơ số 2
console.log(v1.toString(16)); //chuyển về dạng cơ số 16

//valueOf: trả về giá trị nguyên gốc của 1 đối tượng
console.log(v1.valueOf());

//Chuyển từ chuỗi sang số
var soN = '123';
var NumSoN = Number(soN);
console.log(NumSoN);
console.log(+soN);