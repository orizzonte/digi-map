import { OnInit } from '@angular/core';
import { map } from 'esri-mods';
import { Observable } from 'rxjs/Rx';
export declare class MapEditComponent implements OnInit {
    mapInstance: map;
    onActivate: Observable<any>;
    onDeactivate: Observable<any>;
    private activateSubject;
    private deactivateSubject;
    private editToolbar;
    constructor();
    ngOnInit(): void;
    activate(): void;
    deactivate(): void;
}
