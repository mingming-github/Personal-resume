

$(document).ready(function(){
	/*导航部分*/
	$("#pageHead_nav .searchbox .searchimg").click(function(ev){
		ev.stopPropagation();
		$(this).hide();
		$("#pageHead_nav .searchbox .searchcont").animate({"right":"0px"},function(){
			$("#pageHead_nav .searchbox .searchcont form input.searchtext").focus()
		});
	})
	
	$("#pageHead_nav .searchbox .searchcont form input.searchtext").blur(function(ev){
		$("#pageHead_nav .searchbox .searchimg").show(1000);
		$("#pageHead_nav .searchbox .searchcont").animate({"right":"-230px"})
	})
	//图片渐隐渐现
	fadeoutin();
	function fadeoutin(){
		var onoff=true;
		setInterval(function(){
			if(onoff){
				$("#pageHead_list div:nth-of-type(3) ul li:nth-of-type(1) img").fadeOut(1000);
			}else{
				$("#pageHead_list div:nth-of-type(3) ul li:nth-of-type(1) img").fadeIn(1000);
			}
			onoff=!onoff;
		},1000)
	}
	/*红人专栏*/
	$("#page_sec1 .sec1_cont .sec1_left .sec1_lefttop .xingqi_txt li").mouseover(function(){
		var imgnow=$(this).index();
		$("#page_sec1 .sec1_cont .sec1_left .sec1_lefttop .xingqi_img li").eq(imgnow).fadeIn(600).siblings().fadeOut(400);
		//$("#page_sec1 .sec1_cont .sec1_left .sec1_lefttop .xingqi_img li").eq(imgnow).addClass("img_show").siblings().removeClass("img_show");
	})
	/*热门排行*/
	$("#page_sec1 .sec1_cont .sec1_right .sec1_rightbottom .hot_list .hot_listtop span").mouseover(function(){
		var contnow=$(this).index();
		$(this).addClass("hot_listtop_active").siblings().removeClass("hot_listtop_active");
		/*$("#page_sec1 .sec1_cont .sec1_right .sec1_rightbottom .hot_list .hot_cont").hide();
		$("#page_sec1 .sec1_cont .sec1_right .sec1_rightbottom .hot_list .hot_cont").eq(contnow).fadeIn(500);*/
		$("#page_sec1 .sec1_cont .sec1_right .sec1_rightbottom .hot_list .hot_cont").eq(contnow).fadeIn(100).siblings(".hot_cont").hide(0);
	})
	/*左下的轮播图*/
	var ilbnum=0;
	var timer1=null;
	var lbwidth=$("#page_sec1 .sec1_cont .sec1_left .sec1_leftbottom").width();
	function lblunbo(){
		timer1=setInterval(function(){
			if(ilbnum==3){
				ilbnum=0;
			}else{
				ilbnum++;
			}
			$("#page_sec1 .sec1_cont .sec1_left .sec1_leftbottom ul.leftbottom_img").animate({"left":-ilbnum*lbwidth});
			$("#page_sec1 .sec1_cont .sec1_left .sec1_leftbottom ul.leftbottom_ico li").eq(ilbnum).addClass("ico_active").siblings().removeClass("ico_active");
		},1500)
	}
	lblunbo();
	//左下下面小图标
	$("#page_sec1 .sec1_cont .sec1_left .sec1_leftbottom ul.leftbottom_ico li").mouseenter(function(){
		clearInterval(timer1);
		ilbnum=$(this).index();
		$("#page_sec1 .sec1_cont .sec1_left .sec1_leftbottom ul.leftbottom_img").animate({"left":-ilbnum*lbwidth});
		$("#page_sec1 .sec1_cont .sec1_left .sec1_leftbottom ul.leftbottom_ico li").eq(ilbnum).addClass("ico_active").siblings().removeClass("ico_active");
	})
	$("#page_sec1 .sec1_cont .sec1_left .sec1_leftbottom ul.leftbottom_ico li").mouseleave(function(){
		lblunbo();
	})
	//左下鼠标放入停止
	$("#page_sec1 .sec1_cont .sec1_left .sec1_leftbottom ul.leftbottom_ico li").mouseenter(function(){
		clearInterval(timer1);
	});
	$("#page_sec1 .sec1_cont .sec1_left .sec1_leftbottom ul.leftbottom_ico li").mouseleave(function(){
		clearInterval(timer1);
		lblunbo();
	});
	/*右上轮播*/
	var rtnum=0;
	var timer2=null;
	var rtwidth=$("#page_sec1 .sec1_cont .sec1_right .sec1_righttop div.centerclick ul li").width();
	function gundong1(){
		$("#page_sec1 .sec1_cont .sec1_right .sec1_righttop div.centerclick ul").animate({"left":-rtnum*rtwidth});
		$("#page_sec1 .sec1_cont .sec1_right .sec1_righttop .right_ico li").eq(rtnum).addClass("ico_active1").siblings().removeClass("ico_active1");
	}
	function rtlunbo(){
		timer2=setInterval(function(){
			if(rtnum==4){
				rtnum=0;
			}else{
				rtnum++;
			}
			gundong1();
		},2000)
	}
	rtlunbo();
	//右上下面小图标
	$("#page_sec1 .sec1_cont .sec1_right .sec1_righttop .right_ico li").mouseenter(function(){
		clearInterval(timer2);
		rtnum=$(this).index();
		gundong1();
	})
	$("#page_sec1 .sec1_cont .sec1_right .sec1_righttop .right_ico li").mouseleave(function(){
		rtlunbo();
	})
	//点击上下滚动
	$("#page_sec1 .sec1_cont .sec1_right .sec1_righttop span.leftclick").click(function(){
		if(rtnum==0){
			rtnum=4;
		}else{
			rtnum--;
		}
		gundong1();
	})
	$("#page_sec1 .sec1_cont .sec1_right .sec1_righttop span.rightclick").click(function(){
		if(rtnum==4){
			rtnum=0;
		}else{
			rtnum++;
		}
		gundong1();
	})
	//右上鼠标放入后停止滚动
	$("#page_sec1 .sec1_cont .sec1_right .sec1_righttop").mouseenter(function(){
		clearInterval(timer2);
	});
	$("#page_sec1 .sec1_cont .sec1_right .sec1_righttop").mouseleave(function(){
		clearInterval(timer2);
		rtlunbo();
	});
	/*大图片轮播效果*/
	var bigpicw=$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_center li").width();
	//从第二张开始
	var bignum=1;
	//点击右边
	$("#page_sec1 .sec1_lunbo .bigpic_show div.shadow_right img").click(function(){
		if (bignum==9){//滚到倒第二张
			bignum=1;
			//让整个变为0后，再滚动到-750px
			$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_center").css("left","0px");
			$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_center").animate({"left":-bignum*bigpicw});
		}else{
			bignum++;
		}
		$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_center").animate({"left":-bignum*bigpicw});
		$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_ico li").eq(bignum).addClass("ico_active2").siblings("li").removeClass("ico_active2");
	})
	//点击左边
	$("#page_sec1 .sec1_lunbo .bigpic_show div.shadow_left img").click(function(){
		if (bignum==1){//滚到第二张
			bignum=9;
			//让整个变为-8*bigpicw+"px"后，再滚动到-9*bigpicw+"px"
			$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_center").css("left",-8*bigpicw+"px");
			$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_center").animate({"left":-bignum*bigpicw+"px"});
		}else{
			bignum--;
		}
		$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_center").animate({"left":-bignum*bigpicw});
		$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_ico li").eq(bignum).addClass("ico_active2").siblings("li").removeClass("ico_active2");
	})
	//点击小点
	$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_ico li").click(function(){
		bignum=$(this).index();
		$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_center").animate({"left":-bignum*bigpicw});
		$("#page_sec1 .sec1_lunbo .bigpic_show ul.bigpic_ico li").eq(bignum).addClass("ico_active2").siblings("li").removeClass("ico_active2");
	})
	
	
	
	/*第二部分  瑞丽互动左边*/
	$("#page_sec2 .sec2_cont .sec2_left ul.sec2_lefthead li").mouseover(function(){
		var _thisindex=$(this).index();
		$(this).addClass("ico_active3").siblings("li").removeClass("ico_active3");
		$("#page_sec2 .sec2_cont .sec2_left ul.sec2_leftcont").eq(_thisindex).addClass("sec2_leftcontactive").siblings("ul").removeClass("sec2_leftcontactive")
	})
	/*第二部分  中间*/
	$("#page_sec2 .sec2_cont .sec2_center div.cen12 ul li").mouseover(function(){
		$(this).find(".showp").hide().parent().siblings("li").find(".showp").show();
		$(this).find("div").show().parent().siblings("li").find("div").hide();
	})
	
	
	
	
	/*第三部分  左上部分*/
	var liwidth=$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul li").width();
	setInterval(function(){
		$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul").append($("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul li:first"));
		$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul").css("left","-480px").animate({"left":"0px"},600);
		$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop span font").text($("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul li:first").attr("num"))
	},2000)
	
	$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop .sec3_lefttop_nav img.dirr").click(function(){
		$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul").css("left","-480px").stop().animate({"left":"0px"},600);
		$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul").append($("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul li:first"));
		$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop span font").text($("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul li:first").attr("num"))
	})
	$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop .sec3_lefttop_nav img.dirl").click(function(){
		$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul").prepend($("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul li:last"));
		$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul").css("left","-480px").stop().animate({"left":"0px"},600);
		$("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop span font").text($("#page_sec3 .sec3_cont .sec3_left .sec3_lefttop ul li:first").attr("num"))
	})
	
	/*第三部分  最下面部分*/
	var inow=0;
	$("img.bottomdirimgll").click(function(){
		var len=$(".sec3_bottomleftbox ul li").length;
		if (inow==0){
			$(".sec3_bottomleft .sec3_bottomleftbox .sec3_box").prepend($(".sec3_bottomleft .sec3_bottomleftbox .sec3_box").html());
			$(".sec3_bottomleft .sec3_bottomleftbox .sec3_box").css("left","-1020px")
			inow=6
		}
		inow--;
		$(".sec3_bottomleftbox .sec3_box ").stop().animate({"left":-inow*170+"px"},400)
	})
	
	$("img.bottomdirimgrr").click(function(){
		inow++;
		var len=$(".sec3_bottomleftbox ul li").length;
		if (inow+5>len){
			$(".sec3_bottomleft .sec3_bottomleftbox .sec3_box").append($(".sec3_bottomleft .sec3_bottomleftbox .sec3_box").html());
		}
		$(".sec3_bottomleftbox .sec3_box ").stop().animate({"left":-inow*170+"px"},400)
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})

































