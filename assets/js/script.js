window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

$(document).ready(function () {
  var altura = $(".navbar").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > altura) {
      $(".navbar").addClass("menu-fixed");
    } else {
      $(".navbar").removeClass("menu");
    }
  });
});

$(function () {
  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on("click", ".page-scroll a", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1000,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $("body").scrollspy({
    target: ".site-header",
    offset: 10,
  });

  /* Progress bar */
  var $section = $(".section-skills");
  function loadDaBars() {
    $(".progress .progress-bar").progressbar({
      transition_delay: 500,
    });
  }

  /* Counters  */
  if ($(".section-counters .start").length > 0) {
    $(".section-counters .start").each(function () {
      var stat_item = $(this),
        offset = stat_item.offset().top;
      $(window).scroll(function () {
        if (
          $(window).scrollTop() > offset - 1000 &&
          !stat_item.hasClass("counting")
        ) {
          stat_item.addClass("counting");
          stat_item.countTo();
        }
      });
    });
  }

  // another custom callback for counting to infinity
  $("#infinity").data("countToOptions", {
    onComplete: function (value) {
      count.call(this, {
        from: value,
        to: value + 1,
      });
    },
  });

  $("#infinity").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }

  // Navigation overlay
  var s = skrollr.init({
    forceHeight: false,
    smoothScrolling: false,
    mobileDeceleration: 0.004,
    mobileCheck: function () {
      //hack - forces mobile version to be off
      return false;
    },
  });
});
