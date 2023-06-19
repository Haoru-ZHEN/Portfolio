const showDeliveryIcon = document.getElementById('showDeliveryIcon');
const h3Delivery = document.getElementById('h3Delivery');
const showReviewIcon = document.getElementById('showReviewIcon');
const h3Review = document.getElementById('h3Review');

var isShowDelivery = false;
var isShowReview = false;

function showDelivery() {
     if (isShowDelivery) {
          showDeliveryIcon.style.transform = 'rotate(360deg)';
          isShowDelivery = false;
          h3Delivery.style.display = 'none';
     } else {
          showDeliveryIcon.style.transform = 'rotate(180deg)';
          isShowDelivery = true;
          h3Delivery.style.display = 'inline';
     }
}

function showReview() {
     if (isShowReview) {
          showReviewIcon.style.transform = 'rotate(360deg)';
          isShowReview = false;
          h3Review.style.display = 'none';
     } else {
          showReviewIcon.style.transform = 'rotate(180deg)';
          isShowReview = true;
          h3Review.style.display = 'inline';
     }
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

setInterval(function () {
     if (didScroll) {
          hasScrolled();
          didScroll = false;
     }
}, 250);

function hasScrolled() {
     var st = $(this).scrollTop();

     // Make sure they scroll more than delta
     if (Math.abs(lastScrollTop - st) <= delta) return;

     // If they scrolled down and are past the navbar, add class .nav-up.
     // This is necessary so you never see what is "behind" the navbar.
     if (st > lastScrollTop && st > navbarHeight) {
          // Scroll Down
          $('header').addClass('nav-up');
     } else {
          // Scroll Up
          if (st + $(window).height() < $(document).height()) {
               $('header').removeClass('nav-up');
          }
     }

     lastScrollTop = st;
}

window.addEventListener('scroll', function () {
     //console.log(window.scrollY);
     didScroll = true;
});
