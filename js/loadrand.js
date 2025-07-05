//以下图片为api.imlazy.ink/v1/img?type=json提供，为防止跨域因此无法直接访问它的api
$.getJSON("https://zts.llmj.dpdns.org/picture/img.json",function(data){
	const backgroundimg=data;
	const rand=Math.floor(Math.random()*backgroundimg.length);
	var ment=document.body;
	ment.style.backgroundImage='url('+backgroundimg[rand].url+')';
})
const randmusic=['https://zts.llmj.dpdns.org/music/j.mp3','https://zts.llmj.dpdns.org/music/n.mp3','https://zts.llmj.dpdns.org/music/t.mp3','https://zts.llmj.dpdns.org/music/m.mp3','https://zts.llmj.dpdns.org/music/lq.mp3']
const randimg=['https://zts.llmj.dpdns.org/picture/kunb.png','https://zts.llmj.dpdns.org/picture/kun.png','https://zts.llmj.dpdns.org/picture/memes.png','https://zts.llmj.dpdns.org/picture/kunkun.png','https://zts.llmj.dpdns.org/picture/lq.png']
const randtitle=['嘻嘻嘻','儿子回来啦','-','又是美好的一天','你还在等什么呢']
const titlerun=['乌蒙山连着山外山','大河向东流啊']
const musicrun=["https://zts.llmj.dpdns.org/music/奢香夫人.mp3",'https://zts.llmj.dpdns.org/music/好汉歌.mp3']
const timerun=['#aaffff','#00aaff','#0055ff','#0000ff']
const ikun=document.getElementById("ikun");
const title=document.getElementById("(～￣▽￣)～");
const now=Math.floor(new Date().getHours()/6);
var listimg=[];//预加载防止空跳kun出现
for(i=0;i<5;i++){
	var img=new Image();
	img.src=randimg[i];
	listimg[i]=img;}
var audio=new Audio(musicrun[thispage]);
var ruingingaudio=false;
function playaudio(){
	if (ruingingaudio)return;
	ruingingaudio=true;
	//我觉得它还可以处理一下音频
	var b=document.querySelector(".jump");
	b.style['animationName']='JUMP';
	setTimeout(()=>button.remove(),800);
	audio.currentTime=2;//125
	audio.loop=true;
	audio.play();}//因为开启动画是瞬间的，所以不用考虑先后
	
function kun(){
	var speed=15;
	var randm=Math.floor(Math.random()*randmusic.length);
	var music=new Audio(randmusic[randm]);
	music.play()//先放音乐
	const img=listimg[randm];
	ikun.width=window.innerWidth;
	ikun.height=window.innerHeight;
	var mykun=ikun.getContext("2d");
	var x=event.clientX;
	var y=event.clientY;
	var opacity=0;
	function jumpkun(){
		mykun.clearRect(0,0,window.innerWidth,window.innerHeight);
		mykun.drawImage(img,x-50,y-50,100,100);
		y-=speed;
		opacity+=0.05
		speed-=1;
		if((y+50)>window.innerHeight-250&&x<280){
			mykun.clearRect(0,0,window.innerWidth,window.innerHeight);
			return;}
		if(speed<0){
			drawkun();
			return
		}
		else{requestAnimationFrame(jumpkun);}
	}
	function drawkun(){
		mykun.clearRect(0,0,window.innerWidth,window.innerHeight);
		mykun.drawImage(img,x-50,y-50,100,100);
		ikun.style.opacity=opacity;
		y+=speed;
		//opacity+=0.05;
		speed+=1;
		if(y+50>window.innerHeight){
			speed=-20;//速度，控制下落
		}
		if((y+50)>window.innerHeight-250&&x<280){
			mykun.clearRect(0,0,window.innerWidth,window.innerHeight);
			return;}
		else{requestAnimationFrame(drawkun);}
	}jumpkun();//IKUN!！！！！！
}

function change(){
	if(document.hidden){
		audio.pause();
		title.textContent="(っ °Д °;)不要走";
	}
	else{
		audio.play();
		var randm=Math.floor(Math.random()*randtitle.length)
		if(randtitle[randm]=='-'){title.textContent="(～￣▽￣)～"+titlerun[thispage];}
		else{title.textContent="(～￣▽￣)～"+randtitle[randm];}
	}
}

function date(){
	var a=document.querySelectorAll("a");
	var link=document.querySelectorAll("#link");
	a.forEach((css)=>{
		if (css.id!="title" && css.id!="xr"){
			css.style.color=timerun[now];
			css.addEventListener('mouseover',()=>css.style.color="#ff0000");
			css.addEventListener('mouseout',()=>css.style.color=timerun[now]);
		}});
	link.forEach((css)=>{
		css.style.color=timerun[now];
		css.addEventListener('mouseout',()=>css.style.color=timerun[now]);
		});
}
function openwindow(number){
	if number{
		window.open(musicrun[thispage],"_blank");
	}
	else{
		window.open(backgroundimg[rand],"_blank");
	}
}
//识别炎拳
var button=document.getElementById("炎拳");
button.addEventListener('click',playaudio);
//ikun
document.addEventListener('click',kun);
//导航栏
var download=document.getElementById("title");
var menu=document.getElementById("menu");
var text=download.textContent;
function showmenu(){
	menu.style.display="block";
}
menu.style.display="none";
download.href="javascript:showmenu()";
download.addEventListener('mouseover',()=>download.textContent="导航菜单");
download.addEventListener('mouseout',()=>download.textContent=text);
//(～￣▽￣)～
document.addEventListener('visibilitychange',change);
//按时间变颜色
date();
