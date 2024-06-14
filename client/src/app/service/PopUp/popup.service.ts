import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
/* Сервис модальных окон приложения */
/* https://www.youtube.com/watch?v=i2Yf7JZonB4&t=296s&ab_channel=UlbiTV - пример модалок */
/* https://www.codeguru.co.in/2022/12/how-to-create-reusable-modal-component.htmlhttps://www.codeguru.co.in/2022/12/how-to-create-reusable-modal-component.html */
/* Ахуенная статься по модалкам на ангуляр */
/* https://guides.kontur.ru/components/popup-elements/modal/#Razmer_i_raspolozhenie - офрмление модалок */
@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private showModalSubject = new BehaviorSubject<boolean>(false);
  public showModal$: Observable<boolean> = this.showModalSubject.asObservable();

  constructor() {}

  openModal() {
    this.showModalSubject.next(true);
  }

  closeModal() {
    this.showModalSubject.next(false);
  }
}
