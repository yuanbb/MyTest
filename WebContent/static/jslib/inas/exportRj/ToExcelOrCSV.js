var eastcom_modules_ToExcelOrCSV=(function(){var e=",#,";var c=";#;";var b=",_,";var l=";_;";var a=";@ARR@;";function i(m){m=m.replace(/<[\s]*br[\s]*[\/]?[\s]*>/gmi,"");m=m.replace(/<a[\s]*[^>]*>/gmi,"");m=m.replace(/<a[\s]+[^>]+>/gmi,"");m=m.replace(/<\/[\s]*a[\s]*>/gmi,"");return m}function f(r,s,B,p,n,t,o){var q="";var w="";if(t){w=r.columnManager.columns}else{if(o){w=r.initialConfig.columns}else{w=r.columns}}for(var v=0;v<w.length;v++){if(v==0&&p){continue}if(!n&&w[v].hidden){continue}var m=w[v].text;m=i(m);var x="";if(w[v].columns!=undefined&&w[v].columns.length>0){var C=w[v].columns;for(var A=0;A<C.length;A++){if(!n&&C[A].hidden){continue}var u=C[A].text;u=i(u);x+=u+b+C[A].dataIndex+l}}else{if(w[v].initialConfig!=undefined){var z=w[v].initialConfig;if(z.columns!=undefined&&z.columns.length>0){var C=z.columns;for(var A=0;A<C.length;A++){if(!n&&C[A].hidden){continue}var u=C[A].text;u=i(u);x+=u+b+C[A].dataIndex+l}}}}q+=m+e+w[v].dataIndex+e+x+c}return{headerStr:q}}function h(r,A,D,n,q,y,u){var o="";var w="";var z=null;var C=null;w=r.colModel;C=r.colNames;if(u&&r.groupHeader){u=true;z=r.groupHeader.groupHeaders}else{u=false}for(var t=0;t<w.length;t++){if(t==0&&n){continue}var s="";if(C&&C.length==w.length){s=C[t]}else{if(w[t].label){s=w[t].label}else{if(w[t].name){s=w[t].name}}}var p=w[t].name;s=i(s);var v="";if(u){for(var B=0;B<z.length;B++){if(z[B].startColumnName===p){s=z[B].titleText;s=i(s);var m=z[B].numberOfColumns;m=m+t;for(;t<m;t++){if(!q&&w[t].hidden){continue}var x=w[t].name;if(C&&C.length==w.length){x=C[t]}x=i(x);v+=x+b+w[t].name+l}t--;break}}}if(v==""){if(!q&&w[t].hidden){continue}}o+=s+e+w[t].name+e+v+c}return{headerStr:o}}function g(y){var t=y.myGrid;var u=y.action;var A=y.title;var r=y.isThereCheckBox;var o=y.isHidden;var w=y.isDynamicHeader;var q=y.isComplexHeader;if(o==undefined){o=false}if(r==undefined){o=false}if(w==undefined){w=false}if(q==undefined){q=false}if(typeof(o)!="boolean"){o=false}if(typeof(r)!="boolean"){r=false}if(typeof(w)!="boolean"){w=false}if(typeof(q)!="boolean"){q=false}var z={};var s="";if(t.store&&t.items){z=t.store.getProxy().extraParams;var C=f(t,u,A,r,o,w,q);s=C.headerStr}else{if(t.localReader&&t.jsonReader){z=t.postData;var C=h(t,u,A,r,o,w,q);s=C.headerStr}}var v=document.createElement("form");v.method="post";v.target="_blank";v.acceptCharset="utf-8";v.action=u;document.body.appendChild(v);for(var n in z){if(n==="_search"){continue}var m=n;var B=z[n];var x=document.createElement("input");x.setAttribute("name",m);x.setAttribute("type","hidden");x.setAttribute("value",B);v.appendChild(x)}var x=document.createElement("input");x.setAttribute("name","FileTitle");x.setAttribute("type","hidden");x.setAttribute("value",A);v.appendChild(x);var x=document.createElement("input");x.setAttribute("name","HeaderTitle");x.setAttribute("type","hidden");x.setAttribute("value",s);v.appendChild(x);v.submit();document.body.removeChild(v)}function k(M){var R=M.myGrid;var P=M.action;var V=M.title;var r=M.isThereCheckBox;var v=M.isHidden;var I=M.isDynamicHeader;var D=M.isComplexHeader;if(v==undefined){v=false}if(r==undefined){v=false}if(I==undefined){I=false}if(D==undefined){D=false}if(typeof(v)!="boolean"){v=false}if(typeof(r)!="boolean"){r=false}if(typeof(I)!="boolean"){I=false}if(typeof(D)!="boolean"){D=false}var C=document.createElement("form");C.method="post";C.target="_blank";C.acceptCharset="utf-8";C.action=P;document.body.appendChild(C);var J=new Array();for(var N=0;N<R.length;N++){var x=R[N];if(x.store&&x.items){var T=x.store.getProxy().extraParams;var u="";var G=x.columns;for(var B=0;B<G.length;B++){if(B==0&&r){continue}if(!v&&G[B].hidden){continue}var z=G[B].text;z=i(z);var E="";if(G[B].columns!=undefined&&G[B].columns.length>0){var o=G[B].columns;for(var F=0;F<o.length;F++){if(!v&&o[F].hidden){continue}var H=o[F].text;H=i(H);E+=H+b+o[F].dataIndex+l}}else{if(G[B].initialConfig!=undefined){var A=G[B].initialConfig;if(A.columns!=undefined&&A.columns.length>0){var o=A.columns;for(var F=0;F<o.length;F++){if(!v&&o[F].hidden){continue}var H=o[F].text;H=i(H);E+=H+b+o[F].dataIndex+l}}}}u+=z+e+G[B].dataIndex+e+E+c}for(var L in T){var U=L;var O=T[L];var s=document.createElement("input");s.setAttribute("name",U+""+N);s.setAttribute("type","hidden");s.setAttribute("value",O);C.appendChild(s)}J.push(u)}else{if(x.localReader&&x.jsonReader){var T=x.postData;var u="";var G="";var K=null;var S=null;G=x.colModel;S=x.colNames;if(D&&x.groupHeader){D=true;K=x.groupHeader.groupHeaders}else{D=false}for(var B=0;B<G.length;B++){if(B==0&&r){continue}var z="";if(S&&S.length==G.length){z=S[B]}else{if(G[B].label){z=G[B].label}else{if(G[B].name){z=G[B].name}}}var t=G[B].name;z=i(z);var E="";if(D){for(var Q=0;Q<K.length;Q++){if(K[Q].startColumnName===t){z=K[Q].titleText;z=i(z);var q=K[Q].numberOfColumns;q=q+B;for(;B<q;B++){if(!v&&G[B].hidden){continue}var H=G[B].name;if(S&&S.length==G.length){H=S[B]}H=i(H);E+=H+b+G[B].name+l}B--;break}}}if(E==""){if(!v&&G[B].hidden){continue}}u+=z+e+G[B].name+e+E+c}for(var L in T){var U=L;var O=T[L];var s=document.createElement("input");s.setAttribute("name",U+""+N);s.setAttribute("type","hidden");s.setAttribute("value",O);C.appendChild(s)}J.push(u)}}}var m=V.join(a);var w=J.join(a);var s=document.createElement("input");s.setAttribute("name","FileTitle");s.setAttribute("type","hidden");s.setAttribute("value",m);C.appendChild(s);var s=document.createElement("input");s.setAttribute("name","HeaderTitle");s.setAttribute("type","hidden");s.setAttribute("value",w);C.appendChild(s);var s=document.createElement("input");s.setAttribute("name","GridNum");s.setAttribute("type","hidden");s.setAttribute("value",R.length);C.appendChild(s);C.submit();document.body.removeChild(C)}function d(r,q,L,Q){var A=document.createElement("form");A.method="post";A.target="_blank";A.acceptCharset="utf-8";A.action=L;document.body.appendChild(A);var G=new Array();for(var J=0;J<r.length;J++){var F=r[J];var O=q[J];var v="";if(F.colum){var D=F.colum;for(var z=0;z<D.length;z++){var x=D[z].text;x=i(x);var B="";if(D[z].columns!=undefined&&D[z].columns.length>0){var o=D[z].columns;for(var C=0;C<o.length;C++){var E=o[C].text;E=i(E);B+=E+b+o[C].dataIndex+l}}v+=x+e+D[z].dataIndex+e+B+c}}else{if(F.colModel){var D="";var I=null;var N=null;D=F.colModel;N=F.colNames;if(isComplexHeader&&F.groupHeader){isComplexHeader=true;I=F.groupHeader.groupHeaders}else{isComplexHeader=false}for(var z=0;z<D.length;z++){if(z==0&&isThereCheckBox){continue}var x="";if(N&&N.length==D.length){x=N[z]}else{if(D[z].label){x=D[z].label}else{if(D[z].name){x=D[z].name}}}var u=D[z].name;x=i(x);var B="";if(isComplexHeader){for(var M=0;M<I.length;M++){if(I[M].startColumnName===u){x=I[M].titleText;x=i(x);var s=I[M].numberOfColumns;s=s+z;for(;z<s;z++){if(!isHidden&&D[z].hidden){continue}var E=D[z].name;if(N&&N.length==D.length){E=N[z]}E=i(E);B+=E+b+D[z].name+l}z--;break}}}if(B==""){if(!isHidden&&D[z].hidden){continue}}v+=x+e+D[z].name+e+B+c}for(var H in O){var P=H;var K=O[H];var t=document.createElement("input");t.setAttribute("name",P+""+J);t.setAttribute("type","hidden");t.setAttribute("value",K);A.appendChild(t)}G.push(v)}}}var m=Q.join(a);var w=G.join(a);var t=document.createElement("input");t.setAttribute("name","FileTitle");t.setAttribute("type","hidden");t.setAttribute("value",m);A.appendChild(t);var t=document.createElement("input");t.setAttribute("name","HeaderTitle");t.setAttribute("type","hidden");t.setAttribute("value",w);A.appendChild(t);var t=document.createElement("input");t.setAttribute("name","GridNum");t.setAttribute("type","hidden");t.setAttribute("value",r.length);A.appendChild(t);A.submit();document.body.removeChild(A)}function j(s,n,E,H){var u=document.createElement("form");u.method="post";u.target="_blank";u.acceptCharset="utf-8";u.action=E;document.body.appendChild(u);var B=new Array();var A=s;var F=n;var q="";var x=A;for(var t=0;t<x.length;t++){var r=x[t].text;r=i(r);var v="";if(x[t].columns!=undefined&&x[t].columns.length>0){var m=x[t].columns;for(var w=0;w<m.length;w++){var z=m[w].text;z=i(z);v+=z+b+m[w].dataIndex+l}}q+=r+e+x[t].dataIndex+e+v+c}for(var C in F){var G=C;var D=F[C];var o=document.createElement("input");o.setAttribute("name",G+"");o.setAttribute("type","hidden");o.setAttribute("value",D);u.appendChild(o)}B.push(q);var o=document.createElement("input");o.setAttribute("name","FileTitle");o.setAttribute("type","hidden");o.setAttribute("value",H);u.appendChild(o);var o=document.createElement("input");o.setAttribute("name","HeaderTitle");o.setAttribute("type","hidden");o.setAttribute("value",q);u.appendChild(o);u.submit();document.body.removeChild(u)}return{_ToExcelOrCSVPage:g,_ToExcelPageForGrids:k,_ToExcelPageForArray:d,_ToExcelForColunms:j}})();function ToExcelOrCSVPage(e,f,g,c,d,b,a){if(!f){eastcom_modules_ToExcelOrCSV._ToExcelOrCSVPage(e)}else{eastcom_modules_ToExcelOrCSV._ToExcelOrCSVPage({myGrid:e,action:f,title:g,isThereCheckBox:c,isHidden:d,isDynamicHeader:b,isComplexHeader:a})}}function ToExcelPageForGrids(e,f,g,c,d,b,a){if(!f){eastcom_modules_ToExcelOrCSV._ToExcelPageForGrids(e)}else{eastcom_modules_ToExcelOrCSV._ToExcelPageForGrids({myGrid:e,action:f,title:g,isThereCheckBox:c,isHidden:d,isDynamicHeader:b,isComplexHeader:a})}}function ToExcelPageForArray(d,a,b,c){eastcom_modules_ToExcelOrCSV._ToExcelPageForArray(d,a,b,c)}function ToExcelForColunms(d,a,b,c){eastcom_modules_ToExcelOrCSV._ToExcelForColunms(d,a,b,c)};