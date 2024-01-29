// ==== EXAMPLE ==== 
var courseAPI = 'http://localhost:3000/course';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
};

start();

//Functions
function getCourses(callBack) {
    fetch(courseAPI)
        .then(function(responsive) {
            return responsive.json();
        })
        .then(callBack);
};

function createCourses(data, callBack) {
    let options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(courseAPI, options)
        .then(function(responsive) {
            responsive.json();
        })
        .then(callBack);
};

function handleDeleteCourse(id) {
    let options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    };
    fetch(courseAPI + '/' + id, options)
        .then(function(responsive) {
            responsive.json();
        })
        .then(function() {
            let courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        })
};

function renderCourses(courses) {
    let listCoursesBlock = document.querySelector('#list-courses');
    let htmls = courses.map(function(course) {
        return `
        <li class = "course-item-${course.id}" = ${course.id}>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick = "deleteCourse(${course.id})">Xóa</button>
        </li>`;
    });
    listCoursesBlock.innerHTML = htmls.join('');
};

function handleCreateForm() {
    let createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        let name = document.querySelector('input[name="name"]').value;
        let description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        };
        createCourses(formData, function() {
            getCourses(renderCourses);
        });
    };
};