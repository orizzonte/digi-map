import { Component, OnInit, Input } from '@angular/core';
import { map, edit, graphic, SimpleLineSymbol, Color } from 'esri-mods';
import { Subject, Observable } from 'rxjs/Rx';

@Component({
	selector: 'map-edit',
	template: '<div></div>'
})
export class MapEditComponent implements OnInit {
	@Input() mapInstance: map;

	// Observables
	onActivate: Observable<any>;
	onDeactivate: Observable<any>;

	private activateSubject = new Subject<any>();
	private deactivateSubject = new Subject<any>();
	private editToolbar: edit;

	constructor() {
		// Setup the observables
		this.onActivate = this.activateSubject.asObservable();
		this.onDeactivate = this.deactivateSubject.asObservable();
	}

	ngOnInit() {
		// Create edit toolbar and add to map
		this.editToolbar = new edit(this.mapInstance);
	}

	activate() {
		let graphicToEdit = this.mapInstance.graphics.graphics[0];
		this.editToolbar.activate(edit.EDIT_VERTICES, graphicToEdit,
			{
				boxLineSymbol: new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new Color('ff2800'), 2),
				ghostLineSymbol: new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new Color('ff2800'), 2)
			});

		this.activateSubject.next(null);
	}

	deactivate() {
		this.editToolbar.deactivate();
		this.deactivateSubject.next(null);
	}
}