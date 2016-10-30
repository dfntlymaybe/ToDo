var main = function(){
	$('button').click(function(){
		if($('#inputText').val() !== ""){
		$('.list').append('<input type="checkbox" class="check">' + $('#inputText').val() + "<br />");
		$('#inputText').val("");
		}
	});
}


$(document).ready(main);