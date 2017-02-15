//*** EMAIL STUFF ***//

	jQuery(document).ready(function($){

		var sendBtn = $('#submitBtn');
		var errorBox = $('#errorBox');
		var error = '';
		var requiredFeilds = [
			{
				feildName: 'name',
				elem: $('#q_name'),
				value: '',
				error: 'Name required'
			},
			{
				feildName: 'email',
				elem: $('#q_email'),
				value: '',
				error: 'Email required'
			},
			{
				feildName: 'position',
				elem: $('#q_pos'),
				value: '',
				error: 'Position Required'
			},
			{
				feildName: 'cv',
				elem: $('#q_cv'),
				value: '',
				error: 'CV Required'
			}
		];

		sendBtn.on('click', function(){

			resetValidation();

			if(isFormValid(requiredFeilds)){
				sendEmail(requiredFeilds);
			}

		});

		function sendEmail(){

			sendemail = '';

			disableSend();

			var values = [];

			var length = requiredFeilds.length;

			for(i=0; i< length; i++){

				var obj = {
					feildName: requiredFeilds[i].feildName,
					value: requiredFeilds[i].value
				};

				values.push(obj);
			}

			// console.log(values);

			$.ajax({
				url: '/lawtemplate/wp-content/themes/lawtemplate/send_email.php',
				type: 'POST',
				// dataType: 'json',
				data:
				{
					values: JSON.stringify(values),
					subject: 'Contact Form',
					sendemail: sendemail
				},
				success: function(data)
				{
					console.log('DAta.. ', data);

					enableSend();
					if(data.success == '1'){
						errorBox.html('Thankyou, your enquiry has been sent!');
					}else{
						errorBox.html('Something went wrong, please try again later...');
					}
				},
				error: function(xhr, desc, err)
				{
					console.log(xhr, desc, err);
				}
			});

		}

		function isFormValid(requiredFeilds){

			var length = requiredFeilds.length;
			var valid = true;

			for(i=length-1; i >= 0; i--){
				console.log('requiredFeild: ', requiredFeilds[i].feildName);
				var currentFeild_value = requiredFeilds[i].elem.val();

				if(currentFeild_value != ""){
					requiredFeilds[i].value = currentFeild_value;
				}else{
					invalidate(requiredFeilds[i]);
					valid = false;
				}
			}

			return valid;
		}

		function invalidate(feildObj){
			feildObj.elem.addClass('invalid');
			errorBox.html(feildObj.error);
		}

		function resetValidation(){

			errorBox.html('');

			var length = requiredFeilds.length;
			for(i=0; i< length; i++){
				requiredFeilds[i].elem.removeClass('invalid');
			}

		}

		function disableSend(){
			spin.show();
			sendBtn.hide();
		}

		function enableSend(){
			sendBtn.show();
			spin.hide();
		}

	});
