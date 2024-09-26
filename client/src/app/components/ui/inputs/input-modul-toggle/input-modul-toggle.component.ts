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

@Component({
  selector: 'app-input-modul-toggle',
  templateUrl: './input-modul-toggle.component.html',
  styleUrl: './input-modul-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputModulToggleComponent),
      multi: true,
    },
  ],
})
export class InputModulToggleComponent implements ControlValueAccessor {
  @ViewChild('myInputToggle')
  myInputToggle!: ElementRef;
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
  leftside!: string;
  @Input()
  rightside!: string;
  @Input()
  options!: any[];

  public optionskeys: any;
  public isShowed: boolean = false;
  public isChecked: boolean = false;

  public isCheckedvalue: boolean = false;
  public value: boolean = false;

  checked = false;
  onChange: (_: any) => void = (_: any) => {};

  constructor(private readonly changeDetector: ChangeDetectorRef) {}
  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;

    this.onChange;
  }

  writeValue(val: any): void {
    this.checked = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
  //Конец ControlValueAccessor

  ToggleAddWorker() {
    /*this.isOpen
      ? ((this.isCheckedValue = false),
        (this.isChecked = false),
        this.formAddWorker.get('gender_worker')?.setValue('false'))
      : ((this.isCheckedValue = true),
        (this.isChecked = true),
        this.formAddWorker.get('gender_worker')?.setValue('true'));
    console.log(this.formAddWorker.get(['gender_worker'])?.value);*/
    this.isChecked
      ? ((this.isChecked = false), (this.value = false))
      : ((this.isChecked = true), (this.value = true));
    this.onChange(this.isChecked);
    console.log(this.isChecked);
    this.isShowed = !this.isShowed;
  }
}
