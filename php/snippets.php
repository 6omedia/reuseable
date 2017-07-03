<?php

/* Output as currency */

number_format($price, 2);

/* 

	Multidimentional Array Sorting 

	Array
	(
	    [0] => Array
	        (
	            [img] => 
	            [name] => Debenhams
	            [id] => 4344
	            [link] => fsbsdf
	            [price] => 6.50
	        )

	    [1] => Array
	        (
	            [img] => 
	            [name] => Boots
	            [id] => 4342
	            [link] => fdvbedsva
	            [price] => 17.65
	        )

	    [2] => Array
	        (
	            [img] => 
	            [name] => SuperDrug
	            [id] => 4345
	            [link] => dvcdsvcs
	            [price] => 32.00
	        )

	)

*/

usort($this->merchants, function($a, $b){
	return $a['price'] - $b['price'];
});