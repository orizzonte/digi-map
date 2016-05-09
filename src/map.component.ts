import { Component, ElementRef, Output, EventEmitter, Input } from 'angular2/core';
import { map, ArcGISTiledMapServiceLayer } from 'esri';
import {Layer, LayerType} from './layer';

@Component({
  selector: 'esri-map',
  template: '<div id="map"><ng-content></ng-content></div>'
})
export class MapComponent {
  @Input() layers: Layer[];
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
    });

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
}
