
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const menuBtn = document.querySelector('.navbar-toggler');
const navigation = document.querySelector('.navbar-nav');
menuBtn.addEventListener('click', function () {
  navigation.classList.toggle('navactive');
});

const sliderimg = document.querySelectorAll('.slider-img');
const mainImg = document.querySelector('.img-1');
const silde = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider');
const mainContainer = document.querySelector('.main-section');
const navBar = document.querySelector('.navbar');
sliderContainer.addEventListener('click', function () {
  sliderimg.forEach(el => {
    el.addEventListener('click', function (e) {
      const sliderSrc = e.target.src;
      mainImg.src = sliderSrc;
      mainImg.animate(
        [
          {
            width: 0,
            transform: 'rotate(30deg)',
          },
          {
            width: '100%',
            transform: 'rotate(-30deg)',
          },
        ],
        {
          duration: 500,
        }
      );
      const dataColor = e.target.dataset.color;
      mainContainer.style.background = dataColor;
      navBar.style.background = dataColor;
      navigation.style.background = dataColor;
      sliderContainer.style.background = dataColor;
    });
  });
});
