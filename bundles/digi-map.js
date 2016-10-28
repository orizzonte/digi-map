"bundle";
System.register("src/filter/map.filter.component.js", ["@angular/core", "esri-mods"], function(exports_1, context_1) {
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
  var MapFilterComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(esri_mods_1_1) {
      esri_mods_1 = esri_mods_1_1;
    }],
    execute: function() {
      MapFilterComponent = (function() {
        function MapFilterComponent() {}
        MapFilterComponent.prototype.ngOnInit = function() {
          this.settings = this.settings || {themes: []};
        };
        MapFilterComponent.prototype.setFilter = function(filter) {
          if (!this.dynamicLayers) {
            return;
          }
          var dynaLayer = this.dynamicLayers.find(function(x) {
            return x.url === filter.themeUrl;
          });
          if (dynaLayer) {
            var layer = dynaLayer.layerInfos.find(function(x) {
              return x.name.toUpperCase() === filter.layerName.toUpperCase();
            });
            if (layer) {
              var layerDefinitions = [];
              layerDefinitions[layer.id] = filter.query;
              dynaLayer.setLayerDefinitions(layerDefinitions, false);
            }
          }
        };
        __decorate([core_1.Input(), __metadata('design:type', esri_mods_1.map)], MapFilterComponent.prototype, "mapInstance", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], MapFilterComponent.prototype, "settings", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Array)], MapFilterComponent.prototype, "dynamicLayers", void 0);
        MapFilterComponent = __decorate([core_1.Component({
          selector: 'map-filter',
          template: ''
        }), __metadata('design:paramtypes', [])], MapFilterComponent);
        return MapFilterComponent;
      }());
      exports_1("MapFilterComponent", MapFilterComponent);
    }
  };
});

System.register("src/navigation/map.navigation.component.js", ["@angular/core", "esri-mods"], function(exports_1, context_1) {
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
          this.mapInstance.setExtent(extent, true);
        };
        MapNavigationComponent.prototype.zoomToGeometry = function(geometry) {
          geometry.setSpatialReference(new esri_mods_1.SpatialReference({wkid: 31370}));
          this.zoomToExtent(geometry.getExtent());
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

System.register("src/map.component.js", ["@angular/core", "esri-mods", "./identify/map.identify.component", "./draw/map.draw.component", "./edit/map.edit.component", "./filter/map.filter.component", "./navigation/map.navigation.component"], function(exports_1, context_1) {
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
      map_filter_component_1,
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
    }, function(map_filter_component_1_1) {
      map_filter_component_1 = map_filter_component_1_1;
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
          this.divId = 'map';
          this.mapLoaded = new core_1.EventEmitter();
          this.themes = [];
          this.controls = [];
          this.dynamicLayers = [];
          this.isLoading = false;
          this.useIdentifyControl = false;
          this.useDrawControl = false;
          this.useEditControl = false;
          this.domElement = elRef.nativeElement;
        }
        MapComponent.prototype.ngAfterViewInit = function() {
          this.controls.push(new MapControl('navigation', this.navigation));
          this.controls.push(new MapControl('filter', this.filter));
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
          this.currentMap = new esri_mods_1.map(this.divId === 'map' ? 'map' : this.domElement);
          this.layerListDomElement = $(this.domElement).find('.layerlist')[0];
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
            var layerListOptions = {
              map: self.currentMap,
              layers: esri_mods_1.utils.getLayerList(this.currentMap),
              removeUnderscores: true,
              showLegend: true
            };
            var layerList = new esri_mods_1.LayerList(layerListOptions, self.layerListDomElement);
            layerList.startup();
          });
          if (this.settings.themes !== undefined) {
            this.settings.themes.forEach(function(theme) {
              var options = {
                visible: !(theme.hideOnStartup || false),
                maxImageHeight: 265,
                maxImageWidth: 265
              };
              switch (theme.type) {
                case 'dynamic':
                  var dynamicLayer = new esri_mods_1.ArcGISDynamicMapServiceLayer(theme.url, options);
                  dynamicLayer.id = theme.title;
                  _this.themes.push(dynamicLayer);
                  _this.dynamicLayers.push(dynamicLayer);
                  break;
                case 'tiled':
                  var tiledLayer = new esri_mods_1.ArcGISTiledMapServiceLayer(theme.url, options);
                  tiledLayer.id = theme.title;
                  _this.themes.push(tiledLayer);
                  break;
                case 'wmts':
                  if (_this.settings.proxy) {
                    esri_mods_1.config.defaults.io.proxyUrl = _this.settings.proxy;
                  }
                  var layerInfo = new esri_mods_1.WMTSLayerInfo({
                    identifier: theme.identifier,
                    format: 'png'
                  });
                  var wmtsOptions = {
                    serviceMode: 'KVP',
                    layerInfo: layerInfo,
                    visible: options.visible
                  };
                  var wmtsLayer = new esri_mods_1.WMTSLayer(theme.url, wmtsOptions);
                  wmtsLayer.id = theme.title;
                  _this.themes.push(wmtsLayer);
                  break;
              }
            });
            this.currentMap.addLayers(this.themes);
          }
          this.currentMap.on('update-start', function(ev) {
            self.isLoading = true;
          });
          this.currentMap.on('update-end', function(ev) {
            self.isLoading = false;
          });
          this.currentMap.on('load', function(ev) {
            console.log('map loaded');
          });
        };
        ;
        __decorate([core_1.Input(), __metadata('design:type', Object)], MapComponent.prototype, "settings", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], MapComponent.prototype, "divId", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], MapComponent.prototype, "mapLoaded", void 0);
        __decorate([core_1.ViewChild(map_navigation_component_1.MapNavigationComponent), __metadata('design:type', map_navigation_component_1.MapNavigationComponent)], MapComponent.prototype, "navigation", void 0);
        __decorate([core_1.ViewChild(map_identify_component_1.MapIdentifyComponent), __metadata('design:type', map_identify_component_1.MapIdentifyComponent)], MapComponent.prototype, "identify", void 0);
        __decorate([core_1.ViewChild(map_draw_component_1.MapDrawComponent), __metadata('design:type', map_draw_component_1.MapDrawComponent)], MapComponent.prototype, "draw", void 0);
        __decorate([core_1.ViewChild(map_edit_component_1.MapEditComponent), __metadata('design:type', map_edit_component_1.MapEditComponent)], MapComponent.prototype, "edit", void 0);
        __decorate([core_1.ViewChild(map_filter_component_1.MapFilterComponent), __metadata('design:type', map_filter_component_1.MapFilterComponent)], MapComponent.prototype, "filter", void 0);
        MapComponent = __decorate([core_1.Component({
          selector: 'esri-map',
          template: " <div id='map' [id]=\"divId\">\n                    <div class=\"map-loading\" *ngIf=\"isLoading\" style=\"position: absolute; z-index: 99999999999;\">Bezig met laden...</div>\n                    <map-navigation [mapInstance]=\"currentMap\" [settings]=\"settings\"></map-navigation>\n                    <map-filter [mapInstance]=\"currentMap\" [settings]=\"settings\" [dynamicLayers]=\"dynamicLayers\"></map-filter>\n                    <map-identify *ngIf=\"useIdentifyControl\" [mapInstance]=\"currentMap\" [settings]=\"settings\"></map-identify>\n                    <map-draw *ngIf=\"useDrawControl\" [mapInstance]=\"currentMap\"></map-draw>\n                    <map-edit *ngIf=\"useEditControl\" [mapInstance]=\"currentMap\"></map-edit> \n                    <ng-content></ng-content>\n                    <map-menu [settings]=\"settings\"\n                        (toInitialExtent)=\"navigation.toInitialExtent($event)\"\n                        (toggleIdentify)=\"identify.toggle($event)\">\n                    </map-menu>\n                </div>"
        }), __metadata('design:paramtypes', [core_1.ElementRef])], MapComponent);
        return MapComponent;
      }());
      exports_1("MapComponent", MapComponent);
    }
  };
});

System.register("src/identify/map.identify.component.js", ["@angular/core", "esri-mods"], function(exports_1, context_1) {
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
  var MapIdentifyComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(esri_mods_1_1) {
      esri_mods_1 = esri_mods_1_1;
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
          this.infoWindow.setTitle(this.settings.identify.title || 'Details');
          this.infoWindow.setContent(document.getElementById('popup-content'));
          this.mapInstance.on('click', function(ev) {
            if (_this.isActive) {
              var self_1 = _this;
              _this.results = undefined;
              _this.settings.themes.filter(function(f) {
                return f.identifyable || false;
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
          template: "\t<div class='map-identify'>\t\t\t\t\t\n\t\t\t  \t</div>\n\t\t\t  \t<div id='popup'></div>\n\t\t\t\t<digi-identify-results [results]='results' [settings]=\"settings\"></digi-identify-results>"
        }), __metadata('design:paramtypes', [])], MapIdentifyComponent);
        return MapIdentifyComponent;
      }());
      exports_1("MapIdentifyComponent", MapIdentifyComponent);
    }
  };
});

System.register("src/draw/map.draw.component.js", ["@angular/core", "esri-mods", "rxjs/Rx"], function(exports_1, context_1) {
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
                var line = new esri_mods_1.SimpleLineSymbol();
                line.setColor(new esri_mods_1.Color('#ff2800'));
                line.setWidth(2);
                symbol = line;
                break;
              default:
                var fill = new esri_mods_1.SimpleFillSymbol();
                fill.setColor(new esri_mods_1.Color('#ff2800'));
                symbol = fill;
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

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Subject'), require('rxjs/Observable')) : typeof define === 'function' && define.amd ? define("node_modules/@angular/core/bundles/core.umd.js", ["exports", "rxjs/Subject", "rxjs/Observable"], factory) : (factory((global.ng = global.ng || {}, global.ng.core = global.ng.core || {}), global.Rx, global.Rx));
}(this, function(exports, rxjs_Subject, rxjs_Observable) {
  'use strict';
  var globalScope;
  if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
      globalScope = self;
    } else {
      globalScope = global;
    }
  } else {
    globalScope = window;
  }
  function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
  }
  var global$1 = globalScope;
  function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
  }
  global$1.assert = function assert(condition) {};
  function isPresent(obj) {
    return obj !== undefined && obj !== null;
  }
  function isBlank(obj) {
    return obj === undefined || obj === null;
  }
  function isString(obj) {
    return typeof obj === 'string';
  }
  function isFunction(obj) {
    return typeof obj === 'function';
  }
  function isArray(obj) {
    return Array.isArray(obj);
  }
  function stringify(token) {
    if (typeof token === 'string') {
      return token;
    }
    if (token === undefined || token === null) {
      return '' + token;
    }
    if (token.overriddenName) {
      return token.overriddenName;
    }
    if (token.name) {
      return token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
  }
  var NumberWrapper = (function() {
    function NumberWrapper() {}
    NumberWrapper.toFixed = function(n, fractionDigits) {
      return n.toFixed(fractionDigits);
    };
    NumberWrapper.equal = function(a, b) {
      return a === b;
    };
    NumberWrapper.parseIntAutoRadix = function(text) {
      var result = parseInt(text);
      if (isNaN(result)) {
        throw new Error('Invalid integer literal when parsing ' + text);
      }
      return result;
    };
    NumberWrapper.parseInt = function(text, radix) {
      if (radix == 10) {
        if (/^(\-|\+)?[0-9]+$/.test(text)) {
          return parseInt(text, radix);
        }
      } else if (radix == 16) {
        if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
          return parseInt(text, radix);
        }
      } else {
        var result = parseInt(text, radix);
        if (!isNaN(result)) {
          return result;
        }
      }
      throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
    };
    Object.defineProperty(NumberWrapper, "NaN", {
      get: function() {
        return NaN;
      },
      enumerable: true,
      configurable: true
    });
    NumberWrapper.isNumeric = function(value) {
      return !isNaN(value - parseFloat(value));
    };
    NumberWrapper.isNaN = function(value) {
      return isNaN(value);
    };
    NumberWrapper.isInteger = function(value) {
      return Number.isInteger(value);
    };
    return NumberWrapper;
  }());
  function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
  }
  function getMapKey(value) {
    return value;
  }
  function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
  }
  function print(obj) {
    console.log(obj);
  }
  function warn(obj) {
    console.warn(obj);
  }
  var _symbolIterator = null;
  function getSymbolIterator() {
    if (isBlank(_symbolIterator)) {
      if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
        _symbolIterator = Symbol.iterator;
      } else {
        var keys = Object.getOwnPropertyNames(Map.prototype);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (key !== 'entries' && key !== 'size' && Map.prototype[key] === Map.prototype['entries']) {
            _symbolIterator = key;
          }
        }
      }
    }
    return _symbolIterator;
  }
  function isPrimitive(obj) {
    return !isJsObject(obj);
  }
  var _nextClassId = 0;
  var Reflect = global$1.Reflect;
  function extractAnnotation(annotation) {
    if (typeof annotation === 'function' && annotation.hasOwnProperty('annotation')) {
      annotation = annotation.annotation;
    }
    return annotation;
  }
  function applyParams(fnOrArray, key) {
    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function || fnOrArray === Number || fnOrArray === Array) {
      throw new Error("Can not use native " + stringify(fnOrArray) + " as constructor");
    }
    if (typeof fnOrArray === 'function') {
      return fnOrArray;
    }
    if (Array.isArray(fnOrArray)) {
      var annotations = fnOrArray;
      var annoLength = annotations.length - 1;
      var fn = fnOrArray[annoLength];
      if (typeof fn !== 'function') {
        throw new Error("Last position of Class method array must be Function in key " + key + " was '" + stringify(fn) + "'");
      }
      if (annoLength != fn.length) {
        throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + stringify(fn));
      }
      var paramsAnnotations = [];
      for (var i = 0,
          ii = annotations.length - 1; i < ii; i++) {
        var paramAnnotations = [];
        paramsAnnotations.push(paramAnnotations);
        var annotation = annotations[i];
        if (Array.isArray(annotation)) {
          for (var j = 0; j < annotation.length; j++) {
            paramAnnotations.push(extractAnnotation(annotation[j]));
          }
        } else if (typeof annotation === 'function') {
          paramAnnotations.push(extractAnnotation(annotation));
        } else {
          paramAnnotations.push(annotation);
        }
      }
      Reflect.defineMetadata('parameters', paramsAnnotations, fn);
      return fn;
    }
    throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + stringify(fnOrArray) + "'");
  }
  function Class(clsDef) {
    var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
    var proto = constructor.prototype;
    if (clsDef.hasOwnProperty('extends')) {
      if (typeof clsDef.extends === 'function') {
        constructor.prototype = proto = Object.create(clsDef.extends.prototype);
      } else {
        throw new Error("Class definition 'extends' property must be a constructor function was: " + stringify(clsDef.extends));
      }
    }
    for (var key in clsDef) {
      if (key !== 'extends' && key !== 'prototype' && clsDef.hasOwnProperty(key)) {
        proto[key] = applyParams(clsDef[key], key);
      }
    }
    if (this && this.annotations instanceof Array) {
      Reflect.defineMetadata('annotations', this.annotations, constructor);
    }
    var constructorName = constructor['name'];
    if (!constructorName || constructorName === 'constructor') {
      constructor['overriddenName'] = "class" + _nextClassId++;
    }
    return constructor;
  }
  function makeDecorator(name, props, parentClass, chainFn) {
    if (chainFn === void 0) {
      chainFn = null;
    }
    var metaCtor = makeMetadataCtor([props]);
    function DecoratorFactory(objOrType) {
      if (!(Reflect && Reflect.getMetadata)) {
        throw 'reflect-metadata shim is required when using class decorators';
      }
      if (this instanceof DecoratorFactory) {
        metaCtor.call(this, objOrType);
        return this;
      }
      var annotationInstance = new DecoratorFactory(objOrType);
      var chainAnnotation = typeof this === 'function' && Array.isArray(this.annotations) ? this.annotations : [];
      chainAnnotation.push(annotationInstance);
      var TypeDecorator = function TypeDecorator(cls) {
        var annotations = Reflect.getOwnMetadata('annotations', cls) || [];
        annotations.push(annotationInstance);
        Reflect.defineMetadata('annotations', annotations, cls);
        return cls;
      };
      TypeDecorator.annotations = chainAnnotation;
      TypeDecorator.Class = Class;
      if (chainFn)
        chainFn(TypeDecorator);
      return TypeDecorator;
    }
    if (parentClass) {
      DecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    DecoratorFactory.prototype.toString = function() {
      return ("@" + name);
    };
    DecoratorFactory.annotationCls = DecoratorFactory;
    return DecoratorFactory;
  }
  function makeMetadataCtor(props) {
    function ctor() {
      var _this = this;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }
      props.forEach(function(prop, i) {
        var argVal = args[i];
        if (Array.isArray(prop)) {
          _this[prop[0]] = !argVal || argVal === undefined ? prop[1] : argVal;
        } else {
          for (var propName in prop) {
            _this[propName] = !argVal || argVal[propName] === undefined ? prop[propName] : argVal[propName];
          }
        }
      });
    }
    return ctor;
  }
  function makeParamDecorator(name, props, parentClass) {
    var metaCtor = makeMetadataCtor(props);
    function ParamDecoratorFactory() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }
      if (this instanceof ParamDecoratorFactory) {
        metaCtor.apply(this, args);
        return this;
      }
      var annotationInstance = new ((_a = ParamDecoratorFactory).bind.apply(_a, [void 0].concat(args)))();
      ParamDecorator.annotation = annotationInstance;
      return ParamDecorator;
      function ParamDecorator(cls, unusedKey, index) {
        var parameters = Reflect.getMetadata('parameters', cls) || [];
        while (parameters.length <= index) {
          parameters.push(null);
        }
        parameters[index] = parameters[index] || [];
        parameters[index].push(annotationInstance);
        Reflect.defineMetadata('parameters', parameters, cls);
        return cls;
      }
      var _a;
    }
    if (parentClass) {
      ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    ParamDecoratorFactory.prototype.toString = function() {
      return ("@" + name);
    };
    ParamDecoratorFactory.annotationCls = ParamDecoratorFactory;
    return ParamDecoratorFactory;
  }
  function makePropDecorator(name, props, parentClass) {
    var metaCtor = makeMetadataCtor(props);
    function PropDecoratorFactory() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
      }
      if (this instanceof PropDecoratorFactory) {
        metaCtor.apply(this, args);
        return this;
      }
      var decoratorInstance = new ((_a = PropDecoratorFactory).bind.apply(_a, [void 0].concat(args)))();
      return function PropDecorator(target, name) {
        var meta = Reflect.getOwnMetadata('propMetadata', target.constructor) || {};
        meta[name] = meta[name] || [];
        meta[name].unshift(decoratorInstance);
        Reflect.defineMetadata('propMetadata', meta, target.constructor);
      };
      var _a;
    }
    if (parentClass) {
      PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    PropDecoratorFactory.prototype.toString = function() {
      return ("@" + name);
    };
    PropDecoratorFactory.annotationCls = PropDecoratorFactory;
    return PropDecoratorFactory;
  }
  var Inject = makeParamDecorator('Inject', [['token', undefined]]);
  var Optional = makeParamDecorator('Optional', []);
  var Injectable = makeParamDecorator('Injectable', []);
  var Self = makeParamDecorator('Self', []);
  var SkipSelf = makeParamDecorator('SkipSelf', []);
  var Host = makeParamDecorator('Host', []);
  var OpaqueToken = (function() {
    function OpaqueToken(_desc) {
      this._desc = _desc;
    }
    OpaqueToken.prototype.toString = function() {
      return "Token " + this._desc;
    };
    OpaqueToken.decorators = [{type: Injectable}];
    OpaqueToken.ctorParameters = [null];
    return OpaqueToken;
  }());
  var ANALYZE_FOR_ENTRY_COMPONENTS = new OpaqueToken('AnalyzeForEntryComponents');
  var Attribute = makeParamDecorator('Attribute', [['attributeName', undefined]]);
  var Query = (function() {
    function Query() {}
    return Query;
  }());
  var ContentChildren = makePropDecorator('ContentChildren', [['selector', undefined], {
    first: false,
    isViewQuery: false,
    descendants: false,
    read: undefined
  }], Query);
  var ContentChild = makePropDecorator('ContentChild', [['selector', undefined], {
    first: true,
    isViewQuery: false,
    descendants: true,
    read: undefined
  }], Query);
  var ViewChildren = makePropDecorator('ViewChildren', [['selector', undefined], {
    first: false,
    isViewQuery: true,
    descendants: true,
    read: undefined
  }], Query);
  var ViewChild = makePropDecorator('ViewChild', [['selector', undefined], {
    first: true,
    isViewQuery: true,
    descendants: true,
    read: undefined
  }], Query);
  exports.ChangeDetectionStrategy;
  (function(ChangeDetectionStrategy) {
    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 0] = "OnPush";
    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 1] = "Default";
  })(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
  var ChangeDetectorStatus;
  (function(ChangeDetectorStatus) {
    ChangeDetectorStatus[ChangeDetectorStatus["CheckOnce"] = 0] = "CheckOnce";
    ChangeDetectorStatus[ChangeDetectorStatus["Checked"] = 1] = "Checked";
    ChangeDetectorStatus[ChangeDetectorStatus["CheckAlways"] = 2] = "CheckAlways";
    ChangeDetectorStatus[ChangeDetectorStatus["Detached"] = 3] = "Detached";
    ChangeDetectorStatus[ChangeDetectorStatus["Errored"] = 4] = "Errored";
    ChangeDetectorStatus[ChangeDetectorStatus["Destroyed"] = 5] = "Destroyed";
  })(ChangeDetectorStatus || (ChangeDetectorStatus = {}));
  function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
    return isBlank(changeDetectionStrategy) || changeDetectionStrategy === exports.ChangeDetectionStrategy.Default;
  }
  var Directive = makeDecorator('Directive', {
    selector: undefined,
    inputs: undefined,
    outputs: undefined,
    host: undefined,
    providers: undefined,
    exportAs: undefined,
    queries: undefined
  });
  var Component = makeDecorator('Component', {
    selector: undefined,
    inputs: undefined,
    outputs: undefined,
    host: undefined,
    exportAs: undefined,
    moduleId: undefined,
    providers: undefined,
    viewProviders: undefined,
    changeDetection: exports.ChangeDetectionStrategy.Default,
    queries: undefined,
    templateUrl: undefined,
    template: undefined,
    styleUrls: undefined,
    styles: undefined,
    animations: undefined,
    encapsulation: undefined,
    interpolation: undefined,
    entryComponents: undefined
  }, Directive);
  var Pipe = makeDecorator('Pipe', {
    name: undefined,
    pure: true
  });
  var Input = makePropDecorator('Input', [['bindingPropertyName', undefined]]);
  var Output = makePropDecorator('Output', [['bindingPropertyName', undefined]]);
  var HostBinding = makePropDecorator('HostBinding', [['hostPropertyName', undefined]]);
  var HostListener = makePropDecorator('HostListener', [['eventName', undefined], ['args', []]]);
  var LifecycleHooks;
  (function(LifecycleHooks) {
    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
  })(LifecycleHooks || (LifecycleHooks = {}));
  var LIFECYCLE_HOOKS_VALUES = [LifecycleHooks.OnInit, LifecycleHooks.OnDestroy, LifecycleHooks.DoCheck, LifecycleHooks.OnChanges, LifecycleHooks.AfterContentInit, LifecycleHooks.AfterContentChecked, LifecycleHooks.AfterViewInit, LifecycleHooks.AfterViewChecked];
  var OnChanges = (function() {
    function OnChanges() {}
    return OnChanges;
  }());
  var OnInit = (function() {
    function OnInit() {}
    return OnInit;
  }());
  var DoCheck = (function() {
    function DoCheck() {}
    return DoCheck;
  }());
  var OnDestroy = (function() {
    function OnDestroy() {}
    return OnDestroy;
  }());
  var AfterContentInit = (function() {
    function AfterContentInit() {}
    return AfterContentInit;
  }());
  var AfterContentChecked = (function() {
    function AfterContentChecked() {}
    return AfterContentChecked;
  }());
  var AfterViewInit = (function() {
    function AfterViewInit() {}
    return AfterViewInit;
  }());
  var AfterViewChecked = (function() {
    function AfterViewChecked() {}
    return AfterViewChecked;
  }());
  var CUSTOM_ELEMENTS_SCHEMA = {name: 'custom-elements'};
  var NO_ERRORS_SCHEMA = {name: 'no-errors-schema'};
  var NgModule = makeDecorator('NgModule', {
    providers: undefined,
    declarations: undefined,
    imports: undefined,
    exports: undefined,
    entryComponents: undefined,
    bootstrap: undefined,
    schemas: undefined,
    id: undefined
  });
  exports.ViewEncapsulation;
  (function(ViewEncapsulation) {
    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
  })(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
  var ViewMetadata = (function() {
    function ViewMetadata(_a) {
      var _b = _a === void 0 ? {} : _a,
          templateUrl = _b.templateUrl,
          template = _b.template,
          encapsulation = _b.encapsulation,
          styles = _b.styles,
          styleUrls = _b.styleUrls,
          animations = _b.animations,
          interpolation = _b.interpolation;
      this.templateUrl = templateUrl;
      this.template = template;
      this.styleUrls = styleUrls;
      this.styles = styles;
      this.encapsulation = encapsulation;
      this.animations = animations;
      this.interpolation = interpolation;
    }
    return ViewMetadata;
  }());
  function forwardRef(forwardRefFn) {
    forwardRefFn.__forward_ref__ = forwardRef;
    forwardRefFn.toString = function() {
      return stringify(this());
    };
    return forwardRefFn;
  }
  function resolveForwardRef(type) {
    if (isFunction(type) && type.hasOwnProperty('__forward_ref__') && type.__forward_ref__ === forwardRef) {
      return type();
    } else {
      return type;
    }
  }
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  function unimplemented() {
    throw new Error('unimplemented');
  }
  var BaseError = (function(_super) {
    __extends(BaseError, _super);
    function BaseError(message) {
      var nativeError = _super.call(this, message);
      this._nativeError = nativeError;
    }
    Object.defineProperty(BaseError.prototype, "message", {
      get: function() {
        return this._nativeError.message;
      },
      set: function(message) {
        this._nativeError.message = message;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseError.prototype, "name", {
      get: function() {
        return this._nativeError.name;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BaseError.prototype, "stack", {
      get: function() {
        return this._nativeError.stack;
      },
      set: function(value) {
        this._nativeError.stack = value;
      },
      enumerable: true,
      configurable: true
    });
    BaseError.prototype.toString = function() {
      return this._nativeError.toString();
    };
    return BaseError;
  }(Error));
  var WrappedError = (function(_super) {
    __extends(WrappedError, _super);
    function WrappedError(message, error) {
      _super.call(this, message + " caused by: " + (error instanceof Error ? error.message : error));
      this.originalError = error;
    }
    Object.defineProperty(WrappedError.prototype, "stack", {
      get: function() {
        return (this.originalError instanceof Error ? this.originalError : this._nativeError).stack;
      },
      enumerable: true,
      configurable: true
    });
    return WrappedError;
  }(BaseError));
  var _THROW_IF_NOT_FOUND = new Object();
  var THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
  var _NullInjector = (function() {
    function _NullInjector() {}
    _NullInjector.prototype.get = function(token, notFoundValue) {
      if (notFoundValue === void 0) {
        notFoundValue = _THROW_IF_NOT_FOUND;
      }
      if (notFoundValue === _THROW_IF_NOT_FOUND) {
        throw new Error("No provider for " + stringify(token) + "!");
      }
      return notFoundValue;
    };
    return _NullInjector;
  }());
  var Injector = (function() {
    function Injector() {}
    Injector.prototype.get = function(token, notFoundValue) {
      return unimplemented();
    };
    Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
    Injector.NULL = new _NullInjector();
    return Injector;
  }());
  var createMapFromPairs = (function() {
    try {
      if (new Map([[1, 2]]).size === 1) {
        return function createMapFromPairs(pairs) {
          return new Map(pairs);
        };
      }
    } catch (e) {}
    return function createMapAndPopulateFromPairs(pairs) {
      var map = new Map();
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        map.set(pair[0], pair[1]);
      }
      return map;
    };
  })();
  var _clearValues = (function() {
    if ((new Map()).keys().next) {
      return function _clearValues(m) {
        var keyIterator = m.keys();
        var k;
        while (!((k = keyIterator.next()).done)) {
          m.set(k.value, null);
        }
      };
    } else {
      return function _clearValuesWithForeEach(m) {
        m.forEach(function(v, k) {
          m.set(k, null);
        });
      };
    }
  })();
  var _arrayFromMap = (function() {
    try {
      if ((new Map()).values().next) {
        return function createArrayFromMap(m, getValues) {
          return getValues ? Array.from(m.values()) : Array.from(m.keys());
        };
      }
    } catch (e) {}
    return function createArrayFromMapWithForeach(m, getValues) {
      var res = new Array(m.size),
          i = 0;
      m.forEach(function(v, k) {
        res[i] = getValues ? v : k;
        i++;
      });
      return res;
    };
  })();
  var MapWrapper = (function() {
    function MapWrapper() {}
    MapWrapper.createFromStringMap = function(stringMap) {
      var result = new Map();
      for (var prop in stringMap) {
        result.set(prop, stringMap[prop]);
      }
      return result;
    };
    MapWrapper.toStringMap = function(m) {
      var r = {};
      m.forEach(function(v, k) {
        return r[k] = v;
      });
      return r;
    };
    MapWrapper.createFromPairs = function(pairs) {
      return createMapFromPairs(pairs);
    };
    MapWrapper.iterable = function(m) {
      return m;
    };
    MapWrapper.keys = function(m) {
      return _arrayFromMap(m, false);
    };
    MapWrapper.values = function(m) {
      return _arrayFromMap(m, true);
    };
    return MapWrapper;
  }());
  var StringMapWrapper = (function() {
    function StringMapWrapper() {}
    StringMapWrapper.merge = function(m1, m2) {
      var m = {};
      for (var _i = 0,
          _a = Object.keys(m1); _i < _a.length; _i++) {
        var k = _a[_i];
        m[k] = m1[k];
      }
      for (var _b = 0,
          _c = Object.keys(m2); _b < _c.length; _b++) {
        var k = _c[_b];
        m[k] = m2[k];
      }
      return m;
    };
    StringMapWrapper.equals = function(m1, m2) {
      var k1 = Object.keys(m1);
      var k2 = Object.keys(m2);
      if (k1.length != k2.length) {
        return false;
      }
      for (var i = 0; i < k1.length; i++) {
        var key = k1[i];
        if (m1[key] !== m2[key]) {
          return false;
        }
      }
      return true;
    };
    return StringMapWrapper;
  }());
  var ListWrapper = (function() {
    function ListWrapper() {}
    ListWrapper.createFixedSize = function(size) {
      return new Array(size);
    };
    ListWrapper.createGrowableSize = function(size) {
      return new Array(size);
    };
    ListWrapper.clone = function(array) {
      return array.slice(0);
    };
    ListWrapper.forEachWithIndex = function(array, fn) {
      for (var i = 0; i < array.length; i++) {
        fn(array[i], i);
      }
    };
    ListWrapper.first = function(array) {
      if (!array)
        return null;
      return array[0];
    };
    ListWrapper.last = function(array) {
      if (!array || array.length == 0)
        return null;
      return array[array.length - 1];
    };
    ListWrapper.indexOf = function(array, value, startIndex) {
      if (startIndex === void 0) {
        startIndex = 0;
      }
      return array.indexOf(value, startIndex);
    };
    ListWrapper.contains = function(list, el) {
      return list.indexOf(el) !== -1;
    };
    ListWrapper.reversed = function(array) {
      var a = ListWrapper.clone(array);
      return a.reverse();
    };
    ListWrapper.concat = function(a, b) {
      return a.concat(b);
    };
    ListWrapper.insert = function(list, index, value) {
      list.splice(index, 0, value);
    };
    ListWrapper.removeAt = function(list, index) {
      var res = list[index];
      list.splice(index, 1);
      return res;
    };
    ListWrapper.removeAll = function(list, items) {
      for (var i = 0; i < items.length; ++i) {
        var index = list.indexOf(items[i]);
        list.splice(index, 1);
      }
    };
    ListWrapper.remove = function(list, el) {
      var index = list.indexOf(el);
      if (index > -1) {
        list.splice(index, 1);
        return true;
      }
      return false;
    };
    ListWrapper.clear = function(list) {
      list.length = 0;
    };
    ListWrapper.isEmpty = function(list) {
      return list.length == 0;
    };
    ListWrapper.fill = function(list, value, start, end) {
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = null;
      }
      list.fill(value, start, end === null ? list.length : end);
    };
    ListWrapper.equals = function(a, b) {
      if (a.length != b.length)
        return false;
      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
          return false;
      }
      return true;
    };
    ListWrapper.slice = function(l, from, to) {
      if (from === void 0) {
        from = 0;
      }
      if (to === void 0) {
        to = null;
      }
      return l.slice(from, to === null ? undefined : to);
    };
    ListWrapper.splice = function(l, from, length) {
      return l.splice(from, length);
    };
    ListWrapper.sort = function(l, compareFn) {
      if (isPresent(compareFn)) {
        l.sort(compareFn);
      } else {
        l.sort();
      }
    };
    ListWrapper.toString = function(l) {
      return l.toString();
    };
    ListWrapper.toJSON = function(l) {
      return JSON.stringify(l);
    };
    ListWrapper.maximum = function(list, predicate) {
      if (list.length == 0) {
        return null;
      }
      var solution = null;
      var maxValue = -Infinity;
      for (var index = 0; index < list.length; index++) {
        var candidate = list[index];
        if (isBlank(candidate)) {
          continue;
        }
        var candidateValue = predicate(candidate);
        if (candidateValue > maxValue) {
          solution = candidate;
          maxValue = candidateValue;
        }
      }
      return solution;
    };
    ListWrapper.flatten = function(list) {
      var target = [];
      _flattenArray(list, target);
      return target;
    };
    ListWrapper.addAll = function(list, source) {
      for (var i = 0; i < source.length; i++) {
        list.push(source[i]);
      }
    };
    return ListWrapper;
  }());
  function _flattenArray(source, target) {
    if (isPresent(source)) {
      for (var i = 0; i < source.length; i++) {
        var item = source[i];
        if (isArray(item)) {
          _flattenArray(item, target);
        } else {
          target.push(item);
        }
      }
    }
    return target;
  }
  function isListLikeIterable(obj) {
    if (!isJsObject(obj))
      return false;
    return isArray(obj) || (!(obj instanceof Map) && getSymbolIterator() in obj);
  }
  function areIterablesEqual(a, b, comparator) {
    var iterator1 = a[getSymbolIterator()]();
    var iterator2 = b[getSymbolIterator()]();
    while (true) {
      var item1 = iterator1.next();
      var item2 = iterator2.next();
      if (item1.done && item2.done)
        return true;
      if (item1.done || item2.done)
        return false;
      if (!comparator(item1.value, item2.value))
        return false;
    }
  }
  function iterateListLike(obj, fn) {
    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        fn(obj[i]);
      }
    } else {
      var iterator = obj[getSymbolIterator()]();
      var item;
      while (!((item = iterator.next()).done)) {
        fn(item.value);
      }
    }
  }
  var __extends$1 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  function findFirstClosedCycle(keys) {
    var res = [];
    for (var i = 0; i < keys.length; ++i) {
      if (ListWrapper.contains(res, keys[i])) {
        res.push(keys[i]);
        return res;
      }
      res.push(keys[i]);
    }
    return res;
  }
  function constructResolvingPath(keys) {
    if (keys.length > 1) {
      var reversed = findFirstClosedCycle(ListWrapper.reversed(keys));
      var tokenStrs = reversed.map(function(k) {
        return stringify(k.token);
      });
      return ' (' + tokenStrs.join(' -> ') + ')';
    }
    return '';
  }
  var AbstractProviderError = (function(_super) {
    __extends$1(AbstractProviderError, _super);
    function AbstractProviderError(injector, key, constructResolvingMessage) {
      _super.call(this, 'DI Error');
      this.keys = [key];
      this.injectors = [injector];
      this.constructResolvingMessage = constructResolvingMessage;
      this.message = this.constructResolvingMessage(this.keys);
    }
    AbstractProviderError.prototype.addKey = function(injector, key) {
      this.injectors.push(injector);
      this.keys.push(key);
      this.message = this.constructResolvingMessage(this.keys);
    };
    return AbstractProviderError;
  }(BaseError));
  var NoProviderError = (function(_super) {
    __extends$1(NoProviderError, _super);
    function NoProviderError(injector, key) {
      _super.call(this, injector, key, function(keys) {
        var first = stringify(ListWrapper.first(keys).token);
        return "No provider for " + first + "!" + constructResolvingPath(keys);
      });
    }
    return NoProviderError;
  }(AbstractProviderError));
  var CyclicDependencyError = (function(_super) {
    __extends$1(CyclicDependencyError, _super);
    function CyclicDependencyError(injector, key) {
      _super.call(this, injector, key, function(keys) {
        return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
      });
    }
    return CyclicDependencyError;
  }(AbstractProviderError));
  var InstantiationError = (function(_super) {
    __extends$1(InstantiationError, _super);
    function InstantiationError(injector, originalException, originalStack, key) {
      _super.call(this, 'DI Error', originalException);
      this.keys = [key];
      this.injectors = [injector];
    }
    InstantiationError.prototype.addKey = function(injector, key) {
      this.injectors.push(injector);
      this.keys.push(key);
    };
    Object.defineProperty(InstantiationError.prototype, "message", {
      get: function() {
        var first = stringify(ListWrapper.first(this.keys).token);
        return this.originalError.message + ": Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(InstantiationError.prototype, "causeKey", {
      get: function() {
        return this.keys[0];
      },
      enumerable: true,
      configurable: true
    });
    return InstantiationError;
  }(WrappedError));
  var InvalidProviderError = (function(_super) {
    __extends$1(InvalidProviderError, _super);
    function InvalidProviderError(provider) {
      _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " + provider);
    }
    return InvalidProviderError;
  }(BaseError));
  var NoAnnotationError = (function(_super) {
    __extends$1(NoAnnotationError, _super);
    function NoAnnotationError(typeOrFunc, params) {
      _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
    }
    NoAnnotationError._genMessage = function(typeOrFunc, params) {
      var signature = [];
      for (var i = 0,
          ii = params.length; i < ii; i++) {
        var parameter = params[i];
        if (!parameter || parameter.length == 0) {
          signature.push('?');
        } else {
          signature.push(parameter.map(stringify).join(' '));
        }
      }
      return 'Cannot resolve all parameters for \'' + stringify(typeOrFunc) + '\'(' + signature.join(', ') + '). ' + 'Make sure that all the parameters are decorated with Inject or have valid type annotations and that \'' + stringify(typeOrFunc) + '\' is decorated with Injectable.';
    };
    return NoAnnotationError;
  }(BaseError));
  var OutOfBoundsError = (function(_super) {
    __extends$1(OutOfBoundsError, _super);
    function OutOfBoundsError(index) {
      _super.call(this, "Index " + index + " is out-of-bounds.");
    }
    return OutOfBoundsError;
  }(BaseError));
  var MixingMultiProvidersWithRegularProvidersError = (function(_super) {
    __extends$1(MixingMultiProvidersWithRegularProvidersError, _super);
    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
      _super.call(this, 'Cannot mix multi providers and regular providers, got: ' + provider1.toString() + ' ' + provider2.toString());
    }
    return MixingMultiProvidersWithRegularProvidersError;
  }(BaseError));
  var ReflectiveKey = (function() {
    function ReflectiveKey(token, id) {
      this.token = token;
      this.id = id;
      if (!token) {
        throw new Error('Token must be defined!');
      }
    }
    Object.defineProperty(ReflectiveKey.prototype, "displayName", {
      get: function() {
        return stringify(this.token);
      },
      enumerable: true,
      configurable: true
    });
    ReflectiveKey.get = function(token) {
      return _globalKeyRegistry.get(resolveForwardRef(token));
    };
    Object.defineProperty(ReflectiveKey, "numberOfKeys", {
      get: function() {
        return _globalKeyRegistry.numberOfKeys;
      },
      enumerable: true,
      configurable: true
    });
    return ReflectiveKey;
  }());
  var KeyRegistry = (function() {
    function KeyRegistry() {
      this._allKeys = new Map();
    }
    KeyRegistry.prototype.get = function(token) {
      if (token instanceof ReflectiveKey)
        return token;
      if (this._allKeys.has(token)) {
        return this._allKeys.get(token);
      }
      var newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
      this._allKeys.set(token, newKey);
      return newKey;
    };
    Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
      get: function() {
        return this._allKeys.size;
      },
      enumerable: true,
      configurable: true
    });
    return KeyRegistry;
  }());
  var _globalKeyRegistry = new KeyRegistry();
  var Type = Function;
  var ReflectionCapabilities = (function() {
    function ReflectionCapabilities(reflect) {
      this._reflect = reflect || global$1.Reflect;
    }
    ReflectionCapabilities.prototype.isReflectionEnabled = function() {
      return true;
    };
    ReflectionCapabilities.prototype.factory = function(t) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return new (t.bind.apply(t, [void 0].concat(args)))();
      };
    };
    ReflectionCapabilities.prototype._zipTypesAndAnnotations = function(paramTypes, paramAnnotations) {
      var result;
      if (typeof paramTypes === 'undefined') {
        result = new Array(paramAnnotations.length);
      } else {
        result = new Array(paramTypes.length);
      }
      for (var i = 0; i < result.length; i++) {
        if (typeof paramTypes === 'undefined') {
          result[i] = [];
        } else if (paramTypes[i] != Object) {
          result[i] = [paramTypes[i]];
        } else {
          result[i] = [];
        }
        if (paramAnnotations && isPresent(paramAnnotations[i])) {
          result[i] = result[i].concat(paramAnnotations[i]);
        }
      }
      return result;
    };
    ReflectionCapabilities.prototype.parameters = function(type) {
      if (type.parameters) {
        return type.parameters;
      }
      if (type.ctorParameters) {
        var ctorParameters = type.ctorParameters;
        var paramTypes = ctorParameters.map(function(ctorParam) {
          return ctorParam && ctorParam.type;
        });
        var paramAnnotations = ctorParameters.map(function(ctorParam) {
          return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators);
        });
        return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
      }
      if (isPresent(this._reflect) && isPresent(this._reflect.getMetadata)) {
        var paramAnnotations = this._reflect.getMetadata('parameters', type);
        var paramTypes = this._reflect.getMetadata('design:paramtypes', type);
        if (paramTypes || paramAnnotations) {
          return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
        }
      }
      return new Array(type.length).fill(undefined);
    };
    ReflectionCapabilities.prototype.annotations = function(typeOrFunc) {
      if (typeOrFunc.annotations) {
        var annotations = typeOrFunc.annotations;
        if (isFunction(annotations) && annotations.annotations) {
          annotations = annotations.annotations;
        }
        return annotations;
      }
      if (typeOrFunc.decorators) {
        return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
      }
      if (this._reflect && this._reflect.getMetadata) {
        var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
        if (annotations)
          return annotations;
      }
      return [];
    };
    ReflectionCapabilities.prototype.propMetadata = function(typeOrFunc) {
      if (typeOrFunc.propMetadata) {
        var propMetadata = typeOrFunc.propMetadata;
        if (isFunction(propMetadata) && propMetadata.propMetadata) {
          propMetadata = propMetadata.propMetadata;
        }
        return propMetadata;
      }
      if (typeOrFunc.propDecorators) {
        var propDecorators_1 = typeOrFunc.propDecorators;
        var propMetadata_1 = {};
        Object.keys(propDecorators_1).forEach(function(prop) {
          propMetadata_1[prop] = convertTsickleDecoratorIntoMetadata(propDecorators_1[prop]);
        });
        return propMetadata_1;
      }
      if (this._reflect && this._reflect.getMetadata) {
        var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
        if (propMetadata)
          return propMetadata;
      }
      return {};
    };
    ReflectionCapabilities.prototype.interfaces = function(type) {
      return [];
    };
    ReflectionCapabilities.prototype.hasLifecycleHook = function(type, lcInterface, lcProperty) {
      if (!(type instanceof Type))
        return false;
      var proto = type.prototype;
      return !!proto[lcProperty];
    };
    ReflectionCapabilities.prototype.getter = function(name) {
      return new Function('o', 'return o.' + name + ';');
    };
    ReflectionCapabilities.prototype.setter = function(name) {
      return new Function('o', 'v', 'return o.' + name + ' = v;');
    };
    ReflectionCapabilities.prototype.method = function(name) {
      var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
      return new Function('o', 'args', functionBody);
    };
    ReflectionCapabilities.prototype.importUri = function(type) {
      if (typeof type === 'object' && type['filePath']) {
        return type['filePath'];
      }
      return "./" + stringify(type);
    };
    ReflectionCapabilities.prototype.resolveIdentifier = function(name, moduleUrl, runtime) {
      return runtime;
    };
    ReflectionCapabilities.prototype.resolveEnum = function(enumIdentifier, name) {
      return enumIdentifier[name];
    };
    return ReflectionCapabilities;
  }());
  function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
    if (!decoratorInvocations) {
      return [];
    }
    return decoratorInvocations.map(function(decoratorInvocation) {
      var decoratorType = decoratorInvocation.type;
      var annotationCls = decoratorType.annotationCls;
      var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
      return new (annotationCls.bind.apply(annotationCls, [void 0].concat(annotationArgs)))();
    });
  }
  var ReflectorReader = (function() {
    function ReflectorReader() {}
    return ReflectorReader;
  }());
  var __extends$2 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Reflector = (function(_super) {
    __extends$2(Reflector, _super);
    function Reflector(reflectionCapabilities) {
      _super.call(this);
      this.reflectionCapabilities = reflectionCapabilities;
      this._injectableInfo = new Map();
      this._getters = new Map();
      this._setters = new Map();
      this._methods = new Map();
      this._usedKeys = null;
    }
    Reflector.prototype.updateCapabilities = function(caps) {
      this.reflectionCapabilities = caps;
    };
    Reflector.prototype.isReflectionEnabled = function() {
      return this.reflectionCapabilities.isReflectionEnabled();
    };
    Reflector.prototype.trackUsage = function() {
      this._usedKeys = new Set();
    };
    Reflector.prototype.listUnusedKeys = function() {
      var _this = this;
      if (!this._usedKeys) {
        throw new Error('Usage tracking is disabled');
      }
      var allTypes = MapWrapper.keys(this._injectableInfo);
      return allTypes.filter(function(key) {
        return !_this._usedKeys.has(key);
      });
    };
    Reflector.prototype.registerFunction = function(func, funcInfo) {
      this._injectableInfo.set(func, funcInfo);
    };
    Reflector.prototype.registerType = function(type, typeInfo) {
      this._injectableInfo.set(type, typeInfo);
    };
    Reflector.prototype.registerGetters = function(getters) {
      _mergeMaps(this._getters, getters);
    };
    Reflector.prototype.registerSetters = function(setters) {
      _mergeMaps(this._setters, setters);
    };
    Reflector.prototype.registerMethods = function(methods) {
      _mergeMaps(this._methods, methods);
    };
    Reflector.prototype.factory = function(type) {
      if (this._containsReflectionInfo(type)) {
        return this._getReflectionInfo(type).factory || null;
      }
      return this.reflectionCapabilities.factory(type);
    };
    Reflector.prototype.parameters = function(typeOrFunc) {
      if (this._injectableInfo.has(typeOrFunc)) {
        return this._getReflectionInfo(typeOrFunc).parameters || [];
      }
      return this.reflectionCapabilities.parameters(typeOrFunc);
    };
    Reflector.prototype.annotations = function(typeOrFunc) {
      if (this._injectableInfo.has(typeOrFunc)) {
        return this._getReflectionInfo(typeOrFunc).annotations || [];
      }
      return this.reflectionCapabilities.annotations(typeOrFunc);
    };
    Reflector.prototype.propMetadata = function(typeOrFunc) {
      if (this._injectableInfo.has(typeOrFunc)) {
        return this._getReflectionInfo(typeOrFunc).propMetadata || {};
      }
      return this.reflectionCapabilities.propMetadata(typeOrFunc);
    };
    Reflector.prototype.interfaces = function(type) {
      if (this._injectableInfo.has(type)) {
        return this._getReflectionInfo(type).interfaces || [];
      }
      return this.reflectionCapabilities.interfaces(type);
    };
    Reflector.prototype.hasLifecycleHook = function(type, lcInterface, lcProperty) {
      if (this.interfaces(type).indexOf(lcInterface) !== -1) {
        return true;
      }
      return this.reflectionCapabilities.hasLifecycleHook(type, lcInterface, lcProperty);
    };
    Reflector.prototype.getter = function(name) {
      return this._getters.has(name) ? this._getters.get(name) : this.reflectionCapabilities.getter(name);
    };
    Reflector.prototype.setter = function(name) {
      return this._setters.has(name) ? this._setters.get(name) : this.reflectionCapabilities.setter(name);
    };
    Reflector.prototype.method = function(name) {
      return this._methods.has(name) ? this._methods.get(name) : this.reflectionCapabilities.method(name);
    };
    Reflector.prototype._getReflectionInfo = function(typeOrFunc) {
      if (this._usedKeys) {
        this._usedKeys.add(typeOrFunc);
      }
      return this._injectableInfo.get(typeOrFunc);
    };
    Reflector.prototype._containsReflectionInfo = function(typeOrFunc) {
      return this._injectableInfo.has(typeOrFunc);
    };
    Reflector.prototype.importUri = function(type) {
      return this.reflectionCapabilities.importUri(type);
    };
    Reflector.prototype.resolveIdentifier = function(name, moduleUrl, runtime) {
      return this.reflectionCapabilities.resolveIdentifier(name, moduleUrl, runtime);
    };
    Reflector.prototype.resolveEnum = function(identifier, name) {
      return this.reflectionCapabilities.resolveEnum(identifier, name);
    };
    return Reflector;
  }(ReflectorReader));
  function _mergeMaps(target, config) {
    Object.keys(config).forEach(function(k) {
      target.set(k, config[k]);
    });
  }
  var reflector = new Reflector(new ReflectionCapabilities());
  var ReflectiveDependency = (function() {
    function ReflectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
      this.key = key;
      this.optional = optional;
      this.lowerBoundVisibility = lowerBoundVisibility;
      this.upperBoundVisibility = upperBoundVisibility;
      this.properties = properties;
    }
    ReflectiveDependency.fromKey = function(key) {
      return new ReflectiveDependency(key, false, null, null, []);
    };
    return ReflectiveDependency;
  }());
  var _EMPTY_LIST = [];
  var ResolvedReflectiveProvider_ = (function() {
    function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
      this.key = key;
      this.resolvedFactories = resolvedFactories;
      this.multiProvider = multiProvider;
    }
    Object.defineProperty(ResolvedReflectiveProvider_.prototype, "resolvedFactory", {
      get: function() {
        return this.resolvedFactories[0];
      },
      enumerable: true,
      configurable: true
    });
    return ResolvedReflectiveProvider_;
  }());
  var ResolvedReflectiveFactory = (function() {
    function ResolvedReflectiveFactory(factory, dependencies) {
      this.factory = factory;
      this.dependencies = dependencies;
    }
    return ResolvedReflectiveFactory;
  }());
  function resolveReflectiveFactory(provider) {
    var factoryFn;
    var resolvedDeps;
    if (isPresent(provider.useClass)) {
      var useClass = resolveForwardRef(provider.useClass);
      factoryFn = reflector.factory(useClass);
      resolvedDeps = _dependenciesFor(useClass);
    } else if (isPresent(provider.useExisting)) {
      factoryFn = function(aliasInstance) {
        return aliasInstance;
      };
      resolvedDeps = [ReflectiveDependency.fromKey(ReflectiveKey.get(provider.useExisting))];
    } else if (isPresent(provider.useFactory)) {
      factoryFn = provider.useFactory;
      resolvedDeps = constructDependencies(provider.useFactory, provider.deps);
    } else {
      factoryFn = function() {
        return provider.useValue;
      };
      resolvedDeps = _EMPTY_LIST;
    }
    return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
  }
  function resolveReflectiveProvider(provider) {
    return new ResolvedReflectiveProvider_(ReflectiveKey.get(provider.provide), [resolveReflectiveFactory(provider)], provider.multi);
  }
  function resolveReflectiveProviders(providers) {
    var normalized = _normalizeProviders(providers, []);
    var resolved = normalized.map(resolveReflectiveProvider);
    return MapWrapper.values(mergeResolvedReflectiveProviders(resolved, new Map()));
  }
  function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
    for (var i = 0; i < providers.length; i++) {
      var provider = providers[i];
      var existing = normalizedProvidersMap.get(provider.key.id);
      if (isPresent(existing)) {
        if (provider.multiProvider !== existing.multiProvider) {
          throw new MixingMultiProvidersWithRegularProvidersError(existing, provider);
        }
        if (provider.multiProvider) {
          for (var j = 0; j < provider.resolvedFactories.length; j++) {
            existing.resolvedFactories.push(provider.resolvedFactories[j]);
          }
        } else {
          normalizedProvidersMap.set(provider.key.id, provider);
        }
      } else {
        var resolvedProvider;
        if (provider.multiProvider) {
          resolvedProvider = new ResolvedReflectiveProvider_(provider.key, ListWrapper.clone(provider.resolvedFactories), provider.multiProvider);
        } else {
          resolvedProvider = provider;
        }
        normalizedProvidersMap.set(provider.key.id, resolvedProvider);
      }
    }
    return normalizedProvidersMap;
  }
  function _normalizeProviders(providers, res) {
    providers.forEach(function(b) {
      if (b instanceof Type) {
        res.push({
          provide: b,
          useClass: b
        });
      } else if (b && typeof b == 'object' && b.provide !== undefined) {
        res.push(b);
      } else if (b instanceof Array) {
        _normalizeProviders(b, res);
      } else {
        throw new InvalidProviderError(b);
      }
    });
    return res;
  }
  function constructDependencies(typeOrFunc, dependencies) {
    if (!dependencies) {
      return _dependenciesFor(typeOrFunc);
    } else {
      var params = dependencies.map(function(t) {
        return [t];
      });
      return dependencies.map(function(t) {
        return _extractToken(typeOrFunc, t, params);
      });
    }
  }
  function _dependenciesFor(typeOrFunc) {
    var params = reflector.parameters(typeOrFunc);
    if (!params)
      return [];
    if (params.some(isBlank)) {
      throw new NoAnnotationError(typeOrFunc, params);
    }
    return params.map(function(p) {
      return _extractToken(typeOrFunc, p, params);
    });
  }
  function _extractToken(typeOrFunc, metadata, params) {
    var depProps = [];
    var token = null;
    var optional = false;
    if (!isArray(metadata)) {
      if (metadata instanceof Inject) {
        return _createDependency(metadata.token, optional, null, null, depProps);
      } else {
        return _createDependency(metadata, optional, null, null, depProps);
      }
    }
    var lowerBoundVisibility = null;
    var upperBoundVisibility = null;
    for (var i = 0; i < metadata.length; ++i) {
      var paramMetadata = metadata[i];
      if (paramMetadata instanceof Type) {
        token = paramMetadata;
      } else if (paramMetadata instanceof Inject) {
        token = paramMetadata.token;
      } else if (paramMetadata instanceof Optional) {
        optional = true;
      } else if (paramMetadata instanceof Self) {
        upperBoundVisibility = paramMetadata;
      } else if (paramMetadata instanceof Host) {
        upperBoundVisibility = paramMetadata;
      } else if (paramMetadata instanceof SkipSelf) {
        lowerBoundVisibility = paramMetadata;
      }
    }
    token = resolveForwardRef(token);
    if (isPresent(token)) {
      return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
    } else {
      throw new NoAnnotationError(typeOrFunc, params);
    }
  }
  function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
    return new ReflectiveDependency(ReflectiveKey.get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
  }
  var _MAX_CONSTRUCTION_COUNTER = 10;
  var UNDEFINED = new Object();
  var ReflectiveProtoInjectorInlineStrategy = (function() {
    function ReflectiveProtoInjectorInlineStrategy(protoEI, providers) {
      this.provider0 = null;
      this.provider1 = null;
      this.provider2 = null;
      this.provider3 = null;
      this.provider4 = null;
      this.provider5 = null;
      this.provider6 = null;
      this.provider7 = null;
      this.provider8 = null;
      this.provider9 = null;
      this.keyId0 = null;
      this.keyId1 = null;
      this.keyId2 = null;
      this.keyId3 = null;
      this.keyId4 = null;
      this.keyId5 = null;
      this.keyId6 = null;
      this.keyId7 = null;
      this.keyId8 = null;
      this.keyId9 = null;
      var length = providers.length;
      if (length > 0) {
        this.provider0 = providers[0];
        this.keyId0 = providers[0].key.id;
      }
      if (length > 1) {
        this.provider1 = providers[1];
        this.keyId1 = providers[1].key.id;
      }
      if (length > 2) {
        this.provider2 = providers[2];
        this.keyId2 = providers[2].key.id;
      }
      if (length > 3) {
        this.provider3 = providers[3];
        this.keyId3 = providers[3].key.id;
      }
      if (length > 4) {
        this.provider4 = providers[4];
        this.keyId4 = providers[4].key.id;
      }
      if (length > 5) {
        this.provider5 = providers[5];
        this.keyId5 = providers[5].key.id;
      }
      if (length > 6) {
        this.provider6 = providers[6];
        this.keyId6 = providers[6].key.id;
      }
      if (length > 7) {
        this.provider7 = providers[7];
        this.keyId7 = providers[7].key.id;
      }
      if (length > 8) {
        this.provider8 = providers[8];
        this.keyId8 = providers[8].key.id;
      }
      if (length > 9) {
        this.provider9 = providers[9];
        this.keyId9 = providers[9].key.id;
      }
    }
    ReflectiveProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function(index) {
      if (index == 0)
        return this.provider0;
      if (index == 1)
        return this.provider1;
      if (index == 2)
        return this.provider2;
      if (index == 3)
        return this.provider3;
      if (index == 4)
        return this.provider4;
      if (index == 5)
        return this.provider5;
      if (index == 6)
        return this.provider6;
      if (index == 7)
        return this.provider7;
      if (index == 8)
        return this.provider8;
      if (index == 9)
        return this.provider9;
      throw new OutOfBoundsError(index);
    };
    ReflectiveProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function(injector) {
      return new ReflectiveInjectorInlineStrategy(injector, this);
    };
    return ReflectiveProtoInjectorInlineStrategy;
  }());
  var ReflectiveProtoInjectorDynamicStrategy = (function() {
    function ReflectiveProtoInjectorDynamicStrategy(protoInj, providers) {
      this.providers = providers;
      var len = providers.length;
      this.keyIds = new Array(len);
      for (var i = 0; i < len; i++) {
        this.keyIds[i] = providers[i].key.id;
      }
    }
    ReflectiveProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function(index) {
      if (index < 0 || index >= this.providers.length) {
        throw new OutOfBoundsError(index);
      }
      return this.providers[index];
    };
    ReflectiveProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function(ei) {
      return new ReflectiveInjectorDynamicStrategy(this, ei);
    };
    return ReflectiveProtoInjectorDynamicStrategy;
  }());
  var ReflectiveProtoInjector = (function() {
    function ReflectiveProtoInjector(providers) {
      this.numberOfProviders = providers.length;
      this._strategy = providers.length > _MAX_CONSTRUCTION_COUNTER ? new ReflectiveProtoInjectorDynamicStrategy(this, providers) : new ReflectiveProtoInjectorInlineStrategy(this, providers);
    }
    ReflectiveProtoInjector.fromResolvedProviders = function(providers) {
      return new ReflectiveProtoInjector(providers);
    };
    ReflectiveProtoInjector.prototype.getProviderAtIndex = function(index) {
      return this._strategy.getProviderAtIndex(index);
    };
    return ReflectiveProtoInjector;
  }());
  var ReflectiveInjectorInlineStrategy = (function() {
    function ReflectiveInjectorInlineStrategy(injector, protoStrategy) {
      this.injector = injector;
      this.protoStrategy = protoStrategy;
      this.obj0 = UNDEFINED;
      this.obj1 = UNDEFINED;
      this.obj2 = UNDEFINED;
      this.obj3 = UNDEFINED;
      this.obj4 = UNDEFINED;
      this.obj5 = UNDEFINED;
      this.obj6 = UNDEFINED;
      this.obj7 = UNDEFINED;
      this.obj8 = UNDEFINED;
      this.obj9 = UNDEFINED;
    }
    ReflectiveInjectorInlineStrategy.prototype.resetConstructionCounter = function() {
      this.injector._constructionCounter = 0;
    };
    ReflectiveInjectorInlineStrategy.prototype.instantiateProvider = function(provider) {
      return this.injector._new(provider);
    };
    ReflectiveInjectorInlineStrategy.prototype.getObjByKeyId = function(keyId) {
      var p = this.protoStrategy;
      var inj = this.injector;
      if (p.keyId0 === keyId) {
        if (this.obj0 === UNDEFINED) {
          this.obj0 = inj._new(p.provider0);
        }
        return this.obj0;
      }
      if (p.keyId1 === keyId) {
        if (this.obj1 === UNDEFINED) {
          this.obj1 = inj._new(p.provider1);
        }
        return this.obj1;
      }
      if (p.keyId2 === keyId) {
        if (this.obj2 === UNDEFINED) {
          this.obj2 = inj._new(p.provider2);
        }
        return this.obj2;
      }
      if (p.keyId3 === keyId) {
        if (this.obj3 === UNDEFINED) {
          this.obj3 = inj._new(p.provider3);
        }
        return this.obj3;
      }
      if (p.keyId4 === keyId) {
        if (this.obj4 === UNDEFINED) {
          this.obj4 = inj._new(p.provider4);
        }
        return this.obj4;
      }
      if (p.keyId5 === keyId) {
        if (this.obj5 === UNDEFINED) {
          this.obj5 = inj._new(p.provider5);
        }
        return this.obj5;
      }
      if (p.keyId6 === keyId) {
        if (this.obj6 === UNDEFINED) {
          this.obj6 = inj._new(p.provider6);
        }
        return this.obj6;
      }
      if (p.keyId7 === keyId) {
        if (this.obj7 === UNDEFINED) {
          this.obj7 = inj._new(p.provider7);
        }
        return this.obj7;
      }
      if (p.keyId8 === keyId) {
        if (this.obj8 === UNDEFINED) {
          this.obj8 = inj._new(p.provider8);
        }
        return this.obj8;
      }
      if (p.keyId9 === keyId) {
        if (this.obj9 === UNDEFINED) {
          this.obj9 = inj._new(p.provider9);
        }
        return this.obj9;
      }
      return UNDEFINED;
    };
    ReflectiveInjectorInlineStrategy.prototype.getObjAtIndex = function(index) {
      if (index == 0)
        return this.obj0;
      if (index == 1)
        return this.obj1;
      if (index == 2)
        return this.obj2;
      if (index == 3)
        return this.obj3;
      if (index == 4)
        return this.obj4;
      if (index == 5)
        return this.obj5;
      if (index == 6)
        return this.obj6;
      if (index == 7)
        return this.obj7;
      if (index == 8)
        return this.obj8;
      if (index == 9)
        return this.obj9;
      throw new OutOfBoundsError(index);
    };
    ReflectiveInjectorInlineStrategy.prototype.getMaxNumberOfObjects = function() {
      return _MAX_CONSTRUCTION_COUNTER;
    };
    return ReflectiveInjectorInlineStrategy;
  }());
  var ReflectiveInjectorDynamicStrategy = (function() {
    function ReflectiveInjectorDynamicStrategy(protoStrategy, injector) {
      this.protoStrategy = protoStrategy;
      this.injector = injector;
      this.objs = new Array(protoStrategy.providers.length);
      ListWrapper.fill(this.objs, UNDEFINED);
    }
    ReflectiveInjectorDynamicStrategy.prototype.resetConstructionCounter = function() {
      this.injector._constructionCounter = 0;
    };
    ReflectiveInjectorDynamicStrategy.prototype.instantiateProvider = function(provider) {
      return this.injector._new(provider);
    };
    ReflectiveInjectorDynamicStrategy.prototype.getObjByKeyId = function(keyId) {
      var p = this.protoStrategy;
      for (var i = 0; i < p.keyIds.length; i++) {
        if (p.keyIds[i] === keyId) {
          if (this.objs[i] === UNDEFINED) {
            this.objs[i] = this.injector._new(p.providers[i]);
          }
          return this.objs[i];
        }
      }
      return UNDEFINED;
    };
    ReflectiveInjectorDynamicStrategy.prototype.getObjAtIndex = function(index) {
      if (index < 0 || index >= this.objs.length) {
        throw new OutOfBoundsError(index);
      }
      return this.objs[index];
    };
    ReflectiveInjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function() {
      return this.objs.length;
    };
    return ReflectiveInjectorDynamicStrategy;
  }());
  var ReflectiveInjector = (function() {
    function ReflectiveInjector() {}
    ReflectiveInjector.resolve = function(providers) {
      return resolveReflectiveProviders(providers);
    };
    ReflectiveInjector.resolveAndCreate = function(providers, parent) {
      if (parent === void 0) {
        parent = null;
      }
      var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
      return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
    };
    ReflectiveInjector.fromResolvedProviders = function(providers, parent) {
      if (parent === void 0) {
        parent = null;
      }
      return new ReflectiveInjector_(ReflectiveProtoInjector.fromResolvedProviders(providers), parent);
    };
    Object.defineProperty(ReflectiveInjector.prototype, "parent", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ReflectiveInjector.prototype.resolveAndCreateChild = function(providers) {
      return unimplemented();
    };
    ReflectiveInjector.prototype.createChildFromResolved = function(providers) {
      return unimplemented();
    };
    ReflectiveInjector.prototype.resolveAndInstantiate = function(provider) {
      return unimplemented();
    };
    ReflectiveInjector.prototype.instantiateResolved = function(provider) {
      return unimplemented();
    };
    return ReflectiveInjector;
  }());
  var ReflectiveInjector_ = (function() {
    function ReflectiveInjector_(_proto, _parent) {
      if (_parent === void 0) {
        _parent = null;
      }
      this._constructionCounter = 0;
      this._proto = _proto;
      this._parent = _parent;
      this._strategy = _proto._strategy.createInjectorStrategy(this);
    }
    ReflectiveInjector_.prototype.get = function(token, notFoundValue) {
      if (notFoundValue === void 0) {
        notFoundValue = THROW_IF_NOT_FOUND;
      }
      return this._getByKey(ReflectiveKey.get(token), null, null, notFoundValue);
    };
    ReflectiveInjector_.prototype.getAt = function(index) {
      return this._strategy.getObjAtIndex(index);
    };
    Object.defineProperty(ReflectiveInjector_.prototype, "parent", {
      get: function() {
        return this._parent;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ReflectiveInjector_.prototype, "internalStrategy", {
      get: function() {
        return this._strategy;
      },
      enumerable: true,
      configurable: true
    });
    ReflectiveInjector_.prototype.resolveAndCreateChild = function(providers) {
      var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
      return this.createChildFromResolved(ResolvedReflectiveProviders);
    };
    ReflectiveInjector_.prototype.createChildFromResolved = function(providers) {
      var proto = new ReflectiveProtoInjector(providers);
      var inj = new ReflectiveInjector_(proto);
      inj._parent = this;
      return inj;
    };
    ReflectiveInjector_.prototype.resolveAndInstantiate = function(provider) {
      return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
    };
    ReflectiveInjector_.prototype.instantiateResolved = function(provider) {
      return this._instantiateProvider(provider);
    };
    ReflectiveInjector_.prototype._new = function(provider) {
      if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
        throw new CyclicDependencyError(this, provider.key);
      }
      return this._instantiateProvider(provider);
    };
    ReflectiveInjector_.prototype._instantiateProvider = function(provider) {
      if (provider.multiProvider) {
        var res = new Array(provider.resolvedFactories.length);
        for (var i = 0; i < provider.resolvedFactories.length; ++i) {
          res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
        }
        return res;
      } else {
        return this._instantiate(provider, provider.resolvedFactories[0]);
      }
    };
    ReflectiveInjector_.prototype._instantiate = function(provider, ResolvedReflectiveFactory) {
      var factory = ResolvedReflectiveFactory.factory;
      var deps = ResolvedReflectiveFactory.dependencies;
      var length = deps.length;
      var d0;
      var d1;
      var d2;
      var d3;
      var d4;
      var d5;
      var d6;
      var d7;
      var d8;
      var d9;
      var d10;
      var d11;
      var d12;
      var d13;
      var d14;
      var d15;
      var d16;
      var d17;
      var d18;
      var d19;
      try {
        d0 = length > 0 ? this._getByReflectiveDependency(provider, deps[0]) : null;
        d1 = length > 1 ? this._getByReflectiveDependency(provider, deps[1]) : null;
        d2 = length > 2 ? this._getByReflectiveDependency(provider, deps[2]) : null;
        d3 = length > 3 ? this._getByReflectiveDependency(provider, deps[3]) : null;
        d4 = length > 4 ? this._getByReflectiveDependency(provider, deps[4]) : null;
        d5 = length > 5 ? this._getByReflectiveDependency(provider, deps[5]) : null;
        d6 = length > 6 ? this._getByReflectiveDependency(provider, deps[6]) : null;
        d7 = length > 7 ? this._getByReflectiveDependency(provider, deps[7]) : null;
        d8 = length > 8 ? this._getByReflectiveDependency(provider, deps[8]) : null;
        d9 = length > 9 ? this._getByReflectiveDependency(provider, deps[9]) : null;
        d10 = length > 10 ? this._getByReflectiveDependency(provider, deps[10]) : null;
        d11 = length > 11 ? this._getByReflectiveDependency(provider, deps[11]) : null;
        d12 = length > 12 ? this._getByReflectiveDependency(provider, deps[12]) : null;
        d13 = length > 13 ? this._getByReflectiveDependency(provider, deps[13]) : null;
        d14 = length > 14 ? this._getByReflectiveDependency(provider, deps[14]) : null;
        d15 = length > 15 ? this._getByReflectiveDependency(provider, deps[15]) : null;
        d16 = length > 16 ? this._getByReflectiveDependency(provider, deps[16]) : null;
        d17 = length > 17 ? this._getByReflectiveDependency(provider, deps[17]) : null;
        d18 = length > 18 ? this._getByReflectiveDependency(provider, deps[18]) : null;
        d19 = length > 19 ? this._getByReflectiveDependency(provider, deps[19]) : null;
      } catch (e) {
        if (e instanceof AbstractProviderError || e instanceof InstantiationError) {
          e.addKey(this, provider.key);
        }
        throw e;
      }
      var obj;
      try {
        switch (length) {
          case 0:
            obj = factory();
            break;
          case 1:
            obj = factory(d0);
            break;
          case 2:
            obj = factory(d0, d1);
            break;
          case 3:
            obj = factory(d0, d1, d2);
            break;
          case 4:
            obj = factory(d0, d1, d2, d3);
            break;
          case 5:
            obj = factory(d0, d1, d2, d3, d4);
            break;
          case 6:
            obj = factory(d0, d1, d2, d3, d4, d5);
            break;
          case 7:
            obj = factory(d0, d1, d2, d3, d4, d5, d6);
            break;
          case 8:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
            break;
          case 9:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
            break;
          case 10:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
            break;
          case 11:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
            break;
          case 12:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
            break;
          case 13:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
            break;
          case 14:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
            break;
          case 15:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
            break;
          case 16:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
            break;
          case 17:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
            break;
          case 18:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
            break;
          case 19:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
            break;
          case 20:
            obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
            break;
          default:
            throw new Error("Cannot instantiate '" + provider.key.displayName + "' because it has more than 20 dependencies");
        }
      } catch (e) {
        throw new InstantiationError(this, e, e.stack, provider.key);
      }
      return obj;
    };
    ReflectiveInjector_.prototype._getByReflectiveDependency = function(provider, dep) {
      return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional ? null : THROW_IF_NOT_FOUND);
    };
    ReflectiveInjector_.prototype._getByKey = function(key, lowerBoundVisibility, upperBoundVisibility, notFoundValue) {
      if (key === INJECTOR_KEY) {
        return this;
      }
      if (upperBoundVisibility instanceof Self) {
        return this._getByKeySelf(key, notFoundValue);
      } else {
        return this._getByKeyDefault(key, notFoundValue, lowerBoundVisibility);
      }
    };
    ReflectiveInjector_.prototype._throwOrNull = function(key, notFoundValue) {
      if (notFoundValue !== THROW_IF_NOT_FOUND) {
        return notFoundValue;
      } else {
        throw new NoProviderError(this, key);
      }
    };
    ReflectiveInjector_.prototype._getByKeySelf = function(key, notFoundValue) {
      var obj = this._strategy.getObjByKeyId(key.id);
      return (obj !== UNDEFINED) ? obj : this._throwOrNull(key, notFoundValue);
    };
    ReflectiveInjector_.prototype._getByKeyDefault = function(key, notFoundValue, lowerBoundVisibility) {
      var inj;
      if (lowerBoundVisibility instanceof SkipSelf) {
        inj = this._parent;
      } else {
        inj = this;
      }
      while (inj instanceof ReflectiveInjector_) {
        var inj_ = inj;
        var obj = inj_._strategy.getObjByKeyId(key.id);
        if (obj !== UNDEFINED)
          return obj;
        inj = inj_._parent;
      }
      if (inj !== null) {
        return inj.get(key.token, notFoundValue);
      } else {
        return this._throwOrNull(key, notFoundValue);
      }
    };
    Object.defineProperty(ReflectiveInjector_.prototype, "displayName", {
      get: function() {
        var providers = _mapProviders(this, function(b) {
          return ' "' + b.key.displayName + '" ';
        }).join(', ');
        return "ReflectiveInjector(providers: [" + providers + "])";
      },
      enumerable: true,
      configurable: true
    });
    ReflectiveInjector_.prototype.toString = function() {
      return this.displayName;
    };
    return ReflectiveInjector_;
  }());
  var INJECTOR_KEY = ReflectiveKey.get(Injector);
  function _mapProviders(injector, fn) {
    var res = new Array(injector._proto.numberOfProviders);
    for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
      res[i] = fn(injector._proto.getProviderAtIndex(i));
    }
    return res;
  }
  var ErrorHandler = (function() {
    function ErrorHandler(rethrowError) {
      if (rethrowError === void 0) {
        rethrowError = true;
      }
      this._console = console;
      this.rethrowError = rethrowError;
    }
    ErrorHandler.prototype.handleError = function(error) {
      var originalError = this._findOriginalError(error);
      var originalStack = this._findOriginalStack(error);
      var context = this._findContext(error);
      this._console.error("EXCEPTION: " + this._extractMessage(error));
      if (originalError) {
        this._console.error("ORIGINAL EXCEPTION: " + this._extractMessage(originalError));
      }
      if (originalStack) {
        this._console.error('ORIGINAL STACKTRACE:');
        this._console.error(originalStack);
      }
      if (context) {
        this._console.error('ERROR CONTEXT:');
        this._console.error(context);
      }
      if (this.rethrowError)
        throw error;
    };
    ErrorHandler.prototype._extractMessage = function(error) {
      return error instanceof Error ? error.message : error.toString();
    };
    ErrorHandler.prototype._findContext = function(error) {
      if (error) {
        return error.context ? error.context : this._findContext(error.originalError);
      }
      return null;
    };
    ErrorHandler.prototype._findOriginalError = function(error) {
      var e = error.originalError;
      while (e && e.originalError) {
        e = e.originalError;
      }
      return e;
    };
    ErrorHandler.prototype._findOriginalStack = function(error) {
      if (!(error instanceof Error))
        return null;
      var e = error;
      var stack = e.stack;
      while (e instanceof Error && e.originalError) {
        e = e.originalError;
        if (e instanceof Error && e.stack) {
          stack = e.stack;
        }
      }
      return stack;
    };
    return ErrorHandler;
  }());
  function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
  }
  var APP_INITIALIZER = new OpaqueToken('Application Initializer');
  var ApplicationInitStatus = (function() {
    function ApplicationInitStatus(appInits) {
      var _this = this;
      this._done = false;
      var asyncInitPromises = [];
      if (appInits) {
        for (var i = 0; i < appInits.length; i++) {
          var initResult = appInits[i]();
          if (isPromise(initResult)) {
            asyncInitPromises.push(initResult);
          }
        }
      }
      this._donePromise = Promise.all(asyncInitPromises).then(function() {
        _this._done = true;
      });
      if (asyncInitPromises.length === 0) {
        this._done = true;
      }
    }
    Object.defineProperty(ApplicationInitStatus.prototype, "done", {
      get: function() {
        return this._done;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ApplicationInitStatus.prototype, "donePromise", {
      get: function() {
        return this._donePromise;
      },
      enumerable: true,
      configurable: true
    });
    ApplicationInitStatus.decorators = [{type: Injectable}];
    ApplicationInitStatus.ctorParameters = [{
      type: Array,
      decorators: [{
        type: Inject,
        args: [APP_INITIALIZER]
      }, {type: Optional}]
    }];
    return ApplicationInitStatus;
  }());
  var APP_ID = new OpaqueToken('AppId');
  function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
  }
  var APP_ID_RANDOM_PROVIDER = {
    provide: APP_ID,
    useFactory: _appIdRandomProviderFactory,
    deps: []
  };
  function _randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 25));
  }
  var PLATFORM_INITIALIZER = new OpaqueToken('Platform Initializer');
  var APP_BOOTSTRAP_LISTENER = new OpaqueToken('appBootstrapListener');
  var PACKAGE_ROOT_URL = new OpaqueToken('Application Packages Root URL');
  var Console = (function() {
    function Console() {}
    Console.prototype.log = function(message) {
      print(message);
    };
    Console.prototype.warn = function(message) {
      warn(message);
    };
    Console.decorators = [{type: Injectable}];
    Console.ctorParameters = [];
    return Console;
  }());
  var __extends$4 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ComponentStillLoadingError = (function(_super) {
    __extends$4(ComponentStillLoadingError, _super);
    function ComponentStillLoadingError(compType) {
      _super.call(this, "Can't compile synchronously as " + stringify(compType) + " is still being loaded!");
      this.compType = compType;
    }
    return ComponentStillLoadingError;
  }(BaseError));
  var ModuleWithComponentFactories = (function() {
    function ModuleWithComponentFactories(ngModuleFactory, componentFactories) {
      this.ngModuleFactory = ngModuleFactory;
      this.componentFactories = componentFactories;
    }
    return ModuleWithComponentFactories;
  }());
  function _throwError() {
    throw new Error("Runtime compiler is not loaded");
  }
  var Compiler = (function() {
    function Compiler() {}
    Compiler.prototype.compileModuleSync = function(moduleType) {
      throw _throwError();
    };
    Compiler.prototype.compileModuleAsync = function(moduleType) {
      throw _throwError();
    };
    Compiler.prototype.compileModuleAndAllComponentsSync = function(moduleType) {
      throw _throwError();
    };
    Compiler.prototype.compileModuleAndAllComponentsAsync = function(moduleType) {
      throw _throwError();
    };
    Compiler.prototype.clearCache = function() {};
    Compiler.prototype.clearCacheFor = function(type) {};
    return Compiler;
  }());
  var COMPILER_OPTIONS = new OpaqueToken('compilerOptions');
  var CompilerFactory = (function() {
    function CompilerFactory() {}
    return CompilerFactory;
  }());
  var DefaultIterableDifferFactory = (function() {
    function DefaultIterableDifferFactory() {}
    DefaultIterableDifferFactory.prototype.supports = function(obj) {
      return isListLikeIterable(obj);
    };
    DefaultIterableDifferFactory.prototype.create = function(cdRef, trackByFn) {
      return new DefaultIterableDiffer(trackByFn);
    };
    return DefaultIterableDifferFactory;
  }());
  var trackByIdentity = function(index, item) {
    return item;
  };
  var DefaultIterableDiffer = (function() {
    function DefaultIterableDiffer(_trackByFn) {
      this._trackByFn = _trackByFn;
      this._length = null;
      this._collection = null;
      this._linkedRecords = null;
      this._unlinkedRecords = null;
      this._previousItHead = null;
      this._itHead = null;
      this._itTail = null;
      this._additionsHead = null;
      this._additionsTail = null;
      this._movesHead = null;
      this._movesTail = null;
      this._removalsHead = null;
      this._removalsTail = null;
      this._identityChangesHead = null;
      this._identityChangesTail = null;
      this._trackByFn = this._trackByFn || trackByIdentity;
    }
    Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
      get: function() {
        return this._collection;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
      get: function() {
        return this._length;
      },
      enumerable: true,
      configurable: true
    });
    DefaultIterableDiffer.prototype.forEachItem = function(fn) {
      var record;
      for (record = this._itHead; record !== null; record = record._next) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachOperation = function(fn) {
      var nextIt = this._itHead;
      var nextRemove = this._removalsHead;
      var addRemoveOffset = 0;
      var moveOffsets = null;
      while (nextIt || nextRemove) {
        var record = !nextRemove || nextIt && nextIt.currentIndex < getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets) ? nextIt : nextRemove;
        var adjPreviousIndex = getPreviousIndex(record, addRemoveOffset, moveOffsets);
        var currentIndex = record.currentIndex;
        if (record === nextRemove) {
          addRemoveOffset--;
          nextRemove = nextRemove._nextRemoved;
        } else {
          nextIt = nextIt._next;
          if (record.previousIndex == null) {
            addRemoveOffset++;
          } else {
            if (!moveOffsets)
              moveOffsets = [];
            var localMovePreviousIndex = adjPreviousIndex - addRemoveOffset;
            var localCurrentIndex = currentIndex - addRemoveOffset;
            if (localMovePreviousIndex != localCurrentIndex) {
              for (var i = 0; i < localMovePreviousIndex; i++) {
                var offset = i < moveOffsets.length ? moveOffsets[i] : (moveOffsets[i] = 0);
                var index = offset + i;
                if (localCurrentIndex <= index && index < localMovePreviousIndex) {
                  moveOffsets[i] = offset + 1;
                }
              }
              var previousIndex = record.previousIndex;
              moveOffsets[previousIndex] = localCurrentIndex - localMovePreviousIndex;
            }
          }
        }
        if (adjPreviousIndex !== currentIndex) {
          fn(record, adjPreviousIndex, currentIndex);
        }
      }
    };
    DefaultIterableDiffer.prototype.forEachPreviousItem = function(fn) {
      var record;
      for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachAddedItem = function(fn) {
      var record;
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachMovedItem = function(fn) {
      var record;
      for (record = this._movesHead; record !== null; record = record._nextMoved) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachRemovedItem = function(fn) {
      var record;
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.forEachIdentityChange = function(fn) {
      var record;
      for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
        fn(record);
      }
    };
    DefaultIterableDiffer.prototype.diff = function(collection) {
      if (isBlank(collection))
        collection = [];
      if (!isListLikeIterable(collection)) {
        throw new Error("Error trying to diff '" + collection + "'");
      }
      if (this.check(collection)) {
        return this;
      } else {
        return null;
      }
    };
    DefaultIterableDiffer.prototype.onDestroy = function() {};
    DefaultIterableDiffer.prototype.check = function(collection) {
      var _this = this;
      this._reset();
      var record = this._itHead;
      var mayBeDirty = false;
      var index;
      var item;
      var itemTrackBy;
      if (isArray(collection)) {
        var list = collection;
        this._length = collection.length;
        for (index = 0; index < this._length; index++) {
          item = list[index];
          itemTrackBy = this._trackByFn(index, item);
          if (record === null || !looseIdentical(record.trackById, itemTrackBy)) {
            record = this._mismatch(record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = this._verifyReinsertion(record, item, itemTrackBy, index);
            }
            if (!looseIdentical(record.item, item))
              this._addIdentityChange(record, item);
          }
          record = record._next;
        }
      } else {
        index = 0;
        iterateListLike(collection, function(item) {
          itemTrackBy = _this._trackByFn(index, item);
          if (record === null || !looseIdentical(record.trackById, itemTrackBy)) {
            record = _this._mismatch(record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = _this._verifyReinsertion(record, item, itemTrackBy, index);
            }
            if (!looseIdentical(record.item, item))
              _this._addIdentityChange(record, item);
          }
          record = record._next;
          index++;
        });
        this._length = index;
      }
      this._truncate(record);
      this._collection = collection;
      return this.isDirty;
    };
    Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
      get: function() {
        return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null;
      },
      enumerable: true,
      configurable: true
    });
    DefaultIterableDiffer.prototype._reset = function() {
      if (this.isDirty) {
        var record;
        var nextRecord;
        for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
          record._nextPrevious = record._next;
        }
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
          record.previousIndex = record.currentIndex;
        }
        this._additionsHead = this._additionsTail = null;
        for (record = this._movesHead; record !== null; record = nextRecord) {
          record.previousIndex = record.currentIndex;
          nextRecord = record._nextMoved;
        }
        this._movesHead = this._movesTail = null;
        this._removalsHead = this._removalsTail = null;
        this._identityChangesHead = this._identityChangesTail = null;
      }
    };
    DefaultIterableDiffer.prototype._mismatch = function(record, item, itemTrackBy, index) {
      var previousRecord;
      if (record === null) {
        previousRecord = this._itTail;
      } else {
        previousRecord = record._prev;
        this._remove(record);
      }
      record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
      if (record !== null) {
        if (!looseIdentical(record.item, item))
          this._addIdentityChange(record, item);
        this._moveAfter(record, previousRecord, index);
      } else {
        record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
        if (record !== null) {
          if (!looseIdentical(record.item, item))
            this._addIdentityChange(record, item);
          this._reinsertAfter(record, previousRecord, index);
        } else {
          record = this._addAfter(new CollectionChangeRecord(item, itemTrackBy), previousRecord, index);
        }
      }
      return record;
    };
    DefaultIterableDiffer.prototype._verifyReinsertion = function(record, item, itemTrackBy, index) {
      var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
      if (reinsertRecord !== null) {
        record = this._reinsertAfter(reinsertRecord, record._prev, index);
      } else if (record.currentIndex != index) {
        record.currentIndex = index;
        this._addToMoves(record, index);
      }
      return record;
    };
    DefaultIterableDiffer.prototype._truncate = function(record) {
      while (record !== null) {
        var nextRecord = record._next;
        this._addToRemovals(this._unlink(record));
        record = nextRecord;
      }
      if (this._unlinkedRecords !== null) {
        this._unlinkedRecords.clear();
      }
      if (this._additionsTail !== null) {
        this._additionsTail._nextAdded = null;
      }
      if (this._movesTail !== null) {
        this._movesTail._nextMoved = null;
      }
      if (this._itTail !== null) {
        this._itTail._next = null;
      }
      if (this._removalsTail !== null) {
        this._removalsTail._nextRemoved = null;
      }
      if (this._identityChangesTail !== null) {
        this._identityChangesTail._nextIdentityChange = null;
      }
    };
    DefaultIterableDiffer.prototype._reinsertAfter = function(record, prevRecord, index) {
      if (this._unlinkedRecords !== null) {
        this._unlinkedRecords.remove(record);
      }
      var prev = record._prevRemoved;
      var next = record._nextRemoved;
      if (prev === null) {
        this._removalsHead = next;
      } else {
        prev._nextRemoved = next;
      }
      if (next === null) {
        this._removalsTail = prev;
      } else {
        next._prevRemoved = prev;
      }
      this._insertAfter(record, prevRecord, index);
      this._addToMoves(record, index);
      return record;
    };
    DefaultIterableDiffer.prototype._moveAfter = function(record, prevRecord, index) {
      this._unlink(record);
      this._insertAfter(record, prevRecord, index);
      this._addToMoves(record, index);
      return record;
    };
    DefaultIterableDiffer.prototype._addAfter = function(record, prevRecord, index) {
      this._insertAfter(record, prevRecord, index);
      if (this._additionsTail === null) {
        this._additionsTail = this._additionsHead = record;
      } else {
        this._additionsTail = this._additionsTail._nextAdded = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._insertAfter = function(record, prevRecord, index) {
      var next = prevRecord === null ? this._itHead : prevRecord._next;
      record._next = next;
      record._prev = prevRecord;
      if (next === null) {
        this._itTail = record;
      } else {
        next._prev = record;
      }
      if (prevRecord === null) {
        this._itHead = record;
      } else {
        prevRecord._next = record;
      }
      if (this._linkedRecords === null) {
        this._linkedRecords = new _DuplicateMap();
      }
      this._linkedRecords.put(record);
      record.currentIndex = index;
      return record;
    };
    DefaultIterableDiffer.prototype._remove = function(record) {
      return this._addToRemovals(this._unlink(record));
    };
    DefaultIterableDiffer.prototype._unlink = function(record) {
      if (this._linkedRecords !== null) {
        this._linkedRecords.remove(record);
      }
      var prev = record._prev;
      var next = record._next;
      if (prev === null) {
        this._itHead = next;
      } else {
        prev._next = next;
      }
      if (next === null) {
        this._itTail = prev;
      } else {
        next._prev = prev;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addToMoves = function(record, toIndex) {
      if (record.previousIndex === toIndex) {
        return record;
      }
      if (this._movesTail === null) {
        this._movesTail = this._movesHead = record;
      } else {
        this._movesTail = this._movesTail._nextMoved = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addToRemovals = function(record) {
      if (this._unlinkedRecords === null) {
        this._unlinkedRecords = new _DuplicateMap();
      }
      this._unlinkedRecords.put(record);
      record.currentIndex = null;
      record._nextRemoved = null;
      if (this._removalsTail === null) {
        this._removalsTail = this._removalsHead = record;
        record._prevRemoved = null;
      } else {
        record._prevRemoved = this._removalsTail;
        this._removalsTail = this._removalsTail._nextRemoved = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype._addIdentityChange = function(record, item) {
      record.item = item;
      if (this._identityChangesTail === null) {
        this._identityChangesTail = this._identityChangesHead = record;
      } else {
        this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
      }
      return record;
    };
    DefaultIterableDiffer.prototype.toString = function() {
      var list = [];
      this.forEachItem(function(record) {
        return list.push(record);
      });
      var previous = [];
      this.forEachPreviousItem(function(record) {
        return previous.push(record);
      });
      var additions = [];
      this.forEachAddedItem(function(record) {
        return additions.push(record);
      });
      var moves = [];
      this.forEachMovedItem(function(record) {
        return moves.push(record);
      });
      var removals = [];
      this.forEachRemovedItem(function(record) {
        return removals.push(record);
      });
      var identityChanges = [];
      this.forEachIdentityChange(function(record) {
        return identityChanges.push(record);
      });
      return 'collection: ' + list.join(', ') + '\n' + 'previous: ' + previous.join(', ') + '\n' + 'additions: ' + additions.join(', ') + '\n' + 'moves: ' + moves.join(', ') + '\n' + 'removals: ' + removals.join(', ') + '\n' + 'identityChanges: ' + identityChanges.join(', ') + '\n';
    };
    return DefaultIterableDiffer;
  }());
  var CollectionChangeRecord = (function() {
    function CollectionChangeRecord(item, trackById) {
      this.item = item;
      this.trackById = trackById;
      this.currentIndex = null;
      this.previousIndex = null;
      this._nextPrevious = null;
      this._prev = null;
      this._next = null;
      this._prevDup = null;
      this._nextDup = null;
      this._prevRemoved = null;
      this._nextRemoved = null;
      this._nextAdded = null;
      this._nextMoved = null;
      this._nextIdentityChange = null;
    }
    CollectionChangeRecord.prototype.toString = function() {
      return this.previousIndex === this.currentIndex ? stringify(this.item) : stringify(this.item) + '[' + stringify(this.previousIndex) + '->' + stringify(this.currentIndex) + ']';
    };
    return CollectionChangeRecord;
  }());
  var _DuplicateItemRecordList = (function() {
    function _DuplicateItemRecordList() {
      this._head = null;
      this._tail = null;
    }
    _DuplicateItemRecordList.prototype.add = function(record) {
      if (this._head === null) {
        this._head = this._tail = record;
        record._nextDup = null;
        record._prevDup = null;
      } else {
        this._tail._nextDup = record;
        record._prevDup = this._tail;
        record._nextDup = null;
        this._tail = record;
      }
    };
    _DuplicateItemRecordList.prototype.get = function(trackById, afterIndex) {
      var record;
      for (record = this._head; record !== null; record = record._nextDup) {
        if ((afterIndex === null || afterIndex < record.currentIndex) && looseIdentical(record.trackById, trackById)) {
          return record;
        }
      }
      return null;
    };
    _DuplicateItemRecordList.prototype.remove = function(record) {
      var prev = record._prevDup;
      var next = record._nextDup;
      if (prev === null) {
        this._head = next;
      } else {
        prev._nextDup = next;
      }
      if (next === null) {
        this._tail = prev;
      } else {
        next._prevDup = prev;
      }
      return this._head === null;
    };
    return _DuplicateItemRecordList;
  }());
  var _DuplicateMap = (function() {
    function _DuplicateMap() {
      this.map = new Map();
    }
    _DuplicateMap.prototype.put = function(record) {
      var key = getMapKey(record.trackById);
      var duplicates = this.map.get(key);
      if (!isPresent(duplicates)) {
        duplicates = new _DuplicateItemRecordList();
        this.map.set(key, duplicates);
      }
      duplicates.add(record);
    };
    _DuplicateMap.prototype.get = function(trackById, afterIndex) {
      if (afterIndex === void 0) {
        afterIndex = null;
      }
      var key = getMapKey(trackById);
      var recordList = this.map.get(key);
      return recordList ? recordList.get(trackById, afterIndex) : null;
    };
    _DuplicateMap.prototype.remove = function(record) {
      var key = getMapKey(record.trackById);
      var recordList = this.map.get(key);
      if (recordList.remove(record)) {
        this.map.delete(key);
      }
      return record;
    };
    Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
      get: function() {
        return this.map.size === 0;
      },
      enumerable: true,
      configurable: true
    });
    _DuplicateMap.prototype.clear = function() {
      this.map.clear();
    };
    _DuplicateMap.prototype.toString = function() {
      return '_DuplicateMap(' + stringify(this.map) + ')';
    };
    return _DuplicateMap;
  }());
  function getPreviousIndex(item, addRemoveOffset, moveOffsets) {
    var previousIndex = item.previousIndex;
    if (previousIndex === null)
      return previousIndex;
    var moveOffset = 0;
    if (moveOffsets && previousIndex < moveOffsets.length) {
      moveOffset = moveOffsets[previousIndex];
    }
    return previousIndex + addRemoveOffset + moveOffset;
  }
  var DefaultKeyValueDifferFactory = (function() {
    function DefaultKeyValueDifferFactory() {}
    DefaultKeyValueDifferFactory.prototype.supports = function(obj) {
      return obj instanceof Map || isJsObject(obj);
    };
    DefaultKeyValueDifferFactory.prototype.create = function(cdRef) {
      return new DefaultKeyValueDiffer();
    };
    return DefaultKeyValueDifferFactory;
  }());
  var DefaultKeyValueDiffer = (function() {
    function DefaultKeyValueDiffer() {
      this._records = new Map();
      this._mapHead = null;
      this._previousMapHead = null;
      this._changesHead = null;
      this._changesTail = null;
      this._additionsHead = null;
      this._additionsTail = null;
      this._removalsHead = null;
      this._removalsTail = null;
    }
    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
      get: function() {
        return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
      },
      enumerable: true,
      configurable: true
    });
    DefaultKeyValueDiffer.prototype.forEachItem = function(fn) {
      var record;
      for (record = this._mapHead; record !== null; record = record._next) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function(fn) {
      var record;
      for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachChangedItem = function(fn) {
      var record;
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachAddedItem = function(fn) {
      var record;
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function(fn) {
      var record;
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        fn(record);
      }
    };
    DefaultKeyValueDiffer.prototype.diff = function(map) {
      if (!map) {
        map = new Map();
      } else if (!(map instanceof Map || isJsObject(map))) {
        throw new Error("Error trying to diff '" + map + "'");
      }
      return this.check(map) ? this : null;
    };
    DefaultKeyValueDiffer.prototype.onDestroy = function() {};
    DefaultKeyValueDiffer.prototype.check = function(map) {
      var _this = this;
      this._reset();
      var records = this._records;
      var oldSeqRecord = this._mapHead;
      var lastOldSeqRecord = null;
      var lastNewSeqRecord = null;
      var seqChanged = false;
      this._forEach(map, function(value, key) {
        var newSeqRecord;
        if (oldSeqRecord && key === oldSeqRecord.key) {
          newSeqRecord = oldSeqRecord;
          _this._maybeAddToChanges(newSeqRecord, value);
        } else {
          seqChanged = true;
          if (oldSeqRecord !== null) {
            _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
            _this._addToRemovals(oldSeqRecord);
          }
          if (records.has(key)) {
            newSeqRecord = records.get(key);
            _this._maybeAddToChanges(newSeqRecord, value);
          } else {
            newSeqRecord = new KeyValueChangeRecord(key);
            records.set(key, newSeqRecord);
            newSeqRecord.currentValue = value;
            _this._addToAdditions(newSeqRecord);
          }
        }
        if (seqChanged) {
          if (_this._isInRemovals(newSeqRecord)) {
            _this._removeFromRemovals(newSeqRecord);
          }
          if (lastNewSeqRecord == null) {
            _this._mapHead = newSeqRecord;
          } else {
            lastNewSeqRecord._next = newSeqRecord;
          }
        }
        lastOldSeqRecord = oldSeqRecord;
        lastNewSeqRecord = newSeqRecord;
        oldSeqRecord = oldSeqRecord && oldSeqRecord._next;
      });
      this._truncate(lastOldSeqRecord, oldSeqRecord);
      return this.isDirty;
    };
    DefaultKeyValueDiffer.prototype._reset = function() {
      if (this.isDirty) {
        var record = void 0;
        for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
          record._nextPrevious = record._next;
        }
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
          record.previousValue = record.currentValue;
        }
        for (record = this._additionsHead; record != null; record = record._nextAdded) {
          record.previousValue = record.currentValue;
        }
        this._changesHead = this._changesTail = null;
        this._additionsHead = this._additionsTail = null;
        this._removalsHead = this._removalsTail = null;
      }
    };
    DefaultKeyValueDiffer.prototype._truncate = function(lastRecord, record) {
      while (record !== null) {
        if (lastRecord === null) {
          this._mapHead = null;
        } else {
          lastRecord._next = null;
        }
        var nextRecord = record._next;
        this._addToRemovals(record);
        lastRecord = record;
        record = nextRecord;
      }
      for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
        rec.previousValue = rec.currentValue;
        rec.currentValue = null;
        this._records.delete(rec.key);
      }
    };
    DefaultKeyValueDiffer.prototype._maybeAddToChanges = function(record, newValue) {
      if (!looseIdentical(newValue, record.currentValue)) {
        record.previousValue = record.currentValue;
        record.currentValue = newValue;
        this._addToChanges(record);
      }
    };
    DefaultKeyValueDiffer.prototype._isInRemovals = function(record) {
      return record === this._removalsHead || record._nextRemoved !== null || record._prevRemoved !== null;
    };
    DefaultKeyValueDiffer.prototype._addToRemovals = function(record) {
      if (this._removalsHead === null) {
        this._removalsHead = this._removalsTail = record;
      } else {
        this._removalsTail._nextRemoved = record;
        record._prevRemoved = this._removalsTail;
        this._removalsTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype._removeFromSeq = function(prev, record) {
      var next = record._next;
      if (prev === null) {
        this._mapHead = next;
      } else {
        prev._next = next;
      }
      record._next = null;
    };
    DefaultKeyValueDiffer.prototype._removeFromRemovals = function(record) {
      var prev = record._prevRemoved;
      var next = record._nextRemoved;
      if (prev === null) {
        this._removalsHead = next;
      } else {
        prev._nextRemoved = next;
      }
      if (next === null) {
        this._removalsTail = prev;
      } else {
        next._prevRemoved = prev;
      }
      record._prevRemoved = record._nextRemoved = null;
    };
    DefaultKeyValueDiffer.prototype._addToAdditions = function(record) {
      if (this._additionsHead === null) {
        this._additionsHead = this._additionsTail = record;
      } else {
        this._additionsTail._nextAdded = record;
        this._additionsTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype._addToChanges = function(record) {
      if (this._changesHead === null) {
        this._changesHead = this._changesTail = record;
      } else {
        this._changesTail._nextChanged = record;
        this._changesTail = record;
      }
    };
    DefaultKeyValueDiffer.prototype.toString = function() {
      var items = [];
      var previous = [];
      var changes = [];
      var additions = [];
      var removals = [];
      var record;
      for (record = this._mapHead; record !== null; record = record._next) {
        items.push(stringify(record));
      }
      for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
        previous.push(stringify(record));
      }
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        changes.push(stringify(record));
      }
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        additions.push(stringify(record));
      }
      for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
        removals.push(stringify(record));
      }
      return 'map: ' + items.join(', ') + '\n' + 'previous: ' + previous.join(', ') + '\n' + 'additions: ' + additions.join(', ') + '\n' + 'changes: ' + changes.join(', ') + '\n' + 'removals: ' + removals.join(', ') + '\n';
    };
    DefaultKeyValueDiffer.prototype._forEach = function(obj, fn) {
      if (obj instanceof Map) {
        obj.forEach(fn);
      } else {
        Object.keys(obj).forEach(function(k) {
          return fn(obj[k], k);
        });
      }
    };
    return DefaultKeyValueDiffer;
  }());
  var KeyValueChangeRecord = (function() {
    function KeyValueChangeRecord(key) {
      this.key = key;
      this.previousValue = null;
      this.currentValue = null;
      this._nextPrevious = null;
      this._next = null;
      this._nextAdded = null;
      this._nextRemoved = null;
      this._prevRemoved = null;
      this._nextChanged = null;
    }
    KeyValueChangeRecord.prototype.toString = function() {
      return looseIdentical(this.previousValue, this.currentValue) ? stringify(this.key) : (stringify(this.key) + '[' + stringify(this.previousValue) + '->' + stringify(this.currentValue) + ']');
    };
    return KeyValueChangeRecord;
  }());
  var IterableDiffers = (function() {
    function IterableDiffers(factories) {
      this.factories = factories;
    }
    IterableDiffers.create = function(factories, parent) {
      if (isPresent(parent)) {
        var copied = ListWrapper.clone(parent.factories);
        factories = factories.concat(copied);
        return new IterableDiffers(factories);
      } else {
        return new IterableDiffers(factories);
      }
    };
    IterableDiffers.extend = function(factories) {
      return {
        provide: IterableDiffers,
        useFactory: function(parent) {
          if (!parent) {
            throw new Error('Cannot extend IterableDiffers without a parent injector');
          }
          return IterableDiffers.create(factories, parent);
        },
        deps: [[IterableDiffers, new SkipSelf(), new Optional()]]
      };
    };
    IterableDiffers.prototype.find = function(iterable) {
      var factory = this.factories.find(function(f) {
        return f.supports(iterable);
      });
      if (isPresent(factory)) {
        return factory;
      } else {
        throw new Error("Cannot find a differ supporting object '" + iterable + "' of type '" + getTypeNameForDebugging(iterable) + "'");
      }
    };
    return IterableDiffers;
  }());
  var KeyValueDiffers = (function() {
    function KeyValueDiffers(factories) {
      this.factories = factories;
    }
    KeyValueDiffers.create = function(factories, parent) {
      if (isPresent(parent)) {
        var copied = ListWrapper.clone(parent.factories);
        factories = factories.concat(copied);
        return new KeyValueDiffers(factories);
      } else {
        return new KeyValueDiffers(factories);
      }
    };
    KeyValueDiffers.extend = function(factories) {
      return {
        provide: KeyValueDiffers,
        useFactory: function(parent) {
          if (!parent) {
            throw new Error('Cannot extend KeyValueDiffers without a parent injector');
          }
          return KeyValueDiffers.create(factories, parent);
        },
        deps: [[KeyValueDiffers, new SkipSelf(), new Optional()]]
      };
    };
    KeyValueDiffers.prototype.find = function(kv) {
      var factory = this.factories.find(function(f) {
        return f.supports(kv);
      });
      if (isPresent(factory)) {
        return factory;
      } else {
        throw new Error("Cannot find a differ supporting object '" + kv + "'");
      }
    };
    return KeyValueDiffers;
  }());
  var UNINITIALIZED = {toString: function() {
      return 'CD_INIT_VALUE';
    }};
  function devModeEqual(a, b) {
    if (isListLikeIterable(a) && isListLikeIterable(b)) {
      return areIterablesEqual(a, b, devModeEqual);
    } else if (!isListLikeIterable(a) && !isPrimitive(a) && !isListLikeIterable(b) && !isPrimitive(b)) {
      return true;
    } else {
      return looseIdentical(a, b);
    }
  }
  var WrappedValue = (function() {
    function WrappedValue(wrapped) {
      this.wrapped = wrapped;
    }
    WrappedValue.wrap = function(value) {
      return new WrappedValue(value);
    };
    return WrappedValue;
  }());
  var ValueUnwrapper = (function() {
    function ValueUnwrapper() {
      this.hasWrappedValue = false;
    }
    ValueUnwrapper.prototype.unwrap = function(value) {
      if (value instanceof WrappedValue) {
        this.hasWrappedValue = true;
        return value.wrapped;
      }
      return value;
    };
    ValueUnwrapper.prototype.reset = function() {
      this.hasWrappedValue = false;
    };
    return ValueUnwrapper;
  }());
  var SimpleChange = (function() {
    function SimpleChange(previousValue, currentValue) {
      this.previousValue = previousValue;
      this.currentValue = currentValue;
    }
    SimpleChange.prototype.isFirstChange = function() {
      return this.previousValue === UNINITIALIZED;
    };
    return SimpleChange;
  }());
  var ChangeDetectorRef = (function() {
    function ChangeDetectorRef() {}
    return ChangeDetectorRef;
  }());
  var keyValDiff = [new DefaultKeyValueDifferFactory()];
  var iterableDiff = [new DefaultIterableDifferFactory()];
  var defaultIterableDiffers = new IterableDiffers(iterableDiff);
  var defaultKeyValueDiffers = new KeyValueDiffers(keyValDiff);
  var RenderComponentType = (function() {
    function RenderComponentType(id, templateUrl, slotCount, encapsulation, styles, animations) {
      this.id = id;
      this.templateUrl = templateUrl;
      this.slotCount = slotCount;
      this.encapsulation = encapsulation;
      this.styles = styles;
      this.animations = animations;
    }
    return RenderComponentType;
  }());
  var RenderDebugInfo = (function() {
    function RenderDebugInfo() {}
    Object.defineProperty(RenderDebugInfo.prototype, "injector", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "component", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "providerTokens", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "references", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "context", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "source", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return RenderDebugInfo;
  }());
  var Renderer = (function() {
    function Renderer() {}
    return Renderer;
  }());
  var RootRenderer = (function() {
    function RootRenderer() {}
    return RootRenderer;
  }());
  exports.SecurityContext;
  (function(SecurityContext) {
    SecurityContext[SecurityContext["NONE"] = 0] = "NONE";
    SecurityContext[SecurityContext["HTML"] = 1] = "HTML";
    SecurityContext[SecurityContext["STYLE"] = 2] = "STYLE";
    SecurityContext[SecurityContext["SCRIPT"] = 3] = "SCRIPT";
    SecurityContext[SecurityContext["URL"] = 4] = "URL";
    SecurityContext[SecurityContext["RESOURCE_URL"] = 5] = "RESOURCE_URL";
  })(exports.SecurityContext || (exports.SecurityContext = {}));
  var Sanitizer = (function() {
    function Sanitizer() {}
    return Sanitizer;
  }());
  var ElementRef = (function() {
    function ElementRef(nativeElement) {
      this.nativeElement = nativeElement;
    }
    return ElementRef;
  }());
  var trace;
  var events;
  function detectWTF() {
    var wtf = global$1['wtf'];
    if (wtf) {
      trace = wtf['trace'];
      if (trace) {
        events = trace['events'];
        return true;
      }
    }
    return false;
  }
  function createScope(signature, flags) {
    if (flags === void 0) {
      flags = null;
    }
    return events.createScope(signature, flags);
  }
  function leave(scope, returnValue) {
    trace.leaveScope(scope, returnValue);
    return returnValue;
  }
  function startTimeRange(rangeType, action) {
    return trace.beginTimeRange(rangeType, action);
  }
  function endTimeRange(range) {
    trace.endTimeRange(range);
  }
  var wtfEnabled = detectWTF();
  function noopScope(arg0, arg1) {
    return null;
  }
  var wtfCreateScope = wtfEnabled ? createScope : function(signature, flags) {
    return noopScope;
  };
  var wtfLeave = wtfEnabled ? leave : function(s, r) {
    return r;
  };
  var wtfStartTimeRange = wtfEnabled ? startTimeRange : function(rangeType, action) {
    return null;
  };
  var wtfEndTimeRange = wtfEnabled ? endTimeRange : function(r) {
    return null;
  };
  var ViewContainerRef = (function() {
    function ViewContainerRef() {}
    Object.defineProperty(ViewContainerRef.prototype, "element", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef.prototype, "injector", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef.prototype, "parentInjector", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef.prototype, "length", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return ViewContainerRef;
  }());
  var ViewContainerRef_ = (function() {
    function ViewContainerRef_(_element) {
      this._element = _element;
      this._createComponentInContainerScope = wtfCreateScope('ViewContainerRef#createComponent()');
      this._insertScope = wtfCreateScope('ViewContainerRef#insert()');
      this._removeScope = wtfCreateScope('ViewContainerRef#remove()');
      this._detachScope = wtfCreateScope('ViewContainerRef#detach()');
    }
    ViewContainerRef_.prototype.get = function(index) {
      return this._element.nestedViews[index].ref;
    };
    Object.defineProperty(ViewContainerRef_.prototype, "length", {
      get: function() {
        var views = this._element.nestedViews;
        return isPresent(views) ? views.length : 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "element", {
      get: function() {
        return this._element.elementRef;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "injector", {
      get: function() {
        return this._element.injector;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
      get: function() {
        return this._element.parentInjector;
      },
      enumerable: true,
      configurable: true
    });
    ViewContainerRef_.prototype.createEmbeddedView = function(templateRef, context, index) {
      if (context === void 0) {
        context = null;
      }
      if (index === void 0) {
        index = -1;
      }
      var viewRef = templateRef.createEmbeddedView(context);
      this.insert(viewRef, index);
      return viewRef;
    };
    ViewContainerRef_.prototype.createComponent = function(componentFactory, index, injector, projectableNodes) {
      if (index === void 0) {
        index = -1;
      }
      if (injector === void 0) {
        injector = null;
      }
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      var s = this._createComponentInContainerScope();
      var contextInjector = injector || this._element.parentInjector;
      var componentRef = componentFactory.create(contextInjector, projectableNodes);
      this.insert(componentRef.hostView, index);
      return wtfLeave(s, componentRef);
    };
    ViewContainerRef_.prototype.insert = function(viewRef, index) {
      if (index === void 0) {
        index = -1;
      }
      var s = this._insertScope();
      if (index == -1)
        index = this.length;
      var viewRef_ = viewRef;
      this._element.attachView(viewRef_.internalView, index);
      return wtfLeave(s, viewRef_);
    };
    ViewContainerRef_.prototype.move = function(viewRef, currentIndex) {
      var s = this._insertScope();
      if (currentIndex == -1)
        return;
      var viewRef_ = viewRef;
      this._element.moveView(viewRef_.internalView, currentIndex);
      return wtfLeave(s, viewRef_);
    };
    ViewContainerRef_.prototype.indexOf = function(viewRef) {
      return ListWrapper.indexOf(this._element.nestedViews, viewRef.internalView);
    };
    ViewContainerRef_.prototype.remove = function(index) {
      if (index === void 0) {
        index = -1;
      }
      var s = this._removeScope();
      if (index == -1)
        index = this.length - 1;
      var view = this._element.detachView(index);
      view.destroy();
      wtfLeave(s);
    };
    ViewContainerRef_.prototype.detach = function(index) {
      if (index === void 0) {
        index = -1;
      }
      var s = this._detachScope();
      if (index == -1)
        index = this.length - 1;
      var view = this._element.detachView(index);
      return wtfLeave(s, view.ref);
    };
    ViewContainerRef_.prototype.clear = function() {
      for (var i = this.length - 1; i >= 0; i--) {
        this.remove(i);
      }
    };
    return ViewContainerRef_;
  }());
  var ViewType;
  (function(ViewType) {
    ViewType[ViewType["HOST"] = 0] = "HOST";
    ViewType[ViewType["COMPONENT"] = 1] = "COMPONENT";
    ViewType[ViewType["EMBEDDED"] = 2] = "EMBEDDED";
  })(ViewType || (ViewType = {}));
  var AppElement = (function() {
    function AppElement(index, parentIndex, parentView, nativeElement) {
      this.index = index;
      this.parentIndex = parentIndex;
      this.parentView = parentView;
      this.nativeElement = nativeElement;
      this.nestedViews = null;
      this.componentView = null;
    }
    Object.defineProperty(AppElement.prototype, "elementRef", {
      get: function() {
        return new ElementRef(this.nativeElement);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AppElement.prototype, "vcRef", {
      get: function() {
        return new ViewContainerRef_(this);
      },
      enumerable: true,
      configurable: true
    });
    AppElement.prototype.initComponent = function(component, componentConstructorViewQueries, view) {
      this.component = component;
      this.componentConstructorViewQueries = componentConstructorViewQueries;
      this.componentView = view;
    };
    Object.defineProperty(AppElement.prototype, "parentInjector", {
      get: function() {
        return this.parentView.injector(this.parentIndex);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AppElement.prototype, "injector", {
      get: function() {
        return this.parentView.injector(this.index);
      },
      enumerable: true,
      configurable: true
    });
    AppElement.prototype.mapNestedViews = function(nestedViewClass, callback) {
      var result = [];
      if (isPresent(this.nestedViews)) {
        this.nestedViews.forEach(function(nestedView) {
          if (nestedView.clazz === nestedViewClass) {
            result.push(callback(nestedView));
          }
        });
      }
      return result;
    };
    AppElement.prototype.moveView = function(view, currentIndex) {
      var previousIndex = this.nestedViews.indexOf(view);
      if (view.type === ViewType.COMPONENT) {
        throw new Error("Component views can't be moved!");
      }
      var nestedViews = this.nestedViews;
      if (nestedViews == null) {
        nestedViews = [];
        this.nestedViews = nestedViews;
      }
      ListWrapper.removeAt(nestedViews, previousIndex);
      ListWrapper.insert(nestedViews, currentIndex, view);
      var refRenderNode;
      if (currentIndex > 0) {
        var prevView = nestedViews[currentIndex - 1];
        refRenderNode = prevView.lastRootNode;
      } else {
        refRenderNode = this.nativeElement;
      }
      if (isPresent(refRenderNode)) {
        view.renderer.attachViewAfter(refRenderNode, view.flatRootNodes);
      }
      view.markContentChildAsMoved(this);
    };
    AppElement.prototype.attachView = function(view, viewIndex) {
      if (view.type === ViewType.COMPONENT) {
        throw new Error("Component views can't be moved!");
      }
      var nestedViews = this.nestedViews;
      if (nestedViews == null) {
        nestedViews = [];
        this.nestedViews = nestedViews;
      }
      ListWrapper.insert(nestedViews, viewIndex, view);
      var refRenderNode;
      if (viewIndex > 0) {
        var prevView = nestedViews[viewIndex - 1];
        refRenderNode = prevView.lastRootNode;
      } else {
        refRenderNode = this.nativeElement;
      }
      if (isPresent(refRenderNode)) {
        view.renderer.attachViewAfter(refRenderNode, view.flatRootNodes);
      }
      view.addToContentChildren(this);
    };
    AppElement.prototype.detachView = function(viewIndex) {
      var view = ListWrapper.removeAt(this.nestedViews, viewIndex);
      if (view.type === ViewType.COMPONENT) {
        throw new Error("Component views can't be moved!");
      }
      view.detach();
      view.removeFromContentChildren(this);
      return view;
    };
    return AppElement;
  }());
  var __extends$6 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ExpressionChangedAfterItHasBeenCheckedError = (function(_super) {
    __extends$6(ExpressionChangedAfterItHasBeenCheckedError, _super);
    function ExpressionChangedAfterItHasBeenCheckedError(oldValue, currValue) {
      var msg = "Expression has changed after it was checked. Previous value: '" + oldValue + "'. Current value: '" + currValue + "'.";
      if (oldValue === UNINITIALIZED) {
        msg += " It seems like the view has been created after its parent and its children have been dirty checked." + " Has it been created in a change detection hook ?";
      }
      _super.call(this, msg);
    }
    return ExpressionChangedAfterItHasBeenCheckedError;
  }(BaseError));
  var ViewWrappedError = (function(_super) {
    __extends$6(ViewWrappedError, _super);
    function ViewWrappedError(originalError, context) {
      _super.call(this, "Error in " + context.source, originalError);
      this.context = context;
    }
    return ViewWrappedError;
  }(WrappedError));
  var ViewDestroyedError = (function(_super) {
    __extends$6(ViewDestroyedError, _super);
    function ViewDestroyedError(details) {
      _super.call(this, "Attempt to use a destroyed view: " + details);
    }
    return ViewDestroyedError;
  }(BaseError));
  var ViewUtils = (function() {
    function ViewUtils(_renderer, _appId, sanitizer) {
      this._renderer = _renderer;
      this._appId = _appId;
      this._nextCompTypeId = 0;
      this.sanitizer = sanitizer;
    }
    ViewUtils.prototype.createRenderComponentType = function(templateUrl, slotCount, encapsulation, styles, animations) {
      return new RenderComponentType(this._appId + "-" + this._nextCompTypeId++, templateUrl, slotCount, encapsulation, styles, animations);
    };
    ViewUtils.prototype.renderComponent = function(renderComponentType) {
      return this._renderer.renderComponent(renderComponentType);
    };
    ViewUtils.decorators = [{type: Injectable}];
    ViewUtils.ctorParameters = [{type: RootRenderer}, {
      type: undefined,
      decorators: [{
        type: Inject,
        args: [APP_ID]
      }]
    }, {type: Sanitizer}];
    return ViewUtils;
  }());
  function flattenNestedViewRenderNodes(nodes) {
    return _flattenNestedViewRenderNodes(nodes, []);
  }
  function _flattenNestedViewRenderNodes(nodes, renderNodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node instanceof AppElement) {
        var appEl = node;
        renderNodes.push(appEl.nativeElement);
        if (isPresent(appEl.nestedViews)) {
          for (var k = 0; k < appEl.nestedViews.length; k++) {
            _flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements, renderNodes);
          }
        }
      } else {
        renderNodes.push(node);
      }
    }
    return renderNodes;
  }
  var EMPTY_ARR = [];
  function ensureSlotCount(projectableNodes, expectedSlotCount) {
    var res;
    if (!projectableNodes) {
      res = EMPTY_ARR;
    } else if (projectableNodes.length < expectedSlotCount) {
      var givenSlotCount = projectableNodes.length;
      res = new Array(expectedSlotCount);
      for (var i = 0; i < expectedSlotCount; i++) {
        res[i] = (i < givenSlotCount) ? projectableNodes[i] : EMPTY_ARR;
      }
    } else {
      res = projectableNodes;
    }
    return res;
  }
  var MAX_INTERPOLATION_VALUES = 9;
  function interpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
    switch (valueCount) {
      case 1:
        return c0 + _toStringWithNull(a1) + c1;
      case 2:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
      case 3:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3;
      case 4:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4;
      case 5:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
      case 6:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6;
      case 7:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6 + _toStringWithNull(a7) + c7;
      case 8:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
      case 9:
        return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) + c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) + c9;
      default:
        throw new Error("Does not support more than 9 expressions");
    }
  }
  function _toStringWithNull(v) {
    return v != null ? v.toString() : '';
  }
  function checkBinding(throwOnChange, oldValue, newValue) {
    if (throwOnChange) {
      if (!devModeEqual(oldValue, newValue)) {
        throw new ExpressionChangedAfterItHasBeenCheckedError(oldValue, newValue);
      }
      return false;
    } else {
      return !looseIdentical(oldValue, newValue);
    }
  }
  function castByValue(input, value) {
    return input;
  }
  var EMPTY_ARRAY = [];
  var EMPTY_MAP = {};
  function pureProxy1(fn) {
    var result;
    var v0 = UNINITIALIZED;
    return function(p0) {
      if (!looseIdentical(v0, p0)) {
        v0 = p0;
        result = fn(p0);
      }
      return result;
    };
  }
  function pureProxy2(fn) {
    var result;
    var v0 = UNINITIALIZED;
    var v1 = UNINITIALIZED;
    return function(p0, p1) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1)) {
        v0 = p0;
        v1 = p1;
        result = fn(p0, p1);
      }
      return result;
    };
  }
  function pureProxy3(fn) {
    var result;
    var v0 = UNINITIALIZED;
    var v1 = UNINITIALIZED;
    var v2 = UNINITIALIZED;
    return function(p0, p1, p2) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        result = fn(p0, p1, p2);
      }
      return result;
    };
  }
  function pureProxy4(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3;
    v0 = v1 = v2 = v3 = UNINITIALIZED;
    return function(p0, p1, p2, p3) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        result = fn(p0, p1, p2, p3);
      }
      return result;
    };
  }
  function pureProxy5(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4;
    v0 = v1 = v2 = v3 = v4 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        result = fn(p0, p1, p2, p3, p4);
      }
      return result;
    };
  }
  function pureProxy6(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4,
        v5;
    v0 = v1 = v2 = v3 = v4 = v5 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4, p5) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        result = fn(p0, p1, p2, p3, p4, p5);
      }
      return result;
    };
  }
  function pureProxy7(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4,
        v5,
        v6;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4, p5, p6) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        result = fn(p0, p1, p2, p3, p4, p5, p6);
      }
      return result;
    };
  }
  function pureProxy8(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4,
        v5,
        v6,
        v7;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4, p5, p6, p7) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6) || !looseIdentical(v7, p7)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
      }
      return result;
    };
  }
  function pureProxy9(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4,
        v5,
        v6,
        v7,
        v8;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4, p5, p6, p7, p8) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6) || !looseIdentical(v7, p7) || !looseIdentical(v8, p8)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        v8 = p8;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
      }
      return result;
    };
  }
  function pureProxy10(fn) {
    var result;
    var v0,
        v1,
        v2,
        v3,
        v4,
        v5,
        v6,
        v7,
        v8,
        v9;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = UNINITIALIZED;
    return function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
      if (!looseIdentical(v0, p0) || !looseIdentical(v1, p1) || !looseIdentical(v2, p2) || !looseIdentical(v3, p3) || !looseIdentical(v4, p4) || !looseIdentical(v5, p5) || !looseIdentical(v6, p6) || !looseIdentical(v7, p7) || !looseIdentical(v8, p8) || !looseIdentical(v9, p9)) {
        v0 = p0;
        v1 = p1;
        v2 = p2;
        v3 = p3;
        v4 = p4;
        v5 = p5;
        v6 = p6;
        v7 = p7;
        v8 = p8;
        v9 = p9;
        result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
      }
      return result;
    };
  }
  var __extends$5 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ComponentRef = (function() {
    function ComponentRef() {}
    Object.defineProperty(ComponentRef.prototype, "location", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "injector", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "instance", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ComponentRef.prototype, "hostView", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ComponentRef.prototype, "changeDetectorRef", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "componentType", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return ComponentRef;
  }());
  var ComponentRef_ = (function(_super) {
    __extends$5(ComponentRef_, _super);
    function ComponentRef_(_hostElement, _componentType) {
      _super.call(this);
      this._hostElement = _hostElement;
      this._componentType = _componentType;
    }
    Object.defineProperty(ComponentRef_.prototype, "location", {
      get: function() {
        return this._hostElement.elementRef;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef_.prototype, "injector", {
      get: function() {
        return this._hostElement.injector;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ComponentRef_.prototype, "instance", {
      get: function() {
        return this._hostElement.component;
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "hostView", {
      get: function() {
        return this._hostElement.parentView.ref;
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "changeDetectorRef", {
      get: function() {
        return this._hostElement.parentView.ref;
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "componentType", {
      get: function() {
        return this._componentType;
      },
      enumerable: true,
      configurable: true
    });
    ComponentRef_.prototype.destroy = function() {
      this._hostElement.parentView.destroy();
    };
    ComponentRef_.prototype.onDestroy = function(callback) {
      this.hostView.onDestroy(callback);
    };
    return ComponentRef_;
  }(ComponentRef));
  var EMPTY_CONTEXT = new Object();
  var ComponentFactory = (function() {
    function ComponentFactory(selector, _viewFactory, _componentType) {
      this.selector = selector;
      this._viewFactory = _viewFactory;
      this._componentType = _componentType;
    }
    Object.defineProperty(ComponentFactory.prototype, "componentType", {
      get: function() {
        return this._componentType;
      },
      enumerable: true,
      configurable: true
    });
    ComponentFactory.prototype.create = function(injector, projectableNodes, rootSelectorOrNode) {
      if (projectableNodes === void 0) {
        projectableNodes = null;
      }
      if (rootSelectorOrNode === void 0) {
        rootSelectorOrNode = null;
      }
      var vu = injector.get(ViewUtils);
      if (!projectableNodes) {
        projectableNodes = [];
      }
      var hostView = this._viewFactory(vu, injector, null);
      var hostElement = hostView.create(EMPTY_CONTEXT, projectableNodes, rootSelectorOrNode);
      return new ComponentRef_(hostElement, this._componentType);
    };
    return ComponentFactory;
  }());
  var __extends$7 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var NoComponentFactoryError = (function(_super) {
    __extends$7(NoComponentFactoryError, _super);
    function NoComponentFactoryError(component) {
      _super.call(this, "No component factory found for " + stringify(component));
      this.component = component;
    }
    return NoComponentFactoryError;
  }(BaseError));
  var _NullComponentFactoryResolver = (function() {
    function _NullComponentFactoryResolver() {}
    _NullComponentFactoryResolver.prototype.resolveComponentFactory = function(component) {
      throw new NoComponentFactoryError(component);
    };
    return _NullComponentFactoryResolver;
  }());
  var ComponentFactoryResolver = (function() {
    function ComponentFactoryResolver() {}
    ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver();
    return ComponentFactoryResolver;
  }());
  var CodegenComponentFactoryResolver = (function() {
    function CodegenComponentFactoryResolver(factories, _parent) {
      this._parent = _parent;
      this._factories = new Map();
      for (var i = 0; i < factories.length; i++) {
        var factory = factories[i];
        this._factories.set(factory.componentType, factory);
      }
    }
    CodegenComponentFactoryResolver.prototype.resolveComponentFactory = function(component) {
      var result = this._factories.get(component);
      if (!result) {
        result = this._parent.resolveComponentFactory(component);
      }
      return result;
    };
    return CodegenComponentFactoryResolver;
  }());
  var __extends$8 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var EventEmitter = (function(_super) {
    __extends$8(EventEmitter, _super);
    function EventEmitter(isAsync) {
      if (isAsync === void 0) {
        isAsync = false;
      }
      _super.call(this);
      this.__isAsync = isAsync;
    }
    EventEmitter.prototype.emit = function(value) {
      _super.prototype.next.call(this, value);
    };
    EventEmitter.prototype.subscribe = function(generatorOrNext, error, complete) {
      var schedulerFn;
      var errorFn = function(err) {
        return null;
      };
      var completeFn = function() {
        return null;
      };
      if (generatorOrNext && typeof generatorOrNext === 'object') {
        schedulerFn = this.__isAsync ? function(value) {
          setTimeout(function() {
            return generatorOrNext.next(value);
          });
        } : function(value) {
          generatorOrNext.next(value);
        };
        if (generatorOrNext.error) {
          errorFn = this.__isAsync ? function(err) {
            setTimeout(function() {
              return generatorOrNext.error(err);
            });
          } : function(err) {
            generatorOrNext.error(err);
          };
        }
        if (generatorOrNext.complete) {
          completeFn = this.__isAsync ? function() {
            setTimeout(function() {
              return generatorOrNext.complete();
            });
          } : function() {
            generatorOrNext.complete();
          };
        }
      } else {
        schedulerFn = this.__isAsync ? function(value) {
          setTimeout(function() {
            return generatorOrNext(value);
          });
        } : function(value) {
          generatorOrNext(value);
        };
        if (error) {
          errorFn = this.__isAsync ? function(err) {
            setTimeout(function() {
              return error(err);
            });
          } : function(err) {
            error(err);
          };
        }
        if (complete) {
          completeFn = this.__isAsync ? function() {
            setTimeout(function() {
              return complete();
            });
          } : function() {
            complete();
          };
        }
      }
      return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
    };
    return EventEmitter;
  }(rxjs_Subject.Subject));
  var NgZone = (function() {
    function NgZone(_a) {
      var _b = _a.enableLongStackTrace,
          enableLongStackTrace = _b === void 0 ? false : _b;
      this._hasPendingMicrotasks = false;
      this._hasPendingMacrotasks = false;
      this._isStable = true;
      this._nesting = 0;
      this._onUnstable = new EventEmitter(false);
      this._onMicrotaskEmpty = new EventEmitter(false);
      this._onStable = new EventEmitter(false);
      this._onErrorEvents = new EventEmitter(false);
      if (typeof Zone == 'undefined') {
        throw new Error('Angular requires Zone.js prolyfill.');
      }
      Zone.assertZonePatched();
      this.outer = this.inner = Zone.current;
      if (Zone['wtfZoneSpec']) {
        this.inner = this.inner.fork(Zone['wtfZoneSpec']);
      }
      if (enableLongStackTrace && Zone['longStackTraceZoneSpec']) {
        this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
      }
      this.forkInnerZoneWithAngularBehavior();
    }
    NgZone.isInAngularZone = function() {
      return Zone.current.get('isAngularZone') === true;
    };
    NgZone.assertInAngularZone = function() {
      if (!NgZone.isInAngularZone()) {
        throw new Error('Expected to be in Angular Zone, but it is not!');
      }
    };
    NgZone.assertNotInAngularZone = function() {
      if (NgZone.isInAngularZone()) {
        throw new Error('Expected to not be in Angular Zone, but it is!');
      }
    };
    NgZone.prototype.run = function(fn) {
      return this.inner.run(fn);
    };
    NgZone.prototype.runGuarded = function(fn) {
      return this.inner.runGuarded(fn);
    };
    NgZone.prototype.runOutsideAngular = function(fn) {
      return this.outer.run(fn);
    };
    Object.defineProperty(NgZone.prototype, "onUnstable", {
      get: function() {
        return this._onUnstable;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onMicrotaskEmpty", {
      get: function() {
        return this._onMicrotaskEmpty;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onStable", {
      get: function() {
        return this._onStable;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onError", {
      get: function() {
        return this._onErrorEvents;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "isStable", {
      get: function() {
        return this._isStable;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
      get: function() {
        return this._hasPendingMicrotasks;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingMacrotasks", {
      get: function() {
        return this._hasPendingMacrotasks;
      },
      enumerable: true,
      configurable: true
    });
    NgZone.prototype.checkStable = function() {
      var _this = this;
      if (this._nesting == 0 && !this._hasPendingMicrotasks && !this._isStable) {
        try {
          this._nesting++;
          this._onMicrotaskEmpty.emit(null);
        } finally {
          this._nesting--;
          if (!this._hasPendingMicrotasks) {
            try {
              this.runOutsideAngular(function() {
                return _this._onStable.emit(null);
              });
            } finally {
              this._isStable = true;
            }
          }
        }
      }
    };
    NgZone.prototype.forkInnerZoneWithAngularBehavior = function() {
      var _this = this;
      this.inner = this.inner.fork({
        name: 'angular',
        properties: {'isAngularZone': true},
        onInvokeTask: function(delegate, current, target, task, applyThis, applyArgs) {
          try {
            _this.onEnter();
            return delegate.invokeTask(target, task, applyThis, applyArgs);
          } finally {
            _this.onLeave();
          }
        },
        onInvoke: function(delegate, current, target, callback, applyThis, applyArgs, source) {
          try {
            _this.onEnter();
            return delegate.invoke(target, callback, applyThis, applyArgs, source);
          } finally {
            _this.onLeave();
          }
        },
        onHasTask: function(delegate, current, target, hasTaskState) {
          delegate.hasTask(target, hasTaskState);
          if (current === target) {
            if (hasTaskState.change == 'microTask') {
              _this.setHasMicrotask(hasTaskState.microTask);
            } else if (hasTaskState.change == 'macroTask') {
              _this.setHasMacrotask(hasTaskState.macroTask);
            }
          }
        },
        onHandleError: function(delegate, current, target, error) {
          delegate.handleError(target, error);
          _this.triggerError(error);
          return false;
        }
      });
    };
    NgZone.prototype.onEnter = function() {
      this._nesting++;
      if (this._isStable) {
        this._isStable = false;
        this._onUnstable.emit(null);
      }
    };
    NgZone.prototype.onLeave = function() {
      this._nesting--;
      this.checkStable();
    };
    NgZone.prototype.setHasMicrotask = function(hasMicrotasks) {
      this._hasPendingMicrotasks = hasMicrotasks;
      this.checkStable();
    };
    NgZone.prototype.setHasMacrotask = function(hasMacrotasks) {
      this._hasPendingMacrotasks = hasMacrotasks;
    };
    NgZone.prototype.triggerError = function(error) {
      this._onErrorEvents.emit(error);
    };
    return NgZone;
  }());
  var Testability = (function() {
    function Testability(_ngZone) {
      this._ngZone = _ngZone;
      this._pendingCount = 0;
      this._isZoneStable = true;
      this._didWork = false;
      this._callbacks = [];
      this._watchAngularEvents();
    }
    Testability.prototype._watchAngularEvents = function() {
      var _this = this;
      this._ngZone.onUnstable.subscribe({next: function() {
          _this._didWork = true;
          _this._isZoneStable = false;
        }});
      this._ngZone.runOutsideAngular(function() {
        _this._ngZone.onStable.subscribe({next: function() {
            NgZone.assertNotInAngularZone();
            scheduleMicroTask(function() {
              _this._isZoneStable = true;
              _this._runCallbacksIfReady();
            });
          }});
      });
    };
    Testability.prototype.increasePendingRequestCount = function() {
      this._pendingCount += 1;
      this._didWork = true;
      return this._pendingCount;
    };
    Testability.prototype.decreasePendingRequestCount = function() {
      this._pendingCount -= 1;
      if (this._pendingCount < 0) {
        throw new Error('pending async requests below zero');
      }
      this._runCallbacksIfReady();
      return this._pendingCount;
    };
    Testability.prototype.isStable = function() {
      return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
    };
    Testability.prototype._runCallbacksIfReady = function() {
      var _this = this;
      if (this.isStable()) {
        scheduleMicroTask(function() {
          while (_this._callbacks.length !== 0) {
            (_this._callbacks.pop())(_this._didWork);
          }
          _this._didWork = false;
        });
      } else {
        this._didWork = true;
      }
    };
    Testability.prototype.whenStable = function(callback) {
      this._callbacks.push(callback);
      this._runCallbacksIfReady();
    };
    Testability.prototype.getPendingRequestCount = function() {
      return this._pendingCount;
    };
    Testability.prototype.findBindings = function(using, provider, exactMatch) {
      return [];
    };
    Testability.prototype.findProviders = function(using, provider, exactMatch) {
      return [];
    };
    Testability.decorators = [{type: Injectable}];
    Testability.ctorParameters = [{type: NgZone}];
    return Testability;
  }());
  var TestabilityRegistry = (function() {
    function TestabilityRegistry() {
      this._applications = new Map();
      _testabilityGetter.addToWindow(this);
    }
    TestabilityRegistry.prototype.registerApplication = function(token, testability) {
      this._applications.set(token, testability);
    };
    TestabilityRegistry.prototype.getTestability = function(elem) {
      return this._applications.get(elem);
    };
    TestabilityRegistry.prototype.getAllTestabilities = function() {
      return MapWrapper.values(this._applications);
    };
    TestabilityRegistry.prototype.getAllRootElements = function() {
      return MapWrapper.keys(this._applications);
    };
    TestabilityRegistry.prototype.findTestabilityInTree = function(elem, findInAncestors) {
      if (findInAncestors === void 0) {
        findInAncestors = true;
      }
      return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
    };
    TestabilityRegistry.decorators = [{type: Injectable}];
    TestabilityRegistry.ctorParameters = [];
    return TestabilityRegistry;
  }());
  var _NoopGetTestability = (function() {
    function _NoopGetTestability() {}
    _NoopGetTestability.prototype.addToWindow = function(registry) {};
    _NoopGetTestability.prototype.findTestabilityInTree = function(registry, elem, findInAncestors) {
      return null;
    };
    return _NoopGetTestability;
  }());
  function setTestabilityGetter(getter) {
    _testabilityGetter = getter;
  }
  var _testabilityGetter = new _NoopGetTestability();
  var __extends$3 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var _devMode = true;
  var _runModeLocked = false;
  var _platform;
  function enableProdMode() {
    if (_runModeLocked) {
      throw new Error('Cannot enable prod mode after platform setup.');
    }
    _devMode = false;
  }
  function isDevMode() {
    _runModeLocked = true;
    return _devMode;
  }
  function createPlatform(injector) {
    if (_platform && !_platform.destroyed) {
      throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
    }
    _platform = injector.get(PlatformRef);
    var inits = injector.get(PLATFORM_INITIALIZER, null);
    if (inits)
      inits.forEach(function(init) {
        return init();
      });
    return _platform;
  }
  function createPlatformFactory(parentPlaformFactory, name, providers) {
    if (providers === void 0) {
      providers = [];
    }
    var marker = new OpaqueToken("Platform: " + name);
    return function(extraProviders) {
      if (extraProviders === void 0) {
        extraProviders = [];
      }
      if (!getPlatform()) {
        if (parentPlaformFactory) {
          parentPlaformFactory(providers.concat(extraProviders).concat({
            provide: marker,
            useValue: true
          }));
        } else {
          createPlatform(ReflectiveInjector.resolveAndCreate(providers.concat(extraProviders).concat({
            provide: marker,
            useValue: true
          })));
        }
      }
      return assertPlatform(marker);
    };
  }
  function assertPlatform(requiredToken) {
    var platform = getPlatform();
    if (!platform) {
      throw new Error('No platform exists!');
    }
    if (!platform.injector.get(requiredToken, null)) {
      throw new Error('A platform with a different configuration has been created. Please destroy it first.');
    }
    return platform;
  }
  function destroyPlatform() {
    if (_platform && !_platform.destroyed) {
      _platform.destroy();
    }
  }
  function getPlatform() {
    return _platform && !_platform.destroyed ? _platform : null;
  }
  var PlatformRef = (function() {
    function PlatformRef() {}
    PlatformRef.prototype.bootstrapModuleFactory = function(moduleFactory) {
      throw unimplemented();
    };
    PlatformRef.prototype.bootstrapModule = function(moduleType, compilerOptions) {
      if (compilerOptions === void 0) {
        compilerOptions = [];
      }
      throw unimplemented();
    };
    Object.defineProperty(PlatformRef.prototype, "injector", {
      get: function() {
        throw unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(PlatformRef.prototype, "destroyed", {
      get: function() {
        throw unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return PlatformRef;
  }());
  function _callAndReportToErrorHandler(errorHandler, callback) {
    try {
      var result = callback();
      if (isPromise(result)) {
        return result.catch(function(e) {
          errorHandler.handleError(e);
          throw e;
        });
      }
      return result;
    } catch (e) {
      errorHandler.handleError(e);
      throw e;
    }
  }
  var PlatformRef_ = (function(_super) {
    __extends$3(PlatformRef_, _super);
    function PlatformRef_(_injector) {
      _super.call(this);
      this._injector = _injector;
      this._modules = [];
      this._destroyListeners = [];
      this._destroyed = false;
    }
    PlatformRef_.prototype.onDestroy = function(callback) {
      this._destroyListeners.push(callback);
    };
    Object.defineProperty(PlatformRef_.prototype, "injector", {
      get: function() {
        return this._injector;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(PlatformRef_.prototype, "destroyed", {
      get: function() {
        return this._destroyed;
      },
      enumerable: true,
      configurable: true
    });
    PlatformRef_.prototype.destroy = function() {
      if (this._destroyed) {
        throw new Error('The platform has already been destroyed!');
      }
      this._modules.slice().forEach(function(module) {
        return module.destroy();
      });
      this._destroyListeners.forEach(function(listener) {
        return listener();
      });
      this._destroyed = true;
    };
    PlatformRef_.prototype.bootstrapModuleFactory = function(moduleFactory) {
      return this._bootstrapModuleFactoryWithZone(moduleFactory, null);
    };
    PlatformRef_.prototype._bootstrapModuleFactoryWithZone = function(moduleFactory, ngZone) {
      var _this = this;
      if (!ngZone)
        ngZone = new NgZone({enableLongStackTrace: isDevMode()});
      return ngZone.run(function() {
        var ngZoneInjector = ReflectiveInjector.resolveAndCreate([{
          provide: NgZone,
          useValue: ngZone
        }], _this.injector);
        var moduleRef = moduleFactory.create(ngZoneInjector);
        var exceptionHandler = moduleRef.injector.get(ErrorHandler, null);
        if (!exceptionHandler) {
          throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
        }
        moduleRef.onDestroy(function() {
          return ListWrapper.remove(_this._modules, moduleRef);
        });
        ngZone.onError.subscribe({next: function(error) {
            exceptionHandler.handleError(error);
          }});
        return _callAndReportToErrorHandler(exceptionHandler, function() {
          var initStatus = moduleRef.injector.get(ApplicationInitStatus);
          return initStatus.donePromise.then(function() {
            _this._moduleDoBootstrap(moduleRef);
            return moduleRef;
          });
        });
      });
    };
    PlatformRef_.prototype.bootstrapModule = function(moduleType, compilerOptions) {
      if (compilerOptions === void 0) {
        compilerOptions = [];
      }
      return this._bootstrapModuleWithZone(moduleType, compilerOptions, null);
    };
    PlatformRef_.prototype._bootstrapModuleWithZone = function(moduleType, compilerOptions, ngZone, componentFactoryCallback) {
      var _this = this;
      if (compilerOptions === void 0) {
        compilerOptions = [];
      }
      var compilerFactory = this.injector.get(CompilerFactory);
      var compiler = compilerFactory.createCompiler(Array.isArray(compilerOptions) ? compilerOptions : [compilerOptions]);
      if (componentFactoryCallback) {
        return compiler.compileModuleAndAllComponentsAsync(moduleType).then(function(_a) {
          var ngModuleFactory = _a.ngModuleFactory,
              componentFactories = _a.componentFactories;
          componentFactoryCallback(componentFactories);
          return _this._bootstrapModuleFactoryWithZone(ngModuleFactory, ngZone);
        });
      }
      return compiler.compileModuleAsync(moduleType).then(function(moduleFactory) {
        return _this._bootstrapModuleFactoryWithZone(moduleFactory, ngZone);
      });
    };
    PlatformRef_.prototype._moduleDoBootstrap = function(moduleRef) {
      var appRef = moduleRef.injector.get(ApplicationRef);
      if (moduleRef.bootstrapFactories.length > 0) {
        moduleRef.bootstrapFactories.forEach(function(compFactory) {
          return appRef.bootstrap(compFactory);
        });
      } else if (moduleRef.instance.ngDoBootstrap) {
        moduleRef.instance.ngDoBootstrap(appRef);
      } else {
        throw new Error(("The module " + stringify(moduleRef.instance.constructor) + " was bootstrapped, but it does not declare \"@NgModule.bootstrap\" components nor a \"ngDoBootstrap\" method. ") + "Please define one of these.");
      }
    };
    PlatformRef_.decorators = [{type: Injectable}];
    PlatformRef_.ctorParameters = [{type: Injector}];
    return PlatformRef_;
  }(PlatformRef));
  var ApplicationRef = (function() {
    function ApplicationRef() {}
    Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    Object.defineProperty(ApplicationRef.prototype, "components", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return ApplicationRef;
  }());
  var ApplicationRef_ = (function(_super) {
    __extends$3(ApplicationRef_, _super);
    function ApplicationRef_(_zone, _console, _injector, _exceptionHandler, _componentFactoryResolver, _initStatus, _testabilityRegistry, _testability) {
      var _this = this;
      _super.call(this);
      this._zone = _zone;
      this._console = _console;
      this._injector = _injector;
      this._exceptionHandler = _exceptionHandler;
      this._componentFactoryResolver = _componentFactoryResolver;
      this._initStatus = _initStatus;
      this._testabilityRegistry = _testabilityRegistry;
      this._testability = _testability;
      this._bootstrapListeners = [];
      this._rootComponents = [];
      this._rootComponentTypes = [];
      this._changeDetectorRefs = [];
      this._runningTick = false;
      this._enforceNoNewChanges = false;
      this._enforceNoNewChanges = isDevMode();
      this._zone.onMicrotaskEmpty.subscribe({next: function() {
          _this._zone.run(function() {
            _this.tick();
          });
        }});
    }
    ApplicationRef_.prototype.registerChangeDetector = function(changeDetector) {
      this._changeDetectorRefs.push(changeDetector);
    };
    ApplicationRef_.prototype.unregisterChangeDetector = function(changeDetector) {
      ListWrapper.remove(this._changeDetectorRefs, changeDetector);
    };
    ApplicationRef_.prototype.bootstrap = function(componentOrFactory) {
      var _this = this;
      if (!this._initStatus.done) {
        throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
      }
      var componentFactory;
      if (componentOrFactory instanceof ComponentFactory) {
        componentFactory = componentOrFactory;
      } else {
        componentFactory = this._componentFactoryResolver.resolveComponentFactory(componentOrFactory);
      }
      this._rootComponentTypes.push(componentFactory.componentType);
      var compRef = componentFactory.create(this._injector, [], componentFactory.selector);
      compRef.onDestroy(function() {
        _this._unloadComponent(compRef);
      });
      var testability = compRef.injector.get(Testability, null);
      if (testability) {
        compRef.injector.get(TestabilityRegistry).registerApplication(compRef.location.nativeElement, testability);
      }
      this._loadComponent(compRef);
      if (isDevMode()) {
        this._console.log("Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.");
      }
      return compRef;
    };
    ApplicationRef_.prototype._loadComponent = function(componentRef) {
      this._changeDetectorRefs.push(componentRef.changeDetectorRef);
      this.tick();
      this._rootComponents.push(componentRef);
      var listeners = this._injector.get(APP_BOOTSTRAP_LISTENER, []).concat(this._bootstrapListeners);
      listeners.forEach(function(listener) {
        return listener(componentRef);
      });
    };
    ApplicationRef_.prototype._unloadComponent = function(componentRef) {
      if (this._rootComponents.indexOf(componentRef) == -1) {
        return;
      }
      this.unregisterChangeDetector(componentRef.changeDetectorRef);
      ListWrapper.remove(this._rootComponents, componentRef);
    };
    ApplicationRef_.prototype.tick = function() {
      if (this._runningTick) {
        throw new Error('ApplicationRef.tick is called recursively');
      }
      var scope = ApplicationRef_._tickScope();
      try {
        this._runningTick = true;
        this._changeDetectorRefs.forEach(function(detector) {
          return detector.detectChanges();
        });
        if (this._enforceNoNewChanges) {
          this._changeDetectorRefs.forEach(function(detector) {
            return detector.checkNoChanges();
          });
        }
      } finally {
        this._runningTick = false;
        wtfLeave(scope);
      }
    };
    ApplicationRef_.prototype.ngOnDestroy = function() {
      this._rootComponents.slice().forEach(function(component) {
        return component.destroy();
      });
    };
    Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
      get: function() {
        return this._rootComponentTypes;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ApplicationRef_.prototype, "components", {
      get: function() {
        return this._rootComponents;
      },
      enumerable: true,
      configurable: true
    });
    ApplicationRef_._tickScope = wtfCreateScope('ApplicationRef#tick()');
    ApplicationRef_.decorators = [{type: Injectable}];
    ApplicationRef_.ctorParameters = [{type: NgZone}, {type: Console}, {type: Injector}, {type: ErrorHandler}, {type: ComponentFactoryResolver}, {type: ApplicationInitStatus}, {
      type: TestabilityRegistry,
      decorators: [{type: Optional}]
    }, {
      type: Testability,
      decorators: [{type: Optional}]
    }];
    return ApplicationRef_;
  }(ApplicationRef));
  var __extends$9 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var NgModuleRef = (function() {
    function NgModuleRef() {}
    Object.defineProperty(NgModuleRef.prototype, "injector", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgModuleRef.prototype, "componentFactoryResolver", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgModuleRef.prototype, "instance", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return NgModuleRef;
  }());
  var NgModuleFactory = (function() {
    function NgModuleFactory(_injectorClass, _moduleType) {
      this._injectorClass = _injectorClass;
      this._moduleType = _moduleType;
    }
    Object.defineProperty(NgModuleFactory.prototype, "moduleType", {
      get: function() {
        return this._moduleType;
      },
      enumerable: true,
      configurable: true
    });
    NgModuleFactory.prototype.create = function(parentInjector) {
      if (!parentInjector) {
        parentInjector = Injector.NULL;
      }
      var instance = new this._injectorClass(parentInjector);
      instance.create();
      return instance;
    };
    return NgModuleFactory;
  }());
  var _UNDEFINED = new Object();
  var NgModuleInjector = (function(_super) {
    __extends$9(NgModuleInjector, _super);
    function NgModuleInjector(parent, factories, bootstrapFactories) {
      _super.call(this, factories, parent.get(ComponentFactoryResolver, ComponentFactoryResolver.NULL));
      this.parent = parent;
      this.bootstrapFactories = bootstrapFactories;
      this._destroyListeners = [];
      this._destroyed = false;
    }
    NgModuleInjector.prototype.create = function() {
      this.instance = this.createInternal();
    };
    NgModuleInjector.prototype.get = function(token, notFoundValue) {
      if (notFoundValue === void 0) {
        notFoundValue = THROW_IF_NOT_FOUND;
      }
      if (token === Injector || token === ComponentFactoryResolver) {
        return this;
      }
      var result = this.getInternal(token, _UNDEFINED);
      return result === _UNDEFINED ? this.parent.get(token, notFoundValue) : result;
    };
    Object.defineProperty(NgModuleInjector.prototype, "injector", {
      get: function() {
        return this;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(NgModuleInjector.prototype, "componentFactoryResolver", {
      get: function() {
        return this;
      },
      enumerable: true,
      configurable: true
    });
    NgModuleInjector.prototype.destroy = function() {
      if (this._destroyed) {
        throw new Error("The ng module " + stringify(this.instance.constructor) + " has already been destroyed.");
      }
      this._destroyed = true;
      this.destroyInternal();
      this._destroyListeners.forEach(function(listener) {
        return listener();
      });
    };
    NgModuleInjector.prototype.onDestroy = function(callback) {
      this._destroyListeners.push(callback);
    };
    return NgModuleInjector;
  }(CodegenComponentFactoryResolver));
  var NgModuleFactoryLoader = (function() {
    function NgModuleFactoryLoader() {}
    return NgModuleFactoryLoader;
  }());
  var moduleFactories = new Map();
  function registerModuleFactory(id, factory) {
    var existing = moduleFactories.get(id);
    if (existing) {
      throw new Error("Duplicate module registered for " + id + " - " + existing.moduleType.name + " vs " + factory.moduleType.name);
    }
    moduleFactories.set(id, factory);
  }
  function getModuleFactory(id) {
    var factory = moduleFactories.get(id);
    if (!factory)
      throw new Error("No module with ID " + id + " loaded");
    return factory;
  }
  var QueryList = (function() {
    function QueryList() {
      this._dirty = true;
      this._results = [];
      this._emitter = new EventEmitter();
    }
    Object.defineProperty(QueryList.prototype, "changes", {
      get: function() {
        return this._emitter;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "length", {
      get: function() {
        return this._results.length;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "first", {
      get: function() {
        return this._results[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(QueryList.prototype, "last", {
      get: function() {
        return this._results[this.length - 1];
      },
      enumerable: true,
      configurable: true
    });
    QueryList.prototype.map = function(fn) {
      return this._results.map(fn);
    };
    QueryList.prototype.filter = function(fn) {
      return this._results.filter(fn);
    };
    QueryList.prototype.reduce = function(fn, init) {
      return this._results.reduce(fn, init);
    };
    QueryList.prototype.forEach = function(fn) {
      this._results.forEach(fn);
    };
    QueryList.prototype.some = function(fn) {
      return this._results.some(fn);
    };
    QueryList.prototype.toArray = function() {
      return this._results.slice();
    };
    QueryList.prototype[getSymbolIterator()] = function() {
      return this._results[getSymbolIterator()]();
    };
    QueryList.prototype.toString = function() {
      return this._results.toString();
    };
    QueryList.prototype.reset = function(res) {
      this._results = ListWrapper.flatten(res);
      this._dirty = false;
    };
    QueryList.prototype.notifyOnChanges = function() {
      this._emitter.emit(this);
    };
    QueryList.prototype.setDirty = function() {
      this._dirty = true;
    };
    Object.defineProperty(QueryList.prototype, "dirty", {
      get: function() {
        return this._dirty;
      },
      enumerable: true,
      configurable: true
    });
    return QueryList;
  }());
  var _SEPARATOR = '#';
  var FACTORY_CLASS_SUFFIX = 'NgFactory';
  var SystemJsNgModuleLoaderConfig = (function() {
    function SystemJsNgModuleLoaderConfig() {}
    return SystemJsNgModuleLoaderConfig;
  }());
  var DEFAULT_CONFIG = {
    factoryPathPrefix: '',
    factoryPathSuffix: '.ngfactory'
  };
  var SystemJsNgModuleLoader = (function() {
    function SystemJsNgModuleLoader(_compiler, config) {
      this._compiler = _compiler;
      this._config = config || DEFAULT_CONFIG;
    }
    SystemJsNgModuleLoader.prototype.load = function(path) {
      var offlineMode = this._compiler instanceof Compiler;
      return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    SystemJsNgModuleLoader.prototype.loadAndCompile = function(path) {
      var _this = this;
      var _a = path.split(_SEPARATOR),
          module = _a[0],
          exportName = _a[1];
      if (exportName === undefined)
        exportName = 'default';
      return System.import(module).then(function(module) {
        return module[exportName];
      }).then(function(type) {
        return checkNotEmpty(type, module, exportName);
      }).then(function(type) {
        return _this._compiler.compileModuleAsync(type);
      });
    };
    SystemJsNgModuleLoader.prototype.loadFactory = function(path) {
      var _a = path.split(_SEPARATOR),
          module = _a[0],
          exportName = _a[1];
      var factoryClassSuffix = FACTORY_CLASS_SUFFIX;
      if (exportName === undefined) {
        exportName = 'default';
        factoryClassSuffix = '';
      }
      return System.import(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix).then(function(module) {
        return module[exportName + factoryClassSuffix];
      }).then(function(factory) {
        return checkNotEmpty(factory, module, exportName);
      });
    };
    SystemJsNgModuleLoader.decorators = [{type: Injectable}];
    SystemJsNgModuleLoader.ctorParameters = [{type: Compiler}, {
      type: SystemJsNgModuleLoaderConfig,
      decorators: [{type: Optional}]
    }];
    return SystemJsNgModuleLoader;
  }());
  function checkNotEmpty(value, modulePath, exportName) {
    if (!value) {
      throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
    }
    return value;
  }
  var __extends$10 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var TemplateRef = (function() {
    function TemplateRef() {}
    Object.defineProperty(TemplateRef.prototype, "elementRef", {
      get: function() {
        return null;
      },
      enumerable: true,
      configurable: true
    });
    return TemplateRef;
  }());
  var TemplateRef_ = (function(_super) {
    __extends$10(TemplateRef_, _super);
    function TemplateRef_(_appElement, _viewFactory) {
      _super.call(this);
      this._appElement = _appElement;
      this._viewFactory = _viewFactory;
    }
    TemplateRef_.prototype.createEmbeddedView = function(context) {
      var view = this._viewFactory(this._appElement.parentView.viewUtils, this._appElement.parentInjector, this._appElement);
      view.create(context || {}, null, null);
      return view.ref;
    };
    Object.defineProperty(TemplateRef_.prototype, "elementRef", {
      get: function() {
        return this._appElement.elementRef;
      },
      enumerable: true,
      configurable: true
    });
    return TemplateRef_;
  }(TemplateRef));
  var _queuedAnimations = [];
  function queueAnimation(player) {
    _queuedAnimations.push(player);
  }
  function triggerQueuedAnimations() {
    for (var i = 0; i < _queuedAnimations.length; i++) {
      var player = _queuedAnimations[i];
      player.play();
    }
    _queuedAnimations = [];
  }
  var __extends$11 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ViewRef = (function() {
    function ViewRef() {}
    Object.defineProperty(ViewRef.prototype, "destroyed", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    return ViewRef;
  }());
  var EmbeddedViewRef = (function(_super) {
    __extends$11(EmbeddedViewRef, _super);
    function EmbeddedViewRef() {
      _super.apply(this, arguments);
    }
    Object.defineProperty(EmbeddedViewRef.prototype, "context", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
      get: function() {
        return unimplemented();
      },
      enumerable: true,
      configurable: true
    });
    ;
    return EmbeddedViewRef;
  }(ViewRef));
  var ViewRef_ = (function() {
    function ViewRef_(_view) {
      this._view = _view;
      this._view = _view;
      this._originalMode = this._view.cdMode;
    }
    Object.defineProperty(ViewRef_.prototype, "internalView", {
      get: function() {
        return this._view;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
      get: function() {
        return this._view.flatRootNodes;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "context", {
      get: function() {
        return this._view.context;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "destroyed", {
      get: function() {
        return this._view.destroyed;
      },
      enumerable: true,
      configurable: true
    });
    ViewRef_.prototype.markForCheck = function() {
      this._view.markPathToRootAsCheckOnce();
    };
    ViewRef_.prototype.detach = function() {
      this._view.cdMode = ChangeDetectorStatus.Detached;
    };
    ViewRef_.prototype.detectChanges = function() {
      this._view.detectChanges(false);
      triggerQueuedAnimations();
    };
    ViewRef_.prototype.checkNoChanges = function() {
      this._view.detectChanges(true);
    };
    ViewRef_.prototype.reattach = function() {
      this._view.cdMode = this._originalMode;
      this.markForCheck();
    };
    ViewRef_.prototype.onDestroy = function(callback) {
      this._view.disposables.push(callback);
    };
    ViewRef_.prototype.destroy = function() {
      this._view.destroy();
    };
    return ViewRef_;
  }());
  var __extends$12 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var EventListener = (function() {
    function EventListener(name, callback) {
      this.name = name;
      this.callback = callback;
    }
    ;
    return EventListener;
  }());
  var DebugNode = (function() {
    function DebugNode(nativeNode, parent, _debugInfo) {
      this._debugInfo = _debugInfo;
      this.nativeNode = nativeNode;
      if (isPresent(parent) && parent instanceof DebugElement) {
        parent.addChild(this);
      } else {
        this.parent = null;
      }
      this.listeners = [];
    }
    Object.defineProperty(DebugNode.prototype, "injector", {
      get: function() {
        return isPresent(this._debugInfo) ? this._debugInfo.injector : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "componentInstance", {
      get: function() {
        return isPresent(this._debugInfo) ? this._debugInfo.component : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "context", {
      get: function() {
        return isPresent(this._debugInfo) ? this._debugInfo.context : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "references", {
      get: function() {
        return isPresent(this._debugInfo) ? this._debugInfo.references : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "providerTokens", {
      get: function() {
        return isPresent(this._debugInfo) ? this._debugInfo.providerTokens : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "source", {
      get: function() {
        return isPresent(this._debugInfo) ? this._debugInfo.source : null;
      },
      enumerable: true,
      configurable: true
    });
    return DebugNode;
  }());
  var DebugElement = (function(_super) {
    __extends$12(DebugElement, _super);
    function DebugElement(nativeNode, parent, _debugInfo) {
      _super.call(this, nativeNode, parent, _debugInfo);
      this.properties = {};
      this.attributes = {};
      this.classes = {};
      this.styles = {};
      this.childNodes = [];
      this.nativeElement = nativeNode;
    }
    DebugElement.prototype.addChild = function(child) {
      if (isPresent(child)) {
        this.childNodes.push(child);
        child.parent = this;
      }
    };
    DebugElement.prototype.removeChild = function(child) {
      var childIndex = this.childNodes.indexOf(child);
      if (childIndex !== -1) {
        child.parent = null;
        this.childNodes.splice(childIndex, 1);
      }
    };
    DebugElement.prototype.insertChildrenAfter = function(child, newChildren) {
      var siblingIndex = this.childNodes.indexOf(child);
      if (siblingIndex !== -1) {
        var previousChildren = this.childNodes.slice(0, siblingIndex + 1);
        var nextChildren = this.childNodes.slice(siblingIndex + 1);
        this.childNodes = ListWrapper.concat(ListWrapper.concat(previousChildren, newChildren), nextChildren);
        for (var i = 0; i < newChildren.length; ++i) {
          var newChild = newChildren[i];
          if (isPresent(newChild.parent)) {
            newChild.parent.removeChild(newChild);
          }
          newChild.parent = this;
        }
      }
    };
    DebugElement.prototype.query = function(predicate) {
      var results = this.queryAll(predicate);
      return results.length > 0 ? results[0] : null;
    };
    DebugElement.prototype.queryAll = function(predicate) {
      var matches = [];
      _queryElementChildren(this, predicate, matches);
      return matches;
    };
    DebugElement.prototype.queryAllNodes = function(predicate) {
      var matches = [];
      _queryNodeChildren(this, predicate, matches);
      return matches;
    };
    Object.defineProperty(DebugElement.prototype, "children", {
      get: function() {
        var children = [];
        this.childNodes.forEach(function(node) {
          if (node instanceof DebugElement) {
            children.push(node);
          }
        });
        return children;
      },
      enumerable: true,
      configurable: true
    });
    DebugElement.prototype.triggerEventHandler = function(eventName, eventObj) {
      this.listeners.forEach(function(listener) {
        if (listener.name == eventName) {
          listener.callback(eventObj);
        }
      });
    };
    return DebugElement;
  }(DebugNode));
  function asNativeElements(debugEls) {
    return debugEls.map(function(el) {
      return el.nativeElement;
    });
  }
  function _queryElementChildren(element, predicate, matches) {
    element.childNodes.forEach(function(node) {
      if (node instanceof DebugElement) {
        if (predicate(node)) {
          matches.push(node);
        }
        _queryElementChildren(node, predicate, matches);
      }
    });
  }
  function _queryNodeChildren(parentNode, predicate, matches) {
    if (parentNode instanceof DebugElement) {
      parentNode.childNodes.forEach(function(node) {
        if (predicate(node)) {
          matches.push(node);
        }
        if (node instanceof DebugElement) {
          _queryNodeChildren(node, predicate, matches);
        }
      });
    }
  }
  var _nativeNodeToDebugNode = new Map();
  function getDebugNode(nativeNode) {
    return _nativeNodeToDebugNode.get(nativeNode);
  }
  function indexDebugNode(node) {
    _nativeNodeToDebugNode.set(node.nativeNode, node);
  }
  function removeDebugNodeFromIndex(node) {
    _nativeNodeToDebugNode.delete(node.nativeNode);
  }
  function _reflector() {
    return reflector;
  }
  var _CORE_PLATFORM_PROVIDERS = [PlatformRef_, {
    provide: PlatformRef,
    useExisting: PlatformRef_
  }, {
    provide: Reflector,
    useFactory: _reflector,
    deps: []
  }, {
    provide: ReflectorReader,
    useExisting: Reflector
  }, TestabilityRegistry, Console];
  var platformCore = createPlatformFactory(null, 'core', _CORE_PLATFORM_PROVIDERS);
  var LOCALE_ID = new OpaqueToken('LocaleId');
  var TRANSLATIONS = new OpaqueToken('Translations');
  var TRANSLATIONS_FORMAT = new OpaqueToken('TranslationsFormat');
  function _iterableDiffersFactory() {
    return defaultIterableDiffers;
  }
  function _keyValueDiffersFactory() {
    return defaultKeyValueDiffers;
  }
  var ApplicationModule = (function() {
    function ApplicationModule() {}
    ApplicationModule.decorators = [{
      type: NgModule,
      args: [{providers: [ApplicationRef_, {
          provide: ApplicationRef,
          useExisting: ApplicationRef_
        }, ApplicationInitStatus, Compiler, APP_ID_RANDOM_PROVIDER, ViewUtils, {
          provide: IterableDiffers,
          useFactory: _iterableDiffersFactory
        }, {
          provide: KeyValueDiffers,
          useFactory: _keyValueDiffersFactory
        }, {
          provide: LOCALE_ID,
          useValue: 'en-US'
        }]}]
    }];
    ApplicationModule.ctorParameters = [];
    return ApplicationModule;
  }());
  var FILL_STYLE_FLAG = 'true';
  var ANY_STATE = '*';
  var DEFAULT_STATE = '*';
  var EMPTY_STATE = 'void';
  var Math$1 = global$1.Math;
  var AnimationGroupPlayer = (function() {
    function AnimationGroupPlayer(_players) {
      var _this = this;
      this._players = _players;
      this._onDoneFns = [];
      this._onStartFns = [];
      this._finished = false;
      this._started = false;
      this.parentPlayer = null;
      var count = 0;
      var total = this._players.length;
      if (total == 0) {
        scheduleMicroTask(function() {
          return _this._onFinish();
        });
      } else {
        this._players.forEach(function(player) {
          player.parentPlayer = _this;
          player.onDone(function() {
            if (++count >= total) {
              _this._onFinish();
            }
          });
        });
      }
    }
    AnimationGroupPlayer.prototype._onFinish = function() {
      if (!this._finished) {
        this._finished = true;
        if (!isPresent(this.parentPlayer)) {
          this.destroy();
        }
        this._onDoneFns.forEach(function(fn) {
          return fn();
        });
        this._onDoneFns = [];
      }
    };
    AnimationGroupPlayer.prototype.init = function() {
      this._players.forEach(function(player) {
        return player.init();
      });
    };
    AnimationGroupPlayer.prototype.onStart = function(fn) {
      this._onStartFns.push(fn);
    };
    AnimationGroupPlayer.prototype.onDone = function(fn) {
      this._onDoneFns.push(fn);
    };
    AnimationGroupPlayer.prototype.hasStarted = function() {
      return this._started;
    };
    AnimationGroupPlayer.prototype.play = function() {
      if (!isPresent(this.parentPlayer)) {
        this.init();
      }
      if (!this.hasStarted()) {
        this._onStartFns.forEach(function(fn) {
          return fn();
        });
        this._onStartFns = [];
        this._started = true;
      }
      this._players.forEach(function(player) {
        return player.play();
      });
    };
    AnimationGroupPlayer.prototype.pause = function() {
      this._players.forEach(function(player) {
        return player.pause();
      });
    };
    AnimationGroupPlayer.prototype.restart = function() {
      this._players.forEach(function(player) {
        return player.restart();
      });
    };
    AnimationGroupPlayer.prototype.finish = function() {
      this._onFinish();
      this._players.forEach(function(player) {
        return player.finish();
      });
    };
    AnimationGroupPlayer.prototype.destroy = function() {
      this._onFinish();
      this._players.forEach(function(player) {
        return player.destroy();
      });
    };
    AnimationGroupPlayer.prototype.reset = function() {
      this._players.forEach(function(player) {
        return player.reset();
      });
    };
    AnimationGroupPlayer.prototype.setPosition = function(p) {
      this._players.forEach(function(player) {
        player.setPosition(p);
      });
    };
    AnimationGroupPlayer.prototype.getPosition = function() {
      var min = 0;
      this._players.forEach(function(player) {
        var p = player.getPosition();
        min = Math$1.min(p, min);
      });
      return min;
    };
    return AnimationGroupPlayer;
  }());
  var AnimationKeyframe = (function() {
    function AnimationKeyframe(offset, styles) {
      this.offset = offset;
      this.styles = styles;
    }
    return AnimationKeyframe;
  }());
  var AnimationPlayer = (function() {
    function AnimationPlayer() {}
    Object.defineProperty(AnimationPlayer.prototype, "parentPlayer", {
      get: function() {
        throw new Error('NOT IMPLEMENTED: Base Class');
      },
      set: function(player) {
        throw new Error('NOT IMPLEMENTED: Base Class');
      },
      enumerable: true,
      configurable: true
    });
    return AnimationPlayer;
  }());
  var NoOpAnimationPlayer = (function() {
    function NoOpAnimationPlayer() {
      var _this = this;
      this._onDoneFns = [];
      this._onStartFns = [];
      this._started = false;
      this.parentPlayer = null;
      scheduleMicroTask(function() {
        return _this._onFinish();
      });
    }
    NoOpAnimationPlayer.prototype._onFinish = function() {
      this._onDoneFns.forEach(function(fn) {
        return fn();
      });
      this._onDoneFns = [];
    };
    NoOpAnimationPlayer.prototype.onStart = function(fn) {
      this._onStartFns.push(fn);
    };
    NoOpAnimationPlayer.prototype.onDone = function(fn) {
      this._onDoneFns.push(fn);
    };
    NoOpAnimationPlayer.prototype.hasStarted = function() {
      return this._started;
    };
    NoOpAnimationPlayer.prototype.init = function() {};
    NoOpAnimationPlayer.prototype.play = function() {
      if (!this.hasStarted()) {
        this._onStartFns.forEach(function(fn) {
          return fn();
        });
        this._onStartFns = [];
      }
      this._started = true;
    };
    NoOpAnimationPlayer.prototype.pause = function() {};
    NoOpAnimationPlayer.prototype.restart = function() {};
    NoOpAnimationPlayer.prototype.finish = function() {
      this._onFinish();
    };
    NoOpAnimationPlayer.prototype.destroy = function() {};
    NoOpAnimationPlayer.prototype.reset = function() {};
    NoOpAnimationPlayer.prototype.setPosition = function(p) {};
    NoOpAnimationPlayer.prototype.getPosition = function() {
      return 0;
    };
    return NoOpAnimationPlayer;
  }());
  var AnimationSequencePlayer = (function() {
    function AnimationSequencePlayer(_players) {
      var _this = this;
      this._players = _players;
      this._currentIndex = 0;
      this._onDoneFns = [];
      this._onStartFns = [];
      this._finished = false;
      this._started = false;
      this.parentPlayer = null;
      this._players.forEach(function(player) {
        player.parentPlayer = _this;
      });
      this._onNext(false);
    }
    AnimationSequencePlayer.prototype._onNext = function(start) {
      var _this = this;
      if (this._finished)
        return;
      if (this._players.length == 0) {
        this._activePlayer = new NoOpAnimationPlayer();
        scheduleMicroTask(function() {
          return _this._onFinish();
        });
      } else if (this._currentIndex >= this._players.length) {
        this._activePlayer = new NoOpAnimationPlayer();
        this._onFinish();
      } else {
        var player = this._players[this._currentIndex++];
        player.onDone(function() {
          return _this._onNext(true);
        });
        this._activePlayer = player;
        if (start) {
          player.play();
        }
      }
    };
    AnimationSequencePlayer.prototype._onFinish = function() {
      if (!this._finished) {
        this._finished = true;
        if (!isPresent(this.parentPlayer)) {
          this.destroy();
        }
        this._onDoneFns.forEach(function(fn) {
          return fn();
        });
        this._onDoneFns = [];
      }
    };
    AnimationSequencePlayer.prototype.init = function() {
      this._players.forEach(function(player) {
        return player.init();
      });
    };
    AnimationSequencePlayer.prototype.onStart = function(fn) {
      this._onStartFns.push(fn);
    };
    AnimationSequencePlayer.prototype.onDone = function(fn) {
      this._onDoneFns.push(fn);
    };
    AnimationSequencePlayer.prototype.hasStarted = function() {
      return this._started;
    };
    AnimationSequencePlayer.prototype.play = function() {
      if (!isPresent(this.parentPlayer)) {
        this.init();
      }
      if (!this.hasStarted()) {
        this._onStartFns.forEach(function(fn) {
          return fn();
        });
        this._onStartFns = [];
        this._started = true;
      }
      this._activePlayer.play();
    };
    AnimationSequencePlayer.prototype.pause = function() {
      this._activePlayer.pause();
    };
    AnimationSequencePlayer.prototype.restart = function() {
      if (this._players.length > 0) {
        this.reset();
        this._players[0].restart();
      }
    };
    AnimationSequencePlayer.prototype.reset = function() {
      this._players.forEach(function(player) {
        return player.reset();
      });
    };
    AnimationSequencePlayer.prototype.finish = function() {
      this._onFinish();
      this._players.forEach(function(player) {
        return player.finish();
      });
    };
    AnimationSequencePlayer.prototype.destroy = function() {
      this._onFinish();
      this._players.forEach(function(player) {
        return player.destroy();
      });
    };
    AnimationSequencePlayer.prototype.setPosition = function(p) {
      this._players[0].setPosition(p);
    };
    AnimationSequencePlayer.prototype.getPosition = function() {
      return this._players[0].getPosition();
    };
    return AnimationSequencePlayer;
  }());
  var __extends$13 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AUTO_STYLE = '*';
  var AnimationEntryMetadata = (function() {
    function AnimationEntryMetadata(name, definitions) {
      this.name = name;
      this.definitions = definitions;
    }
    return AnimationEntryMetadata;
  }());
  var AnimationStateMetadata = (function() {
    function AnimationStateMetadata() {}
    return AnimationStateMetadata;
  }());
  var AnimationStateDeclarationMetadata = (function(_super) {
    __extends$13(AnimationStateDeclarationMetadata, _super);
    function AnimationStateDeclarationMetadata(stateNameExpr, styles) {
      _super.call(this);
      this.stateNameExpr = stateNameExpr;
      this.styles = styles;
    }
    return AnimationStateDeclarationMetadata;
  }(AnimationStateMetadata));
  var AnimationStateTransitionMetadata = (function(_super) {
    __extends$13(AnimationStateTransitionMetadata, _super);
    function AnimationStateTransitionMetadata(stateChangeExpr, steps) {
      _super.call(this);
      this.stateChangeExpr = stateChangeExpr;
      this.steps = steps;
    }
    return AnimationStateTransitionMetadata;
  }(AnimationStateMetadata));
  var AnimationMetadata = (function() {
    function AnimationMetadata() {}
    return AnimationMetadata;
  }());
  var AnimationKeyframesSequenceMetadata = (function(_super) {
    __extends$13(AnimationKeyframesSequenceMetadata, _super);
    function AnimationKeyframesSequenceMetadata(steps) {
      _super.call(this);
      this.steps = steps;
    }
    return AnimationKeyframesSequenceMetadata;
  }(AnimationMetadata));
  var AnimationStyleMetadata = (function(_super) {
    __extends$13(AnimationStyleMetadata, _super);
    function AnimationStyleMetadata(styles, offset) {
      if (offset === void 0) {
        offset = null;
      }
      _super.call(this);
      this.styles = styles;
      this.offset = offset;
    }
    return AnimationStyleMetadata;
  }(AnimationMetadata));
  var AnimationAnimateMetadata = (function(_super) {
    __extends$13(AnimationAnimateMetadata, _super);
    function AnimationAnimateMetadata(timings, styles) {
      _super.call(this);
      this.timings = timings;
      this.styles = styles;
    }
    return AnimationAnimateMetadata;
  }(AnimationMetadata));
  var AnimationWithStepsMetadata = (function(_super) {
    __extends$13(AnimationWithStepsMetadata, _super);
    function AnimationWithStepsMetadata() {
      _super.call(this);
    }
    Object.defineProperty(AnimationWithStepsMetadata.prototype, "steps", {
      get: function() {
        throw new Error('NOT IMPLEMENTED: Base Class');
      },
      enumerable: true,
      configurable: true
    });
    return AnimationWithStepsMetadata;
  }(AnimationMetadata));
  var AnimationSequenceMetadata = (function(_super) {
    __extends$13(AnimationSequenceMetadata, _super);
    function AnimationSequenceMetadata(_steps) {
      _super.call(this);
      this._steps = _steps;
    }
    Object.defineProperty(AnimationSequenceMetadata.prototype, "steps", {
      get: function() {
        return this._steps;
      },
      enumerable: true,
      configurable: true
    });
    return AnimationSequenceMetadata;
  }(AnimationWithStepsMetadata));
  var AnimationGroupMetadata = (function(_super) {
    __extends$13(AnimationGroupMetadata, _super);
    function AnimationGroupMetadata(_steps) {
      _super.call(this);
      this._steps = _steps;
    }
    Object.defineProperty(AnimationGroupMetadata.prototype, "steps", {
      get: function() {
        return this._steps;
      },
      enumerable: true,
      configurable: true
    });
    return AnimationGroupMetadata;
  }(AnimationWithStepsMetadata));
  function animate(timing, styles) {
    if (styles === void 0) {
      styles = null;
    }
    var stylesEntry = styles;
    if (!isPresent(stylesEntry)) {
      var EMPTY_STYLE = {};
      stylesEntry = new AnimationStyleMetadata([EMPTY_STYLE], 1);
    }
    return new AnimationAnimateMetadata(timing, stylesEntry);
  }
  function group(steps) {
    return new AnimationGroupMetadata(steps);
  }
  function sequence(steps) {
    return new AnimationSequenceMetadata(steps);
  }
  function style(tokens) {
    var input;
    var offset = null;
    if (isString(tokens)) {
      input = [tokens];
    } else {
      if (isArray(tokens)) {
        input = tokens;
      } else {
        input = [tokens];
      }
      input.forEach(function(entry) {
        var entryOffset = entry['offset'];
        if (isPresent(entryOffset)) {
          offset = offset == null ? parseFloat(entryOffset) : offset;
        }
      });
    }
    return new AnimationStyleMetadata(input, offset);
  }
  function state(stateNameExpr, styles) {
    return new AnimationStateDeclarationMetadata(stateNameExpr, styles);
  }
  function keyframes(steps) {
    return new AnimationKeyframesSequenceMetadata(steps);
  }
  function transition(stateChangeExpr, steps) {
    var animationData = isArray(steps) ? new AnimationSequenceMetadata(steps) : steps;
    return new AnimationStateTransitionMetadata(stateChangeExpr, animationData);
  }
  function trigger(name, animation) {
    return new AnimationEntryMetadata(name, animation);
  }
  function prepareFinalAnimationStyles(previousStyles, newStyles, nullValue) {
    if (nullValue === void 0) {
      nullValue = null;
    }
    var finalStyles = {};
    Object.keys(newStyles).forEach(function(prop) {
      var value = newStyles[prop];
      finalStyles[prop] = value == AUTO_STYLE ? nullValue : value.toString();
    });
    Object.keys(previousStyles).forEach(function(prop) {
      if (!isPresent(finalStyles[prop])) {
        finalStyles[prop] = nullValue;
      }
    });
    return finalStyles;
  }
  function balanceAnimationKeyframes(collectedStyles, finalStateStyles, keyframes) {
    var limit = keyframes.length - 1;
    var firstKeyframe = keyframes[0];
    var flatenedFirstKeyframeStyles = flattenStyles(firstKeyframe.styles.styles);
    var extraFirstKeyframeStyles = {};
    var hasExtraFirstStyles = false;
    Object.keys(collectedStyles).forEach(function(prop) {
      var value = collectedStyles[prop];
      if (!flatenedFirstKeyframeStyles[prop]) {
        flatenedFirstKeyframeStyles[prop] = value;
        extraFirstKeyframeStyles[prop] = value;
        hasExtraFirstStyles = true;
      }
    });
    var keyframeCollectedStyles = StringMapWrapper.merge({}, flatenedFirstKeyframeStyles);
    var finalKeyframe = keyframes[limit];
    ListWrapper.insert(finalKeyframe.styles.styles, 0, finalStateStyles);
    var flatenedFinalKeyframeStyles = flattenStyles(finalKeyframe.styles.styles);
    var extraFinalKeyframeStyles = {};
    var hasExtraFinalStyles = false;
    Object.keys(keyframeCollectedStyles).forEach(function(prop) {
      if (!isPresent(flatenedFinalKeyframeStyles[prop])) {
        extraFinalKeyframeStyles[prop] = AUTO_STYLE;
        hasExtraFinalStyles = true;
      }
    });
    if (hasExtraFinalStyles) {
      finalKeyframe.styles.styles.push(extraFinalKeyframeStyles);
    }
    Object.keys(flatenedFinalKeyframeStyles).forEach(function(prop) {
      if (!isPresent(flatenedFirstKeyframeStyles[prop])) {
        extraFirstKeyframeStyles[prop] = AUTO_STYLE;
        hasExtraFirstStyles = true;
      }
    });
    if (hasExtraFirstStyles) {
      firstKeyframe.styles.styles.push(extraFirstKeyframeStyles);
    }
    return keyframes;
  }
  function clearStyles(styles) {
    var finalStyles = {};
    Object.keys(styles).forEach(function(key) {
      finalStyles[key] = null;
    });
    return finalStyles;
  }
  function collectAndResolveStyles(collection, styles) {
    return styles.map(function(entry) {
      var stylesObj = {};
      Object.keys(entry).forEach(function(prop) {
        var value = entry[prop];
        if (value == FILL_STYLE_FLAG) {
          value = collection[prop];
          if (!isPresent(value)) {
            value = AUTO_STYLE;
          }
        }
        collection[prop] = value;
        stylesObj[prop] = value;
      });
      return stylesObj;
    });
  }
  function renderStyles(element, renderer, styles) {
    Object.keys(styles).forEach(function(prop) {
      renderer.setElementStyle(element, prop, styles[prop]);
    });
  }
  function flattenStyles(styles) {
    var finalStyles = {};
    styles.forEach(function(entry) {
      Object.keys(entry).forEach(function(prop) {
        finalStyles[prop] = entry[prop];
      });
    });
    return finalStyles;
  }
  var AnimationStyles = (function() {
    function AnimationStyles(styles) {
      this.styles = styles;
    }
    return AnimationStyles;
  }());
  var DebugDomRootRenderer = (function() {
    function DebugDomRootRenderer(_delegate) {
      this._delegate = _delegate;
    }
    DebugDomRootRenderer.prototype.renderComponent = function(componentProto) {
      return new DebugDomRenderer(this._delegate.renderComponent(componentProto));
    };
    return DebugDomRootRenderer;
  }());
  var DebugDomRenderer = (function() {
    function DebugDomRenderer(_delegate) {
      this._delegate = _delegate;
    }
    DebugDomRenderer.prototype.selectRootElement = function(selectorOrNode, debugInfo) {
      var nativeEl = this._delegate.selectRootElement(selectorOrNode, debugInfo);
      var debugEl = new DebugElement(nativeEl, null, debugInfo);
      indexDebugNode(debugEl);
      return nativeEl;
    };
    DebugDomRenderer.prototype.createElement = function(parentElement, name, debugInfo) {
      var nativeEl = this._delegate.createElement(parentElement, name, debugInfo);
      var debugEl = new DebugElement(nativeEl, getDebugNode(parentElement), debugInfo);
      debugEl.name = name;
      indexDebugNode(debugEl);
      return nativeEl;
    };
    DebugDomRenderer.prototype.createViewRoot = function(hostElement) {
      return this._delegate.createViewRoot(hostElement);
    };
    DebugDomRenderer.prototype.createTemplateAnchor = function(parentElement, debugInfo) {
      var comment = this._delegate.createTemplateAnchor(parentElement, debugInfo);
      var debugEl = new DebugNode(comment, getDebugNode(parentElement), debugInfo);
      indexDebugNode(debugEl);
      return comment;
    };
    DebugDomRenderer.prototype.createText = function(parentElement, value, debugInfo) {
      var text = this._delegate.createText(parentElement, value, debugInfo);
      var debugEl = new DebugNode(text, getDebugNode(parentElement), debugInfo);
      indexDebugNode(debugEl);
      return text;
    };
    DebugDomRenderer.prototype.projectNodes = function(parentElement, nodes) {
      var debugParent = getDebugNode(parentElement);
      if (isPresent(debugParent) && debugParent instanceof DebugElement) {
        var debugElement_1 = debugParent;
        nodes.forEach(function(node) {
          debugElement_1.addChild(getDebugNode(node));
        });
      }
      this._delegate.projectNodes(parentElement, nodes);
    };
    DebugDomRenderer.prototype.attachViewAfter = function(node, viewRootNodes) {
      var debugNode = getDebugNode(node);
      if (isPresent(debugNode)) {
        var debugParent = debugNode.parent;
        if (viewRootNodes.length > 0 && isPresent(debugParent)) {
          var debugViewRootNodes = [];
          viewRootNodes.forEach(function(rootNode) {
            return debugViewRootNodes.push(getDebugNode(rootNode));
          });
          debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
        }
      }
      this._delegate.attachViewAfter(node, viewRootNodes);
    };
    DebugDomRenderer.prototype.detachView = function(viewRootNodes) {
      viewRootNodes.forEach(function(node) {
        var debugNode = getDebugNode(node);
        if (isPresent(debugNode) && isPresent(debugNode.parent)) {
          debugNode.parent.removeChild(debugNode);
        }
      });
      this._delegate.detachView(viewRootNodes);
    };
    DebugDomRenderer.prototype.destroyView = function(hostElement, viewAllNodes) {
      viewAllNodes.forEach(function(node) {
        removeDebugNodeFromIndex(getDebugNode(node));
      });
      this._delegate.destroyView(hostElement, viewAllNodes);
    };
    DebugDomRenderer.prototype.listen = function(renderElement, name, callback) {
      var debugEl = getDebugNode(renderElement);
      if (isPresent(debugEl)) {
        debugEl.listeners.push(new EventListener(name, callback));
      }
      return this._delegate.listen(renderElement, name, callback);
    };
    DebugDomRenderer.prototype.listenGlobal = function(target, name, callback) {
      return this._delegate.listenGlobal(target, name, callback);
    };
    DebugDomRenderer.prototype.setElementProperty = function(renderElement, propertyName, propertyValue) {
      var debugEl = getDebugNode(renderElement);
      if (isPresent(debugEl) && debugEl instanceof DebugElement) {
        debugEl.properties[propertyName] = propertyValue;
      }
      this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
    };
    DebugDomRenderer.prototype.setElementAttribute = function(renderElement, attributeName, attributeValue) {
      var debugEl = getDebugNode(renderElement);
      if (isPresent(debugEl) && debugEl instanceof DebugElement) {
        debugEl.attributes[attributeName] = attributeValue;
      }
      this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
    };
    DebugDomRenderer.prototype.setBindingDebugInfo = function(renderElement, propertyName, propertyValue) {
      this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
    };
    DebugDomRenderer.prototype.setElementClass = function(renderElement, className, isAdd) {
      var debugEl = getDebugNode(renderElement);
      if (isPresent(debugEl) && debugEl instanceof DebugElement) {
        debugEl.classes[className] = isAdd;
      }
      this._delegate.setElementClass(renderElement, className, isAdd);
    };
    DebugDomRenderer.prototype.setElementStyle = function(renderElement, styleName, styleValue) {
      var debugEl = getDebugNode(renderElement);
      if (isPresent(debugEl) && debugEl instanceof DebugElement) {
        debugEl.styles[styleName] = styleValue;
      }
      this._delegate.setElementStyle(renderElement, styleName, styleValue);
    };
    DebugDomRenderer.prototype.invokeElementMethod = function(renderElement, methodName, args) {
      this._delegate.invokeElementMethod(renderElement, methodName, args);
    };
    DebugDomRenderer.prototype.setText = function(renderNode, text) {
      this._delegate.setText(renderNode, text);
    };
    DebugDomRenderer.prototype.animate = function(element, startingStyles, keyframes, duration, delay, easing) {
      return this._delegate.animate(element, startingStyles, keyframes, duration, delay, easing);
    };
    return DebugDomRenderer;
  }());
  var StaticNodeDebugInfo = (function() {
    function StaticNodeDebugInfo(providerTokens, componentToken, refTokens) {
      this.providerTokens = providerTokens;
      this.componentToken = componentToken;
      this.refTokens = refTokens;
    }
    return StaticNodeDebugInfo;
  }());
  var DebugContext = (function() {
    function DebugContext(_view, _nodeIndex, _tplRow, _tplCol) {
      this._view = _view;
      this._nodeIndex = _nodeIndex;
      this._tplRow = _tplRow;
      this._tplCol = _tplCol;
    }
    Object.defineProperty(DebugContext.prototype, "_staticNodeInfo", {
      get: function() {
        return isPresent(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "context", {
      get: function() {
        return this._view.context;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "component", {
      get: function() {
        var staticNodeInfo = this._staticNodeInfo;
        if (isPresent(staticNodeInfo) && isPresent(staticNodeInfo.componentToken)) {
          return this.injector.get(staticNodeInfo.componentToken);
        }
        return null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "componentRenderElement", {
      get: function() {
        var componentView = this._view;
        while (isPresent(componentView.declarationAppElement) && componentView.type !== ViewType.COMPONENT) {
          componentView = componentView.declarationAppElement.parentView;
        }
        return isPresent(componentView.declarationAppElement) ? componentView.declarationAppElement.nativeElement : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "injector", {
      get: function() {
        return this._view.injector(this._nodeIndex);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "renderNode", {
      get: function() {
        if (isPresent(this._nodeIndex) && this._view.allNodes) {
          return this._view.allNodes[this._nodeIndex];
        } else {
          return null;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "providerTokens", {
      get: function() {
        var staticNodeInfo = this._staticNodeInfo;
        return isPresent(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "source", {
      get: function() {
        return this._view.componentType.templateUrl + ":" + this._tplRow + ":" + this._tplCol;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "references", {
      get: function() {
        var _this = this;
        var varValues = {};
        var staticNodeInfo = this._staticNodeInfo;
        if (isPresent(staticNodeInfo)) {
          var refs = staticNodeInfo.refTokens;
          Object.keys(refs).forEach(function(refName) {
            var refToken = refs[refName];
            var varValue;
            if (isBlank(refToken)) {
              varValue = _this._view.allNodes ? _this._view.allNodes[_this._nodeIndex] : null;
            } else {
              varValue = _this._view.injectorGet(refToken, _this._nodeIndex, null);
            }
            varValues[refName] = varValue;
          });
        }
        return varValues;
      },
      enumerable: true,
      configurable: true
    });
    return DebugContext;
  }());
  var AnimationTransitionEvent = (function() {
    function AnimationTransitionEvent(_a) {
      var fromState = _a.fromState,
          toState = _a.toState,
          totalTime = _a.totalTime;
      this.fromState = fromState;
      this.toState = toState;
      this.totalTime = totalTime;
    }
    return AnimationTransitionEvent;
  }());
  var ViewAnimationMap = (function() {
    function ViewAnimationMap() {
      this._map = new Map();
      this._allPlayers = [];
    }
    Object.defineProperty(ViewAnimationMap.prototype, "length", {
      get: function() {
        return this.getAllPlayers().length;
      },
      enumerable: true,
      configurable: true
    });
    ViewAnimationMap.prototype.find = function(element, animationName) {
      var playersByAnimation = this._map.get(element);
      if (isPresent(playersByAnimation)) {
        return playersByAnimation[animationName];
      }
    };
    ViewAnimationMap.prototype.findAllPlayersByElement = function(element) {
      var el = this._map.get(element);
      return el ? Object.keys(el).map(function(k) {
        return el[k];
      }) : [];
    };
    ViewAnimationMap.prototype.set = function(element, animationName, player) {
      var playersByAnimation = this._map.get(element);
      if (!isPresent(playersByAnimation)) {
        playersByAnimation = {};
      }
      var existingEntry = playersByAnimation[animationName];
      if (isPresent(existingEntry)) {
        this.remove(element, animationName);
      }
      playersByAnimation[animationName] = player;
      this._allPlayers.push(player);
      this._map.set(element, playersByAnimation);
    };
    ViewAnimationMap.prototype.getAllPlayers = function() {
      return this._allPlayers;
    };
    ViewAnimationMap.prototype.remove = function(element, animationName) {
      var playersByAnimation = this._map.get(element);
      if (playersByAnimation) {
        var player = playersByAnimation[animationName];
        delete playersByAnimation[animationName];
        var index = this._allPlayers.indexOf(player);
        this._allPlayers.splice(index, 1);
        if (Object.keys(playersByAnimation).length === 0) {
          this._map.delete(element);
        }
      }
    };
    return ViewAnimationMap;
  }());
  var __extends$15 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var _UNDEFINED$1 = new Object();
  var ElementInjector = (function(_super) {
    __extends$15(ElementInjector, _super);
    function ElementInjector(_view, _nodeIndex) {
      _super.call(this);
      this._view = _view;
      this._nodeIndex = _nodeIndex;
    }
    ElementInjector.prototype.get = function(token, notFoundValue) {
      if (notFoundValue === void 0) {
        notFoundValue = THROW_IF_NOT_FOUND;
      }
      var result = _UNDEFINED$1;
      if (result === _UNDEFINED$1) {
        result = this._view.injectorGet(token, this._nodeIndex, _UNDEFINED$1);
      }
      if (result === _UNDEFINED$1) {
        result = this._view.parentInjector.get(token, notFoundValue);
      }
      return result;
    };
    return ElementInjector;
  }(Injector));
  var __extends$14 = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var _scope_check = wtfCreateScope("AppView#check(ascii id)");
  var AppView = (function() {
    function AppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode) {
      this.clazz = clazz;
      this.componentType = componentType;
      this.type = type;
      this.viewUtils = viewUtils;
      this.parentInjector = parentInjector;
      this.declarationAppElement = declarationAppElement;
      this.cdMode = cdMode;
      this.contentChildren = [];
      this.viewChildren = [];
      this.viewContainerElement = null;
      this.numberOfChecks = 0;
      this.animationPlayers = new ViewAnimationMap();
      this._animationListeners = new Map();
      this.ref = new ViewRef_(this);
      if (type === ViewType.COMPONENT || type === ViewType.HOST) {
        this.renderer = viewUtils.renderComponent(componentType);
      } else {
        this.renderer = declarationAppElement.parentView.renderer;
      }
    }
    Object.defineProperty(AppView.prototype, "destroyed", {
      get: function() {
        return this.cdMode === ChangeDetectorStatus.Destroyed;
      },
      enumerable: true,
      configurable: true
    });
    AppView.prototype.cancelActiveAnimation = function(element, animationName, removeAllAnimations) {
      if (removeAllAnimations === void 0) {
        removeAllAnimations = false;
      }
      if (removeAllAnimations) {
        this.animationPlayers.findAllPlayersByElement(element).forEach(function(player) {
          return player.destroy();
        });
      } else {
        var player = this.animationPlayers.find(element, animationName);
        if (isPresent(player)) {
          player.destroy();
        }
      }
    };
    AppView.prototype.queueAnimation = function(element, animationName, player, totalTime, fromState, toState) {
      var _this = this;
      queueAnimation(player);
      var event = new AnimationTransitionEvent({
        'fromState': fromState,
        'toState': toState,
        'totalTime': totalTime
      });
      this.animationPlayers.set(element, animationName, player);
      player.onDone(function() {
        _this.triggerAnimationOutput(element, animationName, 'done', event);
        _this.animationPlayers.remove(element, animationName);
      });
      player.onStart(function() {
        _this.triggerAnimationOutput(element, animationName, 'start', event);
      });
    };
    AppView.prototype.triggerAnimationOutput = function(element, animationName, phase, event) {
      var listeners = this._animationListeners.get(element);
      if (isPresent(listeners) && listeners.length) {
        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          if (listener.eventName === animationName && listener.eventPhase === phase) {
            listener.handler(event);
            break;
          }
        }
      }
    };
    AppView.prototype.registerAnimationOutput = function(element, eventName, eventPhase, eventHandler) {
      var animations = this._animationListeners.get(element);
      if (!isPresent(animations)) {
        this._animationListeners.set(element, animations = []);
      }
      animations.push(new _AnimationOutputHandler(eventName, eventPhase, eventHandler));
    };
    AppView.prototype.create = function(context, givenProjectableNodes, rootSelectorOrNode) {
      this.context = context;
      var projectableNodes;
      switch (this.type) {
        case ViewType.COMPONENT:
          projectableNodes = ensureSlotCount(givenProjectableNodes, this.componentType.slotCount);
          break;
        case ViewType.EMBEDDED:
          projectableNodes = this.declarationAppElement.parentView.projectableNodes;
          break;
        case ViewType.HOST:
          projectableNodes = givenProjectableNodes;
          break;
      }
      this._hasExternalHostElement = isPresent(rootSelectorOrNode);
      this.projectableNodes = projectableNodes;
      return this.createInternal(rootSelectorOrNode);
    };
    AppView.prototype.createInternal = function(rootSelectorOrNode) {
      return null;
    };
    AppView.prototype.init = function(rootNodesOrAppElements, allNodes, disposables, subscriptions) {
      this.rootNodesOrAppElements = rootNodesOrAppElements;
      this.allNodes = allNodes;
      this.disposables = disposables;
      this.subscriptions = subscriptions;
      if (this.type === ViewType.COMPONENT) {
        this.declarationAppElement.parentView.viewChildren.push(this);
        this.dirtyParentQueriesInternal();
      }
    };
    AppView.prototype.selectOrCreateHostElement = function(elementName, rootSelectorOrNode, debugInfo) {
      var hostElement;
      if (isPresent(rootSelectorOrNode)) {
        hostElement = this.renderer.selectRootElement(rootSelectorOrNode, debugInfo);
      } else {
        hostElement = this.renderer.createElement(null, elementName, debugInfo);
      }
      return hostElement;
    };
    AppView.prototype.injectorGet = function(token, nodeIndex, notFoundResult) {
      return this.injectorGetInternal(token, nodeIndex, notFoundResult);
    };
    AppView.prototype.injectorGetInternal = function(token, nodeIndex, notFoundResult) {
      return notFoundResult;
    };
    AppView.prototype.injector = function(nodeIndex) {
      if (isPresent(nodeIndex)) {
        return new ElementInjector(this, nodeIndex);
      } else {
        return this.parentInjector;
      }
    };
    AppView.prototype.destroy = function() {
      if (this._hasExternalHostElement) {
        this.renderer.detachView(this.flatRootNodes);
      } else if (isPresent(this.viewContainerElement)) {
        this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));
      }
      this._destroyRecurse();
    };
    AppView.prototype._destroyRecurse = function() {
      if (this.cdMode === ChangeDetectorStatus.Destroyed) {
        return;
      }
      var children = this.contentChildren;
      for (var i = 0; i < children.length; i++) {
        children[i]._destroyRecurse();
      }
      children = this.viewChildren;
      for (var i = 0; i < children.length; i++) {
        children[i]._destroyRecurse();
      }
      this.destroyLocal();
      this.cdMode = ChangeDetectorStatus.Destroyed;
    };
    AppView.prototype.destroyLocal = function() {
      var _this = this;
      var hostElement = this.type === ViewType.COMPONENT ? this.declarationAppElement.nativeElement : null;
      for (var i = 0; i < this.disposables.length; i++) {
        this.disposables[i]();
      }
      for (var i = 0; i < this.subscriptions.length; i++) {
        this.subscriptions[i].unsubscribe();
      }
      this.destroyInternal();
      this.dirtyParentQueriesInternal();
      if (this.animationPlayers.length == 0) {
        this.renderer.destroyView(hostElement, this.allNodes);
      } else {
        var player = new AnimationGroupPlayer(this.animationPlayers.getAllPlayers());
        player.onDone(function() {
          _this.renderer.destroyView(hostElement, _this.allNodes);
        });
      }
    };
    AppView.prototype.destroyInternal = function() {};
    AppView.prototype.detachInternal = function() {};
    AppView.prototype.detach = function() {
      var _this = this;
      this.detachInternal();
      if (this.animationPlayers.length == 0) {
        this.renderer.detachView(this.flatRootNodes);
      } else {
        var player = new AnimationGroupPlayer(this.animationPlayers.getAllPlayers());
        player.onDone(function() {
          _this.renderer.detachView(_this.flatRootNodes);
        });
      }
    };
    Object.defineProperty(AppView.prototype, "changeDetectorRef", {
      get: function() {
        return this.ref;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AppView.prototype, "parent", {
      get: function() {
        return isPresent(this.declarationAppElement) ? this.declarationAppElement.parentView : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AppView.prototype, "flatRootNodes", {
      get: function() {
        return flattenNestedViewRenderNodes(this.rootNodesOrAppElements);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AppView.prototype, "lastRootNode", {
      get: function() {
        var lastNode = this.rootNodesOrAppElements.length > 0 ? this.rootNodesOrAppElements[this.rootNodesOrAppElements.length - 1] : null;
        return _findLastRenderNode(lastNode);
      },
      enumerable: true,
      configurable: true
    });
    AppView.prototype.dirtyParentQueriesInternal = function() {};
    AppView.prototype.detectChanges = function(throwOnChange) {
      var s = _scope_check(this.clazz);
      if (this.cdMode === ChangeDetectorStatus.Checked || this.cdMode === ChangeDetectorStatus.Errored)
        return;
      if (this.cdMode === ChangeDetectorStatus.Destroyed) {
        this.throwDestroyedError('detectChanges');
      }
      this.detectChangesInternal(throwOnChange);
      if (this.cdMode === ChangeDetectorStatus.CheckOnce)
        this.cdMode = ChangeDetectorStatus.Checked;
      this.numberOfChecks++;
      wtfLeave(s);
    };
    AppView.prototype.detectChangesInternal = function(throwOnChange) {
      this.detectContentChildrenChanges(throwOnChange);
      this.detectViewChildrenChanges(throwOnChange);
    };
    AppView.prototype.detectContentChildrenChanges = function(throwOnChange) {
      for (var i = 0; i < this.contentChildren.length; ++i) {
        var child = this.contentChildren[i];
        if (child.cdMode === ChangeDetectorStatus.Detached)
          continue;
        child.detectChanges(throwOnChange);
      }
    };
    AppView.prototype.detectViewChildrenChanges = function(throwOnChange) {
      for (var i = 0; i < this.viewChildren.length; ++i) {
        var child = this.viewChildren[i];
        if (child.cdMode === ChangeDetectorStatus.Detached)
          continue;
        child.detectChanges(throwOnChange);
      }
    };
    AppView.prototype.markContentChildAsMoved = function(renderAppElement) {
      this.dirtyParentQueriesInternal();
    };
    AppView.prototype.addToContentChildren = function(renderAppElement) {
      renderAppElement.parentView.contentChildren.push(this);
      this.viewContainerElement = renderAppElement;
      this.dirtyParentQueriesInternal();
    };
    AppView.prototype.removeFromContentChildren = function(renderAppElement) {
      ListWrapper.remove(renderAppElement.parentView.contentChildren, this);
      this.dirtyParentQueriesInternal();
      this.viewContainerElement = null;
    };
    AppView.prototype.markAsCheckOnce = function() {
      this.cdMode = ChangeDetectorStatus.CheckOnce;
    };
    AppView.prototype.markPathToRootAsCheckOnce = function() {
      var c = this;
      while (isPresent(c) && c.cdMode !== ChangeDetectorStatus.Detached) {
        if (c.cdMode === ChangeDetectorStatus.Checked) {
          c.cdMode = ChangeDetectorStatus.CheckOnce;
        }
        var parentEl = c.type === ViewType.COMPONENT ? c.declarationAppElement : c.viewContainerElement;
        c = isPresent(parentEl) ? parentEl.parentView : null;
      }
    };
    AppView.prototype.eventHandler = function(cb) {
      return cb;
    };
    AppView.prototype.throwDestroyedError = function(details) {
      throw new ViewDestroyedError(details);
    };
    return AppView;
  }());
  var DebugAppView = (function(_super) {
    __extends$14(DebugAppView, _super);
    function DebugAppView(clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode, staticNodeDebugInfos) {
      _super.call(this, clazz, componentType, type, viewUtils, parentInjector, declarationAppElement, cdMode);
      this.staticNodeDebugInfos = staticNodeDebugInfos;
      this._currentDebugContext = null;
    }
    DebugAppView.prototype.create = function(context, givenProjectableNodes, rootSelectorOrNode) {
      this._resetDebug();
      try {
        return _super.prototype.create.call(this, context, givenProjectableNodes, rootSelectorOrNode);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype.injectorGet = function(token, nodeIndex, notFoundResult) {
      this._resetDebug();
      try {
        return _super.prototype.injectorGet.call(this, token, nodeIndex, notFoundResult);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype.detach = function() {
      this._resetDebug();
      try {
        _super.prototype.detach.call(this);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype.destroyLocal = function() {
      this._resetDebug();
      try {
        _super.prototype.destroyLocal.call(this);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype.detectChanges = function(throwOnChange) {
      this._resetDebug();
      try {
        _super.prototype.detectChanges.call(this, throwOnChange);
      } catch (e) {
        this._rethrowWithContext(e);
        throw e;
      }
    };
    DebugAppView.prototype._resetDebug = function() {
      this._currentDebugContext = null;
    };
    DebugAppView.prototype.debug = function(nodeIndex, rowNum, colNum) {
      return this._currentDebugContext = new DebugContext(this, nodeIndex, rowNum, colNum);
    };
    DebugAppView.prototype._rethrowWithContext = function(e) {
      if (!(e instanceof ViewWrappedError)) {
        if (!(e instanceof ExpressionChangedAfterItHasBeenCheckedError)) {
          this.cdMode = ChangeDetectorStatus.Errored;
        }
        if (isPresent(this._currentDebugContext)) {
          throw new ViewWrappedError(e, this._currentDebugContext);
        }
      }
    };
    DebugAppView.prototype.eventHandler = function(cb) {
      var _this = this;
      var superHandler = _super.prototype.eventHandler.call(this, cb);
      return function(event) {
        _this._resetDebug();
        try {
          return superHandler(event);
        } catch (e) {
          _this._rethrowWithContext(e);
          throw e;
        }
      };
    };
    return DebugAppView;
  }(AppView));
  function _findLastRenderNode(node) {
    var lastNode;
    if (node instanceof AppElement) {
      var appEl = node;
      lastNode = appEl.nativeElement;
      if (isPresent(appEl.nestedViews)) {
        for (var i = appEl.nestedViews.length - 1; i >= 0; i--) {
          var nestedView = appEl.nestedViews[i];
          if (nestedView.rootNodesOrAppElements.length > 0) {
            lastNode = _findLastRenderNode(nestedView.rootNodesOrAppElements[nestedView.rootNodesOrAppElements.length - 1]);
          }
        }
      }
    } else {
      lastNode = node;
    }
    return lastNode;
  }
  var _AnimationOutputHandler = (function() {
    function _AnimationOutputHandler(eventName, eventPhase, handler) {
      this.eventName = eventName;
      this.eventPhase = eventPhase;
      this.handler = handler;
    }
    return _AnimationOutputHandler;
  }());
  var __core_private__ = {
    isDefaultChangeDetectionStrategy: isDefaultChangeDetectionStrategy,
    ChangeDetectorStatus: ChangeDetectorStatus,
    constructDependencies: constructDependencies,
    LifecycleHooks: LifecycleHooks,
    LIFECYCLE_HOOKS_VALUES: LIFECYCLE_HOOKS_VALUES,
    ReflectorReader: ReflectorReader,
    CodegenComponentFactoryResolver: CodegenComponentFactoryResolver,
    AppElement: AppElement,
    AppView: AppView,
    DebugAppView: DebugAppView,
    NgModuleInjector: NgModuleInjector,
    registerModuleFactory: registerModuleFactory,
    ViewType: ViewType,
    MAX_INTERPOLATION_VALUES: MAX_INTERPOLATION_VALUES,
    checkBinding: checkBinding,
    flattenNestedViewRenderNodes: flattenNestedViewRenderNodes,
    interpolate: interpolate,
    ViewUtils: ViewUtils,
    ViewMetadata: ViewMetadata,
    DebugContext: DebugContext,
    StaticNodeDebugInfo: StaticNodeDebugInfo,
    devModeEqual: devModeEqual,
    UNINITIALIZED: UNINITIALIZED,
    ValueUnwrapper: ValueUnwrapper,
    RenderDebugInfo: RenderDebugInfo,
    TemplateRef_: TemplateRef_,
    ReflectionCapabilities: ReflectionCapabilities,
    makeDecorator: makeDecorator,
    DebugDomRootRenderer: DebugDomRootRenderer,
    EMPTY_ARRAY: EMPTY_ARRAY,
    EMPTY_MAP: EMPTY_MAP,
    pureProxy1: pureProxy1,
    pureProxy2: pureProxy2,
    pureProxy3: pureProxy3,
    pureProxy4: pureProxy4,
    pureProxy5: pureProxy5,
    pureProxy6: pureProxy6,
    pureProxy7: pureProxy7,
    pureProxy8: pureProxy8,
    pureProxy9: pureProxy9,
    pureProxy10: pureProxy10,
    castByValue: castByValue,
    Console: Console,
    reflector: reflector,
    Reflector: Reflector,
    NoOpAnimationPlayer: NoOpAnimationPlayer,
    AnimationPlayer: AnimationPlayer,
    AnimationSequencePlayer: AnimationSequencePlayer,
    AnimationGroupPlayer: AnimationGroupPlayer,
    AnimationKeyframe: AnimationKeyframe,
    prepareFinalAnimationStyles: prepareFinalAnimationStyles,
    balanceAnimationKeyframes: balanceAnimationKeyframes,
    flattenStyles: flattenStyles,
    clearStyles: clearStyles,
    renderStyles: renderStyles,
    collectAndResolveStyles: collectAndResolveStyles,
    AnimationStyles: AnimationStyles,
    ANY_STATE: ANY_STATE,
    DEFAULT_STATE: DEFAULT_STATE,
    EMPTY_STATE: EMPTY_STATE,
    FILL_STYLE_FLAG: FILL_STYLE_FLAG,
    ComponentStillLoadingError: ComponentStillLoadingError,
    isPromise: isPromise
  };
  exports.createPlatform = createPlatform;
  exports.assertPlatform = assertPlatform;
  exports.destroyPlatform = destroyPlatform;
  exports.getPlatform = getPlatform;
  exports.PlatformRef = PlatformRef;
  exports.ApplicationRef = ApplicationRef;
  exports.enableProdMode = enableProdMode;
  exports.isDevMode = isDevMode;
  exports.createPlatformFactory = createPlatformFactory;
  exports.APP_ID = APP_ID;
  exports.PACKAGE_ROOT_URL = PACKAGE_ROOT_URL;
  exports.PLATFORM_INITIALIZER = PLATFORM_INITIALIZER;
  exports.APP_BOOTSTRAP_LISTENER = APP_BOOTSTRAP_LISTENER;
  exports.APP_INITIALIZER = APP_INITIALIZER;
  exports.ApplicationInitStatus = ApplicationInitStatus;
  exports.DebugElement = DebugElement;
  exports.DebugNode = DebugNode;
  exports.asNativeElements = asNativeElements;
  exports.getDebugNode = getDebugNode;
  exports.Testability = Testability;
  exports.TestabilityRegistry = TestabilityRegistry;
  exports.setTestabilityGetter = setTestabilityGetter;
  exports.TRANSLATIONS = TRANSLATIONS;
  exports.TRANSLATIONS_FORMAT = TRANSLATIONS_FORMAT;
  exports.LOCALE_ID = LOCALE_ID;
  exports.ApplicationModule = ApplicationModule;
  exports.wtfCreateScope = wtfCreateScope;
  exports.wtfLeave = wtfLeave;
  exports.wtfStartTimeRange = wtfStartTimeRange;
  exports.wtfEndTimeRange = wtfEndTimeRange;
  exports.Type = Type;
  exports.EventEmitter = EventEmitter;
  exports.ErrorHandler = ErrorHandler;
  exports.AnimationTransitionEvent = AnimationTransitionEvent;
  exports.AnimationPlayer = AnimationPlayer;
  exports.Sanitizer = Sanitizer;
  exports.ANALYZE_FOR_ENTRY_COMPONENTS = ANALYZE_FOR_ENTRY_COMPONENTS;
  exports.Attribute = Attribute;
  exports.ContentChild = ContentChild;
  exports.ContentChildren = ContentChildren;
  exports.Query = Query;
  exports.ViewChild = ViewChild;
  exports.ViewChildren = ViewChildren;
  exports.Component = Component;
  exports.Directive = Directive;
  exports.HostBinding = HostBinding;
  exports.HostListener = HostListener;
  exports.Input = Input;
  exports.Output = Output;
  exports.Pipe = Pipe;
  exports.AfterContentChecked = AfterContentChecked;
  exports.AfterContentInit = AfterContentInit;
  exports.AfterViewChecked = AfterViewChecked;
  exports.AfterViewInit = AfterViewInit;
  exports.DoCheck = DoCheck;
  exports.OnChanges = OnChanges;
  exports.OnDestroy = OnDestroy;
  exports.OnInit = OnInit;
  exports.CUSTOM_ELEMENTS_SCHEMA = CUSTOM_ELEMENTS_SCHEMA;
  exports.NO_ERRORS_SCHEMA = NO_ERRORS_SCHEMA;
  exports.NgModule = NgModule;
  exports.Class = Class;
  exports.forwardRef = forwardRef;
  exports.resolveForwardRef = resolveForwardRef;
  exports.Injector = Injector;
  exports.ReflectiveInjector = ReflectiveInjector;
  exports.ResolvedReflectiveFactory = ResolvedReflectiveFactory;
  exports.ReflectiveKey = ReflectiveKey;
  exports.OpaqueToken = OpaqueToken;
  exports.Inject = Inject;
  exports.Optional = Optional;
  exports.Injectable = Injectable;
  exports.Self = Self;
  exports.SkipSelf = SkipSelf;
  exports.Host = Host;
  exports.NgZone = NgZone;
  exports.RenderComponentType = RenderComponentType;
  exports.Renderer = Renderer;
  exports.RootRenderer = RootRenderer;
  exports.COMPILER_OPTIONS = COMPILER_OPTIONS;
  exports.Compiler = Compiler;
  exports.CompilerFactory = CompilerFactory;
  exports.ModuleWithComponentFactories = ModuleWithComponentFactories;
  exports.ComponentFactory = ComponentFactory;
  exports.ComponentRef = ComponentRef;
  exports.ComponentFactoryResolver = ComponentFactoryResolver;
  exports.ElementRef = ElementRef;
  exports.NgModuleFactory = NgModuleFactory;
  exports.NgModuleRef = NgModuleRef;
  exports.NgModuleFactoryLoader = NgModuleFactoryLoader;
  exports.getModuleFactory = getModuleFactory;
  exports.QueryList = QueryList;
  exports.SystemJsNgModuleLoader = SystemJsNgModuleLoader;
  exports.SystemJsNgModuleLoaderConfig = SystemJsNgModuleLoaderConfig;
  exports.TemplateRef = TemplateRef;
  exports.ViewContainerRef = ViewContainerRef;
  exports.EmbeddedViewRef = EmbeddedViewRef;
  exports.ViewRef = ViewRef;
  exports.ChangeDetectorRef = ChangeDetectorRef;
  exports.CollectionChangeRecord = CollectionChangeRecord;
  exports.DefaultIterableDiffer = DefaultIterableDiffer;
  exports.IterableDiffers = IterableDiffers;
  exports.KeyValueChangeRecord = KeyValueChangeRecord;
  exports.KeyValueDiffers = KeyValueDiffers;
  exports.SimpleChange = SimpleChange;
  exports.WrappedValue = WrappedValue;
  exports.platformCore = platformCore;
  exports.__core_private__ = __core_private__;
  exports.AUTO_STYLE = AUTO_STYLE;
  exports.AnimationEntryMetadata = AnimationEntryMetadata;
  exports.AnimationStateMetadata = AnimationStateMetadata;
  exports.AnimationStateDeclarationMetadata = AnimationStateDeclarationMetadata;
  exports.AnimationStateTransitionMetadata = AnimationStateTransitionMetadata;
  exports.AnimationMetadata = AnimationMetadata;
  exports.AnimationKeyframesSequenceMetadata = AnimationKeyframesSequenceMetadata;
  exports.AnimationStyleMetadata = AnimationStyleMetadata;
  exports.AnimationAnimateMetadata = AnimationAnimateMetadata;
  exports.AnimationWithStepsMetadata = AnimationWithStepsMetadata;
  exports.AnimationSequenceMetadata = AnimationSequenceMetadata;
  exports.AnimationGroupMetadata = AnimationGroupMetadata;
  exports.animate = animate;
  exports.group = group;
  exports.sequence = sequence;
  exports.style = style;
  exports.state = state;
  exports.keyframes = keyframes;
  exports.transition = transition;
  exports.trigger = trigger;
}));

_removeDefine();
})();
System.registerDynamic("node_modules/rxjs/observable/BoundCallbackObservable.js", ["../Observable", "../util/tryCatch", "../util/errorObject", "../AsyncSubject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  var AsyncSubject_1 = $__require('../AsyncSubject');
  var BoundCallbackObservable = (function(_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
      _super.call(this);
      this.callbackFunc = callbackFunc;
      this.selector = selector;
      this.args = args;
      this.scheduler = scheduler;
    }
    BoundCallbackObservable.create = function(func, selector, scheduler) {
      if (selector === void 0) {
        selector = undefined;
      }
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return new BoundCallbackObservable(func, selector, args, scheduler);
      };
    };
    BoundCallbackObservable.prototype._subscribe = function(subscriber) {
      var callbackFunc = this.callbackFunc;
      var args = this.args;
      var scheduler = this.scheduler;
      var subject = this.subject;
      if (!scheduler) {
        if (!subject) {
          subject = this.subject = new AsyncSubject_1.AsyncSubject();
          var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector,
                subject = source.subject;
            if (selector) {
              var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
              if (result_1 === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
              } else {
                subject.next(result_1);
                subject.complete();
              }
            } else {
              subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
              subject.complete();
            }
          };
          handler.source = this;
          var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
          if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(BoundCallbackObservable.dispatch, 0, {
          source: this,
          subscriber: subscriber
        });
      }
    };
    BoundCallbackObservable.dispatch = function(state) {
      var self = this;
      var source = state.source,
          subscriber = state.subscriber;
      var callbackFunc = source.callbackFunc,
          args = source.args,
          scheduler = source.scheduler;
      var subject = source.subject;
      if (!subject) {
        subject = source.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function handlerFn() {
          var innerArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            innerArgs[_i - 0] = arguments[_i];
          }
          var source = handlerFn.source;
          var selector = source.selector,
              subject = source.subject;
          if (selector) {
            var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
            if (result_2 === errorObject_1.errorObject) {
              self.add(scheduler.schedule(dispatchError, 0, {
                err: errorObject_1.errorObject.e,
                subject: subject
              }));
            } else {
              self.add(scheduler.schedule(dispatchNext, 0, {
                value: result_2,
                subject: subject
              }));
            }
          } else {
            var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
            self.add(scheduler.schedule(dispatchNext, 0, {
              value: value,
              subject: subject
            }));
          }
        };
        handler.source = source;
        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
        if (result === errorObject_1.errorObject) {
          subject.error(errorObject_1.errorObject.e);
        }
      }
      self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
  }(Observable_1.Observable));
  exports.BoundCallbackObservable = BoundCallbackObservable;
  function dispatchNext(arg) {
    var value = arg.value,
        subject = arg.subject;
    subject.next(value);
    subject.complete();
  }
  function dispatchError(arg) {
    var err = arg.err,
        subject = arg.subject;
    subject.error(err);
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/bindCallback.js", ["./BoundCallbackObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var BoundCallbackObservable_1 = $__require('./BoundCallbackObservable');
  exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/bindCallback.js", ["../../Observable", "../../observable/bindCallback"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var bindCallback_1 = $__require('../../observable/bindCallback');
  Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/BoundNodeCallbackObservable.js", ["../Observable", "../util/tryCatch", "../util/errorObject", "../AsyncSubject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  var AsyncSubject_1 = $__require('../AsyncSubject');
  var BoundNodeCallbackObservable = (function(_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
      _super.call(this);
      this.callbackFunc = callbackFunc;
      this.selector = selector;
      this.args = args;
      this.scheduler = scheduler;
    }
    BoundNodeCallbackObservable.create = function(func, selector, scheduler) {
      if (selector === void 0) {
        selector = undefined;
      }
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return new BoundNodeCallbackObservable(func, selector, args, scheduler);
      };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function(subscriber) {
      var callbackFunc = this.callbackFunc;
      var args = this.args;
      var scheduler = this.scheduler;
      var subject = this.subject;
      if (!scheduler) {
        if (!subject) {
          subject = this.subject = new AsyncSubject_1.AsyncSubject();
          var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector,
                subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
              subject.error(err);
            } else if (selector) {
              var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
              if (result_1 === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
              } else {
                subject.next(result_1);
                subject.complete();
              }
            } else {
              subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
              subject.complete();
            }
          };
          handler.source = this;
          var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
          if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          source: this,
          subscriber: subscriber
        });
      }
    };
    return BoundNodeCallbackObservable;
  }(Observable_1.Observable));
  exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
  function dispatch(state) {
    var self = this;
    var source = state.source,
        subscriber = state.subscriber;
    var _a = source,
        callbackFunc = _a.callbackFunc,
        args = _a.args,
        scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
      subject = source.subject = new AsyncSubject_1.AsyncSubject();
      var handler = function handlerFn() {
        var innerArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          innerArgs[_i - 0] = arguments[_i];
        }
        var source = handlerFn.source;
        var selector = source.selector,
            subject = source.subject;
        var err = innerArgs.shift();
        if (err) {
          subject.error(err);
        } else if (selector) {
          var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
          if (result_2 === errorObject_1.errorObject) {
            self.add(scheduler.schedule(dispatchError, 0, {
              err: errorObject_1.errorObject.e,
              subject: subject
            }));
          } else {
            self.add(scheduler.schedule(dispatchNext, 0, {
              value: result_2,
              subject: subject
            }));
          }
        } else {
          var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
          self.add(scheduler.schedule(dispatchNext, 0, {
            value: value,
            subject: subject
          }));
        }
      };
      handler.source = source;
      var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
      if (result === errorObject_1.errorObject) {
        subject.error(errorObject_1.errorObject.e);
      }
    }
    self.add(subject.subscribe(subscriber));
  }
  function dispatchNext(arg) {
    var value = arg.value,
        subject = arg.subject;
    subject.next(value);
    subject.complete();
  }
  function dispatchError(arg) {
    var err = arg.err,
        subject = arg.subject;
    subject.error(err);
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/bindNodeCallback.js", ["./BoundNodeCallbackObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var BoundNodeCallbackObservable_1 = $__require('./BoundNodeCallbackObservable');
  exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/bindNodeCallback.js", ["../../Observable", "../../observable/bindNodeCallback"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var bindNodeCallback_1 = $__require('../../observable/bindNodeCallback');
  Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/combineLatest.js", ["../util/isScheduler", "../util/isArray", "./ArrayObservable", "../operator/combineLatest"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isScheduler_1 = $__require('../util/isScheduler');
  var isArray_1 = $__require('../util/isArray');
  var ArrayObservable_1 = $__require('./ArrayObservable');
  var combineLatest_1 = $__require('../operator/combineLatest');
  function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
      scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
      project = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
  }
  exports.combineLatest = combineLatest;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/combineLatest.js", ["../../Observable", "../../observable/combineLatest"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var combineLatest_1 = $__require('../../observable/combineLatest');
  Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/concat.js", ["../operator/concat"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var concat_1 = $__require('../operator/concat');
  exports.concat = concat_1.concatStatic;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/concat.js", ["../../Observable", "../../observable/concat"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var concat_1 = $__require('../../observable/concat');
  Observable_1.Observable.concat = concat_1.concat;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/DeferObservable.js", ["../Observable", "../util/subscribeToResult", "../OuterSubscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var DeferObservable = (function(_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
      _super.call(this);
      this.observableFactory = observableFactory;
    }
    DeferObservable.create = function(observableFactory) {
      return new DeferObservable(observableFactory);
    };
    DeferObservable.prototype._subscribe = function(subscriber) {
      return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
  }(Observable_1.Observable));
  exports.DeferObservable = DeferObservable;
  var DeferSubscriber = (function(_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
      _super.call(this, destination);
      this.factory = factory;
      this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function() {
      try {
        this._callFactory();
      } catch (err) {
        this._error(err);
      }
    };
    DeferSubscriber.prototype._callFactory = function() {
      var result = this.factory();
      if (result) {
        this.add(subscribeToResult_1.subscribeToResult(this, result));
      }
    };
    return DeferSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/defer.js", ["./DeferObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var DeferObservable_1 = $__require('./DeferObservable');
  exports.defer = DeferObservable_1.DeferObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/defer.js", ["../../Observable", "../../observable/defer"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var defer_1 = $__require('../../observable/defer');
  Observable_1.Observable.defer = defer_1.defer;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/empty.js", ["./EmptyObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var EmptyObservable_1 = $__require('./EmptyObservable');
  exports.empty = EmptyObservable_1.EmptyObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/empty.js", ["../../Observable", "../../observable/empty"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var empty_1 = $__require('../../observable/empty');
  Observable_1.Observable.empty = empty_1.empty;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/ForkJoinObservable.js", ["../Observable", "./EmptyObservable", "../util/isArray", "../util/subscribeToResult", "../OuterSubscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var EmptyObservable_1 = $__require('./EmptyObservable');
  var isArray_1 = $__require('../util/isArray');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var ForkJoinObservable = (function(_super) {
    __extends(ForkJoinObservable, _super);
    function ForkJoinObservable(sources, resultSelector) {
      _super.call(this);
      this.sources = sources;
      this.resultSelector = resultSelector;
    }
    ForkJoinObservable.create = function() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i - 0] = arguments[_i];
      }
      if (sources === null || arguments.length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      }
      var resultSelector = null;
      if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
      }
      if (sources.length === 1 && isArray_1.isArray(sources[0])) {
        sources = sources[0];
      }
      if (sources.length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      }
      return new ForkJoinObservable(sources, resultSelector);
    };
    ForkJoinObservable.prototype._subscribe = function(subscriber) {
      return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
    };
    return ForkJoinObservable;
  }(Observable_1.Observable));
  exports.ForkJoinObservable = ForkJoinObservable;
  var ForkJoinSubscriber = (function(_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources, resultSelector) {
      _super.call(this, destination);
      this.sources = sources;
      this.resultSelector = resultSelector;
      this.completed = 0;
      this.haveValues = 0;
      var len = sources.length;
      this.total = len;
      this.values = new Array(len);
      for (var i = 0; i < len; i++) {
        var source = sources[i];
        var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
        if (innerSubscription) {
          innerSubscription.outerIndex = i;
          this.add(innerSubscription);
        }
      }
    }
    ForkJoinSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.values[outerIndex] = innerValue;
      if (!innerSub._hasValue) {
        innerSub._hasValue = true;
        this.haveValues++;
      }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function(innerSub) {
      var destination = this.destination;
      var _a = this,
          haveValues = _a.haveValues,
          resultSelector = _a.resultSelector,
          values = _a.values;
      var len = values.length;
      if (!innerSub._hasValue) {
        destination.complete();
        return;
      }
      this.completed++;
      if (this.completed !== len) {
        return;
      }
      if (haveValues === len) {
        var value = resultSelector ? resultSelector.apply(this, values) : values;
        destination.next(value);
      }
      destination.complete();
    };
    return ForkJoinSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/forkJoin.js", ["./ForkJoinObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ForkJoinObservable_1 = $__require('./ForkJoinObservable');
  exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/forkJoin.js", ["../../Observable", "../../observable/forkJoin"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var forkJoin_1 = $__require('../../observable/forkJoin');
  Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/from.js", ["./FromObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var FromObservable_1 = $__require('./FromObservable');
  exports.from = FromObservable_1.FromObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/from.js", ["../../Observable", "../../observable/from"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var from_1 = $__require('../../observable/from');
  Observable_1.Observable.from = from_1.from;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/FromEventObservable.js", ["../Observable", "../util/tryCatch", "../util/isFunction", "../util/errorObject", "../Subscription"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var tryCatch_1 = $__require('../util/tryCatch');
  var isFunction_1 = $__require('../util/isFunction');
  var errorObject_1 = $__require('../util/errorObject');
  var Subscription_1 = $__require('../Subscription');
  function isNodeStyleEventEmmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
  }
  function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
  }
  function isNodeList(sourceObj) {
    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
  }
  function isHTMLCollection(sourceObj) {
    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
  }
  function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
  }
  var FromEventObservable = (function(_super) {
    __extends(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector, options) {
      _super.call(this);
      this.sourceObj = sourceObj;
      this.eventName = eventName;
      this.selector = selector;
      this.options = options;
    }
    FromEventObservable.create = function(target, eventName, options, selector) {
      if (isFunction_1.isFunction(options)) {
        selector = options;
        options = undefined;
      }
      return new FromEventObservable(target, eventName, selector, options);
    };
    FromEventObservable.setupSubscription = function(sourceObj, eventName, handler, subscriber, options) {
      var unsubscribe;
      if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
        for (var i = 0,
            len = sourceObj.length; i < len; i++) {
          FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
      } else if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function() {
          return source_1.removeEventListener(eventName, handler);
        };
      } else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function() {
          return source_2.off(eventName, handler);
        };
      } else if (isNodeStyleEventEmmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function() {
          return source_3.removeListener(eventName, handler);
        };
      }
      subscriber.add(new Subscription_1.Subscription(unsubscribe));
    };
    FromEventObservable.prototype._subscribe = function(subscriber) {
      var sourceObj = this.sourceObj;
      var eventName = this.eventName;
      var options = this.options;
      var selector = this.selector;
      var handler = selector ? function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
        if (result === errorObject_1.errorObject) {
          subscriber.error(errorObject_1.errorObject.e);
        } else {
          subscriber.next(result);
        }
      } : function(e) {
        return subscriber.next(e);
      };
      FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
    };
    return FromEventObservable;
  }(Observable_1.Observable));
  exports.FromEventObservable = FromEventObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/fromEvent.js", ["./FromEventObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var FromEventObservable_1 = $__require('./FromEventObservable');
  exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/fromEvent.js", ["../../Observable", "../../observable/fromEvent"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var fromEvent_1 = $__require('../../observable/fromEvent');
  Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/FromEventPatternObservable.js", ["../Observable", "../Subscription"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var Subscription_1 = $__require('../Subscription');
  var FromEventPatternObservable = (function(_super) {
    __extends(FromEventPatternObservable, _super);
    function FromEventPatternObservable(addHandler, removeHandler, selector) {
      _super.call(this);
      this.addHandler = addHandler;
      this.removeHandler = removeHandler;
      this.selector = selector;
    }
    FromEventPatternObservable.create = function(addHandler, removeHandler, selector) {
      return new FromEventPatternObservable(addHandler, removeHandler, selector);
    };
    FromEventPatternObservable.prototype._subscribe = function(subscriber) {
      var _this = this;
      var removeHandler = this.removeHandler;
      var handler = !!this.selector ? function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        _this._callSelector(subscriber, args);
      } : function(e) {
        subscriber.next(e);
      };
      this._callAddHandler(handler, subscriber);
      subscriber.add(new Subscription_1.Subscription(function() {
        removeHandler(handler);
      }));
    };
    FromEventPatternObservable.prototype._callSelector = function(subscriber, args) {
      try {
        var result = this.selector.apply(this, args);
        subscriber.next(result);
      } catch (e) {
        subscriber.error(e);
      }
    };
    FromEventPatternObservable.prototype._callAddHandler = function(handler, errorSubscriber) {
      try {
        this.addHandler(handler);
      } catch (e) {
        errorSubscriber.error(e);
      }
    };
    return FromEventPatternObservable;
  }(Observable_1.Observable));
  exports.FromEventPatternObservable = FromEventPatternObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/fromEventPattern.js", ["./FromEventPatternObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var FromEventPatternObservable_1 = $__require('./FromEventPatternObservable');
  exports.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/fromEventPattern.js", ["../../Observable", "../../observable/fromEventPattern"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var fromEventPattern_1 = $__require('../../observable/fromEventPattern');
  Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/fromPromise.js", ["./PromiseObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var PromiseObservable_1 = $__require('./PromiseObservable');
  exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/fromPromise.js", ["../../Observable", "../../observable/fromPromise"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var fromPromise_1 = $__require('../../observable/fromPromise');
  Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/GenerateObservable.js", ["../Observable", "../util/isScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var isScheduler_1 = $__require('../util/isScheduler');
  var selfSelector = function(value) {
    return value;
  };
  var GenerateObservable = (function(_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
      _super.call(this);
      this.initialState = initialState;
      this.condition = condition;
      this.iterate = iterate;
      this.resultSelector = resultSelector;
      this.scheduler = scheduler;
    }
    GenerateObservable.create = function(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
      if (arguments.length == 1) {
        return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
      }
      if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
        return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
      }
      return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    GenerateObservable.prototype._subscribe = function(subscriber) {
      var state = this.initialState;
      if (this.scheduler) {
        return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
          subscriber: subscriber,
          iterate: this.iterate,
          condition: this.condition,
          resultSelector: this.resultSelector,
          state: state
        });
      }
      var _a = this,
          condition = _a.condition,
          resultSelector = _a.resultSelector,
          iterate = _a.iterate;
      do {
        if (condition) {
          var conditionResult = void 0;
          try {
            conditionResult = condition(state);
          } catch (err) {
            subscriber.error(err);
            return;
          }
          if (!conditionResult) {
            subscriber.complete();
            break;
          }
        }
        var value = void 0;
        try {
          value = resultSelector(state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
          break;
        }
        try {
          state = iterate(state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
      } while (true);
    };
    GenerateObservable.dispatch = function(state) {
      var subscriber = state.subscriber,
          condition = state.condition;
      if (subscriber.closed) {
        return;
      }
      if (state.needIterate) {
        try {
          state.state = state.iterate(state.state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
      } else {
        state.needIterate = true;
      }
      if (condition) {
        var conditionResult = void 0;
        try {
          conditionResult = condition(state.state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (!conditionResult) {
          subscriber.complete();
          return;
        }
        if (subscriber.closed) {
          return;
        }
      }
      var value;
      try {
        value = state.resultSelector(state.state);
      } catch (err) {
        subscriber.error(err);
        return;
      }
      if (subscriber.closed) {
        return;
      }
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
      return this.schedule(state);
    };
    return GenerateObservable;
  }(Observable_1.Observable));
  exports.GenerateObservable = GenerateObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/generate.js", ["../../Observable", "../../observable/GenerateObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var GenerateObservable_1 = $__require('../../observable/GenerateObservable');
  Observable_1.Observable.generate = GenerateObservable_1.GenerateObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/IfObservable.js", ["../Observable", "../util/subscribeToResult", "../OuterSubscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var IfObservable = (function(_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
      _super.call(this);
      this.condition = condition;
      this.thenSource = thenSource;
      this.elseSource = elseSource;
    }
    IfObservable.create = function(condition, thenSource, elseSource) {
      return new IfObservable(condition, thenSource, elseSource);
    };
    IfObservable.prototype._subscribe = function(subscriber) {
      var _a = this,
          condition = _a.condition,
          thenSource = _a.thenSource,
          elseSource = _a.elseSource;
      return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
  }(Observable_1.Observable));
  exports.IfObservable = IfObservable;
  var IfSubscriber = (function(_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
      _super.call(this, destination);
      this.condition = condition;
      this.thenSource = thenSource;
      this.elseSource = elseSource;
      this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function() {
      var _a = this,
          condition = _a.condition,
          thenSource = _a.thenSource,
          elseSource = _a.elseSource;
      var result;
      try {
        result = condition();
        var source = result ? thenSource : elseSource;
        if (source) {
          this.add(subscribeToResult_1.subscribeToResult(this, source));
        } else {
          this._complete();
        }
      } catch (err) {
        this._error(err);
      }
    };
    return IfSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/if.js", ["./IfObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IfObservable_1 = $__require('./IfObservable');
  exports._if = IfObservable_1.IfObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/if.js", ["../../Observable", "../../observable/if"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var if_1 = $__require('../../observable/if');
  Observable_1.Observable.if = if_1._if;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/IntervalObservable.js", ["../util/isNumeric", "../Observable", "../scheduler/async"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isNumeric_1 = $__require('../util/isNumeric');
  var Observable_1 = $__require('../Observable');
  var async_1 = $__require('../scheduler/async');
  var IntervalObservable = (function(_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      _super.call(this);
      this.period = period;
      this.scheduler = scheduler;
      if (!isNumeric_1.isNumeric(period) || period < 0) {
        this.period = 0;
      }
      if (!scheduler || typeof scheduler.schedule !== 'function') {
        this.scheduler = async_1.async;
      }
    }
    IntervalObservable.create = function(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function(state) {
      var index = state.index,
          subscriber = state.subscriber,
          period = state.period;
      subscriber.next(index);
      if (subscriber.closed) {
        return;
      }
      state.index += 1;
      this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var period = this.period;
      var scheduler = this.scheduler;
      subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
        index: index,
        subscriber: subscriber,
        period: period
      }));
    };
    return IntervalObservable;
  }(Observable_1.Observable));
  exports.IntervalObservable = IntervalObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/interval.js", ["./IntervalObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var IntervalObservable_1 = $__require('./IntervalObservable');
  exports.interval = IntervalObservable_1.IntervalObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/interval.js", ["../../Observable", "../../observable/interval"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var interval_1 = $__require('../../observable/interval');
  Observable_1.Observable.interval = interval_1.interval;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/merge.js", ["../operator/merge"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var merge_1 = $__require('../operator/merge');
  exports.merge = merge_1.mergeStatic;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/merge.js", ["../../Observable", "../../observable/merge"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var merge_1 = $__require('../../observable/merge');
  Observable_1.Observable.merge = merge_1.merge;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/race.js", ["../../Observable", "../../operator/race"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var race_1 = $__require('../../operator/race');
  Observable_1.Observable.race = race_1.raceStatic;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/NeverObservable.js", ["../Observable", "../util/noop"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var noop_1 = $__require('../util/noop');
  var NeverObservable = (function(_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
      _super.call(this);
    }
    NeverObservable.create = function() {
      return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function(subscriber) {
      noop_1.noop();
    };
    return NeverObservable;
  }(Observable_1.Observable));
  exports.NeverObservable = NeverObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/never.js", ["./NeverObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var NeverObservable_1 = $__require('./NeverObservable');
  exports.never = NeverObservable_1.NeverObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/never.js", ["../../Observable", "../../observable/never"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var never_1 = $__require('../../observable/never');
  Observable_1.Observable.never = never_1.never;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/of.js", ["./ArrayObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ArrayObservable_1 = $__require('./ArrayObservable');
  exports.of = ArrayObservable_1.ArrayObservable.of;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/of.js", ["../../Observable", "../../observable/of"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var of_1 = $__require('../../observable/of');
  Observable_1.Observable.of = of_1.of;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/onErrorResumeNext.js", ["../../Observable", "../../operator/onErrorResumeNext"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var onErrorResumeNext_1 = $__require('../../operator/onErrorResumeNext');
  Observable_1.Observable.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNextStatic;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/PairsObservable.js", ["../Observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  function dispatch(state) {
    var obj = state.obj,
        keys = state.keys,
        length = state.length,
        index = state.index,
        subscriber = state.subscriber;
    if (index === length) {
      subscriber.complete();
      return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
  }
  var PairsObservable = (function(_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
      _super.call(this);
      this.obj = obj;
      this.scheduler = scheduler;
      this.keys = Object.keys(obj);
    }
    PairsObservable.create = function(obj, scheduler) {
      return new PairsObservable(obj, scheduler);
    };
    PairsObservable.prototype._subscribe = function(subscriber) {
      var _a = this,
          keys = _a.keys,
          scheduler = _a.scheduler;
      var length = keys.length;
      if (scheduler) {
        return scheduler.schedule(dispatch, 0, {
          obj: this.obj,
          keys: keys,
          length: length,
          index: 0,
          subscriber: subscriber
        });
      } else {
        for (var idx = 0; idx < length; idx++) {
          var key = keys[idx];
          subscriber.next([key, this.obj[key]]);
        }
        subscriber.complete();
      }
    };
    return PairsObservable;
  }(Observable_1.Observable));
  exports.PairsObservable = PairsObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/pairs.js", ["./PairsObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var PairsObservable_1 = $__require('./PairsObservable');
  exports.pairs = PairsObservable_1.PairsObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/pairs.js", ["../../Observable", "../../observable/pairs"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var pairs_1 = $__require('../../observable/pairs');
  Observable_1.Observable.pairs = pairs_1.pairs;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/RangeObservable.js", ["../Observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var RangeObservable = (function(_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
      _super.call(this);
      this.start = start;
      this._count = count;
      this.scheduler = scheduler;
    }
    RangeObservable.create = function(start, count, scheduler) {
      if (start === void 0) {
        start = 0;
      }
      if (count === void 0) {
        count = 0;
      }
      return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function(state) {
      var start = state.start,
          index = state.index,
          count = state.count,
          subscriber = state.subscriber;
      if (index >= count) {
        subscriber.complete();
        return;
      }
      subscriber.next(start);
      if (subscriber.closed) {
        return;
      }
      state.index = index + 1;
      state.start = start + 1;
      this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var start = this.start;
      var count = this._count;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(RangeObservable.dispatch, 0, {
          index: index,
          count: count,
          start: start,
          subscriber: subscriber
        });
      } else {
        do {
          if (index++ >= count) {
            subscriber.complete();
            break;
          }
          subscriber.next(start++);
          if (subscriber.closed) {
            break;
          }
        } while (true);
      }
    };
    return RangeObservable;
  }(Observable_1.Observable));
  exports.RangeObservable = RangeObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/range.js", ["./RangeObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var RangeObservable_1 = $__require('./RangeObservable');
  exports.range = RangeObservable_1.RangeObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/range.js", ["../../Observable", "../../observable/range"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var range_1 = $__require('../../observable/range');
  Observable_1.Observable.range = range_1.range;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/UsingObservable.js", ["../Observable", "../util/subscribeToResult", "../OuterSubscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var UsingObservable = (function(_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
      _super.call(this);
      this.resourceFactory = resourceFactory;
      this.observableFactory = observableFactory;
    }
    UsingObservable.create = function(resourceFactory, observableFactory) {
      return new UsingObservable(resourceFactory, observableFactory);
    };
    UsingObservable.prototype._subscribe = function(subscriber) {
      var _a = this,
          resourceFactory = _a.resourceFactory,
          observableFactory = _a.observableFactory;
      var resource;
      try {
        resource = resourceFactory();
        return new UsingSubscriber(subscriber, resource, observableFactory);
      } catch (err) {
        subscriber.error(err);
      }
    };
    return UsingObservable;
  }(Observable_1.Observable));
  exports.UsingObservable = UsingObservable;
  var UsingSubscriber = (function(_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
      _super.call(this, destination);
      this.resource = resource;
      this.observableFactory = observableFactory;
      destination.add(resource);
      this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function() {
      try {
        var source = this.observableFactory.call(this, this.resource);
        if (source) {
          this.add(subscribeToResult_1.subscribeToResult(this, source));
        }
      } catch (err) {
        this._error(err);
      }
    };
    return UsingSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/using.js", ["./UsingObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var UsingObservable_1 = $__require('./UsingObservable');
  exports.using = UsingObservable_1.UsingObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/using.js", ["../../Observable", "../../observable/using"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var using_1 = $__require('../../observable/using');
  Observable_1.Observable.using = using_1.using;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/ErrorObservable.js", ["../Observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var ErrorObservable = (function(_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
      _super.call(this);
      this.error = error;
      this.scheduler = scheduler;
    }
    ErrorObservable.create = function(error, scheduler) {
      return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function(arg) {
      var error = arg.error,
          subscriber = arg.subscriber;
      subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function(subscriber) {
      var error = this.error;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ErrorObservable.dispatch, 0, {
          error: error,
          subscriber: subscriber
        });
      } else {
        subscriber.error(error);
      }
    };
    return ErrorObservable;
  }(Observable_1.Observable));
  exports.ErrorObservable = ErrorObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/throw.js", ["./ErrorObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ErrorObservable_1 = $__require('./ErrorObservable');
  exports._throw = ErrorObservable_1.ErrorObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/throw.js", ["../../Observable", "../../observable/throw"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var throw_1 = $__require('../../observable/throw');
  Observable_1.Observable.throw = throw_1._throw;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/TimerObservable.js", ["../util/isNumeric", "../Observable", "../scheduler/async", "../util/isScheduler", "../util/isDate"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isNumeric_1 = $__require('../util/isNumeric');
  var Observable_1 = $__require('../Observable');
  var async_1 = $__require('../scheduler/async');
  var isScheduler_1 = $__require('../util/isScheduler');
  var isDate_1 = $__require('../util/isDate');
  var TimerObservable = (function(_super) {
    __extends(TimerObservable, _super);
    function TimerObservable(dueTime, period, scheduler) {
      if (dueTime === void 0) {
        dueTime = 0;
      }
      _super.call(this);
      this.period = -1;
      this.dueTime = 0;
      if (isNumeric_1.isNumeric(period)) {
        this.period = Number(period) < 1 && 1 || Number(period);
      } else if (isScheduler_1.isScheduler(period)) {
        scheduler = period;
      }
      if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
      }
      this.scheduler = scheduler;
      this.dueTime = isDate_1.isDate(dueTime) ? (+dueTime - this.scheduler.now()) : dueTime;
    }
    TimerObservable.create = function(initialDelay, period, scheduler) {
      if (initialDelay === void 0) {
        initialDelay = 0;
      }
      return new TimerObservable(initialDelay, period, scheduler);
    };
    TimerObservable.dispatch = function(state) {
      var index = state.index,
          period = state.period,
          subscriber = state.subscriber;
      var action = this;
      subscriber.next(index);
      if (subscriber.closed) {
        return;
      } else if (period === -1) {
        return subscriber.complete();
      }
      state.index = index + 1;
      action.schedule(state, period);
    };
    TimerObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var _a = this,
          period = _a.period,
          dueTime = _a.dueTime,
          scheduler = _a.scheduler;
      return scheduler.schedule(TimerObservable.dispatch, dueTime, {
        index: index,
        period: period,
        subscriber: subscriber
      });
    };
    return TimerObservable;
  }(Observable_1.Observable));
  exports.TimerObservable = TimerObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/timer.js", ["./TimerObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var TimerObservable_1 = $__require('./TimerObservable');
  exports.timer = TimerObservable_1.TimerObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/timer.js", ["../../Observable", "../../observable/timer"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var timer_1 = $__require('../../observable/timer');
  Observable_1.Observable.timer = timer_1.timer;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/zip.js", ["../operator/zip"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var zip_1 = $__require('../operator/zip');
  exports.zip = zip_1.zipStatic;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/zip.js", ["../../Observable", "../../observable/zip"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var zip_1 = $__require('../../observable/zip');
  Observable_1.Observable.zip = zip_1.zip;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/dom/ajax.js", ["./AjaxObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var AjaxObservable_1 = $__require('./AjaxObservable');
  exports.ajax = AjaxObservable_1.AjaxObservable.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/dom/ajax.js", ["../../../Observable", "../../../observable/dom/ajax"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../../Observable');
  var ajax_1 = $__require('../../../observable/dom/ajax');
  Observable_1.Observable.ajax = ajax_1.ajax;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/assign.js", ["./root"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('./root');
  var Object = root_1.root.Object;
  if (typeof Object.assign != 'function') {
    (function() {
      Object.assign = function assignPolyfill(target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          sources[_i - 1] = arguments[_i];
        }
        if (target === undefined || target === null) {
          throw new TypeError('cannot convert undefined or null to object');
        }
        var output = Object(target);
        var len = sources.length;
        for (var index = 0; index < len; index++) {
          var source = sources[index];
          if (source !== undefined && source !== null) {
            for (var key in source) {
              if (source.hasOwnProperty(key)) {
                output[key] = source[key];
              }
            }
          }
        }
        return output;
      };
    })();
  }
  exports.assign = Object.assign;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/dom/WebSocketSubject.js", ["../../Subject", "../../Subscriber", "../../Observable", "../../Subscription", "../../util/root", "../../ReplaySubject", "../../util/tryCatch", "../../util/errorObject", "../../util/assign"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('../../Subject');
  var Subscriber_1 = $__require('../../Subscriber');
  var Observable_1 = $__require('../../Observable');
  var Subscription_1 = $__require('../../Subscription');
  var root_1 = $__require('../../util/root');
  var ReplaySubject_1 = $__require('../../ReplaySubject');
  var tryCatch_1 = $__require('../../util/tryCatch');
  var errorObject_1 = $__require('../../util/errorObject');
  var assign_1 = $__require('../../util/assign');
  var WebSocketSubject = (function(_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
      if (urlConfigOrSource instanceof Observable_1.Observable) {
        _super.call(this, destination, urlConfigOrSource);
      } else {
        _super.call(this);
        this.WebSocketCtor = root_1.root.WebSocket;
        this._output = new Subject_1.Subject();
        if (typeof urlConfigOrSource === 'string') {
          this.url = urlConfigOrSource;
        } else {
          assign_1.assign(this, urlConfigOrSource);
        }
        if (!this.WebSocketCtor) {
          throw new Error('no WebSocket constructor can be found');
        }
        this.destination = new ReplaySubject_1.ReplaySubject();
      }
    }
    WebSocketSubject.prototype.resultSelector = function(e) {
      return JSON.parse(e.data);
    };
    WebSocketSubject.create = function(urlConfigOrSource) {
      return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function(operator) {
      var sock = new WebSocketSubject(this, this.destination);
      sock.operator = operator;
      return sock;
    };
    WebSocketSubject.prototype.multiplex = function(subMsg, unsubMsg, messageFilter) {
      var self = this;
      return new Observable_1.Observable(function(observer) {
        var result = tryCatch_1.tryCatch(subMsg)();
        if (result === errorObject_1.errorObject) {
          observer.error(errorObject_1.errorObject.e);
        } else {
          self.next(result);
        }
        var subscription = self.subscribe(function(x) {
          var result = tryCatch_1.tryCatch(messageFilter)(x);
          if (result === errorObject_1.errorObject) {
            observer.error(errorObject_1.errorObject.e);
          } else if (result) {
            observer.next(x);
          }
        }, function(err) {
          return observer.error(err);
        }, function() {
          return observer.complete();
        });
        return function() {
          var result = tryCatch_1.tryCatch(unsubMsg)();
          if (result === errorObject_1.errorObject) {
            observer.error(errorObject_1.errorObject.e);
          } else {
            self.next(result);
          }
          subscription.unsubscribe();
        };
      });
    };
    WebSocketSubject.prototype._connectSocket = function() {
      var _this = this;
      var WebSocketCtor = this.WebSocketCtor;
      var observer = this._output;
      var socket = null;
      try {
        socket = this.protocol ? new WebSocketCtor(this.url, this.protocol) : new WebSocketCtor(this.url);
        this.socket = socket;
      } catch (e) {
        observer.error(e);
        return;
      }
      var subscription = new Subscription_1.Subscription(function() {
        _this.socket = null;
        if (socket && socket.readyState === 1) {
          socket.close();
        }
      });
      socket.onopen = function(e) {
        var openObserver = _this.openObserver;
        if (openObserver) {
          openObserver.next(e);
        }
        var queue = _this.destination;
        _this.destination = Subscriber_1.Subscriber.create(function(x) {
          return socket.readyState === 1 && socket.send(x);
        }, function(e) {
          var closingObserver = _this.closingObserver;
          if (closingObserver) {
            closingObserver.next(undefined);
          }
          if (e && e.code) {
            socket.close(e.code, e.reason);
          } else {
            observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' + 'and an optional reason: { code: number, reason: string }'));
          }
          _this.destination = new ReplaySubject_1.ReplaySubject();
          _this.socket = null;
        }, function() {
          var closingObserver = _this.closingObserver;
          if (closingObserver) {
            closingObserver.next(undefined);
          }
          socket.close();
          _this.destination = new ReplaySubject_1.ReplaySubject();
          _this.socket = null;
        });
        if (queue && queue instanceof ReplaySubject_1.ReplaySubject) {
          subscription.add(queue.subscribe(_this.destination));
        }
      };
      socket.onerror = function(e) {
        return observer.error(e);
      };
      socket.onclose = function(e) {
        var closeObserver = _this.closeObserver;
        if (closeObserver) {
          closeObserver.next(e);
        }
        if (e.wasClean) {
          observer.complete();
        } else {
          observer.error(e);
        }
      };
      socket.onmessage = function(e) {
        var result = tryCatch_1.tryCatch(_this.resultSelector)(e);
        if (result === errorObject_1.errorObject) {
          observer.error(errorObject_1.errorObject.e);
        } else {
          observer.next(result);
        }
      };
    };
    WebSocketSubject.prototype._subscribe = function(subscriber) {
      var _this = this;
      var source = this.source;
      if (source) {
        return source.subscribe(subscriber);
      }
      if (!this.socket) {
        this._connectSocket();
      }
      var subscription = new Subscription_1.Subscription();
      subscription.add(this._output.subscribe(subscriber));
      subscription.add(function() {
        var socket = _this.socket;
        if (_this._output.observers.length === 0 && socket && socket.readyState === 1) {
          socket.close();
          _this.socket = null;
        }
      });
      return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function() {
      var _a = this,
          source = _a.source,
          socket = _a.socket;
      if (socket && socket.readyState === 1) {
        socket.close();
        this.socket = null;
      }
      _super.prototype.unsubscribe.call(this);
      if (!source) {
        this.destination = new ReplaySubject_1.ReplaySubject();
      }
    };
    return WebSocketSubject;
  }(Subject_1.AnonymousSubject));
  exports.WebSocketSubject = WebSocketSubject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/dom/webSocket.js", ["./WebSocketSubject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var WebSocketSubject_1 = $__require('./WebSocketSubject');
  exports.webSocket = WebSocketSubject_1.WebSocketSubject.create;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/observable/dom/webSocket.js", ["../../../Observable", "../../../observable/dom/webSocket"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../../Observable');
  var webSocket_1 = $__require('../../../observable/dom/webSocket');
  Observable_1.Observable.webSocket = webSocket_1.webSocket;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/buffer.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function buffer(closingNotifier) {
    return this.lift(new BufferOperator(closingNotifier));
  }
  exports.buffer = buffer;
  var BufferOperator = (function() {
    function BufferOperator(closingNotifier) {
      this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
  }());
  var BufferSubscriber = (function(_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
      _super.call(this, destination);
      this.buffer = [];
      this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
    }
    BufferSubscriber.prototype._next = function(value) {
      this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var buffer = this.buffer;
      this.buffer = [];
      this.destination.next(buffer);
    };
    return BufferSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/buffer.js", ["../../Observable", "../../operator/buffer"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var buffer_1 = $__require('../../operator/buffer');
  Observable_1.Observable.prototype.buffer = buffer_1.buffer;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/bufferCount.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
      startBufferEvery = null;
    }
    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
  }
  exports.bufferCount = bufferCount;
  var BufferCountOperator = (function() {
    function BufferCountOperator(bufferSize, startBufferEvery) {
      this.bufferSize = bufferSize;
      this.startBufferEvery = startBufferEvery;
    }
    BufferCountOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
  }());
  var BufferCountSubscriber = (function(_super) {
    __extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
      _super.call(this, destination);
      this.bufferSize = bufferSize;
      this.startBufferEvery = startBufferEvery;
      this.buffers = [[]];
      this.count = 0;
    }
    BufferCountSubscriber.prototype._next = function(value) {
      var count = (this.count += 1);
      var destination = this.destination;
      var bufferSize = this.bufferSize;
      var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
      var buffers = this.buffers;
      var len = buffers.length;
      var remove = -1;
      if (count % startBufferEvery === 0) {
        buffers.push([]);
      }
      for (var i = 0; i < len; i++) {
        var buffer = buffers[i];
        buffer.push(value);
        if (buffer.length === bufferSize) {
          remove = i;
          destination.next(buffer);
        }
      }
      if (remove !== -1) {
        buffers.splice(remove, 1);
      }
    };
    BufferCountSubscriber.prototype._complete = function() {
      var destination = this.destination;
      var buffers = this.buffers;
      while (buffers.length > 0) {
        var buffer = buffers.shift();
        if (buffer.length > 0) {
          destination.next(buffer);
        }
      }
      _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/bufferCount.js", ["../../Observable", "../../operator/bufferCount"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var bufferCount_1 = $__require('../../operator/bufferCount');
  Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/bufferTime.js", ["../scheduler/async", "../Subscriber", "../util/isScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('../scheduler/async');
  var Subscriber_1 = $__require('../Subscriber');
  var isScheduler_1 = $__require('../util/isScheduler');
  function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async_1.async;
    if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
      scheduler = arguments[arguments.length - 1];
      length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
      bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
      maxBufferSize = arguments[2];
    }
    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
  }
  exports.bufferTime = bufferTime;
  var BufferTimeOperator = (function() {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
      this.bufferTimeSpan = bufferTimeSpan;
      this.bufferCreationInterval = bufferCreationInterval;
      this.maxBufferSize = maxBufferSize;
      this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
  }());
  var Context = (function() {
    function Context() {
      this.buffer = [];
    }
    return Context;
  }());
  var BufferTimeSubscriber = (function(_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
      _super.call(this, destination);
      this.bufferTimeSpan = bufferTimeSpan;
      this.bufferCreationInterval = bufferCreationInterval;
      this.maxBufferSize = maxBufferSize;
      this.scheduler = scheduler;
      this.contexts = [];
      var context = this.openContext();
      this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
      if (this.timespanOnly) {
        var timeSpanOnlyState = {
          subscriber: this,
          context: context,
          bufferTimeSpan: bufferTimeSpan
        };
        this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
      } else {
        var closeState = {
          subscriber: this,
          context: context
        };
        var creationState = {
          bufferTimeSpan: bufferTimeSpan,
          bufferCreationInterval: bufferCreationInterval,
          subscriber: this,
          scheduler: scheduler
        };
        this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
        this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
      }
    }
    BufferTimeSubscriber.prototype._next = function(value) {
      var contexts = this.contexts;
      var len = contexts.length;
      var filledBufferContext;
      for (var i = 0; i < len; i++) {
        var context = contexts[i];
        var buffer = context.buffer;
        buffer.push(value);
        if (buffer.length == this.maxBufferSize) {
          filledBufferContext = context;
        }
      }
      if (filledBufferContext) {
        this.onBufferFull(filledBufferContext);
      }
    };
    BufferTimeSubscriber.prototype._error = function(err) {
      this.contexts.length = 0;
      _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function() {
      var _a = this,
          contexts = _a.contexts,
          destination = _a.destination;
      while (contexts.length > 0) {
        var context = contexts.shift();
        destination.next(context.buffer);
      }
      _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function() {
      this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function(context) {
      this.closeContext(context);
      var closeAction = context.closeAction;
      closeAction.unsubscribe();
      this.remove(closeAction);
      if (this.timespanOnly) {
        context = this.openContext();
        var bufferTimeSpan = this.bufferTimeSpan;
        var timeSpanOnlyState = {
          subscriber: this,
          context: context,
          bufferTimeSpan: bufferTimeSpan
        };
        this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
      }
    };
    BufferTimeSubscriber.prototype.openContext = function() {
      var context = new Context();
      this.contexts.push(context);
      return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function(context) {
      this.destination.next(context.buffer);
      var contexts = this.contexts;
      var spliceIndex = contexts ? contexts.indexOf(context) : -1;
      if (spliceIndex >= 0) {
        contexts.splice(contexts.indexOf(context), 1);
      }
    };
    return BufferTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
      subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
      state.context = subscriber.openContext();
      state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
  }
  function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval,
        bufferTimeSpan = state.bufferTimeSpan,
        subscriber = state.subscriber,
        scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
      subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
        subscriber: subscriber,
        context: context
      }));
      action.schedule(state, bufferCreationInterval);
    }
  }
  function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber,
        context = arg.context;
    subscriber.closeContext(context);
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/bufferTime.js", ["../../Observable", "../../operator/bufferTime"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var bufferTime_1 = $__require('../../operator/bufferTime');
  Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/bufferToggle.js", ["../Subscription", "../util/subscribeToResult", "../OuterSubscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = $__require('../Subscription');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  function bufferToggle(openings, closingSelector) {
    return this.lift(new BufferToggleOperator(openings, closingSelector));
  }
  exports.bufferToggle = bufferToggle;
  var BufferToggleOperator = (function() {
    function BufferToggleOperator(openings, closingSelector) {
      this.openings = openings;
      this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
  }());
  var BufferToggleSubscriber = (function(_super) {
    __extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
      _super.call(this, destination);
      this.openings = openings;
      this.closingSelector = closingSelector;
      this.contexts = [];
      this.add(subscribeToResult_1.subscribeToResult(this, openings));
    }
    BufferToggleSubscriber.prototype._next = function(value) {
      var contexts = this.contexts;
      var len = contexts.length;
      for (var i = 0; i < len; i++) {
        contexts[i].buffer.push(value);
      }
    };
    BufferToggleSubscriber.prototype._error = function(err) {
      var contexts = this.contexts;
      while (contexts.length > 0) {
        var context = contexts.shift();
        context.subscription.unsubscribe();
        context.buffer = null;
        context.subscription = null;
      }
      this.contexts = null;
      _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function() {
      var contexts = this.contexts;
      while (contexts.length > 0) {
        var context = contexts.shift();
        this.destination.next(context.buffer);
        context.subscription.unsubscribe();
        context.buffer = null;
        context.subscription = null;
      }
      this.contexts = null;
      _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function(innerSub) {
      this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function(value) {
      try {
        var closingSelector = this.closingSelector;
        var closingNotifier = closingSelector.call(this, value);
        if (closingNotifier) {
          this.trySubscribe(closingNotifier);
        }
      } catch (err) {
        this._error(err);
      }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function(context) {
      var contexts = this.contexts;
      if (contexts && context) {
        var buffer = context.buffer,
            subscription = context.subscription;
        this.destination.next(buffer);
        contexts.splice(contexts.indexOf(context), 1);
        this.remove(subscription);
        subscription.unsubscribe();
      }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function(closingNotifier) {
      var contexts = this.contexts;
      var buffer = [];
      var subscription = new Subscription_1.Subscription();
      var context = {
        buffer: buffer,
        subscription: subscription
      };
      contexts.push(context);
      var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
      if (!innerSubscription || innerSubscription.closed) {
        this.closeBuffer(context);
      } else {
        innerSubscription.context = context;
        this.add(innerSubscription);
        subscription.add(innerSubscription);
      }
    };
    return BufferToggleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/bufferToggle.js", ["../../Observable", "../../operator/bufferToggle"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var bufferToggle_1 = $__require('../../operator/bufferToggle');
  Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/bufferWhen.js", ["../Subscription", "../util/tryCatch", "../util/errorObject", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = $__require('../Subscription');
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function bufferWhen(closingSelector) {
    return this.lift(new BufferWhenOperator(closingSelector));
  }
  exports.bufferWhen = bufferWhen;
  var BufferWhenOperator = (function() {
    function BufferWhenOperator(closingSelector) {
      this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
  }());
  var BufferWhenSubscriber = (function(_super) {
    __extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
      _super.call(this, destination);
      this.closingSelector = closingSelector;
      this.subscribing = false;
      this.openBuffer();
    }
    BufferWhenSubscriber.prototype._next = function(value) {
      this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function() {
      var buffer = this.buffer;
      if (buffer) {
        this.destination.next(buffer);
      }
      _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function() {
      this.buffer = null;
      this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function() {
      if (this.subscribing) {
        this.complete();
      } else {
        this.openBuffer();
      }
    };
    BufferWhenSubscriber.prototype.openBuffer = function() {
      var closingSubscription = this.closingSubscription;
      if (closingSubscription) {
        this.remove(closingSubscription);
        closingSubscription.unsubscribe();
      }
      var buffer = this.buffer;
      if (this.buffer) {
        this.destination.next(buffer);
      }
      this.buffer = [];
      var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
      if (closingNotifier === errorObject_1.errorObject) {
        this.error(errorObject_1.errorObject.e);
      } else {
        closingSubscription = new Subscription_1.Subscription();
        this.closingSubscription = closingSubscription;
        this.add(closingSubscription);
        this.subscribing = true;
        closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
        this.subscribing = false;
      }
    };
    return BufferWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/bufferWhen.js", ["../../Observable", "../../operator/bufferWhen"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var bufferWhen_1 = $__require('../../operator/bufferWhen');
  Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/cache.js", ["../Observable", "../ReplaySubject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../Observable');
  var ReplaySubject_1 = $__require('../ReplaySubject');
  function cache(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }
    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }
    var subject;
    var source = this;
    var refs = 0;
    var outerSub;
    var getSubject = function() {
      subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
      return subject;
    };
    return new Observable_1.Observable(function(observer) {
      if (!subject) {
        subject = getSubject();
        outerSub = source.subscribe(function(value) {
          return subject.next(value);
        }, function(err) {
          var s = subject;
          subject = null;
          s.error(err);
        }, function() {
          return subject.complete();
        });
      }
      refs++;
      if (!subject) {
        subject = getSubject();
      }
      var innerSub = subject.subscribe(observer);
      return function() {
        refs--;
        if (innerSub) {
          innerSub.unsubscribe();
        }
        if (refs === 0) {
          outerSub.unsubscribe();
        }
      };
    });
  }
  exports.cache = cache;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/cache.js", ["../../Observable", "../../operator/cache"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var cache_1 = $__require('../../operator/cache');
  Observable_1.Observable.prototype.cache = cache_1.cache;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/catch.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function _catch(selector) {
    var operator = new CatchOperator(selector);
    var caught = this.lift(operator);
    return (operator.caught = caught);
  }
  exports._catch = _catch;
  var CatchOperator = (function() {
    function CatchOperator(selector) {
      this.selector = selector;
    }
    CatchOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
  }());
  var CatchSubscriber = (function(_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
      _super.call(this, destination);
      this.selector = selector;
      this.caught = caught;
    }
    CatchSubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var result = void 0;
        try {
          result = this.selector(err, this.caught);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.unsubscribe();
        this.destination.remove(this);
        subscribeToResult_1.subscribeToResult(this, result);
      }
    };
    return CatchSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/catch.js", ["../../Observable", "../../operator/catch"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var catch_1 = $__require('../../operator/catch');
  Observable_1.Observable.prototype.catch = catch_1._catch;
  Observable_1.Observable.prototype._catch = catch_1._catch;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/combineAll.js", ["./combineLatest"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var combineLatest_1 = $__require('./combineLatest');
  function combineAll(project) {
    return this.lift(new combineLatest_1.CombineLatestOperator(project));
  }
  exports.combineAll = combineAll;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/combineAll.js", ["../../Observable", "../../operator/combineAll"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var combineAll_1 = $__require('../../operator/combineAll');
  Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/combineLatest.js", ["../observable/ArrayObservable", "../util/isArray", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArrayObservable_1 = $__require('../observable/ArrayObservable');
  var isArray_1 = $__require('../util/isArray');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  var none = {};
  function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
      project = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    observables.unshift(this);
    return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
  }
  exports.combineLatest = combineLatest;
  var CombineLatestOperator = (function() {
    function CombineLatestOperator(project) {
      this.project = project;
    }
    CombineLatestOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
  }());
  exports.CombineLatestOperator = CombineLatestOperator;
  var CombineLatestSubscriber = (function(_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
      _super.call(this, destination);
      this.project = project;
      this.active = 0;
      this.values = [];
      this.observables = [];
    }
    CombineLatestSubscriber.prototype._next = function(observable) {
      this.values.push(none);
      this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function() {
      var observables = this.observables;
      var len = observables.length;
      if (len === 0) {
        this.destination.complete();
      } else {
        this.active = len;
        this.toRespond = len;
        for (var i = 0; i < len; i++) {
          var observable = observables[i];
          this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
        }
      }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function(unused) {
      if ((this.active -= 1) === 0) {
        this.destination.complete();
      }
    };
    CombineLatestSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var values = this.values;
      var oldVal = values[outerIndex];
      var toRespond = !this.toRespond ? 0 : oldVal === none ? --this.toRespond : this.toRespond;
      values[outerIndex] = innerValue;
      if (toRespond === 0) {
        if (this.project) {
          this._tryProject(values);
        } else {
          this.destination.next(values.slice());
        }
      }
    };
    CombineLatestSubscriber.prototype._tryProject = function(values) {
      var result;
      try {
        result = this.project.apply(this, values);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return CombineLatestSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.CombineLatestSubscriber = CombineLatestSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/combineLatest.js", ["../../Observable", "../../operator/combineLatest"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var combineLatest_1 = $__require('../../operator/combineLatest');
  Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/concat.js", ["../../Observable", "../../operator/concat"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var concat_1 = $__require('../../operator/concat');
  Observable_1.Observable.prototype.concat = concat_1.concat;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/concatAll.js", ["./mergeAll"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var mergeAll_1 = $__require('./mergeAll');
  function concatAll() {
    return this.lift(new mergeAll_1.MergeAllOperator(1));
  }
  exports.concatAll = concatAll;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/concatAll.js", ["../../Observable", "../../operator/concatAll"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var concatAll_1 = $__require('../../operator/concatAll');
  Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/concatMap.js", ["./mergeMap"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var mergeMap_1 = $__require('./mergeMap');
  function concatMap(project, resultSelector) {
    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
  }
  exports.concatMap = concatMap;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/concatMap.js", ["../../Observable", "../../operator/concatMap"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var concatMap_1 = $__require('../../operator/concatMap');
  Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/concatMapTo.js", ["./mergeMapTo"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var mergeMapTo_1 = $__require('./mergeMapTo');
  function concatMapTo(innerObservable, resultSelector) {
    return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
  }
  exports.concatMapTo = concatMapTo;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/concatMapTo.js", ["../../Observable", "../../operator/concatMapTo"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var concatMapTo_1 = $__require('../../operator/concatMapTo');
  Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/count.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function count(predicate) {
    return this.lift(new CountOperator(predicate, this));
  }
  exports.count = count;
  var CountOperator = (function() {
    function CountOperator(predicate, source) {
      this.predicate = predicate;
      this.source = source;
    }
    CountOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
  }());
  var CountSubscriber = (function(_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.source = source;
      this.count = 0;
      this.index = 0;
    }
    CountSubscriber.prototype._next = function(value) {
      if (this.predicate) {
        this._tryPredicate(value);
      } else {
        this.count++;
      }
    };
    CountSubscriber.prototype._tryPredicate = function(value) {
      var result;
      try {
        result = this.predicate(value, this.index++, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this.count++;
      }
    };
    CountSubscriber.prototype._complete = function() {
      this.destination.next(this.count);
      this.destination.complete();
    };
    return CountSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/count.js", ["../../Observable", "../../operator/count"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var count_1 = $__require('../../operator/count');
  Observable_1.Observable.prototype.count = count_1.count;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/dematerialize.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function dematerialize() {
    return this.lift(new DeMaterializeOperator());
  }
  exports.dematerialize = dematerialize;
  var DeMaterializeOperator = (function() {
    function DeMaterializeOperator() {}
    DeMaterializeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
  }());
  var DeMaterializeSubscriber = (function(_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
      _super.call(this, destination);
    }
    DeMaterializeSubscriber.prototype._next = function(value) {
      value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/dematerialize.js", ["../../Observable", "../../operator/dematerialize"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var dematerialize_1 = $__require('../../operator/dematerialize');
  Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/debounce.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function debounce(durationSelector) {
    return this.lift(new DebounceOperator(durationSelector));
  }
  exports.debounce = debounce;
  var DebounceOperator = (function() {
    function DebounceOperator(durationSelector) {
      this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
  }());
  var DebounceSubscriber = (function(_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
      _super.call(this, destination);
      this.durationSelector = durationSelector;
      this.hasValue = false;
      this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function(value) {
      try {
        var result = this.durationSelector.call(this, value);
        if (result) {
          this._tryNext(value, result);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    DebounceSubscriber.prototype._complete = function() {
      this.emitValue();
      this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function(value, duration) {
      var subscription = this.durationSubscription;
      this.value = value;
      this.hasValue = true;
      if (subscription) {
        subscription.unsubscribe();
        this.remove(subscription);
      }
      subscription = subscribeToResult_1.subscribeToResult(this, duration);
      if (!subscription.closed) {
        this.add(this.durationSubscription = subscription);
      }
    };
    DebounceSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function() {
      this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function() {
      if (this.hasValue) {
        var value = this.value;
        var subscription = this.durationSubscription;
        if (subscription) {
          this.durationSubscription = null;
          subscription.unsubscribe();
          this.remove(subscription);
        }
        this.value = null;
        this.hasValue = false;
        _super.prototype._next.call(this, value);
      }
    };
    return DebounceSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/debounce.js", ["../../Observable", "../../operator/debounce"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var debounce_1 = $__require('../../operator/debounce');
  Observable_1.Observable.prototype.debounce = debounce_1.debounce;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/debounceTime.js", ["../Subscriber", "../scheduler/async"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var async_1 = $__require('../scheduler/async');
  function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
  }
  exports.debounceTime = debounceTime;
  var DebounceTimeOperator = (function() {
    function DebounceTimeOperator(dueTime, scheduler) {
      this.dueTime = dueTime;
      this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
  }());
  var DebounceTimeSubscriber = (function(_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
      _super.call(this, destination);
      this.dueTime = dueTime;
      this.scheduler = scheduler;
      this.debouncedSubscription = null;
      this.lastValue = null;
      this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function(value) {
      this.clearDebounce();
      this.lastValue = value;
      this.hasValue = true;
      this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function() {
      this.debouncedNext();
      this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function() {
      this.clearDebounce();
      if (this.hasValue) {
        this.destination.next(this.lastValue);
        this.lastValue = null;
        this.hasValue = false;
      }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function() {
      var debouncedSubscription = this.debouncedSubscription;
      if (debouncedSubscription !== null) {
        this.remove(debouncedSubscription);
        debouncedSubscription.unsubscribe();
        this.debouncedSubscription = null;
      }
    };
    return DebounceTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchNext(subscriber) {
    subscriber.debouncedNext();
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/debounceTime.js", ["../../Observable", "../../operator/debounceTime"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var debounceTime_1 = $__require('../../operator/debounceTime');
  Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/defaultIfEmpty.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = null;
    }
    return this.lift(new DefaultIfEmptyOperator(defaultValue));
  }
  exports.defaultIfEmpty = defaultIfEmpty;
  var DefaultIfEmptyOperator = (function() {
    function DefaultIfEmptyOperator(defaultValue) {
      this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
  }());
  var DefaultIfEmptySubscriber = (function(_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
      _super.call(this, destination);
      this.defaultValue = defaultValue;
      this.isEmpty = true;
    }
    DefaultIfEmptySubscriber.prototype._next = function(value) {
      this.isEmpty = false;
      this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function() {
      if (this.isEmpty) {
        this.destination.next(this.defaultValue);
      }
      this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/defaultIfEmpty.js", ["../../Observable", "../../operator/defaultIfEmpty"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var defaultIfEmpty_1 = $__require('../../operator/defaultIfEmpty');
  Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/delay.js", ["../scheduler/async", "../util/isDate", "../Subscriber", "../Notification"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('../scheduler/async');
  var isDate_1 = $__require('../util/isDate');
  var Subscriber_1 = $__require('../Subscriber');
  var Notification_1 = $__require('../Notification');
  function delay(delay, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteDelay = isDate_1.isDate(delay);
    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return this.lift(new DelayOperator(delayFor, scheduler));
  }
  exports.delay = delay;
  var DelayOperator = (function() {
    function DelayOperator(delay, scheduler) {
      this.delay = delay;
      this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
  }());
  var DelaySubscriber = (function(_super) {
    __extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
      _super.call(this, destination);
      this.delay = delay;
      this.scheduler = scheduler;
      this.queue = [];
      this.active = false;
      this.errored = false;
    }
    DelaySubscriber.dispatch = function(state) {
      var source = state.source;
      var queue = source.queue;
      var scheduler = state.scheduler;
      var destination = state.destination;
      while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
        queue.shift().notification.observe(destination);
      }
      if (queue.length > 0) {
        var delay_1 = Math.max(0, queue[0].time - scheduler.now());
        this.schedule(state, delay_1);
      } else {
        source.active = false;
      }
    };
    DelaySubscriber.prototype._schedule = function(scheduler) {
      this.active = true;
      this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
        source: this,
        destination: this.destination,
        scheduler: scheduler
      }));
    };
    DelaySubscriber.prototype.scheduleNotification = function(notification) {
      if (this.errored === true) {
        return;
      }
      var scheduler = this.scheduler;
      var message = new DelayMessage(scheduler.now() + this.delay, notification);
      this.queue.push(message);
      if (this.active === false) {
        this._schedule(scheduler);
      }
    };
    DelaySubscriber.prototype._next = function(value) {
      this.scheduleNotification(Notification_1.Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function(err) {
      this.errored = true;
      this.queue = [];
      this.destination.error(err);
    };
    DelaySubscriber.prototype._complete = function() {
      this.scheduleNotification(Notification_1.Notification.createComplete());
    };
    return DelaySubscriber;
  }(Subscriber_1.Subscriber));
  var DelayMessage = (function() {
    function DelayMessage(time, notification) {
      this.time = time;
      this.notification = notification;
    }
    return DelayMessage;
  }());
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/delay.js", ["../../Observable", "../../operator/delay"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var delay_1 = $__require('../../operator/delay');
  Observable_1.Observable.prototype.delay = delay_1.delay;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/delayWhen.js", ["../Subscriber", "../Observable", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var Observable_1 = $__require('../Observable');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
      return new SubscriptionDelayObservable(this, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
    }
    return this.lift(new DelayWhenOperator(delayDurationSelector));
  }
  exports.delayWhen = delayWhen;
  var DelayWhenOperator = (function() {
    function DelayWhenOperator(delayDurationSelector) {
      this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
  }());
  var DelayWhenSubscriber = (function(_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
      _super.call(this, destination);
      this.delayDurationSelector = delayDurationSelector;
      this.completed = false;
      this.delayNotifierSubscriptions = [];
      this.values = [];
    }
    DelayWhenSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(outerValue);
      this.removeSubscription(innerSub);
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function(innerSub) {
      var value = this.removeSubscription(innerSub);
      if (value) {
        this.destination.next(value);
      }
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function(value) {
      try {
        var delayNotifier = this.delayDurationSelector(value);
        if (delayNotifier) {
          this.tryDelay(delayNotifier, value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    DelayWhenSubscriber.prototype._complete = function() {
      this.completed = true;
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function(subscription) {
      subscription.unsubscribe();
      var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
      var value = null;
      if (subscriptionIdx !== -1) {
        value = this.values[subscriptionIdx];
        this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        this.values.splice(subscriptionIdx, 1);
      }
      return value;
    };
    DelayWhenSubscriber.prototype.tryDelay = function(delayNotifier, value) {
      var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
      this.add(notifierSubscription);
      this.delayNotifierSubscriptions.push(notifierSubscription);
      this.values.push(value);
    };
    DelayWhenSubscriber.prototype.tryComplete = function() {
      if (this.completed && this.delayNotifierSubscriptions.length === 0) {
        this.destination.complete();
      }
    };
    return DelayWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  var SubscriptionDelayObservable = (function(_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
      _super.call(this);
      this.source = source;
      this.subscriptionDelay = subscriptionDelay;
    }
    SubscriptionDelayObservable.prototype._subscribe = function(subscriber) {
      this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
  }(Observable_1.Observable));
  var SubscriptionDelaySubscriber = (function(_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
      _super.call(this);
      this.parent = parent;
      this.source = source;
      this.sourceSubscribed = false;
    }
    SubscriptionDelaySubscriber.prototype._next = function(unused) {
      this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function(err) {
      this.unsubscribe();
      this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function() {
      this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function() {
      if (!this.sourceSubscribed) {
        this.sourceSubscribed = true;
        this.unsubscribe();
        this.source.subscribe(this.parent);
      }
    };
    return SubscriptionDelaySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/delayWhen.js", ["../../Observable", "../../operator/delayWhen"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var delayWhen_1 = $__require('../../operator/delayWhen');
  Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/distinct.js", ["../../Observable", "../../operator/distinct"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var distinct_1 = $__require('../../operator/distinct');
  Observable_1.Observable.prototype.distinct = distinct_1.distinct;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/distinct.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function distinct(compare, flushes) {
    return this.lift(new DistinctOperator(compare, flushes));
  }
  exports.distinct = distinct;
  var DistinctOperator = (function() {
    function DistinctOperator(compare, flushes) {
      this.compare = compare;
      this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DistinctSubscriber(subscriber, this.compare, this.flushes));
    };
    return DistinctOperator;
  }());
  var DistinctSubscriber = (function(_super) {
    __extends(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, compare, flushes) {
      _super.call(this, destination);
      this.values = [];
      if (typeof compare === 'function') {
        this.compare = compare;
      }
      if (flushes) {
        this.add(subscribeToResult_1.subscribeToResult(this, flushes));
      }
    }
    DistinctSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.values.length = 0;
    };
    DistinctSubscriber.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    DistinctSubscriber.prototype._next = function(value) {
      var found = false;
      var values = this.values;
      var len = values.length;
      try {
        for (var i = 0; i < len; i++) {
          if (this.compare(values[i], value)) {
            found = true;
            return;
          }
        }
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.values.push(value);
      this.destination.next(value);
    };
    DistinctSubscriber.prototype.compare = function(x, y) {
      return x === y;
    };
    return DistinctSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.DistinctSubscriber = DistinctSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/distinctKey.js", ["./distinct"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var distinct_1 = $__require('./distinct');
  function distinctKey(key, compare, flushes) {
    return distinct_1.distinct.call(this, function(x, y) {
      if (compare) {
        return compare(x[key], y[key]);
      }
      return x[key] === y[key];
    }, flushes);
  }
  exports.distinctKey = distinctKey;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/distinctKey.js", ["../../Observable", "../../operator/distinctKey"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var distinctKey_1 = $__require('../../operator/distinctKey');
  Observable_1.Observable.prototype.distinctKey = distinctKey_1.distinctKey;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/distinctUntilChanged.js", ["../../Observable", "../../operator/distinctUntilChanged"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var distinctUntilChanged_1 = $__require('../../operator/distinctUntilChanged');
  Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/distinctUntilChanged.js", ["../Subscriber", "../util/tryCatch", "../util/errorObject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
  }
  exports.distinctUntilChanged = distinctUntilChanged;
  var DistinctUntilChangedOperator = (function() {
    function DistinctUntilChangedOperator(compare, keySelector) {
      this.compare = compare;
      this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
  }());
  var DistinctUntilChangedSubscriber = (function(_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
      _super.call(this, destination);
      this.keySelector = keySelector;
      this.hasKey = false;
      if (typeof compare === 'function') {
        this.compare = compare;
      }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function(x, y) {
      return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function(value) {
      var keySelector = this.keySelector;
      var key = value;
      if (keySelector) {
        key = tryCatch_1.tryCatch(this.keySelector)(value);
        if (key === errorObject_1.errorObject) {
          return this.destination.error(errorObject_1.errorObject.e);
        }
      }
      var result = false;
      if (this.hasKey) {
        result = tryCatch_1.tryCatch(this.compare)(this.key, key);
        if (result === errorObject_1.errorObject) {
          return this.destination.error(errorObject_1.errorObject.e);
        }
      } else {
        this.hasKey = true;
      }
      if (Boolean(result) === false) {
        this.key = key;
        this.destination.next(value);
      }
    };
    return DistinctUntilChangedSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/distinctUntilKeyChanged.js", ["./distinctUntilChanged"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var distinctUntilChanged_1 = $__require('./distinctUntilChanged');
  function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged.call(this, function(x, y) {
      if (compare) {
        return compare(x[key], y[key]);
      }
      return x[key] === y[key];
    });
  }
  exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/distinctUntilKeyChanged.js", ["../../Observable", "../../operator/distinctUntilKeyChanged"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var distinctUntilKeyChanged_1 = $__require('../../operator/distinctUntilKeyChanged');
  Observable_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/do.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
  }
  exports._do = _do;
  var DoOperator = (function() {
    function DoOperator(nextOrObserver, error, complete) {
      this.nextOrObserver = nextOrObserver;
      this.error = error;
      this.complete = complete;
    }
    DoOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
  }());
  var DoSubscriber = (function(_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
      _super.call(this, destination);
      var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
      safeSubscriber.syncErrorThrowable = true;
      this.add(safeSubscriber);
      this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function(value) {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.next(value);
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.next(value);
      }
    };
    DoSubscriber.prototype._error = function(err) {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.error(err);
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.error(err);
      }
    };
    DoSubscriber.prototype._complete = function() {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.complete();
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.complete();
      }
    };
    return DoSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/do.js", ["../../Observable", "../../operator/do"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var do_1 = $__require('../../operator/do');
  Observable_1.Observable.prototype.do = do_1._do;
  Observable_1.Observable.prototype._do = do_1._do;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/exhaust.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function exhaust() {
    return this.lift(new SwitchFirstOperator());
  }
  exports.exhaust = exhaust;
  var SwitchFirstOperator = (function() {
    function SwitchFirstOperator() {}
    SwitchFirstOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SwitchFirstSubscriber(subscriber));
    };
    return SwitchFirstOperator;
  }());
  var SwitchFirstSubscriber = (function(_super) {
    __extends(SwitchFirstSubscriber, _super);
    function SwitchFirstSubscriber(destination) {
      _super.call(this, destination);
      this.hasCompleted = false;
      this.hasSubscription = false;
    }
    SwitchFirstSubscriber.prototype._next = function(value) {
      if (!this.hasSubscription) {
        this.hasSubscription = true;
        this.add(subscribeToResult_1.subscribeToResult(this, value));
      }
    };
    SwitchFirstSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (!this.hasSubscription) {
        this.destination.complete();
      }
    };
    SwitchFirstSubscriber.prototype.notifyComplete = function(innerSub) {
      this.remove(innerSub);
      this.hasSubscription = false;
      if (this.hasCompleted) {
        this.destination.complete();
      }
    };
    return SwitchFirstSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/exhaust.js", ["../../Observable", "../../operator/exhaust"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var exhaust_1 = $__require('../../operator/exhaust');
  Observable_1.Observable.prototype.exhaust = exhaust_1.exhaust;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/exhaustMap.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function exhaustMap(project, resultSelector) {
    return this.lift(new SwitchFirstMapOperator(project, resultSelector));
  }
  exports.exhaustMap = exhaustMap;
  var SwitchFirstMapOperator = (function() {
    function SwitchFirstMapOperator(project, resultSelector) {
      this.project = project;
      this.resultSelector = resultSelector;
    }
    SwitchFirstMapOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchFirstMapOperator;
  }());
  var SwitchFirstMapSubscriber = (function(_super) {
    __extends(SwitchFirstMapSubscriber, _super);
    function SwitchFirstMapSubscriber(destination, project, resultSelector) {
      _super.call(this, destination);
      this.project = project;
      this.resultSelector = resultSelector;
      this.hasSubscription = false;
      this.hasCompleted = false;
      this.index = 0;
    }
    SwitchFirstMapSubscriber.prototype._next = function(value) {
      if (!this.hasSubscription) {
        this.tryNext(value);
      }
    };
    SwitchFirstMapSubscriber.prototype.tryNext = function(value) {
      var index = this.index++;
      var destination = this.destination;
      try {
        var result = this.project(value, index);
        this.hasSubscription = true;
        this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
      } catch (err) {
        destination.error(err);
      }
    };
    SwitchFirstMapSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (!this.hasSubscription) {
        this.destination.complete();
      }
    };
    SwitchFirstMapSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      if (resultSelector) {
        this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        destination.next(innerValue);
      }
    };
    SwitchFirstMapSubscriber.prototype.trySelectResult = function(outerValue, innerValue, outerIndex, innerIndex) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      try {
        var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        destination.next(result);
      } catch (err) {
        destination.error(err);
      }
    };
    SwitchFirstMapSubscriber.prototype.notifyError = function(err) {
      this.destination.error(err);
    };
    SwitchFirstMapSubscriber.prototype.notifyComplete = function(innerSub) {
      this.remove(innerSub);
      this.hasSubscription = false;
      if (this.hasCompleted) {
        this.destination.complete();
      }
    };
    return SwitchFirstMapSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/exhaustMap.js", ["../../Observable", "../../operator/exhaustMap"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var exhaustMap_1 = $__require('../../operator/exhaustMap');
  Observable_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/expand.js", ["../util/tryCatch", "../util/errorObject", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
      scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return this.lift(new ExpandOperator(project, concurrent, scheduler));
  }
  exports.expand = expand;
  var ExpandOperator = (function() {
    function ExpandOperator(project, concurrent, scheduler) {
      this.project = project;
      this.concurrent = concurrent;
      this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
  }());
  exports.ExpandOperator = ExpandOperator;
  var ExpandSubscriber = (function(_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
      _super.call(this, destination);
      this.project = project;
      this.concurrent = concurrent;
      this.scheduler = scheduler;
      this.index = 0;
      this.active = 0;
      this.hasCompleted = false;
      if (concurrent < Number.POSITIVE_INFINITY) {
        this.buffer = [];
      }
    }
    ExpandSubscriber.dispatch = function(arg) {
      var subscriber = arg.subscriber,
          result = arg.result,
          value = arg.value,
          index = arg.index;
      subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function(value) {
      var destination = this.destination;
      if (destination.closed) {
        this._complete();
        return;
      }
      var index = this.index++;
      if (this.active < this.concurrent) {
        destination.next(value);
        var result = tryCatch_1.tryCatch(this.project)(value, index);
        if (result === errorObject_1.errorObject) {
          destination.error(errorObject_1.errorObject.e);
        } else if (!this.scheduler) {
          this.subscribeToProjection(result, value, index);
        } else {
          var state = {
            subscriber: this,
            result: result,
            value: value,
            index: index
          };
          this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
        }
      } else {
        this.buffer.push(value);
      }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function(result, value, index) {
      this.active++;
      this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    ExpandSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer && buffer.length > 0) {
        this._next(buffer.shift());
      }
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    return ExpandSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.ExpandSubscriber = ExpandSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/expand.js", ["../../Observable", "../../operator/expand"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var expand_1 = $__require('../../operator/expand');
  Observable_1.Observable.prototype.expand = expand_1.expand;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/elementAt.js", ["../Subscriber", "../util/ArgumentOutOfRangeError"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var ArgumentOutOfRangeError_1 = $__require('../util/ArgumentOutOfRangeError');
  function elementAt(index, defaultValue) {
    return this.lift(new ElementAtOperator(index, defaultValue));
  }
  exports.elementAt = elementAt;
  var ElementAtOperator = (function() {
    function ElementAtOperator(index, defaultValue) {
      this.index = index;
      this.defaultValue = defaultValue;
      if (index < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
      }
    }
    ElementAtOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
    };
    return ElementAtOperator;
  }());
  var ElementAtSubscriber = (function(_super) {
    __extends(ElementAtSubscriber, _super);
    function ElementAtSubscriber(destination, index, defaultValue) {
      _super.call(this, destination);
      this.index = index;
      this.defaultValue = defaultValue;
    }
    ElementAtSubscriber.prototype._next = function(x) {
      if (this.index-- === 0) {
        this.destination.next(x);
        this.destination.complete();
      }
    };
    ElementAtSubscriber.prototype._complete = function() {
      var destination = this.destination;
      if (this.index >= 0) {
        if (typeof this.defaultValue !== 'undefined') {
          destination.next(this.defaultValue);
        } else {
          destination.error(new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError);
        }
      }
      destination.complete();
    };
    return ElementAtSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/elementAt.js", ["../../Observable", "../../operator/elementAt"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var elementAt_1 = $__require('../../operator/elementAt');
  Observable_1.Observable.prototype.elementAt = elementAt_1.elementAt;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/filter.js", ["../../Observable", "../../operator/filter"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var filter_1 = $__require('../../operator/filter');
  Observable_1.Observable.prototype.filter = filter_1.filter;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/finally.js", ["../Subscriber", "../Subscription"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var Subscription_1 = $__require('../Subscription');
  function _finally(callback) {
    return this.lift(new FinallyOperator(callback));
  }
  exports._finally = _finally;
  var FinallyOperator = (function() {
    function FinallyOperator(callback) {
      this.callback = callback;
    }
    FinallyOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator;
  }());
  var FinallySubscriber = (function(_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
      _super.call(this, destination);
      this.add(new Subscription_1.Subscription(callback));
    }
    return FinallySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/finally.js", ["../../Observable", "../../operator/finally"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var finally_1 = $__require('../../operator/finally');
  Observable_1.Observable.prototype.finally = finally_1._finally;
  Observable_1.Observable.prototype._finally = finally_1._finally;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/find.js", ["../../Observable", "../../operator/find"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var find_1 = $__require('../../operator/find');
  Observable_1.Observable.prototype.find = find_1.find;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/find.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate is not a function');
    }
    return this.lift(new FindValueOperator(predicate, this, false, thisArg));
  }
  exports.find = find;
  var FindValueOperator = (function() {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
      this.predicate = predicate;
      this.source = source;
      this.yieldIndex = yieldIndex;
      this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function(observer, source) {
      return source._subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
  }());
  exports.FindValueOperator = FindValueOperator;
  var FindValueSubscriber = (function(_super) {
    __extends(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.source = source;
      this.yieldIndex = yieldIndex;
      this.thisArg = thisArg;
      this.index = 0;
    }
    FindValueSubscriber.prototype.notifyComplete = function(value) {
      var destination = this.destination;
      destination.next(value);
      destination.complete();
    };
    FindValueSubscriber.prototype._next = function(value) {
      var _a = this,
          predicate = _a.predicate,
          thisArg = _a.thisArg;
      var index = this.index++;
      try {
        var result = predicate.call(thisArg || this, value, index, this.source);
        if (result) {
          this.notifyComplete(this.yieldIndex ? index : value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    FindValueSubscriber.prototype._complete = function() {
      this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
  }(Subscriber_1.Subscriber));
  exports.FindValueSubscriber = FindValueSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/findIndex.js", ["./find"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var find_1 = $__require('./find');
  function findIndex(predicate, thisArg) {
    return this.lift(new find_1.FindValueOperator(predicate, this, true, thisArg));
  }
  exports.findIndex = findIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/findIndex.js", ["../../Observable", "../../operator/findIndex"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var findIndex_1 = $__require('../../operator/findIndex');
  Observable_1.Observable.prototype.findIndex = findIndex_1.findIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/first.js", ["../Subscriber", "../util/EmptyError"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var EmptyError_1 = $__require('../util/EmptyError');
  function first(predicate, resultSelector, defaultValue) {
    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
  }
  exports.first = first;
  var FirstOperator = (function() {
    function FirstOperator(predicate, resultSelector, defaultValue, source) {
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
    }
    FirstOperator.prototype.call = function(observer, source) {
      return source._subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
    };
    return FirstOperator;
  }());
  var FirstSubscriber = (function(_super) {
    __extends(FirstSubscriber, _super);
    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
      this.index = 0;
      this.hasCompleted = false;
    }
    FirstSubscriber.prototype._next = function(value) {
      var index = this.index++;
      if (this.predicate) {
        this._tryPredicate(value, index);
      } else {
        this._emit(value, index);
      }
    };
    FirstSubscriber.prototype._tryPredicate = function(value, index) {
      var result;
      try {
        result = this.predicate(value, index, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this._emit(value, index);
      }
    };
    FirstSubscriber.prototype._emit = function(value, index) {
      if (this.resultSelector) {
        this._tryResultSelector(value, index);
        return;
      }
      this._emitFinal(value);
    };
    FirstSubscriber.prototype._tryResultSelector = function(value, index) {
      var result;
      try {
        result = this.resultSelector(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this._emitFinal(result);
    };
    FirstSubscriber.prototype._emitFinal = function(value) {
      var destination = this.destination;
      destination.next(value);
      destination.complete();
      this.hasCompleted = true;
    };
    FirstSubscriber.prototype._complete = function() {
      var destination = this.destination;
      if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
        destination.next(this.defaultValue);
        destination.complete();
      } else if (!this.hasCompleted) {
        destination.error(new EmptyError_1.EmptyError);
      }
    };
    return FirstSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/first.js", ["../../Observable", "../../operator/first"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var first_1 = $__require('../../operator/first');
  Observable_1.Observable.prototype.first = first_1.first;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/MapPolyfill.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var MapPolyfill = (function() {
    function MapPolyfill() {
      this.size = 0;
      this._values = [];
      this._keys = [];
    }
    MapPolyfill.prototype.get = function(key) {
      var i = this._keys.indexOf(key);
      return i === -1 ? undefined : this._values[i];
    };
    MapPolyfill.prototype.set = function(key, value) {
      var i = this._keys.indexOf(key);
      if (i === -1) {
        this._keys.push(key);
        this._values.push(value);
        this.size++;
      } else {
        this._values[i] = value;
      }
      return this;
    };
    MapPolyfill.prototype.delete = function(key) {
      var i = this._keys.indexOf(key);
      if (i === -1) {
        return false;
      }
      this._values.splice(i, 1);
      this._keys.splice(i, 1);
      this.size--;
      return true;
    };
    MapPolyfill.prototype.clear = function() {
      this._keys.length = 0;
      this._values.length = 0;
      this.size = 0;
    };
    MapPolyfill.prototype.forEach = function(cb, thisArg) {
      for (var i = 0; i < this.size; i++) {
        cb.call(thisArg, this._values[i], this._keys[i]);
      }
    };
    return MapPolyfill;
  }());
  exports.MapPolyfill = MapPolyfill;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/Map.js", ["./root", "./MapPolyfill"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('./root');
  var MapPolyfill_1 = $__require('./MapPolyfill');
  exports.Map = root_1.root.Map || (function() {
    return MapPolyfill_1.MapPolyfill;
  })();
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/FastMap.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var FastMap = (function() {
    function FastMap() {
      this.values = {};
    }
    FastMap.prototype.delete = function(key) {
      this.values[key] = null;
      return true;
    };
    FastMap.prototype.set = function(key, value) {
      this.values[key] = value;
      return this;
    };
    FastMap.prototype.get = function(key) {
      return this.values[key];
    };
    FastMap.prototype.forEach = function(cb, thisArg) {
      var values = this.values;
      for (var key in values) {
        if (values.hasOwnProperty(key) && values[key] !== null) {
          cb.call(thisArg, values[key], key);
        }
      }
    };
    FastMap.prototype.clear = function() {
      this.values = {};
    };
    return FastMap;
  }());
  exports.FastMap = FastMap;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/groupBy.js", ["../Subscriber", "../Subscription", "../Observable", "../Subject", "../util/Map", "../util/FastMap"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var Subscription_1 = $__require('../Subscription');
  var Observable_1 = $__require('../Observable');
  var Subject_1 = $__require('../Subject');
  var Map_1 = $__require('../util/Map');
  var FastMap_1 = $__require('../util/FastMap');
  function groupBy(keySelector, elementSelector, durationSelector) {
    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
  }
  exports.groupBy = groupBy;
  var GroupByOperator = (function() {
    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
      this.source = source;
      this.keySelector = keySelector;
      this.elementSelector = elementSelector;
      this.durationSelector = durationSelector;
    }
    GroupByOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector));
    };
    return GroupByOperator;
  }());
  var GroupBySubscriber = (function(_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
      _super.call(this, destination);
      this.keySelector = keySelector;
      this.elementSelector = elementSelector;
      this.durationSelector = durationSelector;
      this.groups = null;
      this.attemptedToUnsubscribe = false;
      this.count = 0;
    }
    GroupBySubscriber.prototype._next = function(value) {
      var key;
      try {
        key = this.keySelector(value);
      } catch (err) {
        this.error(err);
        return;
      }
      this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function(value, key) {
      var groups = this.groups;
      if (!groups) {
        groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
      }
      var group = groups.get(key);
      var element;
      if (this.elementSelector) {
        try {
          element = this.elementSelector(value);
        } catch (err) {
          this.error(err);
        }
      } else {
        element = value;
      }
      if (!group) {
        groups.set(key, group = new Subject_1.Subject());
        var groupedObservable = new GroupedObservable(key, group, this);
        this.destination.next(groupedObservable);
        if (this.durationSelector) {
          var duration = void 0;
          try {
            duration = this.durationSelector(new GroupedObservable(key, group));
          } catch (err) {
            this.error(err);
            return;
          }
          this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
        }
      }
      if (!group.closed) {
        group.next(element);
      }
    };
    GroupBySubscriber.prototype._error = function(err) {
      var groups = this.groups;
      if (groups) {
        groups.forEach(function(group, key) {
          group.error(err);
        });
        groups.clear();
      }
      this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function() {
      var groups = this.groups;
      if (groups) {
        groups.forEach(function(group, key) {
          group.complete();
        });
        groups.clear();
      }
      this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function(key) {
      this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function() {
      if (!this.closed && !this.attemptedToUnsubscribe) {
        this.attemptedToUnsubscribe = true;
        if (this.count === 0) {
          _super.prototype.unsubscribe.call(this);
        }
      }
    };
    return GroupBySubscriber;
  }(Subscriber_1.Subscriber));
  var GroupDurationSubscriber = (function(_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
      _super.call(this);
      this.key = key;
      this.group = group;
      this.parent = parent;
    }
    GroupDurationSubscriber.prototype._next = function(value) {
      this._complete();
    };
    GroupDurationSubscriber.prototype._error = function(err) {
      var group = this.group;
      if (!group.closed) {
        group.error(err);
      }
      this.parent.removeGroup(this.key);
    };
    GroupDurationSubscriber.prototype._complete = function() {
      var group = this.group;
      if (!group.closed) {
        group.complete();
      }
      this.parent.removeGroup(this.key);
    };
    return GroupDurationSubscriber;
  }(Subscriber_1.Subscriber));
  var GroupedObservable = (function(_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
      _super.call(this);
      this.key = key;
      this.groupSubject = groupSubject;
      this.refCountSubscription = refCountSubscription;
    }
    GroupedObservable.prototype._subscribe = function(subscriber) {
      var subscription = new Subscription_1.Subscription();
      var _a = this,
          refCountSubscription = _a.refCountSubscription,
          groupSubject = _a.groupSubject;
      if (refCountSubscription && !refCountSubscription.closed) {
        subscription.add(new InnerRefCountSubscription(refCountSubscription));
      }
      subscription.add(groupSubject.subscribe(subscriber));
      return subscription;
    };
    return GroupedObservable;
  }(Observable_1.Observable));
  exports.GroupedObservable = GroupedObservable;
  var InnerRefCountSubscription = (function(_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
      _super.call(this);
      this.parent = parent;
      parent.count++;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function() {
      var parent = this.parent;
      if (!parent.closed && !this.closed) {
        _super.prototype.unsubscribe.call(this);
        parent.count -= 1;
        if (parent.count === 0 && parent.attemptedToUnsubscribe) {
          parent.unsubscribe();
        }
      }
    };
    return InnerRefCountSubscription;
  }(Subscription_1.Subscription));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/groupBy.js", ["../../Observable", "../../operator/groupBy"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var groupBy_1 = $__require('../../operator/groupBy');
  Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/noop.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function noop() {}
  exports.noop = noop;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/ignoreElements.js", ["../Subscriber", "../util/noop"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var noop_1 = $__require('../util/noop');
  function ignoreElements() {
    return this.lift(new IgnoreElementsOperator());
  }
  exports.ignoreElements = ignoreElements;
  ;
  var IgnoreElementsOperator = (function() {
    function IgnoreElementsOperator() {}
    IgnoreElementsOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
  }());
  var IgnoreElementsSubscriber = (function(_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
      _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function(unused) {
      noop_1.noop();
    };
    return IgnoreElementsSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/ignoreElements.js", ["../../Observable", "../../operator/ignoreElements"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var ignoreElements_1 = $__require('../../operator/ignoreElements');
  Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/isEmpty.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function isEmpty() {
    return this.lift(new IsEmptyOperator());
  }
  exports.isEmpty = isEmpty;
  var IsEmptyOperator = (function() {
    function IsEmptyOperator() {}
    IsEmptyOperator.prototype.call = function(observer, source) {
      return source._subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator;
  }());
  var IsEmptySubscriber = (function(_super) {
    __extends(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
      _super.call(this, destination);
    }
    IsEmptySubscriber.prototype.notifyComplete = function(isEmpty) {
      var destination = this.destination;
      destination.next(isEmpty);
      destination.complete();
    };
    IsEmptySubscriber.prototype._next = function(value) {
      this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function() {
      this.notifyComplete(true);
    };
    return IsEmptySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/isEmpty.js", ["../../Observable", "../../operator/isEmpty"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var isEmpty_1 = $__require('../../operator/isEmpty');
  Observable_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/audit.js", ["../util/tryCatch", "../util/errorObject", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function audit(durationSelector) {
    return this.lift(new AuditOperator(durationSelector));
  }
  exports.audit = audit;
  var AuditOperator = (function() {
    function AuditOperator(durationSelector) {
      this.durationSelector = durationSelector;
    }
    AuditOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    };
    return AuditOperator;
  }());
  var AuditSubscriber = (function(_super) {
    __extends(AuditSubscriber, _super);
    function AuditSubscriber(destination, durationSelector) {
      _super.call(this, destination);
      this.durationSelector = durationSelector;
      this.hasValue = false;
    }
    AuditSubscriber.prototype._next = function(value) {
      this.value = value;
      this.hasValue = true;
      if (!this.throttled) {
        var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
        if (duration === errorObject_1.errorObject) {
          this.destination.error(errorObject_1.errorObject.e);
        } else {
          this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
        }
      }
    };
    AuditSubscriber.prototype.clearThrottle = function() {
      var _a = this,
          value = _a.value,
          hasValue = _a.hasValue,
          throttled = _a.throttled;
      if (throttled) {
        this.remove(throttled);
        this.throttled = null;
        throttled.unsubscribe();
      }
      if (hasValue) {
        this.value = null;
        this.hasValue = false;
        this.destination.next(value);
      }
    };
    AuditSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex) {
      this.clearThrottle();
    };
    AuditSubscriber.prototype.notifyComplete = function() {
      this.clearThrottle();
    };
    return AuditSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/audit.js", ["../../Observable", "../../operator/audit"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var audit_1 = $__require('../../operator/audit');
  Observable_1.Observable.prototype.audit = audit_1.audit;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/auditTime.js", ["../scheduler/async", "../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('../scheduler/async');
  var Subscriber_1 = $__require('../Subscriber');
  function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new AuditTimeOperator(duration, scheduler));
  }
  exports.auditTime = auditTime;
  var AuditTimeOperator = (function() {
    function AuditTimeOperator(duration, scheduler) {
      this.duration = duration;
      this.scheduler = scheduler;
    }
    AuditTimeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new AuditTimeSubscriber(subscriber, this.duration, this.scheduler));
    };
    return AuditTimeOperator;
  }());
  var AuditTimeSubscriber = (function(_super) {
    __extends(AuditTimeSubscriber, _super);
    function AuditTimeSubscriber(destination, duration, scheduler) {
      _super.call(this, destination);
      this.duration = duration;
      this.scheduler = scheduler;
      this.hasValue = false;
    }
    AuditTimeSubscriber.prototype._next = function(value) {
      this.value = value;
      this.hasValue = true;
      if (!this.throttled) {
        this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, this));
      }
    };
    AuditTimeSubscriber.prototype.clearThrottle = function() {
      var _a = this,
          value = _a.value,
          hasValue = _a.hasValue,
          throttled = _a.throttled;
      if (throttled) {
        this.remove(throttled);
        this.throttled = null;
        throttled.unsubscribe();
      }
      if (hasValue) {
        this.value = null;
        this.hasValue = false;
        this.destination.next(value);
      }
    };
    return AuditTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchNext(subscriber) {
    subscriber.clearThrottle();
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/auditTime.js", ["../../Observable", "../../operator/auditTime"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var auditTime_1 = $__require('../../operator/auditTime');
  Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/last.js", ["../Subscriber", "../util/EmptyError"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var EmptyError_1 = $__require('../util/EmptyError');
  function last(predicate, resultSelector, defaultValue) {
    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
  }
  exports.last = last;
  var LastOperator = (function() {
    function LastOperator(predicate, resultSelector, defaultValue, source) {
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
    }
    LastOperator.prototype.call = function(observer, source) {
      return source._subscribe(new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
    };
    return LastOperator;
  }());
  var LastSubscriber = (function(_super) {
    __extends(LastSubscriber, _super);
    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
      this.hasValue = false;
      this.index = 0;
      if (typeof defaultValue !== 'undefined') {
        this.lastValue = defaultValue;
        this.hasValue = true;
      }
    }
    LastSubscriber.prototype._next = function(value) {
      var index = this.index++;
      if (this.predicate) {
        this._tryPredicate(value, index);
      } else {
        if (this.resultSelector) {
          this._tryResultSelector(value, index);
          return;
        }
        this.lastValue = value;
        this.hasValue = true;
      }
    };
    LastSubscriber.prototype._tryPredicate = function(value, index) {
      var result;
      try {
        result = this.predicate(value, index, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        if (this.resultSelector) {
          this._tryResultSelector(value, index);
          return;
        }
        this.lastValue = value;
        this.hasValue = true;
      }
    };
    LastSubscriber.prototype._tryResultSelector = function(value, index) {
      var result;
      try {
        result = this.resultSelector(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.lastValue = result;
      this.hasValue = true;
    };
    LastSubscriber.prototype._complete = function() {
      var destination = this.destination;
      if (this.hasValue) {
        destination.next(this.lastValue);
        destination.complete();
      } else {
        destination.error(new EmptyError_1.EmptyError);
      }
    };
    return LastSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/last.js", ["../../Observable", "../../operator/last"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var last_1 = $__require('../../operator/last');
  Observable_1.Observable.prototype.last = last_1.last;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/let.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function letProto(func) {
    return func(this);
  }
  exports.letProto = letProto;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/let.js", ["../../Observable", "../../operator/let"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var let_1 = $__require('../../operator/let');
  Observable_1.Observable.prototype.let = let_1.letProto;
  Observable_1.Observable.prototype.letBind = let_1.letProto;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/every.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function every(predicate, thisArg) {
    return this.lift(new EveryOperator(predicate, thisArg, this));
  }
  exports.every = every;
  var EveryOperator = (function() {
    function EveryOperator(predicate, thisArg, source) {
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.source = source;
    }
    EveryOperator.prototype.call = function(observer, source) {
      return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
    };
    return EveryOperator;
  }());
  var EverySubscriber = (function(_super) {
    __extends(EverySubscriber, _super);
    function EverySubscriber(destination, predicate, thisArg, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.source = source;
      this.index = 0;
      this.thisArg = thisArg || this;
    }
    EverySubscriber.prototype.notifyComplete = function(everyValueMatch) {
      this.destination.next(everyValueMatch);
      this.destination.complete();
    };
    EverySubscriber.prototype._next = function(value) {
      var result = false;
      try {
        result = this.predicate.call(this.thisArg, value, this.index++, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (!result) {
        this.notifyComplete(false);
      }
    };
    EverySubscriber.prototype._complete = function() {
      this.notifyComplete(true);
    };
    return EverySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/every.js", ["../../Observable", "../../operator/every"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var every_1 = $__require('../../operator/every');
  Observable_1.Observable.prototype.every = every_1.every;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/map.js", ["../../Observable", "../../operator/map"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var map_1 = $__require('../../operator/map');
  Observable_1.Observable.prototype.map = map_1.map;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/mapTo.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function mapTo(value) {
    return this.lift(new MapToOperator(value));
  }
  exports.mapTo = mapTo;
  var MapToOperator = (function() {
    function MapToOperator(value) {
      this.value = value;
    }
    MapToOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
  }());
  var MapToSubscriber = (function(_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
      _super.call(this, destination);
      this.value = value;
    }
    MapToSubscriber.prototype._next = function(x) {
      this.destination.next(this.value);
    };
    return MapToSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/mapTo.js", ["../../Observable", "../../operator/mapTo"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var mapTo_1 = $__require('../../operator/mapTo');
  Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/materialize.js", ["../Subscriber", "../Notification"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var Notification_1 = $__require('../Notification');
  function materialize() {
    return this.lift(new MaterializeOperator());
  }
  exports.materialize = materialize;
  var MaterializeOperator = (function() {
    function MaterializeOperator() {}
    MaterializeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
  }());
  var MaterializeSubscriber = (function(_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
      _super.call(this, destination);
    }
    MaterializeSubscriber.prototype._next = function(value) {
      this.destination.next(Notification_1.Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function(err) {
      var destination = this.destination;
      destination.next(Notification_1.Notification.createError(err));
      destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function() {
      var destination = this.destination;
      destination.next(Notification_1.Notification.createComplete());
      destination.complete();
    };
    return MaterializeSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/materialize.js", ["../../Observable", "../../operator/materialize"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var materialize_1 = $__require('../../operator/materialize');
  Observable_1.Observable.prototype.materialize = materialize_1.materialize;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/max.js", ["./reduce"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var reduce_1 = $__require('./reduce');
  function max(comparer) {
    var max = (typeof comparer === 'function') ? function(x, y) {
      return comparer(x, y) > 0 ? x : y;
    } : function(x, y) {
      return x > y ? x : y;
    };
    return this.lift(new reduce_1.ReduceOperator(max));
  }
  exports.max = max;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/max.js", ["../../Observable", "../../operator/max"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var max_1 = $__require('../../operator/max');
  Observable_1.Observable.prototype.max = max_1.max;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/merge.js", ["../observable/ArrayObservable", "./mergeAll", "../util/isScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ArrayObservable_1 = $__require('../observable/ArrayObservable');
  var mergeAll_1 = $__require('./mergeAll');
  var isScheduler_1 = $__require('../util/isScheduler');
  function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    observables.unshift(this);
    return mergeStatic.apply(this, observables);
  }
  exports.merge = merge;
  function mergeStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
      scheduler = observables.pop();
      if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
        concurrent = observables.pop();
      }
    } else if (typeof last === 'number') {
      concurrent = observables.pop();
    }
    if (observables.length === 1) {
      return observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
  }
  exports.mergeStatic = mergeStatic;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/merge.js", ["../../Observable", "../../operator/merge"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var merge_1 = $__require('../../operator/merge');
  Observable_1.Observable.prototype.merge = merge_1.merge;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/mergeAll.js", ["../../Observable", "../../operator/mergeAll"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var mergeAll_1 = $__require('../../operator/mergeAll');
  Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/mergeMap.js", ["../util/subscribeToResult", "../OuterSubscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'number') {
      concurrent = resultSelector;
      resultSelector = null;
    }
    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
  }
  exports.mergeMap = mergeMap;
  var MergeMapOperator = (function() {
    function MergeMapOperator(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      this.project = project;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function(observer, source) {
      return source._subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
    };
    return MergeMapOperator;
  }());
  exports.MergeMapOperator = MergeMapOperator;
  var MergeMapSubscriber = (function(_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      _super.call(this, destination);
      this.project = project;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
      this.index = 0;
    }
    MergeMapSubscriber.prototype._next = function(value) {
      if (this.active < this.concurrent) {
        this._tryNext(value);
      } else {
        this.buffer.push(value);
      }
    };
    MergeMapSubscriber.prototype._tryNext = function(value) {
      var result;
      var index = this.index++;
      try {
        result = this.project(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.active++;
      this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function(ish, value, index) {
      this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeMapSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (this.resultSelector) {
        this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        this.destination.next(innerValue);
      }
    };
    MergeMapSubscriber.prototype._notifyResultSelector = function(outerValue, innerValue, outerIndex, innerIndex) {
      var result;
      try {
        result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    MergeMapSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeMapSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.MergeMapSubscriber = MergeMapSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/mergeMap.js", ["../../Observable", "../../operator/mergeMap"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var mergeMap_1 = $__require('../../operator/mergeMap');
  Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
  Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/mergeMapTo.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'number') {
      concurrent = resultSelector;
      resultSelector = null;
    }
    return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
  }
  exports.mergeMapTo = mergeMapTo;
  var MergeMapToOperator = (function() {
    function MergeMapToOperator(ish, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      this.ish = ish;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
    }
    MergeMapToOperator.prototype.call = function(observer, source) {
      return source._subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
    };
    return MergeMapToOperator;
  }());
  exports.MergeMapToOperator = MergeMapToOperator;
  var MergeMapToSubscriber = (function(_super) {
    __extends(MergeMapToSubscriber, _super);
    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      _super.call(this, destination);
      this.ish = ish;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
      this.index = 0;
    }
    MergeMapToSubscriber.prototype._next = function(value) {
      if (this.active < this.concurrent) {
        var resultSelector = this.resultSelector;
        var index = this.index++;
        var ish = this.ish;
        var destination = this.destination;
        this.active++;
        this._innerSub(ish, destination, resultSelector, value, index);
      } else {
        this.buffer.push(value);
      }
    };
    MergeMapToSubscriber.prototype._innerSub = function(ish, destination, resultSelector, value, index) {
      this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapToSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeMapToSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      if (resultSelector) {
        this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        destination.next(innerValue);
      }
    };
    MergeMapToSubscriber.prototype.trySelectResult = function(outerValue, innerValue, outerIndex, innerIndex) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      var result;
      try {
        result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        destination.error(err);
        return;
      }
      destination.next(result);
    };
    MergeMapToSubscriber.prototype.notifyError = function(err) {
      this.destination.error(err);
    };
    MergeMapToSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeMapToSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.MergeMapToSubscriber = MergeMapToSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/mergeMapTo.js", ["../../Observable", "../../operator/mergeMapTo"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var mergeMapTo_1 = $__require('../../operator/mergeMapTo');
  Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
  Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/mergeScan.js", ["../util/tryCatch", "../util/errorObject", "../util/subscribeToResult", "../OuterSubscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  function mergeScan(project, seed, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return this.lift(new MergeScanOperator(project, seed, concurrent));
  }
  exports.mergeScan = mergeScan;
  var MergeScanOperator = (function() {
    function MergeScanOperator(project, seed, concurrent) {
      this.project = project;
      this.seed = seed;
      this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new MergeScanSubscriber(subscriber, this.project, this.seed, this.concurrent));
    };
    return MergeScanOperator;
  }());
  exports.MergeScanOperator = MergeScanOperator;
  var MergeScanSubscriber = (function(_super) {
    __extends(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, project, acc, concurrent) {
      _super.call(this, destination);
      this.project = project;
      this.acc = acc;
      this.concurrent = concurrent;
      this.hasValue = false;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
      this.index = 0;
    }
    MergeScanSubscriber.prototype._next = function(value) {
      if (this.active < this.concurrent) {
        var index = this.index++;
        var ish = tryCatch_1.tryCatch(this.project)(this.acc, value);
        var destination = this.destination;
        if (ish === errorObject_1.errorObject) {
          destination.error(errorObject_1.errorObject.e);
        } else {
          this.active++;
          this._innerSub(ish, value, index);
        }
      } else {
        this.buffer.push(value);
      }
    };
    MergeScanSubscriber.prototype._innerSub = function(ish, value, index) {
      this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeScanSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        if (this.hasValue === false) {
          this.destination.next(this.acc);
        }
        this.destination.complete();
      }
    };
    MergeScanSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var destination = this.destination;
      this.acc = innerValue;
      this.hasValue = true;
      destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        if (this.hasValue === false) {
          this.destination.next(this.acc);
        }
        this.destination.complete();
      }
    };
    return MergeScanSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.MergeScanSubscriber = MergeScanSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/mergeScan.js", ["../../Observable", "../../operator/mergeScan"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var mergeScan_1 = $__require('../../operator/mergeScan');
  Observable_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/min.js", ["./reduce"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var reduce_1 = $__require('./reduce');
  function min(comparer) {
    var min = (typeof comparer === 'function') ? function(x, y) {
      return comparer(x, y) < 0 ? x : y;
    } : function(x, y) {
      return x < y ? x : y;
    };
    return this.lift(new reduce_1.ReduceOperator(min));
  }
  exports.min = min;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/min.js", ["../../Observable", "../../operator/min"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var min_1 = $__require('../../operator/min');
  Observable_1.Observable.prototype.min = min_1.min;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/multicast.js", ["../../Observable", "../../operator/multicast"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var multicast_1 = $__require('../../operator/multicast');
  Observable_1.Observable.prototype.multicast = multicast_1.multicast;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/observeOn.js", ["../../Observable", "../../operator/observeOn"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var observeOn_1 = $__require('../../operator/observeOn');
  Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/PromiseObservable.js", ["../util/root", "../Observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('../util/root');
  var Observable_1 = $__require('../Observable');
  var PromiseObservable = (function(_super) {
    __extends(PromiseObservable, _super);
    function PromiseObservable(promise, scheduler) {
      _super.call(this);
      this.promise = promise;
      this.scheduler = scheduler;
    }
    PromiseObservable.create = function(promise, scheduler) {
      return new PromiseObservable(promise, scheduler);
    };
    PromiseObservable.prototype._subscribe = function(subscriber) {
      var _this = this;
      var promise = this.promise;
      var scheduler = this.scheduler;
      if (scheduler == null) {
        if (this._isScalar) {
          if (!subscriber.closed) {
            subscriber.next(this.value);
            subscriber.complete();
          }
        } else {
          promise.then(function(value) {
            _this.value = value;
            _this._isScalar = true;
            if (!subscriber.closed) {
              subscriber.next(value);
              subscriber.complete();
            }
          }, function(err) {
            if (!subscriber.closed) {
              subscriber.error(err);
            }
          }).then(null, function(err) {
            root_1.root.setTimeout(function() {
              throw err;
            });
          });
        }
      } else {
        if (this._isScalar) {
          if (!subscriber.closed) {
            return scheduler.schedule(dispatchNext, 0, {
              value: this.value,
              subscriber: subscriber
            });
          }
        } else {
          promise.then(function(value) {
            _this.value = value;
            _this._isScalar = true;
            if (!subscriber.closed) {
              subscriber.add(scheduler.schedule(dispatchNext, 0, {
                value: value,
                subscriber: subscriber
              }));
            }
          }, function(err) {
            if (!subscriber.closed) {
              subscriber.add(scheduler.schedule(dispatchError, 0, {
                err: err,
                subscriber: subscriber
              }));
            }
          }).then(null, function(err) {
            root_1.root.setTimeout(function() {
              throw err;
            });
          });
        }
      }
    };
    return PromiseObservable;
  }(Observable_1.Observable));
  exports.PromiseObservable = PromiseObservable;
  function dispatchNext(arg) {
    var value = arg.value,
        subscriber = arg.subscriber;
    if (!subscriber.closed) {
      subscriber.next(value);
      subscriber.complete();
    }
  }
  function dispatchError(arg) {
    var err = arg.err,
        subscriber = arg.subscriber;
    if (!subscriber.closed) {
      subscriber.error(err);
    }
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/IteratorObservable.js", ["../util/root", "../Observable", "../symbol/iterator"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('../util/root');
  var Observable_1 = $__require('../Observable');
  var iterator_1 = $__require('../symbol/iterator');
  var IteratorObservable = (function(_super) {
    __extends(IteratorObservable, _super);
    function IteratorObservable(iterator, scheduler) {
      _super.call(this);
      this.scheduler = scheduler;
      if (iterator == null) {
        throw new Error('iterator cannot be null.');
      }
      this.iterator = getIterator(iterator);
    }
    IteratorObservable.create = function(iterator, scheduler) {
      return new IteratorObservable(iterator, scheduler);
    };
    IteratorObservable.dispatch = function(state) {
      var index = state.index,
          hasError = state.hasError,
          iterator = state.iterator,
          subscriber = state.subscriber;
      if (hasError) {
        subscriber.error(state.error);
        return;
      }
      var result = iterator.next();
      if (result.done) {
        subscriber.complete();
        return;
      }
      subscriber.next(result.value);
      state.index = index + 1;
      if (subscriber.closed) {
        return;
      }
      this.schedule(state);
    };
    IteratorObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var _a = this,
          iterator = _a.iterator,
          scheduler = _a.scheduler;
      if (scheduler) {
        return scheduler.schedule(IteratorObservable.dispatch, 0, {
          index: index,
          iterator: iterator,
          subscriber: subscriber
        });
      } else {
        do {
          var result = iterator.next();
          if (result.done) {
            subscriber.complete();
            break;
          } else {
            subscriber.next(result.value);
          }
          if (subscriber.closed) {
            break;
          }
        } while (true);
      }
    };
    return IteratorObservable;
  }(Observable_1.Observable));
  exports.IteratorObservable = IteratorObservable;
  var StringIterator = (function() {
    function StringIterator(str, idx, len) {
      if (idx === void 0) {
        idx = 0;
      }
      if (len === void 0) {
        len = str.length;
      }
      this.str = str;
      this.idx = idx;
      this.len = len;
    }
    StringIterator.prototype[iterator_1.$$iterator] = function() {
      return (this);
    };
    StringIterator.prototype.next = function() {
      return this.idx < this.len ? {
        done: false,
        value: this.str.charAt(this.idx++)
      } : {
        done: true,
        value: undefined
      };
    };
    return StringIterator;
  }());
  var ArrayIterator = (function() {
    function ArrayIterator(arr, idx, len) {
      if (idx === void 0) {
        idx = 0;
      }
      if (len === void 0) {
        len = toLength(arr);
      }
      this.arr = arr;
      this.idx = idx;
      this.len = len;
    }
    ArrayIterator.prototype[iterator_1.$$iterator] = function() {
      return this;
    };
    ArrayIterator.prototype.next = function() {
      return this.idx < this.len ? {
        done: false,
        value: this.arr[this.idx++]
      } : {
        done: true,
        value: undefined
      };
    };
    return ArrayIterator;
  }());
  function getIterator(obj) {
    var i = obj[iterator_1.$$iterator];
    if (!i && typeof obj === 'string') {
      return new StringIterator(obj);
    }
    if (!i && obj.length !== undefined) {
      return new ArrayIterator(obj);
    }
    if (!i) {
      throw new TypeError('object is not iterable');
    }
    return obj[iterator_1.$$iterator]();
  }
  var maxSafeInteger = Math.pow(2, 53) - 1;
  function toLength(o) {
    var len = +o.length;
    if (isNaN(len)) {
      return 0;
    }
    if (len === 0 || !numberIsFinite(len)) {
      return len;
    }
    len = sign(len) * Math.floor(Math.abs(len));
    if (len <= 0) {
      return 0;
    }
    if (len > maxSafeInteger) {
      return maxSafeInteger;
    }
    return len;
  }
  function numberIsFinite(value) {
    return typeof value === 'number' && root_1.root.isFinite(value);
  }
  function sign(value) {
    var valueAsNumber = +value;
    if (valueAsNumber === 0) {
      return valueAsNumber;
    }
    if (isNaN(valueAsNumber)) {
      return valueAsNumber;
    }
    return valueAsNumber < 0 ? -1 : 1;
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/ArrayLikeObservable.js", ["../Observable", "./ScalarObservable", "./EmptyObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var ScalarObservable_1 = $__require('./ScalarObservable');
  var EmptyObservable_1 = $__require('./EmptyObservable');
  var ArrayLikeObservable = (function(_super) {
    __extends(ArrayLikeObservable, _super);
    function ArrayLikeObservable(arrayLike, scheduler) {
      _super.call(this);
      this.arrayLike = arrayLike;
      this.scheduler = scheduler;
      if (!scheduler && arrayLike.length === 1) {
        this._isScalar = true;
        this.value = arrayLike[0];
      }
    }
    ArrayLikeObservable.create = function(arrayLike, scheduler) {
      var length = arrayLike.length;
      if (length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      } else if (length === 1) {
        return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
      } else {
        return new ArrayLikeObservable(arrayLike, scheduler);
      }
    };
    ArrayLikeObservable.dispatch = function(state) {
      var arrayLike = state.arrayLike,
          index = state.index,
          length = state.length,
          subscriber = state.subscriber;
      if (subscriber.closed) {
        return;
      }
      if (index >= length) {
        subscriber.complete();
        return;
      }
      subscriber.next(arrayLike[index]);
      state.index = index + 1;
      this.schedule(state);
    };
    ArrayLikeObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var _a = this,
          arrayLike = _a.arrayLike,
          scheduler = _a.scheduler;
      var length = arrayLike.length;
      if (scheduler) {
        return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
          arrayLike: arrayLike,
          index: index,
          length: length,
          subscriber: subscriber
        });
      } else {
        for (var i = 0; i < length && !subscriber.closed; i++) {
          subscriber.next(arrayLike[i]);
        }
        subscriber.complete();
      }
    };
    return ArrayLikeObservable;
  }(Observable_1.Observable));
  exports.ArrayLikeObservable = ArrayLikeObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/FromObservable.js", ["../util/isArray", "../util/isPromise", "./PromiseObservable", "./IteratorObservable", "./ArrayObservable", "./ArrayLikeObservable", "../symbol/iterator", "../Observable", "../operator/observeOn", "../symbol/observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isArray_1 = $__require('../util/isArray');
  var isPromise_1 = $__require('../util/isPromise');
  var PromiseObservable_1 = $__require('./PromiseObservable');
  var IteratorObservable_1 = $__require('./IteratorObservable');
  var ArrayObservable_1 = $__require('./ArrayObservable');
  var ArrayLikeObservable_1 = $__require('./ArrayLikeObservable');
  var iterator_1 = $__require('../symbol/iterator');
  var Observable_1 = $__require('../Observable');
  var observeOn_1 = $__require('../operator/observeOn');
  var observable_1 = $__require('../symbol/observable');
  var isArrayLike = (function(x) {
    return x && typeof x.length === 'number';
  });
  var FromObservable = (function(_super) {
    __extends(FromObservable, _super);
    function FromObservable(ish, scheduler) {
      _super.call(this, null);
      this.ish = ish;
      this.scheduler = scheduler;
    }
    FromObservable.create = function(ish, scheduler) {
      if (ish != null) {
        if (typeof ish[observable_1.$$observable] === 'function') {
          if (ish instanceof Observable_1.Observable && !scheduler) {
            return ish;
          }
          return new FromObservable(ish, scheduler);
        } else if (isArray_1.isArray(ish)) {
          return new ArrayObservable_1.ArrayObservable(ish, scheduler);
        } else if (isPromise_1.isPromise(ish)) {
          return new PromiseObservable_1.PromiseObservable(ish, scheduler);
        } else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
          return new IteratorObservable_1.IteratorObservable(ish, scheduler);
        } else if (isArrayLike(ish)) {
          return new ArrayLikeObservable_1.ArrayLikeObservable(ish, scheduler);
        }
      }
      throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
    };
    FromObservable.prototype._subscribe = function(subscriber) {
      var ish = this.ish;
      var scheduler = this.scheduler;
      if (scheduler == null) {
        return ish[observable_1.$$observable]().subscribe(subscriber);
      } else {
        return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
      }
    };
    return FromObservable;
  }(Observable_1.Observable));
  exports.FromObservable = FromObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/onErrorResumeNext.js", ["../observable/FromObservable", "../util/isArray", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var FromObservable_1 = $__require('../observable/FromObservable');
  var isArray_1 = $__require('../util/isArray');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      nextSources[_i - 0] = arguments[_i];
    }
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
      nextSources = nextSources[0];
    }
    return this.lift(new OnErrorResumeNextOperator(nextSources));
  }
  exports.onErrorResumeNext = onErrorResumeNext;
  function onErrorResumeNextStatic() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      nextSources[_i - 0] = arguments[_i];
    }
    var source = null;
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
      nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return new FromObservable_1.FromObservable(source, null).lift(new OnErrorResumeNextOperator(nextSources));
  }
  exports.onErrorResumeNextStatic = onErrorResumeNextStatic;
  var OnErrorResumeNextOperator = (function() {
    function OnErrorResumeNextOperator(nextSources) {
      this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
  }());
  var OnErrorResumeNextSubscriber = (function(_super) {
    __extends(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
      _super.call(this, destination);
      this.destination = destination;
      this.nextSources = nextSources;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function(error, innerSub) {
      this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function(innerSub) {
      this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function(err) {
      this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function() {
      this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function() {
      var next = this.nextSources.shift();
      if (next) {
        this.add(subscribeToResult_1.subscribeToResult(this, next));
      } else {
        this.destination.complete();
      }
    };
    return OnErrorResumeNextSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/onErrorResumeNext.js", ["../../Observable", "../../operator/onErrorResumeNext"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var onErrorResumeNext_1 = $__require('../../operator/onErrorResumeNext');
  Observable_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/pairwise.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function pairwise() {
    return this.lift(new PairwiseOperator());
  }
  exports.pairwise = pairwise;
  var PairwiseOperator = (function() {
    function PairwiseOperator() {}
    PairwiseOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new PairwiseSubscriber(subscriber));
    };
    return PairwiseOperator;
  }());
  var PairwiseSubscriber = (function(_super) {
    __extends(PairwiseSubscriber, _super);
    function PairwiseSubscriber(destination) {
      _super.call(this, destination);
      this.hasPrev = false;
    }
    PairwiseSubscriber.prototype._next = function(value) {
      if (this.hasPrev) {
        this.destination.next([this.prev, value]);
      } else {
        this.hasPrev = true;
      }
      this.prev = value;
    };
    return PairwiseSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/pairwise.js", ["../../Observable", "../../operator/pairwise"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var pairwise_1 = $__require('../../operator/pairwise');
  Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/not.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function not(pred, thisArg) {
    function notPred() {
      return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
  }
  exports.not = not;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/filter.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function filter(predicate, thisArg) {
    return this.lift(new FilterOperator(predicate, thisArg));
  }
  exports.filter = filter;
  var FilterOperator = (function() {
    function FilterOperator(predicate, thisArg) {
      this.predicate = predicate;
      this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
  }());
  var FilterSubscriber = (function(_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.count = 0;
      this.predicate = predicate;
    }
    FilterSubscriber.prototype._next = function(value) {
      var result;
      try {
        result = this.predicate.call(this.thisArg, value, this.count++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this.destination.next(value);
      }
    };
    return FilterSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/partition.js", ["../util/not", "./filter"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var not_1 = $__require('../util/not');
  var filter_1 = $__require('./filter');
  function partition(predicate, thisArg) {
    return [filter_1.filter.call(this, predicate), filter_1.filter.call(this, not_1.not(predicate, thisArg))];
  }
  exports.partition = partition;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/partition.js", ["../../Observable", "../../operator/partition"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var partition_1 = $__require('../../operator/partition');
  Observable_1.Observable.prototype.partition = partition_1.partition;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/pluck.js", ["./map"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var map_1 = $__require('./map');
  function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
      throw new Error('list of properties cannot be empty.');
    }
    return map_1.map.call(this, plucker(properties, length));
  }
  exports.pluck = pluck;
  function plucker(props, length) {
    var mapper = function(x) {
      var currentProp = x;
      for (var i = 0; i < length; i++) {
        var p = currentProp[props[i]];
        if (typeof p !== 'undefined') {
          currentProp = p;
        } else {
          return undefined;
        }
      }
      return currentProp;
    };
    return mapper;
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/pluck.js", ["../../Observable", "../../operator/pluck"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var pluck_1 = $__require('../../operator/pluck');
  Observable_1.Observable.prototype.pluck = pluck_1.pluck;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/publish.js", ["../Subject", "./multicast"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Subject_1 = $__require('../Subject');
  var multicast_1 = $__require('./multicast');
  function publish(selector) {
    return selector ? multicast_1.multicast.call(this, function() {
      return new Subject_1.Subject();
    }, selector) : multicast_1.multicast.call(this, new Subject_1.Subject());
  }
  exports.publish = publish;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/publish.js", ["../../Observable", "../../operator/publish"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var publish_1 = $__require('../../operator/publish');
  Observable_1.Observable.prototype.publish = publish_1.publish;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/publishBehavior.js", ["../BehaviorSubject", "./multicast"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var BehaviorSubject_1 = $__require('../BehaviorSubject');
  var multicast_1 = $__require('./multicast');
  function publishBehavior(value) {
    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
  }
  exports.publishBehavior = publishBehavior;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/publishBehavior.js", ["../../Observable", "../../operator/publishBehavior"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var publishBehavior_1 = $__require('../../operator/publishBehavior');
  Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/publishReplay.js", ["../ReplaySubject", "./multicast"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ReplaySubject_1 = $__require('../ReplaySubject');
  var multicast_1 = $__require('./multicast');
  function publishReplay(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }
    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }
    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
  }
  exports.publishReplay = publishReplay;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/publishReplay.js", ["../../Observable", "../../operator/publishReplay"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var publishReplay_1 = $__require('../../operator/publishReplay');
  Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/publishLast.js", ["../AsyncSubject", "./multicast"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var AsyncSubject_1 = $__require('../AsyncSubject');
  var multicast_1 = $__require('./multicast');
  function publishLast() {
    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
  }
  exports.publishLast = publishLast;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/publishLast.js", ["../../Observable", "../../operator/publishLast"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var publishLast_1 = $__require('../../operator/publishLast');
  Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/race.js", ["../util/isArray", "../observable/ArrayObservable", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isArray_1 = $__require('../util/isArray');
  var ArrayObservable_1 = $__require('../observable/ArrayObservable');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    observables.unshift(this);
    return raceStatic.apply(this, observables);
  }
  exports.race = race;
  function raceStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    if (observables.length === 1) {
      if (isArray_1.isArray(observables[0])) {
        observables = observables[0];
      } else {
        return observables[0];
      }
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
  }
  exports.raceStatic = raceStatic;
  var RaceOperator = (function() {
    function RaceOperator() {}
    RaceOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
  }());
  exports.RaceOperator = RaceOperator;
  var RaceSubscriber = (function(_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
      _super.call(this, destination);
      this.hasFirst = false;
      this.observables = [];
      this.subscriptions = [];
    }
    RaceSubscriber.prototype._next = function(observable) {
      this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function() {
      var observables = this.observables;
      var len = observables.length;
      if (len === 0) {
        this.destination.complete();
      } else {
        for (var i = 0; i < len; i++) {
          var observable = observables[i];
          var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
          if (this.subscriptions) {
            this.subscriptions.push(subscription);
            this.add(subscription);
          }
        }
        this.observables = null;
      }
    };
    RaceSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (!this.hasFirst) {
        this.hasFirst = true;
        for (var i = 0; i < this.subscriptions.length; i++) {
          if (i !== outerIndex) {
            var subscription = this.subscriptions[i];
            subscription.unsubscribe();
            this.remove(subscription);
          }
        }
        this.subscriptions = null;
      }
      this.destination.next(innerValue);
    };
    return RaceSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.RaceSubscriber = RaceSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/race.js", ["../../Observable", "../../operator/race"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var race_1 = $__require('../../operator/race');
  Observable_1.Observable.prototype.race = race_1.race;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/reduce.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function reduce(accumulator, seed) {
    return this.lift(new ReduceOperator(accumulator, seed));
  }
  exports.reduce = reduce;
  var ReduceOperator = (function() {
    function ReduceOperator(accumulator, seed) {
      this.accumulator = accumulator;
      this.seed = seed;
    }
    ReduceOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ReduceSubscriber(subscriber, this.accumulator, this.seed));
    };
    return ReduceOperator;
  }());
  exports.ReduceOperator = ReduceOperator;
  var ReduceSubscriber = (function(_super) {
    __extends(ReduceSubscriber, _super);
    function ReduceSubscriber(destination, accumulator, seed) {
      _super.call(this, destination);
      this.accumulator = accumulator;
      this.hasValue = false;
      this.acc = seed;
      this.accumulator = accumulator;
      this.hasSeed = typeof seed !== 'undefined';
    }
    ReduceSubscriber.prototype._next = function(value) {
      if (this.hasValue || (this.hasValue = this.hasSeed)) {
        this._tryReduce(value);
      } else {
        this.acc = value;
        this.hasValue = true;
      }
    };
    ReduceSubscriber.prototype._tryReduce = function(value) {
      var result;
      try {
        result = this.accumulator(this.acc, value);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.acc = result;
    };
    ReduceSubscriber.prototype._complete = function() {
      if (this.hasValue || this.hasSeed) {
        this.destination.next(this.acc);
      }
      this.destination.complete();
    };
    return ReduceSubscriber;
  }(Subscriber_1.Subscriber));
  exports.ReduceSubscriber = ReduceSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/reduce.js", ["../../Observable", "../../operator/reduce"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var reduce_1 = $__require('../../operator/reduce');
  Observable_1.Observable.prototype.reduce = reduce_1.reduce;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/repeat.js", ["../Subscriber", "../observable/EmptyObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var EmptyObservable_1 = $__require('../observable/EmptyObservable');
  function repeat(count) {
    if (count === void 0) {
      count = -1;
    }
    if (count === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else if (count < 0) {
      return this.lift(new RepeatOperator(-1, this));
    } else {
      return this.lift(new RepeatOperator(count - 1, this));
    }
  }
  exports.repeat = repeat;
  var RepeatOperator = (function() {
    function RepeatOperator(count, source) {
      this.count = count;
      this.source = source;
    }
    RepeatOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
  }());
  var RepeatSubscriber = (function(_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
      _super.call(this, destination);
      this.count = count;
      this.source = source;
    }
    RepeatSubscriber.prototype.complete = function() {
      if (!this.isStopped) {
        var _a = this,
            source = _a.source,
            count = _a.count;
        if (count === 0) {
          return _super.prototype.complete.call(this);
        } else if (count > -1) {
          this.count = count - 1;
        }
        this.unsubscribe();
        this.isStopped = false;
        this.closed = false;
        source.subscribe(this);
      }
    };
    return RepeatSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/repeat.js", ["../../Observable", "../../operator/repeat"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var repeat_1 = $__require('../../operator/repeat');
  Observable_1.Observable.prototype.repeat = repeat_1.repeat;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/repeatWhen.js", ["../Subject", "../util/tryCatch", "../util/errorObject", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('../Subject');
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function repeatWhen(notifier) {
    return this.lift(new RepeatWhenOperator(notifier, this));
  }
  exports.repeatWhen = repeatWhen;
  var RepeatWhenOperator = (function() {
    function RepeatWhenOperator(notifier, source) {
      this.notifier = notifier;
      this.source = source;
    }
    RepeatWhenOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RepeatWhenOperator;
  }());
  var RepeatWhenSubscriber = (function(_super) {
    __extends(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
      _super.call(this, destination);
      this.notifier = notifier;
      this.source = source;
    }
    RepeatWhenSubscriber.prototype.complete = function() {
      if (!this.isStopped) {
        var notifications = this.notifications;
        var retries = this.retries;
        var retriesSubscription = this.retriesSubscription;
        if (!retries) {
          notifications = new Subject_1.Subject();
          retries = tryCatch_1.tryCatch(this.notifier)(notifications);
          if (retries === errorObject_1.errorObject) {
            return _super.prototype.complete.call(this);
          }
          retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
        } else {
          this.notifications = null;
          this.retriesSubscription = null;
        }
        this.unsubscribe();
        this.closed = false;
        this.notifications = notifications;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        notifications.next();
      }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function() {
      var _a = this,
          notifications = _a.notifications,
          retriesSubscription = _a.retriesSubscription;
      if (notifications) {
        notifications.unsubscribe();
        this.notifications = null;
      }
      if (retriesSubscription) {
        retriesSubscription.unsubscribe();
        this.retriesSubscription = null;
      }
      this.retries = null;
    };
    RepeatWhenSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          notifications = _a.notifications,
          retries = _a.retries,
          retriesSubscription = _a.retriesSubscription;
      this.notifications = null;
      this.retries = null;
      this.retriesSubscription = null;
      this.unsubscribe();
      this.isStopped = false;
      this.closed = false;
      this.notifications = notifications;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;
      this.source.subscribe(this);
    };
    return RepeatWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/repeatWhen.js", ["../../Observable", "../../operator/repeatWhen"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var repeatWhen_1 = $__require('../../operator/repeatWhen');
  Observable_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/retry.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function retry(count) {
    if (count === void 0) {
      count = -1;
    }
    return this.lift(new RetryOperator(count, this));
  }
  exports.retry = retry;
  var RetryOperator = (function() {
    function RetryOperator(count, source) {
      this.count = count;
      this.source = source;
    }
    RetryOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
  }());
  var RetrySubscriber = (function(_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
      _super.call(this, destination);
      this.count = count;
      this.source = source;
    }
    RetrySubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var _a = this,
            source = _a.source,
            count = _a.count;
        if (count === 0) {
          return _super.prototype.error.call(this, err);
        } else if (count > -1) {
          this.count = count - 1;
        }
        this.unsubscribe();
        this.isStopped = false;
        this.closed = false;
        source.subscribe(this);
      }
    };
    return RetrySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/retry.js", ["../../Observable", "../../operator/retry"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var retry_1 = $__require('../../operator/retry');
  Observable_1.Observable.prototype.retry = retry_1.retry;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/retryWhen.js", ["../Subject", "../util/tryCatch", "../util/errorObject", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('../Subject');
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function retryWhen(notifier) {
    return this.lift(new RetryWhenOperator(notifier, this));
  }
  exports.retryWhen = retryWhen;
  var RetryWhenOperator = (function() {
    function RetryWhenOperator(notifier, source) {
      this.notifier = notifier;
      this.source = source;
    }
    RetryWhenOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
  }());
  var RetryWhenSubscriber = (function(_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
      _super.call(this, destination);
      this.notifier = notifier;
      this.source = source;
    }
    RetryWhenSubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var errors = this.errors;
        var retries = this.retries;
        var retriesSubscription = this.retriesSubscription;
        if (!retries) {
          errors = new Subject_1.Subject();
          retries = tryCatch_1.tryCatch(this.notifier)(errors);
          if (retries === errorObject_1.errorObject) {
            return _super.prototype.error.call(this, errorObject_1.errorObject.e);
          }
          retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
        } else {
          this.errors = null;
          this.retriesSubscription = null;
        }
        this.unsubscribe();
        this.closed = false;
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        errors.next(err);
      }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function() {
      var _a = this,
          errors = _a.errors,
          retriesSubscription = _a.retriesSubscription;
      if (errors) {
        errors.unsubscribe();
        this.errors = null;
      }
      if (retriesSubscription) {
        retriesSubscription.unsubscribe();
        this.retriesSubscription = null;
      }
      this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          errors = _a.errors,
          retries = _a.retries,
          retriesSubscription = _a.retriesSubscription;
      this.errors = null;
      this.retries = null;
      this.retriesSubscription = null;
      this.unsubscribe();
      this.isStopped = false;
      this.closed = false;
      this.errors = errors;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;
      this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/retryWhen.js", ["../../Observable", "../../operator/retryWhen"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var retryWhen_1 = $__require('../../operator/retryWhen');
  Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/sample.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function sample(notifier) {
    return this.lift(new SampleOperator(notifier));
  }
  exports.sample = sample;
  var SampleOperator = (function() {
    function SampleOperator(notifier) {
      this.notifier = notifier;
    }
    SampleOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SampleSubscriber(subscriber, this.notifier));
    };
    return SampleOperator;
  }());
  var SampleSubscriber = (function(_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.hasValue = false;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SampleSubscriber.prototype._next = function(value) {
      this.value = value;
      this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function() {
      this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function() {
      if (this.hasValue) {
        this.hasValue = false;
        this.destination.next(this.value);
      }
    };
    return SampleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/sample.js", ["../../Observable", "../../operator/sample"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var sample_1 = $__require('../../operator/sample');
  Observable_1.Observable.prototype.sample = sample_1.sample;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/sampleTime.js", ["../Subscriber", "../scheduler/async"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var async_1 = $__require('../scheduler/async');
  function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new SampleTimeOperator(period, scheduler));
  }
  exports.sampleTime = sampleTime;
  var SampleTimeOperator = (function() {
    function SampleTimeOperator(period, scheduler) {
      this.period = period;
      this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
  }());
  var SampleTimeSubscriber = (function(_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
      _super.call(this, destination);
      this.period = period;
      this.scheduler = scheduler;
      this.hasValue = false;
      this.add(scheduler.schedule(dispatchNotification, period, {
        subscriber: this,
        period: period
      }));
    }
    SampleTimeSubscriber.prototype._next = function(value) {
      this.lastValue = value;
      this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function() {
      if (this.hasValue) {
        this.hasValue = false;
        this.destination.next(this.lastValue);
      }
    };
    return SampleTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchNotification(state) {
    var subscriber = state.subscriber,
        period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/sampleTime.js", ["../../Observable", "../../operator/sampleTime"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var sampleTime_1 = $__require('../../operator/sampleTime');
  Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/scan.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function scan(accumulator, seed) {
    return this.lift(new ScanOperator(accumulator, seed));
  }
  exports.scan = scan;
  var ScanOperator = (function() {
    function ScanOperator(accumulator, seed) {
      this.accumulator = accumulator;
      this.seed = seed;
    }
    ScanOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
    };
    return ScanOperator;
  }());
  var ScanSubscriber = (function(_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, seed) {
      _super.call(this, destination);
      this.accumulator = accumulator;
      this.index = 0;
      this.accumulatorSet = false;
      this.seed = seed;
      this.accumulatorSet = typeof seed !== 'undefined';
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
      get: function() {
        return this._seed;
      },
      set: function(value) {
        this.accumulatorSet = true;
        this._seed = value;
      },
      enumerable: true,
      configurable: true
    });
    ScanSubscriber.prototype._next = function(value) {
      if (!this.accumulatorSet) {
        this.seed = value;
        this.destination.next(value);
      } else {
        return this._tryNext(value);
      }
    };
    ScanSubscriber.prototype._tryNext = function(value) {
      var index = this.index++;
      var result;
      try {
        result = this.accumulator(this.seed, value, index);
      } catch (err) {
        this.destination.error(err);
      }
      this.seed = result;
      this.destination.next(result);
    };
    return ScanSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/scan.js", ["../../Observable", "../../operator/scan"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var scan_1 = $__require('../../operator/scan');
  Observable_1.Observable.prototype.scan = scan_1.scan;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/sequenceEqual.js", ["../Subscriber", "../util/tryCatch", "../util/errorObject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  function sequenceEqual(compareTo, comparor) {
    return this.lift(new SequenceEqualOperator(compareTo, comparor));
  }
  exports.sequenceEqual = sequenceEqual;
  var SequenceEqualOperator = (function() {
    function SequenceEqualOperator(compareTo, comparor) {
      this.compareTo = compareTo;
      this.comparor = comparor;
    }
    SequenceEqualOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparor));
    };
    return SequenceEqualOperator;
  }());
  exports.SequenceEqualOperator = SequenceEqualOperator;
  var SequenceEqualSubscriber = (function(_super) {
    __extends(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparor) {
      _super.call(this, destination);
      this.compareTo = compareTo;
      this.comparor = comparor;
      this._a = [];
      this._b = [];
      this._oneComplete = false;
      this.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
    }
    SequenceEqualSubscriber.prototype._next = function(value) {
      if (this._oneComplete && this._b.length === 0) {
        this.emit(false);
      } else {
        this._a.push(value);
        this.checkValues();
      }
    };
    SequenceEqualSubscriber.prototype._complete = function() {
      if (this._oneComplete) {
        this.emit(this._a.length === 0 && this._b.length === 0);
      } else {
        this._oneComplete = true;
      }
    };
    SequenceEqualSubscriber.prototype.checkValues = function() {
      var _c = this,
          _a = _c._a,
          _b = _c._b,
          comparor = _c.comparor;
      while (_a.length > 0 && _b.length > 0) {
        var a = _a.shift();
        var b = _b.shift();
        var areEqual = false;
        if (comparor) {
          areEqual = tryCatch_1.tryCatch(comparor)(a, b);
          if (areEqual === errorObject_1.errorObject) {
            this.destination.error(errorObject_1.errorObject.e);
          }
        } else {
          areEqual = a === b;
        }
        if (!areEqual) {
          this.emit(false);
        }
      }
    };
    SequenceEqualSubscriber.prototype.emit = function(value) {
      var destination = this.destination;
      destination.next(value);
      destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function(value) {
      if (this._oneComplete && this._a.length === 0) {
        this.emit(false);
      } else {
        this._b.push(value);
        this.checkValues();
      }
    };
    return SequenceEqualSubscriber;
  }(Subscriber_1.Subscriber));
  exports.SequenceEqualSubscriber = SequenceEqualSubscriber;
  var SequenceEqualCompareToSubscriber = (function(_super) {
    __extends(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
      _super.call(this, destination);
      this.parent = parent;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function(value) {
      this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function(err) {
      this.parent.error(err);
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function() {
      this.parent._complete();
    };
    return SequenceEqualCompareToSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/sequenceEqual.js", ["../../Observable", "../../operator/sequenceEqual"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var sequenceEqual_1 = $__require('../../operator/sequenceEqual');
  Observable_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/multicast.js", ["../observable/MulticastObservable", "../observable/ConnectableObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var MulticastObservable_1 = $__require('../observable/MulticastObservable');
  var ConnectableObservable_1 = $__require('../observable/ConnectableObservable');
  function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory() {
        return subjectOrSubjectFactory;
      };
    }
    return !selector ? new ConnectableObservable_1.ConnectableObservable(this, subjectFactory) : new MulticastObservable_1.MulticastObservable(this, subjectFactory, selector);
  }
  exports.multicast = multicast;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/share.js", ["./multicast", "../Subject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var multicast_1 = $__require('./multicast');
  var Subject_1 = $__require('../Subject');
  function shareSubjectFactory() {
    return new Subject_1.Subject();
  }
  function share() {
    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
  }
  exports.share = share;
  ;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/share.js", ["../../Observable", "../../operator/share"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var share_1 = $__require('../../operator/share');
  Observable_1.Observable.prototype.share = share_1.share;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/single.js", ["../Subscriber", "../util/EmptyError"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var EmptyError_1 = $__require('../util/EmptyError');
  function single(predicate) {
    return this.lift(new SingleOperator(predicate, this));
  }
  exports.single = single;
  var SingleOperator = (function() {
    function SingleOperator(predicate, source) {
      this.predicate = predicate;
      this.source = source;
    }
    SingleOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
  }());
  var SingleSubscriber = (function(_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.source = source;
      this.seenValue = false;
      this.index = 0;
    }
    SingleSubscriber.prototype.applySingleValue = function(value) {
      if (this.seenValue) {
        this.destination.error('Sequence contains more than one element');
      } else {
        this.seenValue = true;
        this.singleValue = value;
      }
    };
    SingleSubscriber.prototype._next = function(value) {
      var predicate = this.predicate;
      this.index++;
      if (predicate) {
        this.tryNext(value);
      } else {
        this.applySingleValue(value);
      }
    };
    SingleSubscriber.prototype.tryNext = function(value) {
      try {
        var result = this.predicate(value, this.index, this.source);
        if (result) {
          this.applySingleValue(value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    SingleSubscriber.prototype._complete = function() {
      var destination = this.destination;
      if (this.index > 0) {
        destination.next(this.seenValue ? this.singleValue : undefined);
        destination.complete();
      } else {
        destination.error(new EmptyError_1.EmptyError);
      }
    };
    return SingleSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/single.js", ["../../Observable", "../../operator/single"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var single_1 = $__require('../../operator/single');
  Observable_1.Observable.prototype.single = single_1.single;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/skip.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function skip(total) {
    return this.lift(new SkipOperator(total));
  }
  exports.skip = skip;
  var SkipOperator = (function() {
    function SkipOperator(total) {
      this.total = total;
    }
    SkipOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
  }());
  var SkipSubscriber = (function(_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.count = 0;
    }
    SkipSubscriber.prototype._next = function(x) {
      if (++this.count > this.total) {
        this.destination.next(x);
      }
    };
    return SkipSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/skip.js", ["../../Observable", "../../operator/skip"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var skip_1 = $__require('../../operator/skip');
  Observable_1.Observable.prototype.skip = skip_1.skip;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/skipUntil.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function skipUntil(notifier) {
    return this.lift(new SkipUntilOperator(notifier));
  }
  exports.skipUntil = skipUntil;
  var SkipUntilOperator = (function() {
    function SkipUntilOperator(notifier) {
      this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
    };
    return SkipUntilOperator;
  }());
  var SkipUntilSubscriber = (function(_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.hasValue = false;
      this.isInnerStopped = false;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SkipUntilSubscriber.prototype._next = function(value) {
      if (this.hasValue) {
        _super.prototype._next.call(this, value);
      }
    };
    SkipUntilSubscriber.prototype._complete = function() {
      if (this.isInnerStopped) {
        _super.prototype._complete.call(this);
      } else {
        this.unsubscribe();
      }
    };
    SkipUntilSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.hasValue = true;
    };
    SkipUntilSubscriber.prototype.notifyComplete = function() {
      this.isInnerStopped = true;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    return SkipUntilSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/skipUntil.js", ["../../Observable", "../../operator/skipUntil"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var skipUntil_1 = $__require('../../operator/skipUntil');
  Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/skipWhile.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function skipWhile(predicate) {
    return this.lift(new SkipWhileOperator(predicate));
  }
  exports.skipWhile = skipWhile;
  var SkipWhileOperator = (function() {
    function SkipWhileOperator(predicate) {
      this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator;
  }());
  var SkipWhileSubscriber = (function(_super) {
    __extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.skipping = true;
      this.index = 0;
    }
    SkipWhileSubscriber.prototype._next = function(value) {
      var destination = this.destination;
      if (this.skipping) {
        this.tryCallPredicate(value);
      }
      if (!this.skipping) {
        destination.next(value);
      }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function(value) {
      try {
        var result = this.predicate(value, this.index++);
        this.skipping = Boolean(result);
      } catch (err) {
        this.destination.error(err);
      }
    };
    return SkipWhileSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/skipWhile.js", ["../../Observable", "../../operator/skipWhile"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var skipWhile_1 = $__require('../../operator/skipWhile');
  Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/mergeAll.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function mergeAll(concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return this.lift(new MergeAllOperator(concurrent));
  }
  exports.mergeAll = mergeAll;
  var MergeAllOperator = (function() {
    function MergeAllOperator(concurrent) {
      this.concurrent = concurrent;
    }
    MergeAllOperator.prototype.call = function(observer, source) {
      return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
    };
    return MergeAllOperator;
  }());
  exports.MergeAllOperator = MergeAllOperator;
  var MergeAllSubscriber = (function(_super) {
    __extends(MergeAllSubscriber, _super);
    function MergeAllSubscriber(destination, concurrent) {
      _super.call(this, destination);
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
    }
    MergeAllSubscriber.prototype._next = function(observable) {
      if (this.active < this.concurrent) {
        this.active++;
        this.add(subscribeToResult_1.subscribeToResult(this, observable));
      } else {
        this.buffer.push(observable);
      }
    };
    MergeAllSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeAllSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeAllSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.MergeAllSubscriber = MergeAllSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/concat.js", ["../util/isScheduler", "../observable/ArrayObservable", "./mergeAll"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isScheduler_1 = $__require('../util/isScheduler');
  var ArrayObservable_1 = $__require('../observable/ArrayObservable');
  var mergeAll_1 = $__require('./mergeAll');
  function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    return concatStatic.apply(void 0, [this].concat(observables));
  }
  exports.concat = concat;
  function concatStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var scheduler = null;
    var args = observables;
    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
      scheduler = args.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
  }
  exports.concatStatic = concatStatic;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/startWith.js", ["../observable/ArrayObservable", "../observable/ScalarObservable", "../observable/EmptyObservable", "./concat", "../util/isScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ArrayObservable_1 = $__require('../observable/ArrayObservable');
  var ScalarObservable_1 = $__require('../observable/ScalarObservable');
  var EmptyObservable_1 = $__require('../observable/EmptyObservable');
  var concat_1 = $__require('./concat');
  var isScheduler_1 = $__require('../util/isScheduler');
  function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      array[_i - 0] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
      array.pop();
    } else {
      scheduler = null;
    }
    var len = array.length;
    if (len === 1) {
      return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
    } else if (len > 1) {
      return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
    } else {
      return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
    }
  }
  exports.startWith = startWith;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/startWith.js", ["../../Observable", "../../operator/startWith"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var startWith_1 = $__require('../../operator/startWith');
  Observable_1.Observable.prototype.startWith = startWith_1.startWith;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/isNumeric.js", ["../util/isArray"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArray_1 = $__require('../util/isArray');
  function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
  }
  exports.isNumeric = isNumeric;
  ;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/SubscribeOnObservable.js", ["../Observable", "../scheduler/asap", "../util/isNumeric"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var asap_1 = $__require('../scheduler/asap');
  var isNumeric_1 = $__require('../util/isNumeric');
  var SubscribeOnObservable = (function(_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
      if (delayTime === void 0) {
        delayTime = 0;
      }
      if (scheduler === void 0) {
        scheduler = asap_1.asap;
      }
      _super.call(this);
      this.source = source;
      this.delayTime = delayTime;
      this.scheduler = scheduler;
      if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
        this.delayTime = 0;
      }
      if (!scheduler || typeof scheduler.schedule !== 'function') {
        this.scheduler = asap_1.asap;
      }
    }
    SubscribeOnObservable.create = function(source, delay, scheduler) {
      if (delay === void 0) {
        delay = 0;
      }
      if (scheduler === void 0) {
        scheduler = asap_1.asap;
      }
      return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function(arg) {
      var source = arg.source,
          subscriber = arg.subscriber;
      return source.subscribe(subscriber);
    };
    SubscribeOnObservable.prototype._subscribe = function(subscriber) {
      var delay = this.delayTime;
      var source = this.source;
      var scheduler = this.scheduler;
      return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
        source: source,
        subscriber: subscriber
      });
    };
    return SubscribeOnObservable;
  }(Observable_1.Observable));
  exports.SubscribeOnObservable = SubscribeOnObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/subscribeOn.js", ["../observable/SubscribeOnObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SubscribeOnObservable_1 = $__require('../observable/SubscribeOnObservable');
  function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
  }
  exports.subscribeOn = subscribeOn;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/subscribeOn.js", ["../../Observable", "../../operator/subscribeOn"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var subscribeOn_1 = $__require('../../operator/subscribeOn');
  Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/switch.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function _switch() {
    return this.lift(new SwitchOperator());
  }
  exports._switch = _switch;
  var SwitchOperator = (function() {
    function SwitchOperator() {}
    SwitchOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SwitchSubscriber(subscriber));
    };
    return SwitchOperator;
  }());
  var SwitchSubscriber = (function(_super) {
    __extends(SwitchSubscriber, _super);
    function SwitchSubscriber(destination) {
      _super.call(this, destination);
      this.active = 0;
      this.hasCompleted = false;
    }
    SwitchSubscriber.prototype._next = function(value) {
      this.unsubscribeInner();
      this.active++;
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
    };
    SwitchSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0) {
        this.destination.complete();
      }
    };
    SwitchSubscriber.prototype.unsubscribeInner = function() {
      this.active = this.active > 0 ? this.active - 1 : 0;
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
        this.remove(innerSubscription);
      }
    };
    SwitchSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(innerValue);
    };
    SwitchSubscriber.prototype.notifyError = function(err) {
      this.destination.error(err);
    };
    SwitchSubscriber.prototype.notifyComplete = function() {
      this.unsubscribeInner();
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    return SwitchSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/switch.js", ["../../Observable", "../../operator/switch"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var switch_1 = $__require('../../operator/switch');
  Observable_1.Observable.prototype.switch = switch_1._switch;
  Observable_1.Observable.prototype._switch = switch_1._switch;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/switchMap.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
  }
  exports.switchMap = switchMap;
  var SwitchMapOperator = (function() {
    function SwitchMapOperator(project, resultSelector) {
      this.project = project;
      this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
  }());
  var SwitchMapSubscriber = (function(_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
      _super.call(this, destination);
      this.project = project;
      this.resultSelector = resultSelector;
      this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function(value) {
      var result;
      var index = this.index++;
      try {
        result = this.project(value, index);
      } catch (error) {
        this.destination.error(error);
        return;
      }
      this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function(result, value, index) {
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
      }
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function() {
      var innerSubscription = this.innerSubscription;
      if (!innerSubscription || innerSubscription.closed) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function() {
      this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function(innerSub) {
      this.remove(innerSub);
      this.innerSubscription = null;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (this.resultSelector) {
        this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        this.destination.next(innerValue);
      }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function(outerValue, innerValue, outerIndex, innerIndex) {
      var result;
      try {
        result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return SwitchMapSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/switchMap.js", ["../../Observable", "../../operator/switchMap"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var switchMap_1 = $__require('../../operator/switchMap');
  Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/switchMapTo.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function switchMapTo(innerObservable, resultSelector) {
    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
  }
  exports.switchMapTo = switchMapTo;
  var SwitchMapToOperator = (function() {
    function SwitchMapToOperator(observable, resultSelector) {
      this.observable = observable;
      this.resultSelector = resultSelector;
    }
    SwitchMapToOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
    };
    return SwitchMapToOperator;
  }());
  var SwitchMapToSubscriber = (function(_super) {
    __extends(SwitchMapToSubscriber, _super);
    function SwitchMapToSubscriber(destination, inner, resultSelector) {
      _super.call(this, destination);
      this.inner = inner;
      this.resultSelector = resultSelector;
      this.index = 0;
    }
    SwitchMapToSubscriber.prototype._next = function(value) {
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
      }
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
    };
    SwitchMapToSubscriber.prototype._complete = function() {
      var innerSubscription = this.innerSubscription;
      if (!innerSubscription || innerSubscription.closed) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapToSubscriber.prototype._unsubscribe = function() {
      this.innerSubscription = null;
    };
    SwitchMapToSubscriber.prototype.notifyComplete = function(innerSub) {
      this.remove(innerSub);
      this.innerSubscription = null;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapToSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      if (resultSelector) {
        this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        destination.next(innerValue);
      }
    };
    SwitchMapToSubscriber.prototype.tryResultSelector = function(outerValue, innerValue, outerIndex, innerIndex) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      var result;
      try {
        result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        destination.error(err);
        return;
      }
      destination.next(result);
    };
    return SwitchMapToSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/switchMapTo.js", ["../../Observable", "../../operator/switchMapTo"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var switchMapTo_1 = $__require('../../operator/switchMapTo');
  Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/take.js", ["../Subscriber", "../util/ArgumentOutOfRangeError", "../observable/EmptyObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var ArgumentOutOfRangeError_1 = $__require('../util/ArgumentOutOfRangeError');
  var EmptyObservable_1 = $__require('../observable/EmptyObservable');
  function take(count) {
    if (count === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else {
      return this.lift(new TakeOperator(count));
    }
  }
  exports.take = take;
  var TakeOperator = (function() {
    function TakeOperator(total) {
      this.total = total;
      if (this.total < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
      }
    }
    TakeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
  }());
  var TakeSubscriber = (function(_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.count = 0;
    }
    TakeSubscriber.prototype._next = function(value) {
      var total = this.total;
      if (++this.count <= total) {
        this.destination.next(value);
        if (this.count === total) {
          this.destination.complete();
          this.unsubscribe();
        }
      }
    };
    return TakeSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/take.js", ["../../Observable", "../../operator/take"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var take_1 = $__require('../../operator/take');
  Observable_1.Observable.prototype.take = take_1.take;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/takeLast.js", ["../Subscriber", "../util/ArgumentOutOfRangeError", "../observable/EmptyObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var ArgumentOutOfRangeError_1 = $__require('../util/ArgumentOutOfRangeError');
  var EmptyObservable_1 = $__require('../observable/EmptyObservable');
  function takeLast(count) {
    if (count === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else {
      return this.lift(new TakeLastOperator(count));
    }
  }
  exports.takeLast = takeLast;
  var TakeLastOperator = (function() {
    function TakeLastOperator(total) {
      this.total = total;
      if (this.total < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
      }
    }
    TakeLastOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
  }());
  var TakeLastSubscriber = (function(_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.ring = new Array();
      this.count = 0;
    }
    TakeLastSubscriber.prototype._next = function(value) {
      var ring = this.ring;
      var total = this.total;
      var count = this.count++;
      if (ring.length < total) {
        ring.push(value);
      } else {
        var index = count % total;
        ring[index] = value;
      }
    };
    TakeLastSubscriber.prototype._complete = function() {
      var destination = this.destination;
      var count = this.count;
      if (count > 0) {
        var total = this.count >= this.total ? this.total : this.count;
        var ring = this.ring;
        for (var i = 0; i < total; i++) {
          var idx = (count++) % total;
          destination.next(ring[idx]);
        }
      }
      destination.complete();
    };
    return TakeLastSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/takeLast.js", ["../../Observable", "../../operator/takeLast"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var takeLast_1 = $__require('../../operator/takeLast');
  Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/takeUntil.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function takeUntil(notifier) {
    return this.lift(new TakeUntilOperator(notifier));
  }
  exports.takeUntil = takeUntil;
  var TakeUntilOperator = (function() {
    function TakeUntilOperator(notifier) {
      this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
    };
    return TakeUntilOperator;
  }());
  var TakeUntilSubscriber = (function(_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.notifier = notifier;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    TakeUntilSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function() {};
    return TakeUntilSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/takeUntil.js", ["../../Observable", "../../operator/takeUntil"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var takeUntil_1 = $__require('../../operator/takeUntil');
  Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/takeWhile.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function takeWhile(predicate) {
    return this.lift(new TakeWhileOperator(predicate));
  }
  exports.takeWhile = takeWhile;
  var TakeWhileOperator = (function() {
    function TakeWhileOperator(predicate) {
      this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
  }());
  var TakeWhileSubscriber = (function(_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function(value) {
      var destination = this.destination;
      var result;
      try {
        result = this.predicate(value, this.index++);
      } catch (err) {
        destination.error(err);
        return;
      }
      this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function(value, predicateResult) {
      var destination = this.destination;
      if (Boolean(predicateResult)) {
        destination.next(value);
      } else {
        destination.complete();
      }
    };
    return TakeWhileSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/takeWhile.js", ["../../Observable", "../../operator/takeWhile"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var takeWhile_1 = $__require('../../operator/takeWhile');
  Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/throttle.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function throttle(durationSelector) {
    return this.lift(new ThrottleOperator(durationSelector));
  }
  exports.throttle = throttle;
  var ThrottleOperator = (function() {
    function ThrottleOperator(durationSelector) {
      this.durationSelector = durationSelector;
    }
    ThrottleOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
    };
    return ThrottleOperator;
  }());
  var ThrottleSubscriber = (function(_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector) {
      _super.call(this, destination);
      this.destination = destination;
      this.durationSelector = durationSelector;
    }
    ThrottleSubscriber.prototype._next = function(value) {
      if (!this.throttled) {
        this.tryDurationSelector(value);
      }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function(value) {
      var duration = null;
      try {
        duration = this.durationSelector(value);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.emitAndThrottle(value, duration);
    };
    ThrottleSubscriber.prototype.emitAndThrottle = function(value, duration) {
      this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
      this.destination.next(value);
    };
    ThrottleSubscriber.prototype._unsubscribe = function() {
      var throttled = this.throttled;
      if (throttled) {
        this.remove(throttled);
        this.throttled = null;
        throttled.unsubscribe();
      }
    };
    ThrottleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this._unsubscribe();
    };
    ThrottleSubscriber.prototype.notifyComplete = function() {
      this._unsubscribe();
    };
    return ThrottleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/throttle.js", ["../../Observable", "../../operator/throttle"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var throttle_1 = $__require('../../operator/throttle');
  Observable_1.Observable.prototype.throttle = throttle_1.throttle;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/throttleTime.js", ["../Subscriber", "../scheduler/async"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var async_1 = $__require('../scheduler/async');
  function throttleTime(duration, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new ThrottleTimeOperator(duration, scheduler));
  }
  exports.throttleTime = throttleTime;
  var ThrottleTimeOperator = (function() {
    function ThrottleTimeOperator(duration, scheduler) {
      this.duration = duration;
      this.scheduler = scheduler;
    }
    ThrottleTimeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler));
    };
    return ThrottleTimeOperator;
  }());
  var ThrottleTimeSubscriber = (function(_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler) {
      _super.call(this, destination);
      this.duration = duration;
      this.scheduler = scheduler;
    }
    ThrottleTimeSubscriber.prototype._next = function(value) {
      if (!this.throttled) {
        this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {subscriber: this}));
        this.destination.next(value);
      }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function() {
      var throttled = this.throttled;
      if (throttled) {
        throttled.unsubscribe();
        this.remove(throttled);
        this.throttled = null;
      }
    };
    return ThrottleTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/throttleTime.js", ["../../Observable", "../../operator/throttleTime"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var throttleTime_1 = $__require('../../operator/throttleTime');
  Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/timeInterval.js", ["../../Observable", "../../operator/timeInterval"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var timeInterval_1 = $__require('../../operator/timeInterval');
  Observable_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/timeout.js", ["../scheduler/async", "../util/isDate", "../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('../scheduler/async');
  var isDate_1 = $__require('../util/isDate');
  var Subscriber_1 = $__require('../Subscriber');
  function timeout(due, errorToSend, scheduler) {
    if (errorToSend === void 0) {
      errorToSend = null;
    }
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
  }
  exports.timeout = timeout;
  var TimeoutOperator = (function() {
    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
      this.waitFor = waitFor;
      this.absoluteTimeout = absoluteTimeout;
      this.errorToSend = errorToSend;
      this.scheduler = scheduler;
    }
    TimeoutOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler));
    };
    return TimeoutOperator;
  }());
  var TimeoutSubscriber = (function(_super) {
    __extends(TimeoutSubscriber, _super);
    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
      _super.call(this, destination);
      this.absoluteTimeout = absoluteTimeout;
      this.waitFor = waitFor;
      this.errorToSend = errorToSend;
      this.scheduler = scheduler;
      this.index = 0;
      this._previousIndex = 0;
      this._hasCompleted = false;
      this.scheduleTimeout();
    }
    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
      get: function() {
        return this._previousIndex;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
      get: function() {
        return this._hasCompleted;
      },
      enumerable: true,
      configurable: true
    });
    TimeoutSubscriber.dispatchTimeout = function(state) {
      var source = state.subscriber;
      var currentIndex = state.index;
      if (!source.hasCompleted && source.previousIndex === currentIndex) {
        source.notifyTimeout();
      }
    };
    TimeoutSubscriber.prototype.scheduleTimeout = function() {
      var currentIndex = this.index;
      this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, {
        subscriber: this,
        index: currentIndex
      });
      this.index++;
      this._previousIndex = currentIndex;
    };
    TimeoutSubscriber.prototype._next = function(value) {
      this.destination.next(value);
      if (!this.absoluteTimeout) {
        this.scheduleTimeout();
      }
    };
    TimeoutSubscriber.prototype._error = function(err) {
      this.destination.error(err);
      this._hasCompleted = true;
    };
    TimeoutSubscriber.prototype._complete = function() {
      this.destination.complete();
      this._hasCompleted = true;
    };
    TimeoutSubscriber.prototype.notifyTimeout = function() {
      this.error(this.errorToSend || new Error('timeout'));
    };
    return TimeoutSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/timeout.js", ["../../Observable", "../../operator/timeout"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var timeout_1 = $__require('../../operator/timeout');
  Observable_1.Observable.prototype.timeout = timeout_1.timeout;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/isDate.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isDate(value) {
    return value instanceof Date && !isNaN(+value);
  }
  exports.isDate = isDate;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/timeoutWith.js", ["../scheduler/async", "../util/isDate", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('../scheduler/async');
  var isDate_1 = $__require('../util/isDate');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  }
  exports.timeoutWith = timeoutWith;
  var TimeoutWithOperator = (function() {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
      this.waitFor = waitFor;
      this.absoluteTimeout = absoluteTimeout;
      this.withObservable = withObservable;
      this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
  }());
  var TimeoutWithSubscriber = (function(_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
      _super.call(this);
      this.destination = destination;
      this.absoluteTimeout = absoluteTimeout;
      this.waitFor = waitFor;
      this.withObservable = withObservable;
      this.scheduler = scheduler;
      this.timeoutSubscription = undefined;
      this.index = 0;
      this._previousIndex = 0;
      this._hasCompleted = false;
      destination.add(this);
      this.scheduleTimeout();
    }
    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
      get: function() {
        return this._previousIndex;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
      get: function() {
        return this._hasCompleted;
      },
      enumerable: true,
      configurable: true
    });
    TimeoutWithSubscriber.dispatchTimeout = function(state) {
      var source = state.subscriber;
      var currentIndex = state.index;
      if (!source.hasCompleted && source.previousIndex === currentIndex) {
        source.handleTimeout();
      }
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function() {
      var currentIndex = this.index;
      var timeoutState = {
        subscriber: this,
        index: currentIndex
      };
      this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
      this.index++;
      this._previousIndex = currentIndex;
    };
    TimeoutWithSubscriber.prototype._next = function(value) {
      this.destination.next(value);
      if (!this.absoluteTimeout) {
        this.scheduleTimeout();
      }
    };
    TimeoutWithSubscriber.prototype._error = function(err) {
      this.destination.error(err);
      this._hasCompleted = true;
    };
    TimeoutWithSubscriber.prototype._complete = function() {
      this.destination.complete();
      this._hasCompleted = true;
    };
    TimeoutWithSubscriber.prototype.handleTimeout = function() {
      if (!this.closed) {
        var withObservable = this.withObservable;
        this.unsubscribe();
        this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
      }
    };
    return TimeoutWithSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/timeoutWith.js", ["../../Observable", "../../operator/timeoutWith"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var timeoutWith_1 = $__require('../../operator/timeoutWith');
  Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/timestamp.js", ["../../Observable", "../../operator/timestamp"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var timestamp_1 = $__require('../../operator/timestamp');
  Observable_1.Observable.prototype.timestamp = timestamp_1.timestamp;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/toArray.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function toArray() {
    return this.lift(new ToArrayOperator());
  }
  exports.toArray = toArray;
  var ToArrayOperator = (function() {
    function ToArrayOperator() {}
    ToArrayOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ToArraySubscriber(subscriber));
    };
    return ToArrayOperator;
  }());
  var ToArraySubscriber = (function(_super) {
    __extends(ToArraySubscriber, _super);
    function ToArraySubscriber(destination) {
      _super.call(this, destination);
      this.array = [];
    }
    ToArraySubscriber.prototype._next = function(x) {
      this.array.push(x);
    };
    ToArraySubscriber.prototype._complete = function() {
      this.destination.next(this.array);
      this.destination.complete();
    };
    return ToArraySubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/toArray.js", ["../../Observable", "../../operator/toArray"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var toArray_1 = $__require('../../operator/toArray');
  Observable_1.Observable.prototype.toArray = toArray_1.toArray;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/toPromise.js", ["../util/root"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('../util/root');
  function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
      if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
        PromiseCtor = root_1.root.Rx.config.Promise;
      } else if (root_1.root.Promise) {
        PromiseCtor = root_1.root.Promise;
      }
    }
    if (!PromiseCtor) {
      throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  }
  exports.toPromise = toPromise;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/toPromise.js", ["../../Observable", "../../operator/toPromise"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var toPromise_1 = $__require('../../operator/toPromise');
  Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/window.js", ["../Subject", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('../Subject');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function window(windowBoundaries) {
    return this.lift(new WindowOperator(windowBoundaries));
  }
  exports.window = window;
  var WindowOperator = (function() {
    function WindowOperator(windowBoundaries) {
      this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function(subscriber, source) {
      var windowSubscriber = new WindowSubscriber(subscriber);
      var sourceSubscription = source._subscribe(windowSubscriber);
      if (!sourceSubscription.closed) {
        windowSubscriber.add(subscribeToResult_1.subscribeToResult(windowSubscriber, this.windowBoundaries));
      }
      return sourceSubscription;
    };
    return WindowOperator;
  }());
  var WindowSubscriber = (function(_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
      _super.call(this, destination);
      this.window = new Subject_1.Subject();
      destination.next(this.window);
    }
    WindowSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function(innerSub) {
      this._complete();
    };
    WindowSubscriber.prototype._next = function(value) {
      this.window.next(value);
    };
    WindowSubscriber.prototype._error = function(err) {
      this.window.error(err);
      this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function() {
      this.window.complete();
      this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function() {
      this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function() {
      var prevWindow = this.window;
      if (prevWindow) {
        prevWindow.complete();
      }
      var destination = this.destination;
      var newWindow = this.window = new Subject_1.Subject();
      destination.next(newWindow);
    };
    return WindowSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/window.js", ["../../Observable", "../../operator/window"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var window_1 = $__require('../../operator/window');
  Observable_1.Observable.prototype.window = window_1.window;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/windowCount.js", ["../Subscriber", "../Subject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var Subject_1 = $__require('../Subject');
  function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
      startWindowEvery = 0;
    }
    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
  }
  exports.windowCount = windowCount;
  var WindowCountOperator = (function() {
    function WindowCountOperator(windowSize, startWindowEvery) {
      this.windowSize = windowSize;
      this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
  }());
  var WindowCountSubscriber = (function(_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
      _super.call(this, destination);
      this.destination = destination;
      this.windowSize = windowSize;
      this.startWindowEvery = startWindowEvery;
      this.windows = [new Subject_1.Subject()];
      this.count = 0;
      destination.next(this.windows[0]);
    }
    WindowCountSubscriber.prototype._next = function(value) {
      var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
      var destination = this.destination;
      var windowSize = this.windowSize;
      var windows = this.windows;
      var len = windows.length;
      for (var i = 0; i < len && !this.closed; i++) {
        windows[i].next(value);
      }
      var c = this.count - windowSize + 1;
      if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
        windows.shift().complete();
      }
      if (++this.count % startWindowEvery === 0 && !this.closed) {
        var window_1 = new Subject_1.Subject();
        windows.push(window_1);
        destination.next(window_1);
      }
    };
    WindowCountSubscriber.prototype._error = function(err) {
      var windows = this.windows;
      if (windows) {
        while (windows.length > 0 && !this.closed) {
          windows.shift().error(err);
        }
      }
      this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function() {
      var windows = this.windows;
      if (windows) {
        while (windows.length > 0 && !this.closed) {
          windows.shift().complete();
        }
      }
      this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function() {
      this.count = 0;
      this.windows = null;
    };
    return WindowCountSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/windowCount.js", ["../../Observable", "../../operator/windowCount"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var windowCount_1 = $__require('../../operator/windowCount');
  Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/windowTime.js", ["../Subject", "../scheduler/async", "../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('../Subject');
  var async_1 = $__require('../scheduler/async');
  var Subscriber_1 = $__require('../Subscriber');
  function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
    if (windowCreationInterval === void 0) {
      windowCreationInterval = null;
    }
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
  }
  exports.windowTime = windowTime;
  var WindowTimeOperator = (function() {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
      this.windowTimeSpan = windowTimeSpan;
      this.windowCreationInterval = windowCreationInterval;
      this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler));
    };
    return WindowTimeOperator;
  }());
  var WindowTimeSubscriber = (function(_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
      _super.call(this, destination);
      this.destination = destination;
      this.windowTimeSpan = windowTimeSpan;
      this.windowCreationInterval = windowCreationInterval;
      this.scheduler = scheduler;
      this.windows = [];
      if (windowCreationInterval !== null && windowCreationInterval >= 0) {
        var window_1 = this.openWindow();
        var closeState = {
          subscriber: this,
          window: window_1,
          context: null
        };
        var creationState = {
          windowTimeSpan: windowTimeSpan,
          windowCreationInterval: windowCreationInterval,
          subscriber: this,
          scheduler: scheduler
        };
        this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
        this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
      } else {
        var window_2 = this.openWindow();
        var timeSpanOnlyState = {
          subscriber: this,
          window: window_2,
          windowTimeSpan: windowTimeSpan
        };
        this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
      }
    }
    WindowTimeSubscriber.prototype._next = function(value) {
      var windows = this.windows;
      var len = windows.length;
      for (var i = 0; i < len; i++) {
        var window_3 = windows[i];
        if (!window_3.closed) {
          window_3.next(value);
        }
      }
    };
    WindowTimeSubscriber.prototype._error = function(err) {
      var windows = this.windows;
      while (windows.length > 0) {
        windows.shift().error(err);
      }
      this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function() {
      var windows = this.windows;
      while (windows.length > 0) {
        var window_4 = windows.shift();
        if (!window_4.closed) {
          window_4.complete();
        }
      }
      this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function() {
      var window = new Subject_1.Subject();
      this.windows.push(window);
      var destination = this.destination;
      destination.next(window);
      return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function(window) {
      window.complete();
      var windows = this.windows;
      windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber,
        windowTimeSpan = state.windowTimeSpan,
        window = state.window;
    if (window) {
      window.complete();
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
  }
  function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan,
        subscriber = state.subscriber,
        scheduler = state.scheduler,
        windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = {
      action: action,
      subscription: null
    };
    var timeSpanState = {
      subscriber: subscriber,
      window: window,
      context: context
    };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
  }
  function dispatchWindowClose(arg) {
    var subscriber = arg.subscriber,
        window = arg.window,
        context = arg.context;
    if (context && context.action && context.subscription) {
      context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/windowTime.js", ["../../Observable", "../../operator/windowTime"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var windowTime_1 = $__require('../../operator/windowTime');
  Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/windowToggle.js", ["../Subject", "../Subscription", "../util/tryCatch", "../util/errorObject", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('../Subject');
  var Subscription_1 = $__require('../Subscription');
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function windowToggle(openings, closingSelector) {
    return this.lift(new WindowToggleOperator(openings, closingSelector));
  }
  exports.windowToggle = windowToggle;
  var WindowToggleOperator = (function() {
    function WindowToggleOperator(openings, closingSelector) {
      this.openings = openings;
      this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
  }());
  var WindowToggleSubscriber = (function(_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
      _super.call(this, destination);
      this.openings = openings;
      this.closingSelector = closingSelector;
      this.contexts = [];
      this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
    }
    WindowToggleSubscriber.prototype._next = function(value) {
      var contexts = this.contexts;
      if (contexts) {
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
          contexts[i].window.next(value);
        }
      }
    };
    WindowToggleSubscriber.prototype._error = function(err) {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.error(err);
          context.subscription.unsubscribe();
        }
      }
      _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function() {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.complete();
          context.subscription.unsubscribe();
        }
      }
      _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function() {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.unsubscribe();
          context.subscription.unsubscribe();
        }
      }
    };
    WindowToggleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (outerValue === this.openings) {
        var closingSelector = this.closingSelector;
        var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
        if (closingNotifier === errorObject_1.errorObject) {
          return this.error(errorObject_1.errorObject.e);
        } else {
          var window_1 = new Subject_1.Subject();
          var subscription = new Subscription_1.Subscription();
          var context = {
            window: window_1,
            subscription: subscription
          };
          this.contexts.push(context);
          var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
          if (innerSubscription.closed) {
            this.closeWindow(this.contexts.length - 1);
          } else {
            innerSubscription.context = context;
            subscription.add(innerSubscription);
          }
          this.destination.next(window_1);
        }
      } else {
        this.closeWindow(this.contexts.indexOf(outerValue));
      }
    };
    WindowToggleSubscriber.prototype.notifyError = function(err) {
      this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function(inner) {
      if (inner !== this.openSubscription) {
        this.closeWindow(this.contexts.indexOf(inner.context));
      }
    };
    WindowToggleSubscriber.prototype.closeWindow = function(index) {
      if (index === -1) {
        return;
      }
      var contexts = this.contexts;
      var context = contexts[index];
      var window = context.window,
          subscription = context.subscription;
      contexts.splice(index, 1);
      window.complete();
      subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/windowToggle.js", ["../../Observable", "../../operator/windowToggle"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var windowToggle_1 = $__require('../../operator/windowToggle');
  Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/windowWhen.js", ["../Subject", "../util/tryCatch", "../util/errorObject", "../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('../Subject');
  var tryCatch_1 = $__require('../util/tryCatch');
  var errorObject_1 = $__require('../util/errorObject');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function windowWhen(closingSelector) {
    return this.lift(new WindowOperator(closingSelector));
  }
  exports.windowWhen = windowWhen;
  var WindowOperator = (function() {
    function WindowOperator(closingSelector) {
      this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
  }());
  var WindowSubscriber = (function(_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
      _super.call(this, destination);
      this.destination = destination;
      this.closingSelector = closingSelector;
      this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function(innerSub) {
      this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function(value) {
      this.window.next(value);
    };
    WindowSubscriber.prototype._error = function(err) {
      this.window.error(err);
      this.destination.error(err);
      this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function() {
      this.window.complete();
      this.destination.complete();
      this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function() {
      if (this.closingNotification) {
        this.closingNotification.unsubscribe();
      }
    };
    WindowSubscriber.prototype.openWindow = function(innerSub) {
      if (innerSub === void 0) {
        innerSub = null;
      }
      if (innerSub) {
        this.remove(innerSub);
        innerSub.unsubscribe();
      }
      var prevWindow = this.window;
      if (prevWindow) {
        prevWindow.complete();
      }
      var window = this.window = new Subject_1.Subject();
      this.destination.next(window);
      var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
      if (closingNotifier === errorObject_1.errorObject) {
        var err = errorObject_1.errorObject.e;
        this.destination.error(err);
        this.window.error(err);
      } else {
        this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
      }
    };
    return WindowSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/windowWhen.js", ["../../Observable", "../../operator/windowWhen"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var windowWhen_1 = $__require('../../operator/windowWhen');
  Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/withLatestFrom.js", ["../OuterSubscriber", "../util/subscribeToResult"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i - 0] = arguments[_i];
    }
    var project;
    if (typeof args[args.length - 1] === 'function') {
      project = args.pop();
    }
    var observables = args;
    return this.lift(new WithLatestFromOperator(observables, project));
  }
  exports.withLatestFrom = withLatestFrom;
  var WithLatestFromOperator = (function() {
    function WithLatestFromOperator(observables, project) {
      this.observables = observables;
      this.project = project;
    }
    WithLatestFromOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
  }());
  var WithLatestFromSubscriber = (function(_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
      _super.call(this, destination);
      this.observables = observables;
      this.project = project;
      this.toRespond = [];
      var len = observables.length;
      this.values = new Array(len);
      for (var i = 0; i < len; i++) {
        this.toRespond.push(i);
      }
      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
      }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.values[outerIndex] = innerValue;
      var toRespond = this.toRespond;
      if (toRespond.length > 0) {
        var found = toRespond.indexOf(outerIndex);
        if (found !== -1) {
          toRespond.splice(found, 1);
        }
      }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function() {};
    WithLatestFromSubscriber.prototype._next = function(value) {
      if (this.toRespond.length === 0) {
        var args = [value].concat(this.values);
        if (this.project) {
          this._tryProject(args);
        } else {
          this.destination.next(args);
        }
      }
    };
    WithLatestFromSubscriber.prototype._tryProject = function(args) {
      var result;
      try {
        result = this.project.apply(this, args);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return WithLatestFromSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/withLatestFrom.js", ["../../Observable", "../../operator/withLatestFrom"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var withLatestFrom_1 = $__require('../../operator/withLatestFrom');
  Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/zip.js", ["../../Observable", "../../operator/zip"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var zip_1 = $__require('../../operator/zip');
  Observable_1.Observable.prototype.zip = zip_1.zipProto;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/ScalarObservable.js", ["../Observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var ScalarObservable = (function(_super) {
    __extends(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
      _super.call(this);
      this.value = value;
      this.scheduler = scheduler;
      this._isScalar = true;
      if (scheduler) {
        this._isScalar = false;
      }
    }
    ScalarObservable.create = function(value, scheduler) {
      return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function(state) {
      var done = state.done,
          value = state.value,
          subscriber = state.subscriber;
      if (done) {
        subscriber.complete();
        return;
      }
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
      state.done = true;
      this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function(subscriber) {
      var value = this.value;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ScalarObservable.dispatch, 0, {
          done: false,
          value: value,
          subscriber: subscriber
        });
      } else {
        subscriber.next(value);
        if (!subscriber.closed) {
          subscriber.complete();
        }
      }
    };
    return ScalarObservable;
  }(Observable_1.Observable));
  exports.ScalarObservable = ScalarObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/EmptyObservable.js", ["../Observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var EmptyObservable = (function(_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
      _super.call(this);
      this.scheduler = scheduler;
    }
    EmptyObservable.create = function(scheduler) {
      return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function(arg) {
      var subscriber = arg.subscriber;
      subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function(subscriber) {
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(EmptyObservable.dispatch, 0, {subscriber: subscriber});
      } else {
        subscriber.complete();
      }
    };
    return EmptyObservable;
  }(Observable_1.Observable));
  exports.EmptyObservable = EmptyObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/isScheduler.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isScheduler(value) {
    return value && typeof value.schedule === 'function';
  }
  exports.isScheduler = isScheduler;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/ArrayObservable.js", ["../Observable", "./ScalarObservable", "./EmptyObservable", "../util/isScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var ScalarObservable_1 = $__require('./ScalarObservable');
  var EmptyObservable_1 = $__require('./EmptyObservable');
  var isScheduler_1 = $__require('../util/isScheduler');
  var ArrayObservable = (function(_super) {
    __extends(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
      _super.call(this);
      this.array = array;
      this.scheduler = scheduler;
      if (!scheduler && array.length === 1) {
        this._isScalar = true;
        this.value = array[0];
      }
    }
    ArrayObservable.create = function(array, scheduler) {
      return new ArrayObservable(array, scheduler);
    };
    ArrayObservable.of = function() {
      var array = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
      }
      var scheduler = array[array.length - 1];
      if (isScheduler_1.isScheduler(scheduler)) {
        array.pop();
      } else {
        scheduler = null;
      }
      var len = array.length;
      if (len > 1) {
        return new ArrayObservable(array, scheduler);
      } else if (len === 1) {
        return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
      } else {
        return new EmptyObservable_1.EmptyObservable(scheduler);
      }
    };
    ArrayObservable.dispatch = function(state) {
      var array = state.array,
          index = state.index,
          count = state.count,
          subscriber = state.subscriber;
      if (index >= count) {
        subscriber.complete();
        return;
      }
      subscriber.next(array[index]);
      if (subscriber.closed) {
        return;
      }
      state.index = index + 1;
      this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var array = this.array;
      var count = array.length;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ArrayObservable.dispatch, 0, {
          array: array,
          index: index,
          count: count,
          subscriber: subscriber
        });
      } else {
        for (var i = 0; i < count && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      }
    };
    return ArrayObservable;
  }(Observable_1.Observable));
  exports.ArrayObservable = ArrayObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/OuterSubscriber.js", ["./Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('./Subscriber');
  var OuterSubscriber = (function(_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
      _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function(error, innerSub) {
      this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function(innerSub) {
      this.destination.complete();
    };
    return OuterSubscriber;
  }(Subscriber_1.Subscriber));
  exports.OuterSubscriber = OuterSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/isPromise.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
  }
  exports.isPromise = isPromise;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/InnerSubscriber.js", ["./Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('./Subscriber');
  var InnerSubscriber = (function(_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
      _super.call(this);
      this.parent = parent;
      this.outerValue = outerValue;
      this.outerIndex = outerIndex;
      this.index = 0;
    }
    InnerSubscriber.prototype._next = function(value) {
      this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function(error) {
      this.parent.notifyError(error, this);
      this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function() {
      this.parent.notifyComplete(this);
      this.unsubscribe();
    };
    return InnerSubscriber;
  }(Subscriber_1.Subscriber));
  exports.InnerSubscriber = InnerSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/subscribeToResult.js", ["./root", "./isArray", "./isPromise", "../Observable", "../symbol/iterator", "../InnerSubscriber", "../symbol/observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('./root');
  var isArray_1 = $__require('./isArray');
  var isPromise_1 = $__require('./isPromise');
  var Observable_1 = $__require('../Observable');
  var iterator_1 = $__require('../symbol/iterator');
  var InnerSubscriber_1 = $__require('../InnerSubscriber');
  var observable_1 = $__require('../symbol/observable');
  function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.closed) {
      return null;
    }
    if (result instanceof Observable_1.Observable) {
      if (result._isScalar) {
        destination.next(result.value);
        destination.complete();
        return null;
      } else {
        return result.subscribe(destination);
      }
    }
    if (isArray_1.isArray(result)) {
      for (var i = 0,
          len = result.length; i < len && !destination.closed; i++) {
        destination.next(result[i]);
      }
      if (!destination.closed) {
        destination.complete();
      }
    } else if (isPromise_1.isPromise(result)) {
      result.then(function(value) {
        if (!destination.closed) {
          destination.next(value);
          destination.complete();
        }
      }, function(err) {
        return destination.error(err);
      }).then(null, function(err) {
        root_1.root.setTimeout(function() {
          throw err;
        });
      });
      return destination;
    } else if (typeof result[iterator_1.$$iterator] === 'function') {
      var iterator = result[iterator_1.$$iterator]();
      do {
        var item = iterator.next();
        if (item.done) {
          destination.complete();
          break;
        }
        destination.next(item.value);
        if (destination.closed) {
          break;
        }
      } while (true);
    } else if (typeof result[observable_1.$$observable] === 'function') {
      var obs = result[observable_1.$$observable]();
      if (typeof obs.subscribe !== 'function') {
        destination.error(new Error('invalid observable'));
      } else {
        return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
      }
    } else {
      destination.error(new TypeError('unknown type returned'));
    }
    return null;
  }
  exports.subscribeToResult = subscribeToResult;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/zip.js", ["../observable/ArrayObservable", "../util/isArray", "../Subscriber", "../OuterSubscriber", "../util/subscribeToResult", "../symbol/iterator"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArrayObservable_1 = $__require('../observable/ArrayObservable');
  var isArray_1 = $__require('../util/isArray');
  var Subscriber_1 = $__require('../Subscriber');
  var OuterSubscriber_1 = $__require('../OuterSubscriber');
  var subscribeToResult_1 = $__require('../util/subscribeToResult');
  var iterator_1 = $__require('../symbol/iterator');
  function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    observables.unshift(this);
    return zipStatic.apply(this, observables);
  }
  exports.zipProto = zipProto;
  function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
      observables.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
  }
  exports.zipStatic = zipStatic;
  var ZipOperator = (function() {
    function ZipOperator(project) {
      this.project = project;
    }
    ZipOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ZipSubscriber(subscriber, this.project));
    };
    return ZipOperator;
  }());
  exports.ZipOperator = ZipOperator;
  var ZipSubscriber = (function(_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
      if (values === void 0) {
        values = Object.create(null);
      }
      _super.call(this, destination);
      this.index = 0;
      this.iterators = [];
      this.active = 0;
      this.project = (typeof project === 'function') ? project : null;
      this.values = values;
    }
    ZipSubscriber.prototype._next = function(value) {
      var iterators = this.iterators;
      var index = this.index++;
      if (isArray_1.isArray(value)) {
        iterators.push(new StaticArrayIterator(value));
      } else if (typeof value[iterator_1.$$iterator] === 'function') {
        iterators.push(new StaticIterator(value[iterator_1.$$iterator]()));
      } else {
        iterators.push(new ZipBufferIterator(this.destination, this, value, index));
      }
    };
    ZipSubscriber.prototype._complete = function() {
      var iterators = this.iterators;
      var len = iterators.length;
      this.active = len;
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        if (iterator.stillUnsubscribed) {
          this.add(iterator.subscribe(iterator, i));
        } else {
          this.active--;
        }
      }
    };
    ZipSubscriber.prototype.notifyInactive = function() {
      this.active--;
      if (this.active === 0) {
        this.destination.complete();
      }
    };
    ZipSubscriber.prototype.checkIterators = function() {
      var iterators = this.iterators;
      var len = iterators.length;
      var destination = this.destination;
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
          return;
        }
      }
      var shouldComplete = false;
      var args = [];
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        var result = iterator.next();
        if (iterator.hasCompleted()) {
          shouldComplete = true;
        }
        if (result.done) {
          destination.complete();
          return;
        }
        args.push(result.value);
      }
      if (this.project) {
        this._tryProject(args);
      } else {
        destination.next(args);
      }
      if (shouldComplete) {
        destination.complete();
      }
    };
    ZipSubscriber.prototype._tryProject = function(args) {
      var result;
      try {
        result = this.project.apply(this, args);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return ZipSubscriber;
  }(Subscriber_1.Subscriber));
  exports.ZipSubscriber = ZipSubscriber;
  var StaticIterator = (function() {
    function StaticIterator(iterator) {
      this.iterator = iterator;
      this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function() {
      return true;
    };
    StaticIterator.prototype.next = function() {
      var result = this.nextResult;
      this.nextResult = this.iterator.next();
      return result;
    };
    StaticIterator.prototype.hasCompleted = function() {
      var nextResult = this.nextResult;
      return nextResult && nextResult.done;
    };
    return StaticIterator;
  }());
  var StaticArrayIterator = (function() {
    function StaticArrayIterator(array) {
      this.array = array;
      this.index = 0;
      this.length = 0;
      this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.$$iterator] = function() {
      return this;
    };
    StaticArrayIterator.prototype.next = function(value) {
      var i = this.index++;
      var array = this.array;
      return i < this.length ? {
        value: array[i],
        done: false
      } : {
        value: null,
        done: true
      };
    };
    StaticArrayIterator.prototype.hasValue = function() {
      return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function() {
      return this.array.length === this.index;
    };
    return StaticArrayIterator;
  }());
  var ZipBufferIterator = (function(_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable, index) {
      _super.call(this, destination);
      this.parent = parent;
      this.observable = observable;
      this.index = index;
      this.stillUnsubscribed = true;
      this.buffer = [];
      this.isComplete = false;
    }
    ZipBufferIterator.prototype[iterator_1.$$iterator] = function() {
      return this;
    };
    ZipBufferIterator.prototype.next = function() {
      var buffer = this.buffer;
      if (buffer.length === 0 && this.isComplete) {
        return {
          value: null,
          done: true
        };
      } else {
        return {
          value: buffer.shift(),
          done: false
        };
      }
    };
    ZipBufferIterator.prototype.hasValue = function() {
      return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function() {
      return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function() {
      if (this.buffer.length > 0) {
        this.isComplete = true;
        this.parent.notifyInactive();
      } else {
        this.destination.complete();
      }
    };
    ZipBufferIterator.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.buffer.push(innerValue);
      this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function(value, index) {
      return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
  }(OuterSubscriber_1.OuterSubscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/zipAll.js", ["./zip"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var zip_1 = $__require('./zip');
  function zipAll(project) {
    return this.lift(new zip_1.ZipOperator(project));
  }
  exports.zipAll = zipAll;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/add/operator/zipAll.js", ["../../Observable", "../../operator/zipAll"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('../../Observable');
  var zipAll_1 = $__require('../../operator/zipAll');
  Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/AsyncSubject.js", ["./Subject", "./Subscription"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('./Subject');
  var Subscription_1 = $__require('./Subscription');
  var AsyncSubject = (function(_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
      _super.apply(this, arguments);
      this.value = null;
      this.hasNext = false;
      this.hasCompleted = false;
    }
    AsyncSubject.prototype._subscribe = function(subscriber) {
      if (this.hasCompleted && this.hasNext) {
        subscriber.next(this.value);
        subscriber.complete();
        return Subscription_1.Subscription.EMPTY;
      } else if (this.hasError) {
        subscriber.error(this.thrownError);
        return Subscription_1.Subscription.EMPTY;
      }
      return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function(value) {
      if (!this.hasCompleted) {
        this.value = value;
        this.hasNext = true;
      }
    };
    AsyncSubject.prototype.complete = function() {
      this.hasCompleted = true;
      if (this.hasNext) {
        _super.prototype.next.call(this, this.value);
      }
      _super.prototype.complete.call(this);
    };
    return AsyncSubject;
  }(Subject_1.Subject));
  exports.AsyncSubject = AsyncSubject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/observeOn.js", ["../Subscriber", "../Notification"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var Notification_1 = $__require('../Notification');
  function observeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return this.lift(new ObserveOnOperator(scheduler, delay));
  }
  exports.observeOn = observeOn;
  var ObserveOnOperator = (function() {
    function ObserveOnOperator(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      this.scheduler = scheduler;
      this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
  }());
  exports.ObserveOnOperator = ObserveOnOperator;
  var ObserveOnSubscriber = (function(_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      _super.call(this, destination);
      this.scheduler = scheduler;
      this.delay = delay;
    }
    ObserveOnSubscriber.dispatch = function(arg) {
      var notification = arg.notification,
          destination = arg.destination;
      notification.observe(destination);
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function(notification) {
      this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function(value) {
      this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function(err) {
      this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function() {
      this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
  }(Subscriber_1.Subscriber));
  exports.ObserveOnSubscriber = ObserveOnSubscriber;
  var ObserveOnMessage = (function() {
    function ObserveOnMessage(notification, destination) {
      this.notification = notification;
      this.destination = destination;
    }
    return ObserveOnMessage;
  }());
  exports.ObserveOnMessage = ObserveOnMessage;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/ReplaySubject.js", ["./Subject", "./scheduler/queue", "./operator/observeOn"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('./Subject');
  var queue_1 = $__require('./scheduler/queue');
  var observeOn_1 = $__require('./operator/observeOn');
  var ReplaySubject = (function(_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
      if (bufferSize === void 0) {
        bufferSize = Number.POSITIVE_INFINITY;
      }
      if (windowTime === void 0) {
        windowTime = Number.POSITIVE_INFINITY;
      }
      _super.call(this);
      this.scheduler = scheduler;
      this._events = [];
      this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
      this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function(value) {
      var now = this._getNow();
      this._events.push(new ReplayEvent(now, value));
      this._trimBufferThenGetEvents();
      _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function(subscriber) {
      var _events = this._trimBufferThenGetEvents();
      var scheduler = this.scheduler;
      if (scheduler) {
        subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
      }
      var len = _events.length;
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
      return _super.prototype._subscribe.call(this, subscriber);
    };
    ReplaySubject.prototype._getNow = function() {
      return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function() {
      var now = this._getNow();
      var _bufferSize = this._bufferSize;
      var _windowTime = this._windowTime;
      var _events = this._events;
      var eventsCount = _events.length;
      var spliceCount = 0;
      while (spliceCount < eventsCount) {
        if ((now - _events[spliceCount].time) < _windowTime) {
          break;
        }
        spliceCount++;
      }
      if (eventsCount > _bufferSize) {
        spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
      }
      if (spliceCount > 0) {
        _events.splice(0, spliceCount);
      }
      return _events;
    };
    return ReplaySubject;
  }(Subject_1.Subject));
  exports.ReplaySubject = ReplaySubject;
  var ReplayEvent = (function() {
    function ReplayEvent(time, value) {
      this.time = time;
      this.value = value;
    }
    return ReplayEvent;
  }());
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/BehaviorSubject.js", ["./Subject", "./util/ObjectUnsubscribedError"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('./Subject');
  var ObjectUnsubscribedError_1 = $__require('./util/ObjectUnsubscribedError');
  var BehaviorSubject = (function(_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
      _super.call(this);
      this._value = _value;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
      get: function() {
        return this.getValue();
      },
      enumerable: true,
      configurable: true
    });
    BehaviorSubject.prototype._subscribe = function(subscriber) {
      var subscription = _super.prototype._subscribe.call(this, subscriber);
      if (subscription && !subscription.closed) {
        subscriber.next(this._value);
      }
      return subscription;
    };
    BehaviorSubject.prototype.getValue = function() {
      if (this.hasError) {
        throw this.thrownError;
      } else if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      } else {
        return this._value;
      }
    };
    BehaviorSubject.prototype.next = function(value) {
      _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
  }(Subject_1.Subject));
  exports.BehaviorSubject = BehaviorSubject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/MulticastObservable.js", ["../Observable", "../observable/ConnectableObservable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var ConnectableObservable_1 = $__require('../observable/ConnectableObservable');
  var MulticastObservable = (function(_super) {
    __extends(MulticastObservable, _super);
    function MulticastObservable(source, subjectFactory, selector) {
      _super.call(this);
      this.source = source;
      this.subjectFactory = subjectFactory;
      this.selector = selector;
    }
    MulticastObservable.prototype._subscribe = function(subscriber) {
      var _a = this,
          selector = _a.selector,
          source = _a.source;
      var connectable = new ConnectableObservable_1.ConnectableObservable(source, this.subjectFactory);
      var subscription = selector(connectable).subscribe(subscriber);
      subscription.add(connectable.connect());
      return subscription;
    };
    return MulticastObservable;
  }(Observable_1.Observable));
  exports.MulticastObservable = MulticastObservable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/ConnectableObservable.js", ["../Subject", "../Observable", "../Subscriber", "../Subscription"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('../Subject');
  var Observable_1 = $__require('../Observable');
  var Subscriber_1 = $__require('../Subscriber');
  var Subscription_1 = $__require('../Subscription');
  var ConnectableObservable = (function(_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
      _super.call(this);
      this.source = source;
      this.subjectFactory = subjectFactory;
      this._refCount = 0;
    }
    ConnectableObservable.prototype._subscribe = function(subscriber) {
      return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function() {
      var subject = this._subject;
      if (!subject || subject.isStopped) {
        this._subject = this.subjectFactory();
      }
      return this._subject;
    };
    ConnectableObservable.prototype.connect = function() {
      var connection = this._connection;
      if (!connection) {
        connection = this._connection = new Subscription_1.Subscription();
        connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));
        if (connection.closed) {
          this._connection = null;
          connection = Subscription_1.Subscription.EMPTY;
        } else {
          this._connection = connection;
        }
      }
      return connection;
    };
    ConnectableObservable.prototype.refCount = function() {
      return this.lift(new RefCountOperator(this));
    };
    return ConnectableObservable;
  }(Observable_1.Observable));
  exports.ConnectableObservable = ConnectableObservable;
  var ConnectableSubscriber = (function(_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
      _super.call(this, destination);
      this.connectable = connectable;
    }
    ConnectableSubscriber.prototype._error = function(err) {
      this._unsubscribe();
      _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function() {
      this._unsubscribe();
      _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function() {
      var connectable = this.connectable;
      if (connectable) {
        this.connectable = null;
        var connection = connectable._connection;
        connectable._refCount = 0;
        connectable._subject = null;
        connectable._connection = null;
        if (connection) {
          connection.unsubscribe();
        }
      }
    };
    return ConnectableSubscriber;
  }(Subject_1.SubjectSubscriber));
  var RefCountOperator = (function() {
    function RefCountOperator(connectable) {
      this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function(subscriber, source) {
      var connectable = this.connectable;
      connectable._refCount++;
      var refCounter = new RefCountSubscriber(subscriber, connectable);
      var subscription = source._subscribe(refCounter);
      if (!refCounter.closed) {
        refCounter.connection = connectable.connect();
      }
      return subscription;
    };
    return RefCountOperator;
  }());
  var RefCountSubscriber = (function(_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
      _super.call(this, destination);
      this.connectable = connectable;
    }
    RefCountSubscriber.prototype._unsubscribe = function() {
      var connectable = this.connectable;
      if (!connectable) {
        this.connection = null;
        return;
      }
      this.connectable = null;
      var refCount = connectable._refCount;
      if (refCount <= 0) {
        this.connection = null;
        return;
      }
      connectable._refCount = refCount - 1;
      if (refCount > 1) {
        this.connection = null;
        return;
      }
      var connection = this.connection;
      var sharedConnection = connectable._connection;
      this.connection = null;
      if (sharedConnection && (!connection || sharedConnection === connection)) {
        sharedConnection.unsubscribe();
      }
    };
    return RefCountSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/EmptyError.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var EmptyError = (function(_super) {
    __extends(EmptyError, _super);
    function EmptyError() {
      var err = _super.call(this, 'no elements in sequence');
      this.name = err.name = 'EmptyError';
      this.stack = err.stack;
      this.message = err.message;
    }
    return EmptyError;
  }(Error));
  exports.EmptyError = EmptyError;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/ArgumentOutOfRangeError.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArgumentOutOfRangeError = (function(_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
      var err = _super.call(this, 'argument out of range');
      this.name = err.name = 'ArgumentOutOfRangeError';
      this.stack = err.stack;
      this.message = err.message;
    }
    return ArgumentOutOfRangeError;
  }(Error));
  exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/timeInterval.js", ["../Subscriber", "../scheduler/async"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var async_1 = $__require('../scheduler/async');
  function timeInterval(scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new TimeIntervalOperator(scheduler));
  }
  exports.timeInterval = timeInterval;
  var TimeInterval = (function() {
    function TimeInterval(value, interval) {
      this.value = value;
      this.interval = interval;
    }
    return TimeInterval;
  }());
  exports.TimeInterval = TimeInterval;
  ;
  var TimeIntervalOperator = (function() {
    function TimeIntervalOperator(scheduler) {
      this.scheduler = scheduler;
    }
    TimeIntervalOperator.prototype.call = function(observer, source) {
      return source._subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
    };
    return TimeIntervalOperator;
  }());
  var TimeIntervalSubscriber = (function(_super) {
    __extends(TimeIntervalSubscriber, _super);
    function TimeIntervalSubscriber(destination, scheduler) {
      _super.call(this, destination);
      this.scheduler = scheduler;
      this.lastTime = 0;
      this.lastTime = scheduler.now();
    }
    TimeIntervalSubscriber.prototype._next = function(value) {
      var now = this.scheduler.now();
      var span = now - this.lastTime;
      this.lastTime = now;
      this.destination.next(new TimeInterval(value, span));
    };
    return TimeIntervalSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/timestamp.js", ["../Subscriber", "../scheduler/async"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  var async_1 = $__require('../scheduler/async');
  function timestamp(scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new TimestampOperator(scheduler));
  }
  exports.timestamp = timestamp;
  var Timestamp = (function() {
    function Timestamp(value, timestamp) {
      this.value = value;
      this.timestamp = timestamp;
    }
    return Timestamp;
  }());
  exports.Timestamp = Timestamp;
  ;
  var TimestampOperator = (function() {
    function TimestampOperator(scheduler) {
      this.scheduler = scheduler;
    }
    TimestampOperator.prototype.call = function(observer, source) {
      return source._subscribe(new TimestampSubscriber(observer, this.scheduler));
    };
    return TimestampOperator;
  }());
  var TimestampSubscriber = (function(_super) {
    __extends(TimestampSubscriber, _super);
    function TimestampSubscriber(destination, scheduler) {
      _super.call(this, destination);
      this.scheduler = scheduler;
    }
    TimestampSubscriber.prototype._next = function(value) {
      var now = this.scheduler.now();
      this.destination.next(new Timestamp(value, now));
    };
    return TimestampSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/Notification.js", ["./Observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Observable_1 = $__require('./Observable');
  var Notification = (function() {
    function Notification(kind, value, exception) {
      this.kind = kind;
      this.value = value;
      this.exception = exception;
      this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function(observer) {
      switch (this.kind) {
        case 'N':
          return observer.next && observer.next(this.value);
        case 'E':
          return observer.error && observer.error(this.exception);
        case 'C':
          return observer.complete && observer.complete();
      }
    };
    Notification.prototype.do = function(next, error, complete) {
      var kind = this.kind;
      switch (kind) {
        case 'N':
          return next && next(this.value);
        case 'E':
          return error && error(this.exception);
        case 'C':
          return complete && complete();
      }
    };
    Notification.prototype.accept = function(nextOrObserver, error, complete) {
      if (nextOrObserver && typeof nextOrObserver.next === 'function') {
        return this.observe(nextOrObserver);
      } else {
        return this.do(nextOrObserver, error, complete);
      }
    };
    Notification.prototype.toObservable = function() {
      var kind = this.kind;
      switch (kind) {
        case 'N':
          return Observable_1.Observable.of(this.value);
        case 'E':
          return Observable_1.Observable.throw(this.exception);
        case 'C':
          return Observable_1.Observable.empty();
      }
      throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function(value) {
      if (typeof value !== 'undefined') {
        return new Notification('N', value);
      }
      return this.undefinedValueNotification;
    };
    Notification.createError = function(err) {
      return new Notification('E', undefined, err);
    };
    Notification.createComplete = function() {
      return this.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
  }());
  exports.Notification = Notification;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/testing/ColdObservable.js", ["../Observable", "../Subscription", "./SubscriptionLoggable", "../util/applyMixins"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var Subscription_1 = $__require('../Subscription');
  var SubscriptionLoggable_1 = $__require('./SubscriptionLoggable');
  var applyMixins_1 = $__require('../util/applyMixins');
  var ColdObservable = (function(_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
      _super.call(this, function(subscriber) {
        var observable = this;
        var index = observable.logSubscribedFrame();
        subscriber.add(new Subscription_1.Subscription(function() {
          observable.logUnsubscribedFrame(index);
        }));
        observable.scheduleMessages(subscriber);
        return subscriber;
      });
      this.messages = messages;
      this.subscriptions = [];
      this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function(subscriber) {
      var messagesLength = this.messages.length;
      for (var i = 0; i < messagesLength; i++) {
        var message = this.messages[i];
        subscriber.add(this.scheduler.schedule(function(_a) {
          var message = _a.message,
              subscriber = _a.subscriber;
          message.notification.observe(subscriber);
        }, message.frame, {
          message: message,
          subscriber: subscriber
        }));
      }
    };
    return ColdObservable;
  }(Observable_1.Observable));
  exports.ColdObservable = ColdObservable;
  applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/ObjectUnsubscribedError.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ObjectUnsubscribedError = (function(_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
      var err = _super.call(this, 'object unsubscribed');
      this.name = err.name = 'ObjectUnsubscribedError';
      this.stack = err.stack;
      this.message = err.message;
    }
    return ObjectUnsubscribedError;
  }(Error));
  exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/SubjectSubscription.js", ["./Subscription"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = $__require('./Subscription');
  var SubjectSubscription = (function(_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
      _super.call(this);
      this.subject = subject;
      this.subscriber = subscriber;
      this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function() {
      if (this.closed) {
        return;
      }
      this.closed = true;
      var subject = this.subject;
      var observers = subject.observers;
      this.subject = null;
      if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
        return;
      }
      var subscriberIndex = observers.indexOf(this.subscriber);
      if (subscriberIndex !== -1) {
        observers.splice(subscriberIndex, 1);
      }
    };
    return SubjectSubscription;
  }(Subscription_1.Subscription));
  exports.SubjectSubscription = SubjectSubscription;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/Subject.js", ["./Observable", "./Subscriber", "./Subscription", "./util/ObjectUnsubscribedError", "./SubjectSubscription", "./symbol/rxSubscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('./Observable');
  var Subscriber_1 = $__require('./Subscriber');
  var Subscription_1 = $__require('./Subscription');
  var ObjectUnsubscribedError_1 = $__require('./util/ObjectUnsubscribedError');
  var SubjectSubscription_1 = $__require('./SubjectSubscription');
  var rxSubscriber_1 = $__require('./symbol/rxSubscriber');
  var SubjectSubscriber = (function(_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
      _super.call(this, destination);
      this.destination = destination;
    }
    return SubjectSubscriber;
  }(Subscriber_1.Subscriber));
  exports.SubjectSubscriber = SubjectSubscriber;
  var Subject = (function(_super) {
    __extends(Subject, _super);
    function Subject() {
      _super.call(this);
      this.observers = [];
      this.closed = false;
      this.isStopped = false;
      this.hasError = false;
      this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function() {
      return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function(operator) {
      var subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    };
    Subject.prototype.next = function(value) {
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      }
      if (!this.isStopped) {
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
          copy[i].next(value);
        }
      }
    };
    Subject.prototype.error = function(err) {
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      }
      this.hasError = true;
      this.thrownError = err;
      this.isStopped = true;
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();
      for (var i = 0; i < len; i++) {
        copy[i].error(err);
      }
      this.observers.length = 0;
    };
    Subject.prototype.complete = function() {
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      }
      this.isStopped = true;
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();
      for (var i = 0; i < len; i++) {
        copy[i].complete();
      }
      this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function() {
      this.isStopped = true;
      this.closed = true;
      this.observers = null;
    };
    Subject.prototype._subscribe = function(subscriber) {
      if (this.closed) {
        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
      } else if (this.hasError) {
        subscriber.error(this.thrownError);
        return Subscription_1.Subscription.EMPTY;
      } else if (this.isStopped) {
        subscriber.complete();
        return Subscription_1.Subscription.EMPTY;
      } else {
        this.observers.push(subscriber);
        return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
      }
    };
    Subject.prototype.asObservable = function() {
      var observable = new Observable_1.Observable();
      observable.source = this;
      return observable;
    };
    Subject.create = function(destination, source) {
      return new AnonymousSubject(destination, source);
    };
    return Subject;
  }(Observable_1.Observable));
  exports.Subject = Subject;
  var AnonymousSubject = (function(_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
      _super.call(this);
      this.destination = destination;
      this.source = source;
    }
    AnonymousSubject.prototype.next = function(value) {
      var destination = this.destination;
      if (destination && destination.next) {
        destination.next(value);
      }
    };
    AnonymousSubject.prototype.error = function(err) {
      var destination = this.destination;
      if (destination && destination.error) {
        this.destination.error(err);
      }
    };
    AnonymousSubject.prototype.complete = function() {
      var destination = this.destination;
      if (destination && destination.complete) {
        this.destination.complete();
      }
    };
    AnonymousSubject.prototype._subscribe = function(subscriber) {
      var source = this.source;
      if (source) {
        return this.source.subscribe(subscriber);
      } else {
        return Subscription_1.Subscription.EMPTY;
      }
    };
    return AnonymousSubject;
  }(Subject));
  exports.AnonymousSubject = AnonymousSubject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/testing/SubscriptionLoggable.js", ["./SubscriptionLog"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SubscriptionLog_1 = $__require('./SubscriptionLog');
  var SubscriptionLoggable = (function() {
    function SubscriptionLoggable() {
      this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function() {
      this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
      return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function(index) {
      var subscriptionLogs = this.subscriptions;
      var oldSubscriptionLog = subscriptionLogs[index];
      subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
  }());
  exports.SubscriptionLoggable = SubscriptionLoggable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/applyMixins.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0,
        len = baseCtors.length; i < len; i++) {
      var baseCtor = baseCtors[i];
      var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
      for (var j = 0,
          len2 = propertyKeys.length; j < len2; j++) {
        var name_1 = propertyKeys[j];
        derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
      }
    }
  }
  exports.applyMixins = applyMixins;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/testing/HotObservable.js", ["../Subject", "../Subscription", "./SubscriptionLoggable", "../util/applyMixins"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('../Subject');
  var Subscription_1 = $__require('../Subscription');
  var SubscriptionLoggable_1 = $__require('./SubscriptionLoggable');
  var applyMixins_1 = $__require('../util/applyMixins');
  var HotObservable = (function(_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
      _super.call(this);
      this.messages = messages;
      this.subscriptions = [];
      this.scheduler = scheduler;
    }
    HotObservable.prototype._subscribe = function(subscriber) {
      var subject = this;
      var index = subject.logSubscribedFrame();
      subscriber.add(new Subscription_1.Subscription(function() {
        subject.logUnsubscribedFrame(index);
      }));
      return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function() {
      var subject = this;
      var messagesLength = subject.messages.length;
      for (var i = 0; i < messagesLength; i++) {
        (function() {
          var message = subject.messages[i];
          subject.scheduler.schedule(function() {
            message.notification.observe(subject);
          }, message.frame);
        })();
      }
    };
    return HotObservable;
  }(Subject_1.Subject));
  exports.HotObservable = HotObservable;
  applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/testing/SubscriptionLog.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SubscriptionLog = (function() {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
      if (unsubscribedFrame === void 0) {
        unsubscribedFrame = Number.POSITIVE_INFINITY;
      }
      this.subscribedFrame = subscribedFrame;
      this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
  }());
  exports.SubscriptionLog = SubscriptionLog;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/testing/TestScheduler.js", ["../Observable", "../Notification", "./ColdObservable", "./HotObservable", "./SubscriptionLog", "../scheduler/VirtualTimeScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('../Observable');
  var Notification_1 = $__require('../Notification');
  var ColdObservable_1 = $__require('./ColdObservable');
  var HotObservable_1 = $__require('./HotObservable');
  var SubscriptionLog_1 = $__require('./SubscriptionLog');
  var VirtualTimeScheduler_1 = $__require('../scheduler/VirtualTimeScheduler');
  var defaultMaxFrame = 750;
  var TestScheduler = (function(_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
      _super.call(this, VirtualTimeScheduler_1.VirtualAction, defaultMaxFrame);
      this.assertDeepEqual = assertDeepEqual;
      this.hotObservables = [];
      this.coldObservables = [];
      this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function(marbles) {
      var indexOf = marbles.indexOf('|');
      if (indexOf === -1) {
        throw new Error('marble diagram for time should have a completion marker "|"');
      }
      return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function(marbles, values, error) {
      if (marbles.indexOf('^') !== -1) {
        throw new Error('cold observable cannot have subscription offset "^"');
      }
      if (marbles.indexOf('!') !== -1) {
        throw new Error('cold observable cannot have unsubscription marker "!"');
      }
      var messages = TestScheduler.parseMarbles(marbles, values, error);
      var cold = new ColdObservable_1.ColdObservable(messages, this);
      this.coldObservables.push(cold);
      return cold;
    };
    TestScheduler.prototype.createHotObservable = function(marbles, values, error) {
      if (marbles.indexOf('!') !== -1) {
        throw new Error('hot observable cannot have unsubscription marker "!"');
      }
      var messages = TestScheduler.parseMarbles(marbles, values, error);
      var subject = new HotObservable_1.HotObservable(messages, this);
      this.hotObservables.push(subject);
      return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function(observable, outerFrame) {
      var _this = this;
      var messages = [];
      observable.subscribe(function(value) {
        messages.push({
          frame: _this.frame - outerFrame,
          notification: Notification_1.Notification.createNext(value)
        });
      }, function(err) {
        messages.push({
          frame: _this.frame - outerFrame,
          notification: Notification_1.Notification.createError(err)
        });
      }, function() {
        messages.push({
          frame: _this.frame - outerFrame,
          notification: Notification_1.Notification.createComplete()
        });
      });
      return messages;
    };
    TestScheduler.prototype.expectObservable = function(observable, unsubscriptionMarbles) {
      var _this = this;
      if (unsubscriptionMarbles === void 0) {
        unsubscriptionMarbles = null;
      }
      var actual = [];
      var flushTest = {
        actual: actual,
        ready: false
      };
      var unsubscriptionFrame = TestScheduler.parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
      var subscription;
      this.schedule(function() {
        subscription = observable.subscribe(function(x) {
          var value = x;
          if (x instanceof Observable_1.Observable) {
            value = _this.materializeInnerObservable(value, _this.frame);
          }
          actual.push({
            frame: _this.frame,
            notification: Notification_1.Notification.createNext(value)
          });
        }, function(err) {
          actual.push({
            frame: _this.frame,
            notification: Notification_1.Notification.createError(err)
          });
        }, function() {
          actual.push({
            frame: _this.frame,
            notification: Notification_1.Notification.createComplete()
          });
        });
      }, 0);
      if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
        this.schedule(function() {
          return subscription.unsubscribe();
        }, unsubscriptionFrame);
      }
      this.flushTests.push(flushTest);
      return {toBe: function(marbles, values, errorValue) {
          flushTest.ready = true;
          flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
        }};
    };
    TestScheduler.prototype.expectSubscriptions = function(actualSubscriptionLogs) {
      var flushTest = {
        actual: actualSubscriptionLogs,
        ready: false
      };
      this.flushTests.push(flushTest);
      return {toBe: function(marbles) {
          var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
          flushTest.ready = true;
          flushTest.expected = marblesArray.map(function(marbles) {
            return TestScheduler.parseMarblesAsSubscriptions(marbles);
          });
        }};
    };
    TestScheduler.prototype.flush = function() {
      var hotObservables = this.hotObservables;
      while (hotObservables.length > 0) {
        hotObservables.shift().setup();
      }
      _super.prototype.flush.call(this);
      var readyFlushTests = this.flushTests.filter(function(test) {
        return test.ready;
      });
      while (readyFlushTests.length > 0) {
        var test = readyFlushTests.shift();
        this.assertDeepEqual(test.actual, test.expected);
      }
    };
    TestScheduler.parseMarblesAsSubscriptions = function(marbles) {
      if (typeof marbles !== 'string') {
        return new SubscriptionLog_1.SubscriptionLog(Number.POSITIVE_INFINITY);
      }
      var len = marbles.length;
      var groupStart = -1;
      var subscriptionFrame = Number.POSITIVE_INFINITY;
      var unsubscriptionFrame = Number.POSITIVE_INFINITY;
      for (var i = 0; i < len; i++) {
        var frame = i * this.frameTimeFactor;
        var c = marbles[i];
        switch (c) {
          case '-':
          case ' ':
            break;
          case '(':
            groupStart = frame;
            break;
          case ')':
            groupStart = -1;
            break;
          case '^':
            if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
              throw new Error('found a second subscription point \'^\' in a ' + 'subscription marble diagram. There can only be one.');
            }
            subscriptionFrame = groupStart > -1 ? groupStart : frame;
            break;
          case '!':
            if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
              throw new Error('found a second subscription point \'^\' in a ' + 'subscription marble diagram. There can only be one.');
            }
            unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
            break;
          default:
            throw new Error('there can only be \'^\' and \'!\' markers in a ' + 'subscription marble diagram. Found instead \'' + c + '\'.');
        }
      }
      if (unsubscriptionFrame < 0) {
        return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
      } else {
        return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
      }
    };
    TestScheduler.parseMarbles = function(marbles, values, errorValue, materializeInnerObservables) {
      if (materializeInnerObservables === void 0) {
        materializeInnerObservables = false;
      }
      if (marbles.indexOf('!') !== -1) {
        throw new Error('conventional marble diagrams cannot have the ' + 'unsubscription marker "!"');
      }
      var len = marbles.length;
      var testMessages = [];
      var subIndex = marbles.indexOf('^');
      var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
      var getValue = typeof values !== 'object' ? function(x) {
        return x;
      } : function(x) {
        if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
          return values[x].messages;
        }
        return values[x];
      };
      var groupStart = -1;
      for (var i = 0; i < len; i++) {
        var frame = i * this.frameTimeFactor + frameOffset;
        var notification = void 0;
        var c = marbles[i];
        switch (c) {
          case '-':
          case ' ':
            break;
          case '(':
            groupStart = frame;
            break;
          case ')':
            groupStart = -1;
            break;
          case '|':
            notification = Notification_1.Notification.createComplete();
            break;
          case '^':
            break;
          case '#':
            notification = Notification_1.Notification.createError(errorValue || 'error');
            break;
          default:
            notification = Notification_1.Notification.createNext(getValue(c));
            break;
        }
        if (notification) {
          testMessages.push({
            frame: groupStart > -1 ? groupStart : frame,
            notification: notification
          });
        }
      }
      return testMessages;
    };
    return TestScheduler;
  }(VirtualTimeScheduler_1.VirtualTimeScheduler));
  exports.TestScheduler = TestScheduler;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/VirtualTimeScheduler.js", ["./AsyncAction", "./AsyncScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncAction_1 = $__require('./AsyncAction');
  var AsyncScheduler_1 = $__require('./AsyncScheduler');
  var VirtualTimeScheduler = (function(_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
      var _this = this;
      if (SchedulerAction === void 0) {
        SchedulerAction = VirtualAction;
      }
      if (maxFrames === void 0) {
        maxFrames = Number.POSITIVE_INFINITY;
      }
      _super.call(this, SchedulerAction, function() {
        return _this.frame;
      });
      this.maxFrames = maxFrames;
      this.frame = 0;
      this.index = -1;
    }
    VirtualTimeScheduler.prototype.flush = function() {
      var _a = this,
          actions = _a.actions,
          maxFrames = _a.maxFrames;
      var error,
          action;
      while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      }
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
  }(AsyncScheduler_1.AsyncScheduler));
  exports.VirtualTimeScheduler = VirtualTimeScheduler;
  var VirtualAction = (function(_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
      if (index === void 0) {
        index = scheduler.index += 1;
      }
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
      this.index = index;
      this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return !this.id ? _super.prototype.schedule.call(this, state, delay) : this.add(new VirtualAction(this.scheduler, this.work)).schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      this.delay = scheduler.frame + delay;
      var actions = scheduler.actions;
      actions.push(this);
      actions.sort(VirtualAction.sortActions);
      return true;
    };
    VirtualAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return undefined;
    };
    VirtualAction.sortActions = function(a, b) {
      if (a.delay === b.delay) {
        if (a.index === b.index) {
          return 0;
        } else if (a.index > b.index) {
          return 1;
        } else {
          return -1;
        }
      } else if (a.delay > b.delay) {
        return 1;
      } else {
        return -1;
      }
    };
    return VirtualAction;
  }(AsyncAction_1.AsyncAction));
  exports.VirtualAction = VirtualAction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/toSubscriber.js", ["../Subscriber", "../symbol/rxSubscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Subscriber_1 = $__require('../Subscriber');
  var rxSubscriber_1 = $__require('../symbol/rxSubscriber');
  function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
      if (nextOrObserver instanceof Subscriber_1.Subscriber) {
        return nextOrObserver;
      }
      if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
        return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
      }
    }
    if (!nextOrObserver && !error && !complete) {
      return new Subscriber_1.Subscriber();
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
  }
  exports.toSubscriber = toSubscriber;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/Observable.js", ["./util/root", "./util/toSubscriber", "./symbol/observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('./util/root');
  var toSubscriber_1 = $__require('./util/toSubscriber');
  var observable_1 = $__require('./symbol/observable');
  var Observable = (function() {
    function Observable(subscribe) {
      this._isScalar = false;
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable.prototype.lift = function(operator) {
      var observable = new Observable();
      observable.source = this;
      observable.operator = operator;
      return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
      var operator = this.operator;
      var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
      if (operator) {
        operator.call(sink, this);
      } else {
        sink.add(this._subscribe(sink));
      }
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;
        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
      return sink;
    };
    Observable.prototype.forEach = function(next, PromiseCtor) {
      var _this = this;
      if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
          PromiseCtor = root_1.root.Rx.config.Promise;
        } else if (root_1.root.Promise) {
          PromiseCtor = root_1.root.Promise;
        }
      }
      if (!PromiseCtor) {
        throw new Error('no Promise impl found');
      }
      return new PromiseCtor(function(resolve, reject) {
        var subscription = _this.subscribe(function(value) {
          if (subscription) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscription.unsubscribe();
            }
          } else {
            next(value);
          }
        }, reject, resolve);
      });
    };
    Observable.prototype._subscribe = function(subscriber) {
      return this.source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.$$observable] = function() {
      return this;
    };
    Observable.create = function(subscribe) {
      return new Observable(subscribe);
    };
    return Observable;
  }());
  exports.Observable = Observable;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/Observer.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.empty = {
    closed: true,
    next: function(value) {},
    error: function(err) {
      throw err;
    },
    complete: function() {}
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/Subscriber.js", ["./util/isFunction", "./Subscription", "./Observer", "./symbol/rxSubscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isFunction_1 = $__require('./util/isFunction');
  var Subscription_1 = $__require('./Subscription');
  var Observer_1 = $__require('./Observer');
  var rxSubscriber_1 = $__require('./symbol/rxSubscriber');
  var Subscriber = (function(_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
      _super.call(this);
      this.syncErrorValue = null;
      this.syncErrorThrown = false;
      this.syncErrorThrowable = false;
      this.isStopped = false;
      switch (arguments.length) {
        case 0:
          this.destination = Observer_1.empty;
          break;
        case 1:
          if (!destinationOrNext) {
            this.destination = Observer_1.empty;
            break;
          }
          if (typeof destinationOrNext === 'object') {
            if (destinationOrNext instanceof Subscriber) {
              this.destination = destinationOrNext;
              this.destination.add(this);
            } else {
              this.syncErrorThrowable = true;
              this.destination = new SafeSubscriber(this, destinationOrNext);
            }
            break;
          }
        default:
          this.syncErrorThrowable = true;
          this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
          break;
      }
    }
    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function() {
      return this;
    };
    Subscriber.create = function(next, error, complete) {
      var subscriber = new Subscriber(next, error, complete);
      subscriber.syncErrorThrowable = false;
      return subscriber;
    };
    Subscriber.prototype.next = function(value) {
      if (!this.isStopped) {
        this._next(value);
      }
    };
    Subscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber.prototype.complete = function() {
      if (!this.isStopped) {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber.prototype.unsubscribe = function() {
      if (this.closed) {
        return;
      }
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
      this.destination.error(err);
      this.unsubscribe();
    };
    Subscriber.prototype._complete = function() {
      this.destination.complete();
      this.unsubscribe();
    };
    return Subscriber;
  }(Subscription_1.Subscription));
  exports.Subscriber = Subscriber;
  var SafeSubscriber = (function(_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parent, observerOrNext, error, complete) {
      _super.call(this);
      this._parent = _parent;
      var next;
      var context = this;
      if (isFunction_1.isFunction(observerOrNext)) {
        next = observerOrNext;
      } else if (observerOrNext) {
        context = observerOrNext;
        next = observerOrNext.next;
        error = observerOrNext.error;
        complete = observerOrNext.complete;
        if (isFunction_1.isFunction(context.unsubscribe)) {
          this.add(context.unsubscribe.bind(context));
        }
        context.unsubscribe = this.unsubscribe.bind(this);
      }
      this._context = context;
      this._next = next;
      this._error = error;
      this._complete = complete;
    }
    SafeSubscriber.prototype.next = function(value) {
      if (!this.isStopped && this._next) {
        var _parent = this._parent;
        if (!_parent.syncErrorThrowable) {
          this.__tryOrUnsub(this._next, value);
        } else if (this.__tryOrSetError(_parent, this._next, value)) {
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var _parent = this._parent;
        if (this._error) {
          if (!_parent.syncErrorThrowable) {
            this.__tryOrUnsub(this._error, err);
            this.unsubscribe();
          } else {
            this.__tryOrSetError(_parent, this._error, err);
            this.unsubscribe();
          }
        } else if (!_parent.syncErrorThrowable) {
          this.unsubscribe();
          throw err;
        } else {
          _parent.syncErrorValue = err;
          _parent.syncErrorThrown = true;
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.complete = function() {
      if (!this.isStopped) {
        var _parent = this._parent;
        if (this._complete) {
          if (!_parent.syncErrorThrowable) {
            this.__tryOrUnsub(this._complete);
            this.unsubscribe();
          } else {
            this.__tryOrSetError(_parent, this._complete);
            this.unsubscribe();
          }
        } else {
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function(fn, value) {
      try {
        fn.call(this._context, value);
      } catch (err) {
        this.unsubscribe();
        throw err;
      }
    };
    SafeSubscriber.prototype.__tryOrSetError = function(parent, fn, value) {
      try {
        fn.call(this._context, value);
      } catch (err) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      }
      return false;
    };
    SafeSubscriber.prototype._unsubscribe = function() {
      var _parent = this._parent;
      this._context = null;
      this._parent = null;
      _parent.unsubscribe();
    };
    return SafeSubscriber;
  }(Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/operator/map.js", ["../Subscriber"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('../Subscriber');
  function map(project, thisArg) {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.lift(new MapOperator(project, thisArg));
  }
  exports.map = map;
  var MapOperator = (function() {
    function MapOperator(project, thisArg) {
      this.project = project;
      this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
  }());
  exports.MapOperator = MapOperator;
  var MapSubscriber = (function(_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
      _super.call(this, destination);
      this.project = project;
      this.count = 0;
      this.thisArg = thisArg || this;
    }
    MapSubscriber.prototype._next = function(value) {
      var result;
      try {
        result = this.project.call(this.thisArg, value, this.count++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return MapSubscriber;
  }(Subscriber_1.Subscriber));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/observable/dom/AjaxObservable.js", ["../../util/root", "../../util/tryCatch", "../../util/errorObject", "../../Observable", "../../Subscriber", "../../operator/map"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('../../util/root');
  var tryCatch_1 = $__require('../../util/tryCatch');
  var errorObject_1 = $__require('../../util/errorObject');
  var Observable_1 = $__require('../../Observable');
  var Subscriber_1 = $__require('../../Subscriber');
  var map_1 = $__require('../../operator/map');
  function getCORSRequest() {
    if (root_1.root.XMLHttpRequest) {
      var xhr = new root_1.root.XMLHttpRequest();
      if ('withCredentials' in xhr) {
        xhr.withCredentials = !!this.withCredentials;
      }
      return xhr;
    } else if (!!root_1.root.XDomainRequest) {
      return new root_1.root.XDomainRequest();
    } else {
      throw new Error('CORS is not supported by your browser');
    }
  }
  function getXMLHttpRequest() {
    if (root_1.root.XMLHttpRequest) {
      return new root_1.root.XMLHttpRequest();
    } else {
      var progId = void 0;
      try {
        var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
        for (var i = 0; i < 3; i++) {
          try {
            progId = progIds[i];
            if (new root_1.root.ActiveXObject(progId)) {
              break;
            }
          } catch (e) {}
        }
        return new root_1.root.ActiveXObject(progId);
      } catch (e) {
        throw new Error('XMLHttpRequest is not supported by your browser');
      }
    }
  }
  function ajaxGet(url, headers) {
    if (headers === void 0) {
      headers = null;
    }
    return new AjaxObservable({
      method: 'GET',
      url: url,
      headers: headers
    });
  }
  exports.ajaxGet = ajaxGet;
  ;
  function ajaxPost(url, body, headers) {
    return new AjaxObservable({
      method: 'POST',
      url: url,
      body: body,
      headers: headers
    });
  }
  exports.ajaxPost = ajaxPost;
  ;
  function ajaxDelete(url, headers) {
    return new AjaxObservable({
      method: 'DELETE',
      url: url,
      headers: headers
    });
  }
  exports.ajaxDelete = ajaxDelete;
  ;
  function ajaxPut(url, body, headers) {
    return new AjaxObservable({
      method: 'PUT',
      url: url,
      body: body,
      headers: headers
    });
  }
  exports.ajaxPut = ajaxPut;
  ;
  function ajaxGetJSON(url, headers) {
    return new AjaxObservable({
      method: 'GET',
      url: url,
      responseType: 'json',
      headers: headers
    }).lift(new map_1.MapOperator(function(x, index) {
      return x.response;
    }, null));
  }
  exports.ajaxGetJSON = ajaxGetJSON;
  ;
  var AjaxObservable = (function(_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
      _super.call(this);
      var request = {
        async: true,
        createXHR: function() {
          return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
        },
        crossDomain: false,
        withCredentials: false,
        headers: {},
        method: 'GET',
        responseType: 'json',
        timeout: 0
      };
      if (typeof urlOrRequest === 'string') {
        request.url = urlOrRequest;
      } else {
        for (var prop in urlOrRequest) {
          if (urlOrRequest.hasOwnProperty(prop)) {
            request[prop] = urlOrRequest[prop];
          }
        }
      }
      this.request = request;
    }
    AjaxObservable.prototype._subscribe = function(subscriber) {
      return new AjaxSubscriber(subscriber, this.request);
    };
    AjaxObservable.create = (function() {
      var create = function(urlOrRequest) {
        return new AjaxObservable(urlOrRequest);
      };
      create.get = ajaxGet;
      create.post = ajaxPost;
      create.delete = ajaxDelete;
      create.put = ajaxPut;
      create.getJSON = ajaxGetJSON;
      return create;
    })();
    return AjaxObservable;
  }(Observable_1.Observable));
  exports.AjaxObservable = AjaxObservable;
  var AjaxSubscriber = (function(_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
      _super.call(this, destination);
      this.request = request;
      this.done = false;
      var headers = request.headers = request.headers || {};
      if (!request.crossDomain && !headers['X-Requested-With']) {
        headers['X-Requested-With'] = 'XMLHttpRequest';
      }
      if (!('Content-Type' in headers) && !(root_1.root.FormData && request.body instanceof root_1.root.FormData) && typeof request.body !== 'undefined') {
        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      }
      request.body = this.serializeBody(request.body, request.headers['Content-Type']);
      this.send();
    }
    AjaxSubscriber.prototype.next = function(e) {
      this.done = true;
      var _a = this,
          xhr = _a.xhr,
          request = _a.request,
          destination = _a.destination;
      var response = new AjaxResponse(e, xhr, request);
      destination.next(response);
    };
    AjaxSubscriber.prototype.send = function() {
      var _a = this,
          request = _a.request,
          _b = _a.request,
          user = _b.user,
          method = _b.method,
          url = _b.url,
          async = _b.async,
          password = _b.password,
          headers = _b.headers,
          body = _b.body;
      var createXHR = request.createXHR;
      var xhr = tryCatch_1.tryCatch(createXHR).call(request);
      if (xhr === errorObject_1.errorObject) {
        this.error(errorObject_1.errorObject.e);
      } else {
        this.xhr = xhr;
        var result = void 0;
        if (user) {
          result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
        } else {
          result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
        }
        if (result === errorObject_1.errorObject) {
          this.error(errorObject_1.errorObject.e);
          return null;
        }
        xhr.timeout = request.timeout;
        xhr.responseType = request.responseType;
        this.setHeaders(xhr, headers);
        this.setupEvents(xhr, request);
        if (body) {
          xhr.send(body);
        } else {
          xhr.send();
        }
      }
      return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function(body, contentType) {
      if (!body || typeof body === 'string') {
        return body;
      } else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
        return body;
      }
      if (contentType) {
        var splitIndex = contentType.indexOf(';');
        if (splitIndex !== -1) {
          contentType = contentType.substring(0, splitIndex);
        }
      }
      switch (contentType) {
        case 'application/x-www-form-urlencoded':
          return Object.keys(body).map(function(key) {
            return (encodeURI(key) + "=" + encodeURI(body[key]));
          }).join('&');
        case 'application/json':
          return JSON.stringify(body);
        default:
          return body;
      }
    };
    AjaxSubscriber.prototype.setHeaders = function(xhr, headers) {
      for (var key in headers) {
        if (headers.hasOwnProperty(key)) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }
    };
    AjaxSubscriber.prototype.setupEvents = function(xhr, request) {
      var progressSubscriber = request.progressSubscriber;
      xhr.ontimeout = function xhrTimeout(e) {
        var _a = xhrTimeout,
            subscriber = _a.subscriber,
            progressSubscriber = _a.progressSubscriber,
            request = _a.request;
        if (progressSubscriber) {
          progressSubscriber.error(e);
        }
        subscriber.error(new AjaxTimeoutError(this, request));
      };
      xhr.ontimeout.request = request;
      xhr.ontimeout.subscriber = this;
      xhr.ontimeout.progressSubscriber = progressSubscriber;
      if (xhr.upload && 'withCredentials' in xhr && root_1.root.XDomainRequest) {
        if (progressSubscriber) {
          xhr.onprogress = function xhrProgress(e) {
            var progressSubscriber = xhrProgress.progressSubscriber;
            progressSubscriber.next(e);
          };
          xhr.onprogress.progressSubscriber = progressSubscriber;
        }
        xhr.onerror = function xhrError(e) {
          var _a = xhrError,
              progressSubscriber = _a.progressSubscriber,
              subscriber = _a.subscriber,
              request = _a.request;
          if (progressSubscriber) {
            progressSubscriber.error(e);
          }
          subscriber.error(new AjaxError('ajax error', this, request));
        };
        xhr.onerror.request = request;
        xhr.onerror.subscriber = this;
        xhr.onerror.progressSubscriber = progressSubscriber;
      }
      xhr.onreadystatechange = function xhrReadyStateChange(e) {
        var _a = xhrReadyStateChange,
            subscriber = _a.subscriber,
            progressSubscriber = _a.progressSubscriber,
            request = _a.request;
        if (this.readyState === 4) {
          var status_1 = this.status === 1223 ? 204 : this.status;
          var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
          if (status_1 === 0) {
            status_1 = response ? 200 : 0;
          }
          if (200 <= status_1 && status_1 < 300) {
            if (progressSubscriber) {
              progressSubscriber.complete();
            }
            subscriber.next(e);
            subscriber.complete();
          } else {
            if (progressSubscriber) {
              progressSubscriber.error(e);
            }
            subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
          }
        }
      };
      xhr.onreadystatechange.subscriber = this;
      xhr.onreadystatechange.progressSubscriber = progressSubscriber;
      xhr.onreadystatechange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function() {
      var _a = this,
          done = _a.done,
          xhr = _a.xhr;
      if (!done && xhr && xhr.readyState !== 4) {
        xhr.abort();
      }
      _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
  }(Subscriber_1.Subscriber));
  exports.AjaxSubscriber = AjaxSubscriber;
  var AjaxResponse = (function() {
    function AjaxResponse(originalEvent, xhr, request) {
      this.originalEvent = originalEvent;
      this.xhr = xhr;
      this.request = request;
      this.status = xhr.status;
      this.responseType = xhr.responseType || request.responseType;
      switch (this.responseType) {
        case 'json':
          if ('response' in xhr) {
            this.response = xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
          } else {
            this.response = JSON.parse(xhr.responseText || 'null');
          }
          break;
        case 'xml':
          this.response = xhr.responseXML;
          break;
        case 'text':
        default:
          this.response = ('response' in xhr) ? xhr.response : xhr.responseText;
          break;
      }
    }
    return AjaxResponse;
  }());
  exports.AjaxResponse = AjaxResponse;
  var AjaxError = (function(_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
      _super.call(this, message);
      this.message = message;
      this.xhr = xhr;
      this.request = request;
      this.status = xhr.status;
    }
    return AjaxError;
  }(Error));
  exports.AjaxError = AjaxError;
  var AjaxTimeoutError = (function(_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
      _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
  }(AjaxError));
  exports.AjaxTimeoutError = AjaxTimeoutError;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/Immediate.js", ["./root"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('./root');
  var ImmediateDefinition = (function() {
    function ImmediateDefinition(root) {
      this.root = root;
      if (root.setImmediate && typeof root.setImmediate === 'function') {
        this.setImmediate = root.setImmediate.bind(root);
        this.clearImmediate = root.clearImmediate.bind(root);
      } else {
        this.nextHandle = 1;
        this.tasksByHandle = {};
        this.currentlyRunningATask = false;
        if (this.canUseProcessNextTick()) {
          this.setImmediate = this.createProcessNextTickSetImmediate();
        } else if (this.canUsePostMessage()) {
          this.setImmediate = this.createPostMessageSetImmediate();
        } else if (this.canUseMessageChannel()) {
          this.setImmediate = this.createMessageChannelSetImmediate();
        } else if (this.canUseReadyStateChange()) {
          this.setImmediate = this.createReadyStateChangeSetImmediate();
        } else {
          this.setImmediate = this.createSetTimeoutSetImmediate();
        }
        var ci = function clearImmediate(handle) {
          delete clearImmediate.instance.tasksByHandle[handle];
        };
        ci.instance = this;
        this.clearImmediate = ci;
      }
    }
    ImmediateDefinition.prototype.identify = function(o) {
      return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function() {
      return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function() {
      return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function() {
      var document = this.root.document;
      return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function() {
      var root = this.root;
      if (root.postMessage && !root.importScripts) {
        var postMessageIsAsynchronous_1 = true;
        var oldOnMessage = root.onmessage;
        root.onmessage = function() {
          postMessageIsAsynchronous_1 = false;
        };
        root.postMessage('', '*');
        root.onmessage = oldOnMessage;
        return postMessageIsAsynchronous_1;
      }
      return false;
    };
    ImmediateDefinition.prototype.partiallyApplied = function(handler) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var fn = function result() {
        var _a = result,
            handler = _a.handler,
            args = _a.args;
        if (typeof handler === 'function') {
          handler.apply(undefined, args);
        } else {
          (new Function('' + handler))();
        }
      };
      fn.handler = handler;
      fn.args = args;
      return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function(args) {
      this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
      return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function() {
      var fn = function setImmediate() {
        var instance = setImmediate.instance;
        var handle = instance.addFromSetImmediateArguments(arguments);
        instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
        return handle;
      };
      fn.instance = this;
      return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function() {
      var root = this.root;
      var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
      var onGlobalMessage = function globalMessageHandler(event) {
        var instance = globalMessageHandler.instance;
        if (event.source === root && typeof event.data === 'string' && event.data.indexOf(messagePrefix) === 0) {
          instance.runIfPresent(+event.data.slice(messagePrefix.length));
        }
      };
      onGlobalMessage.instance = this;
      root.addEventListener('message', onGlobalMessage, false);
      var fn = function setImmediate() {
        var _a = setImmediate,
            messagePrefix = _a.messagePrefix,
            instance = _a.instance;
        var handle = instance.addFromSetImmediateArguments(arguments);
        instance.root.postMessage(messagePrefix + handle, '*');
        return handle;
      };
      fn.instance = this;
      fn.messagePrefix = messagePrefix;
      return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function(handle) {
      if (this.currentlyRunningATask) {
        this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
      } else {
        var task = this.tasksByHandle[handle];
        if (task) {
          this.currentlyRunningATask = true;
          try {
            task();
          } finally {
            this.clearImmediate(handle);
            this.currentlyRunningATask = false;
          }
        }
      }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function() {
      var _this = this;
      var channel = new this.root.MessageChannel();
      channel.port1.onmessage = function(event) {
        var handle = event.data;
        _this.runIfPresent(handle);
      };
      var fn = function setImmediate() {
        var _a = setImmediate,
            channel = _a.channel,
            instance = _a.instance;
        var handle = instance.addFromSetImmediateArguments(arguments);
        channel.port2.postMessage(handle);
        return handle;
      };
      fn.channel = channel;
      fn.instance = this;
      return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function() {
      var fn = function setImmediate() {
        var instance = setImmediate.instance;
        var root = instance.root;
        var doc = root.document;
        var html = doc.documentElement;
        var handle = instance.addFromSetImmediateArguments(arguments);
        var script = doc.createElement('script');
        script.onreadystatechange = function() {
          instance.runIfPresent(handle);
          script.onreadystatechange = null;
          html.removeChild(script);
          script = null;
        };
        html.appendChild(script);
        return handle;
      };
      fn.instance = this;
      return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function() {
      var fn = function setImmediate() {
        var instance = setImmediate.instance;
        var handle = instance.addFromSetImmediateArguments(arguments);
        instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
        return handle;
      };
      fn.instance = this;
      return fn;
    };
    return ImmediateDefinition;
  }());
  exports.ImmediateDefinition = ImmediateDefinition;
  exports.Immediate = new ImmediateDefinition(root_1.root);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/AsapAction.js", ["../util/Immediate", "./AsyncAction"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Immediate_1 = $__require('../util/Immediate');
  var AsyncAction_1 = $__require('./AsyncAction');
  var AsapAction = (function(_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0) {
        return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
      }
      scheduler.actions.push(this);
      return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0) {
        return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
      }
      if (scheduler.actions.length === 0) {
        Immediate_1.Immediate.clearImmediate(id);
        scheduler.scheduled = undefined;
      }
      return undefined;
    };
    return AsapAction;
  }(AsyncAction_1.AsyncAction));
  exports.AsapAction = AsapAction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/AsapScheduler.js", ["./AsyncScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncScheduler_1 = $__require('./AsyncScheduler');
  var AsapScheduler = (function(_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
      _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function() {
      this.active = true;
      this.scheduled = undefined;
      var actions = this.actions;
      var error;
      var index = -1;
      var count = actions.length;
      var action = actions.shift();
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (++index < count && (action = actions.shift()));
      this.active = false;
      if (error) {
        while (++index < count && (action = actions.shift())) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsapScheduler;
  }(AsyncScheduler_1.AsyncScheduler));
  exports.AsapScheduler = AsapScheduler;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/asap.js", ["./AsapAction", "./AsapScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var AsapAction_1 = $__require('./AsapAction');
  var AsapScheduler_1 = $__require('./AsapScheduler');
  exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/async.js", ["./AsyncAction", "./AsyncScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var AsyncAction_1 = $__require('./AsyncAction');
  var AsyncScheduler_1 = $__require('./AsyncScheduler');
  exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/QueueAction.js", ["./AsyncAction"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncAction_1 = $__require('./AsyncAction');
  var QueueAction = (function(_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
    }
    QueueAction.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay > 0) {
        return _super.prototype.schedule.call(this, state, delay);
      }
      this.delay = delay;
      this.state = state;
      this.scheduler.flush(this);
      return this;
    };
    QueueAction.prototype.execute = function(state, delay) {
      return (delay > 0 || this.closed) ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0) {
        return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
      }
      return scheduler.flush(this);
    };
    return QueueAction;
  }(AsyncAction_1.AsyncAction));
  exports.QueueAction = QueueAction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/QueueScheduler.js", ["./AsyncScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncScheduler_1 = $__require('./AsyncScheduler');
  var QueueScheduler = (function(_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
      _super.apply(this, arguments);
    }
    return QueueScheduler;
  }(AsyncScheduler_1.AsyncScheduler));
  exports.QueueScheduler = QueueScheduler;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/queue.js", ["./QueueAction", "./QueueScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var QueueAction_1 = $__require('./QueueAction');
  var QueueScheduler_1 = $__require('./QueueScheduler');
  exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/isArray.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.isArray = Array.isArray || (function(x) {
    return x && typeof x.length === 'number';
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/isObject.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isObject(x) {
    return x != null && typeof x === 'object';
  }
  exports.isObject = isObject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/isFunction.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isFunction(x) {
    return typeof x === 'function';
  }
  exports.isFunction = isFunction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/tryCatch.js", ["./errorObject"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var errorObject_1 = $__require('./errorObject');
  var tryCatchTarget;
  function tryCatcher() {
    try {
      return tryCatchTarget.apply(this, arguments);
    } catch (e) {
      errorObject_1.errorObject.e = e;
      return errorObject_1.errorObject;
    }
  }
  function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
  }
  exports.tryCatch = tryCatch;
  ;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/errorObject.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports.errorObject = {e: {}};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/UnsubscriptionError.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var UnsubscriptionError = (function(_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
      _super.call(this);
      this.errors = errors;
      var err = Error.call(this, errors ? errors.length + " errors occurred during unsubscription:\n  " + errors.map(function(err, i) {
        return ((i + 1) + ") " + err.toString());
      }).join('\n  ') : '');
      this.name = err.name = 'UnsubscriptionError';
      this.stack = err.stack;
      this.message = err.message;
    }
    return UnsubscriptionError;
  }(Error));
  exports.UnsubscriptionError = UnsubscriptionError;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/Subscription.js", ["./util/isArray", "./util/isObject", "./util/isFunction", "./util/tryCatch", "./util/errorObject", "./util/UnsubscriptionError"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isArray_1 = $__require('./util/isArray');
  var isObject_1 = $__require('./util/isObject');
  var isFunction_1 = $__require('./util/isFunction');
  var tryCatch_1 = $__require('./util/tryCatch');
  var errorObject_1 = $__require('./util/errorObject');
  var UnsubscriptionError_1 = $__require('./util/UnsubscriptionError');
  var Subscription = (function() {
    function Subscription(unsubscribe) {
      this.closed = false;
      if (unsubscribe) {
        this._unsubscribe = unsubscribe;
      }
    }
    Subscription.prototype.unsubscribe = function() {
      var hasErrors = false;
      var errors;
      if (this.closed) {
        return;
      }
      this.closed = true;
      var _a = this,
          _unsubscribe = _a._unsubscribe,
          _subscriptions = _a._subscriptions;
      this._subscriptions = null;
      if (isFunction_1.isFunction(_unsubscribe)) {
        var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
        if (trial === errorObject_1.errorObject) {
          hasErrors = true;
          (errors = errors || []).push(errorObject_1.errorObject.e);
        }
      }
      if (isArray_1.isArray(_subscriptions)) {
        var index = -1;
        var len = _subscriptions.length;
        while (++index < len) {
          var sub = _subscriptions[index];
          if (isObject_1.isObject(sub)) {
            var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
            if (trial === errorObject_1.errorObject) {
              hasErrors = true;
              errors = errors || [];
              var err = errorObject_1.errorObject.e;
              if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                errors = errors.concat(err.errors);
              } else {
                errors.push(err);
              }
            }
          }
        }
      }
      if (hasErrors) {
        throw new UnsubscriptionError_1.UnsubscriptionError(errors);
      }
    };
    Subscription.prototype.add = function(teardown) {
      if (!teardown || (teardown === Subscription.EMPTY)) {
        return Subscription.EMPTY;
      }
      if (teardown === this) {
        return this;
      }
      var sub = teardown;
      switch (typeof teardown) {
        case 'function':
          sub = new Subscription(teardown);
        case 'object':
          if (sub.closed || typeof sub.unsubscribe !== 'function') {
            break;
          } else if (this.closed) {
            sub.unsubscribe();
          } else {
            (this._subscriptions || (this._subscriptions = [])).push(sub);
          }
          break;
        default:
          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
      }
      return sub;
    };
    Subscription.prototype.remove = function(subscription) {
      if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
        return;
      }
      var subscriptions = this._subscriptions;
      if (subscriptions) {
        var subscriptionIndex = subscriptions.indexOf(subscription);
        if (subscriptionIndex !== -1) {
          subscriptions.splice(subscriptionIndex, 1);
        }
      }
    };
    Subscription.EMPTY = (function(empty) {
      empty.closed = true;
      return empty;
    }(new Subscription()));
    return Subscription;
  }());
  exports.Subscription = Subscription;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/Action.js", ["../Subscription"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = $__require('../Subscription');
  var Action = (function(_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
      _super.call(this);
    }
    Action.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return this;
    };
    return Action;
  }(Subscription_1.Subscription));
  exports.Action = Action;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/AsyncAction.js", ["../util/root", "./Action"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('../util/root');
  var Action_1 = $__require('./Action');
  var AsyncAction = (function(_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
      this.pending = false;
    }
    AsyncAction.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (this.closed) {
        return this;
      }
      this.state = state;
      this.pending = true;
      var id = this.id;
      var scheduler = this.scheduler;
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, delay);
      }
      this.delay = delay;
      this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
      return this;
    };
    AsyncAction.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && this.delay === delay) {
        return id;
      }
      return root_1.root.clearInterval(id) && undefined || undefined;
    };
    AsyncAction.prototype.execute = function(state, delay) {
      if (this.closed) {
        return new Error('executing a cancelled action');
      }
      this.pending = false;
      var error = this._execute(state, delay);
      if (error) {
        return error;
      } else if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    AsyncAction.prototype._execute = function(state, delay) {
      var errored = false;
      var errorValue = undefined;
      try {
        this.work(state);
      } catch (e) {
        errored = true;
        errorValue = !!e && e || new Error(e);
      }
      if (errored) {
        this.unsubscribe();
        return errorValue;
      }
    };
    AsyncAction.prototype._unsubscribe = function() {
      var id = this.id;
      var scheduler = this.scheduler;
      var actions = scheduler.actions;
      var index = actions.indexOf(this);
      this.work = null;
      this.delay = null;
      this.state = null;
      this.pending = false;
      this.scheduler = null;
      if (index !== -1) {
        actions.splice(index, 1);
      }
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
    };
    return AsyncAction;
  }(Action_1.Action));
  exports.AsyncAction = AsyncAction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/AnimationFrame.js", ["./root"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('./root');
  var RequestAnimationFrameDefinition = (function() {
    function RequestAnimationFrameDefinition(root) {
      if (root.requestAnimationFrame) {
        this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
        this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
      } else if (root.mozRequestAnimationFrame) {
        this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
        this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
      } else if (root.webkitRequestAnimationFrame) {
        this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
        this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
      } else if (root.msRequestAnimationFrame) {
        this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
        this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
      } else if (root.oRequestAnimationFrame) {
        this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
        this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
      } else {
        this.cancelAnimationFrame = root.clearTimeout.bind(root);
        this.requestAnimationFrame = function(cb) {
          return root.setTimeout(cb, 1000 / 60);
        };
      }
    }
    return RequestAnimationFrameDefinition;
  }());
  exports.RequestAnimationFrameDefinition = RequestAnimationFrameDefinition;
  exports.AnimationFrame = new RequestAnimationFrameDefinition(root_1.root);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/AnimationFrameAction.js", ["./AsyncAction", "../util/AnimationFrame"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncAction_1 = $__require('./AsyncAction');
  var AnimationFrame_1 = $__require('../util/AnimationFrame');
  var AnimationFrameAction = (function(_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
      _super.call(this, scheduler, work);
      this.scheduler = scheduler;
      this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0) {
        return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
      }
      scheduler.actions.push(this);
      return scheduler.scheduled || (scheduler.scheduled = AnimationFrame_1.AnimationFrame.requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0) {
        return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
      }
      if (scheduler.actions.length === 0) {
        AnimationFrame_1.AnimationFrame.cancelAnimationFrame(id);
        scheduler.scheduled = undefined;
      }
      return undefined;
    };
    return AnimationFrameAction;
  }(AsyncAction_1.AsyncAction));
  exports.AnimationFrameAction = AnimationFrameAction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/Scheduler.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Scheduler = (function() {
    function Scheduler(SchedulerAction, now) {
      if (now === void 0) {
        now = Scheduler.now;
      }
      this.SchedulerAction = SchedulerAction;
      this.now = now;
    }
    Scheduler.prototype.schedule = function(work, delay, state) {
      if (delay === void 0) {
        delay = 0;
      }
      return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function() {
      return +new Date();
    };
    return Scheduler;
  }());
  exports.Scheduler = Scheduler;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/AsyncScheduler.js", ["../Scheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Scheduler_1 = $__require('../Scheduler');
  var AsyncScheduler = (function(_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
      _super.apply(this, arguments);
      this.actions = [];
      this.active = false;
      this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function(action) {
      var actions = this.actions;
      if (this.active) {
        actions.push(action);
        return;
      }
      var error;
      this.active = true;
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (action = actions.shift());
      this.active = false;
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsyncScheduler;
  }(Scheduler_1.Scheduler));
  exports.AsyncScheduler = AsyncScheduler;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/AnimationFrameScheduler.js", ["./AsyncScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsyncScheduler_1 = $__require('./AsyncScheduler');
  var AnimationFrameScheduler = (function(_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
      _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function() {
      this.active = true;
      this.scheduled = undefined;
      var actions = this.actions;
      var error;
      var index = -1;
      var count = actions.length;
      var action = actions.shift();
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (++index < count && (action = actions.shift()));
      this.active = false;
      if (error) {
        while (++index < count && (action = actions.shift())) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AnimationFrameScheduler;
  }(AsyncScheduler_1.AsyncScheduler));
  exports.AnimationFrameScheduler = AnimationFrameScheduler;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/scheduler/animationFrame.js", ["./AnimationFrameAction", "./AnimationFrameScheduler"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var AnimationFrameAction_1 = $__require('./AnimationFrameAction');
  var AnimationFrameScheduler_1 = $__require('./AnimationFrameScheduler');
  exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/symbol/rxSubscriber.js", ["../util/root"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('../util/root');
  var Symbol = root_1.root.Symbol;
  exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ? Symbol.for('rxSubscriber') : '@@rxSubscriber';
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/symbol/iterator.js", ["../util/root"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('../util/root');
  var Symbol = root_1.root.Symbol;
  if (typeof Symbol === 'function') {
    if (Symbol.iterator) {
      exports.$$iterator = Symbol.iterator;
    } else if (typeof Symbol.for === 'function') {
      exports.$$iterator = Symbol.for('iterator');
    }
  } else {
    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
      exports.$$iterator = '@@iterator';
    } else if (root_1.root.Map) {
      var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
          exports.$$iterator = key;
          break;
        }
      }
    } else {
      exports.$$iterator = '@@iterator';
    }
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/util/root.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };
  exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
  var freeGlobal = objectTypes[typeof global] && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    exports.root = freeGlobal;
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/symbol/observable.js", ["../util/root"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var root_1 = $__require('../util/root');
  function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
      if (Symbol.observable) {
        $$observable = Symbol.observable;
      } else {
        $$observable = Symbol('observable');
        Symbol.observable = $$observable;
      }
    } else {
      $$observable = '@@observable';
    }
    return $$observable;
  }
  exports.getSymbolObservable = getSymbolObservable;
  exports.$$observable = getSymbolObservable(root_1.root);
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/rxjs/Rx.js", ["./Subject", "./Observable", "./add/observable/bindCallback", "./add/observable/bindNodeCallback", "./add/observable/combineLatest", "./add/observable/concat", "./add/observable/defer", "./add/observable/empty", "./add/observable/forkJoin", "./add/observable/from", "./add/observable/fromEvent", "./add/observable/fromEventPattern", "./add/observable/fromPromise", "./add/observable/generate", "./add/observable/if", "./add/observable/interval", "./add/observable/merge", "./add/observable/race", "./add/observable/never", "./add/observable/of", "./add/observable/onErrorResumeNext", "./add/observable/pairs", "./add/observable/range", "./add/observable/using", "./add/observable/throw", "./add/observable/timer", "./add/observable/zip", "./add/observable/dom/ajax", "./add/observable/dom/webSocket", "./add/operator/buffer", "./add/operator/bufferCount", "./add/operator/bufferTime", "./add/operator/bufferToggle", "./add/operator/bufferWhen", "./add/operator/cache", "./add/operator/catch", "./add/operator/combineAll", "./add/operator/combineLatest", "./add/operator/concat", "./add/operator/concatAll", "./add/operator/concatMap", "./add/operator/concatMapTo", "./add/operator/count", "./add/operator/dematerialize", "./add/operator/debounce", "./add/operator/debounceTime", "./add/operator/defaultIfEmpty", "./add/operator/delay", "./add/operator/delayWhen", "./add/operator/distinct", "./add/operator/distinctKey", "./add/operator/distinctUntilChanged", "./add/operator/distinctUntilKeyChanged", "./add/operator/do", "./add/operator/exhaust", "./add/operator/exhaustMap", "./add/operator/expand", "./add/operator/elementAt", "./add/operator/filter", "./add/operator/finally", "./add/operator/find", "./add/operator/findIndex", "./add/operator/first", "./add/operator/groupBy", "./add/operator/ignoreElements", "./add/operator/isEmpty", "./add/operator/audit", "./add/operator/auditTime", "./add/operator/last", "./add/operator/let", "./add/operator/every", "./add/operator/map", "./add/operator/mapTo", "./add/operator/materialize", "./add/operator/max", "./add/operator/merge", "./add/operator/mergeAll", "./add/operator/mergeMap", "./add/operator/mergeMapTo", "./add/operator/mergeScan", "./add/operator/min", "./add/operator/multicast", "./add/operator/observeOn", "./add/operator/onErrorResumeNext", "./add/operator/pairwise", "./add/operator/partition", "./add/operator/pluck", "./add/operator/publish", "./add/operator/publishBehavior", "./add/operator/publishReplay", "./add/operator/publishLast", "./add/operator/race", "./add/operator/reduce", "./add/operator/repeat", "./add/operator/repeatWhen", "./add/operator/retry", "./add/operator/retryWhen", "./add/operator/sample", "./add/operator/sampleTime", "./add/operator/scan", "./add/operator/sequenceEqual", "./add/operator/share", "./add/operator/single", "./add/operator/skip", "./add/operator/skipUntil", "./add/operator/skipWhile", "./add/operator/startWith", "./add/operator/subscribeOn", "./add/operator/switch", "./add/operator/switchMap", "./add/operator/switchMapTo", "./add/operator/take", "./add/operator/takeLast", "./add/operator/takeUntil", "./add/operator/takeWhile", "./add/operator/throttle", "./add/operator/throttleTime", "./add/operator/timeInterval", "./add/operator/timeout", "./add/operator/timeoutWith", "./add/operator/timestamp", "./add/operator/toArray", "./add/operator/toPromise", "./add/operator/window", "./add/operator/windowCount", "./add/operator/windowTime", "./add/operator/windowToggle", "./add/operator/windowWhen", "./add/operator/withLatestFrom", "./add/operator/zip", "./add/operator/zipAll", "./Subscription", "./Subscriber", "./AsyncSubject", "./ReplaySubject", "./BehaviorSubject", "./observable/MulticastObservable", "./observable/ConnectableObservable", "./Notification", "./util/EmptyError", "./util/ArgumentOutOfRangeError", "./util/ObjectUnsubscribedError", "./util/UnsubscriptionError", "./operator/timeInterval", "./operator/timestamp", "./testing/TestScheduler", "./scheduler/VirtualTimeScheduler", "./observable/dom/AjaxObservable", "./scheduler/asap", "./scheduler/async", "./scheduler/queue", "./scheduler/animationFrame", "./symbol/rxSubscriber", "./symbol/iterator", "./symbol/observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Subject_1 = $__require('./Subject');
  exports.Subject = Subject_1.Subject;
  var Observable_1 = $__require('./Observable');
  exports.Observable = Observable_1.Observable;
  $__require('./add/observable/bindCallback');
  $__require('./add/observable/bindNodeCallback');
  $__require('./add/observable/combineLatest');
  $__require('./add/observable/concat');
  $__require('./add/observable/defer');
  $__require('./add/observable/empty');
  $__require('./add/observable/forkJoin');
  $__require('./add/observable/from');
  $__require('./add/observable/fromEvent');
  $__require('./add/observable/fromEventPattern');
  $__require('./add/observable/fromPromise');
  $__require('./add/observable/generate');
  $__require('./add/observable/if');
  $__require('./add/observable/interval');
  $__require('./add/observable/merge');
  $__require('./add/observable/race');
  $__require('./add/observable/never');
  $__require('./add/observable/of');
  $__require('./add/observable/onErrorResumeNext');
  $__require('./add/observable/pairs');
  $__require('./add/observable/range');
  $__require('./add/observable/using');
  $__require('./add/observable/throw');
  $__require('./add/observable/timer');
  $__require('./add/observable/zip');
  $__require('./add/observable/dom/ajax');
  $__require('./add/observable/dom/webSocket');
  $__require('./add/operator/buffer');
  $__require('./add/operator/bufferCount');
  $__require('./add/operator/bufferTime');
  $__require('./add/operator/bufferToggle');
  $__require('./add/operator/bufferWhen');
  $__require('./add/operator/cache');
  $__require('./add/operator/catch');
  $__require('./add/operator/combineAll');
  $__require('./add/operator/combineLatest');
  $__require('./add/operator/concat');
  $__require('./add/operator/concatAll');
  $__require('./add/operator/concatMap');
  $__require('./add/operator/concatMapTo');
  $__require('./add/operator/count');
  $__require('./add/operator/dematerialize');
  $__require('./add/operator/debounce');
  $__require('./add/operator/debounceTime');
  $__require('./add/operator/defaultIfEmpty');
  $__require('./add/operator/delay');
  $__require('./add/operator/delayWhen');
  $__require('./add/operator/distinct');
  $__require('./add/operator/distinctKey');
  $__require('./add/operator/distinctUntilChanged');
  $__require('./add/operator/distinctUntilKeyChanged');
  $__require('./add/operator/do');
  $__require('./add/operator/exhaust');
  $__require('./add/operator/exhaustMap');
  $__require('./add/operator/expand');
  $__require('./add/operator/elementAt');
  $__require('./add/operator/filter');
  $__require('./add/operator/finally');
  $__require('./add/operator/find');
  $__require('./add/operator/findIndex');
  $__require('./add/operator/first');
  $__require('./add/operator/groupBy');
  $__require('./add/operator/ignoreElements');
  $__require('./add/operator/isEmpty');
  $__require('./add/operator/audit');
  $__require('./add/operator/auditTime');
  $__require('./add/operator/last');
  $__require('./add/operator/let');
  $__require('./add/operator/every');
  $__require('./add/operator/map');
  $__require('./add/operator/mapTo');
  $__require('./add/operator/materialize');
  $__require('./add/operator/max');
  $__require('./add/operator/merge');
  $__require('./add/operator/mergeAll');
  $__require('./add/operator/mergeMap');
  $__require('./add/operator/mergeMapTo');
  $__require('./add/operator/mergeScan');
  $__require('./add/operator/min');
  $__require('./add/operator/multicast');
  $__require('./add/operator/observeOn');
  $__require('./add/operator/onErrorResumeNext');
  $__require('./add/operator/pairwise');
  $__require('./add/operator/partition');
  $__require('./add/operator/pluck');
  $__require('./add/operator/publish');
  $__require('./add/operator/publishBehavior');
  $__require('./add/operator/publishReplay');
  $__require('./add/operator/publishLast');
  $__require('./add/operator/race');
  $__require('./add/operator/reduce');
  $__require('./add/operator/repeat');
  $__require('./add/operator/repeatWhen');
  $__require('./add/operator/retry');
  $__require('./add/operator/retryWhen');
  $__require('./add/operator/sample');
  $__require('./add/operator/sampleTime');
  $__require('./add/operator/scan');
  $__require('./add/operator/sequenceEqual');
  $__require('./add/operator/share');
  $__require('./add/operator/single');
  $__require('./add/operator/skip');
  $__require('./add/operator/skipUntil');
  $__require('./add/operator/skipWhile');
  $__require('./add/operator/startWith');
  $__require('./add/operator/subscribeOn');
  $__require('./add/operator/switch');
  $__require('./add/operator/switchMap');
  $__require('./add/operator/switchMapTo');
  $__require('./add/operator/take');
  $__require('./add/operator/takeLast');
  $__require('./add/operator/takeUntil');
  $__require('./add/operator/takeWhile');
  $__require('./add/operator/throttle');
  $__require('./add/operator/throttleTime');
  $__require('./add/operator/timeInterval');
  $__require('./add/operator/timeout');
  $__require('./add/operator/timeoutWith');
  $__require('./add/operator/timestamp');
  $__require('./add/operator/toArray');
  $__require('./add/operator/toPromise');
  $__require('./add/operator/window');
  $__require('./add/operator/windowCount');
  $__require('./add/operator/windowTime');
  $__require('./add/operator/windowToggle');
  $__require('./add/operator/windowWhen');
  $__require('./add/operator/withLatestFrom');
  $__require('./add/operator/zip');
  $__require('./add/operator/zipAll');
  var Subscription_1 = $__require('./Subscription');
  exports.Subscription = Subscription_1.Subscription;
  var Subscriber_1 = $__require('./Subscriber');
  exports.Subscriber = Subscriber_1.Subscriber;
  var AsyncSubject_1 = $__require('./AsyncSubject');
  exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
  var ReplaySubject_1 = $__require('./ReplaySubject');
  exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
  var BehaviorSubject_1 = $__require('./BehaviorSubject');
  exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
  var MulticastObservable_1 = $__require('./observable/MulticastObservable');
  exports.MulticastObservable = MulticastObservable_1.MulticastObservable;
  var ConnectableObservable_1 = $__require('./observable/ConnectableObservable');
  exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
  var Notification_1 = $__require('./Notification');
  exports.Notification = Notification_1.Notification;
  var EmptyError_1 = $__require('./util/EmptyError');
  exports.EmptyError = EmptyError_1.EmptyError;
  var ArgumentOutOfRangeError_1 = $__require('./util/ArgumentOutOfRangeError');
  exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
  var ObjectUnsubscribedError_1 = $__require('./util/ObjectUnsubscribedError');
  exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
  var UnsubscriptionError_1 = $__require('./util/UnsubscriptionError');
  exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
  var timeInterval_1 = $__require('./operator/timeInterval');
  exports.TimeInterval = timeInterval_1.TimeInterval;
  var timestamp_1 = $__require('./operator/timestamp');
  exports.Timestamp = timestamp_1.Timestamp;
  var TestScheduler_1 = $__require('./testing/TestScheduler');
  exports.TestScheduler = TestScheduler_1.TestScheduler;
  var VirtualTimeScheduler_1 = $__require('./scheduler/VirtualTimeScheduler');
  exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
  var AjaxObservable_1 = $__require('./observable/dom/AjaxObservable');
  exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
  exports.AjaxError = AjaxObservable_1.AjaxError;
  exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;
  var asap_1 = $__require('./scheduler/asap');
  var async_1 = $__require('./scheduler/async');
  var queue_1 = $__require('./scheduler/queue');
  var animationFrame_1 = $__require('./scheduler/animationFrame');
  var rxSubscriber_1 = $__require('./symbol/rxSubscriber');
  var iterator_1 = $__require('./symbol/iterator');
  var observable_1 = $__require('./symbol/observable');
  var Scheduler = {
    asap: asap_1.asap,
    queue: queue_1.queue,
    animationFrame: animationFrame_1.animationFrame,
    async: async_1.async
  };
  exports.Scheduler = Scheduler;
  var Symbol = {
    rxSubscriber: rxSubscriber_1.$$rxSubscriber,
    observable: observable_1.$$observable,
    iterator: iterator_1.$$iterator
  };
  exports.Symbol = Symbol;
  global.define = __define;
  return module.exports;
});

System.register("src/edit/map.edit.component.js", ["@angular/core", "esri-mods", "rxjs/Rx"], function(exports_1, context_1) {
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
          this.editToolbar.activate(esri_mods_1.edit.EDIT_VERTICES, graphicToEdit, {
            boxLineSymbol: new esri_mods_1.SimpleLineSymbol(esri_mods_1.SimpleLineSymbol.STYLE_DASH, new esri_mods_1.Color('ff2800'), 2),
            ghostLineSymbol: new esri_mods_1.SimpleLineSymbol(esri_mods_1.SimpleLineSymbol.STYLE_DASH, new esri_mods_1.Color('ff2800'), 2)
          });
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

System.registerDynamic("empty.js", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {})();
  return _retrieveGlobal();
});

System.register("digi-map.js", ["./src/map.component", "./src/identify/map.identify.component", "./src/draw/map.draw.component", "./src/edit/map.edit.component", "esri-mods"], function(exports_1, context_1) {
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
