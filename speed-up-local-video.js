// ==UserScript==
// @name         speed up video
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        file:///E:/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	document.querySelector('video').playbackRate = 1.5;
	document.getElementsByTagName('video')[0].volume = 0.8;
    var fullScrn = true;
	window.addEventListener("keydown", function(event){

		if (event.keyCode == 34) {
			event.preventDefault();
			document.querySelector('video').playbackRate -= 0.25 ;
		}


		if (event.keyCode == 33) {
			event.preventDefault();
			document.querySelector('video').playbackRate += 0.25 ;
		}

		if (event.keyCode == 36) {
            var	hlp = document.createElement('div');
			hlp.style.position = 'absolute';
			hlp.style.top='0';
			hlp.style.left='0';
			hlp.style.height = '100%';
			hlp.style.width = '100%';
			hlp.style.backgroundColor='#222';
			hlp.style.opacity = '0.75';
			hlp.style.color = 'white';
			hlp.style.fontSize = "4em";
			hlp.style.zIndex = "2";
			document.body.appendChild(hlp);

			var newtext = document.createTextNode(document.querySelector('video').playbackRate);
			document.getElementsByTagName('div')[0].appendChild(newtext);
			setTimeout(function() {
				hlp.remove();
			},2000);
		}

    if (event.keyCode == 70) {
			if (fullScrn) {
				document.querySelector('video').requestFullscreen();
				fullScrn = false;
			} else {
				document.exitFullscreen();
				fullScrn = true;
			}
		}
	});
})();
