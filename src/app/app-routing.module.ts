import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCLientesComponent } from './lista-clientes/lista-clientes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListaCLientesComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
