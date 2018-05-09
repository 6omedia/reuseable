// Accordian

$('.accordian').find('span').click(function(){
	//Expand or collapse this panel
	$(this).next().slideToggle('fast');
	//Hide the other panels
	$(".a_content").not($(this).next()).slideUp('fast');
});