$(function() {
	//显示配置以及商品信息
	$(".ul-box li").click(function() {
		var index = $(this).index();
		$(this).siblings().css("color", "");
		$(this).css("color", "#e2231a");
		$(".info-box").eq(index).siblings().css("display", "none");
		$(".info-box").eq(index).css("display", "block");
	});
	//商品轮播
	//点击按钮
	//左按钮
	$("#play_picture_leftbtn").click(function() {
		$(this).stop();
		var index = parseInt($("#detail_playPicture_list li[class='liActive']").attr("num"));
		if(index == 0) {
			index = 0;
		} else {
			index = index - 1;
			var left = $(".lunbo_ul").position().left;
			if(left == 0) {
				left = 0;
				$(".lunbo_ul").animate({
					"left": "0px"
				}, 500);
			} else {
				left = -520 * index;
				$(".lunbo_ul").animate({
					"left": left + "px"
				}, 500);
			}
		}
		$("#detail_playPicture_list li").eq(index).siblings().removeClass("liActive");
		$("#detail_playPicture_list li").eq(index).addClass("liActive");
	});
	//右按钮
	$("#play_picture_rightbtn").click(function() {
		$(this).stop();
		var index = parseInt($("#detail_playPicture_list li[class='liActive']").attr("num"));
		if(index == 4) {
			index = 4;
		} else {
			index = index + 1;
			var left = $(".lunbo_ul").position().left;
			if(left == -2080) {
				left = -2080;
				$(".lunbo_ul").animate({
					"left": "-2080px"
				}, 500);
			} else {
				left = -520 * index;
				$(".lunbo_ul").animate({
					"left": left + "px"
				}, 500);
			}
		}
		$("#detail_playPicture_list li").eq(index).siblings().removeClass("liActive");
		$("#detail_playPicture_list li").eq(index).addClass("liActive");
	});
	//点击小图控制大图
	$("#detail_playPicture_list li").click(function() {
		$(".lunbo_ul").stop();
		$(this).siblings().removeClass("liActive");
		$(this).addClass("liActive");
		var index = $(this).index();
		var left = index * -520;
		$(".lunbo_ul").animate({
			"left": left + "px"
		}, 500);
	});

	//滚动条显示商品图片
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		if(sc < 100) {
			$("#detail_left").removeClass("fixed");
		} else if(sc > 100 && sc < 752) {
			$("#detail_left").removeClass("absolute");
			$("#detail_left").addClass("fixed");
			$("#detail_left").css("top", "0px");

		} else if(sc > 752) {
			$("#detail_left").removeClass("fixed");
			$("#detail_left").addClass("absolute");
			$("#detail_left").css("top", "700px");
		}
	})
	//规格
	$("#container_guige .box>div").click(function() {
		if($(this).css("border-color") == "rgb(226, 35, 26)") {
			$(this).removeClass("borderShow");
		} else if($(this).css("border-color") == "rgb(201, 201, 201)") {
			$(this).siblings().removeClass("borderShow");
			$(this).addClass("borderShow");
		}
	});
	//推荐选件
	$("#div_tjxj>div").click(function() {
		var p = $(this).find(".price").html();
		p = p.replace("￥", "");
		var price = parseInt(p);
		if($(this).css("border-color") == "rgb(226, 35, 26)") {
			$(this).removeClass("borderShow");
			zongJia(-price);
		} else if($(this).css("border-color") == "rgb(201, 201, 201)") {
			$(this).siblings().removeClass("borderShow");
			$(this).addClass("borderShow");
			zongJia(price);
		}

	})
	//推荐服务
	$("#div_service>div").click(function() {
		var p = $(this).find(".service-price").html();
		p = p.replace("￥", "");
		var price = parseInt(p);
		if($(this).css("border-color") == "rgb(226, 35, 26)") {
			$(this).removeClass("borderShow");
			zongJia(-price);
		} else if($(this).css("border-color") == "rgb(201, 201, 201)") {
			$(this).siblings().removeClass("borderShow");
			$(this).addClass("borderShow");
			zongJia(price);
		}
	})
	//促销套餐
	$("#div_taocan>div").click(function() {
		if($(this).css("border-color") == "rgb(226, 35, 26)") {
			$(this).removeClass("borderShow");
		} else if($(this).css("border-color") == "rgb(201, 201, 201)") {
			$(this).siblings().removeClass("borderShow");
			$(this).addClass("borderShow");
		}
	})
	//私人定制
	$("#div_dingzhi>div").click(function() {
		if($(this).css("border-color") == "rgb(226, 35, 26)") {
			$(this).removeClass("borderShow");
		} else if($(this).css("border-color") == "rgb(201, 201, 201)") {
			$(this).siblings().removeClass("borderShow");
			$(this).addClass("borderShow");
		}
	})
	//减商品数

	$("#reduce_buy_number").click(function() {
		var num = parseInt($("#buy_number").val());
		num = num - 1;
		$("#buy_number").val(num);
		if(num == 0) {
			num = 1;
			$("#buy_number").val(num);
		}
		tongJi();
	});
	//加商品数
	$("#add_buy_number").click(function() {
		var num = parseInt($("#buy_number").val());
		num += 1;
		$("#buy_number").val(num);
		tongJi();
	});
	//总价
	function zongJia(p) {

		var winPrice = Math.round(parseInt($("#span_price").html()));
		totalPrice = winPrice + p;
		var totalPrice = Math.round(totalPrice * 100) / 100;
		var s = totalPrice.toString();
		var rs = s.indexOf('.');
		if(rs < 0) {
			rs = s.length;
			s += '.';
		}
		while(s.length <= rs + 2) {
			s += '0';
		}
		$("#span_price").html(s);
	}

	//加减获取钱数
	function tongJi() {
		var winPrice = Math.round(parseInt($("#span_price").html()));
		var num = parseInt($("#buy_number").val());
		console.log(num);
		totalPrice = 5599 * num;
		var totalPrice = Math.round(totalPrice * 100) / 100;
		var s = totalPrice.toString();
		var rs = s.indexOf('.');
		if(rs < 0) {
			rs = s.length;
			s += '.';
		}
		while(s.length <= rs + 2) {
			s += '0';
		}
		$("#span_price").html(s);
	}
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

	//分享
	$("#div_share").mouseover(function() {
		$("#div_share_a").css("display", "block");
	}).mouseout(function(){
		$("#div_share_a").css("display", "none");		
	});
});