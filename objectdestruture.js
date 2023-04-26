const obj = {
    name : "Sarun",
    age : 20,
    Course : "full stack developer"
}
let {name,age,Course} = obj;
console.log(name);
console.log(age);
console.log(Course);

const arrName = ["Sarun","20",1,];
let [username,userage,rollnum,course1 = "Full Stack Developer"] = arrName;
console.log(course1);
console.log(arrName);
console.log(userage);




