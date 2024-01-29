// ==== JSON SERVER ==== 

/**
 * API server: API server (fake) / Mock API 
 */

var courseApi = 'http://localhost:3000/course'; //Máy chủ ảo
fetch(courseApi)
    .then (function(responsive) {
        return responsive.json();
    })
    .then (function(courses) {
        console.log(courses);
    })

//=== SỬ DỤNG POSTMAN LÀM VIỆC VỚI API === 
/**
 * CRUD: create (POST- tạo dữ liệu), read(GET- lấy dữ liệu), update(PUT/PATCH), delete
 * Postman: 
 */