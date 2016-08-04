System.register("digi-map/src/ui/toggler/toggler", ["@angular/core", "ng2-bootstrap/ng2-bootstrap"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      ng2_bootstrap_1;
  var TogglerComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(ng2_bootstrap_1_1) {
      ng2_bootstrap_1 = ng2_bootstrap_1_1;
    }],
    execute: function() {
      TogglerComponent = (function() {
        function TogglerComponent() {
          this.isHidden = true;
        }
        TogglerComponent.prototype.toggle = function() {
          this.isHidden = !this.isHidden;
        };
        __decorate([core_1.Input(), __metadata('design:type', String)], TogglerComponent.prototype, "icon", void 0);
        TogglerComponent = __decorate([core_1.Component({
          selector: 'digi-toggler',
          template: " <button class=\" btn-toggle \" (click)=\"toggle()\">\n                        <i class=\"material-icons \">{{icon}}</i>\n                        <i class=\"material-icons \" *ngIf=\"isHidden \">keyboard_arrow_right</i>\n                        <i class=\"material-icons \" *ngIf=\"!isHidden \">keyboard_arrow_left</i>\n                </button>\n                <div [style.display]=\"isHidden ? 'none' : 'block'\">\n                    <ng-content></ng-content>\n                </div>",
          directives: [ng2_bootstrap_1.TOOLTIP_DIRECTIVES]
        }), __metadata('design:paramtypes', [])], TogglerComponent);
        return TogglerComponent;
      }());
      exports_1("TogglerComponent", TogglerComponent);
    }
  };
});

System.register("digi-map/src/menu/map.menu.component", ["@angular/core", "ng2-bootstrap/ng2-bootstrap", "../ui/toggler/toggler"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      ng2_bootstrap_1,
      toggler_1;
  var MapMenuComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(ng2_bootstrap_1_1) {
      ng2_bootstrap_1 = ng2_bootstrap_1_1;
    }, function(toggler_1_1) {
      toggler_1 = toggler_1_1;
    }],
    execute: function() {
      MapMenuComponent = (function() {
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
          this.toggleIdentify.subscribe(function(x) {
            return _this.identifyActive = !_this.identifyActive;
          });
        }
        MapMenuComponent.prototype.canShowButton = function(controlName) {
          if (!this.settings || !this.settings.controls) {
            return false;
          }
          return this.settings.controls.indexOf(controlName) !== -1;
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], MapMenuComponent.prototype, "settings", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], MapMenuComponent.prototype, "toInitialExtent", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], MapMenuComponent.prototype, "toggleIdentify", void 0);
        MapMenuComponent = __decorate([core_1.Component({
          selector: 'map-menu',
          template: "<digi-toggler icon='build'>\n                    <div class=\"tabs\">\n                        <tabset class=\"tabs-kaart-knoppen\">\n                            <tab heading=\"Werkbalk\">\n                                <accordion [closeOthers]=\"oneAtATime\">\n                                    <accordion-group #group [isOpen]=\"status.open\">\n                                        <div accordion-heading>\n                                            Navigatie\n                                            <i class=\"material-icons\" *ngIf=\"!group?.isOpen\">keyboard_arrow_down</i>\n                                        </div>\n                                        <ul class=\"knoppen\">\n                                            <!--<li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Meet afstand\"><i class=\"material-icons\">straighten</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Meet opp.\"><i class=\"material-icons\">photo_size_select_small</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Slepen\"><i class=\"material-icons\">pan_tool</i></button></li>-->\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Begin positie kaart\" (click)=\"toInitialExtent.emit($event)\"><i class=\"material-icons\">pin_drop</i></button></li>\n                                            <!--<li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Vorige positie kaart\"><i class=\"material-icons\">settings_backup_restore</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Handleiding\"><i class=\"material-icons\">description</i></button></li>-->\n                                            <li *ngIf=\"canShowButton('identify')\"><button [class]=\"identifyActive ? 'btn-kaart active' : 'btn-kaart'\" tooltipPlacement=\"bottom\" tooltip=\"Detailgegevens\" (click)=\"toggleIdentify.emit($event)\"><i class=\"material-icons\">info</i></button></li>\n                                            <!--<li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Afdrukken\"><i class=\"material-icons\">print</i></button></li>-->\n                                        </ul>\n                                    </accordion-group>\n                                    <!--<accordion-group #group [isOpen]=\"status.open\">\n                                        <div accordion-heading>\n                                            Tekenen\n                                            <i class=\"material-icons\" *ngIf=\"!group?.isOpen\">keyboard_arrow_down</i>\n                                        </div>\n                                        <ul class=\"knoppen\">\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Punt\"><i class=\"material-icons\">border_clear</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Lijn\"><i class=\"material-icons\">border_top</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Vlak\"><i class=\"material-icons\">border_outer</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Vrij tekenen\"><i class=\"material-icons\">&#xE6E1;</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Rechthoeken\"><i class=\"material-icons\">check_box_outline_blank</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Cirkels\"><i class=\"material-icons\">radio_button_unchecked</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Ellips\"><i class=\"material-icons ovaal\">radio_button_unchecked</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Pijl\"><i class=\"material-icons\">arrow_forward</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Wijzig\"><i class=\"material-icons\">mode_edit</i></button></li>\n                                            <li><button class=\"btn-kaart\" tooltipPlacement=\"bottom\" tooltip=\"Verwijder\"><i class=\"material-icons\">delete_forever</i></button></li>\n                                        </ul>\n                                    </accordion-group>-->\n                                </accordion>\n                            </tab>\n                            <tab heading=\"Kaartlagen\">\n                                <div id=\"legend\"></div>\n                            </tab>\n                        </tabset>\t\t\n                    </div>\n                </digi-toggler>",
          directives: [ng2_bootstrap_1.TOOLTIP_DIRECTIVES, ng2_bootstrap_1.TAB_DIRECTIVES, toggler_1.TogglerComponent, ng2_bootstrap_1.ACCORDION_DIRECTIVES]
        }), __metadata('design:paramtypes', [])], MapMenuComponent);
        return MapMenuComponent;
      }());
      exports_1("MapMenuComponent", MapMenuComponent);
    }
  };
});

