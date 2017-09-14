$(function() {
	//数量加减  金额  合计  总价
	$(".pro_add").click(function() {
		var i = $($(this).get(0).parentNode.children[1]).val();
		num = parseInt(i) + 1;
		if(num == 0) {
			num = 1;
		}
		if(num > 11) {
			num = 10;
		}
		//数量
		$($(this).get(0).parentNode.children[1]).val(num);
		//赠品数量
		$($(this).get(0).parentNode.parentNode.parentNode.parentNode.children[2].children[1].children[0].children[3]).text(num);
		var n = $(".current_price").text();
		var m = parseInt(n) * num;
		//金额
		$($(this).get(0).parentNode.parentNode.parentNode.children[5].children[0]).text(m + ".00");
		zongjia();

	})
	$(".pro_less").click(function() {
		var i = $($(this).get(0).parentNode.children[1]).val();
		num = parseInt(i) - 1;
		if(num == 0) {
			num = 1;
		}
		$($(this).get(0).parentNode.children[1]).val(num);
		var n = $(".current_price").text();
		var m = parseInt(n) * num;
		$($(this).get(0).parentNode.parentNode.parentNode.children[5].children[0]).text(m + ".00");
		$($(this).get(0).parentNode.parentNode.parentNode.parentNode.children[2].children[1].children[0].children[3]).text(num);
		zongjia();
	})
	//总价
	function zongjia() {
		var sum = 0;
		$("input[type='checkbox'][name='xuan']").each(function() {
			if(this.checked == true) {
				var td = $(this).parent().parent().parent().children(5).children(".td2").text()
				sum += parseInt(td);
			}
		})
		$(".i1").text("商品总价:" + sum + ".00");
		$(".heji").text(sum + ".00");
	}

	//删除
	$(".delete").on("click", function() {
		var del = $(this).get(0).parentNode.parentNode.parentNode.parentNode;
		//		console.log($(this).get(0).parentNode.parentNode.parentNode.parentNode);
		$(del).remove();

	})
	$(".delete1").click(function(){
		var del1 = $(this).get(0).parentNode.parentNode.parentNode;
//		console.log(del1)
		$(del1).remove();
	})
	
	//全选
	$("#quanxuan").click(function() {
		if(this.checked == true) {
			$('[type=checkbox]').prop('checked', true);
		} else {
			$('[type=checkbox]').prop('checked', false);
		}
		zongjia();
	})
	$("#quanxuan1").click(function() {
		if(this.checked == true) {
			$('[type=checkbox]').prop('checked', true);
		} else {
			$('[type=checkbox]').prop('checked', false);
		}
		zongjia();

	})
	$(".xuan").click(function() {
		//总的checkbox的个数
		var len = $(".xuan").length;
		//已选中的checkbox的个数
		var checkedLen = $("input[type='checkbox'][name='xuan']:checked").length;
		if(len == checkedLen) {
			$('#quanxuan').prop('checked', true);
			$('#quanxuan1').prop('checked', true);
		} else {
			$('#quanxuan').prop('checked', false);
			$('#quanxuan1').prop('checked', false);
		}
		zongjia();
	})
	
	//添加商品
	$("#tianjia").on("click",function(){
//		$("#wupin").css("display","block")
		var text1 = $("#wupin");
		var text2 = text1.clone(true)
		console.log(text1);
		$(".tab").after(text2);
    });
	
	
	
	//用户姓名信息显示
	$(window).load(function(){
		var username = localStorage.getItem("userName");
		if(username){
			$(".noLink").css("display","none");
			$(".linkStart").css("display","block");
			$("#userName").html(username);
			$(".usernameLi").hover(function(){
				$(".userHiddenUl").slideDown(500);
			},function(){
				$(".userHiddenUl").slideUp(500);
			});
			
			$("#linkBreak").click(function(){
				localStorage.removeItem("userName");
				$(".noLink").css("display","block");	
				$(".usernameLi").css("display","none");
			});
		}
	});
})