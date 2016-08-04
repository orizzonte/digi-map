import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {DynamicHolder} from '../componentbuilder/dynamic.component.holder';
import {MapSettings, IdentifyTemplate} from '../map.settings';
import {IdentifyMapServerResult, IdentifyLayerResult} from './identify.result';

@Component({
    selector: 'digi-identify-results',
    template: ` <div style="display:none">
                    <div id="popup-content">                     
                        <div *ngIf="dropDownResults && dropDownResults.length > 0">
                            <select (change)="selectResult($event.target.value)">
                                <option *ngFor="let result of dropDownResults; let i=index" [value]="i">{{resultName(result)}}</option>                           
                            </select>  

                            <dynamic-holder [entity]="currentResult" [title]="'Details'" [template]="currentTemplate" *ngIf="currentResult && currentTemplate"></dynamic-holder>                           
                        </div>                      
                       
                        <div *ngIf="!dropDownResults || dropDownResults.length==0">Geen resultaten gevonden</div>  

                    </div>
                </div>`,
    directives: [DynamicHolder]
})
export class IdentifyResultsComponent implements OnInit, OnChanges {
    @Input() settings: MapSettings;
    @Input() results: IdentifyMapServerResult[];

    @Output() changeTemplate = new EventEmitter<string>();
    currentResult: any;
    currentTemplate: string;
    dropDownResults = [];

    calculateDropDownResults() {

        if (!this.results) {
            return undefined;
        }

        let values = [];

        this.results.forEach(element => {
            element.layerResults.forEach(layer => {
                layer.data.forEach(d => {
                    values.push({ layerName: d.layerName, value: d.value, data: d, template: this.findTemplate(layer.templateId) });
                });
            });
        });

        return values;
    }

    // output() {
    //     if (!this.currentResult) {
    //         return "currentResult undefined";
    //     } else {
    //         return 'currentResult defined';
    //     }
    // }

    // outputTemplate() {
    //     if (!this.currentTemplate) {
    //         return "currentTemplate undefined";
    //     } else {
    //         return 'currentTemplate : ' + JSON.stringify(this.currentTemplate);
    //     }
    // }

    findTemplate(templateId: string) {
        return this.settings.identify.templates.find(x => x.id === templateId).html;
    }

    ngOnInit() {
        let defaultDigimapTemplate = `        
                <ul *ngIf="entity">                
                    <li *ngFor="let attribute of toArray(entity.feature.attributes)">
                        <label>{{attribute?.key}} :</label> {{attribute?.value}}
                    </li>
                </ul>`;

        this.settings.identify.templates.push(<IdentifyTemplate>{ id: 'DefaultDigiMapTemplate', html: defaultDigimapTemplate });
        // Needed to trigger the recreation of the dynamic template
        this.changeTemplate.subscribe(t => this.currentTemplate = t);
    }

    ngOnChanges() {
        this.dropDownResults = this.calculateDropDownResults();

        if (this.dropDownResults && this.dropDownResults.length > 0) {
            this.currentResult = this.dropDownResults[0].data;
            this.currentTemplate = undefined;
            this.changeTemplate.emit(this.dropDownResults[0].template);           
        } else {
            this.currentResult = undefined;
            this.currentTemplate = undefined;
        }
    }

    resultName(result: any) {
        return result.layerName + ': ' + result.value;
    }

    selectResult(index: number) {        
        this.currentResult = this.dropDownResults[index].data;
        this.currentTemplate = undefined;
        this.changeTemplate.emit(this.dropDownResults[index].template);
    }

}
