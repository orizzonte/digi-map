import { OnInit } from '@angular/core';
import { map } from 'esri-mods';
export declare class MapIdentityComponent implements OnInit {
    mapInstance: map;
    active: boolean;
    ngOnInit(): void;
    onClick(): void;
}
