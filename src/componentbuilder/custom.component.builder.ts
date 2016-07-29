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

    public CreateComponent(tmpl: string, injectDirectives: any[]): any {

        @Component({
            selector: 'dynamic-component',
            template: tmpl,
            directives: injectDirectives,
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
        };

        return CustomDynamicComponent;
    }
}