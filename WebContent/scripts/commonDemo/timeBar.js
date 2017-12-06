var timeBar = {
	 timeLine : function(){
	      var timeType = $("input[name = 'timeType']:checked").val();
	      switch (timeType) {
	           case "min":
	        	   timeBar.timeLine_min(); 
	        	   break;
	           case "hour":
	        	   timeBar.timeLine_hour(); 
	        	   break;
	           case "day":
	        	   timeBar.timeLine_day(); 
	        	   break;
	           case "week":
	        	   timeBar.timeLine_week(); 
	        	   break;
	           case "month":
	        	   timeBar.timeLine_month(); 
	        	   break;
	           default :
	        	   break;
	      }
	      //alert(timeType);
	 },
	 timeLine_hour: function(c) {
		var a, b;
		if (c == null) {
			a = $("#timeField_hour").val()
		} else {
			a = c
		}
		;
		b = new Date(timeStringToDate(timeRemoveNullThillColon("hour",a)));
		b.setHours(b.getHours() + 1);
		b = b.format("yyyy-MM-dd hh");
		$("#startTime").text(a + ":00");
		$("#endTime").text(b + ":00");
		scale = function(f, i, h, g, d, e) {
			this.btnLeft = document.getElementById(f);
			this.btnRight = document.getElementById(h);
			this.bar = document.getElementById(i);
			this.startTime = document.getElementById(g);
			this.endTime = document.getElementById(d);
			this.stepLeft = this.bar.getElementsByTagName("DIV")[0];
			this.stepRight = this.bar.getElementsByTagName("DIV")[1];
			this.ondragLeft(0, 0);
			this.ondragRight(570, 430);
			this.init(e)
		};
		scale.prototype = {
			init: function(h) {
				var j = this,
				i = document,
				e = window,
				d = Math;
				if (h != "" || h != undefined) {
					j.btnLeft.style.left = 0 + "px";
					j.btnRight.style.left = 430 + "px"
				}
				j.btnLeft.onmousedown = function(m) {
					var g = (m || e.event).clientX;
					var k = this.offsetLeft;
					var f = j.bar.offsetWidth - this.offsetWidth;
					i.onmousemove = function(n) {
						var l = (n || e.event).clientX;
						var o = d.min(f, d.max( -2, k + (l - g)));
						j.btnLeft.style.left = o + "px";
						j.ondragLeft(d.round(d.max(0, o / f) * 570), o);
						e.getSelection ? e.getSelection().removeAllRanges() : i.selection.empty()
					};
					i.onmouseup = function() {
						this.onmousemove = null
					}
				};
				j.btnRight.onmousedown = function(l) {
					var g = (l || e.event).clientX;
					var k = this.offsetLeft;
					var f = j.bar.offsetWidth - this.offsetWidth;
					i.onmousemove = function(n) {
						var m = (n || e.event).clientX;
						var o = d.min(f, d.max( - 2, k + (m - g)));
						j.btnRight.style.left = (o + 10) + "px";
						j.ondragRight(d.round(d.max(0, o / f) * 570), o + 10);
						e.getSelection ? e.getSelection().removeAllRanges() : i.selection.empty()
					};
					i.onmouseup = function() {
						this.onmousemove = null
					}
				}
			},
			ondragLeft: function(e, d) {
				this.stepLeft.style.width = Math.max(0, d) + "px";
				if (Math.round(e / 9.66) < 10) {
					this.startTime.innerHTML = a + ":0" + Math.round(e / 9.55)
				} else {
					if (Math.round(e / 9.55) == 60) {
						this.startTime.innerHTML = b + ":00"
					} else {
						this.startTime.innerHTML = a + ":" + Math.round(e / 9.55)
					}
				}
			},
			ondragRight: function(e, d) {
				this.stepRight.style.width = (430 - Math.max(0, d)) + "px";
				if (Math.round(e / 9.55) < 10) {
					this.endTime.innerHTML = a + ":0" + Math.round(e / 9.55)
				} else {
					if (Math.round(e / 9.55) == 60) {
						this.endTime.innerHTML = b + ":00"
					} else {
						this.endTime.innerHTML = a + ":" + Math.round(e / 9.55)
					}
				}
			}
		 };
		 new scale("btnLeft", "bar", "btnRight", "startTime", "endTime")
	 },
	 //天,钻取小时的
	 timeLine_day: function(c) {
		var a, b;
		if (c == null) {
			a = $("#timeField_day").val()
		} else {
			a = c
		}
		b = new Date(a);
		b.setDate(b.getDate() + 1);
		b = b.format("yyyy-MM-dd");
		$("#startTime").text(a + " 00:00");
		$("#endTime").text(b + " 00:00");
		scale = function(f, i, h, g, d, e) {
			this.btnLeft = document.getElementById(f);
			this.btnRight = document.getElementById(h);
			this.bar = document.getElementById(i);
			this.startTime = document.getElementById(g);
			this.endTime = document.getElementById(d);
			this.stepLeft = this.bar.getElementsByTagName("DIV")[0];
			this.stepRight = this.bar.getElementsByTagName("DIV")[1];
			this.ondragLeft(0, 0);
			this.ondragRight(570, 430);
			this.init(e)
		};
		scale.prototype = {
			init: function(h) {
				var j = this,
				i = document,
				e = window,
				d = Math;
				if (h != "" || h != undefined) {
					j.btnLeft.style.left = 0 + "px";
					j.btnRight.style.left = 430 + "px"
				}
				j.btnLeft.onmousedown = function(m) {
					var g = (m || e.event).clientX;
					var k = this.offsetLeft;
					var f = j.bar.offsetWidth - this.offsetWidth;
					i.onmousemove = function(n) {
						var l = (n || e.event).clientX;
						var o = d.min(f, d.max( - 2, k + (l - g)));
						j.btnLeft.style.left = o + "px";
						j.ondragLeft(d.round(d.max(0, o / f) * 570), o);
						e.getSelection ? e.getSelection().removeAllRanges() : i.selection.empty()
					};
					i.onmouseup = function() {
						this.onmousemove = null
					}
				};
				j.btnRight.onmousedown = function(l) {
					var g = (l || e.event).clientX;
					var k = this.offsetLeft;
					var f = j.bar.offsetWidth - this.offsetWidth;
					i.onmousemove = function(n) {
						var m = (n || e.event).clientX;
						var o = d.min(f, d.max( - 2, k + (m - g)));
						j.btnRight.style.left = (o + 10) + "px";
						j.ondragRight(d.round(d.max(0, o / f) * 570), o + 10);
						e.getSelection ? e.getSelection().removeAllRanges() : i.selection.empty()
					};
					i.onmouseup = function() {
						this.onmousemove = null
					}
				}
			},
			ondragLeft: function(e, d) {
				this.stepLeft.style.width = Math.max(0, d) + "px";
				if (Math.round(e / 24) < 10) {
					this.startTime.innerHTML = a + " 0" + Math.round(e / 24) + ":00"
				} else {
					if (Math.round(e / 24) == 24) {
						this.startTime.innerHTML = b + " 00:00"
					} else {
						this.startTime.innerHTML = a + " " + Math.round(e / 24) + ":00"
					}
				}
			},
			ondragRight: function(e, d) {
				this.stepRight.style.width = (430 - Math.max(0, d)) + "px";
				if (Math.round(e / 24) < 10) {
					this.endTime.innerHTML = a + " 0" + Math.round(e / 24) + ":00"
				} else {
					if (Math.round(e / 24) == 24) {
						this.endTime.innerHTML = b + " 00:00"
					} else {
						this.endTime.innerHTML = a + " " + Math.round(e / 24) + ":00"
					}
				}
			}
		};
		new scale("btnLeft", "bar", "btnRight", "startTime", "endTime")
	}
};