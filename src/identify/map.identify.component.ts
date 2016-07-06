import { Component } from '@angular/core';

@Component({
	selector: 'map-identify',
	template: '<div class="map-identify"><button (click)="onClick()">Detailgegevens</button></div>'
})
export class MapIdentityComponent {
	onClick() {
		console.log('Clicked map-identify');
	}
}