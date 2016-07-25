import { Component, OnInit, Input } from '@angular/core';
import { map, edit, graphic } from 'esri-mods';
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
		this.mapInstance.disableMapNavigation();
		let graphicToEdit = this.mapInstance.graphics[0];
		this.editToolbar.activate(edit.EDIT_VERTICES, graphicToEdit);
		this.activateSubject.next(null);
	}

	deactivate() {
		this.editToolbar.deactivate();
		this.mapInstance.enableMapNavigation();
		this.deactivateSubject.next(null);
	}
}