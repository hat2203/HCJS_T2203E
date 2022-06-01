// var obj = {
//     name: "Nguyen Van An",
//     age: 18,
//     telephone: ["0987432789","0357893276"],
//     girlFriend:{
//         name: "Lee Phuong",
//         age: 16,
//         eat: function (){
//             console.log("Eat...");
//         }
//     },
//     run: function (){
//         console.log(this.name+" running...");
//     }
// };
// obj.name = "Nguyen Van Binh";
// obj.name = "Nguyen Huu Da";
// console.log(obj.name);
// obj.run();
// console.log(obj.girlFriend.name);
// obj.girlFriend.eat();
// console.log(obj.telephone[0]);

var student = {
    name: "Dương Thu Hiền",
    age: 16,
    address: "Nam Định",
    telephone: "0376892457",
    myclass: {
        name: "10a10",
        room: "12B",
    },
    myGroup:{
        name: "nhom1",
        member: [
            {
                name: "Pham Thi Thanh",
                telephone: "0378492304",
            },
            {
                name: "Hoang Tra My",
                telephone: "0937642108",
            },
        ]
    }
};
console.log("Danh sach thanh vien");
for(var i=0;i< student.myGroup.member.length; i++){
    console.log(student.myGroup.member[i].name);
}
console.log(student.myGroup.member[0].name);
// var student2 = Object.create(student);
// student2.myGroup.member = [
//     {
//         name: "Nguyen Trung Loi",
//         telephone: "0398450777",
//     }
// ];
