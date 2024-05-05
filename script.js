document.addEventListener("DOMContentLoaded", function() { // Можно из
    // Check if the form data exists in localStorage
    var registrationData = localStorage.getItem("registrationData");
    if (!registrationData) {
        showForm();
    }
});

function showForm() {
    var overlay = document.getElementById("registrationFormOverlay");
    overlay.style.display = "block";
}

function closeForm() {
    var overlay = document.getElementById("registrationFormOverlay");
    overlay.style.display = "none";
}

var registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if all fields are filled
    if (firstName && lastName && email && password) {
        // Save the data to localStorage
        localStorage.setItem("registrationData", JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }));

        // Hide the form
        closeForm();
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});
function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Запуск анимации Progress Bar
    move();
});
// Получаем высоту страницы
var maxHeight = document.body.scrollHeight - window.innerHeight;
// Получаем высоту видимой области окна браузера
var winHeight = window.innerHeight;
// Получаем прогресс-бар
var progressBar = document.getElementById("myBar");
window.onscroll = function() {
    // Получаем текущую прокрутку страницы и высоту видимой области окна
    var scrolled = window.pageYOffset;
    
    // Рассчитываем прогресс прокрутки
    var progress = (scrolled / maxHeight) * 100;
    
    // Устанавливаем ширину прогресс-бара
    progressBar.style.width = progress + "%";
};
$(document).ready(function () {
    var slider = $('.slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
    });

    $('.slider img').click(function() {
        var index = $(this).parent().index();
        slider.goToSlide(index);
        $('.slider-nav a').removeClass('active');
        $('.slider-nav a[data-slide-index="' + index + '"]').addClass('active');
    });

    $('.slider-nav a').click(function() {
        var index = $(this).data('slide-index');
        slider.goToSlide(index);
        $('.slider-nav a').removeClass('active');
        $(this).addClass('active');
    });
});
