// Type definitions for ArcGIS API for JavaScript v3.16
// Project: http://js.arcgis.com
// Definitions by: Esri <http://www.esri.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "esri" {

  export class map {

    constructor(id: any, options?: any);
    /**
     * Adds an Esri Layer to the map.
     * @param layer Layer to be added to the map.
     * @param index A layer can be added at a specified index in the map.
     */
    addLayer(layer: any, index?: number): any;
    /**
    * Sets the extent of the map.
    * @param extent Sets the minx, miny, maxx, and maxy for a map.
    * @param fit When true, for maps that contain tiled map service layers, you are guaranteed to have the input extent shown completely on the map.
    */
    setExtent(extent: Extent, fit?: boolean): any;

    on(type: string, listener: (event: any) => void): void;
    on(type: "load", listener: (event: { map: map; target: map }) => void): void;
    on(type: "extent-change", listener: (event: { delta: any; extent: Extent; levelChange: boolean; lod: any; target: map }) => void): void;
  }

  export class Extent {
    constructor(json: any);
  }

  export class ArcGISTiledMapServiceLayer {
	   constructor(url: string, options?: any);
  }
  
  export class ArcGISDynamicMapServiceLayer {
	   constructor(url: string, options?: any);
  }
  
  export class FeatureLayer {
	   constructor(url: string, options?: any);
  }
  

  export class MapView {
    constructor(options: any);
    then: Function;
  }

  export class TileLayer {
    constructor(options: any);
  }
}
