import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import { MapService } from './map.service';
import { map, ArcGISTiledMapServiceLayer } from 'esri';

@Component({
  selector: 'esri-map',
  template: '<div id="map"><ng-content></ng-content></div>',
  providers: [MapService],
  inputs: ['options', 'itemId']
})
export class MapComponent {

  @Output() mapLoaded = new EventEmitter();

  response: any;
  options: Object;
  itemId: string;

  constructor(private elRef: ElementRef, private _mapService: MapService) { }

  ngOnInit() {
    // create the map
    let m = new map('map', {
      basemap: 'streets',  // For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
      center: [3.701191, 51.063198], // longitude, latitude
      zoom: 14
    });

    var layer = new ArcGISTiledMapServiceLayer("http://extragis.gent.be/ExtraGIS/rest/services/G_Algemeen/stadsplan_wgs84_anno/MapServer?token=apPg8G0HUnqA5JparHNqbpHJ3rctjEX2jraKzkwEVvM.");
    m.addLayer(layer);

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
