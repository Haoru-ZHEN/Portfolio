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

const swiper = new Swiper('.myswiper', {
     // Optional parameters
     slidesPerView: 1.9,
     spaceBetween: 15,
     centeredSlides: true,
     direction: 'horizontal',
     grabCursor: true,
     loop: true,
     speed: 500,

     // Naigation arrows
     pagination: {
          el: '.swiper-pagination',
          clickable: true,
     },

     navigation: {
          nextEl: '.swiper-next-but',
          prevEl: '.swiper-prev-but',
     },
});

const swiper2 = new Swiper('.myswiper2', {
     // Optional parameters
     slidesPerView: 3.4,
     spaceBetween: 10,
     centeredSlides: true,
     direction: 'horizontal',
     grabCursor: true,
     loop: true,
     speed: 500,

     // Naigation arrows
     pagination: {
          el: '.swiper-pagination2',
          clickable: true,
     },

     navigation: {
          nextEl: '.swiper-next-but2',
          prevEl: '.swiper-prev-but2',
     },
});

function showsuit(num, event) {
     const clickedLi = event.currentTarget;
     var theTextDiv = document.querySelector(`.textDiv${num + 1}`);
     const alltextdiv = document.querySelectorAll('.suitTextDiv');
     const svgNew = document.querySelector('.svg-new');
     const allg = svgNew.querySelectorAll('g');

     alltextdiv.forEach((div) => {
          div.style.opacity = 0;
     });

     allg.forEach((g) => {
          g.classList.remove('is-active');
     });

     clickedLi.classList.add('is-active');

     theTextDiv.style.opacity = 1;
}

function missionchange(num, event) {
     const table2 = document.getElementById('table2');
     const missionUl = document.querySelector('.missionUl');
     const missionli_all = missionUl.querySelectorAll('li');
     const clickedLi = event.currentTarget;
     const missionh3 = document.querySelector('.missionh3');

     missionli_all.forEach((li) => {
          li.classList.remove('activeLi');
     });
     clickedLi.classList.add('activeLi');

     const new_tbody = document.createElement('tbody');
     
     switch (num) {
          case 0:
               new_tbody.innerHTML=`<tr>
               <td>ORBIT FREQUENCY</td>
               <td>Every 90 minutes</td>
               </tr>
               <tr>
                    <td>MISSION DURATION</td>
                    <td>3 - 6 days</td>
               </tr>
               <tr>
                    <td>ALTITUDE</td>
                    <td>300 – 500 km</td>
               </tr>
               <tr>
                    <td>SEATING</td>
                    <td>2 - 4 passengers</td>
               </tr>
               <tr>
                    <td>CUPOLA</td>
                    <td>46” diameter / 360° views</td>
               </tr>
               <tr>
                    <td>CARGO / SCIENCE</td>
                    <td>Up to 192 kg cargo<br>Power / Data / Comm available</td>
               </tr>`
               missionh3.textContent = 'Missions available for 2023 and 2024';
               break;
          case 1:
               new_tbody.innerHTML=`
               <tr>
                    <td>ORBIT FREQUENCY</td>
                    <td>Every 90 minutes</td>
               </tr>
               <tr>
                    <td>MISSION DURATION</td>
                    <td>10 days</td>
               </tr>
               <tr>
                    <td>ALTITUDE</td>
                    <td>~400 km</td>
               </tr>
               <tr>
                    <td>SEATING</td>
                    <td>4 passengers</td>
               </tr>
               <tr>
                    <td>CARGO / SCIENCE</td>
                    <td>Up to 192 kg cargo<br>Power / Data / Comm available</td>
               </tr>`
               missionh3.textContent = 'To inquire on mission availability, click Join a Mission below';
               break;
          case 2:
               new_tbody.innerHTML=`
               <tr>
                    <td>MISSION DURATION</td>
                    <td>7 days</td>
               </tr>
               <tr>
                    <td>ALTITUDE</td>
                    <td>384,400 km from Earth</td>
               </tr>
               <tr>
                    <td>SEATING</td>
                    <td>Up to 12 passengers, with private quarters</td>
               </tr>
               <tr>
                    <td>VOLUME</td>
                    <td>1,000 m3<br>Nosecone area available for entertainment, manufacturing,<br>and scientific opportunities</td>
               </tr>`
               missionh3.textContent = 'Single seat and missions available to the Moon’s orbit';
               break;
          case 3:
               new_tbody.innerHTML=`
               <tr>
                    <td>DAY LENGTH</td>
                    <td>24 hrs 37 min</td>
               </tr>
               <tr>
                    <td>FORCE OF GRAVITY</td>
                    <td>38% of Earth</td>
               </tr>
               <tr>
                    <td>AVG DISTANCE FROM EARTH</td>
                    <td>225 Mkm / 140 Mmi</td>
               </tr>`
               missionh3.textContent = 'To inquire on mission availability, click Join a Mission below';
               break;
     }
     var old_tbody = table2.getElementsByTagName('tbody')[0];

     table2.removeChild(old_tbody);
     table2.appendChild(new_tbody);
}

