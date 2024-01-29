// ==== Spread === 

/**
 * Dùng ... : được đặt ở phía trước
 * Khi dùng thì nó sẽ bỏ đi 2 dấu [] và {}
 * Dùng làm đối số cho hàm
 */

//Đối với mảng
var array1 = ['Javascript', 'PHP', 'Node JS'];
var array2 = ['Ruby', 'Dark'];
var array3 = [...array2, ...array1];
console.log(array3);

//Đối với đối tượng 
var obj1 = {
    name: 'Javascript'
};
var obj2 = {
    price: 100000
};
var obj3 = {
    ...obj1,
    ...obj2
};
console.log(obj3);

//Một ví dụ khác

var deFaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    appVersion: 'v1',
    //
    //
};

var exerciseConfig = {
    //Thừa hưởng từ đối tượng khác (1 trong những ứng dụng của ...)
    ...deFaultConfig,
    //2 key trùng nhau thì nó sẽ lấy cái key ở sau (overide: ghi đè)
    api: 'https://domain-trang-bai-tap'
};

console.log(exerciseConfig);

//Sử dụng toán tử Spread cho việc truyền đối số cho hàm

var courses = ['Java', 'PHP', 'Ruby'];

function logger(a, b, c) {
    console.log(a, b, c);
};

function logger2(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
};

logger(...courses);

//Ví dụ
const person1 = {
    name: 'Son',
    age: 21
}

const person2 = {
    ...person1
}

// Expected results
console.log(person2.name) // Output: 'Son'
console.log(person2.age) // Output: 21
console.log(person1 === person2) // Output: false (do chúng không cùng trỏ đến 1 vùng nhớ)

function test1({ name, age }) {
    console.log(name, age);
}
test1({ name: 'Liliana', age: 20 });

function test2([a, b, ...rest]) {
    console.log(a, b);
    console.log(...rest);
}

test2([1, 2, 3, 4, 5]);