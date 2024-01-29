// ===== KIỂU DỮ LIỆU ĐỐI TƯỢNG (OBJECT) TRONG JAVASCRIPT ====

//Khai báo thông thường
var sinhVien = {
    hoTen: 'Liliana',
    tuoi: 20,
    diem: 8
};  //Gồm có các key lần lượt là: hoTen, tuoi, diem ứng với các giá trị Liliana, 20, 8

//Hiển thị thông tin bằng vòng lặp
console.log('--- Thông tin toàn bộ thuộc tính của sinhVien');
for (let index in sinhVien) {
    console.log(`${index}: ${sinhVien[index]}`);
}
console.log('====================');
console.log('--- Hiển thị thông tin của sinh viên 2');
//Khai báo đối tượng sinh viên có kèm theo phương thức (lấy thông tin)
var sinhVien2 = {
    //Các thuộc tính
    hoTen: 'Nine-taled Fox',
    namSinh: 2003,
    diemTT: 8,
    diemTB: 9,
    //Các phương thức 
    layThongTin: function () {
        return `Họ tên: ${this.hoTen} | Năm sinh: ${this.namSinh} | Điểm TT: ${this.diemTT} | Điểm TB: ${this.diemTB} `
    },
    xetTotNghiep: function () { 
        return (this.diemTB >= 5 && this.diemTT >= 6) ? 'Đỗ tốt nghiệp' : 'Rớt tốt nghiệp';
    }
}

//Hiển thị thông tin của đối tượng bằng phương thức của đối tượng đó
console.log(sinhVien2.layThongTin() + ' | ' + sinhVien2.xetTotNghiep());
//Hiển thị thông tin bằng vòng lặp cho sinh viên 2
for (let key in sinhVien2) {
    if (typeof sinhVien2[key] !== 'function') {
        console.log(`${key}: ${sinhVien2[key]}`);
    }
}

//Ví dụ lấy 1 biến làm key bên trong một đối tượng
var height = 'chieucao';
var animal = {
    ten: 'rabit,',
    tuoi: 20,
    [height]: 30
};

console.log('==============');
//Viết phương thức khởi tạo cho đối tượng
function Animals (tenLoai, tuoi, chieuCao, canNang) {
    this.tenLoai = tenLoai;
    this.tuoi = tuoi;
    this.chieuCao = chieuCao;
    this.canNang = canNang;
    //Bổ sung thêm phương thức lấy tên loài
    this.LayTenLoai = function () {
        return this.tenLoai;
    }
}

/* Tạo đối tượng */
var rabit = new Animals ('Rabit', 10, 70, 15);

//Có thể bổ sung thêm thuộc tính và phương thức cho đối tượng
Animals.prototype.layChieuCao = function () {
    return this.chieuCao;
}
Animals.prototype.moiTruongSong = 'Trái Đất';
Animals.prototype.duyetDoiTuong = function () {
    for (let key in this) {
        //hasOwnProperty: kiểm tra một thuộc tính có tồn tại trong thuộc tính của đối tượng hay không 
        if (this.hasOwnProperty(key) && (typeof this[key] !== 'function')) {
            console.log(`${key}: ${this[key]}`);
        }
    }
}

rabit.duyetDoiTuong();


//=== Bổ sung ====
var personPrototype = {
    getInfo: function () {
        return (this.fullName + ' ' + this.age);
    }
}

//Tạo 1 đối tượng khác và gắn propertype là personPropertype
var person = Object.create(personPrototype);
person.fullName = 'Mori Ran';
person.age = 18;

console.log(person);

//isPrototypeOf: kiểm tra xem 1 đối tượng có là 1 propertype của đối tượng khác hay không
//kiểm tra personPrototype có là một propertype của person hay không
console.log(personPrototype.isPrototypeOf(person));

//propertyIsEnumerable: kiểm tra xem một thuộc tính có tồn tại và có thể được liệt kê hay không
console.log(sinhVien.propertyIsEnumerable('tuoi'));
console.log(sinhVien.toString());
