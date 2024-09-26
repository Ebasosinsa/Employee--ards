import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  @Input() title: string = 'Modal';
  @Input() isOpen: boolean = false;

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
