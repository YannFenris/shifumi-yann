let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const couche_div = document.getElementById("couche");
const cub_div = document.getElementById("cub");
const culotte_div = document.getElementById("culotte");

function getComputerChoice(){
const choices = ['couche', 'cub', 'culotte'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber]; 
}


function win(userChoice, computerChoice) {
	userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = userChoice + " gagne " + computerChoice + ". Tu gagnes! 🔥 "
document.getElementById(userChoice).classList.add('green-glow');
setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 1000);
}

function lose(userChoice, computerChoice){
	computerScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = userChoice + " perd contre " + computerChoice + ". Perdu bébé 👶 "
document.getElementById(userChoice).classList.add('red-glow');
setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 1000);
}

function draw(userChoice, computerChoice){
result_p.innerHTML = userChoice + " contre " + computerChoice + ". égalité 😱 "
document.getElementById(userChoice).classList.add('grey-glow');
setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow') }, 1000);
}

function game(userChoice) {
 const computerChoice = getComputerChoice();
 switch (userChoice + computerChoice) {
 	case "couchecub":
 	case "cubcouche":
 	case "culottecub":
 	win(userChoice, computerChoice);
 	break;
 	case "couchecub":
 	case "cubculotte":
 	case "culottecouche":
 	lose(userChoice, computerChoice);
 	break;
 	 	case "couchecouche":
 	case "cubcub":
 	case "culotteculotte":
 	draw(userChoice, computerChoice);
 	break;
 }
}


function main() {
	couche_div.addEventListener("click", function() {
		game("couche");
	})

	cub_div.addEventListener("click", function() {
		game("cub");
	})

	culotte_div.addEventListener("click", function() {
		game("culotte");
	})
}

main();