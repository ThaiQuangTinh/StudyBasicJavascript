//===== CÂU LỆNH ĐIỀU KIỆN TRONG JAVASCRIPT ====
/* Nếu điều kiện đúng thì thực hiện lệnh/khối lệnh sau if,
ngược lại thì thực hiện lệnh/khối lên sau else(nếu có)
*/

//Ví dụ 1
var username = 'liliana';
var password = 'lili123';
if (username === 'liliana' && password === 'lili123') {
    console.log('Đăng nhập thành công');
} else {
    console.log('Sai tài khoản hoặc mật khẩu');
}

//Ví dụ 2 (if lồng nhau)
if (username === 'liliana' || username === 'thaiquangtinh') {
    if (password === '123' || password === 'liliana123') {
        console.log('Đăng nhập thành công');
    }
    else {
        console.log('Sai tài khoản hoặc mật khẩu');
    }
}

//Ví dụ 3
var diem = 9.5;
if (diem < 6.5) {
    console.log('Trung bình');
} else if (diem < 8) {
    console.log('Khá');
} else if (diem < 9) {
    console.log('Giỏi');
} else  {
    console.log('Xuất sắc');
}

//Toán tử 3 ngôi cùng là 1 câu lệnh điều kiện
var result = 5;
//viết hàm kiểm tra xem rsult có thực sự là 1 số hay không
function kiemTraSo (number) {
    if (typeof number === 'number') {
        return true;
    }
    return false;
}
/* Cách khác: dùng toán tử 3 ngôi*/
function kiemTraSo2 (number) {
    return (!isNaN(number) ? true : false);
}

/* Gọi hàm và in ra màn hình */
if (kiemTraSo2(result)) {
    console.log(`${result} là một số`);
} else {
    console.log(`${result} không là một số`);
}