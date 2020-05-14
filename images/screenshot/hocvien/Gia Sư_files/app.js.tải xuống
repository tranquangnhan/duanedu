var lop = 0;

function chay() {
    lop++;

    if (lop == 1251) {
        lop = '1250';
    }


    document.getElementById('lop').innerHTML = lop;
}

setInterval("chay()", 0);
chay();

//baner
// var banner = [];

// banner[0] = 'url(images/banner.png)';
// banner[1] = 'url(images/banner2.jpg)';
// banner[2] = 'url(images/banner3.jpg)';
// banner[3] = 'url(images/banner4.jpg)';
// var bn = document.getElementById('boxbanner');
// var i = 0;

// function setbanner() {
//     bn.style.background = banner[i];
//     i++;
//     if (i > banner.length - 1) {
//         i = 0;
//     }
//     setTimeout('setbanner()', 5000);
//     chuyen();
// }
// setbanner();

// function chuyen() {
//     bn.classList.add('hieuung');
//     setTimeout(() => {
//         bn.classList.remove('hieuung');
//     }, 1000);
// }
// var j = 0;

// function lui() {
//     j--;
//     if (j < 0) {
//         j = banner.length - 1;
//     }
//     bn.style.background = banner[j];
//     chuyen()
// }
// var z = 0;

// function tiep() {
//     z++;
//     if (z > banner.length - 1) {
//         z = 0;
//     }
//     bn.style.background = banner[z];
//     chuyen()
// }

var kichthuoc = document.getElementsByClassName('slide')[0].clientWidth;
var chuyenSlide = document.getElementsByClassName('chuyen-slide')[0]; // lấy kích thức tất cả ảnh
var maxlength = document.querySelectorAll('.chuyen-slide__boximg');
var max = kichthuoc * maxlength.length;
max -= kichthuoc;
var chuyen = 0;

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
setInterval('tiep()', 10000);
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
    if (navbarmb.style.transform = "translateX(-100%)") {
        navbarmb.style.transform = "translateX(0%)";
        navbarrg.style.display = "block";
        navbaric.style.float = "right";
        nboff.style.display = "block";
    }
}

function hidenav() {
    navbarmb.style.transform = "translateX(-100%)";
    navbarrg.style.display = "none";
}

function offnav() {
    navbarmb.style.transform = "translateX(-100%)";
    navbarrg.style.display = "none";
}
// navbar

// Phúc Bình JS
var boxgiasu = document.getElementById('giasu');
var boxhocvien = document.getElementById('hocvien');
var btngiasu = document.getElementById('btngiasu');
var btnhocvien = document.getElementById('btnhocvien')

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