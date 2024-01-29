// === Arrow functions (hàm mũi tên)===

const logger = log => console.log(log);
console.log(logger(2));

//Không thể sử dụng được như này
var course = {
    name: 'Javascript',
    getName: () => {
        return this.name;
    }
};

//Không thể sử dụng làm hàm khởi tạo
const Student = (name, age) => {
    this.name = name;
    this.age = age;
} 