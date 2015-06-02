var crypto = require('crypto');
var express = require('express');

module.exports = function(app) {
var users = require('./controllers/users');
var statistics = require('./controllers/statistics');
var advs = require('./controllers/advs');
var updates = require('./controllers/updates');
var scores = require('./controllers/scores');
var facebooks = require('./controllers/facebooks');

app.get('/', function(req, res){
	if (req.session.user) {
		res.render('home', {username: req.session.username,
						   msg:req.session.msg});
	} else {
		req.session.msg = 'Access denied!';
		res.redirect('/login');
	}
});
app.all('/Panel/*', function(req, res) {
	if (req.session.user) {
		res.sendfile('app/views/home.html');
	} else {
		res.redirect('/login');
	}
});


app.get('/signup', function(req, res){
	if(req.session.user){
		res.redirect('/');
	}
	res.render('signup', {msg:req.session.msg});
});

app.get('/login',  function(req, res){
	if(req.session.user){
	  res.redirect('/');
	}
	res.render('login', {msg:req.session.msg});
});

app.get('/logout', function(req, res){
	req.session.destroy(function(){
	  res.redirect('/login');
	});
});

app.post('/signup', users.signup);
app.post('/user/update', users.updateUser);
app.post('/user/delete', users.deleteUser);
app.post('/login', users.login);
app.get('/user/profile', users.getUserProfile);

app.get('/api/app/stat/list', statistics.getApp);
app.post('/api/app/stat/create', statistics.addApp);
app.post('/api/app/stat/select', statistics.selectApp);
app.post('/api/app/stat/update', statistics.updateApp);
app.post('/api/app/stat/delete', statistics.deleteApp);

app.get('/api/app/adv/list', advs.getAdvs);
app.post('/api/app/adv/create', advs.addAdv);
app.post('/api/app/adv/select', advs.selectAdv);
app.post('/api/app/adv/update', advs.updateAdv);
app.post('/api/app/adv/delete', advs.deleteAdv);

app.get('/api/app/update/list', updates.getUpdates);
app.post('/api/app/update/create', updates.addUpdate);
app.post('/api/app/update/select', updates.selectUpdate);
app.post('/api/app/update/update', updates.updateUpdate);
app.post('/api/app/update/delete', updates.deleteUpdate);

app.get('/api/app/score/list', scores.getScores);
app.post('/api/app/score/create', scores.addScore);
app.post('/api/app/score/select', scores.selectScore);
app.post('/api/app/score/update', scores.updateScore);
app.post('/api/app/score/delete', scores.deleteScore);

app.get('/api/app/facebook/list', facebooks.getFacebooks);
app.post('/api/app/facebook/create', facebooks.addFacebook);
app.post('/api/app/facebook/select', facebooks.selectFacebook);
app.post('/api/app/facebook/update', facebooks.updateFacebook);
app.post('/api/app/facebook/delete', facebooks.deleteFacebook);  
}