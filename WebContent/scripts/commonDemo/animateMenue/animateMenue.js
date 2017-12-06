var animateMenue = {
			init:function(){
				animateMenue.initEvent();
				//点击一下
				$('#menu_1 .tab-inner').eq(0).click();
			},
			initEvent : function(){
				$('#menu_1 .tab-inner').on('click',function(){
					$('#menu_1 .detail-box').animate({height:0},500);
					var obj = $(this).parent().siblings(".detail-box");
					obj.animate({height:parseInt(obj.find('.detail-main').css('height'))+10},500);
					
					$('#menu_1 .tab-inner').removeClass('active');
					$(this).addClass('active');
					var currName = $(this).parent().parent().attr('name');
				});
			}
};