var img2Degree = 20;
var img0Degree =20;
var img1Degree =40;
var img3Degree =0;

var prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function () {
     //console.log(window.scrollY);
     /*const orbitDiv = this.document.querySelector('.orbitDiv');
     const orbitDiv2 = this.document.querySelector('.orbitDiv2');
     const orbitDiv3 = this.document.querySelector('.orbitDiv3');*/


     const img0 = this.document.querySelector('.img0');
     const station0 = img0.querySelector('img');

     const img1 = this.document.querySelector('.img1');
     const dragon1 = img0.querySelector('img');

     const img2 = this.document.querySelector('.img2');
     const moon_2 = img2.querySelector('img');
     const img3 = document.querySelector('.img3');
     const mars3 = img3.querySelector('img');

     const section8 = this.document.querySelector('.section8');
     const img_section8 = section8.querySelector('img');

     img2Degree_perScroll = 100 / (1558 - 1010);
     img0Degree_perScroll = 100 / (1558 - 1010);
     var currentScrollPos = window.scrollY;

     if (window.scrollY < 1019) {
          img2.style.transform = 'rotate(60deg)';
          moon_2.style.transform = 'rotate(-60deg)';

          img0.style.transform = 'rotate(20deg)';
          station0.style.transform = 'rotate(-20deg) translateX(-150px)';

          img1.style.transform = 'rotate(40deg)';
          dragon1.style.transform = 'translateX(-150px) rotate(-40deg) ';

          img3.style.transform = 'rotate(0deg)';
          mars3.style.transform = 'translateX(100px) rotate(0deg) ';
          //section 8
          section8.style.opacity = 0.2;
          img_section8.style.transform = 'scale(1)';
     } else if (window.scrollY >= 1019 && window.scrollY < 1700) {
          var transformValue = img2.style.transform;
          var rotateValue = transformValue.match(/rotate\((.*?)\)/);
          //console.log('Rotation degree:', rotateValue);

          var isScrollDown = false;

          var degree = parseFloat(rotateValue[1]);
          if (prevScrollPos > currentScrollPos) {
               // Scrolling up
               if (degree >= 25) {
                    //img2Degree = img2Degree - img2Degree_perScroll;
                    //img0Degree = img0Degree + img0Degree_perScroll;

                    //img2.style.transform = 'rotate(' + img2Degree + 'deg)';
                    //moon_2.style.transform = 'rotate(-' + img2Degree + 'deg) translateY(260px)';
                    //img2.style.transform = 'rotate(20deg)';
                    //moon_2.style.transform = 'rotate(-20deg) translateY(70px)';
                    //img0.style.transform = 'rotate(' + img0Degree + 'deg)';
                    //station0.style.transform = 'rotate(-' + img0Degree + 'deg) translatex(-150px)';
               }

               isScrollDown = false;
          } else {
               if (degree <= 40) {
                    // Scrolling down
                    //img2Degree = img2Degree + img2Degree_perScroll;
                    //img0Degree = img0Degree + img0Degree_perScroll;

                    //img2.style.transform = 'rotate(35deg)';
                    //moon_2.style.transform = 'rotate(-35deg) translateY(70px)';
                    //img2.style.transform = 'rotate(' + img2Degree + 'deg)';
                    //moon_2.style.transform = 'rotate(' + img2Degree * -1 + 'deg) translateY(260px)';

                    //img0.style.transform = 'rotate(' + img0Degree + 'deg)';
                    //station0.style.transform = 'rotate(-' + img0Degree + 'deg) translatex(-150px)';
               }

               isScrollDown = true;
          }

          orbit_station(window.scrollY,isScrollDown)
          orbit_dragon(window.scrollY,isScrollDown)
          orbit_moon(window.scrollY,isScrollDown)
          orbit_mars(window.scrollY,isScrollDown)


          //section8
          section8.style.opacity = 0.2;
          img_section8.style.transform = 'scale(1)';

     } else if (window.scrollY >= 1700 && window.scrollY < 5471) {
          section8.style.opacity = 0.2;
          img_section8.style.transform = 'scale(1)';

     } else if (window.scrollY >= 5471 && window.scrollY < 5900) {
          section8.style.opacity = 1;
          img_section8.style.transform = 'scale(1.2)';
     }

     prevScrollPos = currentScrollPos;
});

