import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosFormComponent } from './components/autos-form/autos-form.component';
import { AutosListComponent } from './components/autos-list/autos-list.component';
import { ColoresFormComponent } from './components/colores-form/colores-form.component';
import { ColoresListComponent } from './components/colores-list/colores-list.component';
import { MarcasFormComponent } from './components/marcas-form/marcas-form.component';
import { MarcasListComponent } from './components/marcas-list/marcas-list.component';
import { ModelosFormComponent } from './components/modelos-form/modelos-form.component';
import { ModelosListComponent } from './components/modelos-list/modelos-list.component';

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

  {
    path: 'modelos',
    component: ModelosListComponent,
  },

  {
    path: 'modelos/registrar',
    component: ModelosFormComponent,
  },

  {
    path: 'marcas',
    component: MarcasListComponent,
  },

  {
    path: 'marcas/registrar',
    component: MarcasFormComponent,
  },

  {
    path: 'colores',
    component: ColoresListComponent,
  },

  {
    path: 'colores/registrar',
    component: ColoresFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
