$(document).ready(function () {
        
    if ($('.js-swiperStaffs').length) {
        new Swiper(".js-swiperStaffs", {
            // slidesPerView: "auto",
            freeMode: true,
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            }
        });
    }

});
