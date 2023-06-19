const priceUl = document.querySelector('.priceUl');

function priceClick(event, type) {
     var priceLi = priceUl.querySelectorAll('li');
     const clickedLi = event.currentTarget;

     switch (type) {
          case 0:
               break;
          case 1:
               break;
     }

     priceLi.forEach((li) => {
          /*
          li.style.backgroundColor = 'transparent'
          li.style.boxShadow = 'none'
          li.style.color = '#5c5e62'*/
          li.classList.remove('activePriceLi');
     });
     /*
     clickedLi.style.backgroundColor = '#fff'
     clickedLi.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1);'
     clickedLi.style.color = '#171a20'*/
     clickedLi.classList.add('activePriceLi');
}

/*
const swiper = new Swiper('.myswiper', {
     // Optional parameters
     slidesPerView: 1,
     direction: 'horizontal',
     loop: true,
     speed: 500,

     // Navigation arrows
     navigation: {
          nextEl: '.swiper-next-but',
          prevEl: '.swiper-prev-but',
     },
});*/

const sectionImage = document.querySelector('.section1');
var currentPage = 0;
var currentVideo = 0;
var imageList_first = [];
var videoList = [];
var viewList = ['FRONT34', 'SIDE', 'REAR34', 'RIMCLOSEUP'];

var PLAID_SELECT = 'MTX13'
var PLAID_WHEEL = '0'
var PAINT_SELECT = 'PPSW';
var WHEEL_SELECT = 'WX0';
var INTERIORCOLOR_SELECT = 'IBE00';
var STEER_SELECT = 'ST03';
//MTX13,MTX14
//FRONT34,SIDE,REAR34,RIMCLOSEUP //$ST03&view=INTERIOR
//PPSW,PBSB,PMNG,PPSB,PR01
//WX00,WX20 - WX01,WX21
//IBE00,IWW00,ICW00
//ST03,ST0Y

var baseURL_1 =
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$';
//PPSW,$WX00,$IBE00&view=FRONT34
var baseURL_2 = '&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&';
var image1 =
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PPSW,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&';
var image1_black =
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PBSB,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&';

var image2 =
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PPSW,$WX00,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&';
var image3 =
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PPSW,$WX00,$IBE00&view=REAR34&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&';
var image4 =
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PPSW,$WX00,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&';
var image5 =
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PPSW,$IBE00,$ST03&view=INTERIOR&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&';
var image5_2 =
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX13,$PPSW,$IBE00,$ST0Y&view=INTERIOR&model=mx&size=1920&bkba_opt=2&crop=0,0,0,0&';

var vid1 =
     'https://digitalassets.tesla.com/video/upload/f_auto:video,q_auto:best/prod/coin/static_assets/MODEL3/UI/navigate-on-autopilot.mp4';
var vid2 =
     'https://digitalassets.tesla.com/video/upload/f_auto:video,q_auto:best/prod/coin/static_assets/MODEL3/UI/lane_change.mp4';
var vid3 =
     'https://digitalassets.tesla.com/video/upload/f_auto:video,q_auto:best/prod/coin/static_assets/MODEL3/UI/autopark.mp4';
var vid4 =
     'https://digitalassets.tesla.com/video/upload/f_auto:video,q_auto:best/prod/coin/static_assets/MODEL3/UI/summon_v2.mp4';

videoList.push(vid1);
videoList.push(vid2);
videoList.push(vid3);
videoList.push(vid4);

imageList_first.push(image1);
imageList_first.push(image2);
imageList_first.push(image3);
imageList_first.push(image4);
imageList_first.push(image5);

function refreshImageList() {
     imageList_first = [];

     viewList.forEach(function (view) {
          var final_URL =
               baseURL_1 + PLAID_SELECT+
               ',$'+
               PAINT_SELECT +
               ',$' +
               WHEEL_SELECT +PLAID_WHEEL+
               ',$' +
               INTERIORCOLOR_SELECT +
               '&view=' +
               view +
               baseURL_2;
          imageList_first.push(final_URL);
     });

     var final_URL_INTERIOR =
          baseURL_1 + PLAID_SELECT+
          ',$'+
          PAINT_SELECT +
          ',$' +
          WHEEL_SELECT +PLAID_WHEEL+
          ',$' +
          INTERIORCOLOR_SELECT +
          ',$' +
          STEER_SELECT +
          '&view=INTERIOR' +
          baseURL_2;

     imageList_first.push(final_URL_INTERIOR);

     console.log(imageList_first);
     refreshImage();
}

