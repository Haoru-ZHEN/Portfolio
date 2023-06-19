function moveBox(event) {
     var box = document.querySelector('.box');
     box.style.display = 'inline-block';
     box.style.left = '0';

     var link = event.target;
     var linkRect = link.getBoundingClientRect();
     var linkCenterX = linkRect.left + linkRect.width / 2;
     var boxWidth = box.offsetWidth;
     var boxHeight = box.offsetHeight;
     var boxX = linkCenterX - boxWidth / 2;
     var boxY = linkRect.bottom;
     //box.style.transform = 'translate(' + boxX + 'px, ' + boxY + 'px)';
     box.style.transform = 'translateX(' + boxX + 'px)';
}

function dotClick(num) {
     const dotSpan1 = document.getElementById('dotSpan1');
     const dotSpan2 = document.getElementById('dotSpan2');
     const dotSpan3 = document.getElementById('dotSpan3');
     const dotSpan4 = document.getElementById('dotSpan4');
     const dotSpan5 = document.getElementById('dotSpan5');

     const video3 = document.getElementById('video3');
     const h2_section3 = document.getElementById('h2_section3');
     const h3_section3 = document.getElementById('h3_section3');

     switch (num) {
          case 1:
               dotSpan1.classList.add('activeSpan');
               dotSpan2.classList.remove('activeSpan');
               dotSpan3.classList.remove('activeSpan');
               dotSpan4.classList.remove('activeSpan');
               dotSpan5.classList.remove('activeSpan');

               video3.src =
                    'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4';
               h2_section3.textContent = 'Cinematic Experience';
               h3_section3.textContent =
                    'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.';
               break;
          case 2:
               dotSpan1.classList.remove('activeSpan');
               dotSpan2.classList.add('activeSpan');
               dotSpan3.classList.remove('activeSpan');
               dotSpan4.classList.remove('activeSpan');
               dotSpan5.classList.remove('activeSpan');

               video3.src =
                    'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Carousel-2-Yoke-Desktop.mp4';
               h2_section3.textContent = 'Yoke Steering';
               h3_section3.textContent =
                    'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.';

               break;
          case 3:
               dotSpan1.classList.remove('activeSpan');
               dotSpan2.classList.remove('activeSpan');
               dotSpan3.classList.add('activeSpan');
               dotSpan4.classList.remove('activeSpan');
               dotSpan5.classList.remove('activeSpan');

               video3.src =
                    'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-3-Perfect-Environment-Desktop.mp4';
               h2_section3.textContent = 'Perfect Environment';
               h3_section3.textContent =
                    'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.';

               break;
          case 4:
               dotSpan1.classList.remove('activeSpan');
               dotSpan2.classList.remove('activeSpan');
               dotSpan3.classList.remove('activeSpan');
               dotSpan4.classList.add('activeSpan');
               dotSpan5.classList.remove('activeSpan');

               video3.src =
                    'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-4-Second-Row-Desktop.mp4';
               h2_section3.textContent = 'Redesigned Second Row';
               h3_section3.textContent =
                    'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.';

               break;
          case 5:
               dotSpan1.classList.remove('activeSpan');
               dotSpan2.classList.remove('activeSpan');
               dotSpan3.classList.remove('activeSpan');
               dotSpan4.classList.remove('activeSpan');
               dotSpan5.classList.add('activeSpan');

               video3.src =
                    'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Carousel-5-Gaming-Mobile.mp4';
               h2_section3.textContent = 'Console-Grade Gaming';
               h3_section3.textContent =
                    'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.';

               break;
     }
}

function plaidClick(type) {
     const nonplaidDiv = document.getElementById('nonplaidDiv');
     const plaidDiv = document.getElementById('plaidDiv');
     const lineDiv_np = nonplaidDiv.querySelector('.lineSpan');
     const lineDiv_P = plaidDiv.querySelector('.lineSpan');
     const img_section6 = document.getElementById('img_section6');

     if (type == 1) {
          img_section6.src =
               'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Dual-Motor-Powertrain-Carousel-Desktop';
          lineDiv_np.style.height = '4px';
          nonplaidDiv.style.opacity = '1';

          lineDiv_P.style.height = '2px';
          plaidDiv.style.opacity = '0.3';
     } else {
          img_section6.src =
               'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Plaid-Tri-Motor-Powertrain-Carousel-Desktop';
          lineDiv_P.style.height = '4px';
          plaidDiv.style.opacity = '1';

          lineDiv_np.style.height = '2px';
          nonplaidDiv.style.opacity = '0.3';
     }
}

