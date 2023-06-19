function showLine(event) {
     var link = event.target;
     const line = link.nextElementSibling;

     //line.style.width = 100+"px";
     line.style.width = 100 + '%';
     line.style.alignSelf = 'start';
}

function returnLine(event) {
     var link = event.target;
     const line = link.nextElementSibling;

     //line.style.width = 100+"px";
     line.style.width = 0;
     line.style.alignSelf = 'end';
}

function setState() {
     const statH2_1 = document.getElementById('statH2_1');
     const statH2_2 = document.getElementById('statH2_2');
     const statH2_3 = document.getElementById('statH2_3');
     var count = 0;

     setInterval(function () {
          if (count <= 217) {
               statH2_1.textContent = count;
               if (count <= 175) {
                    statH2_2.textContent = count;
                    if (count <= 152) {
                         statH2_3.textContent = count;
                    }
               }
          }

          count++;
     }, 5);
}

var theNum = -754;
var isSetState = false;
const imageDiv = document.getElementById('theswiper');
//const imgChange = document.getElementById('imgChange');
const reveal_video1 = document.getElementById('reveal-video1');
const reveal_video2 = document.getElementById('reveal-video2');
const detailDiv1 = document.querySelector('.detailDiv1');
const theswiper = document.querySelector('.myswiper');
var thecount = 0;

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
               $('header').css('background-color', 'black');
          }
     }

     lastScrollTop = st;
}

const swiper = new Swiper('.myswiper', {
     // Optional parameters
     slidesPerView: 1,
     direction: 'horizontal',
     loop: true,
     speed: 500,

     // If we need pagination
     pagination: {
          el: '.swiper-pagination',
          clickable: true,
     },

     // Navigation arrows
     navigation: {
          nextEl: '.swiper-next-but',
          prevEl: '.swiper-prev-but',
     },
});

window.addEventListener('scroll', function () {
     //console.log(window.scrollY);
     didScroll = true;
     const scrollPosition = window.scrollY; //1100+754

     if (this.window.scrollY <= 1000) {
          $('header').css('background-color', 'transparent');
     }
     if (this.window.scrollY >= 110 && window.scrollY <= 1000) {
          if (!isSetState) {
               setState();
               isSetState = true;
          }
     } else {
          isSetState = false;
     }

     if (window.scrollY > 1050 && window.scrollY < 1532) {
          if (1830 - window.scrollY >= 0) {
               imageDiv.style.transform = `translateY(-${1830 - this.window.scrollY}px)`;
          }
          reveal_video1.style.opacity = 1;
          reveal_video2.style.opacity = 0;
          detailDiv1.style.opacity = 0;
          theswiper.style.zIndex = -1;
     } else if (window.scrollY > 1532 && window.scrollY <= 1838) {
          if (1830 - window.scrollY >= 0) {
               imageDiv.style.transform = `translateY(-${1830 - this.window.scrollY}px)`;
               detailDiv1.style.transform = `translateY(-${(1830 - this.window.scrollY) / 16}px)`;
          }

          reveal_video1.style.opacity = 0;
          reveal_video2.style.opacity = 1;
          detailDiv1.style.opacity = 1;
          theswiper.style.zIndex = 1;
     }

     if (swiper.realIndex != 0) {
          // Enable scrolling after 5 seconds
          setTimeout(function () {
               $('body').css('overflow', 'auto');
          }, 800);
          $('body').css('overflow', 'hidden');
          swiper.slideTo(0);
     }
});


/*
new fullpage('#fullpage', {
     //options here
     autoScrolling: true,
     scrollBar: true,
     scrollingSpeed: 1000,
});*/

const seaSwitch = document.getElementById('seaSwitch');
const vacuumSwitch = document.getElementById('vacuumSwitch');
const section5 = document.getElementById('section5');
const pElement = section5.querySelector('p');
const kNelement = document.getElementById('kNelement');

