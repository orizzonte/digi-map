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
    var MapEditComponent;
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
            MapEditComponent = (function () {
                function MapEditComponent() {
                    this.activateSubject = new Rx_1.Subject();
                    this.deactivateSubject = new Rx_1.Subject();
                    // Setup the observables
                    this.onActivate = this.activateSubject.asObservable();
                    this.onDeactivate = this.deactivateSubject.asObservable();
                }
                MapEditComponent.prototype.ngOnInit = function () {
                    // Create edit toolbar and add to map
                    this.editToolbar = new esri_mods_1.edit(this.mapInstance);
                };
                MapEditComponent.prototype.activate = function () {
                    //this.mapInstance.disableMapNavigation();
                    var graphicToEdit = this.mapInstance.graphics.graphics[0];
                    this.editToolbar.activate(esri_mods_1.edit.EDIT_VERTICES, graphicToEdit);
                    this.activateSubject.next(null);
                };
                MapEditComponent.prototype.deactivate = function () {
                    this.editToolbar.deactivate();
                    //this.mapInstance.enableMapNavigation();
                    this.deactivateSubject.next(null);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', esri_mods_1.map)
                ], MapEditComponent.prototype, "mapInstance", void 0);
                MapEditComponent = __decorate([
                    core_1.Component({
                        selector: 'map-edit',
                        template: '<div></div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapEditComponent);
                return MapEditComponent;
            }());
            exports_1("MapEditComponent", MapEditComponent);
        }
    }
});
//# sourceMappingURL=map.edit.component.js.map