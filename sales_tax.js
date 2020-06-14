var $ = function (id) {
    return document.getElementById(id); 
};

var processEntries = function(){ // Function for taking input and calculation 
	$("subtotal").select(); // selct the input field for user input 
	var subtotal = parseFloat($("subtotal").value);  // Taking input from user
	var tax_rate = parseFloat($("tax_rate").value);
	if(subtotal < 0 || subtotal > 10000) {      // Input validation
		alert("Subtotal must be > 0 and < 10000");   // Alert for wrong input
	}
	else if (tax_rate < 0 || tax_rate > 12){
		alert("Tax Rate must be > 0 and < 12");
	}
	else{
		var SalesTax = (subtotal * tax_rate)/100;   // calculation
		var result = subtotal + SalesTax;
		$("sales_tax").value = SalesTax.toFixed(2); // Displying calculation to input field  
		$("total").value = result.toFixed(2);
	}	
}
var reset = function(){   // reset function to cleall all input field
	$("subtotal").select();  // select the input filed on function run
	$("subtotal").value = "";
	$("tax_rate").value = "";
	$("sales_tax").value = "";
	$("total").value = "";
}
window.onload = function(){  // run this funtion on window load
	$("subtotal").select(); // select the input filed on window load
	$("calculate").onclick = processEntries; // Run the function on click event
	$("clear").onclick = reset; // Run clear function on click event
}


