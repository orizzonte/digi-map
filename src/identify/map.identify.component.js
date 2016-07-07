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
    var MapIdentityComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_mods_1_1) {
                esri_mods_1 = esri_mods_1_1;
            }],
        execute: function() {
            MapIdentityComponent = (function () {
                function MapIdentityComponent() {
                    this.active = false;
                }
                MapIdentityComponent.prototype.ngOnInit = function () {
                    this.mapInstance.on('click', function (ev) {
                        console.log('clicked on map');
                        console.log(ev);
                    });
                };
                MapIdentityComponent.prototype.onClick = function () {
                    console.log('Toggle map-identify');
                    this.active = !this.active;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', esri_mods_1.map)
                ], MapIdentityComponent.prototype, "mapInstance", void 0);
                MapIdentityComponent = __decorate([
                    core_1.Component({
                        selector: 'map-identify',
                        template: "\t<div class=\"map-identify\">\n\t\t\t\t\t<button (click)=\"onClick()\">Detailgegevens</button>\n\t\t\t\t\t<span>Actief: {{active}}</span>\n\t\t\t  \t</div>",
                        styles: ['.map-identify butto { z-index: 99999999999; }']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapIdentityComponent);
                return MapIdentityComponent;
            }());
            exports_1("MapIdentityComponent", MapIdentityComponent);
        }
    }
});
//# sourceMappingURL=map.identify.component.js.map