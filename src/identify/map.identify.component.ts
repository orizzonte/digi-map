import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { map, InfoWindowLite, InfoWindow, IdentifyParameters, IdentifyTask} from 'esri-mods';
import {DynamicHolder} from '../componentbuilder/dynamic.component.holder';
import {IdentifyResultsComponent} from './map.identify.results.component';
import {MapComponent} from '../map.component';
import {MapSettings, Theme} from '../map.settings';
import {IdentifyMapServerResult, IdentifyLayerResult} from './identify.result';

@Component({
	selector: 'map-identify',
	template: `	<div class='map-identify'>					
			  	</div>
			  	<div id='popup'></div>
				<digi-identify-results [results]='results' [settings]="settings"></digi-identify-results>`			
})

export class MapIdentifyComponent implements OnInit {
	@Input() mapInstance: map;
	@Input() settings: MapSettings;
	@Output() onIdentify = new EventEmitter<IdentifyMapServerResult>();

	isActive: boolean = false;
	results: IdentifyMapServerResult[];

	private infoWindow: InfoWindowLite;
	private clickedPoint: any;

	ngOnInit() {
		// Making sure we always change the array ref to trigger angulars change detection
		this.onIdentify.subscribe(res => {
			let newResults: IdentifyMapServerResult[] = [];
			let themesettings = this.settings;

			if (this.results) {
				this.results.forEach(element => {
					newResults.push(element);
				});
			}

			newResults.push(res);

			//  Caclulate templates
			newResults.forEach(element => {
				let currentTheme = themesettings.themes.find(t => t.url === element.url);

				element.layerResults.forEach(layer => {
					let templateMapping = currentTheme.identifyTemplateMappings.find(m => m.layerId === layer.layerId);
					layer.templateId = templateMapping ? templateMapping.templateId : 'DefaultDigiMapTemplate';
					// console.log('lyer template mapping: ' + layer.templateId);
				});
			});

			this.results = newResults;
		});

		if (!this.settings || !this.settings.identify) {
			this.isActive = false;
		}

		this.infoWindow = new InfoWindowLite(null, 'popup');

		this.infoWindow.startup();
		this.mapInstance.infoWindow = this.infoWindow;
		this.infoWindow.resize(this.settings.identify.width || 310, this.settings.identify.height || 350);

		// Set content of InfoWindowLite
		this.infoWindow.setTitle(this.settings.identify.title || 'Details');
		this.infoWindow.setContent(document.getElementById('popup-content'));

		this.mapInstance.on('click', (ev) => {
			if (this.isActive) {
				let self = this;
				this.results = undefined;

				this.settings.themes.filter(f => f.identifyable || false).forEach(theme => {
					var identifyResult = <IdentifyMapServerResult>{ url: theme.url, layerResults: [] };

					// create identify tasks and setup parameters
					let identifyTask = new IdentifyTask(theme.url);
					let identifyParams = new IdentifyParameters();

					identifyParams.tolerance = 3;
					identifyParams.returnGeometry = true;
					identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_VISIBLE;

					identifyParams.geometry = ev.mapPoint;
					identifyParams.mapExtent = self.mapInstance.extent;

					// callback proxy to pass along the identifyResult
					var callbackProxy = function (response) {
						callbackFunc(response, identifyResult);
						self.onIdentify.emit(identifyResult);
					};

					identifyTask
						.execute(identifyParams)
						.addCallback(callbackProxy);
				});

				this.infoWindow.show(ev.mapPoint);
			}
		});

		function callbackFunc(response, identifyResult: IdentifyMapServerResult) {

			// console.log('callbackFunc result ' + JSON.stringify(response));

			response.forEach(element => {
				var layerResult = identifyResult.layerResults.find(x => x.layerId === element.layerId);

				if (!layerResult) {
					layerResult = <IdentifyLayerResult>{ layerId: element.layerId, data: [] };
					identifyResult.layerResults.push(layerResult);
				}

				layerResult.data.push(element);
			});
		}
	}

	toggle() {
		this.isActive = !this.isActive;
		this.infoWindow.hide();
	}
}

