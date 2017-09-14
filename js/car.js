$(function() {
		$("#olio").click(function() {	
			$(".tab tbody").empty("");
			$.ajax({
				type: "get",
				url: "https://leancloud.cn:443/1.1/classes/car",
				data: {
					//olio  6	
					where: '{"userID":{"__type":"Pointer","className":"_User","objectId":"599bf88061ff4b00580ae10d"},"pID":{"__type":"Pointer","className":"product","objectId":"599e4f9da0bb9f005884d2e1"},"num":"1"}',
					limit: 10,
					order: "-updatedAt",
					include: "pID"
				},
				headers: {
					"x-avoscloud-application-id": "qywb1SyfYfvuEi4qrt3UDsGG-gzGzoHsz",
					"x-avoscloud-application-key": "L9SVvMEx2QHTPsr4EICmVTSp"
				},
				success: function(data) {
					var content = data.results[0]['pID']['content'];
					var danjia = data.results[0]['pID']['danjia'];
					console.log(danjia);
					var num = data.results[0]['num'];
					var zongjia = danjia * num + ".00";
					console.log(zongjia);	
				
					$(".tab tbody").append("<tr><td><input type='checkbox' class='xuan' /></td><td>" + content + "</td><td>" + danjia + "</td><td>" + num + "</td><td>" + zongjia + "</td><td>删除</td></tr>");
				}
			});
		})
		
	$("#zhangsan").click(function() {
		$(".tab tbody").empty("");
		for(var i = 0; i < 3; i++) {
			$.ajax({ //
				type: "get",
				url: "https://leancloud.cn:443/1.1/classes/car",
				data: {
					where: function() {

						if(i == 0) { //zhangsan 1
							return '{"userID":{"__type":"Pointer","className":"_User","objectId":"599e6b318d6d810058120fe7"},"pID":{"__type":"Pointer","className":"product","objectId":"599e4e31570c35006cac64f6"},"num":"3"}';
						} else if(i == 1) { //zhangsan 3
							return '{"userID":{"__type":"Pointer","className":"_User","objectId":"599e6b318d6d810058120fe7"},"pID":{"__type":"Pointer","className":"product","objectId":"599e4ee41b69e6006a35a176"},"num":"1"}';
						} else { //zhangsan 6
							return '{"userID":{"__type":"Pointer","className":"_User","objectId":"599e6b318d6d810058120fe7"},"pID":{"__type":"Pointer","className":"product","objectId":"599e4f9da0bb9f005884d2e1"},"num":"3"}';
						}
					},
					limit: 10,
					order: "-updatedAt",
					include: "pID"
				},
				headers: {
					"x-avoscloud-application-id": "qywb1SyfYfvuEi4qrt3UDsGG-gzGzoHsz",
					"x-avoscloud-application-key": "L9SVvMEx2QHTPsr4EICmVTSp"
				},
				success: function(data) {
					var content = data.results[0]['pID']['content'];
					var danjia = data.results[0]['pID']['danjia'];
					console.log(danjia);
					var num = data.results[0]['num'];
					var zongjia = danjia * num + ".00";
					console.log(zongjia);
					
					$(".tab tbody").append("<tr><td><input type='checkbox' class='xuan' /></td><td>" + content + "</td><td>" + danjia + "</td><td>" + num + "</td><td>" + zongjia + "</td><td>删除</td></tr>");
				}
			});
		}
	})

	$("#lisi").click(function() {
		$(".tab tbody").empty("");
		for(var i = 0; i < 3; i++){
		$.ajax({
			type: "get",
			url: "https://leancloud.cn:443/1.1/classes/car",
			data: {
				where: function() {
						if(i == 0) { //lisi    1
							return '{"userID":{"__type":"Pointer","className":"_User","objectId":"599e6aa7570c35006cae7134"},"pID":{"__type":"Pointer","className":"product","objectId":"599e4e31570c35006cac64f6"},"num":"2"}';
						} else if(i == 1) { //zhangsan 3
							return '{"userID":{"__type":"Pointer","className":"_User","objectId":"599e6aa7570c35006cae7134"},"pID":{"__type":"Pointer","className":"product","objectId":"599e4ee41b69e6006a35a176"},"num":"2"}';
						} else { //zhangsan 6
							return '{"userID":{"__type":"Pointer","className":"_User","objectId":"599e6aa7570c35006cae7134"},"pID":{"__type":"Pointer","className":"product","objectId":"599e4f9da0bb9f005884d2e1"},"num":"4"}';
						}
					},	
				limit: 10,
				order: "-updatedAt",
				include: "pID"
			},
			headers: {
				"x-avoscloud-application-id": "qywb1SyfYfvuEi4qrt3UDsGG-gzGzoHsz",
				"x-avoscloud-application-key": "L9SVvMEx2QHTPsr4EICmVTSp"
			},
			success: function(data) {
				var content = data.results[0]['pID']['content'];
				var danjia = data.results[0]['pID']['danjia'];
				console.log(danjia);
				var num = data.results[0]['num'];
				var zongjia = danjia * num + ".00";
				console.log(zongjia);
				
				$(".tab tbody").append("<tr><td><input type='checkbox' class='xuan' /></td><td>" + content + "</td><td>" + danjia + "</td><td>" + num + "</td><td>" + zongjia + "</td><td>删除</td></tr>");
			}
		});
		}
	});

})