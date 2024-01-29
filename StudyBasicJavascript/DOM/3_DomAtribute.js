// ===== DOM Atribute ==== (thêm thuộc tính vào phần tử)

/**
 * Truy xuất trực tiếp thông qua thuộc tính
 * Truy xuất thông qua phương thức get
 * Gán thuộc tính thì có thể gán trực tiếp hoặc dùng phương thức
 */
var heading = document.querySelector('h1');
heading.id = 'heading1';  //gán thuộc tính cho phần tử
console.log(heading);

/* Cách khác */
var heading2 = document.querySelector('h2');
heading2.setAttribute('class', 'heading2'); //gán thông qua phương thức 
console.log(heading2);  


//Lấy ra giá trị của thuộc tính
var headingText = document.querySelector('h3');
console.log(headingText.getAttribute('class')); //đối số là tên của thuộc tính