System.register("digi-map/src/navigation/map.navigation.component", ["@angular/core", "esri-mods"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      esri_mods_1;
  var MapNavigationComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(esri_mods_1_1) {
      esri_mods_1 = esri_mods_1_1;
    }],
    execute: function() {
      MapNavigationComponent = (function() {
        function MapNavigationComponent() {}
        MapNavigationComponent.prototype.toInitialExtent = function() {
          this.zoomToExtent(this.initialExtent);
        };
        MapNavigationComponent.prototype.zoomToExtent = function(extent) {
          this.mapInstance.setExtent(extent);
        };
        MapNavigationComponent.prototype.ngOnInit = function() {
          if (this.settings.extent !== undefined) {
            this.initialExtent = new esri_mods_1.Extent({
              xmin: this.settings.extent.xmin,
              ymin: this.settings.extent.ymin,
              xmax: this.settings.extent.xmax,
              ymax: this.settings.extent.ymax,
              spatialReference: new esri_mods_1.SpatialReference({wkid: 31370})
            });
            this.zoomToExtent(this.initialExtent);
          }
        };
        __decorate([core_1.Input(), __metadata('design:type', esri_mods_1.map)], MapNavigationComponent.prototype, "mapInstance", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], MapNavigationComponent.prototype, "settings", void 0);
        MapNavigationComponent = __decorate([core_1.Component({
          selector: 'map-navigation',
          template: ''
        }), __metadata('design:paramtypes', [])], MapNavigationComponent);
        return MapNavigationComponent;
      }());
      exports_1("MapNavigationComponent", MapNavigationComponent);
    }
  };
});

