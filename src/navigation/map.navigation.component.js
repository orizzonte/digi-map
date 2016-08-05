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
    var MapNavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_mods_1_1) {
                esri_mods_1 = esri_mods_1_1;
            }],
        execute: function() {
            MapNavigationComponent = (function () {
                function MapNavigationComponent() {
                }
                MapNavigationComponent.prototype.toInitialExtent = function () {
                    this.zoomToExtent(this.initialExtent);
                };
                MapNavigationComponent.prototype.zoomToExtent = function (extent) {
                    this.mapInstance.setExtent(extent, true);
                };
                MapNavigationComponent.prototype.zoomToGeometry = function (geometry) {
                    geometry.setSpatialReference(new esri_mods_1.SpatialReference({ wkid: 31370 }));
                    this.zoomToExtent(geometry.getExtent());
                };
                MapNavigationComponent.prototype.ngOnInit = function () {
                    // Check if extent is defined
                    if (this.settings.extent !== undefined) {
                        this.initialExtent = new esri_mods_1.Extent({
                            xmin: this.settings.extent.xmin,
                            ymin: this.settings.extent.ymin,
                            xmax: this.settings.extent.xmax,
                            ymax: this.settings.extent.ymax,
                            spatialReference: new esri_mods_1.SpatialReference({ wkid: 31370 })
                        });
                        this.zoomToExtent(this.initialExtent);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', esri_mods_1.map)
                ], MapNavigationComponent.prototype, "mapInstance", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MapNavigationComponent.prototype, "settings", void 0);
                MapNavigationComponent = __decorate([
                    core_1.Component({
                        selector: 'map-navigation',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapNavigationComponent);
                return MapNavigationComponent;
            }());
            exports_1("MapNavigationComponent", MapNavigationComponent);
        }
    }
});
//# sourceMappingURL=map.navigation.component.js.map