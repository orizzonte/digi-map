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
                        <div *ngIf="!dropDownResults">Bezig met ophalen van gegevens...</div>  
                        <div *ngIf="dropDownResults && dropDownResults.length==0">Geen resultaten gevonden</div>  

                    </div>
                </div>`    
})
export class IdentifyResultsComponent implements OnInit, OnChanges {
    @Input() settings: MapSettings;
    @Input() results: IdentifyMapServerResult[];

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
                    let val = { layerName: d.layerName, value: d.value, data: d, template: this.findTemplate(layer.templateId) };
                    values.push(val);
                    // console.log(d.layerName + ' val ' + d.value + ' templ ' + val.template);
                    // console.log('data ' + JSON.stringify(d));
                });
            });
        });

        return values;
    }

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
    }

    ngOnChanges() {
        this.dropDownResults = this.calculateDropDownResults();

        if (this.dropDownResults && this.dropDownResults.length > 0) {
            this.currentResult = this.dropDownResults[0].data;
            this.currentTemplate = this.dropDownResults[0].template;           
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
        this.currentTemplate = this.dropDownResults[index].template;       
    }

}