System.register("digi-map/src/map.component", ["@angular/core", "esri-mods", "./identify/map.identify.component", "./draw/map.draw.component", "./edit/map.edit.component", "./menu/map.menu.component", "./navigation/map.navigation.component"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      esri_mods_1,
      map_identify_component_1,
      map_draw_component_1,
      map_edit_component_1,
      map_menu_component_1,
      map_navigation_component_1;
  var MapControl,
      MapComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(esri_mods_1_1) {
      esri_mods_1 = esri_mods_1_1;
    }, function(map_identify_component_1_1) {
      map_identify_component_1 = map_identify_component_1_1;
    }, function(map_draw_component_1_1) {
      map_draw_component_1 = map_draw_component_1_1;
    }, function(map_edit_component_1_1) {
      map_edit_component_1 = map_edit_component_1_1;
    }, function(map_menu_component_1_1) {
      map_menu_component_1 = map_menu_component_1_1;
    }, function(map_navigation_component_1_1) {
      map_navigation_component_1 = map_navigation_component_1_1;
    }],
    execute: function() {
      MapControl = (function() {
        function MapControl(name, control) {
          this.name = name;
          this.control = control;
        }
        return MapControl;
      }());
      exports_1("MapControl", MapControl);
      MapComponent = (function() {
        function MapComponent(elRef) {
          this.elRef = elRef;
          this.mapLoaded = new core_1.EventEmitter();
          this.themes = [];
          this.controls = [];
          this.useIdentifyControl = false;
          this.useDrawControl = false;
          this.useEditControl = false;
        }
        MapComponent.prototype.ngAfterViewInit = function() {
          this.controls.push(new MapControl('navigation', this.navigation));
          if (this.useIdentifyControl) {
            this.controls.push(new MapControl('identify', this.identify));
          }
          if (this.useDrawControl) {
            this.controls.push(new MapControl('draw', this.draw));
          }
          if (this.useEditControl) {
            this.controls.push(new MapControl('edit', this.edit));
          }
        };
        MapComponent.prototype.ngOnInit = function() {
          var _this = this;
          var self = this;
          this.currentMap = new esri_mods_1.map('map');
          if (this.settings.controls.indexOf('identify') !== -1) {
            this.useIdentifyControl = true;
          }
          if (this.settings.controls.indexOf('draw') !== -1) {
            this.useDrawControl = true;
          }
          if (this.settings.controls.indexOf('edit') !== -1) {
            this.useEditControl = true;
          }
          this.currentMap.on('layers-add-result', function(evt) {
            var allLayerInfos = [];
            evt.layers.forEach(function(layer, index) {
              var layerInfos = layer.layer.layerInfos;
              if (layerInfos && layerInfos.length > 0) {
                allLayerInfos.push({
                  layer: layer.layer,
                  title: layer.layer.name
                });
              }
              ;
            });
            var legendDijit = new esri_mods_1.Legend({
              map: self.currentMap,
              respectCurrentMapScale: true,
              layerInfos: allLayerInfos
            }, 'legend');
            legendDijit.startup();
          });
          if (this.settings.themes !== undefined) {
            this.settings.themes.forEach(function(theme) {
              switch (theme.type) {
                case 'dynamic':
                  _this.themes.push(new esri_mods_1.ArcGISDynamicMapServiceLayer(theme.url));
                  break;
                case 'tiled':
                  _this.themes.push(new esri_mods_1.ArcGISTiledMapServiceLayer(theme.url));
                  break;
              }
            });
            this.currentMap.addLayers(this.themes);
          }
          this.currentMap.on('load', function(ev) {
            console.log('map loaded');
          });
        };
        ;
        __decorate([core_1.Input(), __metadata('design:type', Object)], MapComponent.prototype, "settings", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], MapComponent.prototype, "mapLoaded", void 0);
        __decorate([core_1.ViewChild(map_navigation_component_1.MapNavigationComponent), __metadata('design:type', map_navigation_component_1.MapNavigationComponent)], MapComponent.prototype, "navigation", void 0);
        __decorate([core_1.ViewChild(map_identify_component_1.MapIdentifyComponent), __metadata('design:type', map_identify_component_1.MapIdentifyComponent)], MapComponent.prototype, "identify", void 0);
        __decorate([core_1.ViewChild(map_draw_component_1.MapDrawComponent), __metadata('design:type', map_draw_component_1.MapDrawComponent)], MapComponent.prototype, "draw", void 0);
        __decorate([core_1.ViewChild(map_edit_component_1.MapEditComponent), __metadata('design:type', map_edit_component_1.MapEditComponent)], MapComponent.prototype, "edit", void 0);
        MapComponent = __decorate([core_1.Component({
          selector: 'esri-map',
          template: " <div id=\"map\">\n                    <map-navigation [mapInstance]=\"currentMap\" [settings]=\"settings\"></map-navigation>\n                    <map-identify *ngIf=\"useIdentifyControl\" [mapInstance]=\"currentMap\" [settings]=\"settings\"></map-identify>\n                    <map-draw *ngIf=\"useDrawControl\" [mapInstance]=\"currentMap\"></map-draw>\n                    <map-edit *ngIf=\"useEditControl\" [mapInstance]=\"currentMap\"></map-edit> \n                    <ng-content></ng-content>\n                    <map-menu [settings]=\"settings\"\n                        (toInitialExtent)=\"navigation.toInitialExtent($event)\"\n                        (toggleIdentify)=\"identify.toggle($event)\">\n                    </map-menu>\n                </div>",
          directives: [map_identify_component_1.MapIdentifyComponent, map_draw_component_1.MapDrawComponent, map_edit_component_1.MapEditComponent, map_menu_component_1.MapMenuComponent, map_navigation_component_1.MapNavigationComponent]
        }), __metadata('design:paramtypes', [core_1.ElementRef])], MapComponent);
        return MapComponent;
      }());
      exports_1("MapComponent", MapComponent);
    }
  };
});