function refreshImage() {
     if (scrollTopNow > 1450 && scrollTopNow <= 2640) {
          $('#section1').fadeOut(function () {
               $('#section1')
                    .css('background-image', 'url(' + imageList_first[4] + ')')
                    .fadeIn();
          });
          return;
     }

     $('#section1').fadeOut(function () {
          $('#section1')
               .css('background-image', 'url(' + imageList_first[currentPage] + ')')
               .fadeIn();
     });
}

function swipeNext() {
     //sectionImage.style.backgroundImage  = 'url';

     if (scrollTopNow > 2640 && scrollTopNow <= 3550) {
          $('#section1').css('background-image', 'none');

          if (currentVideo == 3) {
               currentVideo = 0;
          } else {
               currentVideo += 1;
          }

          $('#myVideo').fadeOut(function () {
               $('#myVideo').attr('src', videoList[currentVideo]).fadeIn();
          });
     } else {
          if (currentPage == 4) {
               currentPage = 0;
          } else {
               currentPage += 1;
          }

          $('#section1').fadeOut(function () {
               $('#section1')
                    .css('background-image', 'url(' + imageList_first[currentPage] + ')')
                    .fadeIn();
          });
     }
}

function swipePrev() {
     /*
     if (currentPage == 0) {
          currentPage = 4;
     } else {
          currentPage -= 1;
     }

     $('#section1').fadeOut(function () {
          $('#section1')
               .css('background-image', 'url(' + imageList_first[currentPage] + ')')
               .fadeIn();
     });*/

     if (scrollTopNow > 2640 && scrollTopNow <= 3550) {
          $('#section1').css('background-image', 'none');

          if (currentVideo == 0) {
               currentVideo = 3;
          } else {
               currentVideo -= 1;
          }

          $('#myVideo').fadeOut(function () {
               $('#myVideo').attr('src', videoList[currentVideo]).fadeIn();
          });
     } else {
          if (currentPage == 0) {
               currentPage = 4;
          } else {
               currentPage -= 1;
          }

          $('#section1').fadeOut(function () {
               $('#section1')
                    .css('background-image', 'url(' + imageList_first[currentPage] + ')')
                    .fadeIn();
          });
     }
}

function showSwipeBut() {
     $('#prevSwipe').css('opacity', 1);
     $('#nextSwipe').css('opacity', 1);
}

function hideSwipeBut() {
     $('#prevSwipe').css('opacity', 0);
     $('#nextSwipe').css('opacity', 0);
}

const contentSection = document.querySelector('.contentSection');
const myVideo = document.getElementById('myVideo');
var scrollTopNow = 0;
var isScroll = false;
var isScroll_current = true;

contentSection.addEventListener('scroll', function () {
     scrollTopNow = this.scrollTop;

     if (this.scrollTop > 1450 && this.scrollTop <= 2640) {
          if (!isScroll) {
               myVideo.style.opacity = '0';

               $('#section1').fadeOut(function () {
                    $('#section1')
                         .css('background-image', 'url(' + imageList_first[4] + ')')
                         .fadeIn();
               });
               isScroll = true;
               isScroll_current = false;
          }
     } else if (this.scrollTop > 2640 && this.scrollTop <= 3550) {
          //myVideo.style.display = 'flex';
          myVideo.style.opacity = '1';
          isScroll = false;
          isScroll_current = false;
     } else if (this.scrollTop > 3550) {
          myVideo.style.opacity = '0';
          $('#section1')
               .css('background-image', 'url(' + imageList_first[currentPage] + ')')
               .fadeIn();

          isScroll = false;
          isScroll_current = true;
     } else {
          //myVideo.style.display = 'none';
          myVideo.style.opacity = '0';

          if (!isScroll_current) {
               $('#section1').fadeOut(function () {
                    $('#section1')
                         .css('background-image', 'url(' + imageList_first[currentPage] + ')')
                         .fadeIn();
               });
               isScroll = false;
               isScroll_current = true;
          }
     }

     console.log(scrollTopNow);
});