function checkSwitch(switchClick) {
     if (switchClick === '0') {
          seaSwitch.classList.add('activeSwitch');
          vacuumSwitch.classList.remove('activeSwitch');
          section5.style.backgroundImage =
               'url(https://www.spacex.com/static/images/falcon-9/desktop/Merlin.jpg)';
          pElement.textContent =
               'Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.';
          kNelement.textContent = '845 kN ';

          const lbfSpan = document.createElement('span');
          lbfSpan.textContent = '/ 190,000 lbf';
          kNelement.appendChild(lbfSpan);
     } else {
          vacuumSwitch.classList.add('activeSwitch');
          seaSwitch.classList.remove('activeSwitch');
          section5.style.backgroundImage =
               'url(https://www.spacex.com/static/images/falcon-9/desktop/MerlinVac.jpg)';
          pElement.textContent =
               'Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.';
          kNelement.textContent = '981 kN ';

          const lbfSpan = document.createElement('span');
          lbfSpan.textContent = '/ 220,500 lbf';
          kNelement.appendChild(lbfSpan);
     }
}

const fairSwitch = document.getElementById('fairSwitch');
const dragSwitch = document.getElementById('dragSwitch');
const slide5 = document.getElementById('slide5');
const contentSlide5 = document.getElementById('contentSlide5');
const pElement5 = contentSlide5.querySelector('p');
const td1_5 = document.getElementById('td1_5');
const td2_5 = document.getElementById('td2_5');
const learnSpan = document.getElementById('learnSpan');

function checkSwitch5(switchClick) {
     if (switchClick === '0') {
          fairSwitch.classList.add('activeSwitch');
          dragSwitch.classList.remove('activeSwitch');
          slide5.style.backgroundImage =
               'url(https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9SoloFairings_Render_Desktop.jpg)';
          pElement5.textContent =
               'Made of a carbon composite material, the fairing protects satellites on their way to orbit. The fairing is jettisoned approximately 3 minutes into flight, and SpaceX continues to recover fairings for reuse on future missions.';

          td1_5.textContent = '13.1 m ';
          var lbfSpan = document.createElement('span');
          lbfSpan.textContent = '/ 43 ft';
          td1_5.appendChild(lbfSpan);

          td2_5.textContent = '5.2 m ';
          var lbfSpan = document.createElement('span');
          lbfSpan.textContent = '/ 17.1 ft';
          td2_5.appendChild(lbfSpan);
          learnSpan.style.display = 'none';
     } else {
          dragSwitch.classList.add('activeSwitch');
          fairSwitch.classList.remove('activeSwitch');
          slide5.style.backgroundImage =
               'url(https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9SoloDragon_Render_Desktop.jpg)';
          pElement5.textContent =
               'Dragon is capable of carrying up to 7 people and/or cargo in the spacecraft’s pressurized section. In addition, Dragon can carry cargo in the spacecraft’s unpressurized trunk, which can also accommodate secondary payloads.';

          td1_5.textContent = '8.1 m ';
          var lbfSpan = document.createElement('span');
          lbfSpan.textContent = '/ 26.6 ft';
          td1_5.appendChild(lbfSpan);

          td2_5.textContent = '3.7 m ';
          var lbfSpan = document.createElement('span');
          lbfSpan.textContent = '/ 12 ft';
          td2_5.appendChild(lbfSpan);
          learnSpan.style.display = 'inline-block';
     }
}

const overSwitch = document.getElementById('overSwitch');
const engineSwitch = document.getElementById('engineSwitch');
const legSwitch = document.getElementById('legSwitch');

const slide2 = document.getElementById('slide2');
const contentSlide2 = document.getElementById('contentSlide2');
const pElement2 = contentSlide2.querySelector('p');
const learnSpan2 = document.getElementById('learnSpan2');

const table2 = document.getElementById('table2');