System.register("digi-map/src/componentbuilder/custom.component.builder", ["@angular/core"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1;
  var CustomComponentBuilder;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }],
    execute: function() {
      CustomComponentBuilder = (function() {
        function CustomComponentBuilder() {}
        CustomComponentBuilder.prototype.CreateComponent = function(tmpl, injectDirectives) {
          var CustomDynamicComponent = (function() {
            function CustomDynamicComponent() {}
            CustomDynamicComponent.prototype.toArray = function(obj) {
              var values = [];
              for (var propt in obj) {
                if (propt && !propt.startsWith('SHAPE') && !propt.startsWith('OBJECTID')) {
                  values.push({
                    key: propt,
                    value: obj[propt]
                  });
                }
              }
              return values;
            };
            CustomDynamicComponent.prototype.outputEntity = function() {
              if (this.entity) {
                return JSON.stringify(this.entity);
              } else {
                return 'entity undefined';
              }
            };
            CustomDynamicComponent = __decorate([core_1.Component({
              selector: 'dynamic-component',
              template: tmpl,
              directives: injectDirectives
            }), __metadata('design:paramtypes', [])], CustomDynamicComponent);
            return CustomDynamicComponent;
          }());
          ;
          return CustomDynamicComponent;
        };
        return CustomComponentBuilder;
      }());
      exports_1("CustomComponentBuilder", CustomComponentBuilder);
    }
  };
});

