import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TogglerComponent} from '../ui/toggler/toggler';
import {Extent} from 'esri-mods';
import {MapSettings} from '../map.settings';

@Component({
    selector: 'map-menu',
    template: `<digi-toggler icon='build'>
                    <div class="tabs">
                        <tabset class="tabs-kaart-knoppen">
                            <tab heading="Werkbalk">
                                <accordion [closeOthers]="oneAtATime">
                                    <accordion-group #group [isOpen]="status.open">
                                        <div accordion-heading>
                                            Navigatie
                                            <i class="material-icons" *ngIf="!group?.isOpen">keyboard_arrow_down</i>
                                        </div>
                                        <ul class="knoppen">
                                            <!--<li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Meet afstand"><i class="material-icons">straighten</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Meet opp."><i class="material-icons">photo_size_select_small</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Slepen"><i class="material-icons">pan_tool</i></button></li>-->
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Begin positie kaart" (click)="toInitialExtent.emit($event)"><i class="material-icons">pin_drop</i></button></li>
                                            <!--<li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Vorige positie kaart"><i class="material-icons">settings_backup_restore</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Handleiding"><i class="material-icons">description</i></button></li>-->
                                            <li *ngIf="canShowButton('identify')"><button [class]="identifyActive ? 'btn-kaart active' : 'btn-kaart'" tooltipPlacement="bottom" tooltip="Detailgegevens" (click)="toggleIdentify.emit($event)"><i class="material-icons">info</i></button></li>
                                            <!--<li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Afdrukken"><i class="material-icons">print</i></button></li>-->
                                        </ul>
                                    </accordion-group>
                                    <!--<accordion-group #group [isOpen]="status.open">
                                        <div accordion-heading>
                                            Tekenen
                                            <i class="material-icons" *ngIf="!group?.isOpen">keyboard_arrow_down</i>
                                        </div>
                                        <ul class="knoppen">
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Punt"><i class="material-icons">border_clear</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Lijn"><i class="material-icons">border_top</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Vlak"><i class="material-icons">border_outer</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Vrij tekenen"><i class="material-icons">&#xE6E1;</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Rechthoeken"><i class="material-icons">check_box_outline_blank</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Cirkels"><i class="material-icons">radio_button_unchecked</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Ellips"><i class="material-icons ovaal">radio_button_unchecked</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Pijl"><i class="material-icons">arrow_forward</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Wijzig"><i class="material-icons">mode_edit</i></button></li>
                                            <li><button class="btn-kaart" tooltipPlacement="bottom" tooltip="Verwijder"><i class="material-icons">delete_forever</i></button></li>
                                        </ul>
                                    </accordion-group>-->
                                </accordion>
                            </tab>
                            <tab heading="Kaartlagen">
                                <div class="layerlist"></div>
                            </tab>
                        </tabset>		
                    </div>
                </digi-toggler>`,
    // directives: [TOOLTIP_DIRECTIVES, TAB_DIRECTIVES, TogglerComponent, ACCORDION_DIRECTIVES]
})
export class MapMenuComponent {
    @Input() settings: MapSettings;
    @Output() toInitialExtent = new EventEmitter();
    @Output() toggleIdentify = new EventEmitter();

    public oneAtATime: boolean = true;
    public identifyActive: boolean = false;

    constructor() {
        this.toggleIdentify.subscribe(x => this.identifyActive = !this.identifyActive);
    }

    public status: Object = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    public canShowButton(controlName: string) {

        if (!this.settings || !this.settings.controls) {
            return false;
        }

        return this.settings.controls.indexOf(controlName) !== -1;
    }
}
