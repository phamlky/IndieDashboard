
app.controller('AppController', function ($rootScope, $scope, $location, appData) {
	$rootScope.stores = [{value:'applestore', name:'Apple Store'}, 
			{value:'googleplay', name:'Google Play'},
			{value:'windowsphone', name:'Windows Phone Store'},
			{value:'windows', name:'Windows Store'}
			];
	appData.selectApp(function (data) {
		if (data) {
			$rootScope.apps = data;
		} else {
			alert(data);
		}
	});

	$scope.edit = function (appId) {
		$location.path('/Panel/Stat/Edit/' + appId);
	}

	$scope.create = function () {
		$location.path('/Panel/Stat/Create');
	}
});

app.controller('AppCreateController', function ($rootScope, $scope, $location, appData) {
	$scope.app = {
		AppId: '',
		AppName: ''
	}

	$scope.create = function () {
		appData.addApp($scope.app, function (data) {
			if (data) {
				$location.path('/Panel/Stat');
			} else {
				alert(data);
			}
		});
	}
});

app.controller('AppEditController', function ($rootScope, $scope, $location, $routeParams, appData) {

	appData.findApp($routeParams.appId, function (data) {
		if (data) {
			$scope.app = data;
		} else {
			alert($scope.Message);
			$location.path('/Panel/Stat');
		}
	});

	$scope.update = function () {
		appData.updateApp($scope.app, function (data) {
			if (data) {
				$location.path('/Panel/Stat');
			} else {
				alert(data.Message);
			}
		});
	}
	$scope.delete = function () {
		appData.deleteApp($scope.app, function (data) {
			if(data) {
				$location.path('/Panel/Stat');
			} else {
				alert(data.Message);
			}
		});
	}
});

app.controller('AdvController', function ($rootScope, $scope, $location, advData) {

	advData.selectAdv(function (data) {
		if (data) {
			$scope.advs = data;
		} else {
			alert(data);
		}
	});

	$scope.edit = function (advId) {
		$location.path('/Panel/Adv/Edit/' + advId);
	}

	$scope.create = function () {
		$location.path('/Panel/Adv/Create');
	}
	
	$scope.delete = function (advId) {
		advData.deleteAdv(advId, function (data) {
			if(data) {
				advData.selectAdv(function (data) {
					if (data) {
						$scope.advs = data;
					} else {
						alert(data);
					}
				});
			} else {
				alert(data.Message);
			}
		});		
	}
});

app.controller('AdvCreateController', function ($rootScope, $scope, $location, advData) {
	$scope.app = {
		AppId: '',
		AdvId: '',
		AdvMsg: '',
		AdvImg: ''
	}

	$scope.create = function () {
		advData.addAdv($scope.adv, function (data) {
			if (data) {
				$location.path('/Panel/Adv');
			} else {
				alert(data);
			}
		});
	}
});

app.controller('AdvEditController', function ($rootScope, $scope, $location, $routeParams, advData) {

	advData.findAdv($routeParams.advId, function (data) {
		if (data) {
			$scope.adv = data;
		} else {
			alert($scope.Message);
			$location.path('/Panel/Stat');
		}
	});
	
	$scope.update = function () {
		advData.updateAdv($scope.adv, function (data) {
			if (data) {
				$location.path('/Panel/Adv');
			} else {
				alert(data.Message);
			}
		});
	}
});	

app.controller('UpdateController', function ($rootScope, $scope, $location, updData) {

	updData.selectUpd(function (data) {
		if (data) {
			$scope.upds = data;
		} else {
			alert(data);
		}
	});

	$scope.edit = function (updId) {
		$location.path('/Panel/Update/Edit/' + updId);
	}

	$scope.create = function () {
		$location.path('/Panel/Update/Create');
	}
	
	$scope.delete = function (updId) {
		updData.deleteUpd(updId, function (data) {
			if(data) {
				updData.selectUpd(function (data) {
					if (data) {
						$scope.upds = data;
					} else {
						alert(data);
					}
				});
			} else {
				alert(data);
			}
		});		
	}
});

app.controller('UpdateCreateController', function ($rootScope, $scope, $location, updData) {
	$scope.app = {
		AppId: '',
		UpdId: '',
		UpdVer: '',
		UpdNum: ''
	}

	$scope.create = function () {
		updData.addUpd($scope.upd, function (data) {
			if (data) {
				$location.path('/Panel/Update');
			} else {
				alert(data);
			}
		});
	}
});