System.register("digi-map/src/componentbuilder/dynamic.component.holder", ["@angular/core", "@angular/common", "./custom.component.builder"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      core_2,
      common_1,
      custom_component_builder_1;
  var DynamicHolder;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
      core_2 = core_1_1;
    }, function(common_1_1) {
      common_1 = common_1_1;
    }, function(custom_component_builder_1_1) {
      custom_component_builder_1 = custom_component_builder_1_1;
    }],
    execute: function() {
      DynamicHolder = (function() {
        function DynamicHolder(componentResolver, customComponentBuilder) {
          this.componentResolver = componentResolver;
          this.customComponentBuilder = customComponentBuilder;
        }
        DynamicHolder.prototype.ngOnChanges = function() {
          if (this.component) {
            this.component.title = this.title;
            this.component.entity = this.entity;
          }
        };
        DynamicHolder.prototype.ngOnInit = function() {
          var _this = this;
          var dynamicComponent = this.customComponentBuilder.CreateComponent(this.template, common_1.FORM_DIRECTIVES);
          this.componentResolver.resolveComponent(dynamicComponent).then(function(factory) {
            var comp = _this.dynamicComponentTarget.createComponent(factory, 0);
            _this.component = comp.instance;
            _this.component.title = _this.title;
            _this.component.entity = _this.entity;
          });
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], DynamicHolder.prototype, "entity", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], DynamicHolder.prototype, "title", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], DynamicHolder.prototype, "template", void 0);
        __decorate([core_2.ViewChild('dynamicContentPlaceHolder', {read: core_2.ViewContainerRef}), __metadata('design:type', core_2.ViewContainerRef)], DynamicHolder.prototype, "dynamicComponentTarget", void 0);
        DynamicHolder = __decorate([core_1.Component({
          selector: 'dynamic-holder',
          template: "\n<div>  \n  <div #dynamicContentPlaceHolder></div>  \n</div>\n",
          providers: [custom_component_builder_1.CustomComponentBuilder]
        }), __metadata('design:paramtypes', [core_2.ComponentResolver, custom_component_builder_1.CustomComponentBuilder])], DynamicHolder);
        return DynamicHolder;
      }());
      exports_1("DynamicHolder", DynamicHolder);
    }
  };
});

