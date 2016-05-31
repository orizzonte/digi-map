import { ElementRef } from 'angular2/core';
import { Extent } from 'esri-mods';
import { MapLayer } from './layer';
export declare class MapComponent {
    private elRef;
    layers: MapLayer[];
    extent: Extent;
    response: any;
    options: Object;
    itemId: string;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
}
