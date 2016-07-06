import { ElementRef, EventEmitter } from '@angular/core';
import { map, Layer } from 'esri-mods';
export declare class MapComponent {
    private elRef;
    settings: any;
    mapLoaded: EventEmitter<{}>;
    currentMap: map;
    layers: Layer[];
    private initialExtent;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    toInitialExtent(): void;
}
