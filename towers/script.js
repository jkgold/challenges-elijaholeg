$(document).ready(function() {
	var thePlate;
	var thePlane;

	$(".plate").click(function(e) {
    e.stopPropagation();
		if ($(this).is(':first-child')) {
			thePlate = this
		}
	});

	$(".plane").click(function() {
		thePlane = this;
		console.log(thePlane);
		if (thePlate) {
			if ($(this).children().length) {
				$(thePlate).text() < ($(this).find(":first-child").text()) ? $(thePlane).prepend(thePlate) : alert("Dont stack bigger plates on smaller plates");
			} else {
				$(thePlane).prepend(thePlate)
			}
			thePlate = [];
			thePlane = [];
		}

		if ($("#last-plane").children().length === 3) {
			alert("you won, bro");
		}
	});
});
