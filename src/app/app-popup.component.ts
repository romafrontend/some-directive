import {Component, Input, TemplateRef, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-popup',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
    
    `],
    template: `
        <ng-container *ngIf="false; else initPopup">
        
        </ng-container>
    `
})
export class AppPopupComponent {
    @Input() initPopup: TemplateRef<any>
}