function motorClick(motorOption) {
     const motorDiv1 = document.getElementById('motorDiv1');
     const motorDiv2 = document.getElementById('motorDiv2');
     const stat1_h2 = document.getElementById('stat1_h2');
     const stat2_h2 = document.getElementById('stat2_h2');
     const stat3_h2 = document.getElementById('stat3_h2');

     if (motorOption == 0) {
          motorDiv1.classList.add('activeMotor');
          motorDiv2.classList.remove('activeMotor');

          setState0(stat1_h2, 333, 348, false);
          setState0(stat3_h2, 2.5, 3.8, true);

          PLAID_SELECT = 'MTX13'
          PLAID_WHEEL = '0'
     } else {
          motorDiv2.classList.add('activeMotor');
          motorDiv1.classList.remove('activeMotor');

          setState(stat1_h2, 348, 333, false);
          //setState(stat2_h2,155,163);
          setState(stat3_h2, 3.8, 2.5, true);

          PLAID_SELECT = 'MTX14'
          PLAID_WHEEL = '1'
     }

     refreshImageList();

}

function setState0(element, fromCount, toCount, hasRemainder) {
     if (hasRemainder) {
          setInterval(function () {
               /*
               if (count <= 217) {
                    statH2_1.textContent = count;
                    if (count <= 175) {
                         statH2_2.textContent = count;
                         if (count <= 152) {
                              statH2_3.textContent = count;
                         }
                    }
               }*/
               if (fromCount <= toCount) {
                    fromCount += 0.1;
                    element.textContent = fromCount.toFixed(1);
               }
          }, 25);
     } else {
          setInterval(function () {
               if (fromCount < toCount) {
                    fromCount += 1;
                    element.textContent = fromCount;
               }
          }, 25);
     }
}

function setState(element, fromCount, toCount, hasRemainder) {
     if (hasRemainder) {
          setInterval(function () {
               /*
               if (count <= 217) {
                    statH2_1.textContent = count;
                    if (count <= 175) {
                         statH2_2.textContent = count;
                         if (count <= 152) {
                              statH2_3.textContent = count;
                         }
                    }
               }*/
               if (fromCount >= toCount) {
                    fromCount -= 0.1;
                    element.textContent = fromCount.toFixed(1);
               }
          }, 25);
     } else {
          setInterval(function () {
               if (fromCount > toCount) {
                    fromCount -= 1;
                    element.textContent = fromCount;
               }
          }, 25);
     }
}


function paintClick(event, option) {
     const paintImgDiv = document.getElementById('paintImgDiv');
     var paintImgs = paintImgDiv.querySelectorAll('img');
     const clickedPaint = event.currentTarget;

     PAINT_SELECT = option;

     paintImgs.forEach((img) => {
          img.classList.remove('activePaint');
     });

     clickedPaint.classList.add('activePaint');

     refreshImageList();
}

function wheelClick(event, option) {
     const wheelImgDiv = document.getElementById('wheelDiv');
     var wheelImgs = wheelImgDiv.querySelectorAll('img');
     const clickedWheel = event.currentTarget;

     WHEEL_SELECT = option;

     wheelImgs.forEach((img) => {
          img.classList.remove('activeWheel');
     });

     clickedWheel.classList.add('activeWheel');

     refreshImageList();
}

function interiorClick(event, option) {
     const interiorImgDiv = document.getElementById('interiorDiv');
     var interiorImgs = interiorImgDiv.querySelectorAll('img');
     const clickedinterior = event.currentTarget;

     INTERIORCOLOR_SELECT = option;

     interiorImgs.forEach((img) => {
          img.classList.remove('activePaint');
     });

     clickedinterior.classList.add('activePaint');

     refreshImageList();
}

function seatClick(event) {
     const seatImgDiv = document.getElementById('seatDiv');
     var seatImgs = seatImgDiv.querySelectorAll('div');
     const clickedseat = event.currentTarget;

     seatImgs.forEach((div) => {
          //var seatSpan = div.querySelector('span')
          div.classList.remove('activeSeat');
     });
     //var seatSpan = clickedseat.querySelector('span')
     clickedseat.classList.add('activeSeat');
}

function steerClick(event, option) {
     const steerDiv = document.getElementById('steerDiv');
     var steerImgs = steerDiv.querySelectorAll('img');
     const clickedsteer = event.currentTarget;

     STEER_SELECT = option;

     steerImgs.forEach((img) => {
          img.classList.remove('activePaint');
     });
     //var seatSpan = clickedseat.querySelector('span')
     clickedsteer.classList.add('activePaint');

     refreshImageList();
}
