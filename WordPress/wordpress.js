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

// or... //

$('body').on('click', function(e){

    if($(e.target).parent().hasClass('noLink')){
        e.preventDefault();
        $('.sub-menu').hide();
        $(e.target).next('ul').show();
    }else{
        $('.sub-menu').hide();
    }

});


/*

	Custom Field table

	example inputs = [
		{
			selector: $('#suggestion_datefrom'),
			name: 'suggested[index][date_from]',
			type: 'date'	
		},
		{
			selector: $('#suggestion_dateto'),
			name: 'suggested[index][date_to]',
			type: 'date'	
		},
		{
			selector: $('#suggestion_link'),
			name: 'suggested[index][link]',
			type: 'text'	
		}
	]
	
*/

function CustomFieldTable(tableId, addRowBtn, inputs){

	this.table = $('#' + tableId);
	this.addRowBtn = $('#' + addRowBtn);
	this.inputs = inputs;

	this.table.on('click', '.x', function(){

		$(this).parent().parent().remove();

	});

}

CustomFieldTable.prototype.addRow = function(){

	var index = $(this).find('tr').length - 2;

	console.log('inputs ', this.inputs);

	var row = '<tr>';

	for(var i=0; i<this.inputs.length; i++){

		var input = this.inputs[i];

		if(input.selector.val() == ''){
			return alert('Complete All Fields');
		}else{

			var name = input.name.replace('index', index);

			row += '<td>';
			row += '<input type="' + input.type + '" value="' + input.selector.val() + '" name="' + name + '">';
			row += '</td>';

			input.selector.val('');

		}

	}

	row += '<td>';
	row += '<div class="button x">x</div>';
	row += '</td>';
	row += '</tr>';

	this.table.append(row);

}