//以下图片为api.imlazy.ink/v1/img-phone?type=json提供，为防止跨域因此无法直接访问它的api
$.getJSON("https://zts.llmj.dpdns.org/picture/img-phone.json",function(data){
	const backgroundimg=data;
	const rand=Math.floor(Math.random()*backgroundimg.length);
	var ment=document.body;
	ment.style.backgroundImage='url('+backgroundimg[rand].url+')';
	var wal=document.getElementsByName("下载壁纸");
	wal[0].addEventListener("click",()=>{
		alert("因为浏览器的安全要求，我无法强制发起下载请求，想要你自己右键保存图片")
		window.open(backgroundimg[rand].url,"_blank");
	});
});
const randmusic=['https://zts.llmj.dpdns.org/music/j.mp3',
				 'https://zts.llmj.dpdns.org/music/n.mp3',
				 'https://zts.llmj.dpdns.org/music/t.mp3',
				 'https://zts.llmj.dpdns.org/music/m.mp3',
				 'https://zts.llmj.dpdns.org/music/lq.mp3']
const randimg=['https://zts.llmj.dpdns.org/picture/kunb-phone.png',
			   'https://zts.llmj.dpdns.org/picture/kun-phone.png',
			   'https://zts.llmj.dpdns.org/picture/memes-phone.png',
			   'https://zts.llmj.dpdns.org/picture/kunkun-phone.png',
			   'https://zts.llmj.dpdns.org/picture/lq-phone.png']
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
function showmenu(){
	menu.style.display="block";
}
menu.style.display="none";
function kun(){
	isMouseDown=true;
	jumpkunnumber+=1;
	var randomnumber=Math.floor(Math.random()*randmusic.length);
	var music=new Audio(randmusic[randomnumber]);
	var angle=0;
	var opacity=0;
	var size=0;
	var sizeadd=5;
	var level=0;
	const otherjumpkun=jumpkunnumber;
	const imgplay=listimg[randomnumber]
	music.play();
	ikun.width=window.innerWidth;
	ikun.height=window.innerHeight;
	var mykun=ikun.getContext("2d");
	mykun.translate(event.touches[0].clientX,event.touches[0].clientY);
	function jumpkun(){
		mykun.clearRect(-100,-100,ikun.width,ikun.height);
		ikun.style.opacity=opacity;
		mykun.rotate(angle);
		mykun.drawImage(imgplay,-50,-50,size,size);
		angle+=0.105;
		opacity+=0.2;
		//console.log(angle);
		if(jumpkunnumber>otherjumpkun){
			mykun.clearRect(-100,-100,ikun.width,ikun.height);
			return;}
		if(size==150){
			if(!isMouseDown){
				cancelkun();
				return;}
			music=new Audio("https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/cbeff33450177980/xnj.mp3");
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
		if(level>17){
			music.pause();
			mykun.clearRect(-100,-100,ikun.width,ikun.height);
			showmenu();
			return;
		}
		if(isMouseDown){
			size+=sizeadd;
			opacity+=0.02;
			if(size>150){sizeadd=-5;level+=1;}
			if(size<100){sizeadd=5;level+=1;}
			requestAnimationFrame(drawkun);
		}else{
			music.pause();
			mykun.clearRect(-100,-100,ikun.width,ikun.height);
			cancelkun();
			return;}
	}
	function cancelkun(){
		ikun.style.opacity=opacity;
		mykun.clearRect(-100,-100,ikun.width,ikun.height);
		mykun.drawImage(imgplay,-50,-50,size,size);
		opacity-=0.3;
		size+=5;
		if(opacity<-10){return;}
		else{requestAnimationFrame(cancelkun);}
	}jumpkun();
}
//这里是下载音乐
var msc=document.getElementsByName("下载音乐");
msc[0].addEventListener("click",()=>{
	alert("因为浏览器的安全要求，我无法强制发起下载请求，想要你自己点击音频的下载")
	window.open("../music/xnj.mp3","_blank")
});
//这里是kun的点击
document.addEventListener('touchstart',kun);
document.addEventListener('contextmenu',function(){event.preventDefault()});
document.addEventListener('touchend',function(event){
	isMouseDown=false;
});
