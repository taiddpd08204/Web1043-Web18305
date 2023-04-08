const usernameEle = document.getElementById('username');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');
btnRegister.addEventListener('click', function () {
  Array.from(inputEles).map((ele) =>
      ele.classList.remove('success', 'error')
  );
  let isValid = checkValidate();

  if (isValid) {
      alert('Gửi đăng ký thành công');
  }
});

function checkValidate() {
  let usernameValue = usernameEle.value;
  let emailValue = emailEle.value;
  let phoneValue = phoneEle.value;

  let isCheck = true;

  if (usernameValue == '') {
      setError(usernameEle, 'Tên không được để trống');
      isCheck = false;
  } else {
      setSuccess(usernameEle);
  }

  if (emailValue == '') {
      setError(emailEle, 'Email không được để trống');
      isCheck = false;
  } else if (!isEmail(emailValue)) {
      setError(emailEle, 'Email không đúng định dạng');
      isCheck = false;
  } else {
      setSuccess(emailEle);
  }

  if (phoneValue == '') {
      setError(phoneEle, 'Số điện thoại không được để trống');
      isCheck = false;
  } else if (!isPhone(phoneValue)) {
      setError(phoneEle, 'Số điện thoại không đúng định dạng');
      isCheck = false;
  } else {
      setSuccess(phoneEle);
  }

  return isCheck;
}

function setSuccess(ele) {
  ele.parentNode.classList.add('success');
}

function setError(ele, message) {
  let parentEle = ele.parentNode;
  parentEle.classList.add('error');
  parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
  );
}

function isPhone(number) {
  return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2000);
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
function updateClock() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");

  const hourDigit = document.querySelector(".hour");
  const minuteDigit = document.querySelector(".minute");
  const secondDigit = document.querySelector(".second");

  hourDigit.textContent = hour;
  minuteDigit.textContent = minute;
  secondDigit.textContent = second;

  setTimeout(updateClock, 1000);
}

updateClock();