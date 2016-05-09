System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Layer, LayerType;
    return {
        setters:[],
        execute: function() {
            Layer = (function () {
                function Layer() {
                }
                return Layer;
            }());
            exports_1("Layer", Layer);
            (function (LayerType) {
                LayerType[LayerType["ArcGisTiledLayer"] = 0] = "ArcGisTiledLayer";
            })(LayerType || (LayerType = {}));
            exports_1("LayerType", LayerType);
        }
    }
});
//# sourceMappingURL=layer.js.map