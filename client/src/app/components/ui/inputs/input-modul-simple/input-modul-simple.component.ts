import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { workerinfo } from '../../../../models/workerinfo';

@Component({
  selector: 'app-input-modul-simple',
  templateUrl: './input-modul-simple.component.html',
  styleUrl: './input-modul-simple.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputModulSimpleComponent),
      multi: true,
    },
  ],
})
export class InputModulSimpleComponent implements ControlValueAccessor {
  @ViewChild('myInputSimple')
  myInputSimple!: ElementRef;
  @Input()
  title!: string;
  @Input()
  type!: string;
  @Input()
  pholder!: string;
  @Input()
  inputid!: string;
  @Input()
  forid!: string;
  @Input()
  Error: AbstractControl<any, any> | null;
  @Input()
  ErrorMessage: string | null;
  @Input()
  formSubmitted: boolean;
  @Input()
  editValue!: string;

  public isShowed: boolean = false;
  public targetElement: any;

  public value: string | undefined;

  private onChange: (value: string) => void;
  private onTouched!: () => void;

  constructor(private readonly changeDetector: ChangeDetectorRef) {}

  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;

    this.onChange(value);
  }

  public writeValue(value: string): void {
    this.value = value;
    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.Error?.markAsTouched();
    return false;
  }

  public toggleActiveSimple(inputEl: any): void {
    this.isShowed = !this.isShowed;
    this.isShowed
      ? this.myInputSimple.nativeElement.focus()
      : this.myInputSimple.nativeElement.blur();

    this.targetElement = inputEl.id;
  }

  get hasError(): boolean {
    return (this.Error?.hasError('required') && this.Error?.touched) ?? false;
  }

  get isInvalid(): boolean {
    if (this.Error?.invalid && this.Error?.touched) {
      return true;
    }
    return false;
  }
  /* public toggleShowModule(inputEl: any): void {
    if ((inputEl.id = 'positions_worker')) {
      this.isModuleShowed = !this.isModuleShowed;
      this.isModuleShowed
        ? this.myInputPosition.nativeElement.focus()
        : this.myInputPosition.nativeElement.blur();
      this.targetElement = inputEl.id;
    } else {
      //ifelse...  ко всем элементам формы

    }
  }*/
}
