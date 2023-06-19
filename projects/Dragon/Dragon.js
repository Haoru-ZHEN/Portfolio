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
//https://www.spacex.com/static/images/dragon/desktop/SuperDraco.jpg

const swiper = new Swiper('.myswiper', {
     // Optional parameters
     slidesPerView: 1,
     direction: 'horizontal',
     grabCursor: true,
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
var isSetState = false;


function setState() {
     const statH2_1 = document.getElementById('statH2_1');
     const statH2_2 = document.getElementById('statH2_2');
     const statH2_3 = document.getElementById('statH2_3');
     var count = 0;

     setInterval(function () {
          if (count <= 41) {
               statH2_1.textContent = count;
               if (count <= 36) {
                    statH2_2.textContent = count;
                    if (count <= 18) {
                         statH2_3.textContent = count;
                    }
               }
          }

          count++;
     }, 20);
}

var img_section1_deg =0;
var prevScrollPos = window.pageYOffset;
const img_section1 = this.document.getElementById('img_section1');
img_section1.style.transform = 'rotate(0deg)';

window.addEventListener('scroll', function () {
     const img_section1 = this.document.getElementById('img_section1');
     const section3 = this.document.querySelector('.section3');
     //const myswiper = this.document.querySelector('.myswiper');
     const lowerSection = this.document.querySelector('.lowerSection');

     console.log(window.scrollY);
     //didScroll = true;

     var currentScrollPos = window.scrollY;
     var img0Degree_perScroll = 7.5 / 365;

     
     if(window.scrollY <= 565){
          var transformValue = img_section1.style.transform;
          var rotateValue = transformValue.match(/rotate\((.*?)\)/);
          var degree = parseFloat(rotateValue[1]);
          
          if (prevScrollPos > currentScrollPos) {
               // Scrolling up
               
               if (degree >= 0) {
                    if(this.window.scrollY <= 30){
                         img_section1.style.transform = 'rotate(0deg)';
                    }
                    img_section1_deg = img_section1_deg - img0Degree_perScroll*3;

                    img_section1.style.transform = 'rotate(' + img_section1_deg + 'deg)';

               }
          } else {
               // Scrolling down
               if (degree <= 8) {
                    img_section1_deg = img_section1_deg + img0Degree_perScroll*3;

                    img_section1.style.transform = 'rotate(' + img_section1_deg + 'deg)';
               }

          }
     }

     if (this.window.scrollY >= 110 && window.scrollY <= 1020) {
          if (!isSetState) {
               setState();
               isSetState = true;
          }
     } else {
          isSetState = false;
     }

     if(window.scrollY <= 1074){
          section3.style.position = 'absolute';
          section3.style.transform = 'translateY(0px)';

     }else if (window.scrollY > 1074 && window.scrollY <= 1074+754) {
          section3.style.position = 'fixed';
          section3.style.transform = 'translateY(-1074px)';
          lowerSection.style.opacity = 0;

     }else if (window.scrollY > 1074+754 && window.scrollY <= 1074+754*2) {
          section3.style.position = 'fixed';
          section3.style.transform = 'translateY(-1074px)';
          lowerSection.style.opacity = 1;
     }else if(window.scrollY > 1074+754*2){
          section3.style.position = 'absolute';
          section3.style.transform = 'translateY(1508px)';
          lowerSection.style.opacity = 1;

     }

     if (swiper.realIndex != 0) {
          // Enable scrolling after 5 seconds
          setTimeout(function () {
               $('body').css('overflow', 'auto');
               $('body').css('overflow-x', 'hidden');
          }, 800);
          $('body').css('overflow', 'hidden');
          swiper.slideTo(0);
     }
     /*
     if (prevScrollPos > currentScrollPos) {
          // Scrolling up
          if (swiper.realIndex != 0) {
               // Enable scrolling after 5 seconds
               setTimeout(function () {
                    $('body').css('overflow', 'auto');
                    $('body').css('overflow-x', 'hidden');
               }, 800);
               $('body').css('overflow', 'hidden');
               swiper.slideTo(0);
          }
     } else {
          // Scrolling down

     }*/

     
     prevScrollPos = currentScrollPos;
});


function capsuleSwitch(num,event){
     const section3 = document.querySelector('.section3');
     const slide3 = section3.querySelector('.slide3');
     const table_slide3 = slide3.querySelector('table');
     const switchDiv = section3.querySelector('.switchDiv');
     const switchH3All = switchDiv.querySelectorAll('h3');
     const activeCapsuleSwitch = event.target;
     const capsuleP = document.getElementById('capsuleP');
 
     const new_tbody = document.createElement('tbody');
     switch(num){
          case 0:
               slide3.style.backgroundImage = 'url(https://www.spacex.com/static/images/dragon/desktop/Dragon_Render_Desktop.jpg)'
               capsuleP.textContent = 'The Dragon capsule, also known as the pressurized section, allows for the transport of people as well as environmentally sensitive cargo. Dragon is equipped with Draco thrusters that allow Dragon to maneuver while on orbit and 8 SuperDracos that power the spacecraft’s launch escape system.'

               new_tbody.innerHTML=`<tr>
                    <td>VOLUME</td>
                    <td>9.3 m³ <span>/ 328 ft³</span></td>
               </tr>`
               break;
          case 1:
               slide3.style.backgroundImage = 'url(https://www.spacex.com/static/images/dragon/desktop/DragonEscape_Desktop.jpg)'
               capsuleP.textContent = 'The launch abort system is a crew safety system built into the Dragon spacecraft, used to quickly separate Dragon from Falcon 9 in the unlikely event of an emergency. In the unlikely event of an emergency, Dragon’s launch abort system can quickly separate the spacecraft from Falcon 9. Using its SuperDraco engines, Dragon will propel itself away from the launch vehicle.'

               new_tbody.innerHTML = `<tr>
                    <td>NUMBER OF ENGINES</td>
                    <td>8</td>
               </tr>
               <tr>
                    <td>ESCAPE THRUST</td>
                    <td>71 kN <span>/ 16,000 lbf</span></td>
               </tr>`
               break;
          case 2:
               slide3.style.backgroundImage = 'url(https://www.spacex.com/static/images/dragon/desktop/DragonDraco_Desktop.jpg)'
               capsuleP.textContent = 'The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.'
               
               new_tbody.innerHTML = `<tr>
                    <td>NUMBER OF ENGINES</td>
                    <td>16</td>
               </tr>
               <tr>
                    <td>THRUST IN VACUUM</td>
                    <td>400N <span>/ 90 lbf</span></td>
               </tr>`
               break;
     }

     switchH3All.forEach((h3) => {
          h3.classList.remove('activeSwitch');
     });

     activeCapsuleSwitch.classList.add('activeSwitch');

     var old_tbody = table_slide3.getElementsByTagName('tbody')[0];
     table_slide3.removeChild(old_tbody);
     table_slide3.appendChild(new_tbody);
}


function engineSwitch(num,event){
     const section6 = document.querySelector('.section6');
     const table_section6 = section6.querySelector('table');
     const switchDiv = section6.querySelector('.switchDiv');
     const switchH3All = switchDiv.querySelectorAll('h3');
     const activeEngineSwitch = event.target;
     const engineP = document.getElementById('engineP');
 
     const new_tbody = document.createElement('tbody');
     switch(num){
          case 0:
               section6.style.backgroundImage = 'url(https://www.spacex.com/static/images/dragon/desktop/Draco.jpg)'
               engineP.textContent = 'The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.'

               new_tbody.innerHTML=`<tr>
                    <td>NUMBER OF ENGINES</td>
                    <td>16</td>
               </tr>
               <tr>
                    <td>THRUST IN VACUUM</td>
                    <td>400 N <span>/ 90 lbf</span></td>
               </tr>`
               break;
          case 1:
               section6.style.backgroundImage = 'url(https://www.spacex.com/static/images/dragon/desktop/SuperDraco.jpg)'
               engineP.textContent = 'An array of eight SuperDraco engines provide fault-tolerant propulsion for Dragon’s launch escape system. In the unlikely event of an emergency, the eight SuperDraco engines can power Dragon half a mile away from the launch vehicle in less than eight seconds.'

               new_tbody.innerHTML = `<tr>
                    <td>NUMBER OF ENGINES</td>
                    <td>8</td>
               </tr>
               <tr>
                    <td>ESCAPE THRUST</td>
                    <td>73 kN <span>/ 16,400 lbf</span></td>
               </tr>`
               break;
     }

     switchH3All.forEach((h3) => {
          h3.classList.remove('activeSwitch');
     });

     activeEngineSwitch.classList.add('activeSwitch');

     var old_tbody = table_section6.getElementsByTagName('tbody')[0];
     table_section6.removeChild(old_tbody);
     table_section6.appendChild(new_tbody);
}



const slideText = document.getElementById('slideText');

swiper2.on('realIndexChange', function (index) {
     // Get current slide index
     //var currentSlideIndex = index.snapIndex;
     var currentSlideIndex = swiper2.realIndex;
     console.log(currentSlideIndex);

     switch (currentSlideIndex) {
          case 0:
               slideText.textContent =
                    'Dragon on pad at Launch Complex 39A';
               break;
          case 1:
               slideText.textContent =
                    'Dragon and Falcon 9 ready for launch at Launch Complex 39A';
               break;
          case 2:
               slideText.textContent = 'Dragon approaching the International Space Station';
               break;
          case 3:
               slideText.textContent = 'CRS-22 approaching the International Space Station';
               break;
          case 4:
               slideText.textContent = "Dragon is seen against the Earth's atmosphere";
               break;
          default:
     }
});
