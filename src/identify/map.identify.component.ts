import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { map, InfoWindowLite, InfoWindow, IdentifyParameters, IdentifyTask} from 'esri-mods';
import {DynamicHolder} from '../componentbuilder/dynamic.component.holder';
import {IdentifyResultsComponent} from './map.identify.results.component';
import {MapComponent} from '../map.component';

@Component({
	selector: 'map-identify',
	template: `	<div class='map-identify'>					
			  	</div>
			  	<div id='popup'></div>
				<digi-identify-results [results]='results' [settings]="settings.identify"></digi-identify-results>`,
	styles: ['.map-identify button { z-index: 99999999999; }',
		'.active { background-color: green; color: white; }'],
			 directives: [DynamicHolder, IdentifyResultsComponent]
})

export class MapIdentifyComponent implements OnInit {
	@Input() mapInstance: map;
	@Input() settings: any;
	@Output() onIdentify = new EventEmitter();

	isActive: boolean = false;
	results: any;

	private infoWindow: InfoWindowLite;
	private clickedPoint: any;

	ngOnInit() {

		this.onIdentify
			.subscribe(x => {
				this.results = x;
			});

		if (!this.settings || !this.settings.identify) {
			this.isActive = false;
		}

		this.infoWindow = new InfoWindowLite(null, 'popup');

		this.infoWindow.startup();
        this.mapInstance.infoWindow = this.infoWindow;
		this.infoWindow.resize(this.settings.identify.width || 310, this.settings.identify.height || 350);

		// Set content of InfoWindowLite
		this.infoWindow.setTitle(this.settings.identify.title || 'Details 2');
		this.infoWindow.setContent(document.getElementById('popup-content'));

		this.mapInstance.on('click', (ev) => {
			if (this.isActive) {

				let res = [];

				let self = this;

				this.settings.identify.urls.forEach(url => {
					// create identify tasks and setup parameters
					let identifyTask = new IdentifyTask(url);

					let identifyParams = new IdentifyParameters();
					identifyParams.tolerance = 3;
					identifyParams.returnGeometry = true;
					identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_VISIBLE;

					identifyParams.geometry = ev.mapPoint;
					identifyParams.mapExtent = self.mapInstance.extent;

					identifyTask
						.execute(identifyParams)
						.addCallback(function (response) {
							response.forEach(element => {
								res.push(element);
							});

							self.onIdentify.emit(res);
						});
				});

				this.infoWindow.show(ev.mapPoint);
			}
		});
	}

	toggle() {
		this.isActive = !this.isActive;
		this.infoWindow.hide();
	}
}
