export interface IdentifyMapServerResult {
	url: string;
	layerResults: IdentifyLayerResult[];
}

export interface IdentifyLayerResult {
	layerId : number;
	templateId: string;
	data: any;
}
