//create the request
var myRequest;

//feature check
if(window.XMLHttpRequest){  //firefox, safari, chrome
	myRequest = new XMLHttpRequest();
} else if(window.ActiveXObject){   //IE
	myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
//create an event handler for request to call back
myRequest.onreadystatechange = function(){
	//console.log("we are called!");
	//console.log(myRequest.readyState);
	if(myRequest.readyState === 4){
		var p = document.createElement("p");
		var t = document.createTextNode(myRequest.responseText);
		p.appendChild(t);
		$('.panel').append(p);			
	}
};

//open and send it
myRequest.open('GET', 'simple.txt', true);

myRequest.send(null);

//...