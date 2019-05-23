let buttonID = document.getElementById("theButton");
let buttonID2 = document.getElementById("theButton2");
var contentBox =  document.getElementById("contentBox");
let i = 0;
let o = 0;
let j = 0;

LoopHi();

function buttonAppear() {
  document.getElementById('theButton').style.visibility = "visible";
}

function LoopHi () {
  const txt = "HEY! I'm Navi and I'm a web developer.";
  
  if ( i < txt.length) { 
    document.getElementById("contentBox").innerHTML += txt.charAt(i);
    i++;
    setTimeout(LoopHi ,120);
    // The below if statement should have been comparing to txt.length instead of 34. This was causing the button to appear too soon.
      if (i == txt.length) {
        setTimeout(buttonAppear(), 5500);
      }
  }
};

function typeGreetings () {
  let txt = "LISTEN! I'm happy to meet you.";

  if ( o < txt.length ) {
    contentBox.innerHTML += txt.charAt(o);
    o++;
    setTimeout(typeGreetings, 120)
    if (o == txt.length) {
      buttonID2.style.visibility = "visible";
      // setTimeout(buttonAppear(), 5500); 
    }
  }
};

function Farewell () {
  let txt = "Now go save Hyrule Link! We're all counting on you finishing those websites!";

  if ( j < txt.length ) {
    contentBox.innerHTML += txt.charAt(j);
    j++;
    setTimeout(Farewell, 120)
    if (j == txt.length) {
      buttonID2.style.visibility = "hidden";
      // setTimeout(buttonAppear(), 5500); 
    }
  }
};

document.addEventListener('click', function  (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches('#theButton')) return;
  // Don't follow the link
  event.preventDefault();
  contentBox.innerHTML= "";
  buttonID.style.visibility = "hidden";
  typeGreetings();
  // Log the clicked element in the console
  console.log(event.target);
}, false);

document.addEventListener('click', function  (event) {
  if (!event.target.matches('#theButton2')) return;
  event.preventDefault();
  contentBox.innerHTML= "";
  buttonID2.style.visibility = "hidden";
  Farewell();
  console.log(event.target);
}, false);

//This is what I fixed:
//1. Used html button instead of creating one with js. The reason why it wasn't appearig was due to the if statement where it was comparing i to 34 instead of 39
// (which is the number of characters in the txt string).
//2. I applied a z-index of 100 to #theButton because that's why it wasn't clicking. We were clicking on the Navi SVG element.
//3. I moved contentBox.innerHtml inside the typeGreetings function because it was resetting contentBox element to empty after every loop.
//4. Formatted everything properly :).

