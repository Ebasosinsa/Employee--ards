import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../../../service/file-upload/file-upload.service';

@Component({
  selector: 'app-input-modul-file-upload',
  templateUrl: './input-modul-file-upload.component.html',
  styleUrl: './input-modul-file-upload.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputModulFileUploadComponent),
      multi: true,
    },
  ],
})
export class InputModulFileUploadComponent implements ControlValueAccessor {
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
  uplphoto!: string | null;
  public isShowed: boolean = false;
  public targetElement: any;

  public value: string | undefined;

  fileName: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};
  selectedFile: any;
  profilePicture: File;

  constructor(private fileUploadService: FileUploadService) {}

  writeValue(file: File): void {
    if (file) {
      this.fileName = file.name;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onFileChange(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.onChange(this.selectedFile);
      this.isShowed = false;
      // передаем файл родительскому компоненту
      /*this.fileUploadService.upload(file).subscribe({
        next: (response) => {
        
        },
        error: (err) => {
          console.error('Ошибка при загрузке файла', err);
        },
      });*/
    }
  }

  public toggleActiveSimple(inputEl: any): void {
    this.isShowed = !this.isShowed;
    this.isShowed
      ? this.myInputSimple.nativeElement.focus()
      : this.myInputSimple.nativeElement.blur();

    this.targetElement = inputEl.id;
  }

  handleFileInput(files: FileList) {
    this.profilePicture = files[0];
  }
  onBlur() {
    return false;
  }

  ngOnInit() {}

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
