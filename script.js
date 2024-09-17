$(document).ready(function() {
	$("#guidedvid").click(function(){
		$(this).next().toggle();
	});
<<<<<<< HEAD
	$(".pageLinks").click(function(){
		$(this).next().toggle();
	});
	
	$("#buttonM").click(function() {
		$("#randomM").text(movies[Math.floor(Math.random() * movies.length)]);
	});
	$("#buttonB").click(function() {
		$("#randomB").text(books[Math.floor(Math.random() * books.length)]);
	});
=======
	
>>>>>>> 5cb675c4bd8368dfbc6cf517e2785ef0bbd8a361
});
