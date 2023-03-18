// Hàm tính điểm trung bình
function tinhDiemTrungBinh() {
    // Nhập điểm Toán, Lý, Hóa, Sinh
    let diemToan =prompt("Nhập điểm Toán:");
    let diemLy =prompt("Nhập điểm Lý:");
    let diemHoa =prompt("Nhập điểm Hóa:");
    let diemSinh =prompt("Nhập điểm Sinh:");
  
    // Kiểm tra điểm đầu vào
    if (diemToan >= 0 && diemToan <= 10 &&
        diemLy >= 0 && diemLy <= 10 &&
        diemHoa >= 0 && diemHoa <= 10 &&
        diemSinh >= 0 && diemSinh <= 10) {
  
      // Tính điểm trung bình
      let diemTrungBinh = (diemToan + diemLy + diemHoa + diemSinh) / 4;
  
      // Xuất kết quả xếp loại
      if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
        console.log("Xếp loại: Giỏi");
      } else if (diemTrungBinh >= 7 && diemTrungBinh < 9) {
        console.log("Xếp loại: Khá");
      } else if (diemTrungBinh >= 5 && diemTrungBinh < 7) {
        console.log("Xếp loại: Trung Bình");
      } else {
        console.log("Xếp loại: Yếu");
      }
  
    } else {
      console.log("Điểm nhập vào không hợp lệ!");
    }
  }
  
  // Hàm hiển thị menu
  function hienThiMenu() {
    console.log("MENU");
    console.log("1. Tính điểm trung bình (switch case)");
    console.log("2. Tính điểm trung bình (if else)");
    console.log("0. Thoát");
  }
  
  // Hàm chạy chương trình
  function chayChuongTrinh() {
    while (true) {
      hienThiMenu();
      let luaChon = prompt("Nhập lựa chọn của bạn 0,1,2:");
  
      switch (luaChon) {
        case 1:
          tinhDiemTrungBinh();
          break;
        case 2:
          tinhDiemTrungBinh();
          break;
        case 0:
          console.log("Chương trình kết thúc!");
          return;
        default:
          console.log("Lựa chọn không hợp lệ!");
      }
    }
  }
  
  // Chạy chương trình
  chayChuongTrinh();
  