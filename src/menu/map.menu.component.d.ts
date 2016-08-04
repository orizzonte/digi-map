import { EventEmitter } from '@angular/core';
import { MapSettings } from '../map.settings';
export declare class MapMenuComponent {
    settings: MapSettings;
    toInitialExtent: EventEmitter<{}>;
    toggleIdentify: EventEmitter<{}>;
    oneAtATime: boolean;
    identifyActive: boolean;
    constructor();
    status: Object;
    canShowButton(controlName: string): boolean;
}
