System.register(['./src/map.component', './src/layer', 'esri-mods'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (map_component_1_1) {
                exportStar_1(map_component_1_1);
            },
            function (layer_1_1) {
                exportStar_1(layer_1_1);
            },
            function (esri_mods_1_1) {
                exportStar_1(esri_mods_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=digi-map.js.map