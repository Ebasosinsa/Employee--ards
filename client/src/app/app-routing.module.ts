import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from './components/workers/workers.component';
import { SelectionComponent } from './components/selection/selection.component';
import { ToolkitComponent } from './components/toolkit/toolkit.component';

const routes: Routes = [
  /* Главная страница картотеки */
  {
    path: '',
    component: WorkersComponent,
  },
  /* Страница с выборками из картотеки */
  {
    path: 'selection',
    component: SelectionComponent,
  },
  /* Страница инструментария компании */
  /* test */
  {
    path: 'toolkit',
    component: ToolkitComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
