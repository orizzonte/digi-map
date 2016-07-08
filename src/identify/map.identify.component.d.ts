import { OnInit } from '@angular/core';
import { map } from 'esri-mods';
export declare class MapIdentityComponent implements OnInit {
    mapInstance: map;
    isActive: boolean;
    private infoWindow;
    ngOnInit(): void;
    onClick(): void;
}
