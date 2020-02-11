// Scroll effects
// Set vars
var i = 0;
var scrollY = 0;
var userYScrollPosition = window.pageYOffset;
var targetYScrollPosition = 0;
var bodyHeight = 0;
var yPosition = 0;
var animator = false;
var distance = 40;

// Scrolling effect
function AutoScrollEffect(destination){
	i = i + 1;
	console.log('Initiating scroll. Please stand by. ' + i);
	userYScrollPosition = window.pageYOffset;
	targetYScrollPosition = document.getElementById(destination).offsetTop;
	bodyHeight = document.body.offsetHeight;
	yPosition = userYScrollPosition + window.innerHeight;
	doAnimation = setTimeout('AutoScrollEffect(\''+destination+'\')',24);
	if(yPosition > bodyHeight){
		console.log('Scolled to bottom!');
		clearTimeout(doAnimation);
	} else {
		if(userYScrollPosition < targetYScrollPosition-distance){
			console.log('Scolling!');
		    scrollY = userYScrollPosition+distance;
		    window.scroll(0, scrollY);
	    } else {
			console.log('Scrolled to target!');
		    clearTimeout(doAnimation);
	    }
	}
}