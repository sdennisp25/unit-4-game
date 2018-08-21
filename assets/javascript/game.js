var playerChoosing = false;
var opponentChoosing = false;
var fighting = false;

var fighter1;
var fighter2;
var losers = [];
//keep track of the character selected and now once you select player 1 and player 2, if the opponent loses, push the character into the empty array and not display it.



var obiwan = {
	Life: 120,
	Attack: 20,
	Counter: 15
	};
	
var luke = {
	Life: 100,
	Attack: 15,
	Counter: 10
	};
	
var yoda = {
	Life: 80,
	Attack: 10,
	Counter: 5
	};
	
var darth = {
	Life: 150,
	Attack: 30,
	Counter: 25
	};



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
			fighter1 = obiwan;
			$(".lifeDisplay").html(obiwan.Life);
			$(".attackDisplay").html(obiwan.Attack);
			$(".counterDisplay").html(obiwan.Counter);

		}else {
			$('#obiwan').html('Obiwan');
			$('#obiwan').appendTo('.box2');
			$(".enemyDisplay").html(obiwan.Life);
			$(".enemyAttack").html(obiwan.Attack);
			$(".enemyCounter").html(obiwan.Counter);
			fighter2 = obiwan;
		}

	});


	$('#luke').on('click', function () {
		if(playerChoosing){
			$('#luke').html('Luke');
			$('#luke').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			fighter1 = luke;
			$(".lifeDisplay").html(luke.Life);
			$(".attackDisplay").html(luke.Attack);
			$(".counterDisplay").html(luke.Counter);

		}else {
			$('#luke').html('Luke');
			$('#luke').appendTo('.box2');
			$(".enemyDisplay").html(luke.Life);
			$(".enemyAttack").html(luke.Attack);
			$(".enemyCounter").html(luke.Counter);
			fighter2 = luke;
		}
	});


	$('#yoda').on('click', function () {

		if(playerChoosing){
			$('#yoda').html('Yoda');
			$('#yoda').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			fighter1 = yoda;
			$(".lifeDisplay").html(yoda.Life);
			$(".attackDisplay").html(yoda.Attack);
			$(".counterDisplay").html(yoda.Counter);

		}else {
			$('#yoda').html('Yoda');
			$('#yoda').appendTo('.box2');
			$(".enemyDisplay").html(yoda.Life);
			$(".enemyAttack").html(yoda.Attack);
			$(".enemyCounter").html(yoda.Counter);
			fighter2 = yoda;
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
			fighter1 = darth;
			$(".lifeDisplay").html(darth.Life);
			$(".attackDisplay").html(darth.Attack);
			$(".counterDisplay").html(darth.Counter);

		}else {
			$('#darth').html('Darth');
			$('#darth').appendTo('.box2');
			$(".enemyDisplay").html(darth.Life);
			$(".enemyAttack").html(darth.Attack);
			$(".enemyCounter").html(darth.Counter);
			fighter2 = darth;

		}
	});

	$(".attack").on("click", function() {
		if (fighter1) {
			fighter2.Life = fighter2.Life - fighter1.Attack;
			fighter1.Life = fighter1.Life - fighter2.Counter;
			$(".enemyDisplay").html(fighter2.Life);
			$(".lifeDisplay").html(fighter1.Life);
			console.log(fighter2.Life);
		}

		if (fighter2.Life <= 0 ){
			alert("YOU WIN YOU FILTHY ANIMAL");
		}

		if (fighter1.Life <= 0 ){
			alert("LOSER!!!");
		}
	});


});