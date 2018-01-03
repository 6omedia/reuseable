/*

#msg {
    position: fixed;
    bottom: -60px;
    background: #f0fff1;
    width: 100%;
    padding-top: 15px;
    padding-right: 20px;
    padding-left: 20px;
    font-weight: bold;
    border-top: solid 5px #a2dba4;
    color: #0f8f14;
    -webkit-transition: bottom 0.5s ease-in-out;
    -moz-transition: bottom 0.5s ease-in-out;
    -o-transition: bottom 0.5s ease-in-out;
    transition: bottom 0.5s ease-in-out;
    z-index: 9999;
}

#msg.error_msg {
    border-top: solid 3px #f67f7f;
    color: #a41616;
    background: #fff3f3;
}

#msg p {
    float: left;
}

#msg .x {
    float: right;
    background: #fff;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    text-align: center;
    cursor: pointer;
}

#msg.slideup {
    bottom: 0px !important;
}


*/


function Message(msg, isError, elem){

	this.msg = msg;
	this.elem = elem;
	this.elem.find('p').html(msg);

	this.elem.removeClass('error_msg');

	if(isError){
		this.elem.addClass('error_msg');
	}

	var thisMsg = this;

	this.elem.find('.x').on('click', function(){
		thisMsg.hideMsg();
	});

}

Message.prototype.display = function(persist){

	this.elem.addClass("slideup");

	thisMsg = this;

	if(persist != true){
		setTimeout(function() {
	    	thisMsg.hideMsg();
	    }, 6000);
	}

};

Message.prototype.hideMsg = function(){

	$(this.elem).removeClass("slideup");

};