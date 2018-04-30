var up = document.getElementById("up");
var down = document.getElementById("down");

			up.onclick = function(e){
					e = e || window.event;
					var target = e.srcElement || e.target,
					    tagName = target.tagName.toLowerCase(),
						allLi = document.getElementById("up").getElementsByClassName("block");
					
					for(var i=0,len=allLi.length;i<len;i++){
						if(target == allLi[i]){
							allLi[i].style.background = "red";
							
							//down.getElementById(target.id) = "red";
						}else{
							allLi[i].style.background = "#744583";
						}
					}
			};
		
		down.onclick = function(e){
					e = e || window.event;
					var target = e.srcElement || e.target,
					    tagName = target.tagName.toLowerCase(),
						allblock = document.getElementById("down").getElementsByClassName("block");
					
					for(var i=0,len=allblock.length;i<len;i++){
						if(target == allblock[i]){
							allblock[i].style.background = "red";
						}else{
							allblock[i].style.background = " #416b71";
						}
					}
			
		};

			$('.up .box').click(function(){
				$(this).find('.block').css('backgroundColor','red').parent('.box').siblings('.box').find('.block').css('backgroundColor','#744583');
				$('.down .box').eq($(this).index()).find('.block').addClass('color_red').parent('.box').siblings('.box').find('.block').removeClass('color_red');
			});
			$('.down .box').click(function(){
				$(this).find('.block').addClass('color_red').parent('.box').siblings('.box').find('.block').removeClass('color_red');
				$('.up .box').eq($(this).index()).find('.block').addClass('color_red').parent('.box').siblings('.box').find('.block').removeClass('color_red');
			});
		