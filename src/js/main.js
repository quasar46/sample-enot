document.addEventListener('DOMContentLoaded', function () {
  const minViewPort = (min = 380) => {
    if (window.innerWidth <= min) {
      const viewport = document.querySelector('[name="viewport"]');
      if (viewport) viewport.setAttribute("content", `width=${min}, user-scalable=no`);
    }
  };

  minViewPort();

  const burger = () => {
    const burger = document.querySelector('#burger');
    const mobilemenu = document.querySelector('.header__right');
    const closeMenu = document.querySelector('#closeMenu');
    const overlay = document.querySelector('.overlay');

    burger.addEventListener('click', function () {
      mobilemenu.classList.add('active');
      overlay.classList.add('active');
      scrollLock.disablePageScroll();
    });
    closeMenu.addEventListener('click', function () {
      mobilemenu.classList.remove('active');
      overlay.classList.remove('active');
      scrollLock.enablePageScroll();

    });
  }


  burger();



  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 11,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      381: {
        slidesPerView: 9,
      },
      769: {
        slidesPerView: 11,
      }
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },

  });


  const showGallery = () => {
    const wrap = document.querySelector(".gallery__items");
    const items = document.querySelectorAll(".gallery__items img");
    const btn = document.querySelector('#showGalleryBtn');

    items.forEach((item, i) => {
      if (i > 7) {
        item.classList.add('hidden');
      }
    })


    btn.addEventListener('click', function () {
      items.forEach((item, i) => {
        if (i > 7) {
          item.classList.remove('hidden');
        }
      })
      this.remove();
      wrap.classList.add('show');
    });
  }
  showGallery();

})


$(document).ready(function () {
  $(function () {
    $.fn.scrollToTop = function () {
      $(this).hide().removeAttr("href");
      if ($(window).scrollTop() != "0") {
        $(this).fadeIn("slow")
      }
      var scrollDiv = $(this);
      $(window).scroll(function () {
        if ($(window).scrollTop() == "0") {
          $(scrollDiv).fadeOut("slow")
        } else {
          $(scrollDiv).fadeIn("slow")
        }
      });
      $(this).click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow")
      })
    }
  });
  $(function () { $(".up").scrollToTop(); });



  // меню в шапке
  if (window.innerWidth > 1279) {
    function responseMenu() {
      let wrap_width = $(".header__nav-menu").outerWidth();
      let menu_width = 0;

      $(".header__nav-menu>a").each(function () {
        menu_width +=
          $(this).outerWidth() +
          parseInt(getComputedStyle($(this)[0]).marginRight);
      });

      menu_width -= $(".header__nav-menu > .dd_menu").outerWidth();

      if (wrap_width < menu_width + 150) {
        $(".header__nav-menu .dd_menu").show();

        let items = $(".header__nav-menu>a");
        $(".header__nav-menu__submenu").append(items.eq(items.length - 1));

        responseMenu();
      }

      return false;
    }
    $(window)
      .on("resize", function () {
        if (window.innerWidth < 1920) {
          responseMenu();
        }
      })
      .trigger("resize");
  }
})