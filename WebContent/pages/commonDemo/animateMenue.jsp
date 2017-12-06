<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Demo</title>
 <%@ include file="/common/lib.jsp"%>
 <%@ include file="/common/fontawesome/fontawesome4.3.0.jsp"%>
 <%@ include file="/common/bootstrap.jsp"%>
 <%@ include file="/pages/common/jquery-ui-bootstrap.jsp"%>
 <%@ include file="/pages/common/inas-common.jsp"%>
 <%@ include file="/pages/common/inas-product-style.jsp"%>
 <%@ include file="/pages/common/inas-loadmask.jsp"%>
 <%@ include file="/pages/common/inas-my97.jsp"%>
 <%@ include file="/common/echarts.jsp"%>

<link rel="stylesheet" type="text/css" href="${ctx}/static/commonDemo/animateMenue/animateMenue.css" />
<!--自己的js-->
<script type="text/javascript" src="${ctx}/scripts/commonDemo/animateMenue/animateMenue.js"></script>


<script type="text/javascript">
$(document).ready(function(){
        animateMenue.init();
});
 </script>

</head>
<body>
<div style="width: 370px;border:1px solid #e8e8e8;font-size: 14px">
    <div id="menu_1" class="res-menu-box">
        <ul class="inner">
            <li class="menu-tab-box" name="baseInfo">
                <div class="tab-main">
                    <span class="tab-inner"><i></i><b>基本信息</b></span>
                </div>
                <span class="tab-add"></span>
                <div class="detail-box">
                    <table class="detail-main">
                        <tr><td>1</td></tr>
                        <tr><td>2</td></tr>
                        <tr><td>3</td></tr>
                    </table>
                </div>
            </li>
            <li class="menu-tab-box" name="netResource">
                <div class="tab-main">
                    <span class="tab-inner"><i></i><b>网络资源</b></span>
                </div>
                <span class="tab-add"></span>
                <div class="detail-box">
                    <table class="detail-main">
                        <tr>
                            <td class="chartFocus">测试指标1</td>
                            <td class="countFocus"><span>20</span>个</td>
                            <td><b class="ico_level"></b><span>96.5</span>%</td>
                            <td><i class="fa fa-map-marker" style="color: #f0863a;"></i></td>
                        </tr>
                        <tr>
                            <td class="chartFocus">测试指标2</td>
                            <td class="countFocus"><span>20</span>个</td>
                            <td><b class="ico_level"></b><span>96.5</span>%</td>
                            <td><i class="fa fa-map-marker" style="color: #ba8bd1;"></i></td>
                        </tr>
                        <tr>
                            <td class="chartFocus">测试指标3</td>
                            <td class="countFocus"><span>20</span>个</td>
                            <td><b class="ico_level"></b><span>96.5</span>%</td>
                            <td><i class="fa fa-map-marker" style="color: #98b652;"></i></td>
                        </tr>
                        <tr>
                            <td class="chartFocus">测试指标4</td>
                            <td class="countFocus"><span>20</span>个</td>
                            <td><b class="ico_level"></b><span>96.5</span>%</td>
                            <td><i class="fa fa-map-marker" style="color: #f0863a;"></i></td>
                        </tr>
                        
                    </table>
                </div>
            </li>
            <li class="menu-tab-box" name="netBuild">
                <div class="tab-main">
                    <span class="tab-inner"><i></i><b>网络建设</b></span>
                </div>
                <span class="tab-add"></span>
                <div class="detail-box">
                    <table class="detail-main">
                        <tr><td>1</td></tr>
                        <tr><td>2</td></tr>
                        <tr><td>3</td></tr>
                    </table>
                </div>
            </li>
            <li class="menu-tab-box" name="marketDevelop">
                <div class="tab-main">
                    <span class="tab-inner"><i></i><b>市场发展</b></span>
                </div>
                <span class="tab-add"></span>
                <div class="detail-box">
                    <table class="detail-main">
                        <tr><td>1</td></tr>
                        <tr><td>2</td></tr>
                        <tr><td>3</td></tr>
                    </table>
                </div>
            </li>
            <li class="menu-tab-box" name="userPercep">
                <div class="tab-main">
                    <span class="tab-inner"><i></i><b>客户感知</b></span>
                </div>
                <span class="tab-add"></span>
                <div class="detail-box">
                    <table class="detail-main">
                        <tr><td>1</td></tr>
                        <tr><td>2</td></tr>
                        <tr><td>3</td></tr>
                    </table>
                </div>
            </li>
            <li class="menu-tab-box" name="benValue">
                <div class="tab-main">
                    <span class="tab-inner"><i></i><b>效益价值</b></span>
                </div>
                <span class="tab-add"></span>
                <div class="detail-box">
                    <table class="detail-main">
                        <tr><td>1</td></tr>
                        <tr><td>2</td></tr>
                        <tr><td>3</td></tr>
                    </table>
                </div>
            </li>
        </ul>
    </div>
</div>  
</body>
</html>