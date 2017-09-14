$(function() {
				
				$(window).scroll(function() {
					var top = $(window).scrollTop();
					if(top >= 180) {
						$("#small-logo").show();
						$("#logo").hide();
					} else {
						$("#small-logo").hide();
						$("#logo").show();
					}
					if(top > 500) {
						$("#rightbar").show();
					} else {
						$("#rightbar").hide();
					}

				});
				$(".weixin").mouseover(function(){
					$("#img-weixin").show();
				}).mouseout(function(){
					$("#img-weixin").hide();
				});
				var arry = $(".product-banner-list a").toArray();
				var ul = $(".product-banner-pic");
				var addTime;
				var ind = 0;
				arry.forEach(function(val, index) {
					$(arry[index]).click(function() {
						for(var i = 0; i < arry.length; i++) {
							$(arry[i]).removeClass("active")
						}
						$(arry[index]).addClass("active")
						ul.animate({
							"left": -1200 * index
						})
						ind = index;
					});
				});

				$(".product-banner-box").mouseover(function() {
					clearInterval(addTime);
				}).mouseout(function() {
					addTime = setInterval(function() {
						for(var i = 0; i < arry.length; i++) {
							$(arry[i]).removeClass("active");
						}
						show(ind);
						ind++;
						if(ind > 3) {
							ind = 0;
						}
					}, 2000);
				});

				function show(index) {
					$(arry[index]).addClass("active");
					ul.animate({
						"left": -1200 * index
					})
				}
			});