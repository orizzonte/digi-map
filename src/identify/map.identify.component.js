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
    var MapIdentifyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_mods_1_1) {
                esri_mods_1 = esri_mods_1_1;
            }],
        execute: function() {
            MapIdentifyComponent = (function () {
                function MapIdentifyComponent() {
                    this.isActive = false;
                }
                MapIdentifyComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.infoWindow = new esri_mods_1.InfoWindowLite(null, 'popup');
                    this.infoWindow.startup();
                    this.mapInstance.infoWindow = this.infoWindow;
                    this.mapInstance.on('click', function (ev) {
                        if (_this.isActive) {
                            // Set content of InfoWindowLite
                            _this.infoWindow.setTitle('Titel');
                            _this.infoWindow.setContent('<span>' + ev.mapPoint.x + ', ' + ev.mapPoint.y + '</span>');
                            // Show InfoWindowLite
                            _this.infoWindow.show(ev.mapPoint, esri_mods_1.InfoWindow.ANCHOR_UPPERRIGHT);
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
                MapIdentifyComponent = __decorate([
                    core_1.Component({
                        selector: 'map-identify',
                        template: "\t<div class=\"map-identify\">\n\t\t\t\t\t<button (click)=\"onClick()\" [class.active]=\"isActive\">Detailgegevens</button>\n\t\t\t  \t</div>\n\t\t\t  \t<div id=\"popup\"></div>",
                        styles: ['.map-identify button { z-index: 99999999999; }',
                            '.active { background-color: green; color: white; }']
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