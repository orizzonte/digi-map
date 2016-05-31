import { Component, ElementRef, Output, EventEmitter, Input } from 'angular2/core';
import { Map, TileLayer, Extent, MapView, MapImageLayer} from 'esri-mods';
import {MapLayer, MapLayerType} from './layer';

//declare var esri: any;

@Component({
  selector: 'esri-map',
  template: '<div id="map"><ng-content></ng-content></div>'
})
export class MapComponent {
  @Input() layers: MapLayer[];
  @Input() extent: Extent;
  // @Output() mapLoaded = new EventEmitter();

  response: any;
  options: Object;
  itemId: string;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    // create the map
    let m = new Map();
    let baseLayer : TileLayer;

    this.layers.forEach(layer => {

      if (layer.type === MapLayerType.ArcGisTiledLayer) {
        baseLayer = new TileLayer(layer.url);

        baseLayer.then(function() {});
        m.add(baseLayer);
      }

      if (layer.type === MapLayerType.ArcGISDynamicLayer) {
        m.add(new MapImageLayer(layer.url));
      }

      // if (layer.type === MapLayerType.FeatureLayer) {
      //   m.add(new FeatureLayer(layer.url));
      // }

    });

    let view = new MapView({
      container: 'map',  // Reference to the scene div created in step 5
      map: m, extent : this.extent
    }).then(function (result) {
      console.log('mapview loaded');
    });

    //  m.on('load', function(ev) { console.log('map loaded'); });
    //  m.on('extent-change', function(ev) { console.log('extent changes'); console.log(JSON.stringify(ev.extent)); });
  };

  // // Create a MapView instance (for 2D viewing)
  // var view = new MapView({
  //   map: m,  // References a Map instance
  //   container: this.elRef.nativeElement.firstChild  // References the ID of a DOM element
  // });



  // view.then((response) => {
  //   // make response available to app
  //   // and emit map loaded event
  // this.response = response;
  //   this.mapLoaded.next(response);
  // });

}
