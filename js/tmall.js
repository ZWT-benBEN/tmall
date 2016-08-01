window,onload=function(){
	// 我的淘宝
	var top_r1_a=$(".top_r1_a")[0];
	var mytb=$(".mytb")[0];

		top_r1_a.onmouseover=function(){
			mytb.style.display="block";
		}
		top_r1_a.onmouseout=function(){
			mytb.style.display="none";
		}
	// 收藏夹
	var top_r1_d=$(".top_r1_d")[0];
	var top_r1_shoucang=$(".top_r1_shoucang")[0];
		top_r1_d.onmouseover=function(){
			top_r1_shoucang.style.display="block";
		}
		top_r1_d.onmouseout=function(){
			top_r1_shoucang.style.display="none";
		}

	// 手机版

	var top_r2_a=$(".top_r2_a")[0];
	var top_erweima=$(".top_erweima")[0];
		top_r2_a.onmouseover=function(){
			top_erweima.style.display="block";
		}
		top_r2_a.onmouseout=function(){
			top_erweima.style.display="none";
		}

	// 商家支持

	var top_r2_c=$(".top_r2_c")[0];
	var top_shangjia=$(".top_shangjia")[0];
		top_r2_c.onmouseover=function(){
			top_shangjia.style.display="block";
		}
		top_r2_c.onmouseout=function(){
			top_shangjia.style.display="none";
		}
	// nav
	var nav_l2=$(".nav_l2");

	var nav_item=$(".nav_item");
		for(var i=0;i<nav_l2.length;i++){
			nav_l2[i].index=i;
			nav_l2[i].onmouseover=function(){
				animate(nav_item[this.index],{top:-26});
			}
			nav_l2[i].onmouseout=function(){	
			animate(nav_item[this.index],{top:0});
			}
		}
	
		/*nav_l2[i].index=i;
		nav_l2[i].onmouseover=function(){
			
			nav_item[this.index].style.display="block";
		}
		nav_l2[i].onmouseout=function(){
			
			nav_item[this.index].style.display="none";
		}*/
	

	// bannerleft
	var banner_left=$(".banner_left")[0];
	
	var banner_item=$(".banner_item")[0];
		banner_left.onmouseover=function(){
			banner_item.style.display="block";
		}
		banner_left.onmouseout=function(){
			banner_item.style.display="none";
		}

	// 轮播
var win=$(".banner_middle")[0];
    var as=$("a",win);
    var lis=$("li",$(".point")[0]);
    var num=0;
     
    
    var stop=setInterval(lunboR,2000);

    win.onmouseover=function(){
	  clearInterval(stop);
    }
    win.onmouseout=function(){
	stop=setInterval(lunboR,2000);
    }
    var flag=true;
    lis.onmouseover=function(){
        if (flag) {
        flag=false;
    	lunboR();
     }
    }
    
    function lunboR(){
    	num++;
    	if(num==as.length){
    		num=0;
    	}
    	for(var i=0;i<as.length;i++){
    		animate(as[i],{opacity:0})
    		lis[i].className="";
    		/*as[i].style.zIndex=5;*/

    	}
    	lis[num].className="point_hot";
    	animate(as[num],{opacity:1},
    		function(){
    		flag=true;
    	})
       
    }
    //点点
    for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onclick=function(){
	for(var j=0;j<as.length;j++){
		animate(as[j],{opacity:0});
		lis[j].className="";
    } 
    lis[this.index].className="point_hot"
   animate(as[this.index],{opacity:1});
    num=this.index;
    	}
   }



// 楼层跳转
	//点击相应楼层按钮，让scrolltop=arr[i];
	var flag=true;
	var sflag=true;
	var lia=$("li",$(".jump")[0]);
	var search=$(".search")[0];
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onclick=function(){
			for(var j=0;j<lia.length;j++){
				flag=false;
				lia[j].style.background="#626262";
			}
			lia[this.index].style.background="red";
			//var obj=document.body.scrollTop?document.body:document.documentElement;
			animate(document.body,{scrollTop:arr[this.index]},function(){
				flag=true;
			})
			animate(document.documentElement,{scrollTop:arr[this.index]},function(){
				flag=true;
			})
		}
	}
// 按需加载
var floor=$(".floor");

	var arr=[];
	var heights=document.documentElement.clientHeight;
	for(var i=0;i<floor.length;i++){
		arr.push(floor[i].offsetTop);
	}
	window.onscroll=function(){
		
	var obj=document.body.scrollTop?document.body:document.documentElement;
	var scrolltop=obj.scrollTop;

	for(var i=0;i<floor.length;i++){
		if(scrolltop+heights>=arr[i]){
			var img=$("img",floor[i]);

			for(var j=0;j<img.length;j++){
				img[j].src=img[j].getAttribute("imgpath");

			}
		}
	}
	if(scrolltop>=arr[1]){
		if(sflag){
			sflag=false;
			animate(search,{top:0});
		}
		
	}else{
		if(!sflag){
			sflag=true;
			animate(search,{top:-50});
		}
		
	}

	
	if(!flag){
		return;
	}
	for(var i=0;i<floor.length;i++){
		if(scrolltop+heights>=arr[i]+400){
			for(var j=0;j<lia.length;j++){
				lia[j].style.background="#626262";
			}
			lia[i].style.background="red";
		}
	}

}

	// 覆盖
	
	var hotbrd=$(".hotbrd_md1");
	
	var zhezhao=$(".zhezhao");

		for(var i=0;i<hotbrd.length;i++){
		hotbrd[i].index=i;
		hotbrd[i].onmouseover=function(){
			zhezhao[this.index].style.display="block";
		}
		hotbrd[i].onmouseout=function(){
			zhezhao[this.index].style.display="none";
		}
	}


	// 潮流
	/*var climg=$(".cl_b1_t3");
	var chaoliu=$(".chaoliu_b1_a")
*/

