//==== REGULAR EXPRESSION ====

/** Biểu thức chính quy
 * Là một chuỗi các kí tự tạo thành một mẫu tìm kiếm
 * Dùng cho các hoạt động tìm kiếm và thay thế văn bản
 * Cú pháp: /pattern/modifiers 
 * Các phương thức thường dùng: search, replace
 */


/** Regular expression modifiers (có thể kết hợp cả igm)
 * i: tìm kiếm và khớp các giá trị không phân biệt hoa và thường
 * g: tìm kiếm và khớp tất cả kết quả (áp dụng cho tất cả các kết quả phù hợp)
 * m: tìm kiếm và khớp kết quả trên nhiều dòng
 */

var text = 'Hello, I learning Javascript HTML \nCSS, JavaScript is very hard. Javascript';
console.log(text);
//match: tìm và trích xuất các phần tử khớp với 1 biểu thức chính quy hoặc 1 giá trị từ string
console.log(text.match(/Javascript/ig));
//i
console.log('== i == \n' + text.match(/JavaSCript/i));
//g
console.log('== g == \n' + text.match(/Javascript/g));
//m
console.log('== m == \n' + text.match(/Javascript/m));

/** Brackets: dấu ngoặc 
 * [abc]: tìm bất kì kí tự nào bên trong dấu ngoặc
 * [0-9]: tìm bất kì chữ số nào bên trong dấu ngoặc
 * (a|b): tìm bất kì giá trị nào được phân tách bằng |
 */

var text2 = 'Hello everyone';
console.log(text2.match(/[e]/g)); //['e', 'e', 'e', 'e']
var textNumber = '0339643240';
console.log(textNumber.match(/[0-3]/g)); //['0', '3', '3', '3', '2', '0']
var textColor = "re, green, red, green, gren, gr, blue, yellow";
console.log(textColor.match(/(red|green|blue)/g));

/** Metacharacter
 * \d: tìm một chữ số
 * \s: tìm kí tự khoảng trắng
 * \b: tìm kiếm một kết hợp ở vị trí bắt đầu hoặc kết thúc của một từ trong chuỗi
 */

var text3 = 'Donate 20k ';
console.log(text3.match(/\d/g)); //['2', '0']
console.log(text3.match(/\s/g));
console.log(text3.search(/\bDo/));

/** Quantifiers 
 * n+: tìm những giá trị chứa ít nhất 1 lần xuất hiện của n
 * n*: chứa các chuỗi con chứa n hoặc không có n trong chuỗi
 * n?: chứa các chuỗi con chứa 1 lần n hoặc không có n trong chuỗi
 */

var text4 = 'a ha ca aaa hi ho';
console.log(text4.match(/a+/g));
var text5 = "abc aaa abbbc";

var regex1 = /a*/g;
var regex2 = /a?/g;

var results1 = text5.match(regex1);
var results2 = text5.match(regex2);
console.log(results1);
console.log(results2);

//Method test: kiểm tra một chuỗi có khớp với biểu thức chính quy hay không
var pattern = /e/;
console.log(pattern.test('Hello everyone'));

//Method excec: kiểm tra một chuỗi có khớp với biểu thức chính quy hay không, nếu khớp thì trả về 1 đối tượng, ngược lại trả về null
console.log(/e/.exec("The best things in life are free!"));

