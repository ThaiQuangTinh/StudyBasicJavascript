// ==== JSON ====
/** JavaScript Object Notation
 * JSON là một định dạng dữ liệu (được thể hiện dưới dạng chuỗi)
 * JSON: Number, Boolean, String, Null, Array, Object,..
 * Có 2 thao tác: mã hóa (Encode) và giải mã (Decode)
 * Stringtify: Từ JS type sang JSON
 * Parse: Từ JSON sang JS type
 */

//Sau đây là các chuỗi JSON
var json = 'true'; //thể hiện kiểu true
var json2 = '1'; //thể hiện số 1
var json3 = 'null'; //thể hiện kiểu null
var json4 = '["JavaScript", "PHP"]'; //thể hiện kiểu array
var json5 = '{"name" : "Liliana", "age" : 18}'; //thể hiện kiểu object
var json6 = '"Hello các bạn"'; //thể hiện kiểu chuỗi ở JSON
console.log(json5);

//Biến từ JSON trở thành JS
var js2 = JSON.parse(json5);
console.log(js2);
//Biến từ JS trở thành JSON
var result = JSON.stringify(true);
console.log(result);
var result2 = JSON.stringify(['Java', 'PHP']);
console.log(result2);