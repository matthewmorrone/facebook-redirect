// if (window.location.host === "www.facebook.com") {
if (!window.location.pathname.startsWith("/messages")) {
	window.location.href = "https://www.facebook.com/messages";
}
// }