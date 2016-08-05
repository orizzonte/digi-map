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
                    this.changeTemplate = new core_1.EventEmitter();
                    this.dropDownResults = [];
                }
                IdentifyResultsComponent.prototype.calculateDropDownResults = function () {
                    var _this = this;
                    if (!this.results) {
                        return undefined;
                    }
                    var values = [];
                    this.results.forEach(function (element) {
                        element.layerResults.forEach(function (layer) {
                            layer.data.forEach(function (d) {
                                values.push({ layerName: d.layerName, value: d.value, data: d, template: _this.findTemplate(layer.templateId) });
                            });
                        });
                    });
                    return values;
                };
                IdentifyResultsComponent.prototype.findTemplate = function (templateId) {
                    return this.settings.identify.templates.find(function (x) { return x.id === templateId; }).html;
                };
                IdentifyResultsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var defaultDigimapTemplate = "        \n                <ul *ngIf=\"entity\">                \n                    <li *ngFor=\"let attribute of toArray(entity.feature.attributes)\">\n                        <label>{{attribute?.key}} :</label> {{attribute?.value}}\n                    </li>\n                </ul>";
                    this.settings.identify.templates.push({ id: 'DefaultDigiMapTemplate', html: defaultDigimapTemplate });
                    // Needed to trigger the recreation of the dynamic template
                    this.changeTemplate.subscribe(function (t) { return _this.currentTemplate = t; });
                };
                IdentifyResultsComponent.prototype.ngOnChanges = function () {
                    this.dropDownResults = this.calculateDropDownResults();
                    if (this.dropDownResults && this.dropDownResults.length > 0) {
                        this.currentResult = this.dropDownResults[0].data;
                        this.currentTemplate = undefined;
                        this.changeTemplate.emit(this.dropDownResults[0].template);
                    }
                    else {
                        this.currentResult = undefined;
                        this.currentTemplate = undefined;
                    }
                };
                IdentifyResultsComponent.prototype.resultName = function (result) {
                    return result.layerName + ': ' + result.value;
                };
                IdentifyResultsComponent.prototype.selectResult = function (index) {
                    this.currentResult = this.dropDownResults[index].data;
                    this.currentTemplate = undefined;
                    this.changeTemplate.emit(this.dropDownResults[index].template);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], IdentifyResultsComponent.prototype, "settings", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], IdentifyResultsComponent.prototype, "results", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], IdentifyResultsComponent.prototype, "changeTemplate", void 0);
                IdentifyResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'digi-identify-results',
                        template: " <div style=\"display:none\">\n                    <div id=\"popup-content\">                     \n                        <div *ngIf=\"dropDownResults && dropDownResults.length > 0\">\n                            <select (change)=\"selectResult($event.target.value)\">\n                                <option *ngFor=\"let result of dropDownResults; let i=index\" [value]=\"i\">{{resultName(result)}}</option>                           \n                            </select>  \n\n                            <dynamic-holder [entity]=\"currentResult\" [title]=\"'Details'\" [template]=\"currentTemplate\" *ngIf=\"currentResult && currentTemplate\"></dynamic-holder>                           \n                        </div>                      \n                       \n                        <div *ngIf=\"!dropDownResults || dropDownResults.length==0\">Geen resultaten gevonden</div>  \n\n                    </div>\n                </div>",
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