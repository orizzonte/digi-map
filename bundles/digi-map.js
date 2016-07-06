System.register("digi-map/src/map.component", ["@angular/core", "esri-mods", "./identify/map.identify.component"], function(exports_1, context_1) {
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
      map_identify_component_1;
  var MapComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(esri_mods_1_1) {
      esri_mods_1 = esri_mods_1_1;
    }, function(map_identify_component_1_1) {
      map_identify_component_1 = map_identify_component_1_1;
    }],
    execute: function() {
      MapComponent = (function() {
        function MapComponent(elRef) {
          this.elRef = elRef;
          this.mapLoaded = new core_1.EventEmitter();
          this.layers = [];
        }
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
        MapComponent = __decorate([core_1.Component({
          selector: 'esri-map',
          template: 'src/map.component.tmpl.html',
          directives: [map_identify_component_1.MapIdentityComponent]
        }), __metadata('design:paramtypes', [core_1.ElementRef])], MapComponent);
        return MapComponent;
      }());
      exports_1("MapComponent", MapComponent);
    }
  };
});

System.register("digi-map/src/identify/map.identify.component", ["@angular/core"], function(exports_1, context_1) {
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
  var MapIdentityComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }],
    execute: function() {
      MapIdentityComponent = (function() {
        function MapIdentityComponent() {}
        MapIdentityComponent.prototype.onClick = function() {
          console.log('Clicked map-identify');
        };
        MapIdentityComponent = __decorate([core_1.Component({
          selector: 'map-identify',
          template: '<div class="map-identify"><button (click)="onClick()">Detailgegevens</button></div>'
        }), __metadata('design:paramtypes', [])], MapIdentityComponent);
        return MapIdentityComponent;
      }());
      exports_1("MapIdentityComponent", MapIdentityComponent);
    }
  };
});

System.registerDynamic("empty", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {})();
  return _retrieveGlobal();
});

System.register("digi-map/digi-map", ["./src/map.component", "./src/identify/map.identify.component", "esri-mods"], function(exports_1, context_1) {
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
    }, function(esri_mods_1_1) {
      exportStar_1(esri_mods_1_1);
    }],
    execute: function() {}
  };
});
