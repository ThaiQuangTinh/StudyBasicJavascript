//===== CALLBBACK ==== (hàm làm đối số cho hàm khác)

//Ví dụ
var arrNumer = [1, 2, 3, 4, 5];

function duyetMang(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        callBack(array[i]);
    }
};

/* Tạo hàm để làm đối số cho hàm duyetMang */
function hienThiGiaTri(value) {
    console.log(value);
}

/* Tiến hành gọi hàm duyetMang và có đối số là hàm hienThiGiaTri (callback) */
duyetMang(arrNumer, hienThiGiaTri);
console.log('========');

//Ví dụ định nghĩa các phươg thức của đối tượng Array
var sinhVien = ['Liliana', 'Morgiana', 'Kaluna', 'Keliana'];

var Animals = [{
    name: 'Rabit',
    age: 7,
    weight: 15,
    habitat: 'land'
},
{
    name: 'Turtle',
    age: 17,
    weight: 55,
    habitat: 'water'
},
{
    name: 'Dog',
    age: 5,
    weight: 15,
    habitat: 'land'
}
];

/* forEach: lặp qua các phần tử bên trong mảng */
Array.prototype.forEach2 = function (callBack) {
    let doDai = this.length;
    for (let i = 0; i < doDai; i++) {
        if (this.hasOwnProperty(i)) {
            callBack(this[i], i, this);
        }
    }
}
/*Test forEach2 */
arrNumer.forEach2(currentValue => console.log(currentValue));

Animals.forEach2(function (currentValue) {
    console.log(currentValue);
});
console.log('=========');

//every: trả về true nếu tất cả các phần tử đều thỏa mãn điều kiện
Array.prototype.every2 = function (callBack) {
    let doDai = this.length;
    for (let index = 0; index < doDai; index++) {
        if (this.hasOwnProperty(index)) {
            if (!callBack(this[index], index, this)) {
                return false;
            }
        }
    }
    return true;
};

console.log(Animals.every2(function (currentValue, index, array) {
    return currentValue.age >= 17;
})); //false
console.log('==========');

//some: trả về true nếu một trong các phần tử đều thỏa mãn điều kiện
Array.prototype.some2 = function (callBack) {
    let doDai = this.length;
    for (let index = 0; index < doDai; index++) {
        if (this.hasOwnProperty(index)) {
            if (callBack(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
};
console.log(Animals.some2(function (currentValue, index, array) {
    return currentValue.age >= 17;
})); //true
console.log('==========');

//find: trả về phần tử đầu tiên thỏa mãn điều kiện nào đó
Array.prototype.find2 = function (callBack) {
    let doDai = this.length;
    for (let index = 0; index < doDai; index++) {
        if (this.hasOwnProperty(index)) {
            if (callBack(this[index], index, this)) {
                return this[index];
            }
        }
    }
    return null;
};

console.log(Animals.find2(function (currentValue, currentIndex, array) {
    return currentValue.habitat === 'land';
}));
console.log('=========');

//fillter: trả về tất cả phần tử thỏa mãn điều kiện nào đó
Array.prototype.fillter2 = function (callBack) {
    let doDai = this.length;
    let newArr = [];
    for (let index = 0; index < doDai; index++) {
        if (this.hasOwnProperty(index)) {
            if (callBack(this[index], index, this)) {
                newArr.push(this[index]);
            }
        }
    }
    return newArr;
};

console.log(Animals.fillter2(function (currentValue, currentIndex, array) {
    return currentValue.habitat === 'land';
}));
console.log('=========');

//map: trả về một mảng mới dựa vào các biến đổi của mảng gốc
Array.prototype.map2 = function (callBack) {
    let doDai = this.length;
    let newArr = [];
    for (let index = 0; index < doDai; index++) {
        newArr.push(callBack(this[index], index, this));
    }
    return newArr;
};

console.log(arrNumer.map2(function (currentValue, currentIndex, array) {
    return currentValue * 2;
}));
console.log('==========');

//reduce: thực hiện tích lũy các giá trị của phần tử để trả về một kết quả duy nhất
var arrNumber2 = [2, 4, 6, 8];
Array.prototype.reduce2 = function (callBack, initialvalue) {
    let doDai = this.length;
    let i = 0;
    if (arguments.length < 2) {
        initialvalue = this[0];
        i++;
    }
    for (; i < doDai; i++) {
        initialvalue = callBack(initialvalue, this[i], i, this);
    }
    return initialvalue;
};

console.log(arrNumber2.reduce2(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}, 2));


//Lấy ra các khóa học và đưa vào mảng mới'
var topics = [{
    topic: 'FrontEnd',
    coures: [{
        id: 1,
        title: 'HTML, CSS'
    },
    {
        id: 2,
        title: 'Javascript'
    }
    ]
},
{
    topic: 'BackEnd',
    coures: [{
        id: 3,
        title: 'PHP'
    },
    {
        id: 4,
        title: 'NoteJS'
    }
    ]
}
];

var newCoures = topics.reduce(function (accumulator, currentValue) {
    return accumulator.concat(currentValue.coures);
}, []);

console.log(newCoures);
console.log('==========');

var htmls = topics.map(function (currentValue) {
    return `
        <div>
            <h1>${currentValue.topic}</h1>
        </div>
    `;
});
console.log(htmls.join(''));

const name = 'John';
const age = 30;

// Sử dụng dấu '' hoặc ""
const message = 'My name is ' + name + ' and I\'m ' + age + ' years old.';

console.log(message);
// Kết quả: "My name is John and I'm 30 years old."

//===== BỔ SUNG === 
//FindIndex: tìm chỉ số đầu tiên của mảng thỏa mãn một điều kiện nào đó
Array.prototype.findIndex2 = function (callBack) {
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            if (callBack(this[i], i, this)) {
                return i;
            }
        }
    }
    return -1;
};

//findLastIndex: tìm chỉ số cuối cùng của mảng thỏa mãn điều kiện nào đó
Array.prototype.findLastIndex2 = function (callBack) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this.hasOwnProperty(i)) {
            if (callBack(this[i], i, this)) {
                return i;
            }
        }
    }
    return -1;
};


//flatMap: thực hiện các biến đổi và trả về một mảng mới đã được làm phẳng
Array.prototype.flatMap2 = function (callBack) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callBack(this[i], i, this));
    }
    return (newArr.flat());
};
var arr3 = [1, 2, 3];
console.log(arr3.flatMap2(function (currentValue, index, array) {
    return ([currentValue * 2, currentValue * 3]);
}));

//reduceRight: giống như reduce nhưng tính từ phải sang trái (từ cuối về đầu)
var arr2 = [1, 2, 3, 4, 5];
Array.prototype.reduceRight2 = function (callBack, initialvalue) {
    let lengthArr = this.length - 1;
    let i = lengthArr;
    if (arguments.length < 2) {
        initialvalue = this[lengthArr];
        i--;
    }
    for (; i >= 0; i--) {
        if (this.hasOwnProperty(i)) {
            initialvalue = callBack(initialvalue, this[i], i, this);
        }
    }
    return initialvalue;
};
console.log(arr2.reduceRight2(function (accumulator, currentValue, index, array) {
    return accumulator + currentValue;
}));