import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ComponentResolver, ViewChild, ViewContainerRef, ComponentFactory} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import { IHaveDynamicData, CustomComponentBuilder } from './custom.component.builder';

@Component({
    selector: 'dynamic-holder',
    template: `
<div>  
  <div #dynamicContentPlaceHolder></div>  
</div>
`,
    providers: [CustomComponentBuilder]
})
export class DynamicHolder implements OnInit, OnChanges {
    @Input() entity: any;
    @Input() title: string;
    @Input() template: string;    
    private component: IHaveDynamicData;
    private  previousTemplate: string; 

    ngOnChanges() {
        if (this.component) {
            this.component.title = this.title;
            this.component.entity = this.entity;
            
            if(this.template !== this.previousTemplate) {
                console.log('recreating component');
                this.dynamicComponentTarget.clear();
                this.ngOnInit();
            }


        }
    }

    // reference for a <div> with #
    @ViewChild('dynamicContentPlaceHolder', { read: ViewContainerRef })
    protected dynamicComponentTarget: ViewContainerRef;

    // ng loader and our custom builder
    constructor(
        protected componentResolver: ComponentResolver,
        protected customComponentBuilder: CustomComponentBuilder
    ) { }

    public ngOnInit() {
        // dynamic template built (TODO driven by some incoming settings)        

        // now we get built component, just to load it
        let dynamicComponent = this.customComponentBuilder
            .CreateComponent(this.template, FORM_DIRECTIVES);

        // we have a component and its target
        this.componentResolver
            .resolveComponent(dynamicComponent)
            .then((factory: ComponentFactory<IHaveDynamicData>) => {

                console.log('creating compoent with template: ' + this.template);

                // Instantiates a single {@link Component} and inserts its Host View 
                //   into this container at the specified `index`
                let comp = this.dynamicComponentTarget.createComponent(factory, 0);

                // and here we have access to our dynamic component
                this.component = comp.instance;
                this.previousTemplate = this.template;

                this.component.title = this.title;
                this.component.entity = this.entity;
            });
    }
}
