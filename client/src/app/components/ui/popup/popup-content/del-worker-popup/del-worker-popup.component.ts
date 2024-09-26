import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkerInfoService } from '../../../../../service/WorkerInfo/worker-info.service';
import { NotificationService } from '../../../../../service/notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-del-worker-popup',
  templateUrl: './del-worker-popup.component.html',
  styleUrl: './del-worker-popup.component.scss',
})
export class DelWorkerPopupComponent {
  @Input()
  id!: number;
  @Input()
  date_layoff!: string;
  @Output() closeModalEvent = new EventEmitter();
  @Output() updateProfileWorker = new EventEmitter();
  profileDell: any;
  title: string = '';
  text: string = '';
  btnsumbitname: string = '';

  constructor(
    private profileService: WorkerInfoService,
    private notificationservice: NotificationService,
    private router: Router
  ) {
    this.profileDell = {
      date_layoff_worker: '',
    };
  }
  ngOnInit(): void {}
  onSubmit(event: any) {
    console.log(this.date_layoff);
    if (this.date_layoff) {
      console.log('ydalit');
      this.deleteProfile(this.id);
    } else {
      this.profileDell.date_layoff_worker = getCurrentDate();
      this.updateProfile(this.id, this.profileDell);
    }
    event.preventDefault();
  }

  onReset() {
    //Закрываем модальное окно
    this.closeModalEvent.emit();
  }

  updateProfile(id: number, updateprofile: any) {
    this.profileService.updateProfile(id, updateprofile).subscribe((data) => {
      if (data) {
        this.closeModalEvent.emit();
        this.updateProfileWorker.emit();
        this.showNotification('Сотрудник уволен и скрыт!', 'Oк', 'success');
      }
    });
  }

  deleteProfile(id: number) {
    this.profileService.deleteProfile(id).subscribe((data) => {
      if (data) {
        this.closeModalEvent.emit();
        this.router.navigate(['']);
        this.showNotification('Сотрудник удален навсегда!', 'Oк', 'success');
      }
    });
  }

  showNotification(message: string, action: string, type: string) {
    this.notificationservice.openSnackBar(message, action, type);
  }

  getErrorMessage(controlName: any): any {
    if (!this.date_layoff) {
      if (controlName === 'title') {
        return 'Удалить профиль?';
      }
      if (controlName === 'text') {
        return 'Сотрудник будет помечен как уволенный и скрыт. Продолжить?';
      }
      if (controlName === 'btnsumbitname') {
        return 'Продолжить';
      }
    } else {
      if (controlName === 'title') {
        return 'Удалить профиль навсегда?';
      }
      if (controlName === 'text') {
        return 'Этот сотрудник, все данные о нем, а так же сканкопии документов будут навсегда удалены из базы. Продолжить?';
      }
      if (controlName === 'btnsumbitname') {
        return 'Продолжить и удалить';
      }
    }
    return 'Позвоните мне, что-то тут не ладно...';
  }
}

function getCurrentDate() {
  const currentDate = new Date(); // Получаем текущую дату
  const day = padZero(currentDate.getDate()); // Получаем день
  const month = padZero(currentDate.getMonth() + 1); // Получаем месяц (нумерация месяцев начинается с 0, поэтому добавляем 1)
  const year = currentDate.getFullYear(); // Получаем год

  // Форматируем строку с датой
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
function padZero(value: any) {
  // Добавляем ведущий ноль, если значение меньше 10
  return value < 10 ? '0' + value : value;
}
