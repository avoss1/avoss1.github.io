$("#contactForm").submit(function(e) {
	e.preventDefault();
	$.ajax({
	    url: "https://formspree.io/f/xlekerzp", 
	    method: "POST",
	    data: {name: $("#userName").val(), _replyto: $("#userEmail").val(), message: $("#userMessage").val()},
	    dataType: "json"
	});

	setTimeout(function() {
		clearForm();
	}, 1000);
});

function clearForm() {
	var elems = document.getElementsByTagName("input");
	var l = elems.length - 1;
	for (var i = 0; i < l; ++i) {
		elems[i].value = "";
	}
	$("textarea").val("");

	alert("Contact request sent.");
}