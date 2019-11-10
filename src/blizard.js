/**
 * @method blizard
 * @name blizard.js
 * @version 0.5.1BETA
 * @author Rohan Samra-O'Neill
 * @copyright 2019 Slitherlizard
 * uses the atomo.css library created by Rohan Samra-O'Neill
 */
"use strict";

// inspired by jquery and p5.js :), thanks to p5.js and the processing team for featuring blizard.js on there site
/**
 * @method
 * @method sl
 */
const sl = {};
let id;

//just a little message to anyone who goes onto a website that uses blizard.js
console.info("This project uses blizard.js for more info go to https://github.com/Slitherlizard/blizard.js");


/**
 * @method ready
 * @param {Function} sel
 * @description runs whatever function that the selector is equal to
 */
sl.ready = function (sel) {
  window.onload = function () {
    window.setTimeout(sel, 0);
  }
}

/**
 * @method print
 * @param {string} sel
 * @param {string} txt
 * @description with sl.print the first parameter is the id of the element you want to change the second is the text you want to change it to
 */
sl.print = function (sel, txt) {
  document.getElementById(sel).innerHTML = txt;
};


/**
 * @method hide
 * @param {string} sel
 * @description hides the given element
 */
sl.hide = function (sel) {
  id = document.getElementById(sel);
  id.style.display = "none";
};


/**
 * @method show
 * @param {string} sel
 * @description shows the given element
 */
sl.show = function (sel) {
  id = document.getElementById(sel);
  id.style.display = "block";
};


/**
 * @method col
 * @param {string} sel
 * @param {string} col
 * @description changes color of the given element
 */
sl.col = function (sel, col) {
  document.getElementById(sel).style.color = col;
}


/**
 * @method family
 * @param {string} sel
 * @param {string} font
 * @description changes font-family of the given element
 */
sl.family = function (sel, font) {
  document.getElementById(sel).style.fontFamily = font;
}


//with sl.size the first parameter is the id of the element you want to change the size of, 
/*

*/

/**
 * @method size
 * @param {string} sel
 * @param {string} size
 * @description changes font-size of the given element
 * These are the sizes you can use
 * xx-small
 * x-small
 * small
 * medium
 * large
 * x-large
 * xx-large
 * smaller	
 * larger
 */
sl.size = function (sel, size) {
  document.getElementById(sel).style.fontSize = size;
}


/**
 * @method wait
 * @param {Function} sel
 * @param {Number} func
 * @description triggers a function after a specified delay
 */
sl.wait = function (sel, func) {
  window.setTimeout(sel, func);
}

/**
 * @method setlocalstorage
 * @param {string} sel
 * @param {any} value
 * @description saves a value in localStorage
 */
sl.setlocalstorage = function (sel, value) {
  localStorage.setItem(sel, value);
}

/**
 * @method printlocalstorage
 * @param {string} sel
 * @param {string} itemName
 * @description prints the value of localStorage item to an element
 */
sl.printlocalstorage = function (sel, itemName) {
  document.getElementById(sel).innerHTML = localStorage.getItem(itemName);
}


/**
 * @method click
 * @param {string} sel
 * @param {Function} func
 * @description sets an event listener to a specific element
 */
sl.click = function (sel, func) {
  document.getElementById(sel).onclick = function () { window.setTimeout(func, 0); };
}


/**
 * @method id
 * @param {string} sel
 * @param {Function} func
 * @description sets id to a specific element
 */
sl.id = function (sel, id) {
  document.getElementById(sel).setAttribute('id', id);
}


/**
 * @method atomo
 * 
 * @description 
 * from line 92 - 124 i think i liked inporting other librarys too much
 * @description loads the atomo.css library for styles
 */
sl.atomo = function () {
  const head = document.getElementsByTagName('HEAD')[0];

  // Create new link Element 
  const link = document.createElement('link');

  // set the attributes for link element  
  link.rel = 'stylesheet';
  link.type = 'text/css';
  //load atomo.css library
  link.href = "http://atomo.ueuo.com/atomo.css";

  // Append link element to HTML head 
  head.appendChild(link);
}

/**
 * @method import
 * @param {string} sel
 * @description imports a stylesheet
 * sl.import does not work yet :(
 */
sl.import = function (sel) {
  const head = document.getElementsByTagName('HEAD')[0];

  // Create new link Element 
  const link = document.createElement('link');

  // set the attributes for link element  
  link.rel = 'stylesheet';

  link.type = 'text/css';

  link.href = sel;

  // Append link element to HTML head 
  head.appendChild(link);
}


/**
 * @method createElement
 * @param {string} sel selector to create
 * @param {string} elm
 * @param {string} elm
 * @description sets id to a specific element
 * 
 * I have wanted to add this since version 0.0.1 but didn't know how but now i do know how so i'll add it.
 * with sl.createElement() the first parameteris the element you want to create like P be sure to wright it in capital letters and the second parameter is the element you want to append it to the third parameter is the id you would like to give that element
 * 
 */
sl.createElement = function (sel, elm, id) {
  const father = document.getElementsByTagName(elm)[0];

  // Create new Element 
  const elem = document.createElement(sel);
  //give the element an id
  elem.id = id;

  // Append link element to HTML head 
  father.appendChild(elem);
}

/**
 * @method changeBackgroundColor
 * @param {string} sel
 * @param {string} color
 * @description sets background color of an element
 */
sl.changeBackgroundColor = function (sel, color) {
  document.getElementById(sel).style.backgroundColor = color;
}


window.sl = sl;
export default sl;