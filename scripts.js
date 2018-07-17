$(document).ready(function() {

// Autocomplete + direct forwarding
$(function() {
	$("#sr").autocomplete({
	appendTo: "header form",	
	minLength: 0,
	source: [
		{label: 'Food Standards', value:"http://www.foodstandards.gov.au"},
		{label: 'Marketing', value:"http://www.ami.org.au"},
		{label: 'Risk management', value:"http://www.safeworkaustralia.gov.au"},
		{label: 'Training', value:"http://www.foodsafety.com.au"},
		{label: 'Work Procedures', value: 'work.html'}
	]
	,select: function (event, ui) {
		$(event.target).val(ui.item.label);
		window.location = ui.item.value;
		return false;
	}
	});
});

// Show all autocomplete entries on click
$('#sr').click(function() {
	$(this).autocomplete( "search", "" );
});

// Placeholder detection
if (!Modernizr.input.placeholder) {
	$('#sr').val("Search term");
	
	$('#sr').focus(function() {
		if ($(this).val() == "Search term") $(this).val("");
	});
	
	$('#sr').blur(function() {
		if ($(this).val() == "") $(this).val("Search term");
	});
}

}); 