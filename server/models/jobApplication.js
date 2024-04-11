const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
	company: {
		type: String,
		required: true
	},
	position: {
		type: String,
		required: true
	},
	dateApplied: {
		type: Date,
		required: true
	},
	jobType: {
		type: String,
		enum: ['Full-time', 'Part-time', 'Internship']
	},
	jobStatus: {
		type: String,
		enum: ['Applied', 'Pending', 'Interviewing', 'Hired', 'Rejected']
	},
	userId: {
		type: mongoose.Schema.type.ObjectId,
		ref: 'User'
	}
});

const JobApplication = mongoose.model('JobApplication', JobApplicationSchema);

export default JobApplication;