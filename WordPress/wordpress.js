// wordpress expandable menu 

$('#side_nav .expand a').on('click', function(e){

	if($(this).attr('href') == '#'){
		e.preventDefault();
	}

	var subMenu = $(this).parent().children('ul');

	if(subMenu.hasClass('expanded')){
		subMenu.hide(200).removeClass('expanded');
	}else{
		subMenu.show(200).addClass('expanded');
	}

});