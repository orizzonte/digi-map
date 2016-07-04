import { Component, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { map, Extent, ArcGISDynamicMapServiceLayer, ArcGISTiledMapServiceLayer, FeatureLayer, Layer, Legend, SpatialReference } from 'esri-mods';

@Component({
    selector: 'esri-map',
    template: '<div id="map"><ng-content></ng-content></div>'
})

export class MapComponent {
    @Input() settings: any;
    @Output() mapLoaded = new EventEmitter();

    currentMap: map;
    layers: Layer[] = [];

    private initialExtent: Extent;

    constructor(private elRef: ElementRef) {}

    ngOnInit() {

        let self = this;

        this.currentMap = new map('map');

        this.currentMap.on('layers-add-result', function(evt) {

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

        // Check if layers is defined
        if (this.settings.layers !== undefined) {
            this.settings.layers.forEach((layer) => {
              if(layer.type === 'dynamic') {
                this.layers.push(new ArcGISDynamicMapServiceLayer(layer.url));
              } else {
                this.layers.push(new ArcGISTiledMapServiceLayer(layer.url)); 
              }
            });

            this.currentMap.addLayers(this.layers);
        }

        // Check if extent is defined
        if (this.settings.extent !== undefined) {
            this.initialExtent = new Extent({
                xmin: this.settings.extent[0],
                ymin: this.settings.extent[1],
                xmax: this.settings.extent[2],
                ymax: this.settings.extent[3],
                spatialReference: new SpatialReference({ wkid: 31370 })
            });

            this.currentMap.setExtent(this.initialExtent);
        }

        this.currentMap.on('load', function(ev) { console.log('map loaded'); });
    };

    toInitialExtent() {
        this.currentMap.setExtent(this.initialExtent);
    }

}
