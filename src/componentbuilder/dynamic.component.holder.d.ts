import { OnInit, OnChanges } from '@angular/core';
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { CustomComponentBuilder } from './custom.component.builder';
export declare class DynamicHolder implements OnInit, OnChanges {
    protected componentResolver: ComponentFactoryResolver;
    protected customComponentBuilder: CustomComponentBuilder;
    entity: any;
    title: string;
    template: string;
    private component;
    private previousTemplate;
    ngOnChanges(): void;
    protected dynamicComponentTarget: ViewContainerRef;
    constructor(componentResolver: ComponentFactoryResolver, customComponentBuilder: CustomComponentBuilder);
    ngOnInit(): void;
}
