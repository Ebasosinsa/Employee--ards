import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-modul-dropdown',
  templateUrl: './input-modul-dropdown.component.html',
  styleUrl: './input-modul-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputModulDropdownComponent),
      multi: true,
    },
  ],
})
export class InputModulDropdownComponent implements ControlValueAccessor {
  @ViewChild('myInputDropDown') myInputDropDown: ElementRef;
  @Input() title: string;
  @Input() type: string;
  @Input() pholder: string;
  @Input() inputid: string;
  @Input() forid: string;
  @Input() options: any[];
  @Input() isReadOnly: boolean;
  @Output() changeCardWorker = new EventEmitter<any>();

  public optionskeys: any;

  public isShowed: boolean = false;

  public value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(private readonly changeDetector: ChangeDetectorRef) {}
  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;

    this.onChange(value);
  }

  public writeValue(value: any): void {
    this.value = value;

    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  //Конец ControlValueAccessor

  ngOnInit(): void {
    this.optionsKeysChange();
  }
  //Показ дроп-даун меню при нажатии на инпут
  public optionsKeysChange(): void {
    this.optionskeys =
      this.options?.length > 0 ? Object.keys(this.options[0]) : [];
  }

  public toggleActive(): void {
    this.optionskeys =
      this.options?.length > 0 ? Object.keys(this.options[0]) : [];
    this.isShowed = !this.isShowed;
    this.isShowed
      ? this.myInputDropDown.nativeElement.focus()
      : this.myInputDropDown.nativeElement.blur();
  }
  //Добавление значение в инпут при выборе
  public addValue(inputValue: string, kardworker: string) {
    this.value = inputValue;
    console.log(kardworker);
    this.changeCardWorker.emit(kardworker);
    this.onChange(this.value);
  }
}
