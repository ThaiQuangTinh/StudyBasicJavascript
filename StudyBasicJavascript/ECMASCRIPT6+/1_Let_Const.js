// === LET AND CONST === 

/**
 * var /let, const: scope, hosting
 * const / let, var: assignment
 * Tìm hiểu tham trị, tham chiếu trong JS
 */

/**
 * Giống: đều được sử dụng để lưu trữ giá trị của biến
 * Khác: phạm vi truy cập, hosting (var), cho phép gán lại hoặc không
 */
//Code block: if else, loop, {},...

/**
 * Code thuần: var
 * Babel: const, let
 */
a = 1;
var a;
console.log(a); // 1
//Vì var có hỗ trợ hosting, trình thông dịch sẽ đưa var a lên đầu nên sẽ không có lỗi   

const b = {
    name: 'JS'
};

b.name = 'C'; //được gán lại (tại vì đang gán lại thuộc tính)
console.log(b);