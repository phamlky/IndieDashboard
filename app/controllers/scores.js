var crypto = require('crypto');
var mongoose = require('mongoose'),
    Score = mongoose.model('Score');

exports.getScores = function(req, res){
	Score.find().exec(function(err, scos){
		if(!scos){
			res.json(404, {msg:'No Score registered'});
		}
		else{
			res.json(scos);
		}
	});
};
exports.addScore = function(req, res){
	var sco = new Score({sco_id:req.body.ScoId});
	var date = new Date();
	var dateInDDMMYY  = date.getDate() + "-" + date.getMonth() + "-" + date.getYear();
	sco.set('app_id', req.body.AppId);
	sco.set('date', dateInDDMMYY);
	sco.set('sco_val1', req.body.ScoVal1);
	sco.set('sco_val2', req.body.ScoVal2);
	sco.set('sco_val3', req.body.ScoVal3);
	sco.set('sco_val4', req.body.ScoVal4);
	sco.save(function(err) {
		if (err){
		  res.json(400, {err: 'Cant create.'});
		} else {
		  res.json(sco);
		}
	});
}
exports.selectScore = function(req, res){
  Score.findOne({ sco_id: req.body.ScoId }).exec(function(err, sco) {
    if (!sco){
      res.json(404, {err: 'Score Not Found.'});
    } else {
      res.json(sco);
    }
  });
}
exports.updateScore = function(req, res){
	Score.findOne({ sco_id: req.body.sco_id }).exec(function(err, sco) {
		if (!sco){
		  res.json(404, {err: 'Score Not Found.'});
		} else {
			var date = new Date();
			var dateInDDMMYY  = date.getDate() + "-" + date.getMonth() + "-" + date.getYear();
			sco.set('app_id', req.body.AppId);
			sco.set('date', dateInDDMMYY);
			sco.set('sco_val1', req.body.ScoVal1);
			sco.set('sco_val2', req.body.ScoVal2);
			sco.set('sco_val3', req.body.ScoVal3);
			sco.set('sco_val4', req.body.ScoVal4);
			sco.save(function(err) {
				if (err){
					res.json(400, {err: 'Cant Score.'});
				} else {
					res.json(sco);
				}
			});
		}	
	});
}
exports.deleteScore = function(req, res){
	Score.remove({sco_id: req.body.ScoId}, function(err) {
		if (err){
			res.json(400, {err: 'Cant Delete.'});
		} else {
			res.json(200, {status: 'Deleted.'});
		}
	});	
}