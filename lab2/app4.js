let arr = ["Tue", "Thu", "Sat", "Nine"];

// Thêm các phần tử mới và xóa "Nine"
arr.push("Mon", "We", "Fri", "Sun");
arr.splice(arr.indexOf("Nine"), 1);

// Sắp xếp mảng theo thứ tự đúng
const order = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
arr.sort((a, b) => order.indexOf(a) - order.indexOf(b));

console.log(arr); // ["Tue", "Thu", "Sat", "Mon", "Wed", "Fri", "Sun"]
