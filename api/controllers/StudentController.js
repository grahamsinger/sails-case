/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	students: function(req, res) {
		Student.find(function(err, students) {
			if (err) {
				return res.serverError(err);
			}
			return res.view('students', {
				students: students
			});
		});
	}
};
