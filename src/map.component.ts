import { Component, ElementRef, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { map, Extent, ArcGISDynamicMapServiceLayer, ArcGISTiledMapServiceLayer, FeatureLayer, Layer, Legend, SpatialReference } from 'esri-mods';
import { MapIdentityComponent } from './identify/map.identify.component';
import { MapDrawComponent } from './draw/map.draw.component';
import { MapEditComponent } from './edit/map.edit.component';

export class MapControl {
    name: string;
    control: any;

    constructor(name, control) {
        this.name = name;
        this.control = control;
    }
}

@Component({
    selector: 'esri-map',
    template: ` <div id="map">
                    <map-identify [mapInstance]="currentMap"></map-identify>
                    <map-draw [mapInstance]="currentMap"></map-draw>
                    <map-edit [mapInstance]="currentMap"></map-edit>
                    <ng-content></ng-content>
                </div>`,
    directives: [MapIdentityComponent, MapDrawComponent, MapEditComponent]
})
export class MapComponent {
    @Input() settings: any;
    @Output() mapLoaded = new EventEmitter();

    @ViewChild(MapDrawComponent) draw: MapDrawComponent;
    @ViewChild(MapEditComponent) edit: MapEditComponent;

    currentMap: map;
    layers: Layer[] = [];
    controls: MapControl[] = [];

    private initialExtent: Extent;

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        this.controls.push(new MapControl('draw', this.draw));
        this.controls.push(new MapControl('edit', this.edit));
    }

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
