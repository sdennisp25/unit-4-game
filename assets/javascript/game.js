





$(document).ready(function() {
	var obiwan;
	var luke;
	var yoda;
	var darth;
	
	$('#obiwan').on('click', function() {
		$('#obiwan').html('Obiwan');
			$('#obiwan').appendTo('.gamebox');
				$('#obiwan').animate({
					left: '250px',
				});
	});
	$('#luke').on('click', function() {
		$('#luke').html('Luke');
			$('#luke').appendTo('.gamebox');
				$('#luke').animate({
					right: '250px',
				});
	});
	$('#yoda').on('click', function() {
		$('#yoda').html('Yoda');
			$('#yoda').appendTo('.gamebox');
				$('#yoda').animate({
					right: '250px',
				});
	});
	$('#darth').on('click', function() {
		$('#Darth').html('Darth');
			$('#darth').appendTo('.gamebox');
				$('#darth').animate({
					right: '250px',
				});
	});



});
