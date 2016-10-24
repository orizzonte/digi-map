import { Component, OnInit, Input } from '@angular/core';
import { map, Extent, SpatialReference, Geometry, Polygon, utils, Layer, ArcGISDynamicMapServiceLayer } from 'esri-mods';
import { Subject, Observable } from 'rxjs/Rx';
import { MapSettings } from '../map.settings';
import {LayerFilter} from './map.filter';

@Component({
    selector: 'map-filter',
    template: ''
})
export class MapFilterComponent implements OnInit {
    @Input() mapInstance: map;
    @Input() settings: MapSettings;
    @Input() dynamicLayers: ArcGISDynamicMapServiceLayer[];

    ngOnInit() {
        this.settings = this.settings || <MapSettings>{ themes: [] };
    }

    setFilter(filter: LayerFilter) {
        if (!this.dynamicLayers) {
            return;
        }

        let dynaLayer = this.dynamicLayers.find(x => x.url === filter.themeUrl);

        if (dynaLayer) {
            var layer = dynaLayer.layerInfos.find(x => x.name.toUpperCase() === filter.layerName.toUpperCase());

            if (layer) {
                let layerDefinitions: string[] = [];
                layerDefinitions[layer.id] = filter.query;

                dynaLayer.setLayerDefinitions(layerDefinitions, false);
            }
        }
    }

}
