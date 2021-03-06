(function () {

  "use strict";

  var app = {

    init: function () {
      //=== Plugins ===\\
      this.spincrement();

    },
    spincrement: function () {

      var show = true;
      var countbox = ".spincrement-container";

      if ($(countbox).length) {

        $(window).on("scroll load resize", function () {
          if (!show) return false;
          var w_top = $(window).scrollTop();
          var e_top = $(countbox).offset().top;
          var w_height = $(window).height();
          var d_height = $(document).height();
          var e_height = $(countbox).outerHeight();
          if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.spincrement').spincrement({
              duration: 1500,
              leeway: 10
            });
            show = false;
          }
        });
      }

    }

  }

  app.init();

}());