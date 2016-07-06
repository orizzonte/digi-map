import { Component } from '@angular/core';

@Component({
	selector: 'map-identify',
	template: '<div class="map-identify"><button (click)="onClick()">Detailgegevens</button></div>',
	styles: ['.map-identify button { z-index: 99999999999; }']
})
export class MapIdentityComponent {
	onClick() {
		console.log('Clicked map-identify');
	}
}