$(document).on('scroll', function(){

	var statsPos = $('#stats').offset().top;
	var currentPos = $(document).scrollTop();

	if(currentPos > statsPos-600){

		countStats();
		done = true;
	}

});