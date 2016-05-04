import { ElementRef } from 'angular2/core';
import { MapService } from './map.service';
export declare class LegendComponent {
    private elRef;
    private _mapService;
    constructor(elRef: ElementRef, _mapService: MapService);
    legend: any;
    init(map: any, layerInfos: any): void;
}
