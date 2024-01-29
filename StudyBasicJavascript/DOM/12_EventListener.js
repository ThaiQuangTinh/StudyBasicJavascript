// ==== Event listener ==== 
/**
 * Xử lí nhiều việc khi một sự kiện xảy ra
 * Lắng nghe/hủy bỏ lắng nghe
 */

var btn = document.getElementById('btn');
btn.onclick = function () {
    console.log('Việc 1');
    console.log('Việc 2');
    console.log('Việc 3');
}
//Hủy bỏ lắng nghe sự kiện sau 3s
setTimeout(function () {
    btn.onclick = function () {

    }
}, 3000);

//Bây giờ dùng event listener: nhận 2 đối số (event name - loại bỏ từ on.., function callback)
/**
 * Cái nào add trước thì gọi trước
 */
console.log('==== Event listener ====');
var btn2 = document.getElementById('btn2');
//Tạo các việc cần làm
function viec1() {
    console.log('Việc 1');
}

function viec2() {
    console.log('Việc 2');
}

function viec3() {
    console.log('Việc 3');
}

//Lắng nghe sự kiện
btn2.addEventListener('click', viec1);
btn2.addEventListener('click', viec2);
btn2.addEventListener('click', viec3);


//Hủy bỏ lắng nghe sau 3s
setTimeout(() => {
    btn2.removeEventListener('click', viec2);
}, 3000);