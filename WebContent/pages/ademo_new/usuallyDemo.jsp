<%@ page contentType="text/html;charset=utf-8"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE html>
<head>
<title>流量分析</title>
<%@ include file="/common/jq183.jsp"%>
<%@ include file="/common/fontawesome/fontawesome4.3.0.jsp"%>
<%@ include file="/common/bootstrap.jsp"%>
<%@ include file="/pages/common/jquery-ui-bootstrap.jsp"%>
<%@ include file="/pages/common/inas-common.jsp"%>
<%@ include file="/pages/common/inas-product-style.jsp"%>
<%@ include file="/pages/common/inas-loadmask.jsp"%>
<%@ include file="/pages/common/inas-my97.jsp"%>
<%@ include file="/pages/common/inas-export.jsp"%>
<%@ include file="/pages/common/bootstrap-third.jsp"%>
<%@ include file="/common/eui.jsp"%> 


<c:set var="mainJs" value="${ctx}/scripts/flowDirectionAnalyse/mainJs.js" />
<%@ include file="/common/require.jsp"%>
</head>
<body>
     <div class="con_homebox">
			<div class="screen_row" style="border-bottom:1px solid #dfdfdf;">
				<div style="line-height:34px;" class="fl">
					<input name="timeType" type="radio" class="RadioStyle" value="day" checked="checked"/>日
				</div>
				<div style="line-height:34px;" class="fl">
					<input name="timeType" type="radio" class="RadioStyle" value="month"/>月
				</div>
				<input id="timeField_day" class="Wdate TimeFiled fl" style="width: 120px;margin-left:20px;"
					onclick="WdatePicker({dateFmt : 'yyyy-MM-dd',maxDate:'%y-%M-{%d-1}'})" />
				<input id="timeField_month" class="Wdate TimeFiled fl"  style="display: none;width: 120px;margin-left:20px;"
					onclick="WdatePicker({dateFmt : 'yyyy-MM',maxDate:'%y-{%M-1}'})" />
					<select id="areasSelect"  class="SelectStyle fl" style="width:105px;margin-left:20px;" >
	       		    </select>
	       		    <select id="appSubtypeId"  class="SelectStyle fl" style="width:105px;margin-left:20px;" >
	       		    </select>
				<button id="queryButton" type="button" class="btn btn-primary" style="margin-left:20px;">查 询</button>
                  <div class="clear"></div> 
			</div>
     </div>
	       <div>
	         <div class="con_homebox fl" style="width:39%;">
				     <div class="con_homebox_title">
						<h5 class="fl" style="font-size: 14px;font-weight:bold;" id="rateTitle">
							<i class="fa fa-bars ecom_icons"></i>业务流量流向占比-
						</h5>
						<div class="clear"></div>
			          </div> 
			          <div class="con_list fl" style="width:100%;"> 
			              <div class="con_chart" >
					         <div id="flowRate_chart" style="height:340px;">
					         </div> 
					       </div>  
					   </div>
					<div class="clear"></div>
				</div>
		        <div class="con_homebox fr" style="width:59%;">
	                 <div class="con_homebox_title">
						<h5 class="fl" style="font-size: 14px;font-weight: bold;" id="provNetTitle">
							<i class="fa fa-bars ecom_icons"></i>业务流量省网率-
						</h5>
						<div class="clear"></div>
			        </div> 
			        <div class="con_list fr" style="width:100%;">
			           <div class="con_chart">
						    <div id="flowProvNetRate_chart"  style="height:340px;">
							</div>
					   </div>
					</div>
					<div class="clear"></div>
			     </div>
			</div>
	
	 <!-- 业务流量流向质量详单-->
	 <div class="con_homebox" >
		  <div class="con_homebox_title">
				<h5 class="fl" style="font-size: 14px;font-weight: bold;"  id = "dtlsTitle">
					<i class="fa fa-bars ecom_icons"></i>业务流量流向质量详单-
				</h5>
				<span class="fr">
					<a class="function-icon">
					   <i class="fa fa-file-excel-o cursor toExcel" id="dtlsExcel" title="导出"></i>
					 </a>
			    </span>
				<div class="clear"></div>
	     </div>
		 <div class="con_list">
		       <div class="con_chart"  style="height:420px;">
						<div id="flowQuality_grid_div" style="height:390px;width:100%;">
							<table id="flowQuality_grid_div_grid" ></table>
							<div id="flowQuality_grid_div_gridPager"></div>
						</div>
			   </div>
		</div>
	 </div>
	 <!-- 流向IP地址分析 -->
	 <div class="con_homebox" >
		  <div class="con_homebox_title">
				<h5 class="fl" style="font-size: 14px;font-weight: bold;"  id = "ipTitle">
					<i class="fa fa-list-ol ecom_icons"></i>流向IP地址分析-
				</h5>
				<span class="fr">
					<a class="function-icon">
					   <i class="fa fa-file-excel-o cursor toExcel" id="ipExcel" title="导出"></i>
					</a>
			    </span>
				<div class="clear"></div>
	     </div>
		 <div class="con_list" >
		           <div class="con_chart"  style="height:420px;">
						<div id="ipAddress_grid_div" style="width:100%;height:390px;">
							<table id="ipAddress_grid_div_grid"></table>
							<div id="ipAddress_grid_div_gridPager"></div>
						</div>
				   </div>	
		</div>
	 </div>
	 
</body>
</html>