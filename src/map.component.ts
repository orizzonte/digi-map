import { Component, ElementRef, Output, EventEmitter, Input } from 'angular2/core';
import { map, Extent, ArcGISDynamicMapServiceLayer, ArcGISTiledMapServiceLayer, FeatureLayer, Layer} from 'esri-mods';


@Component({
  selector: 'esri-map',
  template: '<div id="map"><ng-content></ng-content></div>'
})
export class MapComponent {
  @Input() layers: Layer[];
  @Input() extent: Extent;
  @Output() mapLoaded = new EventEmitter();

  response: any;
  options: Object;
  itemId: string;
  private initialExtent: Extent;
  private currentMap;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    
    this.currentMap = new map('map');
    
    this.layers.forEach(layer => {
      console.log(layer.url);
      this.currentMap.addLayer(layer);
    });

    this.currentMap.setExtent(this.extent);
    this.initialExtent = this.extent;

    this.currentMap.on('load', function (ev) { console.log('map loaded'); });
    this.currentMap.on('extent-change', function (ev) { console.log('extent changes'); console.log(JSON.stringify(ev.extent)); });
  };

  toInitialExtent() {
    this.currentMap.setExtent(this.initialExtent);
  }

}
