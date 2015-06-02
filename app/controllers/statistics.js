var mongoose = require('mongoose'),
    Stat = mongoose.model('Statistic');
	
exports.getApp = function(req, res){
	Stat.find().exec(function(err, stats){
		if(!stats){
			res.json(404, {msg:'No App registered'});
		}
		else{
			res.json(stats);
		}
	});
};
exports.addApp = function(req, res){
	var app = new Stat({app_id:req.body.AppId});
	var date = new Date();
	var dateInDDMMYY  = date.getDate() + "-" + date.getMonth() + "-" + date.getYear();
	app.set('app_name', req.body.AppName);
	app.set('app_store', req.body.AppStore);
	app.set('date', dateInDDMMYY);
	app.save(function(err) {
		if (err){
		  res.json(400, {err: 'Cant create.'});
		} else {
		  res.json(app);
		}
	});
}
exports.editApp = function(req, res){
	Stat.findOne({ app_id: req.body.AppId }).exec(function(err, app) {
    if (!app){
      res.json(404, {err: 'App Not Found.'});
    } else {
      res.json(app);
    }
  });
}
exports.selectApp = function(req, res){
	Stat.findOne({ app_id: req.body.AppId }).exec(function(err, app) {
    if (!app){
      res.json(404, {err: 'App Not Found.'});
    } else {
      res.json(app);
    }
  });
}
exports.updateApp = function(req, res){
	Stat.findOne({ app_id: req.body.app_id }).exec(function(err, app) {
		if (!app){
		  res.json(404, {err: 'App Not Found.'});
		} else {
			var date = new Date();
			var dateInDDMMYY  = date.getDate() + "-" + date.getMonth() + "-" + date.getYear();
			app.set('app_name', req.body.app_name);
			app.set('app_store', req.body.app_store);
			app.set('date', dateInDDMMYY);
			app.save(function(err) {
				if (err){
					res.json(400, {err: 'Cant update.'});
				} else {
					res.json(app);
				}
			});
		}	
	});
}
exports.deleteApp = function(req, res){
	Stat.remove({app_id: req.body.app_id}, function(err) {
		if (err){
			res.json(400, {err: 'Cant update.'});
		} else {
			res.json(200, {status: 'Deleted.'});
		}
	});	
}