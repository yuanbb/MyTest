var _CacheFun = {
    __cache : {},
    //获取所有缓存对象
    _getCacheObj: function() {
            if (!this.__cache) {
                this.__cache = {};
            }
            return this.__cache;
        },
        //新增一个对象到缓存里
        _bindCache: function(id, data) {
            var cache = this._getCacheObj();
            cache[id] = data;
        },
        //获取一个对象从缓存里
        _getCache: function(id) {
            var cache = this._getCacheObj();
            if (cache) {
                if (id && id.length) {
                    return cache[id];
                } else {
                    return null;
                }
            }else{
              return null;
            }
        },
        //清空缓存
        _clearCache: function() {
            this.__cache = {};
        }
};
//获取配置菜单数据-------------------------------------------------------------------
var result = [];
function getMenuData(par,index,type,async,func) { 
    if(!type ||type =="" ||type ==null){type = 'POST';};
    if(!async ||async =="" ||async ==null){async = false;};
    if(index != "" || index){
        $('#'+index).mask("正在查询数据...");
    }; 
    //par 接口参数    index 需要加载loading的id  可以为空字符串
    var res = [];
    var url = "/sysmng/asynchronizeGetSysCommon?name=" + par + "&node=root&sort=%5B%7B%22property%22%3A%22order%22%2C%22direction%22%3A%22ASC%22%7D%5D";
    $.ajax({
        url: eastcom.baseURL + url,
        type: type,
        async: async, 
        dataType: "json",
        contentType: "application/json",
        data: "",
        success: function (data) {
            var item = data[0];
            seek(par, item);
            res = sorts(result);  
            func(res) ;           //返回结果如下
        },
        complete: function(XMLHttpRequest, textStatus){
                 //HideLoading();
                 if(index != "" || index){
                     $('#'+index).unmask();
                 };                 
        },
        error: function(){
              //请求出错处理
              eastcom.showMsg("danger","请求异常,数据加载失败!");
        }
    });
    return res;
};
function getMenuDatas(par,index) {
    var results = "";
    var url = "/sysmng/asynchronizeGetSysCommon?name=" + par + "&node=root&sort=%5B%7B%22property%22%3A%22order%22%2C%22direction%22%3A%22ASC%22%7D%5D";
    $.ajax({
        url: eastcom.baseURL + url,
        type: "POST",
        async: false,
        dataType: "json",
        contentType: "application/json",
        data: "",
        success: function (data) {
            results = data;
            if(index != "" || index){
                $('#'+index).unmask();
            };
        }
    });
    return results;
};
function seek(par, obj) {
    if (par != obj.name && obj.children) {
        seek(par, obj.children[0]);
    } else {
        result = obj.children;
    };
};
function sorts(obj) {
    var resultArr = [];
    if (obj) {
        obj.sort(function (a, b) {
            return a.order - b.order
        });
    };
    return obj;
};




/*这里是返回结果数据格式
[
    {
        "id": "8a5d6b91572665ea01573bf98dff0013",
        "parentId": "8a5d6b91572665ea01573b2a75b50008",
        "name": "KQI_HTTP_DISPLAY_DELAY",
        "label": "页面显示时延",
        "value": "KQI_HTTP_DISPLAY_DELAY",
        "order": "1",
        "attribute": "ms",
        "leaf": true
    },
    {
        "id": "8a5d6b91572665ea01573bf61a0c0011",
        "parentId": "8a5d6b91572665ea01573b2a75b50008",
        "name": "KQI_HTTP_RESP_DELAY",
        "label": "页面响应时延",
        "value": "KQI_HTTP_RESP_DELAY",
        "order": "2",
        "attribute": "ms",
        "leaf": true
    },
    {
        "id": "8a5d6b91572665ea01573bf8e9880012",
        "parentId": "8a5d6b91572665ea01573b2a75b50008",
        "name": "KQI_HTTP_DISPLAY_SUCCRATE",
        "label": "页面显示成功率",
        "value": "KQI_HTTP_DISPLAY_SUCCRATE",
        "order": "3",
        "attribute": "%",
        "leaf": true
    },
    {
        "id": "8a5d6b91572665ea01573bfacf830014",
        "parentId": "8a5d6b91572665ea01573b2a75b50008",
        "name": "KQI_HTTP_DL_RATE",
        "label": "页面下载速率",
        "value": "KQI_HTTP_DL_RATE",
        "order": "4",
        "attribute": "kbps",
        "leaf": true
    },
    {
        "id": "8a5d6b91572665ea01573bef8506000f",
        "parentId": "8a5d6b91572665ea01573b2a75b50008",
        "name": "KQI_HTTP_RESP_SUCCRATE",
        "label": "页面响应成功率",
        "value": "KQI_HTTP_RESP_SUCCRATE",
        "order": "5",
        "attribute": "%",
        "leaf": true
    }
]




*/

