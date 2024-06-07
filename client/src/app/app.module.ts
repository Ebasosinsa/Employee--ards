import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

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
  providers: [provideClientHydration(), WorkerProfilebtnService],
  bootstrap: [AppComponent],
})
export class AppModule {}
