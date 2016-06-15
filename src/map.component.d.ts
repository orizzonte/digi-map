import { ElementRef, EventEmitter } from '@angular/core';
import { map, Extent, Layer } from 'esri-mods';
export declare class MapComponent {
    private elRef;
    layers: Layer[];
    extent: Extent;
    mapLoaded: EventEmitter<{}>;
    response: any;
    options: Object;
    itemId: string;
    private initialExtent;
    currentMap: map;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    toInitialExtent(): void;
}
