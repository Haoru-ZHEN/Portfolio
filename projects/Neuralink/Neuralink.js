var linkAfter = window.getComputedStyle(document.querySelector('a'), '::after');

function showLine(event) {
     var link = event.target;
     //var linkAfter = window.getComputedStyle(link.querySelector('::after'));
     const line = link.nextElementSibling;

     line.style.transform = "scale(1)";
}

function returnLine(event) {
     var link = event.target;
     const line = link.nextElementSibling;

     //line.style.width = 100+"px";
     //line.style.width = 10+"px";
     line.style.transform = "scale(0)";
}