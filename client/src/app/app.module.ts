import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/ui/main/main.component';
import { SidebarComponent } from './components/ui/sidebar/sidebar.component';
import { AppContainerComponent } from './components/ui/app-container/app-container.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { WorkersComponent } from './components/pages/workers/workers.component';
import { SelectionComponent } from './components/pages/selection/selection.component';
import { ToolkitComponent } from './components/pages/toolkit/toolkit.component';
import { WorkerProfileComponent } from './components/pages/workers/worker-profile/worker-profile.component';
import { WorkerProfilebtnService } from './service/worker-profilebtn.service';
import { PopupComponent } from './components/ui/popup/popup.component';
import { AddWorkerPopupComponent } from './components/ui/popup/popup-content/add-worker-popup/add-worker-popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { InputModulSimpleComponent } from './components/ui/inputs/input-modul-simple/input-modul-simple.component';
import { InputModulDropdownComponent } from './components/ui/inputs/input-modul-dropdown/input-modul-dropdown.component';
import { InputModulToggleComponent } from './components/ui/inputs/input-modul-toggle/input-modul-toggle.component';
import { InputModulFileUploadComponent } from './components/ui/inputs/input-modul-file-upload/input-modul-file-upload.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NotificationMessagesComponent } from './components/ui/notification-messages/notification-messages.component';
import { AddressBarComponent } from './components/ui/address-bar/address-bar.component';
import { DelWorkerPopupComponent } from './components/ui/popup/popup-content/del-worker-popup/del-worker-popup.component';
import { EditWorkerPopupComponent } from './components/ui/popup/popup-content/edit-worker-popup/edit-worker-popup.component';
import { PopupHeaderComponent } from './components/ui/popup/popup-detail/popup-header/popup-header.component';
import { PopupBodyComponent } from './components/ui/popup/popup-detail/popup-body/popup-body.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    AppContainerComponent,
    HeaderComponent,
    WorkersComponent,
    SelectionComponent,
    ToolkitComponent,
    WorkerProfileComponent,
    PopupComponent,
    AddWorkerPopupComponent,
    InputModulSimpleComponent,
    InputModulDropdownComponent,
    InputModulToggleComponent,
    InputModulFileUploadComponent,
    NotificationMessagesComponent,
    AddressBarComponent,
    DelWorkerPopupComponent,
    EditWorkerPopupComponent,
    PopupHeaderComponent,
    PopupBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    WorkerProfilebtnService,
    provideAnimationsAsync('noop'),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
