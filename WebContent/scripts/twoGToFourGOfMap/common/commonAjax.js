function commonAjax(url,dataStr,type,async,loadingId,callback){
	 
        if(!type ||type =="" ||type ==null){type = 'POST';};
        if(!async ||async =="" ||async ==null){async = false;};
        var result = "";
	    $.ajax({
			        url :eastcom.baseURL+url ,
			        type : type,
			        async : async,
			        dataType : "json",
			        contentType :"application/json",
			        data:dataStr,
			        success : function(data) {
			            result = data;
			        	callback(data);
			        },
                    complete: function(XMLHttpRequest, textStatus){
			              //HideLoading();
						  if(loadingId != ""){
						      $("#"+loadingId).unmask();
						  };
		            },
		            error: function(){
			              //请求出错处理
						  eastcom.showMsg("danger","请求异常,数据加载失败!");
		            }
			});
        return result;
	
};



/////////////////////////////////////////////////////////////////////////////////////////
///          var userPostJson= {                                                      ///
///	                          "ifId":"groupcus-cfg-queryQuaPicUserAllErrNum",     ///
///                  		  "timeType":allNetBound.timeType,                    ///
///                  		  "timeid":allNetBound.time,                          ///
///                  		  "isArea":"true",                                    ///                          
///                  		  "topN":"10"                                         ///
///                  		  }                                                   ///
///	       var userPostStr=JSON.stringify(userPostJson);      **********          /// 
///	       var userUrl="/group/customers/picUserAnalyze";                         ///
/////////////////////////////////////////////////////////////////////////////////////////


/*

第一种调用方法
$("#loadingId").mask("数据加载中,请稍后....");
commonAjax(userUrl, userPostStr, "post", false,"loadingId", function(userData){
		 
		  
		  allNetBound.userData=userData;
		  var childList= formaterJsmindData(allNetBound.newResult,allNetBound.userData,"用户侧");
		  initJsMind("jsMindCenter",childList,"用户侧");
 });

---------------------------------------------------------------------------------------------

第二种调用方法

$("#loadingId").mask("数据加载中,请稍后....");
var res = commonAjax(userUrl,userPostStr,"post",false,"loadingId",function(data){});


res是获取的数据



*/