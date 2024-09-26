import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationMessagesComponent } from '../../components/ui/notification-messages/notification-messages.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, type: string) {
    if (type === 'success') {
      this.openSnackBarSuccess(message, action);
    }
    if (type === 'errore') {
      this.openSnackBarErrore(message, action);
    }
    if (type === 'notif') {
      this.openSnackBarNotificatione(message, action);
    }
  }

  openSnackBarSuccess(message: string, action: string) {
    this.snackBar.openFromComponent(NotificationMessagesComponent, {
      data: {
        message: message,
        action: action,
        icon: 'success',
        snackBar: this.snackBar,
      },
      duration: 5000,
      verticalPosition: 'bottom', // Позиция сверху
      horizontalPosition: 'left', // По центру по горизонтали
      panelClass: ['custom-snackbar'],
    });
  }

  openSnackBarErrore(message: string, action: string) {
    this.snackBar.openFromComponent(NotificationMessagesComponent, {
      data: {
        message: message,
        action: action,
        icon: 'Errore',
        snackBar: this.snackBar,
      },
      duration: 5000,
      verticalPosition: 'bottom', // Позиция сверху
      horizontalPosition: 'left', // По центру по горизонтали
      panelClass: ['custom-snackbar'],
    });
  }

  openSnackBarNotificatione(message: string, action: string) {
    this.snackBar.openFromComponent(NotificationMessagesComponent, {
      data: {
        message: message,
        action: action,
        icon: 'spanner',
        snackBar: this.snackBar,
      },
      duration: 5000,
      verticalPosition: 'bottom', // Позиция сверху
      horizontalPosition: 'left', // По центру по горизонтали
      panelClass: ['custom-snackbar'],
    });
  }
}
