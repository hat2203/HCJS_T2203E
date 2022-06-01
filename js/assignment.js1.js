function jackpost (){
var randomNumber = [];//mang ngau nhien 6 so
var ticketNumber = [];//mang so ng mua nhap 6 so
//1. sinh ngau nhien 6 so khac nhau tu 0-> 45
while (randomNumber.length<6){
    var r = Math.random();
    r = r *46; // muon co gia tri 45 phai nhan voi 46
    r = parseInt(r);
    if (!randomNumber.includes(r)){
        randomNumber.push(r);
    }
}
console.log(randomNumber);
//2. yeu cau nhap 6 so khac nhau tu 0->45
while (ticketNumber.length<6){
    var n = prompt("nhap so tu 0 den 45");
    n = parseInt(n);
    if ( !isNaN(n) && !ticketNumber.includes(n) && n>=0 && n<=45){
        ticketNumber.push(n);
    }
}

//3. so sanh hai bo so tren
var dem = 0;
for (var i=0;i<randomNumber.length;i++){
    if(ticketNumber.includes(randomNumber[i])){
        dem++;
    }
}
// setTimeout(function (){
//     switch (dem){
//         case 6: alert("chúc mừng bạn đã trúng 100 tỷ");
//         case 5: alert("chúc mừng bạn đã trúng 10.000.000");
//         case 4: alert("chúc mừng bạn đã trúng 300.000");
//         case 3: alert("chúc mừng bạn đã trúng 50.000");
//         default: alert("chúc bạn may mắn lần sau")
//     }
// },5000);//sau 5s ham moi dc thuc hien goi la ham callback
    var x = 0;
var xyz = setInterval(function (){
    switch (dem){
        case 6: alert("chúc mừng bạn đã trúng 100 tỷ");break;
        case 5: alert("chúc mừng bạn đã trúng 10.000.000");break;
        case 4: alert("chúc mừng bạn đã trúng 300.000");break;
        case 3: alert("chúc mừng bạn đã trúng 50.000");break;
        default: alert("chúc bạn may mắn lần sau");break;
    }
    x++;
    if(x == 3){
        clearInterval(xyz);
    }
},1000);
}