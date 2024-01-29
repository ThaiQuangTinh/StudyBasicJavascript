// Optional_chaining (?.)

const obj = {
    name: 'Alice',
    cat: {
        name: 'Dila',
        cat2: {
            name: 'Dila 2',
            cat3: {
                name: 'Dila 3'
            }
        }
    }
};

if (
    // obj.cat &&
    // obj.cat.cat2 &&
    // obj.cat.cat2.cat3
    //Nếu không biết chắc được sự tồn tại của nó thì dùng '?.'
    obj?.cat?.cat2?.cat3  
) {
    console.log(obj.cat.cat2.cat3.name);
};

//Test
var student = {
    name: 'Liliana',
    getName () {
        return this.name;
    }
};

//Không biết chắc được getName có tồn tại bên trong student hay không
var test = student?.getName();
