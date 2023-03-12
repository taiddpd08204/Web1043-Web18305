let hoTen = prompt("nhap ho va ten: ");
let gioiTinh = prompt("nhap gioi tinh: ");

//tách họ, tên đệm và tên riêng
let hoTenArr = hoTen.trim().split(" ");
let ho = hoTenArr[0];
let tenDem = hoTenArr.slice(1, -1).join(" ");
let ten =hoTenArr[hoTenArr.length - 1];


//thay đổi tên đệm 
if (gioiTinh.toLowerCase() === "nam") {
    tenDem = "Văn";
} else if (gioiTinh.toLowerCase() === "nữ") {
    tenDem = "Vẽ";
}
//in ra kết quả
document.write(`Họ: ${ho}`);
document.write(`Ten Dem: ${tenDem}`);
document.write(`Ten: ${ten}`);

let tenMoi = `${ho} ${tenDem} ${ten}`;
document.write(`Ten moi: ${tenMoi}`);