import { SearchComponent } from './search.component';
import { LegendComponent } from './legend.component';
export declare class AppComponent {
    searchComponent: SearchComponent;
    legendComponent: LegendComponent;
    title: string;
    itemId: string;
    mapOptions: {
        basemap: string;
        center: number[];
        zoom: number;
    };
    searchOptions: {
        enableButtonMode: boolean;
        enableLabel: boolean;
        enableInfoWindow: boolean;
        showInfoWindowOnSelect: boolean;
    };
    onMapLoad(response: any): void;
}
