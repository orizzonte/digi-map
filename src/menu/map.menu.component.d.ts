import { EventEmitter } from '@angular/core';
export declare class MapMenuComponent {
    settings: any;
    toInitialExtent: EventEmitter<{}>;
    toggleIdentify: EventEmitter<{}>;
    oneAtATime: boolean;
    identifyActive: boolean;
    constructor();
    status: Object;
    canShowButton(controlName: string): boolean;
}
