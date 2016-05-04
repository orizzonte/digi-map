System.register(['angular2/core', 'esri'], function(exports_1, context_1) {
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
    var core_1, esri_1;
    var MapService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_1_1) {
                esri_1 = esri_1_1;
            }],
        execute: function() {
            MapService = (function () {
                function MapService() {
                }
                // load a web map and return response
                MapService.prototype.createMap = function (itemIdOrInfo, domNodeOrId, options) {
                    return esri_1.arcgisUtils.createMap(itemIdOrInfo, domNodeOrId, options).then(function (response) {
                        // append layer infos to response before returning
                        response.layerInfos = esri_1.arcgisUtils.getLegendLayers(response);
                        return response;
                    });
                };
                ;
                // load a web map and return responses
                MapService.prototype.createMap2 = function (domNodeId, options) {
                    var map = new esri_1.Map(domNodeId, { basemap: 'topo', center: [-122.45, 37.75], zoom: 13, sliderStyle: 'small' });
                };
                ;
                // create a search dijit at the dom node
                MapService.prototype.createSearch = function (options, domNodeOrId) {
                    return new esri_1.Search(options, domNodeOrId);
                };
                ;
                // create a legend dijit at the dom node
                MapService.prototype.createLegend = function (options, domNodeOrId) {
                    return new esri_1.Legend(options, domNodeOrId);
                };
                MapService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MapService);
                return MapService;
            }());
            exports_1("MapService", MapService);
        }
    }
});
//# sourceMappingURL=map.service.js.map