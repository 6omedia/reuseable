/*

	CSS

	.puf_modal {
	    background: rgba(0, 0, 0, 0.77);
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    text-align: center;
	    display: none;
	}

	.puf_modal .puf_box {
	    text-align: left;
	    background: #fff;
	    width: 90%;
	    max-width: 700px;
	    margin: 30px auto;
	    border-radius: 3px;
	    padding: 15px;
	    position: relative;
	}

	.puf_modal input {
	    max-width: 100%;
	}

	.puf_modal ul {
	    list-style: none;
	    padding: 0px;
	    margin: 0px;
	}

	.puf_modal ul li {
	    display: block;
	    margin-bottom: 15px;
	}

	.puf_modal label {
	    display: block;
	}

	.puf_modal .x {
	    background: #444;
	    width: 30px;
	    height: 30px;
	    border-radius: 100%;
	    border: solid 5px #fff;
	    color: #fff;
	    text-align: center;
	    line-height: 1;
	    font-weight: bold;
	    position: absolute;
	    top: -10px;
	    right: -10px;
	    cursor: pointer;
	}

	ul.tagList {
	    margin-top: 20px;
	}

	ul.tagList li {
	    display: inline-block !important;
	    background: #e9e9e9;
	    border-radius: 3px;
	    margin-right: 10px;
	    border: solid 1px #ccc;
	}

	ul.tagList li span {
	    padding: 5px 10px !important;
	    display: inline-block !important;
	}

	.tagx {
	    background: #ccc;
	    color: #fff;
	    font-weight: bold;
	}

	.tagx:hover {
	    background: #eee;
	}

	@media(min-width: 768px) {
	    .puf_modal .puf_box {
	        padding: 25px;
	        margin-top: 60px;
	    }
	}

	@media(min-width: 992px) {
	    
	}

	@media(min-width: 1200px) {
	    
	}

*/

(function(){

	class FormList {
		constructor(input, ul) {
			var thisFormList = this;
			this.input = input;
			this.ul = ul;
			this.list = [];
			$(this.input).next().on('click', function(){
				if(thisFormList.input.val() != ''){
					thisFormList.addToList(thisFormList.input.val());
				}
			});
		}
		addToList(value) {
			this.input.val('');
			this.list.push(value);
			this.updateList();
		}
		removeFromList(index) {
			this.list.splice(index, 1);
			this.updateList();
		}
		updateList() {
			var thisFormList = this;
			this.ul.empty();
			for(i=0; i<this.list.length; i++){
				var li = $('<li><span>' + this.list[i] + '</span><span class="tagx">x</span></li>');
				li.on('click', function(){
					thisFormList.removeFromList($(this).index());
				});
				this.ul.append(li);
			}
		}
	}

})();