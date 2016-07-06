import { Component } from '@angular/core';

@Component({
	selector: 'map-identify',
	template: '<div><button (click)="onClick()">Detailgegevens</button></div>'
})
export class MapIdentityComponent {
	onClick() {
		console.log('Clicked map-identify');
	}
}