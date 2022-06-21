/* burger menu*/

const burger = document.querySelector('.header__burger');
const menu_nav = document.querySelector('.header__nav');
const hero = document.querySelector('.hero');

burger.addEventListener('click', () => {
  if (burger.classList.contains('is-active')) menu_nav.style.display = 'none';
  else menu_nav.style = `display: flex; flex-direction:column; height: ${hero.clientHeight}px;`;
  burger.classList.toggle('is-active');
})

menu_nav.addEventListener('click', ()=>{
  menu_nav.style = 'display: none;';
  burger.classList.remove('is-active');
})

/*меню для выбора направления*/
const realism = document.getElementById('realism');
const realismDropdown = document.getElementById('realism-dropdown');
realism.addEventListener('click', () => {
  document.querySelectorAll('.direction__dropdown').forEach(elem => {
    if (elem !== realismDropdown) elem.classList.remove('is-active');
  })
  document.querySelectorAll('.direction__item-btn').forEach(elem => {
    if (elem !== realism) elem.classList.remove('is-active');
  })
  realism.classList.toggle('is-active');
  realismDropdown.classList.toggle('is-active');

})
const impressionism = document.getElementById('impressionism');
const impressDropdown = document.getElementById('impress-dropdown');
impressionism.addEventListener('click', () => {
  document.querySelectorAll('.direction__dropdown').forEach(elem => {
    if (elem !== impressDropdown) elem.classList.remove('is-active');
  })
  document.querySelectorAll('.direction__item-btn').forEach(elem => {
    if (elem !== impressionism) elem.classList.remove('is-active');
  })
  impressionism.classList.toggle('is-active');
  impressDropdown.classList.toggle('is-active');
})
const postimpressionism = document.getElementById('postimpressionism');
const postimpressDropdown = document.getElementById('postimpress-dropdown');
postimpressionism.addEventListener('click', () => {
  document.querySelectorAll('.direction__dropdown').forEach(elem => {
    if (elem !== postimpressDropdown) elem.classList.remove('is-active');
  })
  document.querySelectorAll('.direction__item-btn').forEach(elem => {
    if (elem !== postimpressionism) elem.classList.remove('is-active');
  })
  postimpressionism.classList.toggle('is-active');
  postimpressDropdown.classList.toggle('is-active');
})
const avant_gardism = document.getElementById('avant-gardism');
const avantDropdown = document.getElementById('avant-dropdown');
avant_gardism.addEventListener('click', () => {
  document.querySelectorAll('.direction__dropdown').forEach(elem => {
    if (elem !== avantDropdown) elem.classList.remove('is-active');
  })
  document.querySelectorAll('.direction__item-btn').forEach(elem => {
    if (elem !== avant_gardism) elem.classList.remove('is-active');
  })
  avant_gardism.classList.toggle('is-active');
  avantDropdown.classList.toggle('is-active');
})
const futurism = document.getElementById('futurism');
const futurDropdown = document.getElementById('futur-dropdown');
futurism.addEventListener('click', () => {
  document.querySelectorAll('.direction__dropdown').forEach(elem => {
    if (elem !== futurDropdown) elem.classList.remove('is-active');
  })
  document.querySelectorAll('.direction__item-btn').forEach(elem => {
    if (elem !== futurism) elem.classList.remove('is-active');
  })
  futurism.classList.toggle('is-active');
  futurDropdown.classList.toggle('is-active');
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const selectCustom = document.getElementById('gallery-select');
const choices = new Choices(selectCustom, {
  choices: [{
    value: 'art',
    label: 'Живопись',
    selected: true,
    disabled: false,
  },
  {
    value: 'picture',
    label: 'Рисунок',
    selected: true,
    disabled: false,
  },
  {
    value: 'sculpture',
    label: 'Скульптура',
    selected: true,
    disabled: false,
  },
  ],
  itemSelectText: '',
  searchEnabled: false,
});

/*gallery swiper*/

let gallerySlider = new Swiper(".slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery .gallery-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

/*подключение аккордиона*/

new Accordion(".accordion-container", {
  openOnInit: [0]
});

/*swiper events */

let eventsSlider = new Swiper(".events__slides", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".events__next",
    prevEl: ".events__prev"
  },
  pagination: {

    type: "fraction"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    767: {
      slidesPerView: 3,
      spaceBetween: 27
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});


/*projects swiper*/
let projectsSlider = new Swiper(".projects__swiper", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".projects__next",
    prevEl: ".projects__prev"
  },
  loop: true,

  breakpoints: {
    441: {
      slidesPerView: 2,
      spaceBetween: 50
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});


/*contacts map*/

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.600645],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
    controls: ['geolocationControl', 'zoomControl']
  },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "400px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "320px", right: "20px" }
    }
  );

  const myPlacemark = new ymaps.Placemark(
    [55.758468, 37.601088],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "https://i.ibb.co/C77msLH/object.jpg",
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -20],
    }
  );

  myMap.geoObjects.add(myPlacemark);

  myMap.behaviors.disable('scrollZoom');
}
