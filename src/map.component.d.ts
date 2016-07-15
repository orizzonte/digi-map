import { ElementRef, EventEmitter } from '@angular/core';
import { map, Layer } from 'esri-mods';
import { MapDrawComponent } from './draw/map.draw.component';
import { MapEditComponent } from './edit/map.edit.component';
export declare class MapControl {
    name: string;
    control: any;
    constructor(name: any, control: any);
}
export declare class MapComponent {
    private elRef;
    settings: any;
    mapLoaded: EventEmitter<{}>;
    draw: MapDrawComponent;
    edit: MapEditComponent;
    currentMap: map;
    layers: Layer[];
    controls: MapControl[];
    private initialExtent;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    toInitialExtent(): void;
}
