import { Component, OnInit, Input } from '@angular/core';
import { map, InfoWindowLite, InfoWindow } from 'esri-mods';

@Component({
	selector: 'map-identify',
	template: `	<div class="map-identify">
					<button (click)="onClick()" [class.active]="isActive">Detailgegevens</button>
			  	</div>
			  	<div id="popup"></div>`,
	styles: ['.map-identify button { z-index: 99999999999; }', 
			 '.active { background-color: green; color: white; }']
})

export class MapIdentityComponent implements OnInit {
	@Input() mapInstance: map;
	isActive: boolean = false;

	private infoWindow: InfoWindowLite;

	ngOnInit() {
		this.infoWindow = new InfoWindowLite(null, 'popup');
		
		this.infoWindow.startup();
        this.mapInstance.infoWindow = this.infoWindow;

		this.mapInstance.on('click', (ev) => {
			if(this.isActive) {
				// Set content of InfoWindowLite
				this.infoWindow.setTitle('Titel');
				this.infoWindow.setContent('<span>' + ev.mapPoint.x + ', ' + ev.mapPoint.y + '</span>');

				// Show InfoWindowLite
				this.infoWindow.show(ev.mapPoint, InfoWindow.ANCHOR_UPPERRIGHT);
			}
		});
	}
	
	onClick() {
		this.isActive = !this.isActive;
		this.infoWindow.hide();
	}
}