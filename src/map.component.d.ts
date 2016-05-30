import { ElementRef } from 'angular2/core';
import { Layer } from './layer';
export declare class MapComponent {
    private elRef;
    layers: Layer[];
    extent: any;
    response: any;
    options: Object;
    itemId: string;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
}
