OpenLayers.Control.DragPan=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,panned:false,interval:0,documentDrag:false,kinetic:null,enableKinetic:true,kineticInterval:10,draw:function(){if(this.enableKinetic&&OpenLayers.Kinetic){var a={interval:this.kineticInterval};if(typeof this.enableKinetic==="object"){a=OpenLayers.Util.extend(a,this.enableKinetic)}this.kinetic=new OpenLayers.Kinetic(a)}this.handler=new OpenLayers.Handler.Drag(this,{move:this.panMap,done:this.panMapDone,down:this.panMapStart},{interval:this.interval,documentDrag:this.documentDrag})},panMapStart:function(){if(this.kinetic){this.kinetic.begin()}},panMap:function(a){if(this.kinetic){this.kinetic.update(a)}this.panned=true;this.map.pan(this.handler.last.x-a.x,this.handler.last.y-a.y,{dragging:true,animate:false})},panMapDone:function(c){if(this.panned){var b=null;if(this.kinetic){b=this.kinetic.end(c)}this.map.pan(this.handler.last.x-c.x,this.handler.last.y-c.y,{dragging:!!b,animate:false});if(b){var a=this;this.kinetic.move(b,function(d,f,e){a.map.pan(d,f,{dragging:!e,animate:false})})}this.panned=false}},CLASS_NAME:"OpenLayers.Control.DragPan"});