//var StudentController = require("../api/controllers/StudentController");

$("#new-student-btn").on("click", function(evt) {
	$('#new-student-name').show();

	$('#new-student-name').on("keyup", function(evt) {
		if (evt.keyCode === 13) {
			console.log("We should create a new student with the name: " + evt.target.value);
			io.socket.post("/student?name=" + evt.target.value.trim(), function(res) {
				console.log("response: " + res);
			});
		}
	});
});
