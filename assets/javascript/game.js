var playerChoosing = false;
var opponentChoosing = false;
var fighting = false;

var obiwanLife = 120;
var obiwanAttack = 20;
var obiwanCounter = 15;

var lukeLife = 100;
var lukeAttack = 15;
var lukeCounter = 10;

var yodaLife = 80;
var yodaAttack = 10;
var yodaCounter = 5;

var darthLife = 150;
var darthAttack = 30;
var darthCounter = 25;


alert("Press START to play!")

$(document).ready(function () {
	$("#start-game-button").on("click", function(){
		playerChoosing = true;
	})
	
	$("#obiwan").on('click', function () {
		
		
		if(playerChoosing){
			$('#obiwan').html('Obiwan');
			$('#obiwan').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			$(".lifeDisplay").html(obiwanLife);
			$(".attackDisplay").html(obiwanAttack);
			$(".counterDisplay").html(obiwanCounter);

		}else {
			$('#obiwan').html('Obiwan');
			$('#obiwan').appendTo('.box2');
			$(".enemyDisplay").html(obiwanLife);
			$(".enemyAttack").html(obiwanAttack);
			$(".enemyCounter").html(obiwanCounter);
		}

	});


	$('#luke').on('click', function () {
		if(playerChoosing){
			$('#luke').html('Luke');
			$('#luke').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			$(".lifeDisplay").html(lukeLife);
			$(".attackDisplay").html(lukeAttack);
			$(".counterDisplay").html(lukeCounter);

		}else {
			$('#luke').html('Luke');
			$('#luke').appendTo('.box2');
			$(".enemyDisplay").html(lukeLife);
			$(".enemyAttack").html(lukeAttack);
			$(".enemyCounter").html(lukeCounter);
		}
	});


	$('#yoda').on('click', function () {
		$('#yoda').html('Yoda');
		$('#yoda').appendTo('.box1');
		if(playerChoosing){
			$('#yoda').html('Yoda');
			$('#yoda').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			$(".lifeDisplay").html(yodaLife);
			$(".attackDisplay").html(yodaAttack);
			$(".counterDisplay").html(yodaCounter);

		}else {
			$('#yoda').html('Yoda');
			$('#yoda').appendTo('.box2');
			$(".enemyDisplay").html(yodaLife);
			$(".enemyAttack").html(yodaAttack);
			$(".enemyCounter").html(yodaCounter);
		}
	});


	$('#darth').on('click', function () {
		$('#darth').html('Darth');
		$('#darth').appendTo('.box1');
		if(playerChoosing){
			$('#darth').html('Darth');
			$('#darth').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			$(".lifeDisplay").html(darthLife);
			$(".attackDisplay").html(darthAttack);
			$(".counterDisplay").html(darthCounter);

		}else {
			$('#darth').html('Darth');
			$('#darth').appendTo('.box2');
			$(".enemyDisplay").html(darthLife);
			$(".enemyAttack").html(darthAttack);
			$(".enemyCounter").html(darthCounter);
		}
	});

	$(".attack").on("click", function() {
		if (playerChoosing === opponentChoosing) {

		}
		obiwanLife--;
		$(".lifeDisplay").html(obiwanLife);

	});


});
