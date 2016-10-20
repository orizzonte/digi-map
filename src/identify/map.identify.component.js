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
                    this.onIdentify = new core_1.EventEmitter();
                    this.isActive = false;
                }
                MapIdentifyComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Making sure we always change the array ref to trigger angulars change detection
                    this.onIdentify.subscribe(function (res) {
                        var newResults = [];
                        var themesettings = _this.settings;
                        if (_this.results) {
                            _this.results.forEach(function (element) {
                                newResults.push(element);
                            });
                        }
                        newResults.push(res);
                        //  Caclulate templates
                        newResults.forEach(function (element) {
                            var currentTheme = themesettings.themes.find(function (t) { return t.url === element.url; });
                            element.layerResults.forEach(function (layer) {
                                var templateMapping = currentTheme.identifyTemplateMappings.find(function (m) { return m.layerId === layer.layerId; });
                                layer.templateId = templateMapping ? templateMapping.templateId : 'DefaultDigiMapTemplate';
                                // console.log('lyer template mapping: ' + layer.templateId);
                            });
                        });
                        _this.results = newResults;
                    });
                    if (!this.settings || !this.settings.identify) {
                        this.isActive = false;
                    }
                    this.infoWindow = new esri_mods_1.InfoWindowLite(null, 'popup');
                    this.infoWindow.startup();
                    this.mapInstance.infoWindow = this.infoWindow;
                    this.infoWindow.resize(this.settings.identify.width || 310, this.settings.identify.height || 350);
                    // Set content of InfoWindowLite
                    this.infoWindow.setTitle(this.settings.identify.title || 'Details');
                    this.infoWindow.setContent(document.getElementById('popup-content'));
                    this.mapInstance.on('click', function (ev) {
                        if (_this.isActive) {
                            var self_1 = _this;
                            _this.results = undefined;
                            _this.settings.themes.filter(function (f) { return f.identifyable || false; }).forEach(function (theme) {
                                var identifyResult = { url: theme.url, layerResults: [] };
                                // create identify tasks and setup parameters
                                var identifyTask = new esri_mods_1.IdentifyTask(theme.url);
                                var identifyParams = new esri_mods_1.IdentifyParameters();
                                identifyParams.tolerance = 3;
                                identifyParams.returnGeometry = true;
                                identifyParams.layerOption = esri_mods_1.IdentifyParameters.LAYER_OPTION_VISIBLE;
                                identifyParams.geometry = ev.mapPoint;
                                identifyParams.mapExtent = self_1.mapInstance.extent;
                                // callback proxy to pass along the identifyResult
                                var callbackProxy = function (response) {
                                    callbackFunc(response, identifyResult);
                                    self_1.onIdentify.emit(identifyResult);
                                };
                                identifyTask
                                    .execute(identifyParams)
                                    .addCallback(callbackProxy);
                            });
                            _this.infoWindow.show(ev.mapPoint);
                        }
                    });
                    function callbackFunc(response, identifyResult) {
                        // console.log('callbackFunc result ' + JSON.stringify(response));
                        response.forEach(function (element) {
                            var layerResult = identifyResult.layerResults.find(function (x) { return x.layerId === element.layerId; });
                            if (!layerResult) {
                                layerResult = { layerId: element.layerId, data: [] };
                                identifyResult.layerResults.push(layerResult);
                            }
                            layerResult.data.push(element);
                        });
                    }
                };
                MapIdentifyComponent.prototype.toggle = function () {
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
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapIdentifyComponent.prototype, "onIdentify", void 0);
                MapIdentifyComponent = __decorate([
                    core_1.Component({
                        selector: 'map-identify',
                        template: "\t<div class='map-identify'>\t\t\t\t\t\n\t\t\t  \t</div>\n\t\t\t  \t<div id='popup'></div>\n\t\t\t\t<digi-identify-results [results]='results' [settings]=\"settings\"></digi-identify-results>",
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