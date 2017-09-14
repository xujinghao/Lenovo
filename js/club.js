$(function() {
	//社区app二维码显示
	$("#phone_appicon").mouseover(function() {
		$(".navphone_app").css("display", "block");
	}).mouseout(function() {
		$(".navphone_app").css("display", "none");
	});

	//logo变色
	var changeColor = setInterval(function() {
		var r = parseInt(Math.random() * 255);
		var g = parseInt(Math.random() * 255);
		var b = parseInt(Math.random() * 255);
		var a = parseFloat(Math.random() * 0.5) + 0.5;
		$(".pub_header_logo").css("background-color", "rgba(" + r + "," + g + "," + b + "," + a + ")");
	}, 500);
	var stopChange = setTimeout(function() {
		clearInterval(changeColor);
	}, 1500);

	//定时器轮播

	//轮播  点控制
	$(".hd li").click(function() {
		//获取点击之前白点的index
		var n = $(".hd li[class='active']").index();
		//获取点击点的index
		var i = $(this).index();
		$(".hd li").eq(i).addClass("active");
		$(".hd li").eq(i).siblings().removeClass("active");
		//控制图
		$(".banner_li").eq(n).fadeOut();
		$(".banner_li").eq(i).fadeIn();
	});

	var lunBo = setInterval(function() {
		action();
	}, 3000);

	function action() {
		var n = $(".hd li[class='active']").index();
		if(n != 4) {
			$(".hd li").removeClass("active");
			$(".banner_li").eq(n).fadeOut();
			$(".hd li").eq(++n).addClass("active");
			$(".banner_li").eq(n).fadeIn();
		} else {
			$(".hd li").removeClass("active");
			$(".hd li").eq(0).addClass("active");
			$(".banner_li").eq(n).fadeOut();
			$(".banner_li").eq(0).fadeIn();
		}
	}
	//左右箭头显示+定时器停止继续
	$(".banner").mouseover(function() {
		$(".prev").css("display", "block");
		$(".next").css("display", "block");
		clearInterval(lunBo);
	}).mouseout(function() {
		$(".prev").css("display", "none");
		$(".next").css("display", "none");
		lunBo = setInterval(function() {
			action();
		}, 3000);
	});
	//轮播  左右箭头控制
	$(".prev").click(function() {
		var n = $(".hd li[class='active']").index();
		if(n != 0) {
			$(".hd li").removeClass("active");
			$(".banner_li").eq(n).fadeOut();
			$(".hd li").eq(--n).addClass("active");
			$(".banner_li").eq(n).fadeIn();
		} else {
			$(".hd li").removeClass("active");
			$(".hd li").eq(4).addClass("active");
			$(".banner_li").eq(n).fadeOut();
			$(".banner_li").eq(4).fadeIn();
		}
	});
	$(".next").click(function() {
		//获取白点是第几个
		var n = $(".hd li[class='active']").index();
		if(n != 4) {
			$(".hd li").removeClass("active");
			$(".banner_li").eq(n).fadeOut();
			$(".hd li").eq(++n).addClass("active");
			$(".banner_li").eq(n).fadeIn();
		} else {
			$(".hd li").removeClass("active");
			$(".hd li").eq(0).addClass("active");
			$(".banner_li").eq(n).fadeOut();
			$(".banner_li").eq(0).fadeIn();
		}

	});
	//点击回到顶部
	$("#totop").click(function() {
		var sc = $(window).scrollTop();
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
	//显示右侧定位块
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		if(sc > 300) {
			$(".rightBar").css("display", "block");
		} else {
			$(".rightBar").css("display", "none");
		}
	});

	//定位块hover
	$(".page_pub_Sticktwo").mouseover(function() {
		$("#codeimg").fadeIn(500);
	}).mouseout(function() {
		$("#codeimg").slideUp(500);
	});

	//页数
	$(".count_paging").click(function() {
		$(this).siblings().removeClass("count_paginghigh");
		$(this).addClass("count_paginghigh");
		$(this).siblings().find("a").css("color", "#4A4A4A");
		$(this).find("a").css("color", "#FFFFFF");
	});
	//下一页
	$("#nextPage").click(function() {
		var n = $(".count_paging[class='count_paging count_paginghigh']").index();
		$(".count_paging").eq(n).siblings().removeClass("count_paginghigh");;
		$(".count_paging").eq(n).addClass("count_paginghigh");
		$(".count_paging").eq(n).siblings().find("a").css("color", "#4A4A4A");
		$(".count_paging").eq(n).find("a").css("color", "#FFFFFF");
	});
	$("#prevPage").click(function() {
		var n = $(".count_paging[class='count_paging count_paginghigh']").index();
		if(n == 1) {
			var m = n - 1;
		} else {
			var m = n - 2;
		}

		$(".count_paging").eq(m).siblings().removeClass("count_paginghigh");;
		$(".count_paging").eq(m).addClass("count_paginghigh");
		$(".count_paging").eq(m).siblings().find("a").css("color", "#4A4A4A");
		$(".count_paging").eq(m).find("a").css("color", "#FFFFFF");
	});

	//投票控制cookies(初步)
	/*var num = 0;
	$("#qiandao").click(function() {	
		if(document.cookie){
			console.log(1);
			alert("您今天已经签过到了呀");
		}else{
			num += 1;
			setCookie("count", num, 60);
			var timeFirst = new Date();
			var timeFirstSet = timeFirst.getTime();
		}	
		$(".pub_signin_left_p span").html(num);
	});	
	function setCookie(c_name, value, expires) {
		var exdate = new Date();
		exdate.setSeconds(exdate.getSeconds() + expires);
		document.cookie = c_name + "=" + escape(value) + ((expires == null) ? "" : ";expires=" + exdate.toGMTString())
	}*/

	//投票控制本地存储
	$("#qiandao").click(function() {
		var num = localStorage.getItem("toupiaocount");
		if(num == null) { //当本地存储不存在时		
			//			if(!timeNew) {//当点击时间不存在时设置本地存储
			var setTime = new Date();
			var setOldTime = setTime.getTime(); //获取点击的时间
			localStorage.setItem("timeOld", setOldTime); //设置上一次点击的时间
			localStorage.setItem("timeNew", setOldTime); //设置本次点击的时间
			localStorage.setItem("toupiaocount", num * 1 + 1); //设计签到的次数
			$(".pub_signin_left_p span").html(num * 1 + 1);
			//			}
		} else { //当本地存储存在时
			var setTime = new Date();
			var setFirstTime = setTime.getTime(); //获取本次点击的时间
			var timeNew = localStorage.getItem("timeNew"); //获取本地存储中相对于本次点击时，上一次点击的时间
			localStorage.setItem("timeNew", setFirstTime); //设置本次点击的时间
			localStorage.setItem("timeOld", timeNew); //改变设置上一次点击的时间	
			var timeOld = localStorage.getItem("timeOld"); //获取上一次点击的时间
			var time1 = parseInt(localStorage.getItem("timeNew")); //获取本次点击的时间并转化成数字型
			var time2 = parseInt(timeOld); //获取上一次点击的时间并转化成数字型
			var shijian = (time1 - time2) / 1000;
			console.log(time1);
			console.log(time2);
			if(shijian >= 10 && shijian <= 20) {
				$(".pub_signin_left_p span").html(num * 1 + 1);
				localStorage.setItem("toupiaocount", num * 1 + 1);
			} else if(shijian > 20) {
				localStorage.removeItem("toupiaocount");
				$(".pub_signin_left_p span").html(1);
				localStorage.setItem("toupiaocount", 1);
			} else {
				alert("您今天已经签到过了~~");
			}
		}

	});

	//登录用户的显示

	$(window).load(function() {
		var username = localStorage.getItem("userName");
		if(username) {
			$(".login_zhuce").css("display", "none");
			$(".username_info").css("display", "block");
			$("#userLogo").hover(function() {
				$(".pub_header_marking").slideDown(500);
			}, function() {
				$(".pub_header_marking").slideUp(500);
			});
			
			$("#quitLog").click(function(){
				localStorage.removeItem("userName");
				$(".login_zhuce").css("display", "block");
			$(".username_info").css("display", "none");
			});
		}

	});
});