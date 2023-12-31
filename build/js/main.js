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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgbWluVmlld1BvcnQgPSAobWluID0gMzgwKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gbWluKSB7XHJcbiAgICAgIGNvbnN0IHZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2aWV3cG9ydFwiXScpO1xyXG4gICAgICBpZiAodmlld3BvcnQpIHZpZXdwb3J0LnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgYHdpZHRoPSR7bWlufSwgdXNlci1zY2FsYWJsZT1ub2ApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG1pblZpZXdQb3J0KCk7XHJcblxyXG4gIGNvbnN0IGJ1cmdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXInKTtcclxuICAgIGNvbnN0IG1vYmlsZW1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19yaWdodCcpO1xyXG4gICAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlTWVudScpO1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcblxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBtb2JpbGVtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBzY3JvbGxMb2NrLmRpc2FibGVQYWdlU2Nyb2xsKCk7XHJcbiAgICB9KTtcclxuICAgIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbW9iaWxlbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgc2Nyb2xsTG9jay5lbmFibGVQYWdlU2Nyb2xsKCk7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYnVyZ2VyKCk7XHJcblxyXG5cclxuXHJcbiAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJcIiwge1xyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIHNsaWRlc1BlclZpZXc6IDExLFxyXG4gICAgZnJlZU1vZGU6IHRydWUsXHJcbiAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDM4MToge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDksXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2OToge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDExLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdmFyIHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyMlwiLCB7XHJcbiAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHRodW1iczoge1xyXG4gICAgICBzd2lwZXI6IHN3aXBlcixcclxuICAgIH0sXHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgY29uc3Qgc2hvd0dhbGxlcnkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5X19pdGVtc1wiKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5X19pdGVtcyBpbWdcIik7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvd0dhbGxlcnlCdG4nKTtcclxuXHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpID4gNykge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpID4gNykge1xyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIHdyYXAuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNob3dHYWxsZXJ5KCk7XHJcblxyXG59KVxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICQuZm4uc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykuaGlkZSgpLnJlbW92ZUF0dHIoXCJocmVmXCIpO1xyXG4gICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpICE9IFwiMFwiKSB7XHJcbiAgICAgICAgJCh0aGlzKS5mYWRlSW4oXCJzbG93XCIpXHJcbiAgICAgIH1cclxuICAgICAgdmFyIHNjcm9sbERpdiA9ICQodGhpcyk7XHJcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICQoc2Nyb2xsRGl2KS5mYWRlT3V0KFwic2xvd1wiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKHNjcm9sbERpdikuZmFkZUluKFwic2xvd1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgXCJzbG93XCIpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChmdW5jdGlvbiAoKSB7ICQoXCIudXBcIikuc2Nyb2xsVG9Ub3AoKTsgfSk7XHJcblxyXG5cclxuXHJcbiAgLy8g0LzQtdC90Y4g0LIg0YjQsNC/0LrQtVxyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEyNzkpIHtcclxuICAgIGZ1bmN0aW9uIHJlc3BvbnNlTWVudSgpIHtcclxuICAgICAgbGV0IHdyYXBfd2lkdGggPSAkKFwiLmhlYWRlcl9fbmF2LW1lbnVcIikub3V0ZXJXaWR0aCgpO1xyXG4gICAgICBsZXQgbWVudV93aWR0aCA9IDA7XHJcblxyXG4gICAgICAkKFwiLmhlYWRlcl9fbmF2LW1lbnU+YVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtZW51X3dpZHRoICs9XHJcbiAgICAgICAgICAkKHRoaXMpLm91dGVyV2lkdGgoKSArXHJcbiAgICAgICAgICBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKCQodGhpcylbMF0pLm1hcmdpblJpZ2h0KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtZW51X3dpZHRoIC09ICQoXCIuaGVhZGVyX19uYXYtbWVudSA+IC5kZF9tZW51XCIpLm91dGVyV2lkdGgoKTtcclxuXHJcbiAgICAgIGlmICh3cmFwX3dpZHRoIDwgbWVudV93aWR0aCArIDE1MCkge1xyXG4gICAgICAgICQoXCIuaGVhZGVyX19uYXYtbWVudSAuZGRfbWVudVwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgIGxldCBpdGVtcyA9ICQoXCIuaGVhZGVyX19uYXYtbWVudT5hXCIpO1xyXG4gICAgICAgICQoXCIuaGVhZGVyX19uYXYtbWVudV9fc3VibWVudVwiKS5hcHBlbmQoaXRlbXMuZXEoaXRlbXMubGVuZ3RoIC0gMSkpO1xyXG5cclxuICAgICAgICByZXNwb25zZU1lbnUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgJCh3aW5kb3cpXHJcbiAgICAgIC5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTkyMCkge1xyXG4gICAgICAgICAgcmVzcG9uc2VNZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudHJpZ2dlcihcInJlc2l6ZVwiKTtcclxuICB9XHJcbn0pIl0sImZpbGUiOiJtYWluLmpzIn0=
