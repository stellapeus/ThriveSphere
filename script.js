const movies = ["The Godfather","My Little Pony", "Barbie", "Mulan", "Alien", "Scream", "Avatar", "2001: A Space Odyssey", "Fried Green Tomatoes", "Shrek", "How to Train Your Dragon","Matilda","Iron Man","Baby Driver","Annie", "Shawshank Redemption","Star Wars"];
const books = ["The Hunger Games", "Percy Jackson", "Harry Potter", "The Color Purple", "Animal Farm", "Twilight", "I'm Glad My Mom Died", "A Dog's Purpose", "It Ends With Us", "Anne of Green Gables", "The Notebook", "Pride & Prejudice", "Coraline", "Pet Semetary", "It"];
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
