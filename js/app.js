var x;
x = 10;
var y;
y = "hello world";

x = "T2203E";
y = 20;
// gia su lam mot loat cac thao tac
console.log(x);
console.log(y);
var z = x + y;
var t = y + x;
y = y + 10;

console.log(z);
console.log(t);
console.log(y);

console.log("y = "+y);

for (var i=0;i<20;i++){
    console.log("i = "+i);
}

var arr = [];
arr[0]= 20;
arr[1]= "hello";
arr[2]= true;

arr[3]= [1,2,3,4];
arr[3][4]= [5,3,1]

var arr2 = [];

for (var i = 0;i<20;i++){
    arr2[i] = i*i+1;
}
arr2[arr2.length] = 1001;

for (var i=0;i<10;i++){
    arr2.push(1001*i+1001);
}

function tinhTong(a,b){
    //return a+b;
    console.log(a+b);
}
tinhTong(5,7);
tinhTong("xin chao",8);

var giaiThua = function (n) {
    var gt = 1;
    for(var i=1;i<=n;i++){
        gt *= i;
    }
    //return gt;//dc su dung de tin toan tiep
    console.log("GT: "+gt);

}
//neu sd return thi viet var g = giaiThua(7) + 100;
giaiThua(7);

var nhapMang = (n)=>{
    var ary = [];
    for(var i=0;i<n;i++){
        ary.push(i*i+n);
    }
    return ary;
}
var arr3 = nhapMang(10);
console.log(arr3);

//alert("yêu cầu phải trên 18 tuổi!"); // tương đương hàm void
//confirm("Bạn chắc chắn muốn truy cập tiếp..");//boolean
// var k = confirm("Bạn chắc chắn muốn truy cập tiếp..");
//console.log("k = "+k);
//year = prompt("Bạn bao nhiêu tuổi?");// trả về string
// var year = prompt("Bạn bao nhiêu tuổi?");
//
// year = parseInt(year);// chuyển string -> number Int
// console.log("Sau khi them 2 tuoi: "+(year+2));
var p = "abc15";
var q = "15abc";
p = parseInt(p);//NaN
q = parseInt(q);//15
// isNaN -> true or false (s==NaN)
console.log("kiểm tra NaN của p:"+ isNaN(p));
console.log("kiểm tra NaN của q:"+ isNaN(q));

//sinh 1 số ngẫu nhiên
var r=Math.random();//sinh ra 1 số ngẫu nhiên từ 0< r <1
r = r * 100;//0<r<100
r = parseInt(r);

// var arry = [27];
// var arry=Math.random();
// arry = arry * 100;
// arry = parseInt(arry);


do{
    var sn;
    sn = prompt("Nhập một số nguyên dương");
    sn = parseInt(sn);
}while (isNaN(sn) || sn < 0 || r != sn);