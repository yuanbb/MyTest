function eventPopupBottom()
{
	var oDrag = document.getElementById("bottomPopup");
	var oTitle = getBottom.byClass("title", oDrag)[0];
	var oL = getBottom.byClass("resizeL", oDrag)[0];
	var oT = getBottom.byClass("resizeT", oDrag)[0];
	var oR = getBottom.byClass("resizeR", oDrag)[0];
	var oB = getBottom.byClass("resizeB", oDrag)[0];
	var oLT = getBottom.byClass("resizeLT", oDrag)[0];
	var oTR = getBottom.byClass("resizeTR", oDrag)[0];
	var oBR = getBottom.byClass("resizeBR", oDrag)[0];
	var oLB = getBottom.byClass("resizeLB", oDrag)[0];
	var oC = getBottom.byClass("content", oDrag)[0];
	
	dragBottom(oDrag, oTitle);
	//四角
	//resize(oDrag, oLT, true, true, false, false);
	//resize(oDrag, oTR, false, true, false, false);
	//resize(oDrag, oBR, false, false, false, false);
	//resize(oDrag, oLB, true, false, false, false);
	//四边
	//resize(oDrag, oL, true, false, false, true);
	resizeBottom(oDrag,oC, oT, false, true, true, false);
	//resize(oDrag, oR, false, false, false, true);
	//resize(oDrag, oB, false, false, true, false);
	
	//oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
	//oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
	//oDrag.style.left = "0px";
	//oDrag.style.bottom = "0px";
}