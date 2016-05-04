import { Injectable } from 'angular2/core';
import { arcgisUtils, Search, Legend, Map } from 'esri';

@Injectable()
export class MapService {

  // load a web map and return response
  createMap(itemIdOrInfo: any, domNodeOrId: any, options: Object) {
    return arcgisUtils.createMap(itemIdOrInfo, domNodeOrId, options).then(function(response) {
      // append layer infos to response before returning
      response.layerInfos = arcgisUtils.getLegendLayers(response);
      return response;
    });
  };
   // load a web map and return responses
  createMap2(domNodeId: string, options: Object) {
    var map = new Map(domNodeId, {basemap: 'topo', center: [-122.45, 37.75], zoom: 13, sliderStyle: 'small'});
  };

  // create a search dijit at the dom node
  createSearch(options: Object, domNodeOrId: any) {
    return new Search(options, domNodeOrId);
  };

  // create a legend dijit at the dom node
  createLegend(options: Object, domNodeOrId: any) {
    return new Legend(options, domNodeOrId);
  }
}
