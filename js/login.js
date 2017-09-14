$(function() {
	$(".yes1").click(function() {
		$(".inform").fadeOut(1000, function() {
			$(".alert1").hide(1000);
			window.open("index.html","_self");
		});
	});
	$(".yes2").click(function() {
		$(".inform").fadeOut(1000, function() {
			$(".alert2").hide(1000);
		});
	});

	var $name = $("#userName1");
	var $passWord1 = $("#passWord1");
	var flag = false;
	document.onkeypress = function(ev) {
						var inputs = $("input");
						//					console.log($inputs)
						var oEvent = ev || event; //处理兼容
						if(oEvent.keyCode == 13) {
							for(var i = 0; i < inputs.length; i++) {
								if(inputs[i] == document.activeElement && flag) {
									i++;
									if(i == 5) {
										i = 0;
									}
									$(inputs[i]).focus();
								}
							}
						}
					}
	$name.keyup(function() {
		var warn1 = $name.parent();
		if(($name.val() == "") || (!(/^[a-zA-Z]{4,}$/.test($name.val())))) {
			$(warn1).next().show();
			$(warn1).addClass("actBorder");
			flag = false;
		} else {
			$(warn1).removeClass("actBorder");
			$(warn1).next().hide();
			flag = true;
		}
	});
	$passWord1.keyup(function() {
		var warn2 = $passWord1.parent();

		if($passWord1.val() != "" && (!(/^[a-zA-Z\d_]{8,}$/.test($passWord1.val())))) {
			$(warn2).next().show();
			$(warn2).addClass("actBorder");
			flag = false;
		} else {
			$(warn2).next().hide();
			$(warn2).removeClass("actBorder");
			flag = true;
		}
	});

	$(".submit1").click(function() {
		var name = $("#userName1").val();
		var passWord1 = $("#passWord1").val();
		if(flag) {
//			$("#loginForm1").submit(function() {
				$.ajax({
					type: "post",
					url: "https://api.leancloud.cn/1.1/login",
					headers: {
						//rest API 用户登陆 复制过来的头
						"Content-Type": "application/json",
						"X-LC-Id": "qywb1SyfYfvuEi4qrt3UDsGG-gzGzoHsz",
						"X-LC-Key": "L9SVvMEx2QHTPsr4EICmVTSp"
					},
					data: '{"username": "' + name + '","password":"' + passWord1 + '"}'
				}).then(function(data) {
					var userName = data['username']
					localStorage.setItem("userName",userName);
					$(".alert1").show();					
				}, function(er) {
					$(".alert2").show();
					var ret = error.showError(er.responseText);
					$(".tip").html(ret);
					$name.val("");
					$passWord1.val("");
				});
//				return false;
//			});
		}
	});

	var $phone = $("#userName2");
	var $passWord = $("#passWord2");
	var flag2 = false;
	$phone.keyup(function() {
		var warn1 = $phone.parent();
		if($phone.val() != "" && (!(/^1(3|4|5|7|8)\d{9}$/.test($phone.val())))) {
			$(warn1).next().show();
			$(warn1).addClass("actBorder");
			flag2 = false;
		} else {
			$(warn1).removeClass("actBorder");
			$(warn1).next().hide();
			flag2 = true;
		}
	});
	$passWord.keyup(function() {
		var warn2 = $passWord.parent();
		if($passWord.val() != "" && (!(/^[a-zA-Z\d_]{8,}$/.test($passWord.val())))) {
			$(warn2).next().show();
			$(warn2).addClass("actBorder");
			flag2 = false;
		} else {
			$(warn2).next().hide();
			$(warn2).removeClass("actBorder");
			flag2 = true;
		}
	});
	$(".submit2").click(function() {
		if(flag2) {
//			$("#loginForm2").submit(function() {
				//					console.log(userName);
				var phone = $("#userName2").val();
				var passWord = $("#passWord2").val();
				console.log(phone)
				$.ajax({
					type: "post",
					url: "https://api.leancloud.cn/1.1/login",
					headers: {
						//rest API 用户登陆 复制过来的头
						"Content-Type": "application/json",
						"X-LC-Id": "qywb1SyfYfvuEi4qrt3UDsGG-gzGzoHsz",
						"X-LC-Key": "L9SVvMEx2QHTPsr4EICmVTSp"
					},
					data: '{"phone": "' + phone + '","password":"' + passWord + '"}'
				}).then(function(data) {
					//						console.log(data);
					$(".alert1").show();
				}, function(er) {
					$(".alert2").show();
					var ret = error.showError(er.responseText);
					$(".tip").html(ret);
					$phone.val("");
					$passWord.val("");
				});
//				return false;
//			});
		}
	});
	$("#login_box").click(function() {
		$(".login").fadeOut(3000);
		$(".login-main").animate({
			opacity: '0',
		}, 2000);
		window.close();
	});

	var navTitle = $("#login-title h3").toArray();
	var cont = $("#login-conts form").toArray();

	navTitle.forEach(function(val, index) {
		$(navTitle[index]).click(function() {
			for(var i = 0; i < navTitle.length; i++) {
				$(navTitle[i]).removeClass("active");
				$(cont[i]).hide();
			}
			$(navTitle[index]).addClass("active")
			$(cont[index]).show();
		});
	});
});