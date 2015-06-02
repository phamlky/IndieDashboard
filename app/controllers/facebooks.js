var crypto = require('crypto');
var mongoose = require('mongoose'),
    Facebook = mongoose.model('Facebook');

exports.getFacebooks = function(req, res){
	Facebook.find().exec(function(err, fbs){
		if(!fbs){
			res.json(404, {msg:'No facebook registered'});
		}
		else{
			res.json(fbs);
		}
	});
};
exports.addFacebook = function(req, res){
	var fb = new Facebook({fb_id:req.body.FbId});
	var date = new Date();
	var dateInDDMMYY  = date.getDate() + "-" + date.getMonth() + "-" + date.getYear();
	fb.set('app_id', req.body.AppId);
	fb.set('date', dateInDDMMYY);
	fb.set('client_id', req.body.ClientId);
	fb.set('secret_key', req.body.SecretKey);
	fb.save(function(err) {
		if (err){
		  res.json(400, {err: 'Cant create.'});
		} else {
		  res.json(fb);
		}
	});
}
exports.selectFacebook = function(req, res){
  Facebook.findOne({ fb_id: req.body.FbId }).exec(function(err, fb) {
    if (!fb){
      res.json(404, {err: 'Facebook Not Found.'});
    } else {
      res.json(fb);
    }
  });
}
exports.updateFacebook = function(req, res){
	Facebook.findOne({ fb_id: req.body.fb_id }).exec(function(err, fb) {
		if (!fb){
		  res.json(404, {err: 'Facebook Not Found.'});
		} else {
			var date = new Date();
			var dateInDDMMYY  = date.getDate() + "-" + date.getMonth() + "-" + date.getYear();
			fb.set('app_id', req.body.app_id);
			fb.set('date', dateInDDMMYY);
			fb.set('client_id', req.body.client_id);
			fb.set('secret_key', req.body.secret_key);
			fb.save(function(err) {
				if (err){
					res.json(400, {err: 'Cant update.'});
				} else {
					res.json(fb);
				}
			});
		}	
	});
}
exports.deleteFacebook = function(req, res){
	Facebook.remove({fb_id: req.body.FbId}, function(err) {
		if (err){
			res.json(400, {err: 'Cant update.'});
		} else {
			res.json(200, {status: 'Deleted.'});
		}
	});	
}