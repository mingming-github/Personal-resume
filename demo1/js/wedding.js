



$(document).ready(function(){
	$("#wedding .weddingcon .weddinghead span img.swich2").click(function(){
		$(this).attr("src","images/weddingimg/but2a.gif");
		$("#wedding .weddingcon .weddinghead span img.swich1").attr("src","images/weddingimg/but1.gif");
		$("#wedding .weddingcon .group1").removeClass().addClass("group2");
		$(".partleft a img").css({"width":"262px","height":"auto"})
	})
	
	$("#wedding .weddingcon .weddinghead span img.swich1").click(function(){
		$(this).attr("src","images/weddingimg/but1a.gif");
		$("#wedding .weddingcon .weddinghead span img.swich2").attr("src","images/weddingimg/but2.gif");
		$("#wedding .weddingcon .group2").removeClass().addClass("group1");
		$(".partleft a img").css({"width":"","height":""})
	})
})
