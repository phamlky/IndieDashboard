var crypto = require('crypto');
var mongoose = require('mongoose'),
    Update = mongoose.model('Update');

exports.getUpdates = function(req, res){
	Update.find().exec(function(err, upds){
		if(!upds){
			res.json(404, {msg:'No Ads registered'});
		}
		else{
			res.json(upds);
		}
	});
};
exports.addUpdate = function(req, res){
	var upd = new Update({upd_id:req.body.UpdId});
	var date = new Date();
	var dateInDDMMYY  = date.getDate() + "-" + date.getMonth() + "-" + date.getYear();
	upd.set('app_id', req.body.AppId);
	upd.set('date', dateInDDMMYY);
	upd.set('upd_ver', req.body.UpdVer);
	upd.set('upd_num', req.body.UpdNum);
	upd.save(function(err) {
		if (err){
		  res.json(400, {err: 'Cant create.'});
		} else {
		  res.json(upd);
		}
	});
}
exports.selectUpdate = function(req, res){
  Update.findOne({ upd_id: req.body.UpdId }).exec(function(err, upd) {
    if (!upd){
      res.json(404, {err: 'Update Not Found.'});
    } else {
      res.json(upd);
    }
  });
}
exports.updateUpdate = function(req, res){
	Update.findOne({ upd_id: req.body.upd_id }).exec(function(err, upd) {
		if (!upd){
		  res.json(404, {err: 'Update Not Found.'});
		} else {
			var date = new Date();
			var dateInDDMMYY  = date.getDate() + "-" + date.getMonth() + "-" + date.getYear();
			upd.set('app_id', req.body.app_id);
			upd.set('date', dateInDDMMYY);
			upd.set('upd_ver', req.body.upd_ver);
			upd.set('upd_num', req.body.upd_num);
			upd.save(function(err) {
				if (err){
					res.json(400, {err: 'Cant update.'});
				} else {
					res.json(upd);
				}
			});
		}	
	});
}
exports.deleteUpdate = function(req, res){
	Update.remove({upd_id: req.body.UpdId}, function(err) {
		if (err){
			res.json(400, {err: 'Cant update.'});
		} else {
			res.json(200, {status: 'Deleted.'});
		}
	});	
}