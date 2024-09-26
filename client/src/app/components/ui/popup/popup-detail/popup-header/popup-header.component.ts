import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-header',
  templateUrl: './popup-header.component.html',
  styleUrl: './popup-header.component.scss',
})
export class PopupHeaderComponent {
  @Input() title: string = '';
  @Input() isOpen: boolean = false;
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
