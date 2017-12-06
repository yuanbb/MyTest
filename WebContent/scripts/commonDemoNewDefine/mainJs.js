define(['./query'],function(query){
	   function initEvent(){
	   	    $("#refresh").on('click',function(){
                  query.loadEchartsBar();
	   	    });
	   };
	   initEvent();
       query.loadEchartsBar();
});