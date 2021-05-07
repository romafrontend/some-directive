import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
  
  `],
  template: `
      <p>Hi, I'm some text <span [appPopup]="imPopup">with a cool popup</span> that displays when hovering some text.</p>

      <ng-template #imPopup>
        <p>COOL POPUP</p>
      </ng-template>
  `
})
export class AppComponent {
  title = 'some-directive';
}
