import { ElementRef, EventEmitter } from 'angular2/core';
import { Extent, Layer } from 'esri-mods';
export declare class MapComponent {
    private elRef;
    layers: Layer[];
    extent: Extent;
    mapLoaded: EventEmitter<{}>;
    response: any;
    options: Object;
    itemId: string;
    private initialExtent;
    private currentMap;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    toInitialExtent(): void;
}
