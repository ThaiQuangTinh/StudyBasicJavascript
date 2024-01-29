// ==== Promise ==== 
/**
 * Sinh ra để xử lí các thao tác bất đồng bộ
 * Trước khi có promise thì ta sẽ có callBack hell (gây rối rắm)
 * Viết code dễ hiểu hơn
 * Sử dụng từ khóa new để tạo Promise, truyền vào excutor function với 2 tham số: result, reject
 * Đối tượng promise được tạo ra thì sẽ sử dụng then và cactch 
 */
/**
 * Sync (đồng bộ): cái nào viết trước thì chạy trước, sau thì chạy sau
 * Async (bất đồng bộ):
 * SetTimeOut, SetInterval, fetch, XMLHTTPRequest, file reading,...
 */

// setTimeout(function () {
//     console.log('Dòng này sẽ in ra sau');
// }, 0);

// setTimeout là tác vụ bất động bộ (async)

console.log('Dòng này sẽ in ra trước'); // Đây là tác vụ đồng bộ (sync)

/**
 * Callback hell
 * Pyramid
 */

// setTimeout(function () {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//         setTimeout(function () {
//             console.log(3);
//             setTimeout(function () {
//                 console.log(4);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


/** Các trạng thái của promise
 * Pendding: đang chờ thành công hay thất bại (nghĩa là không gọi result hay reject)
 * Fullfilled: thực thi thành công
 * Rejected: thực thi thất bại
 */
console.log('=======');
var promise = new Promise(
    //Executor
    function(resolve, reject) {
        /**Logic
         * resolve (): thành công
         * reject (): thất bại
         */
        resolve(
            [{
                id: 1,
                name: 'Javascript'
            }]
        );

        //Trong trường hợp này reject không có tác dụng
        reject('Đã có lỗi');
    }
);

/** promise
 * then(function): khi resolve được gọi thì callBack của then sẽ được gọi
 * cacth(function): khi reject được gọi thì callBack của catch sẽ được gọi
 * finally(function): khi một trong resolve hoặc reject được gọi thì callBack của finally cũng được gọi
 */

promise
    .then(function(course) {
        console.log('Successfully');
        console.log(course); //In ra đúng dữ liệu đã resolve ở trên kia (reject thì làm tương tự)
    })
    .catch(function(error) {
        console.log('Failure');
        console.log(error); //Bắt lỗi
    })
    .finally(function() {
        console.log('Done');
    })