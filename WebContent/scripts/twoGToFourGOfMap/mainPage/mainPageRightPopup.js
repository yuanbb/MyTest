function eventPopupRight()
{
	var oDrag = document.getElementById("rightPopup");
	var oTitle = getRight.byClass("title", oDrag)[0];
	var oL = getRight.byClass("resizeL", oDrag)[0];
	var oT = getRight.byClass("resizeT", oDrag)[0];
	var oR = getRight.byClass("resizeR", oDrag)[0];
	var oB = getRight.byClass("resizeB", oDrag)[0];
	var oLT = getRight.byClass("resizeLT", oDrag)[0];
	var oTR = getRight.byClass("resizeTR", oDrag)[0];
	var oBR = getRight.byClass("resizeBR", oDrag)[0];
	var oLB = getRight.byClass("resizeLB", oDrag)[0];
	var oC = getRight.byClass("content", oDrag)[0];
	
	dragRight(oDrag, oTitle);
	//四角
	//resize(oDrag, oLT, true, true, false, false);
	//resize(oDrag, oTR, false, true, false, false);
	//resize(oDrag, oBR, false, false, false, false);
	//resize(oDrag, oLB, true, false, false, false);
	//四边
	resizeRight(oDrag, oC, oL, true, false, false, true);
	//resize(oDrag, oC, oT, false, true, true, false);
	//resize(oDrag, oR, false, false, false, true);
	//resize(oDrag, oB, false, false, true, false);
	
	//oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
	//oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
	//oDrag.style.left = "0px";
	//oDrag.style.bottom = "0px";
}