System.register("digi-map/src/identify/map.identify.results.component", ["@angular/core", "../componentbuilder/dynamic.component.holder"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      dynamic_component_holder_1;
  var IdentifyResultsComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(dynamic_component_holder_1_1) {
      dynamic_component_holder_1 = dynamic_component_holder_1_1;
    }],
    execute: function() {
      IdentifyResultsComponent = (function() {
        function IdentifyResultsComponent() {
          this.changeTemplate = new core_1.EventEmitter();
          this.dropDownResults = [];
        }
        IdentifyResultsComponent.prototype.calculateDropDownResults = function() {
          var _this = this;
          if (!this.results) {
            return undefined;
          }
          var values = [];
          this.results.forEach(function(element) {
            element.layerResults.forEach(function(layer) {
              layer.data.forEach(function(d) {
                values.push({
                  layerName: d.layerName,
                  value: d.value,
                  data: d,
                  template: _this.findTemplate(layer.templateId)
                });
              });
            });
          });
          return values;
        };
        IdentifyResultsComponent.prototype.findTemplate = function(templateId) {
          return this.settings.identify.templates.find(function(x) {
            return x.id === templateId;
          }).html;
        };
        IdentifyResultsComponent.prototype.ngOnInit = function() {
          var _this = this;
          var defaultDigimapTemplate = "        \n                <ul *ngIf=\"entity\">                \n                    <li *ngFor=\"let attribute of toArray(entity.feature.attributes)\">\n                        {{attribute?.key}} : {{attribute?.value}}\n                    </li>\n                </ul>";
          this.settings.identify.templates.push({
            id: 'DefaultDigiMapTemplate',
            html: defaultDigimapTemplate
          });
          this.changeTemplate.subscribe(function(t) {
            return _this.currentTemplate = t;
          });
        };
        IdentifyResultsComponent.prototype.ngOnChanges = function() {
          this.dropDownResults = this.calculateDropDownResults();
          if (this.dropDownResults && this.dropDownResults.length > 0) {
            this.currentResult = this.dropDownResults[0].data;
            this.currentTemplate = undefined;
            this.changeTemplate.emit(this.dropDownResults[0].template);
          } else {
            this.currentResult = undefined;
            this.currentTemplate = undefined;
          }
        };
        IdentifyResultsComponent.prototype.resultName = function(result) {
          return result.layerName + ': ' + result.value;
        };
        IdentifyResultsComponent.prototype.selectResult = function(index) {
          this.currentResult = this.dropDownResults[index].data;
          this.currentTemplate = undefined;
          this.changeTemplate.emit(this.dropDownResults[index].template);
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], IdentifyResultsComponent.prototype, "settings", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Array)], IdentifyResultsComponent.prototype, "results", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], IdentifyResultsComponent.prototype, "changeTemplate", void 0);
        IdentifyResultsComponent = __decorate([core_1.Component({
          selector: 'digi-identify-results',
          template: " <div style=\"display:none\">\n                    <div id=\"popup-content\">                     \n                        <div *ngIf=\"dropDownResults && dropDownResults.length > 0\">\n                            <select (change)=\"selectResult($event.target.value)\">\n                                <option *ngFor=\"let result of dropDownResults; let i=index\" [value]=\"i\">{{resultName(result)}}</option>                           \n                            </select>  \n\n                            <dynamic-holder [entity]=\"currentResult\" [title]=\"'Details'\" [template]=\"currentTemplate\" *ngIf=\"currentResult && currentTemplate\"></dynamic-holder>                           \n                        </div>                      \n                       \n                        <div *ngIf=\"!dropDownResults || dropDownResults.length==0\">Geen resultaten gevonden</div>  \n\n                    </div>\n                </div>",
          directives: [dynamic_component_holder_1.DynamicHolder]
        }), __metadata('design:paramtypes', [])], IdentifyResultsComponent);
        return IdentifyResultsComponent;
      }());
      exports_1("IdentifyResultsComponent", IdentifyResultsComponent);
    }
  };
});

