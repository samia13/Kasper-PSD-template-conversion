$(document).ready(function () {
  // hero section slider
  $(".landing ").slick({
    dots: true,
    prevArrow: '<i class="fa-solid fa-chevron-left left-arrow slide"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right-arrow slide"></i>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // testimonials section slider

  $(".test-slick").slick({
    arrows: false,
    dots: true,
  });

  // gallery filter
  $(".filters ul a").on("click", function (e) {
    e.preventDefault();
    const activeFilter = $(this).parent().attr("id").toLowerCase();
    $(".filters ul li").removeClass("active");
    $(`.filters ul li#${activeFilter}`).addClass("active");
    if (activeFilter === "all") {
      $(".gallery").show("slow");
    } else {
      $(".gallery").hide();
      $(`.gallery.${activeFilter}`).show("slow");
    }
  });

  // search form
  let form = $(".search-container");
  function toggleSearch() {
    form.toggleClass("open");
  }
  $("nav .search i, .close").on("click", toggleSearch);
});
