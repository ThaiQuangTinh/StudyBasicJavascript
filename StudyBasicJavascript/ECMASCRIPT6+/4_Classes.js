//=== CLASSES === 

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };

    getName () {
        return this.name;
    };

    getPrice  () {
        return this.price;
    }
};

var c1 = new Course('Java', 10000);
console.log(c1);