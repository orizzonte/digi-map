var digiMapConfig = (function () {       
        return {            
            modules: [
            'esri/Map',
            'esri/views/MapView',
            'esri/layers/MapImageLayer',
            'esri/layers/TileLayer',
            'esri/layers/FeatureLayer',
            'esri/geometry/Extent',
			'esri/geometry/SpatialReference'
        ],          
			outModuleName: 'esri-mods'
        };
    })();