$(document).ready(function(){
 const photoCarousel = $(".owl-carousel");
 photoCarousel.owlCarousel({
  items: 1,
  loop: true,

});
const arrowPrew = $(".arrow-left");
const arrowNext = $(".arrow-right");

arrowPrew.click(function () {
photoCarousel.trigger("prev.owl.carousel");
});

arrowNext.click(function () {
  photoCarousel.trigger("next.owl.carousel");
  });
});