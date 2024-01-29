function check(a) {
    if (a > 2) {
        return true;
    } else {
        return false;
    }
}

function check2(a) {
    return a > 2 ? true : false;
}

function check3(a) {
    return a > 2;
}

console.log(check(2)); //false
console.log(check2(4)); //true
console.log(check3(6)); //true


//Hàm kiểm tra số chẵn
var soChan = value => value % 2 === 0;