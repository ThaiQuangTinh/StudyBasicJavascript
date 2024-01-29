// ==== DOM EVENTS EXAMPLE ====

/**
 * Input/selector
 * Key up, key down
 */

//Input
console.log('=== Input ===');
var InputElement = document.querySelector('input[type = "text"]');
console.log(InputElement);

//Gõ xong rồi đưa chuột ra khỏi ô input thì in ra màn hình
InputElement.onchange = function(e) {
    console.log(e.target.value);
}

//Gõ tới đâu thì in tới đó
var inputValue = '';
InputElement.oninput = function(e) {
    inputValue = e.target.value;
}
console.log(inputValue);

//Check box
console.log('=== Check box ===');
var checkboxElement = document.querySelector('input[type = "checkbox"]');
console.log(checkboxElement);
checkboxElement.onchange = function(e) {
    console.log(e.target.checked);
}

//Select
console.log('=== Select ===');
var selectElement = document.querySelector('select');
console.log(selectElement);
selectElement.onchange = function(e) {
    console.log(e.target.value); //In ra value trong thẻ option
}

//Key down, key up
/**
 * Key up: được kích hoạt khi người dùng thả phím sau khi nhấn
 * Key down: được kích hoạt khi người dùng nhấn phím (khi một phím được nhấn)
 * Key press: được kích hoạt khi người dùng ấn và giữ phím trong một thời gian
 */
console.log('=== Key up, key down ===');
var keyUpDown = document.getElementById('ip2');
console.log(keyUpDown);
keyUpDown.onkeyup = function(e) {
    console.log(e.target.value);
}

//Làm sao để biết được phím mình nhấn là phím nào
console.log('=== Phím nhấn ===');
var keyUpDown = document.getElementById('ip3');
console.log(keyUpDown);
keyUpDown.onkeyup = function(e) {
    console.log(e.which);
    switch (e.which) {
        case 27:
            console.log('Exit');
            break;
    }
}

//Bấm 1 phím ở bên ngoài giao diện chính và không nhất thiết là lắng nghe sự kiện của thẻ input
document.onkeydown = function(e) {
    switch (e.which) {
        case 27:
            console.log('Exit');
            break;
        case 13:
            console.log('Send chat');
            break;
    }
}