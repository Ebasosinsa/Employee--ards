import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showSettings(): void {
    console.log((showeSettingsSwitch = !showeSettingsSwitch));
  }
}
let showeSettingsSwitch: boolean = false;
/*visibility: visible; */
// выводим html элемента body
