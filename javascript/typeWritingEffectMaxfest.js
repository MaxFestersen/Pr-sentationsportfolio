// Typewritter effect.
// Inspited by:
// * w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
// * https://codepen.io/hi-im-si/pen/DHoup
// * A unreleased depression simulator made for "Lær at tackle" - 
console.log("Created and owned by Max Festersen Hansen.")

var i = 0; // Set inital value. Will be owerwritten.
// Subtitles to choose from
var subTitles = ['Web-koder', 'Udvikler', 'Udvikling', 'Programmør', 'Ux-designer', 'Projektleder', 'Web-master', 'Designer', 'Web designer', 'Internet user', 'Web-tester', 'Web integrator', 'Content creator', 'Developer', 'Grafiker', 'Web analytiker', 'Blogger', 'Video producer', 'Web skribent', 'App udvikler', 'Web specialist', 'Media-specialist', 'Animator', 'Multimediedesigner', 'Nørd', 'Hansen', 'Business intelligence', 'BI-secialist', 'SEO specialist', 'Scrum master', 'Lean specialist', 'Facilitator', 'Medieproducent', 'Erhvervsjura kyndig', 'Navigationsdesigner'];
subTitles.sort(() => Math.random() - 0.5);
var currentSubTitleNum = 0;
subTitles.push('HELLO WORLD', 'Du har set på dette længe min ven.')
// Variables used in functions
var subTitle = document.getElementById("siteSubTitle").innerHTML;;
var cuttentSub = ""; //Empty string | Will be owerwritten.
var newSub = ""; //Empty string | Will be owerwritten.
var newSubTitle = ""; //Empty string | Will be owerwritten.

// Typewriting program writing effect
/*
	Step 1. - Get currently used text from subtitle.
	Step 2. - Remove inActive class from subtitle (removes blincking animation).
	Step 3 - Add 1 letter to sentence at a time, until the subtitle is completed. Takes 150ms per letter.
	Step 4. - When sentence is written, reset i.
	Step 5. - Add inActive class to subtitle (adds blincking animation).
	Step 6. - Call typeDelete function after 5.3 seconds.
*/
// Warning: Using function will create a infinte loop.
function typeWrite() { 
	cuttentSub = document.getElementById("siteSubTitle").innerHTML;
	document.getElementById("siteSubTitle").classList.remove("inActive");
	if(cuttentSub == subTitle){
		i = 0; //Reset
		document.getElementById("siteSubTitle").classList.add("inActive");
		setTimeout(typeDelete, 5300); // 5 blinks
	} else{
		document.getElementById("siteSubTitle").innerHTML += subTitle.charAt(i);
		i++;
		setTimeout(typeWrite, 150);
	}
}

// Typewriting program deleting effect
/*
	Step 1. - Get currently used text from subtitle.
	Step 2. - Remove inActive class from subtitle (removes blincking animation).
	Step 3. - Deletes sentence 1 letter at a time, until sentence is deleted. Takes 100ms per letter.
	Step 4. - When sentence is deleted, reset i
	Step 5 - Create or set new subtitle.
	Step 6. - Add inActive class to subtitle (adds blincking animation).
	Step 7. - Call typeWrite function after 1 seconds.
 */
// Warning: Using function will create a infinte loop.
function typeDelete() { 
	cuttentSub = document.getElementById("siteSubTitle").innerHTML;
	document.getElementById("siteSubTitle").classList.remove("inActive");
	if(cuttentSub==""){
		i = 0; //Reset
		while(newSubTitle == "" ||  newSubTitle == subTitle){
			if(currentSubTitleNum < subTitles.length - 1){
				currentSubTitleNum++;
			} else{
				currentSubTitleNum = 0;
			}
			newSubTitle = subTitles[currentSubTitleNum];
		}
		subTitle = newSubTitle;
		document.getElementById("siteSubTitle").classList.add("inActive");
		setTimeout(typeWrite, 1060); // 1 blinks
	} else{
		i = cuttentSub.length-1;
		newSub = cuttentSub.slice(0, i);
		document.getElementById("siteSubTitle").innerHTML = newSub;
		setTimeout(typeDelete, 100);
	}
}

setTimeout(typeDelete, 5300); //Initial call || 5 blinks