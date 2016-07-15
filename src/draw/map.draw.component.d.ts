import { OnInit } from '@angular/core';
import { map } from 'esri-mods';
import { Observable } from 'rxjs/Rx';
export declare enum GeometryType {
    Point = 1,
    Multiline = 2,
}
export declare class MapDrawComponent implements OnInit {
    mapInstance: map;
    onActivate: Observable<any>;
    onDeactivate: Observable<any>;
    onDrawComplete: Observable<any>;
    private activateSubject;
    private deactivateSubject;
    private drawCompleteSubject;
    private drawToolbar;
    constructor();
    ngOnInit(): void;
    activate(geometryType: GeometryType): void;
    deactivate(): void;
    finishDrawing(): void;
}
