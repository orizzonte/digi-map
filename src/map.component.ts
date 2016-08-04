import { Component, ElementRef, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { map, Extent, ArcGISDynamicMapServiceLayer, ArcGISTiledMapServiceLayer, FeatureLayer, Layer, Legend, SpatialReference } from 'esri-mods';
import { MapIdentifyComponent } from './identify/map.identify.component';
import { MapDrawComponent } from './draw/map.draw.component';
import { MapEditComponent } from './edit/map.edit.component';
import { MapMenuComponent } from './menu/map.menu.component';
import { MapNavigationComponent } from './navigation/map.navigation.component';
import { MapSettings } from './map.settings';


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
                    <map-navigation [mapInstance]="currentMap" [settings]="settings"></map-navigation>
                    <map-identify *ngIf="useIdentifyControl" [mapInstance]="currentMap" [settings]="settings"></map-identify>
                    <map-draw *ngIf="useDrawControl" [mapInstance]="currentMap"></map-draw>
                    <map-edit *ngIf="useEditControl" [mapInstance]="currentMap"></map-edit> 
                    <ng-content></ng-content>
                    <map-menu [settings]="settings"
                        (toInitialExtent)="navigation.toInitialExtent($event)"
                        (toggleIdentify)="identify.toggle($event)">
                    </map-menu>
                </div>`,
    directives: [MapIdentifyComponent, MapDrawComponent, MapEditComponent, MapMenuComponent, MapNavigationComponent]
})
export class MapComponent {
    @Input() settings: MapSettings;
    @Output() mapLoaded = new EventEmitter();

    @ViewChild(MapNavigationComponent) navigation: MapNavigationComponent;
    @ViewChild(MapIdentifyComponent) identify: MapIdentifyComponent;
    @ViewChild(MapDrawComponent) draw: MapDrawComponent;
    @ViewChild(MapEditComponent) edit: MapEditComponent;

    currentMap: map;
    themes: Layer[] = [];
    controls: MapControl[] = [];

    private useIdentifyControl = false;
    private useDrawControl = false;
    private useEditControl = false;

    constructor(private elRef: ElementRef) { }

    ngAfterViewInit() {
        this.controls.push(new MapControl('navigation', this.navigation));

        if (this.useIdentifyControl) {
            this.controls.push(new MapControl('identify', this.identify));
        }
        if (this.useDrawControl) {
            this.controls.push(new MapControl('draw', this.draw));
        }
        if (this.useEditControl) {
            this.controls.push(new MapControl('edit', this.edit));
        }
    }

    ngOnInit() {
        let self = this;

        this.currentMap = new map('map');

        // Apply map controls
        if (this.settings.controls.indexOf('identify') !== -1) {
            this.useIdentifyControl = true;
        }
        if (this.settings.controls.indexOf('draw') !== -1) {
            this.useDrawControl = true;
        }
        if (this.settings.controls.indexOf('edit') !== -1) {
            this.useEditControl = true;
        }

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
                respectCurrentMapScale: true,
                layerInfos: allLayerInfos
            }, 'legend');

            legendDijit.startup();

        });

        // Check if themes is defined
        if (this.settings.themes !== undefined) {
            this.settings.themes.forEach((theme) => {

                switch (theme.type) {
                    case 'dynamic':
                        this.themes.push(new ArcGISDynamicMapServiceLayer(theme.url));
                        break;
                    case 'tiled':
                        this.themes.push(new ArcGISTiledMapServiceLayer(theme.url));
                        break;
                }
            });

            this.currentMap.addLayers(this.themes);
        }

        this.currentMap.on('load', function (ev) { console.log('map loaded'); });
    };
}
