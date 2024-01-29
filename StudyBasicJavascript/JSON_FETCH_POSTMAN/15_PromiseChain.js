//==== PROMISE CHANGE =====

var promise = new Promise(
    function(resole, reject) {
        resole();
    }
)

//Cái đằng sau cần value của đằng trước để thực thi
promise
    .then(function() {
        /**
         * Nếu returrn không phải promise thì sẽ chạy then ở phía sau (return 1)
         * Nếu return promise thì phải chờ promise giải quyết xong thì then kế tiếp sẽ phải chờ
         * Return thì then ở phía sau sẽ nhận được kết quả return đó
         */
        return new Promise(function(resole) {
            setTimeout(function() {
                resole([1, 2, 3]);
            }, 3000);
        });
    })
    .then(function(data) {
        console.log(data);
        return 2;
    })
    .then(function(data) {
        console.log(data);
        return 3;
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {

    })
    .finally(function() {
        console.log('Done');
    })

//Bài khác
function sleep(ms) {
    return new Promise(function(resole) {
        setTimeout(resole, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })


//===================
function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function(valueFromA) {
    hell(valueFromA + 1, function(valueFromB) {
        hell(valueFromB + 1, function(valueFromC) {
            hell(valueFromC + 1, function(valueFromD) {
                hell(valueFromD + 1, function(valueFromE) {
                    console.log(valueFromE + 1);
                });
            });
        });
    });
});


function notHell(value) {
    return new Promise(function(resole) {
        resole(value);
    });
};

notHell(1)
    .then(function(value) {
        return value + 1;
    })
    .then(function(value) {
        return value + 1;
    })
    .then(function(value) {
        return value + 1;
    })
    .then(function(value) {
        console.log(value + 1)
    });