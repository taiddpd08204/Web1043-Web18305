//Nhập vào 3 số a,b,c từ bàn phím
let a = prompt("nhap a:");
let b = prompt("nhap b:");
let c = prompt("nhap c:");

// tính delta
let delta = b*b - 4*a*c;

//xét delta xem phương trình có nghiệm không
if (delta > 0){
    let x1 = ( -b + Math.sqrt(delta)) / (2*a);
    let x2 = ( -b - Math.sqrl(delta)) / (2*a);
    document.write("Phương trình có hai nghiệm phân biệt: x1 = ${x1} và x2 = ${x2}");
} else if (delta == 0){
    let x = -b / (2*a); 
    document.write("Phương trình có nghiệm kép: x + ${x}");
} else{
    document.write("Phương trình vô nghiệm");
}