app.controller('ScoreController', function ($rootScope, $scope, $location, scoData) {

	scoData.selectSco(function (data) {
		if (data) {
			$scope.scos = data;
		} else {
			alert(data);
		}
	});

	$scope.edit = function (scoId) {
		$location.path('/Panel/Score/Edit/' + scoId);
	}

	$scope.create = function () {
		$location.path('/Panel/Score/Create');
	}
	
	$scope.delete = function (scoId) {
		scoData.deleteSco(scoId, function (data) {
			if(data) {
				scoData.selectSco(function (data) {
					if (data) {
						$scope.scos = data;
					} else {
						alert(data);
					}
				});
			} else {
				alert(data);
			}
		});		
	}
});

app.controller('ScoreCreateController', function ($rootScope, $scope, $location, scoData) {

	$scope.create = function () {
		scoData.addSco($scope.sco, function (data) {
			if (data) {
				$location.path('/Panel/Score');
			} else {
				alert(data);
			}
		});
	}
});

app.controller('FacebookController', function ($rootScope, $scope, $location, fbData, facebook) {
	fbData.selectFb(function (data) {
		if (data) {
			$scope.fbs = data;
		} else {
			alert(data);
		}
	});	
	
	$scope.edit = function (fbId) {
		$location.path('/Panel/Social/Facebook/Edit/' + fbId);
	}

	$scope.create = function () {
		$location.path('/Panel/Social/Facebook/Create');
	}
	
	$scope.delete = function (fbId) {
		fbData.deleteFb(fbId, function (data) {
			if(data) {
				fbData.selectFb(function (data) {
					if (data) {
						$scope.fbs = data;
					} else {
						alert(data);
					}
				});
			} else {
				alert(data.Message);
			}
		});		
	}
	$scope.post = function (fbId) {

		$location.path('/Panel/Social/Facebook/Post/' + fbId);
	}
});

app.controller('FacebookCreateController', function ($rootScope, $scope, $location, fbData) {

	$scope.create = function () {
		fbData.addFb($scope.fb, function (data) {
			if (data) {
				$location.path('/Panel/Social/Facebook');
			} else {
				alert(data);
			}
		});
	}
});

app.controller('FacebookEditController', function ($rootScope, $scope, $location, $routeParams, fbData) {

	fbData.findFb($routeParams.fbId, function (data) {
		if (data) {
			$scope.fb = data;
		} else {
			alert($scope.Message);
			$location.path('/Panel/Social/Facebook');
		}
	});
	
	$scope.update = function () {
		fbData.updateFb($scope.fb, function (data) {
			if (data) {
				$location.path('/Panel/Social/Facebook');
			} else {
				alert(data.Message);
			}
		});
	}
});	

app.controller('FacebookPostController', function ($rootScope, $scope, $location, $routeParams, fbData, facebook, facebookData) {
	fbData.findFb($routeParams.fbId, function (data) {
			if (data) {
				$scope.fb = data;
			} else {
				alert($scope.Message);
				$location.path('/Panel/Social/Facebook');
			}
	});	
	
	$rootScope.$on ('fb.auth.authResponseChange', function (event, response) {
		if (response.status == 'connected') {
			facebookData.getGroups().then(function(response) {
				$scope.groups = response;
			});
		} else {
		}
	});	

	$scope.post = function () {
		for(var i=0; i<$scope.groups.data.length; i++){
			if($scope.groups.data[i].IsSend === true){
				facebookData.postToGroup($scope.groups.data[i].id, $scope.fbPost).then(function(response) {
				$location.path('/Panel/Social/Facebook');
			});
			}
		}

	}
	
	$scope.fetch = function () {	
		FB.login(function(response) {
			console.log("Login OK");
		}, {
			scope: 'public_profile, user_groups, publish_actions, user_managed_groups', 
			return_scopes: true
		});
	}
});	

app.controller('LogoutController', function ($rootScope, $scope, $location, $routeParams, logoutService) {
	logoutService.logout(function (data) {
			if (data) {
				$location.path('/login');
			} else {
				alert($scope.Message);
				$location.path('/login');
	}}
	);	
});	