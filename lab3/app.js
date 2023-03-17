
//appendToResult(value): hàm này được gọi mỗi khi người dùng bấm vào các nút số và các nút phép tính. 
//Hàm này sẽ thêm giá trị của nút được bấm vào cuối chuỗi kết quả hiển thị trên màn hình.
function appendToResult(value) { 
  document.getElementById("result").innerHTML += value;
}

//clearResult(): hàm này được gọi khi người dùng bấm nút "C" để xóa toàn bộ kết quả trên màn hình.
// Hàm này sẽ xóa hết nội dung trong phần hiển thị kết quả trên màn hình.
function clearResult() {
  document.getElementById("result").innerHTML = "";
}
//calculate(): hàm này được gọi khi người dùng bấm nút "=" để tính toán kết quả. 
//Hàm này sẽ lấy giá trị của biểu thức tính toán từ phần hiển thị kết quả trên màn hình (bằng cách sử dụng hàm eval()), 
//tính toán kết quả, và hiển thị kết quả tính toán trên màn hình.
function calculate() {
  var result = eval(document.getElementById("result").innerHTML);
  document.getElementById("result").innerHTML = result;
}
