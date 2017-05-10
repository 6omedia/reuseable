/*

	const requiredFeilds = {
		sendBtn: $('#submit_btn'),
		errorBox: $('#errorMsg'),
		successBox: $('#successBox'),
		spinImg: $('#spin'),
		requiredFeilds: [
			{
				feildName: 'Name',
				elem: $('#qname'),
				value: '',
				error: 'Name required',
				validation_type: '',
				required: true
			},
			{
				feildName: 'Email',
				elem: $('#qemail'),
				value: '',
				error: 'Valid email required',
				validation_type: 'email',
				required: true
			},
			{
				feildName: 'Website',
				elem: $('#qwebsite'),
				value: '',
				validation_type: '',
				required: false
			}
		]
	}

*/


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
			let validationType = requiredFeilds[i].validation_type;

			switch(validationType){
			    case 'email':
			        
			    	if(currentFeild_value === '' || currentFeild_value.indexOf('@') == -1){
			    		this.invalidate(requiredFeilds[i]);
						valid = false;
			    	}else{
			    		requiredFeilds[i].value = currentFeild_value;
			    	}

			        break;
			    default:

			    	if(currentFeild_value != ""){
						requiredFeilds[i].value = currentFeild_value;
					}else{
						this.invalidate(requiredFeilds[i]);
						valid = false;
					}    

			}

		}

		return valid;

	}

	invalidate(feildObj){
		feildObj.elem.addClass('invalid').focus();
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