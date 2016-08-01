System.register(['@angular/core', '../componentbuilder/dynamic.component.holder'], function(exports_1, context_1) {
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
    var core_1, dynamic_component_holder_1;
    var IdentifyResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dynamic_component_holder_1_1) {
                dynamic_component_holder_1 = dynamic_component_holder_1_1;
            }],
        execute: function() {
            IdentifyResultsComponent = (function () {
                function IdentifyResultsComponent() {
                }
                IdentifyResultsComponent.prototype.ngOnInit = function () {
                    if (this.settings && this.settings.template && this.settings.template !== '') {
                        this.detailTemplate = this.settings.template;
                    }
                    else {
                        this.detailTemplate = "\n                <ul>\n                    <li *ngFor=\"let attribute of toArray(entity.feature.attributes)\">\n                        {{attribute?.key}} : {{attribute?.value}}\n                    </li>\n                </ul>";
                    }
                };
                IdentifyResultsComponent.prototype.ngOnChanges = function () {
                    if (this.results && this.results.length > 0) {
                        this.currentResult = this.results[0];
                    }
                };
                IdentifyResultsComponent.prototype.resultName = function (result) {
                    return result.layerName + ': ' + result.value;
                };
                IdentifyResultsComponent.prototype.selectResult = function (index) {
                    this.currentResult = this.results[index];
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], IdentifyResultsComponent.prototype, "settings", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], IdentifyResultsComponent.prototype, "results", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], IdentifyResultsComponent.prototype, "detailTemplate", void 0);
                IdentifyResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'digi-identify-results',
                        template: " <div style=\"display:none\">\n                    <div id=\"popup-content\">  \n                        <div *ngIf=\"results && results.length>0\">\n                            <select (change)=\"selectResult($event.target.value)\" *ngIf=\"results.length>1\">\n                                <option *ngFor=\"let result of results; let i=index\" [value]=\"i\">{{resultName(result)}}</option>                           \n                            </select>                     \n\n                            <div>\n                                <dynamic-holder [entity]=\"currentResult\" [title]=\"'Details'\" [template]=\"detailTemplate\" *ngIf=\"currentResult\"></dynamic-holder>                            \n                            </div> \n                        </div> \n                          <div *ngIf=\"!results || results.length==0\">Geen resultaten gevonden</div>                                      \n                    </div>\n                </div>",
                        directives: [dynamic_component_holder_1.DynamicHolder]
                    }), 
                    __metadata('design:paramtypes', [])
                ], IdentifyResultsComponent);
                return IdentifyResultsComponent;
            }());
            exports_1("IdentifyResultsComponent", IdentifyResultsComponent);
        }
    }
});
//# sourceMappingURL=map.identify.results.component.js.map