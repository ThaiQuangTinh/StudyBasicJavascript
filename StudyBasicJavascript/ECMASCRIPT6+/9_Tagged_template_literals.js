// === Tagged_template_literals ===

/**
 * Gọi đến function thông qua cú pháp trên
 */

function highlight([first, ...string], ...values) {
    console.log('First: ' + first);
    console.log('String: ' + string);
    console.log('Values: ' + values);
};

function highlight2([first, ...strings], ...values) {
    return values.reduce((acc, curr, index) => [...acc, `<span>${curr}</span>${strings[index]}`], [first]).join('');
}

var brand = 'F8';
var course = 'Javascript';

//Các đối số bao gồm (những biến không nội suy): Học lập trình, tại, !
html = highlight2 `Học lập trình ${course} tại ${brand}!`;
console.log(html);

var text = '<h1>'


//Bổ sung
function highlight([first, ...string], ...values) {
    var rs = values.reduce(function(acc, curr) {
        return [...acc, `<span>${curr}</span>`, string.shift()]
    }, [first]);
}

var brand = 'f8';
var course = 'Javascript';
const html = highlight `Học lập trình ${course} tại ${brand}!`;