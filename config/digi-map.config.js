var digiMapConfig = (function () {       
        return {            
            modules: [
            'esri/map',           
            'esri/layers/layer',
            'esri/layers/ArcGISDynamicMapServiceLayer',
            'esri/layers/ArcGISTiledMapServiceLayer',
            'esri/layers/FeatureLayer',
            'esri/geometry/Extent',
			'esri/SpatialReference',
            'esri/dijit/Legend',
            'esri/toolbars/draw',
            'esri/toolbars/edit',
            'esri/symbols/SimpleMarkerSymbol',
            'esri/symbols/SimpleLineSymbol',
            'esri/symbols/SimpleFillSymbol',
            'esri/graphic'
        ],          
			outModuleName: 'esri-mods'
        };
    })();