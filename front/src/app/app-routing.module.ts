import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosFormComponent } from './components/autos-form/autos-form.component';
import { AutosListComponent } from './components/autos-list/autos-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autos',
    pathMatch: 'full',
  },

  {
    path: 'autos',
    component: AutosListComponent,
  },

  {
    path: 'autos/registrar',
    component: AutosFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
