import { OnInit, OnChanges } from '@angular/core';
import { MapSettings } from '../map.settings';
import { IdentifyMapServerResult } from './identify.result';
export declare class IdentifyResultsComponent implements OnInit, OnChanges {
    settings: MapSettings;
    results: IdentifyMapServerResult[];
    currentResult: any;
    currentTemplate: string;
    dropDownResults: any[];
    calculateDropDownResults(): any[];
    findTemplate(templateId: string): string;
    ngOnInit(): void;
    ngOnChanges(): void;
    resultName(result: any): string;
    selectResult(index: number): void;
}
