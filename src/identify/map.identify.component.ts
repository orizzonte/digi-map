import { Component, OnInit, Input } from '@angular/core';
import { map } from 'esri-mods';

@Component({
	selector: 'map-identify',
	template: `	<div class="map-identify">
					<button (click)="onClick()">Detailgegevens</button>
					<span>Actief: {{active}}</span>
			  	</div>`,
	styles: ['.map-identify butto { z-index: 99999999999; }']
})

export class MapIdentityComponent implements OnInit {
	@Input() mapInstance: map;
	active: boolean = false;

	ngOnInit() {
		this.mapInstance.on('click', (ev) => {
			console.log('clicked on map');
			console.log(ev);
		});
	}

	onClick() {
		console.log('Toggle map-identify');
		this.active = !this.active;
	}
}