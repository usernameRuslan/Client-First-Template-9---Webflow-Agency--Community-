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



document.addEventListener("DOMContentLoaded", function() {
  var questionHeaders = document.querySelectorAll(".faq-question");
  
  questionHeaders.forEach(function(header) {
      header.addEventListener("click", function() {
          var answer = this.nextElementSibling;
          this.querySelector(".faq-plus-sign").classList.toggle("rotate");
          if (answer.style.display === "block") {
              answer.style.display = "none";
          } else {
              answer.style.display = "block";
          }
      });
  });
});