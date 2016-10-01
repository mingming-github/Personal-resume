
$(document).ready(function(){
	
	var indexpart=0;
	var winheight=$(window).height();
	var begintime=new Date();                  //建立一个滚动的开始时间
	
	setTimeout(function(){
		$(document).scrollTop(0);
	},600)                                     //窗口初始化
	
	
	$(window).resize(function(){
		winheight=$(window).height();
		$(document).scrollTop(indexpart*winheight)
	})
	
	/*第一部分字体效果*/
	function part1(Top1,Top2,Top3,Top4,Top5,Top6,Top7,Top8,Opacity,Time){
		setTimeout(function(){
			$(".ph").stop().animate({"top":Top1},Time,function(){
				$(".pg").stop().animate({"top":Top2},Time,function(){
					$(".pf").stop().animate({"top":Top3},Time,function(){
						$(".pe").stop().animate({"top":Top4},Time,function(){
							$(".pd").stop().animate({"top":Top5},Time,function(){
								$(".pc").stop().animate({"top":Top6},Time,function(){
									$(".pb").stop().animate({"top":Top7},Time,function(){
										$(".pa").stop().animate({"top":Top8},Time)
									})
								})
							})
						})
					})
				})
			})
			$("#part1").stop().animate({"opacity":Opacity},3000);
			$("div.headpic").stop().animate({"opacity":Opacity},3000);	
		},500)
		
	}
	
	part1("77%","67%","57%","47%","37%","27%","15%","0%","1","2000");
	
	/*全屏滚动效果*/
	$(window).mousewheel(function(ev,delta){
		
		if (new Date()-begintime>800){         //判断用开始时间减去滚动时的开始时间
			begintime=new Date();
			if (delta==-1){
				
				if (indexpart>=5){
					indexpart=5;
				}else{
					indexpart++;
					switch(indexpart){
						case 1:
							part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
							case1("30%","1","1000px","600px","500px","300px","200px");//当前特效
							case2("0");
							case3("-100%","-100%","-100%");
							case5("100%","100%","100%");
						break;
						case 2:
							part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
							case1("-100%","1","0px","0px","0px","0px","0px");
							case2("1");                                                //当前特效
							case3("-100%","-100%","-100%");
							case5("100%","100%","100%");
						break;
						case 3:
							part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
							case1("-100%","1","0px","0px","0px","0px","0px");
							case2("0");
							case3("30%","15%","35%");//当前特效
							case5("100%","100%","100%");
						break;
						case 4:
							//五个部分都为初始状态
							part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
							case1("-100%","1","0px","0px","0px","0px","0px");				
							case2("0");
							case3("-100%","-100%","-100%");
							case5("100%","100%","100%");
						break;
						case 5:
							//五个部分都为初始状态
							part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
							case1("-100%","1","0px","0px","0px","0px","0px");  				
							case2("0");
							case3("-100%","-100%","-100%");
							case5("10%","30%","50%");//当前特效
						break;
					}
				}
				$("body").animate({"scrollTop":indexpart*winheight+"px"},800);
				$("html").animate({"scrollTop":indexpart*winheight+"px"},800);//全屏滚动兼容火狐浏览器
				$("#jd ul li").eq(indexpart).addClass("nowpart").siblings("li").removeClass("nowpart");//进度条变化
			}else if(delta==1){
				
				if (indexpart<=0){
					indexpart=0;
				}else{
					indexpart--;
					switch(indexpart){
						case 0:
							part1("77%","67%","57%","47%","37%","27%","15%","0%","1","2000");
						    //part1("77%","67%","57%","47%","37%","27%","15%","0%","1");
							case1("-100%","1","0px","0px","0px","0px","0px");           //五个部分都为初始状态
							case2("0");
							case3("-100%","-100%","-100%");
							case5("100%","100%","100%");
							
						break;
						case 1:
							part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
							case1("30%","1","1000px","600px","500px","300px","200px");    //当前特效
							case2("0");
							case3("-100%","-100%","-100%");
							case5("100%","100%","100%");
						break;
						case 2:
							part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
							case1("-100%","1","0px","0px","0px","0px","0px");
							case2("1");//当前特效
							case3("-100%","-100%","-100%");
							case5("100%","100%","100%");
						break;
						case 3:
							part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
							case1("-100%","1","0px","0px","0px","0px","0px");
							case2("0");
							case3("30%","15%","35%");//当前特效
							case5("100%","100%","100%");
						break;
						case 4:
							//五个部分都为初始状态
							part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
							case1("-100%","1","0px","0px","0px","0px","0px");
							case2("0");
							case3("-100%","-100%","-100%");
							case5("100%","100%","100%");
						break;
						case 5:
							//五个部分都为初始状态
							part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
							case1("-100%","1","0px","0px","0px","0px","0px");
							case2("0");
							case3("-100%","-100%","-100%");
							case5("10%","30%","50%");//当前特效
						break;
					}
				}
				$("body").animate({"scrollTop":indexpart*winheight+"px"},800);
				$("html").animate({"scrollTop":indexpart*winheight+"px"},800);//全屏滚动兼容火狐浏览器
				$("#jd ul li").eq(indexpart).addClass("nowpart").siblings("li").removeClass("nowpart");//进度条变化
			}
		}
	})
	
	
	/*进度条点击*/
	$("#jd ul li").click(function(){
		var thisindex=$(this).index();
		indexpart=thisindex;
		if (indexpart==0){
			part1("77%","67%","57%","47%","37%","27%","15%","0%","1","2000");//当前特效
			case1("-100%","1","0px","0px","0px","0px","0px");
			case2("0");
			case3("-100%","-100%","-100%");
			case5("100%","100%","100%");
		}
		if (indexpart==1){
			part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","10");
			case1("30%","1","1000px","600px","500px","300px","200px");						//当前特效
			case2("0");
			case3("-100%","-100%","-100%");
			case5("100%","100%","100%");
		}else if(indexpart==2){
			part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
			case1("-100%","1","0px","0px","0px","0px","0px");
			case2("1");																		//当前特效
			case3("-100%","-100%","-100%");
			case5("100%","100%","100%");
		}else if (indexpart==3){
			part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
			case1("-100%","1","0px","0px","0px","0px","0px");
			case2("0");
			case3("30%","15%","35%");	
			case5("100%","100%","100%");//当前特效
		}else if(indexpart==4){
			//五个部分都为初始状态
			part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
			case1("-100%","1","0px","0px","0px","0px","0px");
			case2("0");
			case3("-100%","-100%","-100%");
			case5("100%","100%","100%");
		}else if(indexpart==5){
			//五个部分都为初始状态
			part1("-100%","-100%","-100%","-100%","-100%","-100%","-100%","-100%","0.5","50");
			case1("-100%","1","0px","0px","0px","0px","0px");
			case2("0");
			case3("-100%","-100%","-100%");
			case5("10%","30%","50%");//当前特效
		}
		
		$("body").animate({"scrollTop":thisindex*winheight+"px"},800);
		$("#jd ul li").eq(thisindex).addClass("nowpart").siblings("li").removeClass("nowpart");//进度条变化
	})
	
	/*进度条的标题*/
	$("#jd ul li").hover(function(){
		var thisindex=$(this).index();
		$("#jd ul li p").eq(thisindex).fadeIn(300);
	},function(){
		$("#jd ul li p").fadeOut(200);
	})
	
	/*头像部分特效*/
	$("div.headimg").hover(function(){
		$(".headtwo").stop().animate({"opacity":"0"},500);
	},function(){
		$(".headtwo").stop().animate({"opacity":"1"},500);
	})
	
	
	/*第三部分经历图片*/
	var inowimg=0;
	$("p.next").click(function(){
		$("#part3_content ul li").eq(inowimg).addClass("hide").removeClass("show");
		if (inowimg==2){
			inowimg=0;
		}else{
			inowimg++;
		}
		$("#part3_content ul li").eq(inowimg).addClass("show").removeClass("hide");
	})
	$("p.pre").click(function(){
		$("#part3_content ul li").eq(inowimg).addClass("hide").removeClass("show");
		if (inowimg==0){
			inowimg=2;
		}else{
			inowimg--;
		}
		$("#part3_content ul li").eq(inowimg).addClass("show").removeClass("hide");
	})

	
	/*第四部分 兴趣与成就感点击*/
	$(".chengjiu").click(function(){
		$(this).addClass("part4bg").siblings("div").removeClass("part4bg");
		$(".whydata2").addClass("part4show").siblings("p").removeClass("part4show");
	})
    $(".intesting").click(function(){
		$(this).addClass("part4bg").siblings("div").removeClass("part4bg");
		$(".whydata1").addClass("part4show").siblings("p").removeClass("part4show");
	})
	
	
	/*第五部分例子图片*/
	$("div.demo").hover(function(){
		$(this).find("p.name").stop().animate({"top":"30%"},100);
		$(this).find("div.demo_link").stop().animate({"top":"43%"},100);
	},function(){
		$(this).find("p.name").stop().animate({"top":"-50%"},100);
		$(this).find("div.demo_link").stop().animate({"top":"130%"},100);
	})
	
	
	function case1(Left,Opacity,Width1,Width2,Width3,Width4,Width5){
		//头部标题
	    $("#part2_head").stop().animate({"left":Left,"opacity":Opacity},1500)
	    //技能的长度变化
	    $(".jn1").stop().delay(200).animate({"width":Width1},1000,function(){
	   	$(".jn span").fadeIn(500)
	   });
	    $(".jn2").stop().delay(200).animate({"width":Width2},1000,function(){
		   	$(".jn span").fadeIn(500)
		});
	    $(".jn3").stop().delay(200).animate({"width":Width3},1000,function(){
		   	$(".jn span").fadeIn(500)
		});
	    $(".jn4").stop().delay(200).animate({"width":Width4},1000,function(){
		   	$(".jn span").fadeIn(500)
		});
	    $(".jn5").stop().delay(200).animate({"width":Width5},1000,function(){
		   	$(".jn span").fadeIn(500)
		});
		//技能的内容的出现
		$(".jn").hover(function(){
			var inum=$(this).attr("num");
			$("ul.jndata li").eq(inum).slideDown(500);
		},function(){
			$("ul.jndata li").fadeOut(50);
		})
	}
	
	function case2(Opacity){
		$("#part3_head").stop().animate({"opacity":Opacity},2000);
	}
	
	function case3(Left1,Left2,Left3){
		$("#part4 h3").stop().delay(500).animate({"left":Left1},300,function(){
			$("#part4 p.whydata").stop().animate({"left":Left2},300,function(){
				$("#part4 div.why").stop().animate({"left":Left3},300)
			})
		})
	}
	
	function case5(Top1,Top2,Top3){
		$("#part6_head").stop().delay(200).animate({"top":Top1},300,function(){
			$("#part6 p.houji").stop().animate({"top":Top2},300,function(){
				$("#part6 p.houjidata").stop().animate({"top":Top3},300)
			})
		})
	}
})










































