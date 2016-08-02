import { OnInit } from '@angular/core';
import { map, Extent } from 'esri-mods';
export declare class MapNavigationComponent implements OnInit {
    mapInstance: map;
    settings: any;
    private initialExtent;
    toInitialExtent(): void;
    zoomToExtent(extent: Extent): void;
    ngOnInit(): void;
}
