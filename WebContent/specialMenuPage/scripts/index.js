var index = {


	
      _initCls : function(){
				!jQuery('#menu_user_service') || (function(){
					jQuery('#menu_user_service').delegate('li a[class="main_r_menu_t"]','click', function(){
						//jQuery('#menu_user_service').find('a[class="main_r_menu_o"]:eq(0)').attr("class","main_r_menu_t");
						jQuery(this).attr("class","main_r_menu_o");
						jQuery(this).find('i.fa').removeClass("fa-plus-square-o").addClass("fa-minus-square-o");
						if(jQuery(this).next('ul').is(":visible")){
							jQuery(this).siblings('ul').slideUp();
						}else{
							jQuery(this).next('ul').slideDown().siblings('ul').slideUp();
						}
						eastcom.syncIframeHeight();
					});
					jQuery('#menu_user_service').delegate('li a[class="main_r_menu_o"]','click', function(){
						//jQuery('#menu_user_service').find('a[class="main_r_menu_o"]:eq(0)').attr("class","main_r_menu_t");
						jQuery(this).attr("class","main_r_menu_t");
						jQuery(this).find('i.fa').removeClass("fa-minus-square-o").addClass("fa-plus-square-o");
						if(jQuery(this).next('ul').is(":visible")){
							jQuery(this).siblings('ul').slideUp();
						}else{
							jQuery(this).next('ul').slideDown().siblings('ul').slideUp();
						}
						eastcom.syncIframeHeight();
					});
				})();
				!jQuery('ul[class="c_9388403838738"]') || (function(){
					jQuery('ul[class="c_9388403838738"]').delegate('li','mouseout', function(){
						$(this).css("font-weight","normal");
					});
					jQuery('ul[class="c_9388403838738"]').delegate('li','mouseover', function(){
						$(this).css("font-weight","bold");
					});
					jQuery('ul[class="c_9388403838738"]').delegate('li','click', function(){
						$.each($('ul[class="c_9388403838738"]'), function(){
							$(this).children('li').find('span').css("color","");
						});
						$(this).find('span').css("color","#0085d0");
						var createId = $(this).find(':hidden').val();
						index._createPanel(createId);
					});
				})();
	},
   _createPanel : function(url){
		if (url) {
			$("#iframeReport").attr("src",eastcom.baseURL + url);
		}
	},
	
   _initMenuHtml : function(data){
		var htmlStr = "";
		var createFirst = "";
		if(data != undefined && data.length>0 && data[0].childs.length>0){
			htmlStr += '<div id="menu_user_service" style="width:100%;">' +
						'<div class="main_r_menu" style="width:99%;">';
			htmlStr +='<ul>';
			data = data[0].childs;
			for (var i = 0; i < data.length; i++) {
				var menu = data[i];							
				if (i==0) {
					htmlStr +='<li style=" margin-top: 0px;	">' +
							'<a class="main_r_menu_o" style="cursor:pointer;">' +
							'<i class="fa fa-minus-square-o" style="float:left;margin:13px 0 0 13px;"></i>' +
							'<span>'+menu.nameCn+'</span></a>' ;
				}else{
					htmlStr +='<li >' +
							'<a class="main_r_menu_t" style="cursor:pointer;">' +
							'<i class="fa fa-plus-square-o" style="float:left;margin:13px 0 0 13px;"></i>' +
							'<span>'+menu.nameCn+'</span></a>' ;
				}
				var subMenu = menu.childs;
				if (subMenu != undefined && subMenu.length>0) {
					if (i==0) {
						htmlStr += "<ul class='c_9388403838738'>";
					}else{
						htmlStr += "<ul class='c_9388403838738' style='display:none'>";
					}
					for (var j = 0; j < subMenu.length; j++) {					
						var lisub = subMenu[j];
						var _url = lisub.location;
						//_url = _url.substring(_url.indexOf("class='")+7, _url.length-1)
						if (createFirst == "") {
							createFirst = _url;
						}
						var liStyle='style="cursor:pointer;"';
						if(i==0 && j==0){
							liStyle='style="cursor:pointer;color:#0085d0;"';
						}
						htmlStr += '<li ><a><span '+liStyle+'>'+lisub.nameCn+'' +
								'</span></a>'+
								'<input type="hidden" name="'+lisub.name+'" value="'+_url+'"/>' +
								'</li>';
					}
					htmlStr += "</ul>";
				}
				htmlStr += "</li>";
			}
			htmlStr +='</ul>';
			htmlStr += '</div>' +
				'</div>';
		};
		if (createFirst != "") {
			index._createPanel(createFirst);
		}
		return htmlStr;
	},
    getMenus :function() {
		/*$.ajax({
			type : "POST",
			async : true, // 改为同步请求
			url : eastcom.baseURL + "/videoReport/getMenus",
			data : {
				SrvId : 'videoReportRsServer.getMenus',
    			params:JSON.stringify({
					flag: "videoReport"
				})
			},
			dataType : "json",
			success : function(data) {
				if(data.success=='true'){
					var data = data.data.list;
					$("#videoReportMenu").empty();
					$("#videoReportMenu").html(index._initMenuHtml(data));
					index._initCls();
				}else{
					eastcom.showMsg("danger","加载菜单失败 ")
				}
			}
		});*/


		var data = {
				    "data": {
				        "resultCode": "0",
				        "message": "查询成功",
				        "list": [
				            {
				                "id": "8a5d6b9156dfd0c70156f8102fce0002",
				                "image": {},
				                "isShowDesktop": "0",
				                "isWebpage": "1",
				                "kind": "0",
				                "location": "/pages/videoReport/videoReportMain.jsp",
				                "name": "videoReport",
				                "nameCn": "视频报表",
				                "order": 6,
				                "pid": "8a5d6b9155b46d180155b47604770001",
				                "status": "1",
				                "childs": [
				                    {
				                        "id": "8a5d6b9156dfd0c70156f81c42e70005",
				                        "image": {},
				                        "isShowDesktop": "0",
				                        "isWebpage": "0",
				                        "kind": "0",
				                        "location": "welcome.jsp",
				                        "name": "busiQualityReport",
				                        "nameCn": "业务质量报表",
				                        "order": 0,
				                        "pid": "8a5d6b9156dfd0c70156f8102fce0002",
				                        "status": "1",
				                        "childs": [
				                            {
				                                "id": "8a5d6b9156dfd0c70156f8210bb20009",
				                                "image": {},
				                                "isShowDesktop": "0",
				                                "isWebpage": "1",
				                                "kind": "0",
				                                "location": "/specialMenuPage/pages/index1.jsp",
				                                "name": "busiKQIQuality",
				                                "nameCn": "业务KQI质量指标",
				                                "order": 0,
				                                "pid": "8a5d6b9156dfd0c70156f81c42e70005",
				                                "status": "1",
				                                "childs": [
				                                    {
				                                        "id": "8a5d6b9156dfd0c70156f82403fa000d",
				                                        "image": {},
				                                        "isShowDesktop": "0",
				                                        "isWebpage": "0",
				                                        "kind": "1",
				                                        "location": "/videoReport/getKQI",
				                                        "name": "busiKQIQuality_logAuth",
				                                        "nameCn": "KQI质量报表查询日志显示权限",
				                                        "order": 0,
				                                        "pid": "8a5d6b9156dfd0c70156f8210bb20009",
				                                        "status": "1",
				                                        "childs": []
				                                    }
				                                ]
				                            },
				                            {
				                                "id": "8a5d6b9156dfd0c70156f821af95000a",
				                                "image": {},
				                                "isShowDesktop": "0",
				                                "isWebpage": "1",
				                                "kind": "0",
				                                "location": "/specialMenuPage/pages/index2.jsp",
				                                "name": "busiKPIQuality",
				                                "nameCn": "业务KPI质量指标",
				                                "order": 1,
				                                "pid": "8a5d6b9156dfd0c70156f81c42e70005",
				                                "status": "1",
				                                "childs": [
				                                    {
				                                        "id": "8a5d6b9156dfd0c70156f824d9ff000e",
				                                        "image": {},
				                                        "isShowDesktop": "0",
				                                        "isWebpage": "0",
				                                        "kind": "1",
				                                        "location": "/videoReport/getKPI",
				                                        "name": "busiKPIQuality_logAuth",
				                                        "nameCn": "KPI质量报表查询日志显示权限",
				                                        "order": 0,
				                                        "pid": "8a5d6b9156dfd0c70156f821af95000a",
				                                        "status": "1",
				                                        "childs": []
				                                    }
				                                ]
				                            },
				                            {
				                                "id": "8a5d6b9156dfd0c70156f8225573000b",
				                                "image": {},
				                                "isShowDesktop": "0",
				                                "isWebpage": "1",
				                                "kind": "0",
				                                "location": "/pages/videoReport/busiSPServer.jsp",
				                                "name": "busiSPServer",
				                                "nameCn": "业务SP服务器",
				                                "order": 2,
				                                "pid": "8a5d6b9156dfd0c70156f81c42e70005",
				                                "status": "1",
				                                "childs": [
				                                    {
				                                        "id": "8a5d6b9156dfd0c70156f8258a93000f",
				                                        "image": {},
				                                        "isShowDesktop": "0",
				                                        "isWebpage": "0",
				                                        "kind": "1",
				                                        "location": "/videoReport/getSP",
				                                        "name": "busiSPServer_logAuth",
				                                        "nameCn": "业务SP服务器查询日志显示权限",
				                                        "order": 0,
				                                        "pid": "8a5d6b9156dfd0c70156f8225573000b",
				                                        "status": "1",
				                                        "childs": []
				                                    }
				                                ]
				                            },
				                            {
				                                "id": "8a5d6b9156dfd0c70156f823086d000c",
				                                "image": {},
				                                "isShowDesktop": "0",
				                                "isWebpage": "1",
				                                "kind": "0",
				                                "location": "/pages/videoReport/busiHOSTReport.jsp",
				                                "name": "busiHOSTReport",
				                                "nameCn": "业务HOST报表",
				                                "order": 3,
				                                "pid": "8a5d6b9156dfd0c70156f81c42e70005",
				                                "status": "1",
				                                "childs": [
				                                    {
				                                        "id": "8a5d6b9156dfd0c70156f82671c10010",
				                                        "image": {},
				                                        "isShowDesktop": "0",
				                                        "isWebpage": "0",
				                                        "kind": "1",
				                                        "location": "/videoReport/getHOST",
				                                        "name": "busiHOSTReport_logAuth",
				                                        "nameCn": "业务HOST报表查询日志显示权限",
				                                        "order": 0,
				                                        "pid": "8a5d6b9156dfd0c70156f823086d000c",
				                                        "status": "1",
				                                        "childs": []
				                                    }
				                                ]
				                            }
				                        ]
				                    },
				                    {
				                        "id": "8a5d6b9156dfd0c70156f81cf7650006",
				                        "image": {},
				                        "isShowDesktop": "0",
				                        "isWebpage": "0",
				                        "kind": "0",
				                        "location": "welcome.jsp",
				                        "name": "userCountReport",
				                        "nameCn": "用户数报表",
				                        "order": 1,
				                        "pid": "8a5d6b9156dfd0c70156f8102fce0002",
				                        "status": "1",
				                        "childs": [
				                            {
				                                "id": "8a5d6b9156dfd0c70156f82752c50011",
				                                "image": {},
				                                "isShowDesktop": "0",
				                                "isWebpage": "1",
				                                "kind": "0",
				                                "location": "/pages/videoReport/userCountReport.jsp",
				                                "name": "userCountReportSub",
				                                "nameCn": "用户数报表",
				                                "order": 0,
				                                "pid": "8a5d6b9156dfd0c70156f81cf7650006",
				                                "status": "1",
				                                "childs": [
				                                    {
				                                        "id": "8a5d6b9156dfd0c70156f8285b9d0012",
				                                        "image": {},
				                                        "isShowDesktop": "0",
				                                        "isWebpage": "0",
				                                        "kind": "1",
				                                        "location": "/videoReport/getUserCount",
				                                        "name": "userCountReportSub_logAuth",
				                                        "nameCn": "用户报表查询日志显示权限",
				                                        "order": 0,
				                                        "pid": "8a5d6b9156dfd0c70156f82752c50011",
				                                        "status": "1",
				                                        "childs": []
				                                    }
				                                ]
				                            }
				                        ]
				                    },
				                    {
				                        "id": "8a5d6b9157faccfc0157fb1b98700000",
				                        "image": {},
				                        "isShowDesktop": "0",
				                        "isWebpage": "0",
				                        "kind": "0",
				                        "location": "welcome.jsp",
				                        "name": "areaQualityReport",
				                        "nameCn": "区域KQI质量报表",
				                        "order": 2,
				                        "pid": "8a5d6b9156dfd0c70156f8102fce0002",
				                        "status": "1",
				                        "childs": [
				                            {
				                                "id": "8a5d6b9157faccfc0157fb1c3f990001",
				                                "image": {},
				                                "isShowDesktop": "0",
				                                "isWebpage": "1",
				                                "kind": "0",
				                                "location": "/pages/videoReport/areaKQIQualityReport.jsp",
				                                "name": "areaKQIQualityReport",
				                                "nameCn": "地市KQI质量报表",
				                                "order": 0,
				                                "pid": "8a5d6b9157faccfc0157fb1b98700000",
				                                "status": "1",
				                                "childs": [
				                                    {
				                                        "id": "8a5d6b9157faccfc0157fb1cc9990002",
				                                        "image": {},
				                                        "isShowDesktop": "0",
				                                        "isWebpage": "0",
				                                        "kind": "1",
				                                        "location": "/videoReport/getAreaKQI",
				                                        "name": "areaKQIQuality_logAuth",
				                                        "nameCn": "地市KQI质量报表查询日志显示权限",
				                                        "order": 0,
				                                        "pid": "8a5d6b9157faccfc0157fb1c3f990001",
				                                        "status": "1",
				                                        "childs": []
				                                    }
				                                ]
				                            },
				                            {
				                                "id": "8a5d6b9157faccfc0157fb1d68f00003",
				                                "image": {},
				                                "isShowDesktop": "0",
				                                "isWebpage": "1",
				                                "kind": "0",
				                                "location": "/pages/videoReport/cellKQIQualityReport.jsp",
				                                "name": "cellKQIReport",
				                                "nameCn": "小区KQI质量报表",
				                                "order": 1,
				                                "pid": "8a5d6b9157faccfc0157fb1b98700000",
				                                "status": "1",
				                                "childs": [
				                                    {
				                                        "id": "8a5d6b9157faccfc0157fb1de1e80004",
				                                        "image": {},
				                                        "isShowDesktop": "0",
				                                        "isWebpage": "0",
				                                        "kind": "1",
				                                        "location": "/videoReport/getCellKQI",
				                                        "name": "cellKQIQuality_logAuth",
				                                        "nameCn": "小区KQI质量报表查询日志显示权限",
				                                        "order": 0,
				                                        "pid": "8a5d6b9157faccfc0157fb1d68f00003",
				                                        "status": "1",
				                                        "childs": []
				                                    }
				                                ]
				                            }
				                        ]
				                    },
				                    {
				                        "id": "8a5d6b9157faccfc0157fb1e717d0005",
				                        "image": {},
				                        "isShowDesktop": "0",
				                        "isWebpage": "0",
				                        "kind": "0",
				                        "location": "welcome.jsp",
				                        "name": "neKQIQualityReport",
				                        "nameCn": "网元KQI质量报表",
				                        "order": 3,
				                        "pid": "8a5d6b9156dfd0c70156f8102fce0002",
				                        "status": "1",
				                        "childs": [
				                            {
				                                "id": "8a5d6b9157faccfc0157fb1ee86f0006",
				                                "image": {},
				                                "isShowDesktop": "0",
				                                "isWebpage": "1",
				                                "kind": "0",
				                                "location": "/pages/videoReport/neKQIQualityReport.jsp",
				                                "name": "neKQIReport",
				                                "nameCn": "网元KQI质量报表",
				                                "order": 0,
				                                "pid": "8a5d6b9157faccfc0157fb1e717d0005",
				                                "status": "1",
				                                "childs": [
				                                    {
				                                        "id": "8a5d6b9157faccfc0157fb1f55c60007",
				                                        "image": {},
				                                        "isShowDesktop": "0",
				                                        "isWebpage": "0",
				                                        "kind": "1",
				                                        "location": "/videoReport/getNEKQI",
				                                        "name": "neKQIQuality_logAuth",
				                                        "nameCn": "网元KQI质量报表查询日志显示权限",
				                                        "order": 0,
				                                        "pid": "8a5d6b9157faccfc0157fb1ee86f0006",
				                                        "status": "1",
				                                        "childs": []
				                                    }
				                                ]
				                            }
				                        ]
				                    }
				                ]
				            }
				        ],
				        "count": 0
				    },
				    "msg": "",
				    "success": "true"
				};
		if(data.success=='true'){
			var data = data.data.list;
			$("#videoReportMenu").empty();
			$("#videoReportMenu").html(index._initMenuHtml(data));
			index._initCls();
		}else{
			eastcom.showMsg("danger","加载菜单失败 ")
		}		
   }

};
