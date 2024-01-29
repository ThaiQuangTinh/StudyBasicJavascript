// Back-end -> API (URL) -> Fetch -> JSON/XML -> JSON.parse -> Javascript types -> Render giao diện với html

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

// stream
/** Tương tác với API
 * fetch: gửi yêu cầu đến các nguồn dữ liệu, là hàm xử lí bất đồng bộ, trả về promise
 * response: đối tượng chứa thông tin phản hồi từ máy chủ
 * json(): chuyển dữ liệu của response thành đối tượng JS hoặc Promise
 */
fetch(postAPI)
    .then(function (response) {
        return response.json();
        //JSON.parse: JSON -> Javascript
    })
    .then(function (posts) {
        // Ở đây, biến "posts" đã chứa một mảng các đối tượng JavaScript
        // tương ứng với dữ liệu JSON đã trích xuất từ phản hồi.
        var html = posts.map(function(post) {
            return `<li><strong>${post.title}:</strong> ${post.body}</li>`;
        });
        var ulElement = document.querySelector('ul');
        ulElement.innerHTML = html.join(' ');
    })
    .catch(function(er) {
        console.log(err);
    })
