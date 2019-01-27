const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const couche_div = document.getElementById("couche");
const cub_div = document.getElementById("cub");
const culotte_div = document.getElementById("culotte");

couche_div.addEventListener("click", function() {
	console.log("tu as cliqué sur couche");
})

cub_div.addEventListener("click", function() {
	console.log("tu as cliqué sur cub");
})

culotte_div.addEventListener("click", function() {
	console.log("tu as cliqué sur culotte");
})
