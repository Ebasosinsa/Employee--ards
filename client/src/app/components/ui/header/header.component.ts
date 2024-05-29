import { Component } from '@angular/core';
/* Верхнее меню (шапка) */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  condition: boolean = false;
  /* Какое-то колхозище ебаное, надо переделать...*/
  /* Чисто для теста, не более*/

  showSettings() {
    this.condition = !this.condition;
    console.log('нажатие> ', this.condition);
    console.log(this);
  }
}
/*visibility: visible; */
// выводим html элемента body
