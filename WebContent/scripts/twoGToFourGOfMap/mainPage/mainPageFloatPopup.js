function eventPopupFloat()
{
	var oDrag = document.getElementById("floatPopup");
	var oTitle = getFloat.byClass("title", oDrag)[0];
	var oL = getFloat.byClass("resizeL", oDrag)[0];
	var oT = getFloat.byClass("resizeT", oDrag)[0];
	var oR = getFloat.byClass("resizeR", oDrag)[0];
	var oB = getFloat.byClass("resizeB", oDrag)[0];
	var oLT = getFloat.byClass("resizeLT", oDrag)[0];
	var oTR = getFloat.byClass("resizeTR", oDrag)[0];
	var oBR = getFloat.byClass("resizeBR", oDrag)[0];
	var oLB = getFloat.byClass("resizeLB", oDrag)[0];
	var oC = getFloat.byClass("content", oDrag)[0];
	
	dragFloat(oDrag, oTitle);
	//四角
	//resize(oDrag, oLT, true, true, false, false);
	//resize(oDrag, oTR, false, true, false, false);
	//resize(oDrag, oBR, false, false, false, false);
	//resize(oDrag, oLB, true, false, false, false);
	//四边
	//resize(oDrag, oL, true, false, false, true);
	//resizeFloat(oDrag,oC, oT, false, true, true, false);
	//resize(oDrag, oR, false, false, false, true);
	//resize(oDrag, oB, false, false, true, false);
	
	//oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
	//oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
	//oDrag.style.left = "0px";
	//oDrag.style.bottom = "0px";
}