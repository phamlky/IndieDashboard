var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ScoresSchema = new Schema({
    sco_id: String,
	app_id: String,
    sco_val1: String,
    sco_val2: String,
	sco_val3: String,
	sco_val4: String,
	date:String
});
mongoose.model('Score', ScoresSchema);