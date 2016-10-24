import { OnInit } from '@angular/core';
import { map, ArcGISDynamicMapServiceLayer } from 'esri-mods';
import { MapSettings } from '../map.settings';
import { LayerFilter } from './map.filter';
export declare class MapFilterComponent implements OnInit {
    mapInstance: map;
    settings: MapSettings;
    dynamicLayers: ArcGISDynamicMapServiceLayer[];
    ngOnInit(): void;
    setFilter(filter: LayerFilter): void;
}
