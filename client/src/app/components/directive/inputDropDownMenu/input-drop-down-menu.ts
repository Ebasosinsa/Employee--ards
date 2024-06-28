import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDownMenu]',
})
export class InputDropDownMenuDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event.target'])
  onClick() {
    console.log('click');
    const mainElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section-no-grid__module__main__body'
    );
    const titleElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section-no-grid__module__main__title'
    );
    const inputElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section-no-grid__module__main__body__input'
    );
    const dropDownElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section-no-grid__module__main__dropdown'
    );
    const caretElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section-no-grid__module__main__body__caret'
    );
    //* Устанавливаем фокус на инпут
    inputElement.focus();
    // Меняем цвет рамки у элемента .main
    this.renderer.setStyle(mainElement, 'border-color', '#054e7e');
    this.renderer.setStyle(
      mainElement,
      'background-color',
      'rgba(0, 0, 0, 0.04)'
    );
    // Меняем цвет текста у элемента .title
    this.renderer.setStyle(titleElement, 'color', '#054e7e');
    //Показываем Дроп-Даун меню
    this.renderer.addClass(dropDownElement, 'show');
    // Поворот стрелки
    this.renderer.setStyle(caretElement, 'transform', 'rotate(0deg)');
  }

  @HostListener('focusout')
  onFocusOut() {
    const mainElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section-no-grid__module__main__body'
    );
    const titleElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section-no-grid__module__main__title'
    );

    const inputElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section-no-grid__module__main__body__input'
    );
    const dropdownElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section-no-grid__module__main__dropdown'
    );
    const caretElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section-no-grid__module__main__body__caret'
    );
    this.renderer.removeStyle(mainElement, 'border-color');
    this.renderer.removeStyle(mainElement, 'background-color');
    this.renderer.removeStyle(titleElement, 'color');
    this.renderer.removeClass(dropdownElement, 'show');
    this.renderer.setStyle(caretElement, 'transform', 'rotate(90deg)');
  }
}
