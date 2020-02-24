// Key pressing functions
// --- Track key presses ---
var keysDown = [];
var keysPressed = [];
var curKey = '';

// -- Track key down --
document.addEventListener('keydown', event => {
	const downKey = event.key.toLowerCase();
	if(keysDown.includes(downKey)){
		return;
		// End function if the key did not change.
	}
	curKey = downKey; // Update last pressed key ino
	//console.log(curKey);
	keysDown.push(downKey); // Add to array of currently pressed keys
	//console.log('Down: ' + downKey);
	// Check for Max Code
	MaxFest(keysDown)
});

// -- Track key up --
document.addEventListener('keyup', event => {
	const upKey = event.key.toLowerCase();
	curKey = ''; // Reset
	keysPressed.push(upKey); // Add to array of keys that has been pressed
	keysDown.splice( keysDown.indexOf(upKey), 1 ); // Remove to array of currently pressed keys
	//console.log('Up: ' + upKey);
	// Check for escape press (to close open content)
	if(upKey == "escape"){
		hideByEscape();
	}
	
	// Limit keyPressed to 11 values
	keysPressed = arrayLength(keysPressed, 11);
	
	// Check for Special code
	specialCheck(keysPressed);
});

function hideByEscape(){
	var skill = document.getElementsByClassName("skill");
	for (var i = 0; i < skill.length; i++) {
		skill[i].getElementsByClassName("fullPageCover");
		firstMatch = classMatches[0];
		firstMatch.classList.add("hidden");
	}
}

// --- "Special" code ---
var specialSound = new Audio();
specialSound.src = "sound/specialSound.mp3";
var specialCombo = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a", "enter"];
function specialCheck(keys){
	//console.log(keys);
	if(JSON.stringify(keys) == JSON.stringify(specialCombo)){
		specialSound.play(); // Play button sound now
		console.log('Played special sound.');
	}
}

// --- Max code ---
var maxFestSound = new Audio();
maxFestSound.src = "sound/maxFestSound.mp3";
function MaxFest(keys){
	//console.log(keys);
	if(keys.length == 3 && keys.includes("m") && keys.includes("a") && keys.includes("x")){
		maxFestSound.play(); // Play button sound now
		console.log('Played MaxFest sound.');
	}
}

// --- Check key length ---
function arrayLength(Array, Length){
		if(Array.length > Length){
		Array = Array.slice(Array.length-Length, Array.length);
	}
	return(Array);
}
