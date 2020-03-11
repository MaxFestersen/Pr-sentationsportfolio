// Scroll effects

/*
Obkective: enable smooth scrolling¨with browser states.
1. Get sitename
2. get Id if pressent
3. Remove Id if pressent 
4. Get navigation sections.
5. Merge into single array
6. Find all a selectors in navigations
7. Loop all links
8. Create a unque case for each iteration
9. Get id target from href
10. Add onclick event to scoll to the id and push new adress name to adressbar
11. Remove href (conflicts with code)
*/

// Set vars
var siteName = window.location.href;
var siteIdRefference = siteName.split("#");
// Remove Id from siteName
siteName = siteIdRefference[0];
var headNav = document.getElementById("headNav");
var sideNav = document.getElementById("sideNav");
var cases = document.getElementById("cases");
var headNavLinks = Array.prototype.slice.call(headNav.querySelectorAll("a"));
var sideNavLinks = Array.prototype.slice.call(sideNav.querySelectorAll("a"));
var casesLinks = Array.prototype.slice.call(cases.querySelectorAll("a"));
var allNav = headNavLinks.concat(sideNavLinks);
allNav = allNav.concat(casesLinks);

// Remove href, add onclick for smooth scorlling to sections and update adressbar.
for (i = 0; i < allNav.length; i++) {
   (function(index) {
		// Get id target from href
		var id = allNav[index].getAttribute("href");
		if(id.length>1){
			id = id.slice(1);
		}
		// Add onclick event to scoll to the id
		allNav[index].addEventListener("click", function(){goTo(id)});
		// Remove href
		allNav[index].removeAttribute("href");
   })(i);
}


function goTo(id){
	if(id == "#"){
		// Scroll smoothly to top
		window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
		// Update adress bar
	});
		window.history.pushState(siteName, document.title, "");
	} else {
		var destination = document.getElementById(id);
		// Scroll smoothly to section
		destination.scrollIntoView({ behavior: 'smooth' });
		// Update adress bar
		window.history.pushState(siteName, document.title, "#"+id);
	}
}