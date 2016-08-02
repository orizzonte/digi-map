import { OnInit, EventEmitter } from '@angular/core';
import { map } from 'esri-mods';
export declare class MapIdentifyComponent implements OnInit {
    mapInstance: map;
    settings: any;
    onIdentify: EventEmitter<{}>;
    isActive: boolean;
    results: any;
    private infoWindow;
    private clickedPoint;
    ngOnInit(): void;
    toggle(): void;
}
