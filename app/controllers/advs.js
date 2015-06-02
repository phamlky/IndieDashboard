var crypto = require('crypto');
var mongoose = require('mongoose'),
    Adv = mongoose.model('Adv');

exports.getAdvs = function(req, res){
	Adv.find().exec(function(err, advs){
		if(!advs){
			ads.json(404, {msg:'No Ads registered'});
		}
		else{
			res.json(advs);
		}
	});
};
exports.addAdv = function(req, res){
	var adv = new Adv({adv_id:req.body.AdvId});
	var date = new Date();
	var dateInDDMMYY  = date.getDate() + "-" + date.getMonth() + "-" + date.getYear();
	adv.set('app_id', req.body.AppId);
	adv.set('date', dateInDDMMYY);
	adv.set('adv_msg', req.body.AdvMsg);
	adv.set('adv_img', req.body.AdvImg);
	adv.save(function(err) {
		if (err){
		  res.json(400, {err: 'Cant create.'});
		} else {
		  res.json(adv);
		}
	});
}
exports.selectAdv = function(req, res){
  Adv.findOne({ adv_id: req.body.AdvId }).exec(function(err, adv) {
    if (!adv){
      res.json(404, {err: 'Adv Not Found.'});
    } else {
      res.json(adv);
    }
  });
}
exports.updateAdv = function(req, res){
	Adv.findOne({ adv_id: req.body.adv_id }).exec(function(err, adv) {
		if (!adv){
		  res.json(404, {err: 'Adv Not Found.'});
		} else {
			var date = new Date();
			var dateInDDMMYY  = date.getDate() + "-" + date.getMonth() + "-" + date.getYear();
			adv.set('app_id', req.body.app_id);
			adv.set('date', dateInDDMMYY);
			adv.set('adv_msg', req.body.adv_msg);
			adv.set('adv_img', req.body.adv_img);
			adv.save(function(err) {
				if (err){
					res.json(400, {err: 'Cant update.'});
				} else {
					res.json(adv);
				}
			});
		}	
	});
}
exports.deleteAdv = function(req, res){
	Adv.remove({adv_id: req.body.AdvId}, function(err) {
		if (err){
			res.json(400, {err: 'Cant update.'});
		} else {
			res.json(200, {status: 'Deleted.'});
		}
	});	
}