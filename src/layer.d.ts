export declare class Layer {
    url: string;
    type: LayerType;
}
export declare enum LayerType {
    ArcGisTiledLayer = 0,
    ArcGISDynamicLayer = 1,
    FeatureLayer = 2,
}
