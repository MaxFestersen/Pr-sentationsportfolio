// Mouse Tracking for caseLeft.
// Inspited by:
// 		http://www.dynamicdrive.com/forums/showthread.php?22225-Checking-if-mouse-is-moving-or-not
// 			Thanks a lot to Twey

// Track mousemovement in Caseleft, to hide mouse in images, video and iframe, when mouse stopped moving for a while.
var caseLeft = document.getElementsByClassName("caseLeft");
caseLeft[0].onmousemove = (function() {
var iframe = document.querySelector('iframe');
var iframeDoc = false;

var onmousestop = function() {
		// Mouse stopped moving
		caseLeft[0].classList.add("caseLeftLongHover");
		iframe = document.querySelector('iframe');
		iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
		iframeDoc.body.style.cursor = 'none';
	}, thread;
	return function() {
		// Mouse stopped moving for 2 seconds
		caseLeft[0].classList.remove("caseLeftLongHover");
		clearTimeout(thread);
		iframe = document.querySelector('iframe');
		iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
		iframeDoc.body.style.cursor = 'auto';
		thread = setTimeout(onmousestop, 2000);
	};
})();
