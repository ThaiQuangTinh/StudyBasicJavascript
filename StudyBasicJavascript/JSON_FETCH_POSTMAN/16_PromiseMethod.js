// === PROMISE METHODS === 

/**
 * promise.resole
 * promise.reject
 * promise.all
 */



//Bây giờ dùng phương thức của promise
var promise = Promise.resolve('Success');  //Tạo một promise ở trạng thái thành công
var promise2 = Promise.reject('Error'); //Tạo một promise ở trạng thái thất bại

promise
    .then(function (value) {
        console.log('Result: ' + value);
    });

promise2
    .catch(function (value) {
        console.log('Result2: ' + value);
    })

//Promise.All: chạy song song nhiều promise, cùng trả về kết quả theo đúng thứ tự truyền vào

var promise3 = new Promise(function (resole) {
    setTimeout(function () {
        resole([1]);
    }, 1000);
});

var promise4 = new Promise(function (resole) {
    setTimeout(function () {
        resole([2, 3]);
    }, 2000);
});

var promise5 = new Promise(function (resole, reject) {
    setTimeout(function () {
        reject([4, 5]);
    }, 2000);
});

Promise.all([promise3, promise4, promise5])
    .then(function(result) {
        console.log(result[0].concat(result[1]));  //123
    })
    .catch(function(err) {
        console.log('Có lỗi xảy ra');
    })
