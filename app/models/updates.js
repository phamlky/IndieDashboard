var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UpdatesSchema = new Schema({
    upd_id: String,
	app_id: String,
    upd_ver: String,
    upd_num: String,
	date:String
});
mongoose.model('Update', UpdatesSchema);