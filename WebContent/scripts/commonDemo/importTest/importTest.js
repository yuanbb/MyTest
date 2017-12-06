function init(){
  //$("#btn").click(showModal);
	$("#btn").on('click',showModal);
};

function showModal(){
	$("#batchUploadModal").modal("toggle");
    $("#fiedDIR").empty();
};

function addFiled(){
    $("#fileBtn").click(); 
};
function getDIR(){
   var dir=$("#fileBtn").val();
   $("#fiedDIR").val(dir);
};
function importFiled (){
   var dir=$("#fileBtn").val();
   if(""==dir){
          return;  
   }else{
        
      $("#formImport").attr('action', eastcom.baseURL+'/sml/invoke/areaHotMngService/importHotAndCell/id');
      $("#submitBtn").click();
   }
};