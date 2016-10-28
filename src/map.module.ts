import { TogglerComponent } from './ui/toggler/toggler';
import { IdentifyResultsComponent } from './identify/map.identify.results.component';
import { DynamicHolder } from './componentbuilder/dynamic.component.holder';
import { CustomComponentBuilder } from './componentbuilder/custom.component.builder';
import { MapNavigationComponent } from './navigation/map.navigation.component';
import { MapMenuComponent } from './menu/map.menu.component';
import { MapFilterComponent } from './filter/map.filter.component';
import { MapEditComponent } from './edit/map.edit.component';
import { MapDrawComponent } from './draw/map.draw.component';
import { MapIdentifyComponent } from './identify/map.identify.component';
import { NgModule, ModuleWithProviders, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import {Ng2BootstrapModule} from 'ng2-bootstrap';

@NgModule({
    imports: [CommonModule, BrowserModule, FormsModule, Ng2BootstrapModule],
    declarations: [MapComponent,
        MapIdentifyComponent,
        MapDrawComponent,
        MapEditComponent,
        MapFilterComponent,
        MapMenuComponent,
        MapNavigationComponent,
        CustomComponentBuilder, 
        DynamicHolder,
        IdentifyResultsComponent, 
        TogglerComponent],
    exports: [MapComponent],
    entryComponents: [MapComponent]
})
export class MapModule {
}
