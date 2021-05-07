import {Directive, Input, ElementRef, TemplateRef, ViewContainerRef, Renderer2,
    ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import {AppPopupComponent} from './app-popup.component';

@Directive({
    selector: '[appPopup]'
})
export class AppPopupDirective {
    @Input() appPopup: TemplateRef<any>;

    isPopup = false;
    componentRef: any;

    constructor(private elm: ElementRef, private viewContainer: ViewContainerRef, private renderer: Renderer2, 
        private resolver: ComponentFactoryResolver) {
            renderer.listen(this.viewContainer.element.nativeElement.parentElement, 'mouseover', _event => {
                this.createComponent();
            });

            renderer.listen(this.viewContainer.element.nativeElement.parentElement, 'mouseleave', _event => {
                this.removeComponent();
            });
        }

    createComponent() {
        if(!this.isPopup) {
            let containerBounding = this.viewContainer.element.nativeElement.getBoundingClientRect();
            const factory = this.resolver.resolveComponentFactory(AppPopupComponent);
            this.componentRef = this.viewContainer.createComponent(factory);
            this.componentRef.instance.initPopup = this.appPopup;
            let element: HTMLElement = <HTMLElement>this.componentRef.location.nativeElement;
            element.style.position = 'absolute';
            element.style.top = containerBounding.top + 'px';
            element.style.left = containerBounding.left + 'px';

            this.isPopup = true;
        }
    }

    removeComponent() {
      this.componentRef.destroy();
      this.isPopup = false;
    }


}