var count = 587;
function drawMap() {
     const svg1 = document.getElementById('svg1');
     const svg2 = document.getElementById('svg2');
     const svg3 = document.getElementById('svg3');
     const svg4 = document.getElementById('svg4');
     const path1 = svg1.querySelector('path');
     const path2 = svg2.querySelector('path');
     const path3 = svg3.querySelector('path');
     const path4 = svg4.querySelector('path');

     path1.style.strokeDashoffset = count;
     path2.style.strokeDashoffset = count;
     path3.style.strokeDashoffset = count;
     path4.style.strokeDashoffset = count;

     //count -= 1;

     if (count >= 0) {
          count -= 1;
          console.log('TEST');
     }

     /*
     while(count >=0){
          count -=1;
          path1.style.strokeDashoffset = count;
     }*/
}

//setInterval(drawMap, 1);

function mapClick(event, whichMap) {
     const mapDiv = document.querySelector('.mapDiv');
     const clickedDiv = event.currentTarget;
     //var mapSingle = mapDiv.querySelectorAll(":nth-child(0)");
     var mapAll = mapDiv.querySelectorAll('div');
     var mapSpan = clickedDiv.querySelector('span');
     const imgMap = document.getElementById('imgMap');
     const svg1 = document.getElementById('svg1');
     const svg2 = document.getElementById('svg2');
     const svg3 = document.getElementById('svg3');
     const svg4 = document.getElementById('svg4');
     const path1 = svg1.querySelector('path');
     const path2 = svg2.querySelector('path');
     const path3 = svg3.querySelector('path');
     const path4 = svg4.querySelector('path');
     const g1 = svg1.querySelector('g1');
     const g2 = svg2.querySelector('g2');
     const g3 = svg3.querySelector('g3');
     const g4 = svg4.querySelector('g4');

     path1.style.strokeDashoffset = 587;
     path2.style.strokeDashoffset = 711;
     path3.style.strokeDashoffset = 794;
     path4.style.strokeDashoffset = 522;

     clearInterval(internal);

     switch (whichMap) {
          case 0:
               /*
               //mapAll.style.opacity = 0.4;
               mapAll.forEach((div) => {
                    div.style.opacity = 0.4; // Set the desired opacity value
               });
               clickedDiv.style.opacity = 1;
               mapSpan.style.height = '4px';*/
               svg1.style.opacity = 1;
               svg2.style.opacity = 0;
               svg3.style.opacity = 0;
               svg4.style.opacity = 0;
               count = 587; /*
               var internal = setInterval(function () {
                    if (count >= 0) {
                         count -= 1;
                         console.log('TEST');
                    }
                    path1.style.strokeDashoffset = count;
               }, 1);*/

               imgMap.src =
                    'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1124,w_2450,c_fit,f_auto,q_auto:best/SF-LA_Range-Map';
               break;
          case 1:
               svg1.style.opacity = 0;
               svg2.style.opacity = 1;
               svg3.style.opacity = 0;
               svg4.style.opacity = 0;
               count = 711;
               //setInterval(drawMap, 1);
               /*
               var internal = setInterval(function () {
                    if (count >= 0) {
                         count -= 1;
                         console.log('TEST');
                    }
                    path2.style.strokeDashoffset = count;
               }, 1);*/

               imgMap.src =
                    'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1124,w_2450,c_fit,f_auto,q_auto:best/map_berkeley_bg%402x';
               break;
          case 2:
               svg1.style.opacity = 0;
               svg2.style.opacity = 0;
               svg3.style.opacity = 1;
               svg4.style.opacity = 0;
               count = 794;
               imgMap.src =
                    'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1124,w_2450,c_fit,f_auto,q_auto:best/map_newyork_bg%402x';
               break;
          case 3:
               svg1.style.opacity = 0;
               svg2.style.opacity = 0;
               svg3.style.opacity = 0;
               svg4.style.opacity = 1;
               count = 522;
               imgMap.src =
                    'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1124,w_2450,c_fit,f_auto,q_auto:best/map_florida_bg%402x';
               break;
     }

     var internal = setInterval(function () {
          if (count >= 0) {
               count -= 1;
               console.log('TEST');
          }
          path1.style.strokeDashoffset = count;
          path2.style.strokeDashoffset = count;
          path3.style.strokeDashoffset = count;
          path4.style.strokeDashoffset = count;
     }, 1);

     mapAll.forEach((div) => {
          div.style.opacity = 0.4; // Set the desired opacity value
          var mapSpanAll = div.querySelector('span');
          mapSpanAll.style.height = '2px';
     });
     clickedDiv.style.opacity = 1;
     mapSpan.style.height = '4px';
}

