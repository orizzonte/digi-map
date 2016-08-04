import { OnInit } from '@angular/core';
import { map, Extent } from 'esri-mods';
import { MapSettings } from '../map.settings';
export declare class MapNavigationComponent implements OnInit {
    mapInstance: map;
    settings: MapSettings;
    private initialExtent;
    toInitialExtent(): void;
    zoomToExtent(extent: Extent): void;
    ngOnInit(): void;
}
