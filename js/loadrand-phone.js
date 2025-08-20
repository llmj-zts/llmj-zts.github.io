//以下图片为api.imlazy.ink/v1/img-phone?type=json提供，为防止跨域因此无法直接访问它的api
$.getJSON("https://zts.llmj.dpdns.org/picture/img-phone.json",function(data){
	const backgroundimg=data;
	const rand=Math.floor(Math.random()*backgroundimg.length);
	var ment=document.body;
	ment.style.backgroundImage='url('+backgroundimg[rand].url+')';
}