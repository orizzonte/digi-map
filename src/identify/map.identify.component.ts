import { Component, OnInit, Input } from '@angular/core';
import { map, InfoWindowLite, InfoWindow, IdentifyParameters, IdentifyTask } from 'esri-mods';
import {DynamicHolder} from '../componentbuilder/dynamic.component.holder';
import {IdentifyResultsComponent} from './map.identify.results.component';

@Component({
	selector: 'map-identify',
	template: `	<div class='map-identify'>
					<button (click)='onClick()' [class.active]='isActive'>Detailgegevens</button>
			  	</div>
			  	<div id='popup'></div>
				<digi-identify-results [results]='results' *ngIf="results" [settings]="settings.identify"></digi-identify-results>`,
	styles: ['.map-identify button { z-index: 99999999999; }',
		'.active { background-color: green; color: white; }'],
			 directives: [DynamicHolder, IdentifyResultsComponent]
})

export class MapIdentifyComponent implements OnInit {
	@Input() mapInstance: map;
	@Input() settings: any;

	isActive: boolean = false;
	results: any = [];

	// constructor() {
	// 	//TODO: remove this initializing

	// 	this.results.push({
	// 		'layerId': 1,
	// 		'layerName': 'Innames (Grote Schaal)',
	// 		'value': 'SG-IOW-39765.03',
	// 		'displayFieldName': 'Referentie',
	// 		'geometryType': 'esriGeometryPolygon',
	// 		'feature': {
	// 			'geometry': {
	// 				'type': 'polygon',
	// 				'rings': [[[106337.439000003,
	// 					192561.120000001],
	// 					[106338.979999997,
	// 						192566.282000002],
	// 					[106348.571000002,
	// 						192563.123],
	// 					[106347.068999998,
	// 						192557.884],
	// 					[106337.439000003,
	// 						192561.120000001]]],
	// 				'_ring': 0,
	// 				'spatialReference': {
	// 					'wkid': 31370
	// 				}
	// 			},
	// 			'symbol': null,
	// 			'attributes': {
	// 				'OBJECTID': '64',
	// 				'SHAPE': 'Polygon',
	// 				'DossierId': '62',
	// 				'GipodId': 'Null',
	// 				'Referentie': 'SG-IOW-39765.03',
	// 				'Beschrijving': 'Inname werfzone / parkeerverbod',
	// 				'TrajectCode': '1',
	// 				'EpisodeCode': '160',
	// 				'Traject': 'IOW',
	// 				'Episode': 'Onbekend',
	// 				'SHAPE.STArea()': '54,844402',
	// 				'SHAPE.STLength()': '31,094177'
	// 			}
	// 		}
	// 	});

	// 	this.results.push({
	// 		'layerId': 0,
	// 		'layerName': 'Innames',
	// 		'value': 'SG-IOW-39765.03 xx',
	// 		'displayFieldName': 'Referentie',
	// 		'geometryType': 'esriGeometryPolygon',
	// 		'feature': {
	// 			'geometry': {
	// 				'type': 'polygon',
	// 				'rings': [[[106337.439000003,
	// 					192561.120000001],
	// 					[106338.979999997,
	// 						192566.282000002],
	// 					[106348.571000002,
	// 						192563.123],
	// 					[106347.068999998,
	// 						192557.884],
	// 					[106337.439000003,
	// 						192561.120000001]]],
	// 				'_ring': 0,
	// 				'spatialReference': {
	// 					'wkid': 31370
	// 				}
	// 			},
	// 			'symbol': null,
	// 			'attributes': {
	// 				'OBJECTID': '64',
	// 				'SHAPE': 'Polygon',
	// 				'DossierId': '62',
	// 				'GipodId': 'Null',
	// 				'Referentie': 'SG-IOW-39765.03 xxx',
	// 				'Beschrijving': 'Inname werfzone / parkeerverbod',
	// 				'TrajectCode': '1',
	// 				'EpisodeCode': '160',
	// 				'Traject': 'IOW',
	// 				'Episode': 'Onbekend',
	// 				'SHAPE.STArea()': '54,844402',
	// 				'SHAPE.STLength()': '31,094177'
	// 			}
	// 		}
	// 	});
	// }

	private infoWindow: InfoWindowLite;

	ngOnInit() {

		if (!this.settings || !this.settings.identify) {
			this.isActive = false;
		}

		this.infoWindow = new InfoWindowLite(null, 'popup');

		this.infoWindow.startup();
        this.mapInstance.infoWindow = this.infoWindow;
		this.infoWindow.resize(this.settings.identify.width || 310, this.settings.identify.height || 350);

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
							console.log('reposnse: ' + JSON.stringify(response));						

							response.forEach(element => {
								res.push(element);
							});	

							self.results = res;						
						});
				});


				// Set content of InfoWindowLite
				this.infoWindow.setTitle(this.settings.identify.title || 'Details');
				this.infoWindow.setContent(document.getElementById('popup-content'));

				// Show InfoWindowLite
				this.infoWindow.show(ev.mapPoint);
			}
		});
	}

	onClick() {
		this.isActive = !this.isActive;
		this.infoWindow.hide();
	}
}