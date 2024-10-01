var httpRequest = new XMLHttpRequest();
httpRequest.open("GET","https://www.baidu.com",true);
httpRequest.onload=function(){
	console.log(httpRequest.status);
}
httpRequest.send();