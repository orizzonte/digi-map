export class Layer {
    url: string;
    type: LayerType;
}

export enum LayerType {
    ArcGisTiledLayer,
    ArcGISDynamicLayer,
    FeatureLayer
}
