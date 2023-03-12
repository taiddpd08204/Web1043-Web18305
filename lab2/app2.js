//Nhập vào 3 số a,b,c từ bàn phím
let a = prompt("nhap a:");
let b = prompt("nhap b:");
let c = prompt("nhap c:");

// Kiểm tra xem a, b, c có phải là 3 cạnh của một tam giác hay không
if (a + b > c && a + c > b && b + c > a) {
    // Tính diện tích tam giác bằng công thức Heron
    let p = (a + b + c) / 2; // nửa chu vi tam giác
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  
    // Kiểm tra loại tam giác
    if (a === b && b === c) {
      document.write("Tam giác đều");
    } else if (a === b || b === c || c === a) {
      document.write("Tam giác cân");
    } else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
               Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
               Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)) {
      document.write("Tam giác vuông");
    } else {
      document.write("Tam giác thường");
    }
  } else {
    document.write("Ba giá trị nhập vào không phải là 3 cạnh của một tam giác");
  }
  sty