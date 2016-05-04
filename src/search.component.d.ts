import { ElementRef } from 'angular2/core';
import { MapService } from './map.service';
export declare class SearchComponent {
    private elRef;
    private _mapService;
    constructor(elRef: ElementRef, _mapService: MapService);
    search: any;
    options: Object;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setMap(map: any): void;
    ngOnDestroy(): void;
}
