// http://stackoverflow.com/a/14223553
// for each element that is classed as 'pull-down', set its margin-top to the difference between its own height and the height of its parent
$('.pull-down').each(function() {
	    $(this).css('margin-top', $(this).parent().height()-$(this).height())
});
