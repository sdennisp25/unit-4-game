
var obiwanLife = 100;
var obiwanAttack = 20;

var luke = 100;
var yoda = 100;
var darth = 100;
var p = $('#obiwan').position();


$(document).ready(function () {

	$('#obiwan').on('click', function () {
		$('#obiwan').html('Obiwan');
		$('#obiwan').appendTo('.box1');
		// document.getElementById('obiwan') = obiwan;
	});
	$('#luke').on('click', function () {
		$('#luke').html('Luke');
		$('#luke').appendTo('.box1');

	});
	$('#yoda').on('click', function () {
		$('#yoda').html('Yoda');
		$('#yoda').appendTo('.box1');

	});
	$('#darth').on('click', function () {
		$('#Darth').html('Darth');
		$('#darth').appendTo('.box1');
		
	});




});
