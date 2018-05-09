(function(){

	class PopUpForm {
		constructor(heading, buttonText, inputGroups, onSubmit){
			this.heading = heading;
			this.buttonText = buttonText;
			this.inputGroups = inputGroups;
			this.onSubmit = onSubmit;
			// click modal or cross to close
			this.createModel();
		}
		createModel() {
			var thisPuf = this;
			this.modal = $('<div class="puf_modal"></div>');
			this.innerModal = $('<div class="puf_box"></div>');
			this.ul = $('<ul></ul>');
			this.button = $('<button class="btn">' + this.buttonText + '</button>');
			this.button.on('click', function(){
				thisPuf.onSubmit();
			});
			var close = $('<div class="x">x</div>').on('click', function(){
				thisPuf.hide();
			});

			$(this.inputGroups).each(function(){
				var li = $('<li></li>');
				li.append($(this));
				thisPuf.ul.append(li);
			});

			this.innerModal.append(close);
			this.innerModal.append('<h3>' + this.heading + '</h3>');
			this.innerModal.append(this.ul);
			this.innerModal.append(this.button);
			
			this.modal.append(this.innerModal);
			$('body').append(this.modal);
		}
		hide() {
			this.modal.fadeOut(400);
		}
		show() {
			this.modal.fadeIn(400);
		}
	}

})();