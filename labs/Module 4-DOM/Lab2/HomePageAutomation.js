var styletext =
  "\n\
      @keyframes flyaway {  \n\
      0% {  \n\
          transition: 5s ease-in;  \n\
        }  \n\
        100% {  \n\
          transform: translate(350px, 100px); \n\
        }  \n\
      }  \n\
      \n\
      #airplane1 {  \n\
        animation: flyaway 10s ease-in forwards;  \n\
        -moz-animation-iteration-count: 1;  \n\
        animation-iteration-count: 1;   \n\
      }  \n\
        ";
var newStyleBlock = document.createElement("style");
newStyleBlock.textContent = styletext;
document.head.appendChild(newStyleBlock);
var airplane = document.getElementById("airplane1");
airplane.addEventListener(
  "animationend",
  function () {
    airplane.style.display = "none";
  },
  false
);

/*
Author: Brandon
Date: 10/22/2024
Used by: default.html
notes: Makes the plane fly away forever
*/
