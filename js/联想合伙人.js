$(function() {
	$(".num li:first").on("click", function() {
		$(".l02").css("display", "none");
		$(".l01").css("display", "block");
		$(".n1").css("background-color", "#f03f42");
		$(".n2").css("background-color", "#cfced2");
	})
	$(".num li:last").on("click", function() {
		$(".l01").css("display", "none");
		$(".l02").css("display", "block");
		$(".n2").css("background-color", "#f03f42");
		$(".n1").css("background-color", "#cfced2");
	})

	function move1(e, a, b) {
		e.mouseover(function() {
			e.css("top", a + "px");
		}).mouseout(function() {
			e.css("top", b + "px");
		})
	}
	move1($(".img01"), 38, 40);
	move1($(".img02"), 38, 40);
	move1($(".img03"), 38, 40);
	move1($(".img04"), 38, 40);
	move1($(".img05"), 294, 296);
	move1($(".img06"), 294, 296);
	move1($(".img07"), 294, 296);
	move1($(".img08"), 294, 296);
})