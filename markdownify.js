(function(document,window) {
  // Onload, take the DOM of the page, get the markdown formatted text out and
	// apply the converter.
	var html = (new Showdown.converter()).makeHtml(document.body.innerText);
	document.body.innerHTML = html;

	// Also inject a reference to the default stylesheet to make things look nicer.
	var ss = document.createElement('link');
	ss.rel = 'stylesheet';
	ss.href = chrome.extension.getURL('markdown.css');
  chrome.extension.sendRequest({ option : "css_href" }, function(response) {
		ss.href = response.css_href;
	  document.head.appendChild(ss);
  });

}(document,window));