function feaClick(event, whichFea) {
     const feaDiv = document.querySelector('.feaDiv');
     const clickedDiv = event.currentTarget;
     var feaAll = feaDiv.querySelectorAll('div');
     var feaSpan = clickedDiv.querySelector('span');
     const videoFea = document.getElementById('video_13');

     switch (whichFea) {
          case 0:
               videoFea.src = 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model_S_Navigate_0-mp4.mp4';
               break;
          case 1:
               videoFea.src = 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/lane_change_0-mp4.mp4'
               break;
          case 2:
               videoFea.src = 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/summon_1-mp4.mp4'
               break;
          case 3:
               videoFea.src = 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/parking-mp4.mp4'
               break;
     }

     feaAll.forEach((div) => {
          div.style.opacity = 0.4; // Set the desired opacity value
          var feaSpanAll = div.querySelector('span');
          feaSpanAll.style.height = '2px';
     });
     clickedDiv.style.opacity = 1;
     feaSpan.style.height = '4px';
}

function changeModel(type) {
     const modelBut1 = document.getElementById('modelBut1');
     const modelBut2 = document.getElementById('modelBut2');

     const htext1 = document.getElementById('htext1');
     const spantext2 = document.getElementById('spantext2');
     const h3text2 = document.getElementById('h3text2');
     const htext2 = document.getElementById('htext2');
     const htext3 = document.getElementById('htext3');
     const htext4 = document.getElementById('htext4');
     const htext5 = document.getElementById('htext5');
     const htext6 = document.getElementById('htext6');
     const htext7 = document.getElementById('htext7');

     const accModel1 = document.getElementById('accModel1');
     const accModel2 = document.getElementById('accModel2');
     const weightModel1 = document.getElementById('weightModel1');
     const weightModel2 = document.getElementById('weightModel2');
     const h3text6 = document.getElementById('h3text6');

     if (type == 1) {
          modelBut1.style.color = '#fff';
          modelBut2.style.color = '#d0d1d2';
          modelBut1.style.border = '3px solid #fff';
          modelBut2.style.border = '3px solid #222';

          spantext2.style.display = 'inline-block';
          h3text2.style.display = 'inline-block';
          htext2.style.display = 'inline-block';

          htext1.textContent = '396 mi';
          htext3.textContent = '1,020 hp';
          htext4.textContent = '4,766 lbs';
          htext5.innerHTML = '1.99 s 0-60 mph</br>with rollout subtracted';
          htext6.innerHTML =
               '200 mph</br>controller</br>when equipped with paid</br>hardware upgrades';
          htext7.textContent = 'Tri Motor';

          accModel1.style.display = 'inline-block';
          accModel2.style.display = 'none';
          weightModel1.style.display = 'inline-block';
          weightModel2.style.display = 'none';

          h3text6.textContent = '†Top Speed';
     } else {
          modelBut2.style.color = '#fff';
          modelBut1.style.color = '#d0d1d2';
          modelBut2.style.border = '3px solid #fff';
          modelBut1.style.border = '3px solid #222';

          spantext2.style.display = 'none';
          h3text2.style.display = 'none';
          htext2.style.display = 'none';

          htext1.textContent = '405 mi';
          htext3.textContent = '670 hp';
          htext4.textContent = '4,561 lbs';
          htext5.innerHTML = '3.1 s 0-60 mph';
          htext6.innerHTML = '149 mph';
          htext7.textContent = 'Dual Motor';

          accModel1.style.display = 'none';
          accModel2.style.display = 'inline-block';
          weightModel1.style.display = 'none';
          weightModel2.style.display = 'inline-block';

          h3text6.textContent = 'Top Speed';
     }
}
