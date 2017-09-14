$(function() {
	$(".yes1").click(function() {
		$(".inform").fadeOut(1000, function() {
			$(".alert1").hide(1000);
		});
	});
	$(".yes2").click(function() {
		$(".inform").fadeOut(1000, function() {
			$(".alert2").hide(1000);
		});
	});
	//判断为空与两次验证码是否一样 
	var $zhanghao = $("#zhanghao");
	var $pws = $("#pws");
	var $pws1 = $("#pws1");
	var $name = $("#name");
	//		console.log($email.val())
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
	//昵称
	$name.keyup(function() {
		if(!(/^[a-zA-Z]{4,}$/.test($name.val())) || $name.val() == "") {
			$("#span4").css("display", "block");
			flag = false;
		} else {
			$("#span4").css("display", "none");
			flag = true;
		}
	});
	$zhanghao.keyup(function() {
		//		手机号
		if($zhanghao.val() == "") {
			$("#span1 .span11").css("display", "block");
			flag = false;
		} else if(!(/^1(3|4|5|7|8)\d{9}$/.test($zhanghao.val()))) {
			$("#span1 .span11").css("display", "none");
			$("#span1 .span12").css("display", "block");
			flag = false;
		} else {
			$("#span1 .span11").css("display", "none");
			$("#span1 .span12").css("display", "none");
			flag = true;
		}
	});
	$pws.keyup(function() {
		//密码
		if($pws.val() == "") {
			$("#span2 .span21").css("display", "block");
			flag = false;
		} else if(!(/^[a-zA-Z\d_]{8,}$/.test($pws.val()))) {
			$("#span2 .span21").css("display", "none");
			$("#span2 .span22").css("display", "block");
			flag = false;
		} else {
			$("#span2 .span21").css("display", "none");
			$("#span2 .span22").css("display", "none");
			flag = true;
		}
	});
	$pws1.keyup(function() {
		//密码是否相同
		if($pws.val() != $pws1.val() || ($pws1.val() == "")) {
			$("#span3").css("display", "block");
			flag = false;
		} else {
			$("#span3").css("display", "none");
			flag = true;
		}
	});

	$(".enroll_btn").click(function() {
		console.log(flag)
		if(flag) {
			//			$("#regForm").submit(function() {
			var phone = $("#zhanghao").val();
			var passWord = $("#pws").val();
			var userName = $("#name").val();
			console.log(passWord);
			console.log(userName);
			$.ajax({
				type: "post",
				url: "https://api.leancloud.cn/1.1/users",
				headers: {
					//							rest API 用户注册 复制过来的头
					"X-LC-Id": "qywb1SyfYfvuEi4qrt3UDsGG-gzGzoHsz",
					"X-LC-Key": "L9SVvMEx2QHTPsr4EICmVTSp",
					"Content-Type": "application/json"
				},
				data: '{"username": "' + userName + '","password":"' + passWord + '","phone":"' + phone + '"}'
			}).then(function(data) {
				//						console.log(data);
				$(".alert1").show();

			}, function(er) {
				$(".alert2").show();
				var ret = error.showError(er.responseText);
				$(".tip").html(ret);
				$name.val("");
				$pws.val("");
				$pws1.val("");
				$zhanghao.val("");
				//						console.log(er);
			});
			//				return false;
			//			});c
		} else {
			alert("请按要求填写信息")
		}
	});

	//关闭
	$(".guanbi").click(function() {
		$("#logo").css("display", "none");
		$("#span1").css("display", "none");
		$("#span2").css("display", "none");
		$("#span3").css("display", "none");
		$("#span4").css("display", "none");
		$("#span5").css("display", "none");
		window.close();
	});

});