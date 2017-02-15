class Form {
	
	sendForm(callback){
		this.resetValidation();
		const valid = this.isFormValid(this.requiredFeilds);
		if(valid){
			this.disableSubmit();
			callback();
		}
	}
	
	disableSubmit(){
		this.sendBtn.hide();
	}

	enableSubmit(){
		this.sendBtn.show();
	}

	isFormValid(requiredFeilds){

		const length = requiredFeilds.length;

		let valid = true;

		for(let i=length-1; i >= 0; i--){
		
			let currentFeild_value = requiredFeilds[i].elem.val();

			if(currentFeild_value != ""){
				requiredFeilds[i].value = currentFeild_value;
			}else{
				this.invalidate(requiredFeilds[i]);
				valid = false;
			}

		}

		return valid;

	}

	invalidate(feildObj){
		feildObj.elem.addClass('invalid');
		this.errorBox.html(feildObj.error).slideDown(400);
	}

	resetValidation(){

		this.errorBox.html('').slideUp();

		const length = this.requiredFeilds.length;
		for(let i=0; i< length; i++){
			this.requiredFeilds[i].elem.removeClass('invalid');
		}

	}

	constructor(data){
		this.sendBtn = data.sendBtn;
		this.errorBox = data.errorBox;
		this.successBox = data.successBox;
		this.spinImg = data.spinImg;
		this.error = '';
		this.requiredFeilds = data.requiredFeilds;
	}
}