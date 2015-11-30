if (window.location.host === "www.facebook.com") {
	if (!window.location.pathname.startsWith("/messages") && !window.location.pathname.startsWith("/l.php")) {
		window.location.href = "https://www.facebook.com/messages";
	}
	countdown(0, 15, function(t) {
		console.log("tick", t)
		// chrome.browserAction.setBadgeText({"text": t})
	}, function() {
		console.log("done")
		$("*").remove()
	})
}

function countdown(minutes, seconds, tick, done) {
	tick = tick || function(t) {console.log("tick", t)}
	done = done || function()  {console.log("done")}
	interval = setInterval(function() {
		if(seconds == 0) {
			if(minutes == 0) {
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
function Timer1(duration) {
		var timer = duration, minutes, seconds;
		setInterval(function () {
				minutes = parseInt(timer / 60, 10);
				seconds = parseInt(timer % 60, 10);

				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;

				// display.textContent = minutes + ":" + seconds;
				console.log(minutes + ":" + seconds)

				if (--timer < 0) {
						timer = duration;
				}
		}, 1000);
}

function Timer2(duration, granularity) {
	this.duration = duration;
	this.granularity = granularity || 1000;
	this.tickFtns = [];
	this.running = false;
}

Timer2.prototype.start = function() {
	if (this.running) {
		return;
	}
	this.running = true;
	var start = Date.now(),
			that = this,
			diff, obj;

	(function timer() {
		diff = that.duration - (((Date.now() - start) / 1000) | 0);

		if (diff > 0) {
			setTimeout(timer, that.granularity);
		} else {
			diff = 0;
			that.running = false;
		}

		obj = Timer2.parse(diff);
		that.tickFtns.forEach(function(ftn) {
			ftn.call(this, obj.minutes, obj.seconds);
		}, that);
	}());
};

Timer2.prototype.onTick = function(ftn) {
	if (typeof ftn === 'function') {
		this.tickFtns.push(ftn);
	}
	return this;
};

Timer2.prototype.expired = function() {
	return !this.running;
};

Timer2.parse = function(seconds) {
	return {
		'minutes': (seconds / 60) | 0,
		'seconds': (seconds % 60) | 0
	};
};