// Eléments sur lequels on va travailler
const keys = document.querySelectorAll(".key");

// On attend que la transition css soit fini pour lancer une fonction
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

// Logique du code
function playSound(e) {
	// Eléments sur lequels on va travailler en fonction de si le e.keyCode a été defini dasn le html
	const audio = document.querySelector(`audio[data-key="${ e.keyCode }"]`);
	const key = document.querySelector(`.key[data-key="${ e.keyCode }"]`);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play()
	key.classList.add("playing");
}

function removeTransition(e) {
	if(e.propertyName != "transform") return;
	this.classList.remove("playing")
}

// On écoute les touches du clavier si une touche est préssé on lance la fonction playSound
window.addEventListener('keydown', playSound);