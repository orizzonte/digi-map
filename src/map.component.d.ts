import { ElementRef, EventEmitter } from '@angular/core';
import { map, Layer } from 'esri-mods';
import { MapIdentifyComponent } from './identify/map.identify.component';
import { MapDrawComponent } from './draw/map.draw.component';
import { MapEditComponent } from './edit/map.edit.component';
import { MapNavigationComponent } from './navigation/map.navigation.component';
import { MapSettings } from './map.settings';
export declare class MapControl {
    name: string;
    control: any;
    constructor(name: any, control: any);
}
export declare class MapComponent {
    private elRef;
    settings: MapSettings;
    divId: string;
    mapLoaded: EventEmitter<{}>;
    navigation: MapNavigationComponent;
    identify: MapIdentifyComponent;
    draw: MapDrawComponent;
    edit: MapEditComponent;
    currentMap: map;
    themes: Layer[];
    controls: MapControl[];
    domElement: any;
    private useIdentifyControl;
    private useDrawControl;
    private useEditControl;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
