var url = "https://www.messenger.com/t/me"
var current = true
chrome.storage.sync.get(['current'], function(items) {
	current = items.current
	if (window.location.host === "www.facebook.com" && current) {
		if (!window.location.pathname.startsWith("/messages") && !window.location.pathname.startsWith("/l.php")) {
			window.location.href = url
		}
	}


})

