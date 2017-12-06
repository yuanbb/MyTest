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
<!--自己的js-->
<script type="text/javascript" src="${ctx}/scripts/commonDemo/importTest/importTest.js"></script>


<script type="text/javascript">
$(document).ready(function(){
        init();
      
});
 </script>

</head>
<body>
<center>
   <input id="btn" type="button" class="btn btn-primary" value="按钮" />
</center>

<!---------------------------------------------------------------------------->
               <div  class="modal" id="batchUploadModal">
                 <div class="modal-dialog" style="margin-top: 150px">   <!-- style="width: 900px;left: -50px" -->
                     <div class="modal-content" >
                           <div class="modal-header">
                               <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true"><img src="../../static/hotCell/images/close.png"></span><span class="sr-only"></span></button>
                               <h4 class="modal-title">批量上传</h4>
                           </div>
                           <div class="modal-body" id="modal-body" >
                                  <span>导入资料</span><span style="color: red">*</span><span>:</span>
                                  <input type="text" disabled  style=" width: 68%;" id="fiedDIR" />
                                  <button type="button" class="btn btn-primary"   onclick="addFiled()" >添加文件</button>
                           </div>
                           <div class="modal-footer">
                               <center>
                                     <button type="button" class="btn btn-primary"   onclick="importFiled()" >上传</button>
                                     <button type="button" class="btn btn-default"   data-dismiss="modal">关 闭</button>
                               </center>      
                             </div>
                          <form id="formImport" style="display: none;" action="" method="post" enctype="multipart/form-data" target="hidden_frame">
                                  <input id="fileBtn" onchange="getDIR()" type="file" name="file"></input>
                                  
                                  <input type="submit" id="submitBtn" class="btn btn-primary" style="float:right;" value="导入"/>
                          </form>
                          <iframe name='hidden_frame' id="hidden_frame" style='display: none'></iframe>
                     </div>
                </div>
             </div>   

</body>
</html>