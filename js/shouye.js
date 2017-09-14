$(function() {
	//轮播定时器
	var lunBo = setInterval(function() {
		action();
	}, 5000);

	function action() {
		var l = $(".xiaoxin_ul").offset().left;
		var n = $("#dot_ul li[class = 'active']").attr("num");
		if(n == 8) {
			n = 0;
			$("#dot_ul li").eq(n).addClass("active");
			$("#dot_ul li").eq(n).siblings().removeClass("active");
		} else {
			$("#dot_ul li").eq(n).addClass("active");
			$("#dot_ul li").eq(n).siblings().removeClass("active");
		}

		//控制图移动
		if(n == 8) {
			l = 0;
			$(".xiaoxin_ul").animate({
				left: l
			}, 500);

		} else {
			$(".xiaoxin_ul").animate({
				left: -(n) * 1920
			}, 500);
		}
	}

	//鼠标悬浮显示左右按钮
	$(".banner").mouseover(function() {
		$(".btnLeft").css("display", "block");
		$(".btnRight").css("display", "block");
		clearInterval(lunBo);
	});
	$(".banner").mouseout(function() {
		$(".btnLeft").css("display", "none");
		$(".btnRight").css("display", "none");
		lunBo = setInterval(function() {
			action();
		}, 5000)
	});

	//轮播图的点
	$("#dot_ul li").click(function() {
		//控制点的样式
		$(this).addClass("active");
		$(this).siblings().removeClass("active");

		//点击点 动图
		var index = $("#dot_ul>li").index(this);
		$(".xiaoxin_ul").animate({
			left: -(index) * 1920
		}, 500);
	});

	//右点击按钮
	$(".btnRight").mouseover(function() {
		clearInterval(lunBo);
	});
	$(".btnLeft").mouseover(function() {
		clearInterval(lunBo);
	});
	$(".btnRight").click(function() {
		action();
		clearInterval(lunBo);
	});
	//左点击按钮
	$(".btnLeft").click(function() {
		var l = $(".xiaoxin_ul").offset().left;
		var n = $("#dot_ul li[class = 'active']").attr("num");
		if(n == 1) {
			n = 8;
			$("#dot_ul li").eq(n - 1).addClass("active");
			$("#dot_ul li").eq(n - 1).siblings().removeClass("active");
		} else {
			n = n - 1;
			$("#dot_ul li").eq(n - 1).addClass("active");
			$("#dot_ul li").eq(n - 1).siblings().removeClass("active");
		}
		//控制移动
		if(n == 8) {
			$(".xiaoxin_ul").animate({
				left: -(n - 1) * 1920
			}, 500);
		} else {
			$(".xiaoxin_ul").animate({
				left: -(n - 1) * 1920
			}, 500);
		}
		clearInterval(lunBo);
	});

	//hover显示图片
	$(".qukuai").mouseover(function() {
		$(this).find(".cur_img").css("display", "none");
		$(this).find(".hover_img").css("display", "inline-block");
		$(this).find('p').css("color", "#6F6F6F");
	}).mouseout(function() {
		$(this).find(".cur_img").css("display", "inline-block");
		$(this).find(".hover_img").css("display", "none");
		$(this).find('p').css("color", "#9C9C9C");
	});

	$(window).load(function() {
		var left = $(".star_main ul").position().left;
		if(left == 0) {
			$(".star_box_left_btn").css("display", "none");
		} else if(left == (-2000)) {
			$(".star_box_right_btn").css("display", "none");
		}
	});
	//明星单品轮播
	$(".star_box_right_btn").click(function() {
		$(".star_box_left_btn").css("display", "block");
		var left = $(".star_main ul").position().left;
		left -= 200;
		if(left == (-2000)) {
			$(this).css("display", "none");
			$(".star_main ul").animate({
				"left": "-2000px"
			}, 500);
		} else {
			$(".star_main ul").animate({
				"left": left + "px"
			}, 500);
		}
	});
	$(".star_box_left_btn").click(function() {
		$(".star_box_right_btn").css("display", "block");
		var left = $(".star_main ul").position().left;
		left += 200;
		if(left == 0) {
			$(this).css("display", "none");
			$(".star_main ul").animate({
				"left": "0px"
			}, 500);
		} else {
			$(".star_main ul").animate({
				"left": left + "px"
			}, 500);
		}
	});

	//明星单品hover改变border颜色
	$(".star_main_li").mouseover(function() {
		$(this).css("border-top-color", "#ff0000");
	}).mouseout(function() {
		$(this).css("border-top-color", "#E6E6E6");

	});

	//控制商品图片右边浮动

	$(".pro_img1").mouseover(function() {
		$(this).animate({
			left: "50px"
		}, 500);
	}).mouseout(function() {
		$(this).animate({
			left: "37.5px"
		}, 500);
	});

	//返回顶部
	$("#totop").click(function() {
		var sc = $(window).scrollTop();
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});

	//显示右边定位块
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		var rwidth = $(window).width()
		if(sc > 550) {
			$(".rightbar").css("display", "block");
		} else {
			$(".rightbar").css("display", "none");
		}
	})

	////显示左边定位块
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		var rwidth = $(window).width()
		if(sc > 550) {
			$(".ns_floor-nav-box").css("display", "block");
		} else {
			$(".ns_floor-nav-box").css("display", "none");
		}
	})

	//左边定位块点击跳转
	$(".ns_l2").click(function() {
		var hrefId = $(this).find('a').attr("href");
		var hrefTop = $(hrefId).offset().top;
		$("html,body").animate({
			scrollTop: hrefTop-50
		}, 500);
	});

	//菜单栏
	$(".list_name").mouseover(function() {
		$(".list_name>a").css("background-color", "#FFFFFF")
		$(".list_name>a").css("border-right", "1px solid #e6e6e6")
		$(this).find('a').css("background-color", "#F7F7F7");
		$(this).find('a').css("border-right", "none");
		$(".list_cont").css("display", "none");
		$(this).children().eq(1).css("display", "block");
}).mouseout(function() {
		$(this).find('a').css("background-color", "#ffffff");
		$(this).children().eq(1).css("display", "none");
	});

	//左侧鼠标悬停效果
	$(".ns_l2").mouseover(function() {
		$(this).find('.span1').css("display", "none");
		$(this).find('.span2').addClass("hoverACtive");	
	}).mouseout(function() {
		if($(this).find('.span2').attr("class") == "span2 scollActive hoverACtive"){
			$(this).find('.span1').css("display", "none");
			$(this).find('.span2').removeClass("hoverACtive");
		}else{
			$(this).find('.span1').css("display", "block");
			$(this).find('.span2').removeClass("hoverACtive");
		}		
	});

	//悬停对应块显示
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		//				763 1139 1812 2485 3158 3831 4504 5177
		if(sc >= 736 && sc < 1139) { //0
			$(".ns_star").css("display", "block");
			$(".span1").css("display", "block");
			$(".span2").removeClass("scollActive");
			$(".a1 .ns_star").css("display", "none");
			$(".a1 .span2").addClass("scollActive");
		} else if(sc >= 1139 && sc < 1812) { //1
			$(".span1").css("display", "block");
			$(".span2").removeClass("scollActive");
			$(".a1 .ns_star").css("display", "block");
			$(".a1 .ns_star").siblings().css("display", "none");
			$(".a2 .span1").css("display", "none");
			$(".a2 .span2").addClass("scollActive");
		} else if(sc >= 1812 && sc < 2485) { //2
			$(".span1").css("display", "block");
			$(".span2").removeClass("scollActive");
			$(".a2 .span1").css("display", "block");
			$(".a2 .span2").css("display", "none");
			$(".a3 .span1").css("display", "none");
			$(".a3 .span2").addClass("scollActive");
		} else if(sc >= 2485 && sc < 3158) { //3
			$(".span1").css("display", "block");
			$(".span2").removeClass("scollActive");
			$(".a3 .span1").css("display", "block");
			$(".a3 .span2").css("display", "none");
			$(".a4 .span1").css("display", "none");
			$(".a4 .span2").addClass("scollActive");
		} else if(sc >= 3158 && sc < 3831) { //4
			$(".span1").css("display", "block");
			$(".span2").removeClass("scollActive");	
			$(".a4 .span1").css("display", "block");
			$(".a4 .span2").css("display", "none");
			$(".a5 .span1").css("display", "none");
			$(".a5 .span2").addClass("scollActive");
		} else if(sc >= 3831 && sc < 4504) { //5
			$(".span1").css("display", "block");
			$(".span2").removeClass("scollActive");
			$(".a5 .span1").css("display", "block");
			$(".a5 .span2").css("display", "none");
			$(".a6 .span1").css("display", "none");
			$(".a6 .span2").addClass("scollActive");
		} else if(sc >= 4504 && sc < 4650) { //6
			$(".span1").css("display", "block");
			$(".span2").removeClass("scollActive");
			$(".a6 .span1").css("display", "block");
			$(".a6 .span2").css("display", "none");
			$(".a7 .span1").css("display", "none");
			$(".a7 .span2").addClass("scollActive");
		} else if(sc >= 4650) { //7
			$(".span1").css("display", "block");
			$(".span2").removeClass("scollActive");
			$(".a7 .span1").css("display", "block");
			$(".a7 .span2").css("display", "none");
			$(".a8 .span1").css("display", "none");
			$(".a8 .span2").addClass("scollActive");
		}
	});
	
	
	
	
	
	
	
});