$(function() {
	var chouJiangUp = setInterval(function() {
		$(".shop_news_main").animate({
			marginTop: "0px"
		}).delay(1500).animate({ //delay延时行
			marginTop: "-24px"
		});
	}, 1000);

	//头部黑色条悬浮下拉效果
	$("#social").hover(function() {
		$("#social_ul").stop();
		$("#social_ul").slideDown(500);
	}, function() {
		$("#social_ul").stop();
		$("#social_ul").slideUp(500);
	});
	$("#phone").hover(function() {
		$("#phone_ul").stop();
		$("#phone_ul").slideDown(500);
	}, function() {
		$("#phone_ul").stop();		
		$("#phone_ul").slideUp(500);
	});

	//logo显示
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		if(sc > 100) {
			$(".new_header").addClass("header_fixed");
			$("#logo").find('img').attr("src", "img/Lenovo_home/b30851f2-832a-471e-8a5e-c3a6aa9ca99a_1.jpg")
		} else {
			$(".new_header").removeClass("header_fixed");
			$("#logo").find('img').attr("src", "img/Lenovo_home/0d66fb8c-f7b0-4d2c-888c-51d56f67aeab_1.jpg")
		}
	});

	$(window).load(function() {
		var html = document.querySelector("html")
		html.addEventListener("click", function(event) {
			var e = event.target;
			if(e.className == "txt") {
				$("#goodInfo").fadeOut(500);
				$(window).keydown(function(event) {
					if(event.keyCode == 13) {
						search();
					}
				});
				$(".select").slideToggle(500);
			} else {
				$("#goodInfo").fadeIn(500);
			}
		});
		$(".serch_box_img").click(function() {
			search();
		});

		function search() {
			var url = {
				'看家宝': 'Snowman.html',
				'TAB4': '商品详情.html',
				'小新潮火花银': 'Lenovo-goodsdetailHuohuayin.html',
				'百度': 'http://www.baidu.com'
			}
			var txt = $(".txt").val();
			// 如果存在改对应关系则打开，否则打开默认网址 
			window.open(url[txt] || 'index.html');
		}

	});

	//登录用户的显示

	$(window).load(function() {
		var username = localStorage.getItem("userName");
		if(username) {
			$(".top_loginbtn").css("display", "none");
			$(".usernameLi").css("display", "block");
			$(".top_downs").css("display", "block");
			$("#userName").html(username);
			$(".login_zhuce").hover(function() {
				$(".userHiddenUl").stop();
				$(".userHiddenUl").slideDown(500);
			}, function() {
				$(".userHiddenUl").stop();
				$(".userHiddenUl").slideUp(500);
			});

			$("#linkBreak").click(function() {
				localStorage.removeItem("userName");
				$(".top_loginbtn").css("display", "block");
				$(".usernameLi").css("display", "none");
				$(".top_downs").css("display", "none");
			});
		}
	});
	
	
	
	//搜索商品点击效果
	$(".select li").click(function(){
		var goods = $(this).html();
		console.log(goods);
		$("#searchTxt").val(goods);
	});
});