function orbit_station(scrollingY,scrolldown){
     const img0 = document.querySelector('.img0');
     const station0 = img0.querySelector('img');

     img0Degree_perScroll = 1;

     var transformValue = img0.style.transform;
     var rotateValue = transformValue.match(/rotate\((.*?)\)/);
     console.log(transformValue)

     var degree = parseFloat(rotateValue[1]);

     if(!scrolldown){
          if (degree >= 20) {
               img0Degree = img0Degree - img0Degree_perScroll;

               img0.style.transform = 'rotate(' + img0Degree + 'deg)';
               station0.style.transform = 'rotate(-' + img0Degree + 'deg) translateX(-150px)';
               console.log('up')
          }
     }else{
          if (degree <= 80) {
               // Scrolling down

               img0Degree = img0Degree + img0Degree_perScroll;
               console.log(img0Degree)

     
               img0.style.transform = 'rotate('+img0Degree+'deg)';
               station0.style.transform = 'rotate(-' + img0Degree + 'deg) translateX(-150px)';
          }
     }
     
}

function orbit_dragon(scrollingY,scrolldown){
     const img1 = document.querySelector('.img1');
     const dragon1 = img1.querySelector('img');

     var img0Degree_perScroll = 1;

     var transformValue = img1.style.transform;
     var rotateValue = transformValue.match(/rotate\((.*?)\)/);
     console.log(transformValue)

     var degree = parseFloat(rotateValue[1]);

     if(!scrolldown){
          if (degree >= 40) {
               img1Degree = img1Degree - img0Degree_perScroll;

               img1.style.transform = 'rotate(' + img1Degree + 'deg)';
               dragon1.style.transform = 'rotate(-' + img1Degree + 'deg) translateX(-150px)';
               //console.log('up')
          }
     }else{
          if (degree <= 80) {
               // Scrolling down

               img1Degree = img1Degree + img0Degree_perScroll;
               //console.log(img0Degree)

     
               img1.style.transform = 'rotate('+img1Degree+'deg)';
               dragon1.style.transform = 'rotate(-' + img1Degree + 'deg) translateX(-150px)';
          }
     }
     
}

function orbit_moon(scrollingY,scrolldown){
     const img2 = document.querySelector('.img2');
     const moon2 = img2.querySelector('img');

     var img0Degree_perScroll = 1;

     var transformValue = img2.style.transform;
     var rotateValue = transformValue.match(/rotate\((.*?)\)/);
     console.log(transformValue)

     var degree = parseFloat(rotateValue[1]);

     if(!scrolldown){
          if (degree >= 40) {
               img2Degree = img2Degree - img0Degree_perScroll;

               img2.style.transform = 'rotate(' + img2Degree + 'deg)';
               moon2.style.transform = 'rotate(-' + img2Degree + 'deg)';
          }
     }else{
          if (degree <= 60) {
               // Scrolling down

               img2Degree = img2Degree + img0Degree_perScroll;
     
               img2.style.transform = 'rotate('+img2Degree+'deg)';
               moon2.style.transform = 'rotate(-' + img2Degree + 'deg)';
          }
     }
     
}

function orbit_mars(scrollingY,scrolldown){
     const img3 = document.querySelector('.img3');
     const mars3 = img3.querySelector('img');

     var img0Degree_perScroll = 1;

     var transformValue = img3.style.transform;
     var rotateValue = transformValue.match(/rotate\((.*?)\)/);
     console.log(transformValue)

     var degree = parseFloat(rotateValue[1]);

     if(!scrolldown){
          if (degree >= 40) {
               img3Degree = img3Degree - img0Degree_perScroll;

               img3.style.transform = 'rotate(' + img3Degree + 'deg)';
               mars3.style.transform = 'rotate(-' + img3Degree + 'deg) translateX(100px)';
               //console.log('up')
          }
     }else{
          if (degree <= 80) {
               // Scrolling down

               img3Degree = img3Degree + img0Degree_perScroll;
               //console.log(img0Degree)

     
               img3.style.transform = 'rotate('+img3Degree+'deg)';
               mars3.style.transform = 'rotate(-' + img3Degree + 'deg) translateX(100px)';
          }
     }
     
}

/*
     if (prevScrollPos > currentScrollPos) {
          // Scrolling up
          console.log('Scrolling up');
     } else {
          // Scrolling down
          console.log('Scrolling down');
     }*/
