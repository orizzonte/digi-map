import { Component, OnInit, Input } from '@angular/core';
import { map, draw, graphic, SimpleLineSymbol, SimpleFillSymbol } from 'esri-mods';
import { Subject, Observable } from 'rxjs/Rx';

export enum GeometryType {
	Point = 1,
	Multiline = 2
}

@Component({
	selector: 'map-draw',
	template: '<div></div>'
})
export class MapDrawComponent implements OnInit {
	@Input() mapInstance: map;

	// Observables
	onActivate: Observable<any>;
	onDeactivate: Observable<any>;
	onDrawComplete: Observable<any>;

	private activateSubject = new Subject<any>();
	private deactivateSubject = new Subject<any>();
	private drawCompleteSubject = new Subject<any>();
	private drawToolbar: draw;

	constructor() {
		// Setup the observables
		this.onActivate = this.activateSubject.asObservable();
		this.onDeactivate = this.deactivateSubject.asObservable();
		this.onDrawComplete = this.drawCompleteSubject.asObservable();
	}

	ngOnInit() {
		// Create draw toolbar and add to map
		this.drawToolbar = new draw(this.mapInstance);

		// Add shape to map
        this.drawToolbar.on('draw-complete', (ev) => {
    	    let symbol;
            switch (ev.geometry.type) {
                case 'polyline':
                    symbol = new SimpleLineSymbol();
                    break;
                default:
                    symbol = new SimpleFillSymbol();
                    break;
            }

            let shape = new graphic(ev.geometry, symbol);
            this.mapInstance.graphics.add(shape);
        	
        	this.deactivate();
        	this.drawCompleteSubject.next(ev);
        });
	}

	activate(geometryType: GeometryType) {
		this.mapInstance.disableMapNavigation();

		switch(geometryType) {
			case GeometryType.Multiline:
				this.drawToolbar.activate(draw.POLYLINE);
				break;
			default:
				break;
		}

		this.activateSubject.next(null);
	}

	deactivate() {
		this.drawToolbar.deactivate();
		this.mapInstance.enableMapNavigation();
		this.deactivateSubject.next(null);
	}

	finishDrawing() {
		this.drawToolbar.finishDrawing();
	}
}