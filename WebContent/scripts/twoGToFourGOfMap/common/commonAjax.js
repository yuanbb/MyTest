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
			              //���������
						  eastcom.showMsg("danger","�����쳣,���ݼ���ʧ��!");
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

��һ�ֵ��÷���
$("#loadingId").mask("���ݼ�����,���Ժ�....");
commonAjax(userUrl, userPostStr, "post", false,"loadingId", function(userData){
		 
		  
		  allNetBound.userData=userData;
		  var childList= formaterJsmindData(allNetBound.newResult,allNetBound.userData,"�û���");
		  initJsMind("jsMindCenter",childList,"�û���");
 });

---------------------------------------------------------------------------------------------

�ڶ��ֵ��÷���

$("#loadingId").mask("���ݼ�����,���Ժ�....");
var res = commonAjax(userUrl,userPostStr,"post",false,"loadingId",function(data){});


res�ǻ�ȡ������



*/