// 亲子


var qinzi_brimg=$(".qinzi_br1img");
	
	for(var i=0;i<qinzi_brimg.length;i++){
	qinzi_brimg[i].index=i
	qinzi_brimg[i].onmouseover=function(){
		animate(qinzi_brimg[this.index],{right:-1})
	}
	qinzi_brimg[i].onmouseout=function(){
		animate(qinzi_brimg[this.index],{right:-10})
	}
}

var qinzi_brimg1=$(".qinzi_tre1img");

	for(var i=0;i<qinzi_brimg1.length;i++){
		qinzi_brimg1[i].index=i
	qinzi_brimg1[i].onmouseover=function(){
		animate(qinzi_brimg1[this.index],{right:-1})
	}
	qinzi_brimg1[i].onmouseout=function(){
		animate(qinzi_brimg1[this.index],{right:-10})
	}
}

// 户外
var huwai_br1img=$(".huwai_br1img");

	for(var i=0;i<huwai_br1img.length;i++){
		huwai_br1img[i].index=i
	huwai_br1img[i].onmouseover=function(){
		animate(huwai_br1img[this.index],{right:-1})
	}
	huwai_br1img[i].onmouseout=function(){
		animate(huwai_br1img[this.index],{right:-10})
	}
}

var huwai_tre1img=$(".huwai_tre1img");

	for(var i=0;i<huwai_tre1img.length;i++){
		huwai_tre1img[i].index=i
	huwai_tre1img[i].onmouseover=function(){
		animate(huwai_tre1img[this.index],{right:-1})
	}
	huwai_tre1img[i].onmouseout=function(){
		animate(huwai_tre1img[this.index],{right:-10})
	}
}


// 爱巢
var aichao_br1img=$(".aichao_br1img");

	for(var i=0;i<aichao_br1img.length;i++){
		aichao_br1img[i].index=i
	aichao_br1img[i].onmouseover=function(){
		animate(aichao_br1img[this.index],{right:-1})
	}
	aichao_br1img[i].onmouseout=function(){
		animate(aichao_br1img[this.index],{right:-10})
	}
}

var aichao_tre1img=$(".aichao_tre1img");

	for(var i=0;i<aichao_tre1img.length;i++){
		aichao_tre1img[i].index=i
	aichao_tre1img[i].onmouseover=function(){
		animate(aichao_tre1img[this.index],{right:-1})
	}
	aichao_tre1img[i].onmouseout=function(){
		animate(aichao_tre1img[this.index],{right:-10})
	}
}


// 居家
var jujia_br1img=$(".jujia_br1img");

	for(var i=0;i<jujia_br1img.length;i++){
		jujia_br1img[i].index=i
	jujia_br1img[i].onmouseover=function(){
		animate(jujia_br1img[this.index],{right:-1})
	}
	jujia_br1img[i].onmouseout=function(){
		animate(jujia_br1img[this.index],{right:-10})
	}
}

var jujia_tre1img=$(".jujia_tre1img");

	for(var i=0;i<jujia_tre1img.length;i++){
		jujia_tre1img[i].index=i
	jujia_tre1img[i].onmouseover=function(){
		animate(jujia_tre1img[this.index],{right:-1})
	}
	jujia_tre1img[i].onmouseout=function(){
		animate(jujia_tre1img[this.index],{right:-10})
	}
}

var jujia_br1img=$(".jujia_br1img");

	for(var i=0;i<jujia_br1img.length;i++){
		jujia_br1img[i].index=i
	jujia_br1img[i].onmouseover=function(){
		animate(jujia_br1img[this.index],{right:-1})
	}
	jujia_br1img[i].onmouseout=function(){
		animate(jujia_br1img[this.index],{right:-10})
	}
}

var kuwan_br1img=$(".kuwan_br1img");

	for(var i=0;i<kuwan_br1img.length;i++){
		kuwan_br1img[i].index=i
	kuwan_br1img[i].onmouseover=function(){
		animate(kuwan_br1img[this.index],{right:-1})
	}
	kuwan_br1img[i].onmouseout=function(){
		animate(kuwan_br1img[this.index],{right:-10})
	}
}

var beautylife_tre1img=$(".beautylife_tre1img");

	for(var i=0;i<beautylife_tre1img.length;i++){
		beautylife_tre1img[i].index=i
	beautylife_tre1img[i].onmouseover=function(){
		animate(beautylife_tre1img[this.index],{right:-1})
	}
	beautylife_tre1img[i].onmouseout=function(){
		animate(beautylife_tre1img[this.index],{right:-10})
	}
}

var beautylife_br1img=$(".beautylife_br1img");

	for(var i=0;i<beautylife_br1img.length;i++){
		beautylife_br1img[i].index=i
	beautylife_br1img[i].onmouseover=function(){
		animate(beautylife_br1img[this.index],{right:-1})
	}
	beautylife_br1img[i].onmouseout=function(){
		animate(beautylife_br1img[this.index],{right:-10})
	}
}









}