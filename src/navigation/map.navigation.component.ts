import { Component, OnInit, Input } from '@angular/core';
import { map, Extent, SpatialReference } from 'esri-mods';
import { Subject, Observable } from 'rxjs/Rx';
import { MapSettings } from '../map.settings';

@Component({
    selector: 'map-navigation',
    template: ''
})
export class MapNavigationComponent implements OnInit {
    @Input() mapInstance: map;
    @Input() settings: MapSettings;
    private initialExtent: Extent;

    toInitialExtent() {
        this.zoomToExtent(this.initialExtent);
    }

    zoomToExtent(extent: Extent) {
        this.mapInstance.setExtent(extent);
    }

    ngOnInit() {
        // Check if extent is defined
        if (this.settings.extent !== undefined) {
            this.initialExtent = new Extent({
                xmin: this.settings.extent.xmin,
                ymin: this.settings.extent.ymin,
                xmax: this.settings.extent.xmax,
                ymax: this.settings.extent.ymax,
                spatialReference: new SpatialReference({ wkid: 31370 })
            });

            this.zoomToExtent(this.initialExtent);
        }
    }

}
