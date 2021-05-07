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
            element.style.top = containerBounding.top + 30 + 'px';
            element.style.left = containerBounding.left + 'px';
            element.style.padding = '10px'
            element.style.backgroundColor = 'rgba(0,0,0,.03)';
            element.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,.3)';

            this.isPopup = true;
        }
    }

    removeComponent() {
      this.componentRef.destroy();
      this.isPopup = false;
    }


}