import { OnInit, OnChanges } from '@angular/core';
import { ComponentResolver, ViewContainerRef } from '@angular/core';
import { CustomComponentBuilder } from './custom.component.builder';
export declare class DynamicHolder implements OnInit, OnChanges {
    protected componentResolver: ComponentResolver;
    protected customComponentBuilder: CustomComponentBuilder;
    entity: any;
    title: string;
    template: string;
    private component;
    private previousTemplate;
    ngOnChanges(): void;
    protected dynamicComponentTarget: ViewContainerRef;
    constructor(componentResolver: ComponentResolver, customComponentBuilder: CustomComponentBuilder);
    ngOnInit(): void;
}
