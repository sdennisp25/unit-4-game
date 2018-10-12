// conditions set before the game begins
var playerChoosing = false;
var opponentChoosing = false;
var fighting = false;
var fighter1; // keeps track of fighter 1
var fighter2; // keeps track of fighter 2

var obiwan = { //object for Obiwan
	Life: 120,
	Attack: 20,
	Counter: 15
};

var luke = { // object for Luke
	Life: 100,
	Attack: 15,
	Counter: 10
};

var yoda = { //object for Yoda
	Life: 80,
	Attack: 10,
	Counter: 5
};

var darth = { //object for Darth
	Life: 150,
	Attack: 30,
	Counter: 25
};

alert("Press START to play!")

$(document).ready(function () {
	$("#start-game-button").on("click", function () {
		playerChoosing = true;
	})

	// if Obiwan is chosen, everyone else is the enemy
	$("#obiwan").on('click', function () {
		if (playerChoosing) {
			$('#obiwan').html('Obiwan');
			$('#obiwan').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			fighter1 = obiwan;
			$(".lifeDisplay").html(obiwan.Life);
			$(".attackDisplay").html(obiwan.Attack);
			$(".counterDisplay").html(obiwan.Counter);

		} else if (opponentChoosing) {
			opponentChoosing = false;
			fighting = true;
			$('#obiwan').html('Obiwan');
			$('#obiwan').appendTo('.box2');
			$(".enemyDisplay").html(obiwan.Life);
			$(".enemyAttack").html(obiwan.Attack);
			$(".enemyCounter").html(obiwan.Counter);
			fighter2 = obiwan;
		}

	});

	// if Luke is chosen, everyone else is the enemy
	$('#luke').on('click', function () {
		if (playerChoosing) {
			$('#luke').html('Luke');
			$('#luke').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			fighter1 = luke;
			$(".lifeDisplay").html(luke.Life);
			$(".attackDisplay").html(luke.Attack);
			$(".counterDisplay").html(luke.Counter);

		} else if (opponentChoosing) {
			opponentChoosing = false;
			fighting = true;
			$('#luke').html('Luke');
			$('#luke').appendTo('.box2');
			$(".enemyDisplay").html(luke.Life);
			$(".enemyAttack").html(luke.Attack);
			$(".enemyCounter").html(luke.Counter);
			fighter2 = luke;
		}
	});

	// if Yoda is chosen, everyone else is the enemy
	$('#yoda').on('click', function () {
		if (playerChoosing) {
			$('#yoda').html('Yoda');
			$('#yoda').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			fighter1 = yoda;
			$(".lifeDisplay").html(yoda.Life);
			$(".attackDisplay").html(yoda.Attack);
			$(".counterDisplay").html(yoda.Counter);

		} else if (opponentChoosing) {
			opponentChoosing = false;
			fighting = true;
			$('#yoda').html('Yoda');
			$('#yoda').appendTo('.box2');
			$(".enemyDisplay").html(yoda.Life);
			$(".enemyAttack").html(yoda.Attack);
			$(".enemyCounter").html(yoda.Counter);
			fighter2 = yoda;
		}
	});

	// if Darth is chosen, everyone else is the enemy
	$('#darth').on('click', function () {
		if (playerChoosing) {
			$('#darth').html('Darth');
			$('#darth').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			fighter1 = darth;
			$(".lifeDisplay").html(darth.Life);
			$(".attackDisplay").html(darth.Attack);
			$(".counterDisplay").html(darth.Counter);

		} else if (opponentChoosing) {
			opponentChoosing = false;
			fighting = true;
			$('#darth').html('Darth');
			$('#darth').appendTo('.box2');
			$(".enemyDisplay").html(darth.Life);
			$(".enemyAttack").html(darth.Attack);
			$(".enemyCounter").html(darth.Counter);
			fighter2 = darth;

		}
	});

	// Once fighter 1 and 2 are chosen, keep track of the attack/life of both
	$(".attack").on("click", function () {
		if (fighter1) {
			fighter2.Life = fighter2.Life - fighter1.Attack;
			fighter1.Life = fighter1.Life - fighter2.Counter;
			$(".enemyDisplay").html(fighter2.Life);
			$(".lifeDisplay").html(fighter1.Life);
			console.log(fighter2.Life);
		}
		// Conditions set, enemy life is <0 then you WIN, else LOSE
		if (fighter2.Life <= 0) {
			alert("YOU WIN");
			// $(".box2").empty();
			$("opponentChoosing").hide();
			// $(".box2").hide()
			$(".box2").html("<h3>Your Opponent</h3>");
			fighter = false;
			opponentChoosing = true;
		}

		if (fighter1.Life <= 0) {
			alert("LOSER!!!");
		}

	});

	$("#resetGame").on("click", function () {
		playerChoosing = true;
		opponentChoosing = false;
		$('#obiwan').appendTo('.characters');
		$('#luke').appendTo('.characters');
		$('#yoda').appendTo('.characters');
		$('#darth').appendTo('.characters');
	});
});

