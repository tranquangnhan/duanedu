var kichthuoc = document.getElementsByClassName('slide')[0].clientWidth;
var chuyenSlide = document.getElementsByClassName('chuyen-slide')[0]; // lấy kích thức tất cả ảnh
var maxlength = document.querySelectorAll('.chuyen-slide__boximg'); //tìm kích thước lớn nhất
var max = kichthuoc * maxlength.length;
max -= kichthuoc;
var chuyen = 0;
console.log(max);

function tiep() {

    if (chuyen < max) {
        chuyen += kichthuoc;
    } else chuyen = 0;
    chuyenSlide.style.marginLeft = '-' + chuyen + 'px';
}

function lui() {
    if (chuyen == 0) {
        chuyen = max;
    } else {
        chuyen -= kichthuoc;
    }
    chuyenSlide.style.marginLeft = '-' + chuyen + 'px';
}
setInterval('tiep()', 3000);


if (kichthuoc < 769) {
    var respon = document.querySelector('.chuyen-slide__boximg');
    var respon2 = document.querySelector('.text-banner2');
    respon.style.width = kichthuoc + 'px';
    respon2.style.width = kichthuoc + 'px';
}


// start btn go to top
window.onscroll = function() {
    scrollFunction()
};
var btngototop = document.getElementById('gototopid');

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop >= 500) {
        btngototop.style.display = 'block';
    } else {
        btngototop.style.display = 'none';
    }
}
btngototop.addEventListener('click', gotot);

function gotot() {
    $('html,body').animate({ scrollTop: 0 });
}

// navbar
var navbarmb = document.getElementById('navbarmb');
var navbaric = document.getElementById('navbaric');
var navbarrg = document.getElementById('navbarrg');
var nboff = document.getElementById('navmb__off');
navbaric.addEventListener('click', shownav);
navbarrg.addEventListener('click', hidenav);
nboff.addEventListener('click', offnav);
// navbaric.addEventListener('click', shownavic);

function shownav() {
    if (navbarmb.style.transform = "translateX(100%)") {
        navbarmb.style.transform = "translateX(0%)";
        navbarrg.style.display = "block";
        navbaric.style.float = "right";
        nboff.style.display = "block";
    }
}

function hidenav() {
    navbarmb.style.transform = "translateX(100%)";
    navbarrg.style.display = "none";
}

function offnav() {
    navbarmb.style.transform = "translateX(100%)";
    navbarrg.style.display = "none";
}
// navbar

// Phúc Bình JS
var boxgiasu = document.getElementById('giasu');
var boxhocvien = document.getElementById('hocvien');
var btngiasu = document.getElementById('btngiasu');
var btnhocvien = document.getElementById('btnhocvien')
var boxgiasuqa = document.getElementById('qa_giasu');
var boxhocvienqa = document.getElementById('qa_hocvien');
var btngiasuqa = document.getElementById('btngiasuqa');
var btnhocvienqa = document.getElementById('btnhocvienqa');

function giasu() {
    boxhocvien.style.display = "none";
    boxgiasu.style.display = "block";
    btnhocvien.classList.remove('active');
    btngiasu.classList.add('active');
}

function hocvien() {
    boxgiasu.style.display = "none";
    boxhocvien.style.display = "block";
    btnhocvien.classList.add('active');
    btngiasu.classList.remove('active');
}

function giasu_qa() {
    boxhocvienqa.style.display = "none";
    boxgiasuqa.style.display = "block";
    btnhocvienqa.classList.remove('active');
    btngiasuqa.classList.add('active');
}

function hocvien_qa() {
    boxgiasuqa.style.display = "none";
    boxhocvienqa.style.display = "block";
    btnhocvienqa.classList.add('active');
    btngiasuqa.classList.remove('active');
}