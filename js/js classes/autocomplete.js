/// Auto complete

var YeahAutocomplete = (function(){

	// function YeahAutocomplete(selector, wpAjaxAction, allowFreeType){
	// 	this.selector = selector;
	// 	this.element = document.getElementById(selector);
	// 	this.jElement = $('#' + selector);
	// 	var thisAutocomplete = this;
	// 	this.jElement.on('input', function(){
	// 		thisAutocomplete.getResults($(this).val());
	// 	});
	// 	this.resultsLoaded = new CustomEvent(
	// 	  	"resultsLoaded", {
	// 	   	detail:
	// 	   	{
	//    	  		data: '',
	//    	  		time: new Date()
	// 	   	},
	// 	   	bubbles: true,
	// 	   	cancelable: true
	//   	});

	// 	this.selectedValue = 'none';

	// 	// select item 
	// 	this.itemSelected = new CustomEvent(
	// 	  	"itemSelected", {
	// 	  		'detail': {
	// 	  			'selectedValue': this.selectedValue
	// 	  		}
	// 	  	}
	// 	);

	//   	this.resultsList = $('<ul class="YeahAutocomplete_list"></ul>');
	//   	this.jElement.after(this.resultsList);
	//   	this.wpAjaxAction = wpAjaxAction;

	//   	if(!allowFreeType){
	// 	  	this.jElement.on('blur', function(){
	// 	  		// thisAutocomplete.resultsList.empty();

		  		
	//   			thisAutocomplete.jElement.val('');
		  		
	// 	  	});
	// 	}
	// }

	// YeahAutocomplete.prototype.getResults = function(term){

	// 	var thisAutocomplete = this;

	// 	$.ajax({
	// 		type: 'POST',
	// 		url: autoAjax.ajaxurl,
	//         data: {
	//         	action: thisAutocomplete.wpAjaxAction,
	//         	tt_term: term
	//         },
	// 		// dataType: 'json',
	// 		success: function(data)
	// 		{
				
	// 			thisAutocomplete.resultsList.empty();

	// 			thisAutocomplete.resultsLoaded.detail.data = data;
	// 			thisAutocomplete.element.dispatchEvent(thisAutocomplete.resultsLoaded);

	// 			thisAutocomplete.resultsList.show();

	// 		},
	// 		error: function(xhr, desc, err)
	// 		{	
	// 			console.log(xhr, desc, err);
	// 		}
	// 	});

	// };

	// YeahAutocomplete.prototype.displayResults = function(data, property, saveProperty){

	// 	var thisAutocomplete = this;
	// 	this.resultsList.empty();

	// 	for(var i=0; i<data.length; i++){

	// 		var code = data[i][saveProperty];

	// 		var li = $('<li><b>' + data[i][saveProperty] + '</b> | ' + data[i][property] + '</li>').on('click', function(){
	// 					thisAutocomplete.jElement.val($(this).text());
	// 					thisAutocomplete.resultsList.empty();
	// 					thisAutocomplete.itemSelected.detail.selectedValue = code;
	// 					thisAutocomplete.element.dispatchEvent(thisAutocomplete.itemSelected);
	// 				}).on('blur', function(){
	// 					thisAutocomplete.resultsList.empty();
	// 				});

	// 		this.resultsList.append(li);
	// 	}

	// 	this.resultsList.show();

	// };

	function Model(){

	}

	function View(input){
		this.input = $('#' + input);
	}

	function YeahAutocomplete(input){

		this.view = new View(input);
		this.model = new Model();
	
		this.view.input.on('input', function(){
			// thisAutocomplete.getResults($(this).val());
			console.log('eyahk kj');
		});

	}

	return YeahAutocomplete;

}());

/// USEAGE ///

// var fromAutocomplete = new YeahAutocomplete('fromWhere', false);

// fromAutocomplete.element.addEventListener("resultsLoaded", function(e){

// 	fromAutocomplete.displayResults(JSON.parse(e.detail.data).cities, 'city');
	
// }, false);

/* CSS

.YeahAutocomplete_list {
    background: #fff;
    position: absolute;
    margin-top: 0px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    border: solid 1px rgba(0, 0, 0, 0.07);
}

.YeahAutocomplete_list li {
    display: block;
    padding: 10px 20px;
    text-align: left;
    min-width: 230px;
}

.YeahAutocomplete_list li:hover {
	background: #00868c;
	color: #fff;
	cursor: pointer;
}

*/