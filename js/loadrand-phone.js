//以下图片为api.imlazy.ink/v1/img-phone?type=json提供，为防止跨域因此无法直接访问它的api
$.getJSON("https://zts.llmj.dpdns.org/picture/img-phone.json",function(data){
	const backgroundimg=data;
	const rand=Math.floor(Math.random()*backgroundimg.length);
	var ment=document.body;
	ment.style.backgroundImage='url('+backgroundimg[rand].url+')';
});
const randmusic=['https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/07273409337d9fa9/j.mp3','https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/e64416e0f13fafba/n.mp3','https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/faad2da895e72f61/t.mp3','https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/c1ae83a0262c6a74/m.mp3','https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/6ce8581ce79ef4ee/lq.mp3']
const randimg=['../picture/kunb-phone.png','../picture/kun-phone.png','../picture/memes-phone.png','../picture/kunkun.png','../picture/lq-phone.png']
const ikun=document.getElementById("ikun");
var isMouseDown=false;
var jumpkunnumber=0;
var listimg=[];//预加载
for(i=0;i<5;i++){
	var img=new Image();
	img.src=randimg[i];
	listimg[i]=img;}
function download(name){
	$.getJSON("https://zts.llmj.dpdns.org/html-phone/do.json",function(data){
		var size=data[name]["size"];
		var instruct=data[name]["instruct"];
		var url=data[name]["url"];
		var vartext="安装包大小: "+size+"\n介绍: "+instruct;
		alert(vartext);
		window.open(url,"_self");
	})
}
function kun(){
	isMouseDown=true;
	jumpkunnumber+=1;
	var randomnumber=Math.floor(Math.random()*randmusic.length);
	var music=new Audio(randmusic[randomnumber]);
	var angle=0;
	var opacity=0;
	var size=0;
	var sizeadd=5;
	const otherjumpkun=jumpkunnumber;
	const imgplay=listimg[randomnumber]
	music.play();
	ikun.width=window.innerWidth;
	ikun.height=window.innerHeight;
	var mykun=ikun.getContext("2d");
	mykun.translate(event.clientX,event.clientY);
	function jumpkun(){
		mykun.clearRect(-100,-100,ikun.width,ikun.height);
		ikun.style.opacity=opacity;
		mykun.rotate(angle);
		mykun.drawImage(imgplay,-50,-50,size,size);
		angle+=0.11;
		opacity+=0.02;
		//console.log(angle);
		if(!isMouseDown){mykun.clearRect(-100,-100,ikun.width,ikun.height);return;}
		if(jumpkunnumber>otherjumpkun){
			mykun.clearRect(-100,-100,ikun.width,ikun.height);
			return;}
		if(size==100){
			music=new Audio("../music/xnj.mp3");
			music.play();
			drawkun();}
		else{
			size+=10;
			requestAnimationFrame(jumpkun);
		}
	}
	function drawkun(){
		mykun.clearRect(-100,-100,ikun.width,ikun.height);
		mykun.drawImage(imgplay,-50,-50,size,size);
		ikun.style.opacity=opacity;
		if(isMouseDown){
			size+=sizeadd;
			opacity+=0.02;
			if(size>150){sizeadd=-5;}
			if(size<100){sizeadd=5;}
			requestAnimationFrame(drawkun);
		}else{
			music.pause();
			mykun.clearRect(-100,-100,ikun.width,ikun.height);
			return;}
	}jumpkun();
}

//这里是kun的点击
document.addEventListener('mousedown',kun);
document.addEventListener('mouseup',function(event){
	isMouseDown=false;
});
