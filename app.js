const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const test_div = document.getElementById("test");
const cub_div = document.getElementById("cub");
const culotte_div = document.getElementById("culotte");

function game() {

}

function main() {
	test_div.addEventListener("click", function() {
		game("test");
	})

	cub_div.addEventListener("click", function() {
		game("cub");
	})

	culotte_div.addEventListener("click", function() {
		game("culotte");
	})
}

main();