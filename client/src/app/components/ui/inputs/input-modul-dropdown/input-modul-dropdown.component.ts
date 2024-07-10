import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { workercategory } from '../../../../models/workercategory';
import { workerdepartment } from '../../../../models/workerdepartment';
import { workergtpositions } from '../../../../models/workergtpositions';
import { WorkerGtPositionsService } from '../../../../service/WorkerGtPositions/worker-gt-positions.service';
import { WorkerCategoryService } from '../../../../service/WorkerCategory/worker-category.service';
import { WorkerDepartmentService } from '../../../../service/WorkerDepartment/worker-department.service';
import { DataFilterService } from '../../../../service/Data-filter/data-filter.service';
import { debounceTime } from 'rxjs/operators';
import { SharingAddFormService } from '../../../../service/sharingAddForm/sharing-add-form.service';

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
  @Input() optionsid: any;
  @Input() optionsname: any;

  inputArrFiltereds: any;

  public isShowed: boolean = false;
  public targetElement: any;
  categories!: workercategory[];
  departments!: workerdepartment[];
  gtpositions!: workergtpositions[];
  filter!: any[];
  filteringWords!: any;
  isModuleShowed: boolean = false;
  menuBtnClick: boolean = false;
  /*targetElement: any;*/

  public value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;
  selectedValue: [];
  aye123: any;

  constructor(
    private readonly changeDetector: ChangeDetectorRef,
    private workergtpositionsService: WorkerGtPositionsService,
    private sharingAddFormService: SharingAddFormService
  ) {}

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
  //Конец ControlValueAccessor

  ngOnInit(): void {
    /* this.sharingAddFormService.formValue$.subscribe((value) => {
      this.filteringArr(value);
    });
    this.workergtpositionsService.getGtPositions().subscribe((data) => {
      this.inputArrFiltereds = data;
    });*/
  }

  public toggleActive(): void {
    this.isShowed = !this.isShowed;
    this.isShowed
      ? this.myInputDropDown.nativeElement.focus()
      : this.myInputDropDown.nativeElement.blur();
  }

  /* public filteringArr(): void {
    //константы фильтрации массива
    const forbiddenChars = '\\[\\]{}'; // Исключить при поиске [ и ], а также { и }
    const regexStr = this.filteringWords + `[^${forbiddenChars}]`;
    const regex = new RegExp(regexStr, 'gi');
    //Фильтрация массива
    this.filter = this.inputArr.filter((n) => {
      //Определяем, совпадает ли, то что мы занесли в инпут
      //с названием профессий внутри массива
      return n.inputArr.match(regex);
    });
  }*/

  public filteringArr() {}
  addValue(inputValue: string): void {
    this.writeValue(inputValue);
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
