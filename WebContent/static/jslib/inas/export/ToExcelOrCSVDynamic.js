var splitSign1=",#,";var splitSign2=";#;";var subSplitSign1=",_,";var subSplitSign2=";_;";function ToExcelOrCSVPageDynamic(f,r,u,b,e){var s=f.store.getProxy().extraParams;if(e==undefined){e=false}if(b==undefined){e=false}if(typeof(e)!="boolean"){e=false}if(typeof(b)!="boolean"){b=false}var d="";var m=f.columnManager.columns;for(var i=0;i<m.length;i++){if(i==0&&b){continue}if(!e&&m[i].hidden){continue}var g=m[i].text;g=replaceStr(g);var k="";if(m[i].columns!=undefined&&m[i].columns.length>0){var a=m[i].columns;for(var l=0;l<a.length;l++){if(!e&&a[l].hidden){continue}var n=a[l].text;n=replaceStr(n);k+=n+subSplitSign1+a[l].dataIndex+subSplitSign2}}else{if(m[i].initialConfig!=undefined){var h=m[i].initialConfig;if(h.columns!=undefined&&h.columns.length>0){var a=h.columns;for(var l=0;l<a.length;l++){if(!e&&a[l].hidden){continue}var n=a[l].text;n=replaceStr(n);k+=n+subSplitSign1+a[l].dataIndex+subSplitSign2}}}}d+=g+splitSign1+m[i].dataIndex+splitSign1+k+splitSign2}var j=document.createElement("form");j.method="post";j.target="_blank";j.acceptCharset="utf-8";j.action=r;document.body.appendChild(j);for(var o in s){var t=o;var q=s[o];var c=document.createElement("input");c.setAttribute("name",t);c.setAttribute("type","hidden");c.setAttribute("value",q);j.appendChild(c)}var c=document.createElement("input");c.setAttribute("name","FileTitle");c.setAttribute("type","hidden");c.setAttribute("value",u);j.appendChild(c);var c=document.createElement("input");c.setAttribute("name","HeaderTitle");c.setAttribute("type","hidden");c.setAttribute("value",d);j.appendChild(c);j.submit();document.body.removeChild(j)}function replaceStr(a){a=a.replace(/<[\s]*br[\s]*[\/]?[\s]*>/gmi,"");a=a.replace(/<a[\s]*[^>]*>/gmi,"");a=a.replace(/<a[\s]+[^>]+>/gmi,"");a=a.replace(/<\/[\s]*a[\s]*>/gmi,"");return a};