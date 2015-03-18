$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("BH1I1vCvsdHgbiH1WwWA2mwDA02hhUrxRDLWlUAz", "zF6JkAWp214YjqaGIqH6DKuZZgXpld9gcXTKUsuI");

 
	$('.form-signin').on('submit', function(e) {
 
		// Prevent Default Submit Event
		e.preventDefault();
	 
		// Get data from the form and put them into variables
		var data = $(this).serializeArray(),
			username = data[0].value,
			password = data[1].value;
	 
		// Call Parse Login function with those variables
		Parse.User.logIn(username, password, {
			// If the username and password matches
			success: function(user) {
				alert('Welcome!');
			},
			
			// If there is an error
			error: function(user, error) {
				alert("Incorrenct username and password");
			}
		});
	 
	});
});
