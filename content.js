if (window.location.host === "www.facebook.com") {
	if (!window.location.pathname.startsWith("/messages") && !window.location.pathname.startsWith("/l.php")) {
		window.location.href = "https://www.facebook.com/messages";
	}
	countdown(0, 30, function(t) {
		if (t === 15) {
			invert()
		}
		// console.log("tick", t)
	}, function() {
		$("*").remove()
		// console.log("done")
	})
}
function invert() {
	var css = 'body {-webkit-filter: invert(100%);' + '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' + '-ms-filter: invert(100%); background-color: black;}',
	head = document.getElementsByTagName('head')[0],
	style = document.createElement('style');
	style.type = 'text/css';
	style.styleSheet.cssText = css;
	head.appendChild(style);
}
function countdown(minutes, seconds, tick, done) {
	tick = tick || function(t) {
		console.log("tick", t)
	}
	done = done || function() {
		console.log("done")
	}
	interval = setInterval(function() {
		if (seconds == 0) {
			if (minutes == 0) {
				done()
				clearInterval(interval);
				return;
			} else {
				minutes--;
				seconds = 60;
			}
		}
		tick(seconds)
		seconds--;
	}, 1000);
}