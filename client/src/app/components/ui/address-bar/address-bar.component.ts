import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { PopupService } from '../../../service/PopUp/popup.service';

@Component({
  selector: 'app-address-bar',
  templateUrl: './address-bar.component.html',
  styleUrl: './address-bar.component.scss',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          visibility: 'visible',
          transition: 'right 0.4s',
          right: '0px',
        })
      ),
      state(
        'closed',
        style({
          visibility: 'hidden',
          transition: 'right 0.4s',
          right: '-424px',
        })
      ),
      transition('open => closed', [animate('.5s')]),
      transition('closed => open', [animate('.5s')]),
    ]),
  ],
})
export class AddressBarComponent {
  constructor(private popupService: PopupService) {}
  @Output() openPopup = new EventEmitter<string>();

  isModalOpen: boolean = false;
  conditionFilterBtn: boolean = false;

  openModal(currentName: string) {
    console.log(currentName);
    if (currentName) {
      //this.isModalOpen = true;
      this.openPopup.emit(currentName);
      //this.popupService.openModal();
      console.log('click');
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.popupService.closeModal();
  }

  WorkerProfileFilterBtn() {
    /*  console.log('click');*/
    this.conditionFilterBtn = !this.conditionFilterBtn;
  }
}
