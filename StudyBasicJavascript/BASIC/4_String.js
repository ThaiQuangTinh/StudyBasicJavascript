// ====== STRING (KIỂU DỮ LIỆU CHUỖI KÍ TỰ) TRONG JAVASCRIPT =====

var str = new String('Liliana');
console.log(str.valueOf());
var str1 = 'Hello'; //Hoặc var str1 = "Hello", trong JS thì ('' = "")
//Kiểm tra kiểu dữ liệu
var kiemTraKDL = typeof str1; // string
//Nối chuỗi 
var str2 = 'Everyone';
var strNoi = 'Hi';
strNoi += str1; //HiHello
var str3 = str1 + ' ' + str2; //Hello evryone

//== Hiển thị chuỗi ===
var fistName = 'Lili', lastName = 'ana';
console.log('Họ tên là: ' + fistName + lastName); //Họ tên là: Liliana
console.log(`Họ tên là: ${fistName} ${lastName}`);//Họ tên là: Lili ana

/** Lệnh nhập và in chuỗi ra màn hình
 * var fullName = prompt("Enter your name:");
 * console.log("Hello, " + fullName + "!");
 */

// === CÁC PHUUƠNG THỨC THƯỜNG DÙNG VỚI STRING ===
//lenght: trả về độ dài của chuỗi
var fullName = 'Liliana';
var fullName2 = 'Nguyệt Mị Ly Ly';

var lenghtFullName = fullName.length; // 7

//charAt: trả về kí tự tại ví trí index trong chuỗi
var charFullName = fullName.charAt(1); // 'i'

//concat: nối nhiều chuỗi lại với nhau
var ccFullName = 'Lili'.concat('ana').concat('<3'); //Liliana<3

//toUpperCase: chuyển sang chuỗi hoa
var upcFullName = fullName.toUpperCase(); //LILIANA

//toLowerCase: chuyển sang chuỗi thường
var locFullName = fullName.toLowerCase(); //liliana

//slice: lấy chuỗi từ vị trí này -> kia
var sliceFullname = fullName.slice(0, 4); //Lili

//serch: trả về vị trí xuất hiện đầu tiên của chuỗi
var searchFullname = fullName.search('li'); //3

//indexOf: trả về vị trí xuất hiện đầu tiên của chuỗi tại 1 vị trí nào đó
var idofullName = fullName2.indexOf('L', 9); //10

//lastIndexOf: trả về vị trí xuất hiện cuối cùng của chuỗi tại 1 vị trí nào đó
var liofullName = fullName2.lastIndexOf('L', fullName2.length-1); //13

//replace: thay thế chuỗi
var rpFullName = 'Liliana haha';
var rpFullName2 = rpFullName.replace('haha', 'hihi'); //Liliana hihi
var test = 'Hello JS trong JS';
/* Thay thế tất cả chuỗi có JS bằng C */
var rpTest = test.replace(/JS/g, 'C'); //Hello C trong C

//split: tách chuỗi dựa vào kí tự phân cách (có thể kèm theo giới số lượng chuỗi được split)
var listName = 'Liliana, Lariel, Krixi, Butterfly';
var splitName = listName.split(',', 4); //Mảng: ['Liliana', ' Lariel', ' Krixi', ' Butterfly']

//trim: xóa khoảng trắng (lefy = start, right = end)
var fullName3 = '  Liliana   ';
var trimFullname3 = fullName3.trim(); //Liliana

//includes: kiểm tra xem 1 chuỗi có chứa chuỗi con hay không
var address = 'Hoai Hao';
var icdAddress = address.includes('Hao', 0); //true
console.log(icdAddress);

// hasOwnProperty, isPrototypeOf




