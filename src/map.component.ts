import { Component, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { map, Extent, ArcGISDynamicMapServiceLayer, ArcGISTiledMapServiceLayer, FeatureLayer, Layer, Legend} from 'esri-mods';


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
  currentMap : map;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {

    let self = this;

    this.currentMap = new map('map');

    this.currentMap.on('layers-add-result', function (evt) {

      let allLayerInfos = [];

      evt.layers.forEach((layer, index) => {
        let layerInfos = layer.layer.layerInfos;

        if (layerInfos && layerInfos.length > 0) {
          allLayerInfos.push({ layer: layer.layer, title: layer.layer.name });
        };
      });

      var legendDijit = new Legend({
        map: self.currentMap,
        respectCurrentMapScale: false,
        layerInfos: allLayerInfos
      }, 'legend');

      legendDijit.startup();

    });

    this.currentMap.addLayers(this.layers);
    this.currentMap.setExtent(this.extent);
    this.initialExtent = this.extent;

    this.currentMap.on('load', function (ev) { console.log('map loaded'); });
    this.currentMap.on('extent-change', function (ev) { console.log('extent changes'); console.log(JSON.stringify(ev.extent)); });
  };

  toInitialExtent() {
    this.currentMap.setExtent(this.initialExtent);
  }

}
