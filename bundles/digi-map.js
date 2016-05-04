System.register("digi-map/src/map.service", ["angular2/core", "esri"], function(exports_1, context_1) {
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
      esri_1;
  var MapService;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(esri_1_1) {
      esri_1 = esri_1_1;
    }],
    execute: function() {
      MapService = (function() {
        function MapService() {}
        MapService.prototype.createMap = function(itemIdOrInfo, domNodeOrId, options) {
          return esri_1.arcgisUtils.createMap(itemIdOrInfo, domNodeOrId, options).then(function(response) {
            response.layerInfos = esri_1.arcgisUtils.getLegendLayers(response);
            return response;
          });
        };
        ;
        MapService.prototype.createMap2 = function(domNodeId, options) {
          var map = new esri_1.Map(domNodeId, {
            basemap: 'topo',
            center: [-122.45, 37.75],
            zoom: 13,
            sliderStyle: 'small'
          });
        };
        ;
        MapService.prototype.createSearch = function(options, domNodeOrId) {
          return new esri_1.Search(options, domNodeOrId);
        };
        ;
        MapService.prototype.createLegend = function(options, domNodeOrId) {
          return new esri_1.Legend(options, domNodeOrId);
        };
        MapService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], MapService);
        return MapService;
      }());
      exports_1("MapService", MapService);
    }
  };
});

System.registerDynamic("empty", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {})();
  return _retrieveGlobal();
});

System.register("digi-map/src/map.component", ["angular2/core", "./map.service", "esri"], function(exports_1, context_1) {
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
      map_service_1,
      esri_1;
  var MapComponent;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(map_service_1_1) {
      map_service_1 = map_service_1_1;
    }, function(esri_1_1) {
      esri_1 = esri_1_1;
    }],
    execute: function() {
      MapComponent = (function() {
        function MapComponent(elRef, _mapService) {
          this.elRef = elRef;
          this._mapService = _mapService;
          this.mapLoaded = new core_1.EventEmitter();
        }
        MapComponent.prototype.ngOnInit = function() {
          var m = new esri_1.map('map', {
            basemap: 'streets',
            center: [3.701191, 51.063198],
            zoom: 14
          });
          var layer = new esri_1.ArcGISTiledMapServiceLayer("http://extragis.gent.be/ExtraGIS/rest/services/G_Algemeen/stadsplan_wgs84_anno/MapServer?token=apPg8G0HUnqA5JparHNqbpHJ3rctjEX2jraKzkwEVvM.");
          m.addLayer(layer);
        };
        __decorate([core_1.Output(), __metadata('design:type', Object)], MapComponent.prototype, "mapLoaded", void 0);
        MapComponent = __decorate([core_1.Component({
          selector: 'esri-map',
          template: '<div id="map"><ng-content></ng-content></div>',
          providers: [map_service_1.MapService],
          inputs: ['options', 'itemId']
        }), __metadata('design:paramtypes', [core_1.ElementRef, map_service_1.MapService])], MapComponent);
        return MapComponent;
      }());
      exports_1("MapComponent", MapComponent);
    }
  };
});

System.register("digi-map/digi-map", ["./src/map.component"], function(exports_1, context_1) {
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
    }],
    execute: function() {}
  };
});
