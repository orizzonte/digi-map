System.register(['@angular/core', 'esri-mods'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, esri_mods_1;
    var MapFilterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_mods_1_1) {
                esri_mods_1 = esri_mods_1_1;
            }],
        execute: function() {
            MapFilterComponent = (function () {
                function MapFilterComponent() {
                }
                MapFilterComponent.prototype.ngOnInit = function () {
                    this.settings = this.settings || { themes: [] };
                };
                MapFilterComponent.prototype.setFilter = function (filter) {
                    if (!this.dynamicLayers) {
                        return;
                    }
                    var dynaLayer = this.dynamicLayers.find(function (x) { return x.url === filter.themeUrl; });
                    if (dynaLayer) {
                        var layer = dynaLayer.layerInfos.find(function (x) { return x.name.toUpperCase() === filter.layerName.toUpperCase(); });
                        if (layer) {
                            var layerDefinitions = [];
                            layerDefinitions[layer.id] = filter.query;
                            dynaLayer.setLayerDefinitions(layerDefinitions, false);
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', esri_mods_1.map)
                ], MapFilterComponent.prototype, "mapInstance", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MapFilterComponent.prototype, "settings", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MapFilterComponent.prototype, "dynamicLayers", void 0);
                MapFilterComponent = __decorate([
                    core_1.Component({
                        selector: 'map-filter',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapFilterComponent);
                return MapFilterComponent;
            }());
            exports_1("MapFilterComponent", MapFilterComponent);
        }
    }
});
//# sourceMappingURL=map.filter.component.js.map