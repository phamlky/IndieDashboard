var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var StatisticSchema = new Schema({
    app_id: { type: String, unique: true },
	app_name: String,
	app_store: String,
    download: String,
    use: String,
	date: String
});
mongoose.model('Statistic', StatisticSchema);