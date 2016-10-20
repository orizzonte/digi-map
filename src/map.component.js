System.register(['@angular/core', 'esri-mods', './identify/map.identify.component', './draw/map.draw.component', './edit/map.edit.component', './menu/map.menu.component', './navigation/map.navigation.component'], function(exports_1, context_1) {
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
    var core_1, esri_mods_1, map_identify_component_1, map_draw_component_1, map_edit_component_1, map_menu_component_1, map_navigation_component_1;
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
            },
            function (map_menu_component_1_1) {
                map_menu_component_1 = map_menu_component_1_1;
            },
            function (map_navigation_component_1_1) {
                map_navigation_component_1 = map_navigation_component_1_1;
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
                    this.divId = 'map';
                    this.mapLoaded = new core_1.EventEmitter();
                    this.themes = [];
                    this.controls = [];
                    this.isLoading = false;
                    this.useIdentifyControl = false;
                    this.useDrawControl = false;
                    this.useEditControl = false;
                    this.domElement = elRef.nativeElement;
                }
                MapComponent.prototype.ngAfterViewInit = function () {
                    this.controls.push(new MapControl('navigation', this.navigation));
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
                    this.currentMap = new esri_mods_1.map(this.divId === 'map' ? 'map' : this.domElement);
                    this.layerListDomElement = $(this.domElement).find('.layerlist')[0];
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
                        var layerListOptions = {
                            map: self.currentMap,
                            layers: esri_mods_1.utils.getLayerList(this.currentMap),
                            removeUnderscores: true,
                            showLegend: true
                        };
                        var layerList = new esri_mods_1.LayerList(layerListOptions, self.layerListDomElement);
                        layerList.startup();
                    });
                    // Check if themes is defined
                    if (this.settings.themes !== undefined) {
                        this.settings.themes.forEach(function (theme) {
                            switch (theme.type) {
                                case 'dynamic':
                                    var dynamicLayer = new esri_mods_1.ArcGISDynamicMapServiceLayer(theme.url);
                                    dynamicLayer.id = theme.title;
                                    _this.themes.push(dynamicLayer);
                                    break;
                                case 'tiled':
                                    var tiledLayer = new esri_mods_1.ArcGISTiledMapServiceLayer(theme.url);
                                    tiledLayer.id = theme.title;
                                    _this.themes.push(tiledLayer);
                                    break;
                            }
                        });
                        this.currentMap.addLayers(this.themes);
                    }
                    this.currentMap.on('update-start', function (ev) {
                        self.isLoading = true;
                    });
                    this.currentMap.on('update-end', function (ev) {
                        self.isLoading = false;
                    });
                    this.currentMap.on('load', function (ev) {
                        console.log('map loaded');
                    });
                };
                ;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "settings", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MapComponent.prototype, "divId", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "mapLoaded", void 0);
                __decorate([
                    core_1.ViewChild(map_navigation_component_1.MapNavigationComponent), 
                    __metadata('design:type', map_navigation_component_1.MapNavigationComponent)
                ], MapComponent.prototype, "navigation", void 0);
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
                        template: " <div id='map' [id]=\"divId\">\n                    <div class=\"map-loading\" *ngIf=\"isLoading\" style=\"position: absolute; z-index: 99999999999;\">Bezig met laden...</div>\n                    <map-navigation [mapInstance]=\"currentMap\" [settings]=\"settings\"></map-navigation>\n                    <map-identify *ngIf=\"useIdentifyControl\" [mapInstance]=\"currentMap\" [settings]=\"settings\"></map-identify>\n                    <map-draw *ngIf=\"useDrawControl\" [mapInstance]=\"currentMap\"></map-draw>\n                    <map-edit *ngIf=\"useEditControl\" [mapInstance]=\"currentMap\"></map-edit> \n                    <ng-content></ng-content>\n                    <map-menu [settings]=\"settings\"\n                        (toInitialExtent)=\"navigation.toInitialExtent($event)\"\n                        (toggleIdentify)=\"identify.toggle($event)\">\n                    </map-menu>\n                </div>",
                        directives: [map_identify_component_1.MapIdentifyComponent, map_draw_component_1.MapDrawComponent, map_edit_component_1.MapEditComponent, map_menu_component_1.MapMenuComponent, map_navigation_component_1.MapNavigationComponent]
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