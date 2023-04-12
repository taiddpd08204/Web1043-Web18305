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
function Dong_ho() {
  var gio = document.getElementById("gio");
  var phut = document.getElementById("phut");
  var giay = document.getElementById("giay");
  var Gio_hien_tai = new Date().getHours();
  var Phut_hien_tai = new Date().getMinutes();
  var Giay_hien_tai = new Date().getSeconds();
  gio.innerHTML = Gio_hien_tai;
  phut.innerHTML = Phut_hien_tai;
  giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(Dong_ho, 1000);
let zoom = document.querySelector('.zoom');
let imgZoom = document.getElementById('imgZoom');

zoom.addEventListener('mousemove', (event)=>{
    imgZoom.style.opacity = 1;
    let positionPx = event.x - zoom.getBoundingClientRect().left;
    let positionX = (positionPx / zoom.offsetWidth) * 100;

    let positionPy = event.y - zoom.getBoundingClientRect().top;
    let positionY = (positionPy / zoom.offsetHeight) * 100;

    imgZoom.style.setProperty('--zoom-x', positionX + '%');
    imgZoom.style.setProperty('--zoom-y', positionY + '%');

    let transformX = -(positionX - 50) / 3.5;
    let transformY = - (positionY - 50) / 3.5;
    imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`;
})
zoom.addEventListener('mouseout', ()=>{
    imgZoom.style.opacity = 0;
})
let endDate = new Date("10/04/2023 00:00:00").getTime();
let check = setInterval(function(){
    let now = new Date().getTime();
    let distance = endDate - now;
    let day = Math.floor(distance / (24*60*60*1000));
    let hour = Math.floor((distance % (24*60*60*1000)) / (60* 60*1000));
    let minute = Math.floor((distance % (60* 60*1000)) / (60*1000));
    let seconds = Math.floor((distance % (60*1000)) / 1000);


    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('seconds').innerText = seconds;
    if(distance <= 0){
        clearInterval(check);
    }
}, 1000);



// begin ms
// 1s = 1000 ms
// 1p = 60s = 60*1000 ms
// 1h = 60p = 60*60 s = 60* 60* 1000 ms
// 1d = 24h = 24*60p = 24*60*60s = 24*60*60*1000 ms 
