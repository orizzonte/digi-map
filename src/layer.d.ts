export declare class MapLayer {
    url: string;
    type: MapLayerType;
}
export declare enum MapLayerType {
    ArcGisTiledLayer = 0,
    ArcGISDynamicLayer = 1,
    FeatureLayer = 2,
}
