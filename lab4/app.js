class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = new Date(dob);
    }
  
    getFullName() {
      return `${this.last_name} ${this.first_name}`;
    }
  
    getCurrentAgeByYear() {
      const today = new Date();
      let age = today.getFullYear() - this.dob.getFullYear();
      const month = today.getMonth() - this.dob.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < this.dob.getDate())) {
        age--;
      }
      return age;
    }
  
    getCurrentAgeByDay() {
      const today = new Date();
      const diffTime = Math.abs(today - this.dob);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
  }
  
  const studentList = [
    new Student(1, "lan", "ngoc", "A01", "lan.ngoc@example.com", "123456789", "1999-01-01"),
    new Student(2, "anh", "ngoc", "A01", "anh.ngoc@example.com", "234567890", "2000-02-02"),
    new Student(3, "hien", "anh", "A02", "hien.anh@example.com", "345678901", "2001-03-03"),
    new Student(4, "tai", "duong", "A02", "tai.duong@example.com", "456789012", "2002-04-04"),
    new Student(5, "khanh", "van", "A03", "khanh.van@example.com", "567890123", "2003-05-05"),
  ];
  
  studentList.sort((a, b) => a.getCurrentAgeByDay() - b.getCurrentAgeByDay());
  
  console.log("Danh sach sinh vien theo tuoi:");
  console.log("-----------------------------");
  for (const student of studentList) {
    console.log(student.getFullName(), student.getCurrentAgeByYear());
  }
  
  console.log("Kich thuoc man hinh:");
  console.log("--------------------");
  console.log(`Width: ${window.screen.width}`);
  console.log(`Height: ${window.screen.height}`);