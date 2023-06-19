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

/*
function hideBox() {
     const links = document.querySelectorAll('.menu a');
     let isHovered = false;
   
     for (let i = 0; i < links.length; i++) {
       if (links[i].matches(':hover')) {
         isHovered = true;
         break;
       }
     }
   
     if (!isHovered) {
       const box = document.querySelector('.box');
       box.style.display = 'none';
     }
   }*/

new fullpage('#fullpage', {
     //options here
     autoScrolling: true,
     scrollBar: true,
     scrollingSpeed: 2000,
});

const firstSection = document.querySelector('.section1');
const secSection = document.querySelector('.section2');

const fadeTarget = document.querySelector('.contentDiv');
const fadeH2 = document.getElementById('h2Content');
const lineDiv = document.getElementById('lineDiv');
const h3Line = document.getElementById('h3Line');
const h3Solar = document.getElementById('h3Solar');
const solarButDiv = document.getElementById('butDivSolar');
const butDiv = document.getElementById('butDiv');
const orderBut = document.getElementById('orderBut');
const learnBut = document.getElementById('learnBut');
const footerDiv = document.getElementById('footerDiv');
const moveDownIcon = document.getElementById('downIcon');

//h3Solar.style.display = 'none';
solarButDiv.style.display = 'none';
footerDiv.style.display = 'none';

var isFirstPage = true;

function goDown(){
     fullpage_api.moveSectionDown();
     moveDownIcon.style.display = "none";
}



window.addEventListener('scroll', function () {
     const fadeInSection = 256;
     const fadeOutSection = 344;
     const totalSection = fadeInSection + fadeOutSection; //600
     //const between = firstHalf - afterHalf;
     const theHeight = firstSection.offsetHeight; //754
     const theLeft = 154;

     console.log(window.scrollY);
     //footerDiv.style.opacity = 0;
     //h3Solar.style.opacity = 0;
     // butDiv.style.opacity = 1;
     //fadeH3.style.opacity = 1;
     //butDiv.style.display = 'inline-block';
     //lineDiv.style.display = 'flex';

     //fadeH3.style.display = 'inline-block';
     //h3Solar.style.display = 'none';
     //solarButDiv.style.display = 'none';
     footerDiv.style.display = 'none';
     //h3Solar.style.display = 'none';
     //h3Line.style.display = 'inline-block'
     //h3Line.style.borderBottom = '1px solid black';
     //h3Line.textContent = 'View Inventory';
     learnBut.textContent = 'Demo Drive';
     //fadeH2.style.left = "45%";

     //solarButDiv.style.opacity = 0;
     

     if (this.window.scrollY <= 256) {
          fadeTarget.classList.remove('contentDivAfter');
          fadeH2.textContent = 'Model Y';
          showInventory();
          moveDownIcon.style.display = "inline-block";
     }

     if (window.scrollY > 256 && window.scrollY < totalSection) {
          fadeTarget.classList.add('contentDivAfter');
          moveDownIcon.style.display = "none";
     } else if (window.scrollY >= totalSection && window.scrollY < 754 + fadeInSection) {
          fadeTarget.classList.remove('contentDivAfter');
          h3Solar.style.display = 'inline-block';
          lineDiv.style.display = 'none';
          fadeH2.textContent = 'Model 3';
     } else if (
          window.scrollY >= theHeight + fadeInSection &&
          window.scrollY < theHeight + totalSection
     ) {
          fadeTarget.classList.add('contentDivAfter');
     } else if (
          window.scrollY >= theHeight + totalSection &&
          window.scrollY < theHeight * 2 + fadeInSection
     ) {
          fadeTarget.classList.remove('contentDivAfter');
          fadeH2.textContent = 'Model S';
          showInventory();
     } else if (
          window.scrollY >= theHeight * 2 + fadeInSection &&
          window.scrollY < theHeight * 2 + totalSection
     ) {
          fadeTarget.classList.add('contentDivAfter');
     } else if (
          window.scrollY >= theHeight * 2 + totalSection &&
          window.scrollY < theHeight * 3 + fadeInSection
     ) {
          fadeTarget.classList.remove('contentDivAfter');
          fadeH2.textContent = 'Model X';/*
          lineDiv.style.opacity = 1;
          h3Line.style.borderBottom = '1px solid black';*/
          showInventory();
          //h3Line.textContent = 'View Inventory';
     } else if (
          window.scrollY >= theHeight * 3 + fadeInSection &&
          window.scrollY < theHeight * 3 + totalSection
     ) {
          fadeTarget.classList.add('contentDivAfter');
          //h3Line.style.border = "0";
          //h3Line.textContent = "";
          lineDiv.style.opacity = 0;
     } else if (
          window.scrollY >= theHeight * 3 + totalSection &&
          window.scrollY < theHeight * 4 + fadeInSection
     ) {
          lineDiv.style.opacity = 1;
          lineDiv.style.display = "flex"
          fadeTarget.classList.remove('contentDivAfter');
          learnBut.textContent = 'Learn More';
          fadeH2.textContent = 'Solar Panels';
          h3Line.style.border = '0';
          h3Line.textContent = 'Lowest Cost Solar Panels in America';
          h3Solar.style.display = 'none';
     } else if (
          window.scrollY >= theHeight * 4 + fadeInSection &&
          window.scrollY < theHeight * 4 + totalSection
     ) {
          fadeTarget.classList.add('contentDivAfter');
          learnBut.textContent = 'Learn More';
          lineDiv.style.opacity = 0;
     } else if (
          window.scrollY >= theHeight * 4 + totalSection &&
          window.scrollY < theHeight * 5 + fadeInSection
     ) {
          fadeTarget.classList.remove('contentDivAfter');
          lineDiv.style.opacity = 1;
          lineDiv.style.display = "flex"
          fadeH2.textContent = 'Solar Roof';
          learnBut.textContent = 'Learn More';
          h3Line.style.border = '0';
          h3Line.textContent = 'Produce Clean Energy From Your Roof';
          h3Solar.style.display = 'none';
          solarButDiv.style.opacity = 0;
          butDiv.style.display = 1;
          butDiv.style.display = 'inline-block';
     } else if (
          window.scrollY >= theHeight * 5 + fadeInSection &&
          window.scrollY < theHeight * 5 + totalSection
     ) {
          fadeTarget.classList.add('contentDivAfter');
          learnBut.textContent = 'Learn More';
          lineDiv.style.opacity = 0;
          solarButDiv.style.opacity = 0;
          butDiv.style.display = 0;
          
     } else if (window.scrollY >= theHeight * 5 + totalSection) {
          fadeTarget.classList.remove('contentDivAfter');
          lineDiv.style.opacity = 0;
          fadeH2.textContent = 'Accessories';
          butDiv.style.display = 0;
          butDiv.style.display = 'none';
          solarButDiv.style.display = 'inline-block';
          solarButDiv.style.opacity = 1;
          footerDiv.style.display = 'flex';
          h3Solar.style.display = 'none';
     }
});

function showInventory(){
     lineDiv.style.display = 'flex';
     h3Line.style.borderBottom = '1px solid black';
     h3Line.textContent = 'View Inventory';
     lineDiv.style.opacity = 1;
     h3Solar.style.display = 'none';
}


