var httpRequest = new XMLHttpRequest();
httpRequest.open("GET","https://www.baidu.com",true);
httpRequest.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0");
httpRequest.onload=function(){
	console.log(httpRequest.status);
};
httpRequest.send();