//-----------------------------------------------------
var resultCurr
function getMenuDataCurr(par,index) {         //获取自己的信息
    var data = getMenuDatas(par,index);
    if(data.length == 0){return "null";};
    var item = data[0];
    seekCurr(par, item);
    return resultCurr;
}

function seekCurr(par, obj) {
    if (par != obj.name && obj.children) {
        seekCurr(par, obj.children[0]);
    } else {
        resultCurr = obj;
    }
}

/*这里是返回结果数据格式
{
        "id": "8a5d6b91572665ea01573bef8506000f",
        "parentId": "8a5d6b91572665ea01573b2a75b50008",
        "name": "KQI_HTTP_RESP_SUCCRATE",
        "label": "页面响应成功率",
        "value": "KQI_HTTP_RESP_SUCCRATE",
        "order": "5",
        "attribute": "%",
        "leaf": true
    }
*/

























/////////////////////////////////////////////////////////////////////////////////////

function getMenuData_Test(par,index,type,async,func) { 
   
    var res = [];
   
    if (par == "subway_userPathAnalysis") {
        var data = [
                        {
                            "id": "8a8804454201ed2a014202c8015d0001",
                            "parentId": "",
                            "name": "serviceModuleDataConfig",
                            "label": "业务模块数据配置",
                            "value": "serviceModuleDataConfig",
                            "order": "1",
                            "attribute": "serviceModuleDataConfig",
                            "children": [
                                {
                                    "id": "4028819f57db05d70157db8886160000",
                                    "parentId": "8a8804454201ed2a014202c8015d0001",
                                    "name": "LocalRequireConfigOfSH",
                                    "label": "上海本地需求配置",
                                    "value": "shagnhai",
                                    "order": "28",
                                    "attribute": "",
                                    "children": [
                                        {
                                            "id": "8a5d6b915b1e90d2015b22f053fb0001",
                                            "parentId": "4028819f57db05d70157db8886160000",
                                            "name": "hignspeedConfig",
                                            "label": "高铁指标配置",
                                            "value": "0",
                                            "order": "7",
                                            "attribute": "",
                                            "children": [
                                                {
                                                    "id": "8a5d6b915b13d582015b17a8e6080000",
                                                    "parentId": "8a5d6b915b1e90d2015b22f053fb0001",
                                                    "name": "subway_userPathAnalysis",
                                                    "label": "用户轨迹指标配置",
                                                    "value": "subway_userPathAnalysis",
                                                    "order": "2",
                                                    "attribute": "",
                                                    "children": [
                                                        {
                                                            "id": "8a5d6b915b13d582015b18743b680001",
                                                            "parentId": "8a5d6b915b13d582015b17a8e6080000",
                                                            "name": "indexClass1",
                                                            "label": "覆盖质量",
                                                            "value": "indexClass1",
                                                            "order": "0",
                                                            "attribute": "",
                                                            "leaf": true
                                                        },
                                                        {
                                                            "id": "8a5d6b915b13d582015b187514950003",
                                                            "parentId": "8a5d6b915b13d582015b17a8e6080000",
                                                            "name": "indexClass3",
                                                            "label": "覆盖里程",
                                                            "value": "indexClass3",
                                                            "order": "2",
                                                            "attribute": "",
                                                            "leaf": true
                                                        },
                                                        {
                                                            "id": "8a5d6b915b13d582015b187585d80004",
                                                            "parentId": "8a5d6b915b13d582015b17a8e6080000",
                                                            "name": "indexClass4",
                                                            "label": "扩展指标",
                                                            "value": "indexClass4",
                                                            "order": "3",
                                                            "attribute": "",
                                                            "leaf": true
                                                        }
                                                    ],
                                                    "totalChildnum": 3,
                                                    "leaf": false,
                                                    "expanded": true
                                                }
                                            ],
                                            "totalChildnum": 1,
                                            "leaf": false,
                                            "expanded": true
                                        }
                                    ],
                                    "totalChildnum": 1,
                                    "leaf": false,
                                    "expanded": true
                                }
                            ],
                            "totalChildnum": 1,
                            "leaf": false,
                            "expanded": true
                        }
                    ];
        var item = data[0];
        seek(par, item);
        res = sorts(result);  
        func(res) ;           
    }else if (par == "indexClass1") {
        var data = [
                        {
                            "id": "8a8804454201ed2a014202c8015d0001",
                            "parentId": "",
                            "name": "serviceModuleDataConfig",
                            "label": "业务模块数据配置",
                            "value": "serviceModuleDataConfig",
                            "order": "1",
                            "attribute": "serviceModuleDataConfig",
                            "children": [
                                {
                                    "id": "4028819f57db05d70157db8886160000",
                                    "parentId": "8a8804454201ed2a014202c8015d0001",
                                    "name": "LocalRequireConfigOfSH",
                                    "label": "上海本地需求配置",
                                    "value": "shagnhai",
                                    "order": "28",
                                    "attribute": "",
                                    "children": [
                                        {
                                            "id": "8a5d6b915b1e90d2015b22f053fb0001",
                                            "parentId": "4028819f57db05d70157db8886160000",
                                            "name": "hignspeedConfig",
                                            "label": "高铁指标配置",
                                            "value": "0",
                                            "order": "7",
                                            "attribute": "",
                                            "children": [
                                                {
                                                    "id": "8a5d6b915b13d582015b17a8e6080000",
                                                    "parentId": "8a5d6b915b1e90d2015b22f053fb0001",
                                                    "name": "subway_userPathAnalysis",
                                                    "label": "用户轨迹指标配置",
                                                    "value": "subway_userPathAnalysis",
                                                    "order": "2",
                                                    "attribute": "",
                                                    "children": [
                                                        {
                                                            "id": "8a5d6b915b13d582015b18743b680001",
                                                            "parentId": "8a5d6b915b13d582015b17a8e6080000",
                                                            "name": "indexClass1",
                                                            "label": "覆盖质量",
                                                            "value": "indexClass1",
                                                            "order": "0",
                                                            "attribute": "",
                                                            "children": [
                                                                {
                                                                    "id": "8a5d6b915b13d582015b1876f3750005",
                                                                    "parentId": "8a5d6b915b13d582015b18743b680001",
                                                                    "name": "lte_synthesize_cover_rate",
                                                                    "label": "LTE综合覆盖率",
                                                                    "value": "50,<",
                                                                    "order": "0",
                                                                    "attribute": "%",
                                                                    "leaf": true
                                                                },
                                                                {
                                                                    "id": "8a5d6b915b13d582015b18df5565000f",
                                                                    "parentId": "8a5d6b915b13d582015b18743b680001",
                                                                    "name": "lte_mileage_cover_rare",
                                                                    "label": "LTE里程覆盖率",
                                                                    "value": "50,<",
                                                                    "order": "1",
                                                                    "attribute": "%",
                                                                    "leaf": true
                                                                },
                                                                {
                                                                    "id": "8a5d6b915b13d582015b18dff8010010",
                                                                    "parentId": "8a5d6b915b13d582015b18743b680001",
                                                                    "name": "lte_caiyang_cover_rete",
                                                                    "label": "LTE采样点覆盖率",
                                                                    "value": "50,<",
                                                                    "order": "2",
                                                                    "attribute": "%",
                                                                    "leaf": true
                                                                },
                                                                {
                                                                    "id": "8a5d6b915b13d582015b18e081be0011",
                                                                    "parentId": "8a5d6b915b13d582015b18743b680001",
                                                                    "name": "average_cqi",
                                                                    "label": "平均CQI",
                                                                    "value": "5000,<",
                                                                    "order": "3",
                                                                    "attribute": "ms",
                                                                    "leaf": true
                                                                },
                                                                {
                                                                    "id": "8a5d6b915b13d582015b18e0f3540012",
                                                                    "parentId": "8a5d6b915b13d582015b18743b680001",
                                                                    "name": "average_rsrq",
                                                                    "label": "平均RSRQ",
                                                                    "value": "5000,<",
                                                                    "order": "4",
                                                                    "attribute": "M",
                                                                    "leaf": true
                                                                }
                                                            ],
                                                            "totalChildnum": 5,
                                                            "leaf": false,
                                                            "expanded": true
                                                        }
                                                    ],
                                                    "totalChildnum": 1,
                                                    "leaf": false,
                                                    "expanded": true
                                                }
                                            ],
                                            "totalChildnum": 1,
                                            "leaf": false,
                                            "expanded": true
                                        }
                                    ],
                                    "totalChildnum": 1,
                                    "leaf": false,
                                    "expanded": true
                                }
                            ],
                            "totalChildnum": 1,
                            "leaf": false,
                            "expanded": true
                        }
                    ];
        var item = data[0];
        seek(par, item);
        res = sorts(result);  
        func(res) ;  
    }else if (par == "indexClass3") {
        var data = [
                        {
                            "id": "8a8804454201ed2a014202c8015d0001",
                            "parentId": "",
                            "name": "serviceModuleDataConfig",
                            "label": "业务模块数据配置",
                            "value": "serviceModuleDataConfig",
                            "order": "1",
                            "attribute": "serviceModuleDataConfig",
                            "children": [
                                {
                                    "id": "4028819f57db05d70157db8886160000",
                                    "parentId": "8a8804454201ed2a014202c8015d0001",
                                    "name": "LocalRequireConfigOfSH",
                                    "label": "上海本地需求配置",
                                    "value": "shagnhai",
                                    "order": "28",
                                    "attribute": "",
                                    "children": [
                                        {
                                            "id": "8a5d6b915b1e90d2015b22f053fb0001",
                                            "parentId": "4028819f57db05d70157db8886160000",
                                            "name": "hignspeedConfig",
                                            "label": "高铁指标配置",
                                            "value": "0",
                                            "order": "7",
                                            "attribute": "",
                                            "children": [
                                                {
                                                    "id": "8a5d6b915b13d582015b17a8e6080000",
                                                    "parentId": "8a5d6b915b1e90d2015b22f053fb0001",
                                                    "name": "subway_userPathAnalysis",
                                                    "label": "用户轨迹指标配置",
                                                    "value": "subway_userPathAnalysis",
                                                    "order": "2",
                                                    "attribute": "",
                                                    "children": [
                                                        {
                                                            "id": "8a5d6b915b13d582015b187514950003",
                                                            "parentId": "8a5d6b915b13d582015b17a8e6080000",
                                                            "name": "indexClass3",
                                                            "label": "覆盖里程",
                                                            "value": "indexClass3",
                                                            "order": "2",
                                                            "attribute": "",
                                                            "children": [
                                                                {
                                                                    "id": "8a5d6b915b13d582015b187c8f95000a",
                                                                    "parentId": "8a5d6b915b13d582015b187514950003",
                                                                    "name": "cqi_contin_bad_ mileage_percent",
                                                                    "label": "CQI连续质差里程占比",
                                                                    "value": "50,<",
                                                                    "order": "0",
                                                                    "attribute": "%",
                                                                    "leaf": true
                                                                },
                                                                {
                                                                    "id": "8a5d6b915b13d582015b187d7e6d000b",
                                                                    "parentId": "8a5d6b915b13d582015b187514950003",
                                                                    "name": "rsrq_contin_bad_ mileage_percent",
                                                                    "label": "RSRQ连续质差里程占比",
                                                                    "value": "50,<",
                                                                    "order": "1",
                                                                    "attribute": "%",
                                                                    "leaf": true
                                                                },
                                                                {
                                                                    "id": "8a5d6b915b13d582015b187e8ae4000c",
                                                                    "parentId": "8a5d6b915b13d582015b187514950003",
                                                                    "name": "continue_bad_cover_mileage_percent",
                                                                    "label": "连续弱覆盖里程占比",
                                                                    "value": "50,<",
                                                                    "order": "2",
                                                                    "attribute": "%",
                                                                    "leaf": true
                                                                }
                                                            ],
                                                            "totalChildnum": 3,
                                                            "leaf": false,
                                                            "expanded": true
                                                        }
                                                    ],
                                                    "totalChildnum": 1,
                                                    "leaf": false,
                                                    "expanded": true
                                                }
                                            ],
                                            "totalChildnum": 1,
                                            "leaf": false,
                                            "expanded": true
                                        }
                                    ],
                                    "totalChildnum": 1,
                                    "leaf": false,
                                    "expanded": true
                                }
                            ],
                            "totalChildnum": 1,
                            "leaf": false,
                            "expanded": true
                        }
                    ];
        var item = data[0];
        seek(par, item);
        res = sorts(result);  
        func(res) ;  
    }else if (par == "indexClass4") {
        var data = [
                        {
                            "id": "8a8804454201ed2a014202c8015d0001",
                            "parentId": "",
                            "name": "serviceModuleDataConfig",
                            "label": "业务模块数据配置",
                            "value": "serviceModuleDataConfig",
                            "order": "1",
                            "attribute": "serviceModuleDataConfig",
                            "children": [
                                {
                                    "id": "4028819f57db05d70157db8886160000",
                                    "parentId": "8a8804454201ed2a014202c8015d0001",
                                    "name": "LocalRequireConfigOfSH",
                                    "label": "上海本地需求配置",
                                    "value": "shagnhai",
                                    "order": "28",
                                    "attribute": "",
                                    "children": [
                                        {
                                            "id": "8a5d6b915b1e90d2015b22f053fb0001",
                                            "parentId": "4028819f57db05d70157db8886160000",
                                            "name": "hignspeedConfig",
                                            "label": "高铁指标配置",
                                            "value": "0",
                                            "order": "7",
                                            "attribute": "",
                                            "children": [
                                                {
                                                    "id": "8a5d6b915b13d582015b17a8e6080000",
                                                    "parentId": "8a5d6b915b1e90d2015b22f053fb0001",
                                                    "name": "subway_userPathAnalysis",
                                                    "label": "用户轨迹指标配置",
                                                    "value": "subway_userPathAnalysis",
                                                    "order": "2",
                                                    "attribute": "",
                                                    "children": [
                                                        {
                                                            "id": "8a5d6b915b13d582015b187585d80004",
                                                            "parentId": "8a5d6b915b13d582015b17a8e6080000",
                                                            "name": "indexClass4",
                                                            "label": "扩展指标",
                                                            "value": "indexClass4",
                                                            "order": "3",
                                                            "attribute": "",
                                                            "children": [
                                                                {
                                                                    "id": "8a5d6b915b13d582015b187f47f2000d",
                                                                    "parentId": "8a5d6b915b13d582015b187585d80004",
                                                                    "name": "average_up_sinr",
                                                                    "label": "平均上行SINR",
                                                                    "value": "5000,<",
                                                                    "order": "0",
                                                                    "attribute": "M",
                                                                    "leaf": true
                                                                },
                                                                {
                                                                    "id": "8a5d6b915b13d582015b187ffd08000e",
                                                                    "parentId": "8a5d6b915b13d582015b187585d80004",
                                                                    "name": "public_net_user_percent",
                                                                    "label": "公网用户占比",
                                                                    "value": "50,<",
                                                                    "order": "1",
                                                                    "attribute": "%",
                                                                    "leaf": true
                                                                }
                                                            ],
                                                            "totalChildnum": 2,
                                                            "leaf": false,
                                                            "expanded": true
                                                        }
                                                    ],
                                                    "totalChildnum": 1,
                                                    "leaf": false,
                                                    "expanded": true
                                                }
                                            ],
                                            "totalChildnum": 1,
                                            "leaf": false,
                                            "expanded": true
                                        }
                                    ],
                                    "totalChildnum": 1,
                                    "leaf": false,
                                    "expanded": true
                                }
                            ],
                            "totalChildnum": 1,
                            "leaf": false,
                            "expanded": true
                        }
                    ];
        var item = data[0];
        seek(par, item);
        res = sorts(result);  
        func(res) ;  
    }else{

    };
       
    
};