import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PacienteCrudComponent } from './views/paciente-crud/paciente-crud.component';
import { PacienteCreateComponent } from './components/paciente/paciente-create/paciente-create.component';
import { PacienteUpdateComponent } from './components/paciente/paciente-update/paciente-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pacientes",
    component: PacienteCrudComponent
  },
  {
    path: "pacientes/create",
    component: PacienteCreateComponent
  },
  {
    path: "pacientes/update/:id",
    component: PacienteUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
