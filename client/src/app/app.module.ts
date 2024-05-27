import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkersComponent } from './components/workers/workers.component';
import { SelectionComponent } from './components/selection/selection.component';
import { ToolkitComponent } from './components/toolkit/toolkit.component';
import { WorkerProfileComponent } from './components/worker-profile/worker-profile.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
