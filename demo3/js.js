
		
$(document).ready(function(){
	
	var game={
		exe:function(){
			this.map(0)
		},
		//关卡数据
		bg:[
			//第一关地图
			{
				map:[
					0,0,1,1,1,1,0,0,
					0,0,1,3,3,1,0,0,
					0,1,1,2,3,1,1,0,
					0,1,2,2,2,3,1,0,
					1,1,2,2,2,2,1,1,
					1,2,2,1,2,2,2,1,
					1,2,2,2,2,2,2,1,
					1,1,1,1,1,1,1,1,
				],
				size:[8,8],
				box:[
					{x:4,y:3},
					{x:3,y:4},
					{x:4,y:5},
					{x:5,y:5},
				],
				person:[3,6]
			},
			//第二关数据
			{
				map:[
					0,1,1,1,1,1,1,1,1,
					0,1,2,2,2,2,2,2,1,
					0,1,2,2,2,2,2,2,1,
					1,1,2,2,2,2,2,3,1,
					1,2,2,2,1,2,3,3,1,
					1,2,2,2,1,2,2,2,1,
					1,2,2,2,1,2,2,2,1,
					1,1,1,1,1,1,1,1,1
				],
				size:[9,8],
				box:[
					{x:2,y:4},
					{x:3,y:3},
					{x:5,y:4},
				],
				person:[4,2],
			}
		],
		//创建地图
		map:function(index){
			$("#wrap").empty();//清除之前的地图
			$("#wrap").css({"width":this.bg[index].size[0]*50,"height":this.bg[index].size[1]*50});
			for (var i=0;i<this.bg[index].map.length;i++){
				$("#wrap").append("<div class='map"+this.bg[index].map[i]+"'></div>");
			}//增加墙
			for (var i=0;i<this.bg[index].box.length;i++){
				var $box=$("<div class='box'></div>");//单独定义  每循环一次就可以生成一个div
				$("#wrap").append($box);
				$box.css({"top":this.bg[index].box[i].y*50,"left":this.bg[index].box[i].x*50});
			}//增加箱子
			var $person=$("<div class='person'></div>")
			$("#wrap").append($person)//增加乌龟
			$("div.person").css({"top":this.bg[index].person[1]*50,"left":this.bg[index].person[0]*50});
			
			$person.data("x",this.bg[index].person[0]);//存好乌龟原始位置
			$person.data("y",this.bg[index].person[1]);
			this.moveperson(index,$person,this);//移动的执行
			
		},
		moveperson: function(index,$person,This){
			$(document).unbind("keydown");
			$(document).bind("keydown",function(event){ //用bind事件绑定 以便后面清除  解决卡顿
				switch(event.which){
					case 37:
						$person.css({"backgroundPosition":"-150px 0px"});
						This.moveP({x:-1},index,This,$person);
						break; 
					
					case 38:
						$person.css({"backgroundPosition":"0px 0px"});
						This.moveP({y:-1},index,This,$person);
					break;
					
					case 39:
						$person.css({"backgroundPosition":"-50px 0px"});
						This.moveP({x:1},index,This,$person);
					break;
					
					case 40:
						$person.css({"backgroundPosition":"-100px 0px"});
						This.moveP({y:1},index,This,$person);
					break;
				}
			})
		},
		moveP:function(json,index,This,$person){
			
			var ox=json.x || 0;
			var oy=json.y || 0;
			
			if (This.bg[index].map[($person.data("y")+oy)*This.bg[index].size[1]+$person.data("x")+ox]!=1){
				$person.data("y",$person.data("y")+oy);
				$person.data("x",$person.data("x")+ox);
				$person.css({"top":$person.data("y")*50+"px","left":$person.data("x")*50+"px"});
			}
			
			//碰撞检测后的执行
			$(".box").each(function(i){
				if (This.pz($person,$(this)) && This.bg[index].map[($person.data("y")+oy)*This.bg[index].size[0]+($person.data("x")+ox)]!=1 ){ //第一个判断条件是乌龟是否与盒子碰撞  第二个是判断盒子与墙是否碰撞
					$(this).css({"top":($person.data("y")+oy)*50,"left":($person.data("x")+ox)*50});//使盒子到达乌龟+-1的位置
					
					//盒子与盒子的碰撞
					$(".box").each(function(j){
						if (This.pz($(".box").eq(i),$(".box").eq(j)) && i!=j){
							$(".box").eq(i).css({"top":$person.data("y")*50+"px","left":$person.data("x")*50+"px"});
							$person.data("y",$person.data("y")-oy);
							$person.data("x",$person.data("x")-ox);
							$person.css({"top":$person.data("y")*50+"px","left":$person.data("x")*50+"px"});
						}
					})
					
				}else if (This.pz($person,$(this)) && This.bg[index].map[($person.data("y")+oy)*This.bg[index].size[0]+($person.data("x")+ox)]==1){//第一个判断条件是乌龟是否与盒子碰撞  第二个是判断乌龟与盒子是否碰撞
					$person.data("y",$person.data("y")-oy);
					$person.data("x",$person.data("x")-ox);
					$person.css({"top":$person.data("y")*50+"px","left":$person.data("x")*50+"px"});
				}
				This.pass(This,index);
			})
			
		},
		//碰撞检测 是否碰墙
		pz:function(obj1,obj2){  //obj1乌龟 obj2墙壁
			var l1=obj1.position().left;
			var t1=obj1.position().top;
			var b1=obj1.position().top+obj1.height();
			var r1=obj1.position().left+obj1.width();
			
			var l2=obj2.position().left;
			var t2=obj2.position().top;
			var b2=obj2.position().top+obj2.height();
			var r2=obj2.position().left+obj2.width();
			if(l1>=r2 || t1>=b2 || r1<=l2 ||b1<=t2){
				//没有撞上
				return false;
			}else{
				//撞上
				return true;
			}
		},
		pass:function(This,index){
			var num=0
			$(".map3").each(function(i){
				$(".box").each(function(j){
					if (This.pz($(".map3").eq(i),$(".box").eq(j) )){
						num++;
					}
				})
				if(num==$(".map3").size()){
					index++;
					This.map(index);
				}
			})
		}
	}
	game.exe();
	
	
	
	
	
	
})
