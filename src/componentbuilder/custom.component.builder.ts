import {Component, Input, OnChanges} from '@angular/core';

export interface IHaveDynamicData {
    title: string;
    entity: any;
}

interface KeyValuePair {
    key: string;
    value: string;
}

export class CustomComponentBuilder {

    public CreateComponent(tmpl: string): any {

        @Component({
            selector: 'dynamic-component',
            template: tmpl,           
        })
        class CustomDynamicComponent implements IHaveDynamicData {

            public title: string;
            public entity: any;

            toArray(obj: any) {
                let values: KeyValuePair[] = [];

                for (var propt in obj) {
                    if (propt && !propt.startsWith('SHAPE') && !propt.startsWith('OBJECTID')) {
                        values.push(<KeyValuePair>{ key: propt, value: obj[propt] });
                    }
                }

                return values;
            }

            outputEntity() {
                if (this.entity) {
                    return JSON.stringify(this.entity);
                } else {
                    return 'entity undefined';
                }
            }

        };

        return CustomDynamicComponent;
    }
}
