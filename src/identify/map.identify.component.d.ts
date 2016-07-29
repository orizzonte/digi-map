import { OnInit } from '@angular/core';
import { map } from 'esri-mods';
export declare class MapIdentifyComponent implements OnInit {
    mapInstance: map;
    settings: any;
    isActive: boolean;
    results: any;
    private infoWindow;
    ngOnInit(): void;
    onClick(): void;
}
