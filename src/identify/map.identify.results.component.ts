import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {DynamicHolder} from '../componentbuilder/dynamic.component.holder';

@Component({
    selector: 'digi-identify-results',
    template: ` <div style="display:none">
                    <div id="popup-content">  
                        <div *ngIf="results && results.length>0">
                            <select (change)="selectResult($event.target.value)" *ngIf="results.length>1">
                                <option *ngFor="let result of results; let i=index" [value]="i">{{resultName(result)}}</option>                           
                            </select>                     

                            <div>
                                <dynamic-holder [entity]="currentResult" [title]="'Details'" [template]="detailTemplate" *ngIf="currentResult"></dynamic-holder>                            
                            </div> 
                        </div> 
                          <div *ngIf="!results || results.length==0">Geen resultaten gevonden</div>                                      
                    </div>
                </div>`,
    directives: [DynamicHolder]
})
export class IdentifyResultsComponent implements OnInit, OnChanges {
    @Input() settings: any;
    @Input() results: any;
    @Input() detailTemplate: string;
    currentResult: any;


    ngOnInit() {
          if (this.settings && this.settings.template && this.settings.template !== '') {
            this.detailTemplate = this.settings.template;
        } else {
            this.detailTemplate = `
                <ul>
                    <li *ngFor="let attribute of toArray(entity.feature.attributes)">
                        {{attribute?.key}} : {{attribute?.value}}
                    </li>
                </ul>`;
        }
    }  

    ngOnChanges() {

        if (this.results && this.results.length > 0) {
            this.currentResult = this.results[0];
        }
    }

    resultName(result: any) {
        return result.layerName + ': ' + result.value;
    }

    selectResult(index: number) {
        this.currentResult = this.results[index];
    }

}
