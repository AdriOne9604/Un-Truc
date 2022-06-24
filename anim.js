const items = document.querySelectorAll("#mesphoto img");
const nbSlide = items.length;
const suivant = document.querySelector('#next');
const precedent = document.querySelector('#previous');

let count1 = 0;
let count2 = 2;

function slideSuivante(argument) {
	
	if(count1 < nbSlide - 3){
		items[count1].classList.remove("imgON");
		count1++
	} else {

	}

	if(count2 < nbSlide - 1){
		count2++
		items[count2].classList.add("imgON");
	} else {
		suivant.classList.remove("error");
		window.requestAnimationFrame(function(time) {
			window.requestAnimationFrame(function(time) {
      			suivant.classList.add("error");
    		});
  		});
	} 
	console.log(count1, count1 + 1, count2);
}
suivant.addEventListener("click", slideSuivante, false)

function slideBefore(argument) {

	if(count1 > 0){
		count1--;
		items[count1].classList.add("imgON");
	} else {
		precedent.classList.remove("error");
		window.requestAnimationFrame(function(time) {
			window.requestAnimationFrame(function(time) {
      			precedent.classList.add("error");
    		});
  		});
	} 

	if(count2 > 2){
		items[count2].classList.remove("imgON");
		count2--;
	} else {

	}
	console.log(count1, count1 + 1, count2);
}
precedent.addEventListener("click", slideBefore, false)



  