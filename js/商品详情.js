$(function() {
	//左上方轮播
	var bigimg = $(".bigimg div");
	var img = $(".smallimg li div");
	var len = $(".smallimg li div").length;
	//	console.log(len);
	var index = 0;
	var next = 0;

	function show() {
		next++;
		if(next == len) {
			next = len - 1;
		}
		if(next == 1) {
			$(".left01").css("display", "none");
			$(".left02").css("display", "block");
		}
		if(next == len - 1) {
			$(".right01").css("display", "none");
			$(".right02").css("display", "block");
		} else {
			$(".right02").css("display", "none");
			$(".right01").css("display", "block");
		}
		bigimg.eq(next).css("display", "block");
		bigimg.eq(next).siblings().css("display", "none");
		img.eq(next - 1).css("border-color", "#eeeeee");
		img.eq(next).css("border-color", "#b5b5b5");
		img.eq(next).siblings().css("border-color", "#eeeeee");
		index = next;
	}

	function show1() {
		next--;
		if(next == -1) {
			next = 0;
		}
		if(next == len - 2) {
			$(".right02").css("display", "none");
			$(".right01").css("display", "block");
		}
		if(next == 0) {
			$(".left02").css("display", "none");
			$(".left01").css("display", "block");
		} else {
			$(".left01").css("display", "none");
			$(".left02").css("display", "block");
		}
		bigimg.eq(next).css("display", "block");
		bigimg.eq(next).siblings().css("display", "none");
		img.eq(next + 1).css("border-color", "#eeeeee");
		img.eq(next).css("border-color", "#b5b5b5");
		img.eq(next).siblings().removeClass("color2");
		img.eq(next).siblings().css("border-color", "#eeeeee");
		index = next;
	}
	//左右按钮
	$(".right01").mousedown(function() {
		show();
	})
	$(".right02").mousedown(function() {
		show();
	})
	$(".left01").mousedown(function() {
		show1();
	})
	$(".left02").mousedown(function() {
		show1();
	})
	//点击那个那个显示
	img.eq(0).click(function() {
		bigimg.eq(0).css("display", "block");
		bigimg.eq(0).siblings().css("display", "none");
		$(".left02").css("display", "none");
		$(".left01").css("display", "block");
		img.eq(0).css("border-color", "#b5b5b5");
		img.eq(1).css("border-color", "#eeeeee");
		img.eq(2).css("border-color", "#eeeeee");
		img.eq(3).css("border-color", "#eeeeee");
		img.eq(4).css("border-color", "#eeeeee");
		$(".right02").css("display", "none");
		$(".right01").css("display", "block");
	})
	img.eq(1).click(function() {
		bigimg.eq(1).css("display", "block");
		bigimg.eq(1).siblings().css("display", "none");
		$(".left01").css("display", "none");
		$(".left02").css("display", "block");
		img.eq(1).css("border-color", "#b5b5b5");
		img.eq(0).css("border-color", "#eeeeee");
		img.eq(2).css("border-color", "#eeeeee");
		img.eq(3).css("border-color", "#eeeeee");
		img.eq(4).css("border-color", "#eeeeee");
		$(".right02").css("display", "none");
		$(".right01").css("display", "block");
	})
	img.eq(2).click(function() {
		bigimg.eq(2).css("display", "block");
		bigimg.eq(2).siblings().css("display", "none");
		$(".left01").css("display", "none");
		$(".left02").css("display", "block");
		img.eq(2).css("border-color", "#b5b5b5");
		img.eq(1).css("border-color", "#eeeeee");
		img.eq(0).css("border-color", "#eeeeee");
		img.eq(3).css("border-color", "#eeeeee");
		img.eq(4).css("border-color", "#eeeeee");
		$(".right02").css("display", "none");
		$(".right01").css("display", "block");
	})
	img.eq(3).click(function() {
		bigimg.eq(3).css("display", "block");
		bigimg.eq(3).siblings().css("display", "none");
		$(".left01").css("display", "none");
		$(".left02").css("display", "block");
		img.eq(3).css("border-color", "#b5b5b5");
		img.eq(1).css("border-color", "#eeeeee");
		img.eq(2).css("border-color", "#eeeeee");
		img.eq(0).css("border-color", "#eeeeee");
		img.eq(4).css("border-color", "#eeeeee");
		$(".right02").css("display", "none");
		$(".right01").css("display", "block");
	})
	img.eq(4).click(function() {
		bigimg.eq(4).css("display", "block");
		bigimg.eq(4).siblings().css("display", "none");
		$(".right01").css("display", "none");
		$(".right02").css("display", "block");
		img.eq(4).css("border-color", "#b5b5b5");
		img.eq(1).css("border-color", "#eeeeee");
		img.eq(2).css("border-color", "#eeeeee");
		img.eq(3).css("border-color", "#eeeeee");
		img.eq(0).css("border-color", "#eeeeee");
		$(".left01").css("display", "none");
		$(".left02").css("display", "block");
	})
	
	//商品规格选择
	$(".item:eq(0)").click(function() {
		$(".item:eq(0)").siblings().css("border", "1px solid #c9c9c9");
		$(".item:eq(0)").css("border", "1px solid #e2231a");
	})
	$(".item:eq(1)").click(function() {
		$(".item:eq(1)").siblings().css("border", "1px solid #c9c9c9");
		$(".item:eq(1)").css("border", "1px solid #e2231a");
	})
	$(".item:eq(2)").click(function() {
		$(".item:eq(2)").siblings().css("border", "1px solid #c9c9c9");
		$(".item:eq(2)").css("border", "1px solid #e2231a");
	})
	$(".item:eq(3)").click(function() {
		$(".item:eq(3)").siblings().css("border", "1px solid #c9c9c9");
		$(".item:eq(3)").css("border", "1px solid #e2231a");
	})
	$(".item:eq(4)").click(function() {
		$(".item:eq(4)").siblings().css("border", "1px solid #c9c9c9");
		$(".item:eq(4)").css("border", "1px solid #e2231a");
	})
	$(".item:eq(5)").click(function() {
		$(".item:eq(5)").siblings().css("border", "1px solid #c9c9c9");
		$(".item:eq(5)").css("border", "1px solid #e2231a");
	})
	$(".item:eq(6)").click(function() {
		$(".item:eq(6)").siblings().css("border", "1px solid #c9c9c9");
		$(".item:eq(6)").css("border", "1px solid #e2231a");
	})
	$(".item:eq(7)").click(function() {
		$(".item:eq(7)").siblings().css("border", "1px solid #c9c9c9");
		$(".item:eq(7)").css("border", "1px solid #e2231a");
	})

	//商品配置
	$("#container_info .ul-box li:eq(0)").click(function() {
		$("#container_info .ul-box li:eq(0)").css("color", "#e2231a");
		$("#container_info .ul-box li:eq(0)").siblings().css("color", "black");
		$(".show div:eq(0)").siblings().css("display", "none");
		$(".show div:eq(0)").css("display", "block");
	})
	$("#container_info .ul-box li:eq(1)").click(function() {
		$("#container_info .ul-box li:eq(1)").css("color", "#e2231a");
		$("#container_info .ul-box li:eq(1)").siblings().css("color", "black");
		$(".show div:eq(1)").siblings().css("display", "none");
		$(".show div:eq(1)").css("display", "block");
	})
	$("#container_info .ul-box li:eq(2)").click(function() {
		$("#container_info .ul-box li:eq(2)").css("color", "#e2231a");
		$("#container_info .ul-box li:eq(2)").siblings().css("color", "black");
		$(".show div:eq(2)").siblings().css("display", "none");
		$(".show div:eq(2)").css("display", "block");
	})
	
	//固定栏加减
	$("#add").click(function(){
		var i = $($(this).get(0).parentNode.children[2]).val();
		var num = parseInt(i) + 1;
		if(num == 0) {
			num = 1;
		}
		if(num>10){
			num==10;
		}
		$("#txt").val(num);
	})
	$("#reduce").click(function(){
		var i = $($(this).get(0).parentNode.children[2]).val();
		var num = parseInt(i) - 1;
		if(num == 0) {
			num = 1;
		}
		if(num>10){
			num==10;
		}
		$("#txt").val(num);
	})
	//二维码
	$(".ewm-icon").on("mouseover",function(){
		$(".bigewm").css("display","block");
	}).on("mouseout",function(){
		$(".bigewm").css("display","none");
	})

})