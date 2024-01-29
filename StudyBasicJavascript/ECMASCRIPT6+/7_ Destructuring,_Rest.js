// ===  Destructuring (phân rã), Rest ===

/**
 * Sử dụng cho mảng và đối tượng
 * Dùng làm tham số cho hàm
 */

var array = ['Javascript', 'PHP', 'Ruby'];

//Destructuring:
var [a, b, c] = array; //gán các giá trị của mảng lần lượt cho a, b, c
console.log(a, b, c);

//Rest (kết hợp với destructuring): lấy ra những phần từ còn lại
var arrNumber = [1, 2, 3];
var [d, ...rest] = arrNumber;
console.log(d);
console.log(rest);

//Sử dụng với object
var course = {
    name: 'Javascript',
    price: 200000
};

//Dùng destructuring
//Phải gõ đúng thuộc tính
var { name, price } = course;
console.log(name, price);

//Rest
var animal = {
    weight: 20,
    height: 100,
    age: 2
};

var { weight, ...rest } = animal;
console.log(weight);
console.log(rest);

//Giả bộ xóa key age
var { age, ...newObject } = animal;
console.log(newObject); //Thật ra là lấy ra object nhưng không có age

//Trong trường hợp có object con
var course2 = {
    name: 'Javascript',
    price: 2000,
    children: {
        name: 'Node JS'
    }
};

//Bây giờ lấy ra name của children
//Đổi tên name thành parentName
var { name: parentName, children: { name } } = course2;
console.log(parentName);
console.log(name);


//Lấy 
var course3 = {
    name: 'Javascript',
    price: 20000
};

//Lấy ra biến description (nhưng description chưa có trong objec)
var { name, description = 'Hello hello hello' } = course3; //Nếu description đã tồn tại thì sẽ lấy ra giá trị ứng với key description
console.log(description);


//Một ví dụ khác, toán tử rest trong function
function logger(a, ...params) {
    console.log(params);
};

logger(1, 2, 3, 4); //[2, 3, 4]

//Sau đây là object, nhưng dùng mảng cũng được
function logger2({ name, price, ...rest }) {
    console.log(name);
    console.log(price);
    console.log(rest);
};

logger2({
    name: 'Java',
    price: 'Hello Java',
    description: 'Description content'
});


// =========== BỔ SUNG ===========
var name = 'Liliana',
    age = 20;

//Khai báo đối tượng kiểu thông thường
var hero1 = {
    name: 'Krixi',
    age: 16
}
console.log(hero1);

//Bây giờ sẽ khai báo kiểu mới (ES6)
var hero2 = { name, age };
console.log(hero2);

//Gán mảng 
var arrNumber = [1, 2, 3, 4, 5];
// Toán tử ... để gom các phần tử còn lại
var [a, b, ...numbersRMN] = arrNumber;
console.log(a, b);
console.log(numbersRMN);

//Gán đối tượng
var animal1 = {
    weight: 20,
    height: 16,
    age: 20,
    address: 'Tam Quan'
};

var { weight, height, ...restAnimal } = animal1;
console.log(weight, height);
console.log(restAnimal);

//Toán tử rest dùng làm đối số cho hàm
function sum(...numbers) {
    let rs = numbers.reduce(function(accomulator, currentValue) {
        return accomulator + currentValue;
    }, 0);
    return rs;
}

console.log(sum(1, 2, 3, 4, 5));