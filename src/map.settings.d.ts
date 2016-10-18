import { Extent } from './map.extent';
export interface MapSettings {
    extent: Extent;
    controls: string[];
    themes: Theme[];
    identify: Identify;
    proxy: string;
}
export interface Theme {
    type: string;
    url: string;
    title: string;
    identifier: string;
    identifyable: boolean;
    identifyTemplateMappings: IdentifyTemplateMapping[];
}
export interface Identify {
    templates: IdentifyTemplate[];
    title: string;
    width: number;
    height: number;
}
export interface IdentifyTemplate {
    id: string;
    html: string;
}
export interface IdentifyTemplateMapping {
    layerId: number;
    templateId: string;
}
