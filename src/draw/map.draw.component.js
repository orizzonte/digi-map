System.register(['@angular/core', 'esri-mods', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, esri_mods_1, Rx_1;
    var GeometryType, MapDrawComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_mods_1_1) {
                esri_mods_1 = esri_mods_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            (function (GeometryType) {
                GeometryType[GeometryType["Point"] = 1] = "Point";
                GeometryType[GeometryType["Multiline"] = 2] = "Multiline";
            })(GeometryType || (GeometryType = {}));
            exports_1("GeometryType", GeometryType);
            MapDrawComponent = (function () {
                function MapDrawComponent() {
                    this.activateSubject = new Rx_1.Subject();
                    this.deactivateSubject = new Rx_1.Subject();
                    this.drawCompleteSubject = new Rx_1.Subject();
                    // Setup the observables
                    this.onActivate = this.activateSubject.asObservable();
                    this.onDeactivate = this.deactivateSubject.asObservable();
                    this.onDrawComplete = this.drawCompleteSubject.asObservable();
                }
                MapDrawComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Create draw toolbar and add to map
                    this.drawToolbar = new esri_mods_1.draw(this.mapInstance);
                    // Add shape to map
                    this.drawToolbar.on('draw-complete', function (ev) {
                        var symbol;
                        switch (ev.geometry.type) {
                            case 'polyline':
                                symbol = new esri_mods_1.SimpleLineSymbol();
                                break;
                            default:
                                symbol = new esri_mods_1.SimpleFillSymbol();
                                break;
                        }
                        var shape = new esri_mods_1.graphic(ev.geometry, symbol);
                        _this.mapInstance.graphics.add(shape);
                        _this.deactivate();
                        _this.drawCompleteSubject.next(ev);
                    });
                };
                MapDrawComponent.prototype.activate = function (geometryType) {
                    this.mapInstance.disableMapNavigation();
                    switch (geometryType) {
                        case GeometryType.Multiline:
                            this.drawToolbar.activate(esri_mods_1.draw.POLYLINE);
                            break;
                        default:
                            break;
                    }
                    this.activateSubject.next(null);
                };
                MapDrawComponent.prototype.deactivate = function () {
                    this.drawToolbar.deactivate();
                    this.mapInstance.enableMapNavigation();
                    this.deactivateSubject.next(null);
                };
                MapDrawComponent.prototype.finishDrawing = function () {
                    this.drawToolbar.finishDrawing();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', esri_mods_1.map)
                ], MapDrawComponent.prototype, "mapInstance", void 0);
                MapDrawComponent = __decorate([
                    core_1.Component({
                        selector: 'map-draw',
                        template: '<div></div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapDrawComponent);
                return MapDrawComponent;
            }());
            exports_1("MapDrawComponent", MapDrawComponent);
        }
    }
});
//# sourceMappingURL=map.draw.component.js.map