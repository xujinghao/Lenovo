var arry = $("#premium-buttons li").toArray();
			var ul = $(".main-content>ul");
			var addTime;
			var ind = 0;

			arry.forEach(function(val, index) {
				$(arry[index]).mouseover(function() {
					for(var i = 0; i < arry.length; i++) {
						$(arry[i]).children().removeClass("active")
					}
					$(arry[index]).children().addClass("active");
					ul.animate({
						"left": -1349 * index
					})
					ind=index;
				});
			});

			$(".main-content").mouseover(function() {
				clearInterval(addTime);
			}).mouseout(function() {
				addTime = setInterval(function() {
					for(var i = 0; i < arry.length; i++) {
						$(arry[i]).children().removeClass("active");
					}
					show(ind);
					ind++;
					if(ind > 4) {
						ind = 0;
					}
				}, 3000);
			});

			function show(index) {
				$(arry[index]).children().addClass("active");
				ul.animate({
					"left": -1349 * index
				})
			}