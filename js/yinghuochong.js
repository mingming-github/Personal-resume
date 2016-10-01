//萤火虫函数构造器
function Yinghuo(){
	this.ele=$("<img src='images/1.jpg' />");
}
Yinghuo.prototype={
	show:function(){
		$(this.ele).css({"width":"18px","height":"18px","position":"absolute","top":this.pointY,"left":this.pointX});
		$("#part4").append(this.ele);
	},
	newpoint:function(){
		this.pointX=randomint(window.innerWidth-100);
		this.pointY=randomint(window.innerHeight-100);
	},
	speedtime:function(){
		this.yhspeedtime=(randomint(10)+5)*1000;
	},
	fly:function(){
		var _this=this;
		this.ele.animate({"top":this.pointY,"left":this.pointX},this.yhspeedtime,function(){
			_this.speedtime();
			_this.newpoint();
			_this.fly();
		})
	}
}

//获取随机数
	function randomint(max){
		return Math.floor(Math.random()*max);
	}
$(document).ready(function(){
	var pp=[];
	for (var i=0;i<30;i++){
		pp[i]=new Yinghuo();
		pp[i].newpoint();
		pp[i].speedtime();
		pp[i].show();
		pp[i].newpoint();
		pp[i].fly();
	}
})