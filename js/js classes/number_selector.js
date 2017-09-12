/*************************

		Number Select

	**************************/

	function NumberSelector(nsId, number, min, max){
		this.number = number;
		this.ns = $('#' + nsId);
		this.minus = this.ns.children('.ns_minus');
		this.plus = this.ns.children('.ns_plus');
		this.numBox = this.ns.children('.nsvalue');
		this.min = min;
		this.max = max;

		this.numBox.text(this.number);
		this.setUpClicks();
	}

	NumberSelector.prototype.setUpClicks = function(){

		var thisNs = this;

		this.minus.on('click', function(){

			thisNs.decreaseNumber();

		});

		this.plus.on('click', function(){

			thisNs.increaseNumber();
		});

	};

	NumberSelector.prototype.increaseNumber = function(){

		if(this.number < this.max){
			this.number++;
			this.numBox.text(this.number);
		}
		
	}

	NumberSelector.prototype.decreaseNumber = function(){

		if(this.number > this.min){
			this.number--;
			this.numBox.text(this.number);
		}

	}