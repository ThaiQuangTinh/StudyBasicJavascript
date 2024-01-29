// ===  Default parameter values ====

/** Giá trị mặc định cho tham số
 * 
 */

function logger (log, isLog) {
    if (isLog) {
        alert(log);
    };
    console.log(log);
};

logger('Hello everyone');

function test (str1, str2 = '') {
    if (str2 === '') {
        console.log(str1);
    } else {
        console.log(str1 + ' ' + str2);
    }
};

test('Hello', 'các bạn nhé');