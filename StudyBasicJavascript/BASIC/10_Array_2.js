// =====  KIỂU DỮ LIỆU MẢNG (ARRAY) - PART 2 =====

//Các phương thức thường dùng (đều có tham số truyền vào là một hàm)
//Khai báo một mảng với các phần tử là các đối tượng
var Animals = [
    {
        name: 'Rabit',
        age: 7,
        weight: 15
    },
    {
        name: 'Turtle',
        age: 17,
        weight: 55
    },
    {
        name: 'Dog',
        age: 5,
        weight: 15
    }
];
//Duyệt mảng và hiển thị thông tin (thông thường)
/*Cách 1 */
for (let i in Animals) {
    for (let j in Animals[i]) {
        console.log(`${j}: ${Animals[i][j]}`);
    }
}

//forEeach: lặp qua các phần tử và thực hiện 1 hàm được định nghĩa trên phần tử
Animals.forEach(function (currentValue, index, array) {
    console.log(array[index]);
});

//every: trả về true nếu tất cả các phần tử đều thỏa mãn điều kiện
var resultEvery = Animals.every(function (currentValue, index, array) {
    return currentValue.weight > 1;
});

//some: trả về true nếu một trong các phần tử đều thỏa mãn điều kiện
var resultSome = Animals.some(function (currentValue, index, array) {
    return currentValue.weight > 50;
});

//find: trả về phần tử đầu tiên thỏa mãn điều kiện nào đó
var resultFind = Animals.find(function (currentValue, index, array) {
    return currentValue.weight === 15;
});

//filter: trả về tất cả phần tử thỏa mãn điều kiện nào đó
var resultFilter = Animals.filter(function (currentValue, index, array) {
    return currentValue.weight === 15;
});

//map: trả về một mảng mới dựa vào các biến đổi của mảng gốc
var resultMap = Animals.map(function (currentValue, currentIndex, index) {
    return {
        name: currentValue.name,
        age: currentValue.age * 2,
        weight: currentValue.weight
    };
});

//reduce: thực hiện tích lũy các giá trị của phần tử để trả về một kết quả duy nhất
var resultReduce = Animals.reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue.age;
}, 0);


console.log('=============');
console.log(resultReduce);


/**
 * findIndex
 * findLastIndex
 * flatMap
 * reduceRight
 * 
 */