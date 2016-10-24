import { Component, ElementRef, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { map, Extent, config, ArcGISDynamicMapServiceLayer, ArcGISTiledMapServiceLayer, WMTSLayer, WMTSLayerInfo, FeatureLayer, Layer, Legend, SpatialReference, LayerList, LayerListOptions, utils } from 'esri-mods';
import { MapIdentifyComponent } from './identify/map.identify.component';
import { MapDrawComponent } from './draw/map.draw.component';
import { MapEditComponent } from './edit/map.edit.component';
import { MapMenuComponent } from './menu/map.menu.component';
import { MapFilterComponent } from './filter/map.filter.component';
import { MapNavigationComponent } from './navigation/map.navigation.component';
import { MapSettings } from './map.settings';
declare var $: any;

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
    template: ` <div id='map' [id]="divId">
                    <div class="map-loading" *ngIf="isLoading" style="position: absolute; z-index: 99999999999;">Bezig met laden...</div>
                    <map-navigation [mapInstance]="currentMap" [settings]="settings"></map-navigation>
                    <map-filter [mapInstance]="currentMap" [settings]="settings" [dynamicLayers]="dynamicLayers"></map-filter>
                    <map-identify *ngIf="useIdentifyControl" [mapInstance]="currentMap" [settings]="settings"></map-identify>
                    <map-draw *ngIf="useDrawControl" [mapInstance]="currentMap"></map-draw>
                    <map-edit *ngIf="useEditControl" [mapInstance]="currentMap"></map-edit> 
                    <ng-content></ng-content>
                    <map-menu [settings]="settings"
                        (toInitialExtent)="navigation.toInitialExtent($event)"
                        (toggleIdentify)="identify.toggle($event)">
                    </map-menu>
                </div>`,
    directives: [MapIdentifyComponent, MapDrawComponent, MapEditComponent, MapMenuComponent, MapNavigationComponent, MapFilterComponent]
})
export class MapComponent {
    @Input() settings: MapSettings;
    @Input() divId: string = 'map';
    @Output() mapLoaded = new EventEmitter();

    @ViewChild(MapNavigationComponent) navigation: MapNavigationComponent;
    @ViewChild(MapIdentifyComponent) identify: MapIdentifyComponent;
    @ViewChild(MapDrawComponent) draw: MapDrawComponent;
    @ViewChild(MapEditComponent) edit: MapEditComponent;
    @ViewChild(MapFilterComponent) filter: MapFilterComponent;

    currentMap: map;
    themes: Layer[] = [];
    controls: MapControl[] = [];
    dynamicLayers : ArcGISDynamicMapServiceLayer[] = [];
    domElement: any;
    isLoading: boolean = false;
    layerListDomElement: any;

    private useIdentifyControl = false;
    private useDrawControl = false;
    private useEditControl = false;

    constructor(private elRef: ElementRef) {
        this.domElement = elRef.nativeElement;
    }
    
    ngAfterViewInit() {
        this.controls.push(new MapControl('navigation', this.navigation));
        this.controls.push(new MapControl('filter', this.filter));

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

        this.currentMap = new map(this.divId === 'map' ? 'map' : this.domElement);
        this.layerListDomElement = $(this.domElement).find('.layerlist')[0];

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
            var layerListOptions: LayerListOptions = {
                map: self.currentMap,
                layers: utils.getLayerList(this.currentMap),
                removeUnderscores: true,
                showLegend: true
            };
            
            
            var layerList = new LayerList(layerListOptions, self.layerListDomElement);
            layerList.startup();
        });

        // Check if themes is defined
        if (this.settings.themes !== undefined) {
            this.settings.themes.forEach((theme) => {

                let options = { visible: !(theme.hideOnStartup || false), maxImageHeight: 265, maxImageWidth: 265 };

                switch (theme.type) {
                    case 'dynamic':
                        let dynamicLayer = new ArcGISDynamicMapServiceLayer(theme.url, options);
                        dynamicLayer.id = theme.title;                        
                        this.themes.push(dynamicLayer);
                        this.dynamicLayers.push(dynamicLayer);
                        break;
                    case 'tiled':
                        let tiledLayer = new ArcGISTiledMapServiceLayer(theme.url, options);
                        tiledLayer.id = theme.title;
                        this.themes.push(tiledLayer);
                        break;
                    case 'wmts':
                        if (this.settings.proxy) {
                            config.defaults.io.proxyUrl = this.settings.proxy;
                        }

                        let layerInfo = new WMTSLayerInfo({
                            identifier: theme.identifier,
                            // tileMatrixSet: 'Belgian Lambert 72 - SG',
                            format: 'png'
                        });

                        let wmtsOptions = {
                            serviceMode: 'KVP',
                            layerInfo: layerInfo,
                            visible: options.visible
                        };

                        let wmtsLayer = new WMTSLayer(theme.url, wmtsOptions);
                        wmtsLayer.id = theme.title;
                        this.themes.push(wmtsLayer);
                        break;
                }
            });

            this.currentMap.addLayers(this.themes);
        }

        this.currentMap.on('update-start', function (ev) {
            self.isLoading = true;
        });

        this.currentMap.on('update-end', function (ev) {
            self.isLoading = false;
        });

        this.currentMap.on('load', function (ev) { 
            console.log('map loaded'); 
        });
    };
}
