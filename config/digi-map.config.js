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
            'esri/graphic',
            'esri/Color',
            'esri/dijit/InfoWindow',
            'esri/dijit/InfoWindowLite',
            'esri/geometry/Polygon',
            'esri/geometry/jsonUtils',
            'esri/tasks/IdentifyTask',
            'esri/tasks/IdentifyParameters',
            'esri/dijit/LayerList',
            'esri',
            'esri/arcgis/utils'
        ],          
			outModuleName: 'esri-mods'
        };
    })();