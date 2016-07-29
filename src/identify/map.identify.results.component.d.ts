import { OnInit, OnChanges } from '@angular/core';
export declare class IdentifyResultsComponent implements OnInit, OnChanges {
    settings: any;
    results: any;
    detailTemplate: string;
    currentResult: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    resultName(result: any): string;
    selectResult(index: number): void;
}
