import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-notification-messages',
  //
  templateUrl: 'notification-messages.component.html',
  styleUrl: 'notification-messages.component.scss' /*[
    `
      //matSnackBarLabel
      .custom__notification__text {
        color: hotpink;
        word-spacing: 2.5px;
        font-family: 'Roboto', 'Inter', Arial, sans-serif;
        font-size: 18px;
        line-height: 1.5;
      }
      //matSnackBarAction
      .custom__notification__button {
        color: hotpink;
        word-spacing: 2.5px;
        font-family: 'Roboto', 'Inter', Arial, sans-serif;

        font-size: 24px;
        line-height: 1.5;
      }
    `,
  ]*/,
})
export class NotificationMessagesComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  closeSnacBar() {
    this.data.snackBar.dismiss();
  }
}
