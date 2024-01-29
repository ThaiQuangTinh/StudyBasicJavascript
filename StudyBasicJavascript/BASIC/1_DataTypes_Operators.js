//========== CÁC KIỂU DỮ LIỆU CÓ TRONG JAVASCRIPT ===========
// console.log(<tên biến>); -- để in giá trị ra màn hình

var a = 5; //kiểu số (number)    
var b = true; //kiểu đúng sai (logic), fale : false, 0, "", '', null, undefined, NaN
var c = 'Hello các bạn'; //Kiểu chuỗi kí tự (string)
var d = null; //Kiểu null
var e; //kiểu undefined
var f = {
    name: 'Liliana',
    height: 172,
    sex: 'female'
} //Kiểu object 
var g = [1, 2, 3, 4, 5]; //Kiểu mảng: số, kí tự, object
var h = new Object();
h.with = 10, h.height = 20;

console.log(typeof f);  //Kiểm tra kiểu dữ liệu

/** Phạm vi khai báo biến
 * var: phạm vi toàn cục
 * let: phạm vi trong 1 khối {} và cả khối con của nó nữa
 * const: phạm vi giống như let nhưng giá trị của const là duy nhất
 */

//========== CÁC TOÁN TỬ CÓ TRONG JAVASCRIPT =========== (gần giống các ngôn ngữ lập trình khác)
/** Có thể áp dụng cho kiểu Number, String, Boolean
 * Toán tử số học: +, -, *, /, %, ++, --, **(lũy thừa)
 * Toán tử gán: =, +=, -=, *=, /=, %=, **=
 * Toán tử so sánh: ==, ===, !=, !==, >, >=, <, <=
 * Toán tử logic: !(không bằng), &&(và), ||(hoặc)
 * Toán tử chuỗi (+): ghép chuỗi
 * Toán tử 3 ngôi: condition ? value1 : value2
 * typeof: kiểm tra kiểu dữ liệu
 * instanceof: kiểm tra xem 1 đối tượng có thuộc về 1 kiểu dữ liệu cụ thể hay không + 
 * (kiểm tra 1 đối tượng có thuộc 1 lớp)
 * ...
 */




