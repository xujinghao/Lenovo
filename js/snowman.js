$(function() {
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if(top > 500) {
			$("#rightbar").show();
		} else {
			$("#rightbar").hide();
		}

	});
	$("#totop").click(function() {
		var top = $(window).scrollTop();
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
	//变量
	var contents = $("#contents").children();
	var smallImgs1 = $("#imgSmall1 a").children();
	var bigImg1 = $("#imgBig1").children();
	var smallImgs2 = $("#imgSmall2 a").children();
	var bigImg2 = $("#imgBig2").children();
	var next1 = $(".next1");
	var next2 = $(".next2");
	var prev1 = $(".prev1");
	var prev2 = $(".prev2");
	var m = 0;
	var n = 0;
	var i = $("#amount").val();
	var tab1 = $("#tab1").children();
	var tab2 = $("#tab2").children();
	var cont1 = $(".content1").children();
	var cont2 = $(".content2").children();
	var img = $(".detail_info_fl").children();
	//				函数调用
	shift(next1, prev1, smallImgs1, bigImg1, m);
	shift(next2, prev2, smallImgs2, bigImg2, n);

	//				左侧商品图切换

	function shift(next, pre, smallImgs, bigImg, a) {

		//				点击小图切换大图
		for(var i = 0; i < smallImgs.length; i++) {
			smallImgs[i].index = i;
			$(smallImgs[i]).click(function() {
				for(var i = 0; i < smallImgs.length; i++) {
					$(smallImgs[i]).removeClass("smallImgPitch");
					$(bigImg[i]).css("opacity", "0");
				}
				a = this.index;
				//							console.log(a);
				$(smallImgs[a]).addClass("smallImgPitch");
				$(bigImg[a]).css("opacity", "1");
			})
		}
		//	切换按钮

		//右
		next.click(function() {
			for(var i = 0; i < smallImgs.length; i++) {
				smallImgs[i].index = i;
				for(var i = 0; i < smallImgs.length; i++) {
					$(smallImgs[i]).removeClass("smallImgPitch");
					$(bigImg[i]).css("opacity", "0");
				}
				a++;
				if(a < smallImgs.length) {
					next.css("cursor", "pointer");
				} else {
					a = smallImgs.length - 1;
					next.css("cursor", "default");
				}
				$(smallImgs[a]).addClass("smallImgPitch");
				$(bigImg[a]).css("opacity", "1");
			}
		});
		//左
		pre.click(function() {
			for(var i = 0; i < smallImgs.length; i++) {
				smallImgs[i].index = i;
				for(var i = 0; i < smallImgs.length; i++) {
					$(smallImgs[i]).removeClass("smallImgPitch");
					$(bigImg[i]).css("opacity", "0");
				}
				a--;
				if(a > 0) {
					pre.css("cursor", "pointer");
				} else {
					a = 0;
					pre.css("cursor", "default");
				}
				$(smallImgs[a]).addClass("smallImgPitch");
				$(bigImg[a]).css("opacity", "1");
			}
		})
	}
	//				右侧商品分类切换
	//				显示第二个商品
	$("#good2").click(function() {
		$("html title").html($(this).html());
		$("#good-name").html($(this).html());
		$(this).prev().removeClass("active");
		$(this).addClass("active");
		$("#tab1").hide();
		$("#tab2").show();
		$(contents[1]).show();
		$(contents[0]).hide();
		$(img[1]).show();
		$(img[0]).hide();
		$(".div1").hide();
		$(".div2").show();
		$("#amount").val(1);
		$("#stock").css("color", "black");
		$("#stock").html("可购买");
		$(".span").html("商品编号：31071372");
	});
	//				显示第一个商品
	$("#good1").click(function() {
		$("html title").html($(this).html());
		$("#good-name").html($(this).html());
		$(this).next().removeClass("active");
		$(this).addClass("active");
		$("#tab2").hide();
		$("#tab1").show();
		$(contents[0]).show();
		$(contents[1]).hide();
		$(img[1]).hide();
		$(img[0]).show();
		$(".div2").hide();
		$(".div1").show();
		$("#amount").val(1);
		$("#stock").css("color", "black");
		$("#stock").html("可购买");
		$(".span").html("商品编号：31074017");

	});

	//				显示隐藏
	function vary(share, sharebox) {
		share.mouseover(function() {
			sharebox.show();
		});
		sharebox.mouseleave(function() {
			sharebox.hide();
		})
	}

	function vary1(share, sharebox) {
		share.mouseover(function() {
			sharebox.show();
		}).mouseleave(function() {
			sharebox.hide();
		});
	}
	//分享
	vary($("#share"), $(".share_box"));
	vary1($(".myicon_hotline"), $(".rightbar_show_hotline"));
	vary1($(".myicon_ask"), $(".rightbar_show_ask"));
	//				右侧商品数量选择

	//				加
	$("#plus").click(function() {
		var i = $("#amount").val();
		i++;
		$("#stock").css("color", "black")
		if(i > 5) {
			i = 5;
			$("#stock").html("最多购5件")
			$("#stock").css("color", "red")
		} else {
			$("#stock").html("可购买");
		}
		$("#amount").val(i);
	});
	//				减
	$("#nimus").click(function() {
		var i = $("#amount").val();
		i--;
		$("#stock").css("color", "black");
		if(i < 1) {
			i = 1;
			$("#stock").html("最少购1件");
			$("#stock").css("color", "red");
		} else {
			$("#stock").html("可购买");
		}
		$("#amount").val(i);
	});
	//				详情切换

	function tab(tab, cont) {
		for(var i = 0; i < tab.length; i++) {
			tab[i].index = i;
			$(tab[i]).click(function() {
				for(var i = 0; i < tab.length; i++) {
					$(cont[i]).hide();
					$(tab[i]).removeClass("current");
				}
				$(cont[this.index]).show();
				$(tab[this.index]).addClass("current");
			})
		}
	}
	tab(tab1, cont1);
	tab(tab2, cont2);
});