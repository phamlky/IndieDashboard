app.factory('appData', function ($http) {
	return {
		selectApp: function (callback) {
			$http({
				method: 'GET',
				url: '/api/app/stat/list'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('selectApp error!');
			});
		},
		addApp: function (app, callback) {
			$http({
				method: 'POST',
				data: app,
				url: '/api/app/stat/create'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('create app error!');
			});
		},
		updateApp: function (app, callback) {
			$http({
				method: 'POST',
				data: app,
				url: '/api/app/stat/update'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('updateApp error!');
			});
		},
		deleteApp: function (app, callback) {
			$http({
				method: 'POST',
				data: app,
				url: '/api/app/stat/delete'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('deleteApp error!');
			});
		},
		findApp: function (appId, callback) {
			$http({
				method: 'POST',
				data: {AppId:appId},
				url: '/api/app/stat/select'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('deleteApp error!');
			});
		},
	}
});

app.factory('advData', function ($http) {
	return {
		selectAdv : function (callback) {
			$http({
				method: 'GET',
				url: '/api/app/adv/list'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('selectAdv error!');
			});
		},
		addAdv: function (app, callback) {
			$http({
				method: 'POST',
				data: app,
				url: '/api/app/adv/create'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('create app error!');
			});
		},
		findAdv: function (advId, callback) {
			$http({
				method: 'POST',
				data: {AdvId:advId},
				url: '/api/app/adv/select'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('findAdv error!');
			});
		},
		updateAdv: function (app, callback) {
			$http({
				method: 'POST',
				data: app,
				url: '/api/app/adv/update'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('updateApp error!');
			});
		},
		deleteAdv: function (advId, callback) {
			$http({
				method: 'POST',
				data: {AdvId:advId},
				url: '/api/app/adv/delete'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('deleteAdv error!');
			});
		},
	}
});

app.factory('updData', function ($http) {
	return {
		selectUpd : function (callback) {
			$http({
				method: 'GET',
				url: '/api/app/update/list'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('selectUpdate error!');
			});
		},
		addUpd: function (app, callback) {
			$http({
				method: 'POST',
				data: app,
				url: '/api/app/update/create'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('create app error!');
			});
		},
		findUpd: function (updId, callback) {
			$http({
				method: 'POST',
				data: {UpdId:updId},
				url: '/api/app/update/select'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('findUpd error!');
			});
		},
		updateUpd: function (app, callback) {
			$http({
				method: 'POST',
				data: app,
				url: '/api/app/update/update'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('updateUpd error!');
			});
		},
		deleteUpd: function (updId, callback) {
			$http({
				method: 'POST',
				data: {UpdId:updId},
				url: '/api/app/update/delete'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('deleteUpd error!');
			});
		},
	}
});

app.factory('scoData', function ($http) {
	return {
		selectSco : function (callback) {
			$http({
				method: 'GET',
				url: '/api/app/score/list'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('selectSco error!');
			});
		},
		addSco: function (sco, callback) {
			$http({
				method: 'POST',
				data: sco,
				url: '/api/app/score/create'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('create score error!');
			});
		},
		findSco: function (scoId, callback) {
			$http({
				method: 'POST',
				data: {ScoId:scoId},
				url: '/api/app/score/select'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('findSco error!');
			});
		},
		updateSco: function (sco, callback) {
			$http({
				method: 'POST',
				data: sco,
				url: '/api/app/score/update'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('updateSco error!');
			});
		},
		deleteSco: function (scoId, callback) {
			$http({
				method: 'POST',
				data: {ScoId:scoId},
				url: '/api/app/score/delete'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('deleteSco error!');
			});
		},
	}
});

app.factory('fbData', function ($http) {
	return {
		selectFb : function (callback) {
			$http({
				method: 'GET',
				url: '/api/app/facebook/list'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('selectFb error!');
			});
		},
		addFb: function (fb, callback) {
			$http({
				method: 'POST',
				data: fb,
				url: '/api/app/facebook/create'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('create fb error!');
			});
		},
		findFb: function (fbId, callback) {
			$http({
				method: 'POST',
				data: {FbId:fbId},
				url: '/api/app/facebook/select'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('findFb error!');
			});
		},
		updateFb: function (fb, callback) {
			$http({
				method: 'POST',
				data: fb,
				url: '/api/app/facebook/update'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('updateFb error!');
			});
		},
		deleteFb: function (fbId, callback) {
			$http({
				method: 'POST',
				data: {FbId:fbId},
				url: '/api/app/facebook/delete'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('deleteFb error!');
			});
		},
	}
});

app.factory('facebookData', function ($http, $q){
	return {
		getGroups : function (callback) {
			var deferred = $q.defer();
			FB.api('/me/groups'
			, function(response) {
				if (!response || response.error) {
					deferred.reject('Error occured');
				} else {
					deferred.resolve(response);
				}
			});
			return deferred.promise;
		},
		postToGroup: function (id, msg, callback) {
			var deferred = $q.defer();
			FB.api(
				"/"+id+"/feed",
				"POST",
				msg,
				function(response) {
					if (!response || response.error) {
						deferred.reject('Error occured');
					} else {
						deferred.resolve(response);
					}
			});
			return deferred.promise;
		}
	}		
});

app.factory('logoutService', function ($http){
	return {
		logout : function (callback) {
			$http({
				method: 'GET',
				url: '/logout'
			}).success(function (data, status, headers, config) {
				callback(data);
			}).error(function (data, status, headers, config) {
				alert('call logout error!');
			});
		}
	}		
});	