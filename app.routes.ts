import { Routes } from '@angular/router';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';

export const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },
  { path: 'usuario', component: UsuarioListComponent },
  { path: 'create-usuario', component: UsuarioCreateComponent },
  { path: 'update-usuario/:id', component: UsuarioUpdateComponent },
];

