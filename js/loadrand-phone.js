//以下图片为api.imlazy.ink/v1/img-phone?type=json提供，为防止跨域因此无法直接访问它的api
$.getJSON("https://zts.llmj.dpdns.org/picture/img-phone.json",function(data){
	const backgroundimg=data;
	const rand=Math.floor(Math.random()*backgroundimg.length);
	var ment=document.body;
	ment.style.backgroundImage='url('+backgroundimg[rand].url+')';
});
const randmusic=['https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/07273409337d9fa9/j.mp3','https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/e64416e0f13fafba/n.mp3','https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/faad2da895e72f61/t.mp3','https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/c1ae83a0262c6a74/m.mp3','https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/6ce8581ce79ef4ee/lq.mp3']
const randimg=['https://youke1.picui.cn/s1/2025/08/10/68983b576d539.png','https://youke1.picui.cn/s1/2025/08/10/68983b600f6f9.png','https://youke1.picui.cn/s1/2025/08/10/68983b58887bf.png','https://youke1.picui.cn/s1/2025/08/10/68983b57c1502.png','https://youke1.picui.cn/s1/2025/08/10/68983b5ec70f9.png']
function download(name){
	$.getJSON("https://zts.llmj.dpdns.org/html-phone/do.json",function(data){
		var size=data[name]["size"];
		var instruct=data[name]["instruct"];
		var url=data[name]["url"];
		var vartext="安装包大小: "+size+"\n介绍: "+instruct;
		alert(vartext);
		window.open(url,"_blank");
	})
}
