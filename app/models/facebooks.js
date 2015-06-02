var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var FacebookSchema = new Schema({
	fb_id: { type: String, unique: true },
	app_id: String,
    client_id: String,
    secret_key: String,
	date: String,
	});
mongoose.model('Facebook', FacebookSchema);