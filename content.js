

// var url = "https://www.facebook.com/messages"
var url = "https://www.messenger.com/t/me"

if (window.location.host === "www.facebook.com") {
	if (!window.location.pathname.startsWith("/messages") && !window.location.pathname.startsWith("/l.php")) {
		window.location.href = url;
	}
}
