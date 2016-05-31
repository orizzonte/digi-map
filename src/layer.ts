export class MapLayer {
    url: string;
    type: MapLayerType;
}

export enum MapLayerType {
    ArcGisTiledLayer,
    ArcGISDynamicLayer,
    FeatureLayer
}
