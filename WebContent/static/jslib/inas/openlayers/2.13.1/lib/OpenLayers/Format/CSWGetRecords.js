OpenLayers.Format.CSWGetRecords=function(b){b=OpenLayers.Util.applyDefaults(b,OpenLayers.Format.CSWGetRecords.DEFAULTS);var a=OpenLayers.Format.CSWGetRecords["v"+b.version.replace(/\./g,"_")];if(!a){throw"Unsupported CSWGetRecords version: "+b.version}return new a(b)};OpenLayers.Format.CSWGetRecords.DEFAULTS={version:"2.0.2"};