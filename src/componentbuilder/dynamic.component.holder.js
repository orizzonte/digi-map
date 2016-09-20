System.register(['@angular/core', '@angular/common', './custom.component.builder'], function(exports_1, context_1) {
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
    var core_1, core_2, common_1, custom_component_builder_1;
    var DynamicHolder;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (custom_component_builder_1_1) {
                custom_component_builder_1 = custom_component_builder_1_1;
            }],
        execute: function() {
            DynamicHolder = (function () {
                // ng loader and our custom builder
                function DynamicHolder(componentResolver, customComponentBuilder) {
                    this.componentResolver = componentResolver;
                    this.customComponentBuilder = customComponentBuilder;
                }
                DynamicHolder.prototype.ngOnChanges = function () {
                    if (this.component) {
                        this.component.title = this.title;
                        this.component.entity = this.entity;
                        if (this.template !== this.previousTemplate) {
                            console.log('recreating component');
                            this.dynamicComponentTarget.clear();
                            this.ngOnInit();
                        }
                    }
                };
                DynamicHolder.prototype.ngOnInit = function () {
                    // dynamic template built (TODO driven by some incoming settings)        
                    var _this = this;
                    // now we get built component, just to load it
                    var dynamicComponent = this.customComponentBuilder
                        .CreateComponent(this.template, common_1.FORM_DIRECTIVES);
                    // we have a component and its target
                    this.componentResolver
                        .resolveComponent(dynamicComponent)
                        .then(function (factory) {
                        console.log('creating compoent with template: ' + _this.template);
                        // Instantiates a single {@link Component} and inserts its Host View 
                        //   into this container at the specified `index`
                        var comp = _this.dynamicComponentTarget.createComponent(factory, 0);
                        // and here we have access to our dynamic component
                        _this.component = comp.instance;
                        _this.previousTemplate = _this.template;
                        _this.component.title = _this.title;
                        _this.component.entity = _this.entity;
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DynamicHolder.prototype, "entity", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DynamicHolder.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DynamicHolder.prototype, "template", void 0);
                __decorate([
                    core_2.ViewChild('dynamicContentPlaceHolder', { read: core_2.ViewContainerRef }), 
                    __metadata('design:type', core_2.ViewContainerRef)
                ], DynamicHolder.prototype, "dynamicComponentTarget", void 0);
                DynamicHolder = __decorate([
                    core_1.Component({
                        selector: 'dynamic-holder',
                        template: "\n<div>  \n  <div #dynamicContentPlaceHolder></div>  \n</div>\n",
                        providers: [custom_component_builder_1.CustomComponentBuilder]
                    }), 
                    __metadata('design:paramtypes', [core_2.ComponentResolver, custom_component_builder_1.CustomComponentBuilder])
                ], DynamicHolder);
                return DynamicHolder;
            }());
            exports_1("DynamicHolder", DynamicHolder);
        }
    }
});
//# sourceMappingURL=dynamic.component.holder.js.map