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
     * Adds multiple layers to a map.
     * @param layers Layers to be added to the map.
     */ 
  }  
  
  export class Extent {
     constructor(json: any);
  }
  
  export class ArcGISTiledMapServiceLayer {
	   constructor(url: string, options?: any);
  } 
    
  export class MapView {
	  constructor(options: any);
	  then : Function;
  }
  
  export class TileLayer {
	  constructor(options: any);
  }
}
