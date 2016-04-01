// ==UserScript==
// @name        Remove GitHub contributions calendar
// @namespace   http://me.aaron-miller.me/userscripts/remove-github-contributions-calendar
// @include     https://github.com/*
// @version     1.0
// @grant       none
// @description Remove the contribution calendar, counter, and streak info from GitHub profile pages.
// ==/UserScript==

function removeContribInfo() {
  var targetElements = [];

  var contribGraph = document
    .querySelector('div.contributions-tab')
    .querySelector('div#contributions-calendar');

  targetElements.push(contribGraph.parentNode);
  targetElements.push(document.querySelector('div.activity-listing'))

  targetElements.forEach(function(el) {
    el.style.display = 'none';
  })
};

window.setInterval(removeContribInfo, 50);
removeContribInfo();