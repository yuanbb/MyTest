 $(document).ready(function(){  
            jQuery("#treegrid").jqGrid({  
                scroll: "true",  
                //url: eastcom.baseURL +'/scripts/commonDemo/tree_jqgrid/tree.json',  
                //datatype: 'json', 
                datatype: "jsonstring",   //必须的
                colNames:['','编号','姓名','密码','年龄','地址','出生日期'],  
                colModel:[  
                    {name:'uu_id',index:'uu_id', width:20,sorttype:"int",key:true,align:"center",hidden:true},    //注意这里的key 把这一列指为 parentid
                    {name:'id',index:'id', width:20,sorttype:"int",align:"center",hidden:true},  
                    {name:'username',index:'username', width:110,align:"center",sorttype:"int"},  
                    {name:'password',index:'password', width:80,align:"center",},  
                    {name:'age',index:'age', width:80,align:"center",},  
                    {name:'address',index:'address', width:80,align:"center",},  
                    {name:'time',index:'time', width:80,align:"center",sorttype:"date"}  
                ],  
  
                
                treeGrid: true,  
                treeGridModel: 'adjacency', //treeGrid模式，跟json元数据有关 ,adjacency/nested  
                ExpandColumn : 'username',  
                ExpandColClick : true,//点击展开列的文本也能展开
                treeReader : {  
                    level_field: "level",  
                    parent_id_field: "parent",  
                    leaf_field: "isLeaf",  
                    expanded_field: "expanded" ,
                    icon_field : "icon" 
                },  
                caption: "我的表格",  
                mtype: "POST",  
                height: "auto",    // 设为具体数值则会根据实际记录数出现垂直滚动条  
                rowNum : "-1",     // 显示全部记录  
                shrinkToFit:false  // 控制水平滚动条  
            });  
            
            
            //数据顺序必须按级别 排放 
            var result = [  
                            {"uu_id": 0,"id":001,"username":"呵呵1","address":"上海","age":26,"password":"123","level":0,"isLeaf":false,"expanded":true},  
                                {"uu_id": 1,"id":10,"username":"哈哈2","level":1,"address":"美国","isLeaf":true,"age":27,"parent":0,"expanded":true,"password":"123"},  
                                {"uu_id": 2,"id":20,"username":"嘿嘿","level":1,"address":"日本","isLeaf":true,"age":25,"parent":0,"expanded":true,"password":"123"},  
                                {"uu_id": 3,"id":130,"username":"哈哈2","level":1,"address":"美国","isLeaf":true,"age":27,"parent":0,"expanded":true,"password":"123"},  
                                {"uu_id": 4,"id":230,"username":"嘿嘿","level":1,"address":"日本","isLeaf":true,"age":25,"parent":0,"expanded":true,"password":"123"},
                            
                            {"uu_id": 5,"id":0013,"username":"呵呵1","address":"上海","age":26,"password":"123","level":0,"isLeaf":false,"expanded":true}, 
                                {"uu_id": 6,"id":130,"username":"哈哈2","level":1,"address":"美国","isLeaf":true,"age":27,"parent":5,"expanded":true,"password":"123"},  
                                {"uu_id": 7,"id":230,"username":"嘿嘿","level":1,"address":"日本","isLeaf":true,"age":25,"parent":5,"expanded":true,"password":"123"}, 
                      ]  ;
            $("#treegrid").jqGrid('setGridParam', {
				datastr : result,
			}).trigger("reloadGrid");
		$("#treegrid").jqGrid('jqGridResize');
});  