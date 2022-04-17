// ==UserScript==
// @name         speed up video
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        file:///E:/*
// @grant        none
// ==/UserScript==

// chrome -> settings -> extensions -> tampermonkey -> allow file URLS

(function() {
    'use strict';
	document.querySelector('video').playbackRate = 1.75;
	document.getElementsByTagName('video')[0].volume = 1.0;
    	var fullScrn = true;
	window.addEventListener("keydown", function(event){
		// 3 for playbackRate = 3.0
		if (event.keyCode == 51) {
		    document.querySelector('video').playbackRate = 3;
		}
		// 2 for playbackRate = 1.75;
		if (event.keyCode == 50) {
		    document.querySelector('video').playbackRate = 1.75;
		}
		// 1 for playbackRate = 1.0
		if (event.keyCode == 49) {
		    document.querySelector('video').playbackRate = 1.0;
		}
		// backspace get back 
		if (event.keyCode == 8) {
		    history.back();
		}
		// left arrow
		if (event.keyCode == 37) {
		    event.preventDefault();
		    document.querySelector('video').currentTime = document.querySelector('video').currentTime - 5;
		}
		// right arrow
		if (event.keyCode == 39) {
		    event.preventDefault();
		    document.querySelector('video').currentTime = document.querySelector('video').currentTime + 5;
		}

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
