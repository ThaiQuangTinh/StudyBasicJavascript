//========== CÁC HÀM CÓ TRONG JAVASCRIPT ===========
/** Các loại hàm
 * Declation function
 * Expression function
 * Arrow function
 * Generator Function
 * Async Function
 * Constructor Function
 * Getter and Setter Function
 */

//=== DECLATION FUNCTION ===
//Không truyền tham số
function hienThi() {
    console.log('Hello');
}

//Có truyền tham số và có trả về
function tinhTong(a, b) {
    return (a + b);
}

//Có truyền tham số và không trả về
function tinhTong2(a, b) {
    console.log(`Giá trị của ${a} + ${b} = ${a + b}`);
}

//Hàm trong hàn
function trungBinhCong(array) {
    function tinhTong() {
        let sum = 0;
        for (let value of array) {
            sum += value;
        }
        return sum;
    }
    let length = array.length;
    return (tinhTong() / length);
}

var arrNumber = [1, 2, 3, 4, 5];
/** Gọi hàm
 * console.log(trungBinhCong(arrNumber));
 */
/* ==== EXPRESSION FUNCTION === (hàm không có tên và được gán cho 1 biến khác,
    khi gọi thì gọi thông qua tên biến và có thể được dùng làm đối số cho hàm khác
*/
//Thông thường
var hienThiHoTen = function() {
    console.log('Họ tên là Liliana');
}

var layHoTen = function() {
    return 'Liliana';
}

var layHoTen2 = function(hoTen) {
    return ('Họ tên là: ' + hoTen);
}

//Gọi hàm 
/**
 * hienThiHoTen();
 * console.log(layHoTen());
 * console.log(layHoTen2('Nguyệt Mị Ly'));
 */

//=== Hàm dùng làm đối số cho hàm khác ===
//- Trường hợp declation function - định nghĩa trước một cái hàm (ở đây là hàm in ra giá trị)
function hienThiGiaTri(value) {
    console.log(value + ' ');
}

//cnFunction là 1 tham số, tham số này chính là 1 function
function duyetMang(array, cbFunction) {
    for (let value of array) {
        cbFunction(value);
    }
}

//function hienThiGiaTri được lấy làm đối số cho hàm duyetMang
/** Gọi hàm
 * duyetMang(arrNumber, hienThiGiaTri)
 */

//- Trường hợp expression function - định nghĩa trước một cái hàm (ở đây là hàm in ra giá trị)
//Thay đổi cách gọi hàm, lúc này expression function được định nghĩa trực tiếp bên trong đối số của hàm duyetMang
/* Gọi hàm
     duyetMang(arrNumber, function (value) {
        console.log(`${value} `);
    });
*/

// === ARROW FUNCTION === 
//Hàm này được viết ngắn gọn, có thể được dùng để làm đối số cho hàm khác
//Arrow function không có tham số
const arrow1 = () => {
    console.log('Hello guys');
}

//Nếu chỉ có 1 câu lệnh trong phần thân của hàm thì không cần ghi dấu {} và ngược lại
const arrow3 = () => console.log('Hello everyone');

//Nếu chỉ có 1 tham số thì không cần ghi dấu () và ngược lại
const arrow2 = number => {
    if (!isNaN(number))
        return true;
    return false;
}

//Cách khác (trong trường hợp này JS tự hiểu phần sau của dấu => là biểu thức có giá trị trả về)
const arrow4 = (a, b) => (a + b);
const arrow5 = (hoTen) => (`Họ tên là: ${hoTen}`);


/** Lần lượt gọi hàm
 * arrow1();
 * arrow3();
 * console.log(arrow2(2));
 * console.log(arrow4(2, 4));
 * console.log(arrow5('Liliana'));
 */

//Arrow function dùng làm đối số
var student = [{
        name: 'Liliana',
        age: 20
    },
    {
        name: 'Butterfly',
        age: 15
    },
    {
        name: 'Krixi',
        age: 21
    },
    {
        name: 'Alice',
        age: 10
    }
];
//Hàm hiển thị danh sách studen trên 18 tuổi
function duyetMang(arrStudent, fnKiemTra) {
    for (let index in student) {
        if (fnKiemTra(arrStudent[index])) {
            console.log(`Name: ${arrStudent[index].name} Age: ${arrStudent[index].age}`);
        }
    }
}

/** Gọi hàm
 * duyetMang (student, ob => (ob.age >= 18));
 */

//====== GENERATOR FUNCTION ======= (tạo ra nhiều giá trị theo cách tuần tự)
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

var generator = generateSequence();
/** Gọi hàm
 * console.log(generator.next().value); // 1
 * console.log(generator.next().value); // 2
 * console.log(generator.next().value); // 3
 */

// === Async Function === (chưa cần dùng tới)

// === Constructor Function === (dùng để tạo đối tượng, giống như phương thức khởi tạo bên Java)
function Animals(name, age, heigt, enviroment) {
    this.name = name;
    this.age = age;
    this.heigt = heigt;
    this.eviroment = enviroment;
}

// Tạo đối tượng từ hàm Animals
var turle = new Animals('Turtle', 100, 30, 'water');
/*
    console.log(turle);
    for (let key in turle) {
        console.log(`${key}: ${turle[key]}`);
    }
 */
// ====  Getter and Setter Function ====
var person = {
    _name: 'John', //biến có dấu '_' ở trước là biến nội bộ
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    }
};
/* Gọi hàm
    console.log(person.name); // John
    person.name = 'Jane';
    console.log(person.name); // Jane
 */


// ==== HÀM ĐỆ QUY === (hàm tự gọi chính nó)
/** Các vấn đề xoay quanh đệ quy
 * Phải có điểm dừng
 * Phải có logic handle =>Tạo ra điểm dừng
 */
//Hàm đệ quy tính giai thừa
function tinhGiaiThua(number) {
    if (number > 0) {
        return (number) * tinhGiaiThua(number - 1);
    }
    return 1;
}
/**
 * console.log(tinhGiaiThua(5));
 */

//Dùng đệ quy để duyệt mảng

function duyetMang(array, index) {
    if (index < array.length) {
        console.log(array[index]);
        duyetMang(array, index + 1);
    }
}
/**
 * duyetMang(arrNumber, 0);
 */

// === LÀM SAO ĐỂ BIẾT HÀM CÓ ĐANG ĐƯỢC TRUYỀN THAM SỐ VÀ TRUYỀN BAO NHIÊU === 
function tinhTongNhieuSo(a, b, c, d) {
    //Nếu biến d không được truyền thì hàm sẽ trả về 0
    if (d === undefined) {
        return 0;
    }
    return (a + b + c + d);
}

function tinhTongNhieuSo2(a, b, c) {
    //Nếu số lượng đối số truyền vào ít hơn 3
    if (arguments.length < 3) {
        return (a + b);
    }
    return (a + b + c);
}