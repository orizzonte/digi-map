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
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_mods_1_1) {
                esri_mods_1 = esri_mods_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent(elRef) {
                    this.elRef = elRef;
                    this.mapLoaded = new core_1.EventEmitter();
                }
                MapComponent.prototype.ngOnInit = function () {
                    var self = this;
                    this.currentMap = new esri_mods_1.map('map');
                    this.currentMap.on('layers-add-result', function (evt) {
                        var allLayerInfos = [];
                        evt.layers.forEach(function (layer, index) {
                            var layerInfos = layer.layer.layerInfos;
                            if (layerInfos && layerInfos.length > 0) {
                                allLayerInfos.push({ layer: layer.layer, title: layer.layer.name });
                            }
                            ;
                        });
                        var legendDijit = new esri_mods_1.Legend({
                            map: self.currentMap,
                            respectCurrentMapScale: false,
                            layerInfos: allLayerInfos
                        }, 'legend');
                        legendDijit.startup();
                    });
                    this.currentMap.addLayers(this.layers);
                    this.currentMap.setExtent(this.extent);
                    this.initialExtent = this.extent;
                    this.currentMap.on('load', function (ev) { console.log('map loaded'); });
                    this.currentMap.on('extent-change', function (ev) { console.log('extent changes'); console.log(JSON.stringify(ev.extent)); });
                };
                ;
                MapComponent.prototype.toInitialExtent = function () {
                    this.currentMap.setExtent(this.initialExtent);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MapComponent.prototype, "layers", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', esri_mods_1.Extent)
                ], MapComponent.prototype, "extent", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "mapLoaded", void 0);
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'esri-map',
                        template: '<div id="map"><ng-content></ng-content></div>'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map