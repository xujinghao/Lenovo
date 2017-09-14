$(function() {

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
	
	//返回顶部
	$("#totop").click(function() {
		var sc = $(window).scrollTop();
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
	//点击选项条
	$(".cur").click(function() {
		$(".line").css("display", "none");
		$(this).find('div').css("display", "block");
	});

	//点击选项条换div

	$(".nav_li").click(function() {
		var i = parseInt($(this).index());
		/*$(".content_box").eq(i * 2).children().siblings().css("display", "none");*/
		$(".content_box").eq(i).siblings().css("display", "none");
		$(".content_box").eq(i).siblings().children().css("display", "none");
		$(".content_box").eq(i).css("display", "block");
		$(".content_box").eq(i).children().slideDown(1000);
	});
});