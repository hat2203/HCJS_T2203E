var chiphi = 0;
var doanhthu = 0;

for (var i=0;i<30;i++){
    //1 tao random 27 so nguyen
    var ds = [];
    for(var j=0;j<27;j++){
        var r=Math.random();//sinh ra 1 số ngẫu nhiên từ 0< r <1
        r = r * 100;//0<r<100
        r = parseInt(r);
        ds.push(r);
    }

    //2 chon so va dat tien cuoc
    var luckyNumber;
    do{
        luckyNumber = prompt("ngay: "+i+"nhap mot so tu 0 -> 99");
        luckyNumber = parseInt(luckyNumber);
    }while (isNaN(luckyNumber) || luckyNumber < 0 || luckyNumber > 99);

    var money;
    do{
        money = prompt("nhap so tien cuoc");
        money = parseInt(money);
    }while (isNaN(money) || money <= 0 || money%100 != 0);

    //3 soi giai thuong
    var dem = 0;
    for (var k=0;k<ds.length;k++){
        if(ds[k] == luckyNumber){
            dem++;
        }

    }
    console.log("hom nay trung "+dem+"giai thuong");

    //4 thong ke tien
    chiphi += money;
    doanhthu += (dem* (80/23) * money);
}
// tong loi nhuan sau 30 ngay dau tu
console.log("chi phi: "+chiphi+" Doanh thu: "+doanhthu+" Loi nhuan: "+(doanhthu-chiphi));