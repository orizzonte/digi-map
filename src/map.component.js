System.register(['@angular/core', 'esri-mods', './identify/map.identify.component', './draw/map.draw.component', './edit/map.edit.component'], function(exports_1, context_1) {
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
    var core_1, esri_mods_1, map_identify_component_1, map_draw_component_1, map_edit_component_1;
    var MapControl, MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_mods_1_1) {
                esri_mods_1 = esri_mods_1_1;
            },
            function (map_identify_component_1_1) {
                map_identify_component_1 = map_identify_component_1_1;
            },
            function (map_draw_component_1_1) {
                map_draw_component_1 = map_draw_component_1_1;
            },
            function (map_edit_component_1_1) {
                map_edit_component_1 = map_edit_component_1_1;
            }],
        execute: function() {
            MapControl = (function () {
                function MapControl(name, control) {
                    this.name = name;
                    this.control = control;
                }
                return MapControl;
            }());
            exports_1("MapControl", MapControl);
            MapComponent = (function () {
                function MapComponent(elRef) {
                    this.elRef = elRef;
                    this.mapLoaded = new core_1.EventEmitter();
                    this.themes = [];
                    this.controls = [];
                    this.useIdentifyControl = false;
                    this.useDrawControl = false;
                    this.useEditControl = false;
                }
                MapComponent.prototype.ngAfterViewInit = function () {
                    if (this.useIdentifyControl) {
                        this.controls.push(new MapControl('identify', this.identify));
                    }
                    if (this.useDrawControl) {
                        this.controls.push(new MapControl('draw', this.draw));
                    }
                    if (this.useEditControl) {
                        this.controls.push(new MapControl('edit', this.edit));
                    }
                };
                MapComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var self = this;
                    this.currentMap = new esri_mods_1.map('map');
                    // Apply map controls
                    if (this.settings.controls.indexOf('identify') !== -1) {
                        this.useIdentifyControl = true;
                    }
                    if (this.settings.controls.indexOf('draw') !== -1) {
                        this.useDrawControl = true;
                    }
                    if (this.settings.controls.indexOf('edit') !== -1) {
                        this.useEditControl = true;
                    }
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
                    // Check if themes is defined
                    if (this.settings.themes !== undefined) {
                        this.settings.themes.forEach(function (theme) {
                            if (theme.type === 'dynamic') {
                                _this.themes.push(new esri_mods_1.ArcGISDynamicMapServiceLayer(theme.url));
                            }
                            else {
                                _this.themes.push(new esri_mods_1.ArcGISTiledMapServiceLayer(theme.url));
                            }
                        });
                        this.currentMap.addLayers(this.themes);
                    }
                    // Check if extent is defined
                    if (this.settings.extent !== undefined) {
                        this.initialExtent = new esri_mods_1.Extent({
                            xmin: this.settings.extent[0],
                            ymin: this.settings.extent[1],
                            xmax: this.settings.extent[2],
                            ymax: this.settings.extent[3],
                            spatialReference: new esri_mods_1.SpatialReference({ wkid: 31370 })
                        });
                        this.currentMap.setExtent(this.initialExtent);
                    }
                    this.currentMap.on('load', function (ev) { console.log('map loaded'); });
                };
                ;
                MapComponent.prototype.toInitialExtent = function () {
                    this.currentMap.setExtent(this.initialExtent);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "settings", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "mapLoaded", void 0);
                __decorate([
                    core_1.ViewChild(map_identify_component_1.MapIdentifyComponent), 
                    __metadata('design:type', map_identify_component_1.MapIdentifyComponent)
                ], MapComponent.prototype, "identify", void 0);
                __decorate([
                    core_1.ViewChild(map_draw_component_1.MapDrawComponent), 
                    __metadata('design:type', map_draw_component_1.MapDrawComponent)
                ], MapComponent.prototype, "draw", void 0);
                __decorate([
                    core_1.ViewChild(map_edit_component_1.MapEditComponent), 
                    __metadata('design:type', map_edit_component_1.MapEditComponent)
                ], MapComponent.prototype, "edit", void 0);
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'esri-map',
                        template: " <div id=\"map\">\n                    <map-identify *ngIf=\"useIdentifyControl\" [mapInstance]=\"currentMap\"></map-identify>\n                    <map-draw *ngIf=\"useDrawControl\" [mapInstance]=\"currentMap\"></map-draw>\n                    <map-edit *ngIf=\"useEditControl\" [mapInstance]=\"currentMap\"></map-edit>\n                    <ng-content></ng-content>\n                </div>",
                        directives: [map_identify_component_1.MapIdentifyComponent, map_draw_component_1.MapDrawComponent, map_edit_component_1.MapEditComponent]
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