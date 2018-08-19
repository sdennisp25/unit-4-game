var playerChoosing = false;
var opponentChoosing = false;
var fighting = false;





var obiwanLife = 100;
var obiwanAttack = 20;

var luke = 100;
var yoda = 100;
var darth = 100;
// var p = $('#obiwan').position();


$(document).ready(function () {

	$("#start-game-button").on("click", function(){
		playerChoosing = true;
	})

	$('#obiwan').on('click', function () {


		if(playerChoosing){
			$('#obiwan').html('Obiwan');
			$('#obiwan').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
			
			
			
			
			
		}else {
			$('#obiwan').html('Obiwan');
			$('#obiwan').appendTo('.box2');
		}
		alert("Your life points" + obiwanLife);
	});


	$('#luke').on('click', function () {
		if(playerChoosing){
			$('#luke').html('Luke');
			$('#luke').appendTo('.box1');
			playerChoosing = false;
			opponentChoosing = true;
		}else {
			$('#luke').html('Luke');
			$('#luke').appendTo('.box2');
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
		}else {
			$('#yoda').html('Yoda');
			$('#yoda').appendTo('.box2');
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
		}else {
			$('#darth').html('Darth');
			$('#darth').appendTo('.box2');
		}
	});




});
