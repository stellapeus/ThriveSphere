$(document).ready(function() {
	$("#guidedvid").click(function(){
		$(this).next().toggle();
	});

	$(".pageLinks").click(function(){
		$(this).next().toggle();
	});
	
	$("#buttonM").click(function() {
		$("#randomM").text(movies[Math.floor(Math.random() * movies.length)]);
	});
	$("#buttonB").click(function() {
		$("#randomB").text(books[Math.floor(Math.random() * books.length)]);
	});
	
});
