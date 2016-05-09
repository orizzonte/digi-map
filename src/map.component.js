System.register(['angular2/core', 'esri', './layer'], function(exports_1, context_1) {
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
    var core_1, esri_1, layer_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_1_1) {
                esri_1 = esri_1_1;
            },
            function (layer_1_1) {
                layer_1 = layer_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent(elRef) {
                    this.elRef = elRef;
                }
                MapComponent.prototype.ngOnInit = function () {
                    // create the map
                    var m = new esri_1.map('map');
                    this.layers.forEach(function (layer) {
                        if (layer.type === layer_1.LayerType.ArcGisTiledLayer) {
                            m.addLayer(new esri_1.ArcGISTiledMapServiceLayer(layer.url));
                        }
                    });
                    // // Create a MapView instance (for 2D viewing)
                    // var view = new MapView({
                    //   map: m,  // References a Map instance
                    //   container: this.elRef.nativeElement.firstChild  // References the ID of a DOM element
                    // });
                    // view.then((response) => {
                    //   // make response available to app
                    //   // and emit map loaded event
                    // this.response = response;
                    //   this.mapLoaded.next(response);
                    // });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MapComponent.prototype, "layers", void 0);
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