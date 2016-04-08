//banner轮播
var ban=document.getElementsByClassName("banner")[0];
var imgs=document.getElementsByClassName("tab_pannel",ban);
var lis=document.getElementsByClassName("span");
var btnL=document.getElementsByClassName("btnL")[0];
var btnR=document.getElementsByClassName("btnR")[0];

var t;
var num=0;
var flag=true;
t=setInterval(moveR,2000);

     //鼠标移上停止，移走继续自动轮播
     ban.onmouseover=function(){
     	clearInterval(t);
     	btnL.style.display="block";
     	btnR.style.display="block";
     }
     ban.onmouseout=function(){
     	clearInterval(t);
     	t=setInterval(moveR,2000);
     	btnL.style.display="none";
     	btnR.style.display="none";
     }

     //圆点按钮
     for(var i=0;i<lis.length;i++){
     	lis[i].index=i;
     	lis[i].onmouseover=function(){
     		num=this.index;
     		for(var j=0;j<imgs.length;j++){
     			animate(imgs[j],{opacity:0});
     			lis[j].style.background="#211616"
     		}
     		animate(imgs[this.index],{opacity:1});
     		lis[this.index].style.background="#e5004f";
     	}
     }




     //左右按钮
     btnR.onclick=function(){
     	moveR();
     }
     btnL.onclick=function(){
     	moveL();
     }
     
     function moveL(){
     	num--;
     	if(num<0){
     		num=imgs.length-1;
     	}
     	for(var i=0;i<imgs.length;i++){
     		animate(imgs[i],{opacity:0});
     		lis[i].style.background="#211616";
     	}
     	animate(imgs[num],{opacity:1});
     	lis[num].style.background="#e5004f";
     }
     
      //自动轮播
      function moveR(){
      	num++;
      	if(num==imgs.length){
      		num=0;
      	}
      	for(var i=0;i<imgs.length;i++){
      		animate(imgs[i],{opacity:0});
      		lis[i].style.background="#211616"
      	}
      	animate(imgs[num],{opacity:1});
      	lis[num].style.background="#e5004f";

      }

//购物车
var car=document.getElementsByClassName('minishop')[0];
var item=document.getElementsByClassName('shop-item')[0];
car.onmouseover=function(){
  item.style.display="block";
}
car.onmouseout=function(){
	item.style.display="none";
}

//微信
var weixin=document.getElementsByClassName('log-wechat')[0];
var wechat=document.getElementsByClassName('wechat')[0];
weixin.onmouseover=function(){
	weixin.classList.add('yt-wechat');
	wechat.style.display="block";
}
weixin.onmouseout=function(){
	weixin.classList.remove('yt-wechat');
	wechat.style.display="none";
}

//列表
var list=document.getElementsByClassName('all-out')[0];
var dls=document.getElementsByTagName('dl');
var dds=document.getElementsByTagName('dd');
for(var i=0;i<dls.length;i++){
	dls[i].index=i;
	dls[i].onmouseover=function(){
		for(var j=0;j<dls.length;j++){
			dds[j].style.display="none";
		}
		dds[this.index].style.display="block";
	}
 dls[i].onmouseout=function(){
  for(var j=0;j<dls.length;j++){
   dds[j].style.display="none";
 }
}
}

//边框

var border=function(obj,width,height){
	var border=document.getElementsByClassName('border_animation');
  for(var j=0;j<obj.length;j++){
   (function(){
     var top=document.getElementsByClassName('border_top');
     var right=document.getElementsByClassName('border_right');
     var bottom=document.getElementsByClassName('border_bottom');
     var left=document.getElementsByClassName('border_left');
     var img=document.getElementsByClassName('img_wrap');
     for(var i=0;i<img.length;i++){
      img[i].index=i;
      img[i].onmouseover=function(){
        for(var i=0;i<img.length;i++){
         top[this.index].style['width']=width+'px';
         bottom[this.index].style['width']=width+'px';
         left[this.index].style['height']=height+'px';
         right[this.index].style['height']=height+'px';
       }
     }
     img[i].onmouseout=function(){
      for(var i=0;i<img.length;i++){
       top[this.index].style['width']=0;
       bottom[this.index].style['width']=0;
       left[this.index].style['height']=0;
       right[this.index].style['height']=0;
     }
   }
 }
})()
}

}

var product=document.getElementsByClassName('product');
border('product','272','182');

/*var con-list=document.getElementsByTagName('con-list');
border('con')*/
