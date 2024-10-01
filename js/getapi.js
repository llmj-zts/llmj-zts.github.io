var httpRequest = new XMLHttpRequest();
httpRequest.open("GET","https://www.baidu.com",true);
response.setHeader("Access-Control-Allow-Origin", "*");
httpRequest.onload=function(){
	console.log(httpRequest.status);
}
httpRequest.send();
