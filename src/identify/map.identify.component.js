System.register(['@angular/core', 'esri-mods', '../componentbuilder/dynamic.component.holder', './map.identify.results.component'], function(exports_1, context_1) {
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
    var core_1, esri_mods_1, dynamic_component_holder_1, map_identify_results_component_1;
    var MapIdentifyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_mods_1_1) {
                esri_mods_1 = esri_mods_1_1;
            },
            function (dynamic_component_holder_1_1) {
                dynamic_component_holder_1 = dynamic_component_holder_1_1;
            },
            function (map_identify_results_component_1_1) {
                map_identify_results_component_1 = map_identify_results_component_1_1;
            }],
        execute: function() {
            MapIdentifyComponent = (function () {
                function MapIdentifyComponent() {
                    this.isActive = false;
                    this.results = [];
                }
                MapIdentifyComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.settings || !this.settings.identify) {
                        this.isActive = false;
                    }
                    this.infoWindow = new esri_mods_1.InfoWindowLite(null, 'popup');
                    this.infoWindow.startup();
                    this.mapInstance.infoWindow = this.infoWindow;
                    this.infoWindow.resize(this.settings.identify.width || 310, this.settings.identify.height || 350);
                    this.mapInstance.on('click', function (ev) {
                        if (_this.isActive) {
                            var res_1 = [];
                            var self_1 = _this;
                            _this.settings.identify.urls.forEach(function (url) {
                                // create identify tasks and setup parameters
                                var identifyTask = new esri_mods_1.IdentifyTask(url);
                                var identifyParams = new esri_mods_1.IdentifyParameters();
                                identifyParams.tolerance = 3;
                                identifyParams.returnGeometry = true;
                                identifyParams.layerOption = esri_mods_1.IdentifyParameters.LAYER_OPTION_VISIBLE;
                                identifyParams.geometry = ev.mapPoint;
                                identifyParams.mapExtent = self_1.mapInstance.extent;
                                identifyTask
                                    .execute(identifyParams)
                                    .addCallback(function (response) {
                                    console.log('reposnse: ' + JSON.stringify(response));
                                    response.forEach(function (element) {
                                        res_1.push(element);
                                    });
                                    self_1.results = res_1;
                                });
                            });
                            // Set content of InfoWindowLite
                            _this.infoWindow.setTitle(_this.settings.identify.title || 'Details');
                            _this.infoWindow.setContent(document.getElementById('popup-content'));
                            // Show InfoWindowLite
                            _this.infoWindow.show(ev.mapPoint);
                        }
                    });
                };
                MapIdentifyComponent.prototype.onClick = function () {
                    this.isActive = !this.isActive;
                    this.infoWindow.hide();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', esri_mods_1.map)
                ], MapIdentifyComponent.prototype, "mapInstance", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MapIdentifyComponent.prototype, "settings", void 0);
                MapIdentifyComponent = __decorate([
                    core_1.Component({
                        selector: 'map-identify',
                        template: "\t<div class='map-identify'>\n\t\t\t\t\t<button (click)='onClick()' [class.active]='isActive'>Detailgegevens</button>\n\t\t\t  \t</div>\n\t\t\t  \t<div id='popup'></div>\n\t\t\t\t<digi-identify-results [results]='results' *ngIf=\"results\" [settings]=\"settings.identify\"></digi-identify-results>",
                        styles: ['.map-identify button { z-index: 99999999999; }',
                            '.active { background-color: green; color: white; }'],
                        directives: [dynamic_component_holder_1.DynamicHolder, map_identify_results_component_1.IdentifyResultsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapIdentifyComponent);
                return MapIdentifyComponent;
            }());
            exports_1("MapIdentifyComponent", MapIdentifyComponent);
        }
    }
});
//# sourceMappingURL=map.identify.component.js.map