import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'digi-toggler',
    template: ` <button class=" btn-toggle " (click)="toggle()">
                        <i class="material-icons ">{{icon}}</i>
                        <i class="material-icons " *ngIf="isHidden ">keyboard_arrow_right</i>
                        <i class="material-icons " *ngIf="!isHidden ">keyboard_arrow_left</i>
                </button>
                <div [style.display]="isHidden ? 'none' : 'block'">
                    <ng-content></ng-content>
                </div>`,
    directives: [TOOLTIP_DIRECTIVES]
})

export class TogglerComponent {
    @Input() icon: string;

    isHidden: boolean = true;

    toggle() {
        this.isHidden = !this.isHidden;
    }
}