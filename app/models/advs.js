var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var AdvsSchema = new Schema({
    app_id: String,
	adv_id: String,
    adv_msg: String,
    adv_img: String,
	date:String
});
mongoose.model('Adv', AdvsSchema);