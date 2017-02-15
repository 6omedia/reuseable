/*

		STATS
	*/

	function countStats(done){

	    countStats = function(){};
	    console.log('Once?');

		$('.count').each(function () {
		    $(this).prop('Counter', 0).animate({
		        Counter: $(this).data('num')
		    }, {
		        duration: 4000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});

	}

	/*

		SCROLL
	*/

	$(document).on('scroll', function(){

		var statsPos = $('#stats').offset().top;
		var currentPos = $(document).scrollTop();

		if(currentPos > statsPos-600){

			countStats();
			done = true;
		}

	});