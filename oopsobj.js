// var student = {
//     stuname : "Sarun"
// }
// document.getElementById("").innerHTML = student.stuname;

// creating obj using new key word

// var stu = new Object();
// stu.name="sarun";
// document.getElementById("").innerHTML = stu.name;

// Creating an object using the object construtor

// function sample(age,degree,native){
//     this.age=age;
//     this.degree=degree;
//     this.native=native;
// }
// sample(42,"Bsc It","cbe");
// document.getElementById("").innerHTML = age;



// class Product{
//     constructor(Stock,qty,rate){
//         this.Stock=Stock;
//         this.qty=qty;
//         this.rate=rate;
//     }
// }
// get(){
//     return(`
//     Name of the item ${this.stock}`);
// }
// let item1 = new Product("Computer",2,20000); //Creating Objects
// console.log(item1.stock);
// console.log(item1.get());


//Encapsulation


class emp{
    constructor(ename,eid){
        this.eid=eid;
        this.ename=ename;
    }
    add_address(ad){
        this.ad=ad;
    }
    get_details(){
        console.log(`Employeename : ${this.ename}`)
    }
}
var obj = new emp("Pavi",101);
obj.add_address("Coimbatore");
obj.get_details();
