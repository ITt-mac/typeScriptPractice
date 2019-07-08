    // function greeter(person:string){
    //     return "Hello,"+person;
    // }
    // let user=[0,1,2];
    // document.body.innerHTML=greeter(user);

    class Student{
        fullName:string;
        // 在构造函数的参数上使用public等同于创建了同名的成员变量。
        constructor (public firstName,public middleInitial,public lastName){
            this.fullName=firstName + ' ' + middleInitial + " " +lastName; 
        }
    }
    /*
        接口的定义：interface;
    */
    interface Person{
        firstName:string;
        lastName:string;
    }

    function greeter(person:Person){
        return "Hello," + person.firstName + " " +person.lastName;
    }

    let user =new Student('Jane', 'M.','User')

    document.body.innerHTML=greeter(user);