System.register("digi-map/src/identify/map.identify.component", ["@angular/core", "esri-mods", "../componentbuilder/dynamic.component.holder", "./map.identify.results.component"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      esri_mods_1,
      dynamic_component_holder_1,
      map_identify_results_component_1;
  var MapIdentifyComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(esri_mods_1_1) {
      esri_mods_1 = esri_mods_1_1;
    }, function(dynamic_component_holder_1_1) {
      dynamic_component_holder_1 = dynamic_component_holder_1_1;
    }, function(map_identify_results_component_1_1) {
      map_identify_results_component_1 = map_identify_results_component_1_1;
    }],
    execute: function() {
      MapIdentifyComponent = (function() {
        function MapIdentifyComponent() {
          this.onIdentify = new core_1.EventEmitter();
          this.isActive = false;
        }
        MapIdentifyComponent.prototype.ngOnInit = function() {
          var _this = this;
          this.onIdentify.subscribe(function(res) {
            var newResults = [];
            var themesettings = _this.settings;
            if (_this.results) {
              _this.results.forEach(function(element) {
                newResults.push(element);
              });
            }
            newResults.push(res);
            newResults.forEach(function(element) {
              var currentTheme = themesettings.themes.find(function(t) {
                return t.url === element.url;
              });
              element.layerResults.forEach(function(layer) {
                var templateMapping = currentTheme.identifyTemplateMappings.find(function(m) {
                  return m.layerId === layer.layerId;
                });
                layer.templateId = templateMapping ? templateMapping.templateId : 'DefaultDigiMapTemplate';
              });
            });
            _this.results = newResults;
          });
          if (!this.settings || !this.settings.identify) {
            this.isActive = false;
          }
          this.infoWindow = new esri_mods_1.InfoWindowLite(null, 'popup');
          this.infoWindow.startup();
          this.mapInstance.infoWindow = this.infoWindow;
          this.infoWindow.resize(this.settings.identify.width || 310, this.settings.identify.height || 350);
          this.infoWindow.setTitle(this.settings.identify.title || 'Details 2');
          this.infoWindow.setContent(document.getElementById('popup-content'));
          this.mapInstance.on('click', function(ev) {
            if (_this.isActive) {
              var self_1 = _this;
              _this.results = undefined;
              _this.settings.themes.filter(function(f) {
                return f.identifyable;
              }).forEach(function(theme) {
                var identifyResult = {
                  url: theme.url,
                  layerResults: []
                };
                var identifyTask = new esri_mods_1.IdentifyTask(theme.url);
                var identifyParams = new esri_mods_1.IdentifyParameters();
                identifyParams.tolerance = 3;
                identifyParams.returnGeometry = true;
                identifyParams.layerOption = esri_mods_1.IdentifyParameters.LAYER_OPTION_VISIBLE;
                identifyParams.geometry = ev.mapPoint;
                identifyParams.mapExtent = self_1.mapInstance.extent;
                var callbackProxy = function(response) {
                  callbackFunc(response, identifyResult);
                  self_1.onIdentify.emit(identifyResult);
                };
                identifyTask.execute(identifyParams).addCallback(callbackProxy);
              });
              _this.infoWindow.show(ev.mapPoint);
            }
          });
          function callbackFunc(response, identifyResult) {
            response.forEach(function(element) {
              var layerResult = identifyResult.layerResults.find(function(x) {
                return x.layerId === element.layerId;
              });
              if (!layerResult) {
                layerResult = {
                  layerId: element.layerId,
                  data: []
                };
                identifyResult.layerResults.push(layerResult);
              }
              layerResult.data.push(element);
            });
          }
        };
        MapIdentifyComponent.prototype.toggle = function() {
          this.isActive = !this.isActive;
          this.infoWindow.hide();
        };
        __decorate([core_1.Input(), __metadata('design:type', esri_mods_1.map)], MapIdentifyComponent.prototype, "mapInstance", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], MapIdentifyComponent.prototype, "settings", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], MapIdentifyComponent.prototype, "onIdentify", void 0);
        MapIdentifyComponent = __decorate([core_1.Component({
          selector: 'map-identify',
          template: "\t<div class='map-identify'>\t\t\t\t\t\n\t\t\t  \t</div>\n\t\t\t  \t<div id='popup'></div>\n\t\t\t\t<digi-identify-results [results]='results' [settings]=\"settings\"></digi-identify-results>",
          directives: [dynamic_component_holder_1.DynamicHolder, map_identify_results_component_1.IdentifyResultsComponent]
        }), __metadata('design:paramtypes', [])], MapIdentifyComponent);
        return MapIdentifyComponent;
      }());
      exports_1("MapIdentifyComponent", MapIdentifyComponent);
    }
  };
});

