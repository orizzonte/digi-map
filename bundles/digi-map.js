System.register("digi-map/src/map.component", ["@angular/core", "esri-mods", "./identify/map.identify.component", "./draw/map.draw.component", "./edit/map.edit.component"], function(exports_1, context_1) {
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
      map_edit_component_1;
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
          this.layers = [];
          this.controls = [];
        }
        MapComponent.prototype.ngAfterViewInit = function() {
          this.controls.push(new MapControl('draw', this.draw));
          this.controls.push(new MapControl('edit', this.edit));
        };
        MapComponent.prototype.ngOnInit = function() {
          var _this = this;
          var self = this;
          this.currentMap = new esri_mods_1.map('map');
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
              respectCurrentMapScale: false,
              layerInfos: allLayerInfos
            }, 'legend');
            legendDijit.startup();
          });
          if (this.settings.layers !== undefined) {
            this.settings.layers.forEach(function(layer) {
              if (layer.type === 'dynamic') {
                _this.layers.push(new esri_mods_1.ArcGISDynamicMapServiceLayer(layer.url));
              } else {
                _this.layers.push(new esri_mods_1.ArcGISTiledMapServiceLayer(layer.url));
              }
            });
            this.currentMap.addLayers(this.layers);
          }
          if (this.settings.extent !== undefined) {
            this.initialExtent = new esri_mods_1.Extent({
              xmin: this.settings.extent[0],
              ymin: this.settings.extent[1],
              xmax: this.settings.extent[2],
              ymax: this.settings.extent[3],
              spatialReference: new esri_mods_1.SpatialReference({wkid: 31370})
            });
            this.currentMap.setExtent(this.initialExtent);
          }
          this.currentMap.on('load', function(ev) {
            console.log('map loaded');
          });
        };
        ;
        MapComponent.prototype.toInitialExtent = function() {
          this.currentMap.setExtent(this.initialExtent);
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], MapComponent.prototype, "settings", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], MapComponent.prototype, "mapLoaded", void 0);
        __decorate([core_1.ViewChild(map_draw_component_1.MapDrawComponent), __metadata('design:type', map_draw_component_1.MapDrawComponent)], MapComponent.prototype, "draw", void 0);
        __decorate([core_1.ViewChild(map_edit_component_1.MapEditComponent), __metadata('design:type', map_edit_component_1.MapEditComponent)], MapComponent.prototype, "edit", void 0);
        MapComponent = __decorate([core_1.Component({
          selector: 'esri-map',
          template: " <div id=\"map\">\n                    <map-identify [mapInstance]=\"currentMap\"></map-identify>\n                    <map-draw [mapInstance]=\"currentMap\"></map-draw>\n                    <map-edit [mapInstance]=\"currentMap\"></map-edit>\n                    <ng-content></ng-content>\n                </div>",
          directives: [map_identify_component_1.MapIdentityComponent, map_draw_component_1.MapDrawComponent, map_edit_component_1.MapEditComponent]
        }), __metadata('design:paramtypes', [core_1.ElementRef])], MapComponent);
        return MapComponent;
      }());
      exports_1("MapComponent", MapComponent);
    }
  };
});

System.register("digi-map/src/identify/map.identify.component", ["@angular/core", "esri-mods"], function(exports_1, context_1) {
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
  var MapIdentityComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(esri_mods_1_1) {
      esri_mods_1 = esri_mods_1_1;
    }],
    execute: function() {
      MapIdentityComponent = (function() {
        function MapIdentityComponent() {
          this.isActive = false;
        }
        MapIdentityComponent.prototype.ngOnInit = function() {
          var _this = this;
          this.infoWindow = new esri_mods_1.InfoWindowLite(null, 'popup');
          this.infoWindow.startup();
          this.mapInstance.infoWindow = this.infoWindow;
          this.mapInstance.on('click', function(ev) {
            if (_this.isActive) {
              _this.infoWindow.setTitle('Titel');
              _this.infoWindow.setContent('<span>' + ev.mapPoint.x + ', ' + ev.mapPoint.y + '</span>');
              _this.infoWindow.show(ev.mapPoint, esri_mods_1.InfoWindow.ANCHOR_UPPERRIGHT);
            }
          });
        };
        MapIdentityComponent.prototype.onClick = function() {
          this.isActive = !this.isActive;
          this.infoWindow.hide();
        };
        __decorate([core_1.Input(), __metadata('design:type', esri_mods_1.map)], MapIdentityComponent.prototype, "mapInstance", void 0);
        MapIdentityComponent = __decorate([core_1.Component({
          selector: 'map-identify',
          template: "\t<div class=\"map-identify\">\n\t\t\t\t\t<button (click)=\"onClick()\" [class.active]=\"isActive\">Detailgegevens</button>\n\t\t\t  \t</div>\n\t\t\t  \t<div id=\"popup\"></div>",
          styles: ['.map-identify button { z-index: 99999999999; }', '.active { background-color: green; color: white; }']
        }), __metadata('design:paramtypes', [])], MapIdentityComponent);
        return MapIdentityComponent;
      }());
      exports_1("MapIdentityComponent", MapIdentityComponent);
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
          this.mapInstance.hideZoomSlider();
          this.activateSubject.next(null);
        };
        MapDrawComponent.prototype.deactivate = function() {
          this.drawToolbar.deactivate();
          this.mapInstance.showZoomSlider();
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
          var graphicToEdit = this.mapInstance.graphics[0];
          this.editToolbar.activate(esri_mods_1.edit.EDIT_VERTICES, graphicToEdit);
          this.mapInstance.hideZoomSlider();
          this.activateSubject.next(null);
        };
        MapEditComponent.prototype.deactivate = function() {
          this.editToolbar.deactivate();
          this.mapInstance.showZoomSlider();
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
