
var HttpClient = function(){
	this.get = function(aUrl, aCallback){
		var anHttpRequest = new XMLHttpRequest();
		anHttpRequest.onreadystatechange = function(){
			if(anHttpRequest.readyState == 4 && anHttpRequest.status == 200){
				aCallback(anHttpRequest.responseText);
			}
		}
		anHttpRequest.open("GET", aUrl, true);
		anHttpRequest.send(null);
	}
}
var theurl='https://api.coinbase.com/v2/exchange-rates?currency=BCH';
var client = new HttpClient();
client.get(theurl,function(response){
		var response1 = JSON.parse(response);
		//alert(response);
		document.getElementById("price").innerHTML = response1.data.rates.EUR;
});
	
	

function exitbutton() {
	window.close();
}

function refreshbutton(){
	
	var HttpClient = function(){
	this.get = function(aUrl, aCallback){
		var anHttpRequest = new XMLHttpRequest();
		anHttpRequest.onreadystatechange = function(){
			if(anHttpRequest.readyState == 4 && anHttpRequest.status == 200){
				aCallback(anHttpRequest.responseText);
			}
		}
		anHttpRequest.open("GET", aUrl, true);
		anHttpRequest.send(null);
	}
}
	
	var theurl='https://api.coinbase.com/v2/exchange-rates?currency=BCH';
	var client = new HttpClient();
	client.get(theurl,function(response){
		var response1 = JSON.parse(response);
		//alert(response);
		document.getElementById("price").innerHTML = response1.data.rates.EUR;
	});
}
