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

const reveal_video = document.getElementById('reveal-video');
const vidOpt1 = document.getElementById('vidOpt1');
const vidOpt2 = document.getElementById('vidOpt2');
const vidOpt3 = document.getElementById('vidOpt3');
const vidOpt4 = document.getElementById('vidOpt4');

function changeVideo(videoOption) {
     switch (videoOption) {
          case 1:
               reveal_video.src =
                    'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/PowerFlow_1_D.mp4';
               vidOpt1.classList.add('activeOption');
               vidOpt2.classList.remove('activeOption');
               vidOpt3.classList.remove('activeOption');
               vidOpt4.classList.remove('activeOption');
                    break;
          case 2:
               reveal_video.src =
                    'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/PowerFlow_2_D.mp4';
                    vidOpt2.classList.add('activeOption');
                    vidOpt1.classList.remove('activeOption');
                    vidOpt3.classList.remove('activeOption');
                    vidOpt4.classList.remove('activeOption');
               break;
          case 3:
               reveal_video.src =
                    'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/PowerFlow_3_D.mp4';
                    vidOpt3.classList.add('activeOption');
                    vidOpt2.classList.remove('activeOption');
                    vidOpt1.classList.remove('activeOption');
                    vidOpt4.classList.remove('activeOption');
               break;
          case 4:
               reveal_video.src =
                    'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/PowerFlow_4_D.mp4';
                    vidOpt4.classList.add('activeOption');
                    vidOpt2.classList.remove('activeOption');
                    vidOpt3.classList.remove('activeOption');
                    vidOpt1.classList.remove('activeOption');
               break;
     }
}

const ptext2 = document.getElementById('ptext2');
const htext2 = document.getElementById('htext2');
const htext3 = document.getElementById('htext3');
const htext4 = document.getElementById('htext4');
const htext5 = document.getElementById('htext5');
const htext6 = document.getElementById('htext6');
const htext7 = document.getElementById('htext7');
const powerwallBut1 = document.getElementById('powerwallBut1');
const powerwallBut2 = document.getElementById('powerwallBut2');
const inverterspan = document.getElementById('inverterspan');
const inverterh3 = document.getElementById('inverterh3');
const img6 = document.getElementById('img6');

function changePowerwall(type){
     if(type===1){
          img6.src = 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1440,w_1400,c_fit,f_auto,q_auto:best/PW_Inverter_Specs_D';
          ptext2.style.display = 'inline-block'
          htext5.style.display = 'inline-block'
          inverterh3.style.display = 'inline-block'
          inverterspan.style.display = 'inline-block'
          powerwallBut1.style.border = '3px solid #fff';
          powerwallBut2.style.border = '3px solid #222';

          htext2.innerHTML = "7.6kVA / 5.8kVA continuous†";
          htext3.innerHTML = '9.6kW / 7kW continuous†<br>22kW / 10kW peak†<br>118A max LRA start<br>Seamless backup transition';
          htext4.innerHTML='L x W x D</br>62.8 in x 29.7 in x 6.3 in</br>343.9 lbs';
          htext5.innerHTML='Efficiency 97.5%</br>Maximum Power Point Trackers:</br>4</br>Solar Input';
          htext6.innerHTML='Integrated inverter and system</br>controller</br>-4°F to 122°F</br>Water and dust resistance';
          htext7.innerHTML='Meets North American safety</br>and EMI standards';
     }else{
          img6.src = 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1440,w_1400,c_fit,f_auto,q_auto:best/PW_NOInverter_Specs_D';
          ptext2.style.display = 'none'
          htext5.style.display = 'none'
          inverterh3.style.display = 'none'
          inverterspan.style.display = 'none'

          powerwallBut2.style.border = '3px solid #fff';
          powerwallBut1.style.border = '3px solid #222';

          htext2.innerHTML = "5.8kVA continuous";
          htext3.innerHTML = '10kW peak<br>106A LRA start<br>Seamless backup transition';
          htext4.innerHTML='L x W x D<br>45.3 in x 29.6 in x 5.75 in<br>251.3 lbs';
          htext6.innerHTML='Floor or wall mounted</br>Indoor or outdoor</br>Up to 10 Powerwalls</br>-4°F to 122°F</br>Water and dust resistance';
          htext7.innerHTML='Meets US and International</br>safety and EMI standards';
     }
}