function checkSwitch2(switchClick) {
     if (switchClick === '0') {
          overSwitch.classList.add('activeSwitch');
          engineSwitch.classList.remove('activeSwitch');
          legSwitch.classList.remove('activeSwitch');

          slide2.style.backgroundImage =
               'url(https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9S1_Render_Desktop.jpg)';
          pElement2.textContent = '';

          var text1 = document.createTextNode(
               'Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant.'
          );
          var lineBreak = document.createElement('br');
          var lineBreak2 = document.createElement('br');
          var text2 = document.createTextNode(
               'Falcon 9 generates more than 1.7 million pounds of thrust at sea level.'
          );

          // Append the text nodes and line break to the <h3> element
          pElement2.appendChild(text1);
          pElement2.appendChild(lineBreak);
          pElement2.appendChild(lineBreak2);
          pElement2.appendChild(text2);

          learnSpan2.style.display = 'none';
          table2.style.display = 'none';
     } else if (switchClick === '1') {
          overSwitch.classList.remove('activeSwitch');
          engineSwitch.classList.add('activeSwitch');
          legSwitch.classList.remove('activeSwitch');

          slide2.style.backgroundImage =
               'url(https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Engines_Render_Desktop.jpg)';
          pElement2.textContent =
               'The nine Merlin engines on the first stage are gradually throttled near the end of first-stage flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel. These engines are also used to reorient the first stage prior to reentry and to decelerate the vehicle for landing.';

          learnSpan2.style.display = 'none';
          table2.style.display = 'inline-block';
     } else {
          overSwitch.classList.remove('activeSwitch');
          engineSwitch.classList.remove('activeSwitch');
          legSwitch.classList.add('activeSwitch');

          slide2.style.backgroundImage =
               'url(https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9S1Legs_Render_Desktop.jpg)';
          pElement2.textContent =
               'The Falcon 9 first stage is equipped with four landing legs made of state-of-the-art carbon fiber with aluminum honeycomb.\nPlaced symmetrically around the base of the rocket, they are stowed at the base of the vehicle and deploy just prior to landing.';

          pElement2.textContent = '';

          var text1 = document.createTextNode(
               'The Falcon 9 first stage is equipped with four landing legs made of state-of-the-art carbon fiber with aluminum honeycomb.'
          );
          var lineBreak = document.createElement('br');
          var lineBreak2 = document.createElement('br');
          var text2 = document.createTextNode(
               'Placed symmetrically around the base of the rocket, they are stowed at the base of the vehicle and deploy just prior to landing.'
          );

          // Append the text nodes and line break to the <h3> element
          pElement2.appendChild(text1);
          pElement2.appendChild(lineBreak);
          pElement2.appendChild(lineBreak2);
          pElement2.appendChild(text2);

          learnSpan2.style.display = 'inline-block';
          table2.style.display = 'none';
     }
}

const swiper2 = new Swiper('.myswiper2', {
     // Optional parameters
     slidesPerView: 1,
     direction: 'horizontal',
     grabCursor: true,
     loop: true,
     speed: 500,

     // Naigation arrows

     navigation: {
          nextEl: '.swiper-next-but2',
          prevEl: '.swiper-prev-but2',
     },
});

const slideText = document.getElementById('slideText');

swiper2.on('realIndexChange', function (index) {
     // Get current slide index
     //var currentSlideIndex = index.snapIndex;
     var currentSlideIndex = swiper2.realIndex;
     console.log(currentSlideIndex);

     switch (currentSlideIndex) {
          case 0:
               slideText.textContent =
                    'Falcon 9 launches Dragon to the International Space Station from Launch Complex 39A';
               break;
          case 1:
               slideText.textContent =
                    'Falcon 9 first and second stages after separating in flight';
               break;
          case 2:
               slideText.textContent = 'Falcon 9 lifts off with its Iridium-5 payload';
               break;
          case 3:
               slideText.textContent = 'Falcon 9 lands on the droneship Just Read the Instructions';
               break;
          case 4:
               slideText.textContent = "Close-up of Falcon 9's Merlin engines during liftoff";
               break;
          case 5:
               slideText.textContent =
                    'Falcon 9 leaves a trail of light as it lifts off from Vandenberg Air Force Base';
               break;
          default:
     }
});
