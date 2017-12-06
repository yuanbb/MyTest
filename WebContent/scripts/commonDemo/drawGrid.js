var drawGrid = {
       load_AjaxRequest_Tab : function(){
					var columnsName = [
										'字段0',
										'字段1',
										'字段2',
										'字段3',
										'字段4',
										'字段5',
										'字段6',
										'字段7',
										'字段8',
										'字段9',
					];
					var columnsConfig = [
                                      {name:'index0',index:'index0',width:200,align:"center",hidden:true},
                                      {name:'index1',index:'index1',width:200,align:"center"},
                                      {name:'index2',index:'index2',width:200,align:"center",formatter:function(cellVal,options,rowObjs){
                                              return '<span style="'+(cellVal<200?'color:red':'')+';cursor: pointer;">'+cellVal+'</span>';
                                          }
                                      },
                                      {name:'index3',index:'index3',width:200,align:"center",search:true,searchtype:"number"},
                                      {name:'index4',index:'index4',width:200,align:"center",search:true,searchtype:"number"},
                                      {name:'index5',index:'index5',width:200,align:"center",search:true,searchtype:"number"},
                                      {name:'index6',index:'index6',width:200,align:"center",search:true,searchtype:"number"},
                                      {name:'index7',index:'index7',width:200,align:"center",search:true,searchtype:"number"},
                                      {name:'index8',index:'index8',width:200,align:"center",search:true,searchtype:"number"},
                                      {name:'index9',index:'index9',width:200,align:"center",search:true,searchtype:"number"}
					];
					//手动添加loading
					//$("#load_con_grid_div_grid").css('display', 'block');
                    //表格数据清空  clearGridData
                    jQuery("#con_grid_div_grid").jqGrid('clearGridData');
                    //$('#ipAddress_grid_div_grid').clearGridData();
					$("#con_grid_div_grid").jqGrid({
							height: 303,
							rowNum: 10,
							datatype: "local",
							colNames: columnsName,
							colModel: columnsConfig,
							shrinkToFit: true,
							//scrollOffset:1,    //滚动条宽度 
							autoScroll: true,
							rownumbers: false,
							pgbuttons: true,
							gridComplete :function(){
							        //$("#con_grid_div").find('.ui-jqgrid-bdiv').css('overflow', 'hidden');

							},
							pager: "con_grid_div_gridPager",
							pgtext: "{0}共{1}页"
					});
					$("#con_grid_div_grid").navGrid("#con_grid_div_gridPager", {
								search : true, // show search button on the toolbar
								add : false,
								edit : false,
								del : false,
								refresh : false
							},
							{}, // edit options
							{}, // add options
							{}, // delete options
							{
								multipleSearch : true,
								closeAfterSearch : true,
								closeOnEscape : true,
								searchOnEnter : true,
								Find : "查找"
							});
                    
                    var mydata = dataSource.getAjaxRequestData();
					for(var i=0;i<=mydata.length;i++){
                                jQuery("#con_grid_div_grid").jqGrid('addRowData',i+1,mydata[i]);
                    };

                    $("#con_grid_div_grid").trigger("reloadGrid");
                    $("#con_grid_div_grid").jqGrid('sortableRows', {
                        items: '.jqgrow:not(.unsortable)'
              });
                    //setTimeout("$('#con_grid_div_grid').trigger('reloadGrid');$('#load_con_grid_div_grid').css('display', 'none')",1000);

       },
}; 