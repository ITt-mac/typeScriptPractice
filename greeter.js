// function greeter(person:string){
//     return "Hello,"+person;
// }
// let user=[0,1,2];
// document.body.innerHTML=greeter(user);
var Student = /** @class */ (function () {
    // 在构造函数的参数上使用public等同于创建了同名的成员变量。
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);
