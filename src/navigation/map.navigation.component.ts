import { Component, OnInit, Input } from '@angular/core';
import { map, Extent, SpatialReference } from 'esri-mods';
import { Subject, Observable } from 'rxjs/Rx';

@Component({
    selector: 'map-navigation',
    template: ''
})
export class MapNavigationComponent implements OnInit {
    @Input() mapInstance: map;
    @Input() settings: any;
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
                xmin: this.settings.extent[0],
                ymin: this.settings.extent[1],
                xmax: this.settings.extent[2],
                ymax: this.settings.extent[3],
                spatialReference: new SpatialReference({ wkid: 31370 })
            });

            this.zoomToExtent(this.initialExtent);
        }
    }

}
