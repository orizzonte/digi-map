System.register(['@angular/core', 'ng2-bootstrap/ng2-bootstrap', '../ui/toggler/toggler'], function(exports_1, context_1) {
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
    var core_1, ng2_bootstrap_1, toggler_1;
    var MapMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (toggler_1_1) {
                toggler_1 = toggler_1_1;
            }],
        execute: function() {
            MapMenuComponent = (function () {
                function MapMenuComponent() {
                    var _this = this;
                    this.toInitialExtent = new core_1.EventEmitter();
                    this.toggleIdentify = new core_1.EventEmitter();
                    this.oneAtATime = true;
                    this.identifyActive = false;
                    this.status = {
                        isFirstOpen: true,
                        isFirstDisabled: false
                    };
                    this.toggleIdentify.subscribe(function (x) { return _this.identifyActive = !_this.identifyActive; });
                }
                MapMenuComponent.prototype.canShowButton = function (controlName) {
                    if (!this.settings || !this.settings.controls) {
                        return false;
                    }
                    return this.settings.controls.indexOf(controlName) !== -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MapMenuComponent.prototype, "settings", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapMenuComponent.prototype, "toInitialExtent", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapMenuComponent.prototype, "toggleIdentify", void 0);
                MapMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'map-menu',
                        template: "<digi-toggler icon='build'>\n                    <div class=\"tabs\">\n                        <tabset class=\"tabs-kaart-knoppen\">\n                            <tab heading=\"Werkbalk\">\n                                <accordion [closeOthers]=\"oneAtATime\">\n                                    <accordion-group #group [isOpen]=\"status.open\">\n                                        <div accordion-heading>\n                                            Navigatie\n                                            <i class=\"material-icons\" *ngIf=\"!group?.isOpen\">keyboard_arrow_down</i>\n                                        </div>\n                                        <ul class=\"knoppen\">\n                                            <!--<li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Meet afstand\"><i class=\"material-icons\">straighten</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Meet opp.\"><i class=\"material-icons\">photo_size_select_small</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Slepen\"><i class=\"material-icons\">pan_tool</i></button></li>-->\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Begin positie kaart\" (click)=\"toInitialExtent.emit($event)\"><i class=\"material-icons\">pin_drop</i></button></li>\n                                            <!--<li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Vorige positie kaart\"><i class=\"material-icons\">settings_backup_restore</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Handleiding\"><i class=\"material-icons\">description</i></button></li>-->\n                                            <li *ngIf=\"canShowButton('identify')\"><button [class]=\"identifyActive ? 'btn-kaart active' : 'btn-kaart'\" tooltipPlacement=\"bottom\" tooltip=\"Detailgegevens\" (click)=\"toggleIdentify.emit($event)\"><i class=\"material-icons\">info</i></button></li>\n                                            <!--<li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Afdrukken\"><i class=\"material-icons\">print</i></button></li>-->\n                                        </ul>\n                                    </accordion-group>\n                                    <!--<accordion-group #group [isOpen]=\"status.open\">\n                                        <div accordion-heading>\n                                            Tekenen\n                                            <i class=\"material-icons\" *ngIf=\"!group?.isOpen\">keyboard_arrow_down</i>\n                                        </div>\n                                        <ul class=\"knoppen\">\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Punt\"><i class=\"material-icons\">border_clear</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Lijn\"><i class=\"material-icons\">border_top</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Vlak\"><i class=\"material-icons\">border_outer</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Vrij tekenen\"><i class=\"material-icons\">&#xE6E1;</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Rechthoeken\"><i class=\"material-icons\">check_box_outline_blank</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Cirkels\"><i class=\"material-icons\">radio_button_unchecked</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Ellips\"><i class=\"material-icons ovaal\">radio_button_unchecked</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Pijl\"><i class=\"material-icons\">arrow_forward</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Wijzig\"><i class=\"material-icons\">mode_edit</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Verwijder\"><i class=\"material-icons\">delete_forever</i></button></li>\n                                        </ul>\n                                    </accordion-group>-->\n                                </accordion>\n                            </tab>\n                            <tab heading=\"Kaartlagen\">\n                                <div id=\"legend\"></div>\n                            </tab>\n                        </tabset>\t\t\n                    </div>\n                </digi-toggler>",
                        directives: [ng2_bootstrap_1.TOOLTIP_DIRECTIVES, ng2_bootstrap_1.TAB_DIRECTIVES, toggler_1.TogglerComponent, ng2_bootstrap_1.ACCORDION_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapMenuComponent);
                return MapMenuComponent;
            }());
            exports_1("MapMenuComponent", MapMenuComponent);
        }
    }
});
//# sourceMappingURL=map.menu.component.js.map