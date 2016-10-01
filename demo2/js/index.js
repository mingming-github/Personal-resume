$(function(){
	/* 左右滑动菜单 */
	var onoff=true;
	$("#page_head .menu").click(function(){
		if(onoff){
			$("#page").animate({left:"60%"},"slow");
			$("#page_nav").animate({left:"0"},"slow");
			//$("#page_nav").addClass("opac_1");
		}else{
	     	$("#page_nav").animate({left:"-60%"},"slow");
			$("#page").animate({left:"0"},"slow");
			//$("#page_nav").removeClass("opac_1");
		}
		onoff=!onoff;
	})
	
	/* 离线课程页面选项 */
	$("#page_tap .page_taphead ul li").click(function(){
		$(this).addClass("bottom_line").siblings().removeClass();
		$("#page_tap .page_tapbody ul li").eq($(this).index()).show().siblings().hide();
	})
})
