import { ElementRef, EventEmitter } from 'angular2/core';
import { MapService } from './map.service';
export declare class MapComponent {
    private elRef;
    private _mapService;
    mapLoaded: EventEmitter<{}>;
    response: any;
    options: Object;
    itemId: string;
    constructor(elRef: ElementRef, _mapService: MapService);
    ngOnInit(): void;
}