System.register("digi-map/src/draw/map.draw.component", ["@angular/core", "esri-mods", "rxjs/Rx"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      esri_mods_1,
      Rx_1;
  var GeometryType,
      MapDrawComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(esri_mods_1_1) {
      esri_mods_1 = esri_mods_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }],
    execute: function() {
      (function(GeometryType) {
        GeometryType[GeometryType["Point"] = 1] = "Point";
        GeometryType[GeometryType["Multiline"] = 2] = "Multiline";
      })(GeometryType || (GeometryType = {}));
      exports_1("GeometryType", GeometryType);
      MapDrawComponent = (function() {
        function MapDrawComponent() {
          this.activateSubject = new Rx_1.Subject();
          this.deactivateSubject = new Rx_1.Subject();
          this.drawCompleteSubject = new Rx_1.Subject();
          this.onActivate = this.activateSubject.asObservable();
          this.onDeactivate = this.deactivateSubject.asObservable();
          this.onDrawComplete = this.drawCompleteSubject.asObservable();
        }
        MapDrawComponent.prototype.ngOnInit = function() {
          var _this = this;
          this.drawToolbar = new esri_mods_1.draw(this.mapInstance);
          this.drawToolbar.on('draw-complete', function(ev) {
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
        MapDrawComponent.prototype.activate = function(geometryType) {
          switch (geometryType) {
            case GeometryType.Multiline:
              this.drawToolbar.activate(esri_mods_1.draw.POLYLINE);
              break;
            default:
              break;
          }
          this.activateSubject.next(null);
        };
        MapDrawComponent.prototype.deactivate = function() {
          this.drawToolbar.deactivate();
          this.deactivateSubject.next(null);
        };
        MapDrawComponent.prototype.finishDrawing = function() {
          this.drawToolbar.finishDrawing();
        };
        __decorate([core_1.Input(), __metadata('design:type', esri_mods_1.map)], MapDrawComponent.prototype, "mapInstance", void 0);
        MapDrawComponent = __decorate([core_1.Component({
          selector: 'map-draw',
          template: '<div></div>'
        }), __metadata('design:paramtypes', [])], MapDrawComponent);
        return MapDrawComponent;
      }());
      exports_1("MapDrawComponent", MapDrawComponent);
    }
  };
});

System.register("digi-map/src/edit/map.edit.component", ["@angular/core", "esri-mods", "rxjs/Rx"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      esri_mods_1,
      Rx_1;
  var MapEditComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(esri_mods_1_1) {
      esri_mods_1 = esri_mods_1_1;
    }, function(Rx_1_1) {
      Rx_1 = Rx_1_1;
    }],
    execute: function() {
      MapEditComponent = (function() {
        function MapEditComponent() {
          this.activateSubject = new Rx_1.Subject();
          this.deactivateSubject = new Rx_1.Subject();
          this.onActivate = this.activateSubject.asObservable();
          this.onDeactivate = this.deactivateSubject.asObservable();
        }
        MapEditComponent.prototype.ngOnInit = function() {
          this.editToolbar = new esri_mods_1.edit(this.mapInstance);
        };
        MapEditComponent.prototype.activate = function() {
          var graphicToEdit = this.mapInstance.graphics.graphics[0];
          this.editToolbar.activate(esri_mods_1.edit.EDIT_VERTICES, graphicToEdit);
          this.activateSubject.next(null);
        };
        MapEditComponent.prototype.deactivate = function() {
          this.editToolbar.deactivate();
          this.deactivateSubject.next(null);
        };
        __decorate([core_1.Input(), __metadata('design:type', esri_mods_1.map)], MapEditComponent.prototype, "mapInstance", void 0);
        MapEditComponent = __decorate([core_1.Component({
          selector: 'map-edit',
          template: '<div></div>'
        }), __metadata('design:paramtypes', [])], MapEditComponent);
        return MapEditComponent;
      }());
      exports_1("MapEditComponent", MapEditComponent);
    }
  };
});

System.registerDynamic("empty", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {})();
  return _retrieveGlobal();
});

System.register("digi-map/digi-map", ["./src/map.component", "./src/identify/map.identify.component", "./src/draw/map.draw.component", "./src/edit/map.edit.component", "esri-mods"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function exportStar_1(m) {
    var exports = {};
    for (var n in m) {
      if (n !== "default")
        exports[n] = m[n];
    }
    exports_1(exports);
  }
  return {
    setters: [function(map_component_1_1) {
      exportStar_1(map_component_1_1);
    }, function(map_identify_component_1_1) {
      exportStar_1(map_identify_component_1_1);
    }, function(map_draw_component_1_1) {
      exportStar_1(map_draw_component_1_1);
    }, function(map_edit_component_1_1) {
      exportStar_1(map_edit_component_1_1);
    }, function(esri_mods_1_1) {
      exportStar_1(esri_mods_1_1);
    }],
    execute: function() {}
  };
});
