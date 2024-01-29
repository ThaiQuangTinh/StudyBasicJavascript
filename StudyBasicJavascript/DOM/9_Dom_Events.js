// ==== DOM EVENT ====

/**
 * Atribute events: viết thẳng (inline) vào phần tử bên HTML
 * Assign event using the element node: gán qua elemet node
 */

//Click
var rsBox = document.querySelector('.box');
console.log(rsBox);
rsBox.onclick = function () {
    rsBox.innerHTML = '<h1>Xin chào các bạn</h1>'; 
}

//Nhiều thẻ h2
var rsH2 = document.querySelectorAll('h2');
// rsH2.onclick = function(mouseEvent) {
//     console.log(mouseEvent);
// }
for (let value of rsH2) {
    value.onclick = e => {
        console.log(e.target);
    }
}

var testBox = document.querySelector('.box');




