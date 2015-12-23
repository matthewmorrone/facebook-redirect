var current = true

function update() {
	if (current) {
		chrome.browserAction.setIcon({path:"img/on-38.png"})
	} 
	else {
		chrome.browserAction.setIcon({path:"img/off-38.png"})
	}
	chrome.storage.sync.set({'current': current}, function() {

	})
	current = !current
}

chrome.browserAction.onClicked.addListener(update)
update()




