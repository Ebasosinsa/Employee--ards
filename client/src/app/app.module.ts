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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    WorkerProfilebtnService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
