System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var TogglerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TogglerComponent = (function () {
                function TogglerComponent() {
                    this.isHidden = true;
                }
                TogglerComponent.prototype.toggle = function () {
                    this.isHidden = !this.isHidden;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TogglerComponent.prototype, "icon", void 0);
                TogglerComponent = __decorate([
                    core_1.Component({
                        selector: 'digi-toggler',
                        template: " <button class=\" btn-toggle \" (click)=\"toggle()\">\n                        <i class=\"material-icons \">{{icon}}</i>\n                        <i class=\"material-icons \" *ngIf=\"isHidden \">keyboard_arrow_right</i>\n                        <i class=\"material-icons \" *ngIf=\"!isHidden \">keyboard_arrow_left</i>\n                </button>\n                <div [style.display]=\"isHidden ? 'none' : 'block'\">\n                    <ng-content></ng-content>\n                </div>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], TogglerComponent);
                return TogglerComponent;
            }());
            exports_1("TogglerComponent", TogglerComponent);
        }
    }
});
//# sourceMappingURL=toggler.js.map