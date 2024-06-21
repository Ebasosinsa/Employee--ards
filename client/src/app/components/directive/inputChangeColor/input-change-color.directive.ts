import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputChangeColor]',
})
export class InputChangeColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event.target'])
  onClick() {
    const mainElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section__module__main'
    );
    const titleElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section__module__title'
    );
    const inputElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section__module__main__input'
    );
    const text = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section__module__main__input'
    );
    //* Устанавливаем фокус на инпут
    inputElement.focus();
    text.focus();
    // Меняем цвет рамки у элемента .main
    this.renderer.setStyle(mainElement, 'border-color', '#054e7e');
    this.renderer.setStyle(
      mainElement,
      'background-color',
      'rgba(0, 0, 0, 0.04)'
    );
    // Меняем цвет текста у элемента .title
    this.renderer.setStyle(titleElement, 'color', '#054e7e');
  }

  @HostListener('focusout')
  onFocusOut() {
    const mainElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section__module__main'
    );
    const titleElement = this.el.nativeElement.querySelector(
      '.body__popup__container__body__content__row__section__module__title'
    );

    this.renderer.removeStyle(mainElement, 'border-color');
    this.renderer.removeStyle(mainElement, 'background-color');
    this.renderer.removeStyle(titleElement, 'color');
  }
}
