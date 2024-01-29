// ==== PROMISE EXAMPLE ====
/**
 * Mảng
 * Hàm, callBack
 * Promise
 * DOM
 */
//Danh sách người dùng
var users = [{
        id: 1,
        name: 'Conan'
    },
    {
        id: 2,
        name: 'Haibaira'
    },
    {
        id: 3,
        name: 'Agasa'
    },
    {
        id: 4,
        name: 'Vermouth'
    }
    ///
];

//Danh sách các bình luận: id bình luận, id người bình luận, nội dung bình luận
var commments = [{
        id: 1,
        user_id: 1,
        content: 'How are you?'
    },
    {
        id: 2,
        user_id: 2,
        content: 'I\'m fine thank you and you?'
    },
    {
        id: 3,
        user_id: 3,
        content: 'I\'m felling so bad!'
    }
];

// The function returns a Promise containing an array of comments
//Hàm trả về một promise, promise này trả về mảng chứa các bình luận của người dùng
function getComments() {
    return new Promise(function(resolve, reject) {
        resolve(commments);
    });
};

//The function returns a Promise containing an array of id.
//Hàm trả về một promise, promise này chứa danh sách id của người dùng đã bình luận
function getUserById(usersId) {
    return new Promise(function(resolve, reject) {
        let result = users.filter(function(user) {
            return usersId.includes(user.id);
        });
        resolve(result);
    });
};

//getComments đang có resolve nên then sẽ được kích hoạt
getComments()
    .then(function(result) {
        // result lúc này chính là mảng chứa các bình luận của người dùng (mảng: commments)
        let usersId = result.map(function(user) {
            return user.id;
        });
        // usersId = [1, 2, 3] : mảng này chứa id của các bình luận
        return (
            //trả về một promise 
            getUserById(usersId) // usersId = users : mảng này chứa id của các bình luận
            .then(function(usersC) {
                // usersC = users
                return {
                    //Trả về đối tượng có 2 key là users và comments 
                    users: usersC,
                    commments: commments
                }
            })
        );
    })
    // data = đối tượng được trả về ở bên trên
    .then(function(data) {
        let html = ''; //khởi tạo chuỗi html rỗng
        let commentElemnt = document.querySelector('.comments'); //Lấy class comments
        // Duyệt qua mảng comments
        data.commments.forEach(function(comment) {
            let user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentElemnt.innerHTML = html;
    });