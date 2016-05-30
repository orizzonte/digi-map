import { Component, ElementRef, Output, EventEmitter, Input } from 'angular2/core';
import { map, ArcGISTiledMapServiceLayer, ArcGISDynamicMapServiceLayer, FeatureLayer, Extent } from 'esri';
import {Layer, LayerType} from './layer';

//declare var esri: any;

@Component({
  selector: 'esri-map',
  template: '<div id="map"><ng-content></ng-content></div>'
})
export class MapComponent {
  @Input() layers: Layer[];
  @Input() extent: any;
  // @Output() mapLoaded = new EventEmitter();

  response: any;
  options: Object;
  itemId: string;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    // create the map
    let m = new map('map');

    this.layers.forEach(layer => {

      if (layer.type === LayerType.ArcGisTiledLayer) {
         m.addLayer(new ArcGISTiledMapServiceLayer(layer.url));
      }

      if (layer.type === LayerType.ArcGISDynamicLayer) {
        m.addLayer(new ArcGISDynamicMapServiceLayer(layer.url));
      }
      
      if (layer.type === LayerType.FeatureLayer) {
        m.addLayer(new FeatureLayer(layer.url));
      }

    });

       m.on('load', function(ev) { console.log('map loaded'); });
       m.on('extent-change', function(ev) { console.log('extent changes'); console.log(JSON.stringify(ev.extent)); });
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
