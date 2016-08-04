import { OnInit, EventEmitter } from '@angular/core';
import { map } from 'esri-mods';
import { MapSettings } from '../map.settings';
import { IdentifyMapServerResult } from './identify.result';
export declare class MapIdentifyComponent implements OnInit {
    mapInstance: map;
    settings: MapSettings;
    onIdentify: EventEmitter<IdentifyMapServerResult>;
    isActive: boolean;
    results: IdentifyMapServerResult[];
    private infoWindow;
    private clickedPoint;
    ngOnInit(): void;
    toggle(): void;
}
