System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MapLayer, MapLayerType;
    return {
        setters:[],
        execute: function() {
            MapLayer = (function () {
                function MapLayer() {
                }
                return MapLayer;
            }());
            exports_1("MapLayer", MapLayer);
            (function (MapLayerType) {
                MapLayerType[MapLayerType["ArcGisTiledLayer"] = 0] = "ArcGisTiledLayer";
                MapLayerType[MapLayerType["ArcGISDynamicLayer"] = 1] = "ArcGISDynamicLayer";
                MapLayerType[MapLayerType["FeatureLayer"] = 2] = "FeatureLayer";
            })(MapLayerType || (MapLayerType = {}));
            exports_1("MapLayerType", MapLayerType);
        }
    }
});
//# sourceMappingURL=layer.js.map