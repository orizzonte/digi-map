System.register(['./ui/toggler/toggler', './identify/map.identify.results.component', './componentbuilder/dynamic.component.holder', './componentbuilder/custom.component.builder', './navigation/map.navigation.component', './menu/map.menu.component', './filter/map.filter.component', './edit/map.edit.component', './draw/map.draw.component', './identify/map.identify.component', '@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/common', './map.component', 'ng2-bootstrap'], function(exports_1, context_1) {
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
    var toggler_1, map_identify_results_component_1, dynamic_component_holder_1, custom_component_builder_1, map_navigation_component_1, map_menu_component_1, map_filter_component_1, map_edit_component_1, map_draw_component_1, map_identify_component_1, core_1, platform_browser_1, forms_1, common_1, map_component_1, ng2_bootstrap_1;
    var MapModule;
    return {
        setters:[
            function (toggler_1_1) {
                toggler_1 = toggler_1_1;
            },
            function (map_identify_results_component_1_1) {
                map_identify_results_component_1 = map_identify_results_component_1_1;
            },
            function (dynamic_component_holder_1_1) {
                dynamic_component_holder_1 = dynamic_component_holder_1_1;
            },
            function (custom_component_builder_1_1) {
                custom_component_builder_1 = custom_component_builder_1_1;
            },
            function (map_navigation_component_1_1) {
                map_navigation_component_1 = map_navigation_component_1_1;
            },
            function (map_menu_component_1_1) {
                map_menu_component_1 = map_menu_component_1_1;
            },
            function (map_filter_component_1_1) {
                map_filter_component_1 = map_filter_component_1_1;
            },
            function (map_edit_component_1_1) {
                map_edit_component_1 = map_edit_component_1_1;
            },
            function (map_draw_component_1_1) {
                map_draw_component_1 = map_draw_component_1_1;
            },
            function (map_identify_component_1_1) {
                map_identify_component_1 = map_identify_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            MapModule = (function () {
                function MapModule() {
                }
                MapModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_bootstrap_1.Ng2BootstrapModule],
                        declarations: [map_component_1.MapComponent,
                            map_identify_component_1.MapIdentifyComponent,
                            map_draw_component_1.MapDrawComponent,
                            map_edit_component_1.MapEditComponent,
                            map_filter_component_1.MapFilterComponent,
                            map_menu_component_1.MapMenuComponent,
                            map_navigation_component_1.MapNavigationComponent,
                            custom_component_builder_1.CustomComponentBuilder,
                            dynamic_component_holder_1.DynamicHolder,
                            map_identify_results_component_1.IdentifyResultsComponent,
                            toggler_1.TogglerComponent],
                        exports: [map_component_1.MapComponent],
                        entryComponents: [map_component_1.MapComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapModule);
                return MapModule;
            }());
            exports_1("MapModule", MapModule);
        }
    }
});
//# sourceMappingURL=map.module.js.map