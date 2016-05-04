System.register(['angular2/core', './map.component', './search.component', './legend.component'], function(exports_1, context_1) {
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
    var core_1, map_component_1, search_component_1, legend_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (legend_component_1_1) {
                legend_component_1 = legend_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Map Title';
                    // map config
                    this.itemId = '8e42e164d4174da09f61fe0d3f206641';
                    // itemId = '4c009d4c236c4c0e91936b2fbfb085da';
                    // itemId = '719ba051ae8f413388045d9f88f2ecc0';
                    this.mapOptions = {
                        basemap: 'gray',
                        center: [51.063198, 3.701191],
                        zoom: 5
                    };
                    // search config
                    this.searchOptions = {
                        enableButtonMode: true,
                        enableLabel: false,
                        enableInfoWindow: true,
                        showInfoWindowOnSelect: false,
                    };
                }
                // once the map loads
                AppComponent.prototype.onMapLoad = function (response) {
                    // bind the search dijit to the map
                    this.searchComponent.setMap(response.map);
                    // initialize the leged dijit with map and layer infos
                    this.legendComponent.init(response.map, response.layerInfos);
                    // bind the map title
                    this.title = response.itemInfo.item.title;
                };
                __decorate([
                    core_1.ViewChild(search_component_1.SearchComponent), 
                    __metadata('design:type', search_component_1.SearchComponent)
                ], AppComponent.prototype, "searchComponent", void 0);
                __decorate([
                    core_1.ViewChild(legend_component_1.LegendComponent), 
                    __metadata('design:type', legend_component_1.LegendComponent)
                ], AppComponent.prototype, "legendComponent", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [map_component_1.MapComponent, search_component_1.SearchComponent, legend_component_1.LegendComponent],
                        selector: 'my-app',
                        template: "\n    <div class=\"row\">\n      <div class=\" map-col\">\n        <esri-map #mapComponent [itemId]=\"itemId\" [options]=\"mapOptions\" (mapLoaded)=\"onMapLoad(mapComponent.response)\">\n          <!--<esri-search [options]=\"searchOptions\"></esri-search>-->\n        </esri-map>\n      </div>     \n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map