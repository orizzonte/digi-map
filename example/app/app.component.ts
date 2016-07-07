import { Component } from '@angular/core';
import { MapComponent } from 'digi-map/digi-map';

@Component({
  selector: 'my-app',
  template: '<esri-map></esri-map>',
  directives: [MapComponent]
})

export class AppComponent { }