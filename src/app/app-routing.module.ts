import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/guards/auth.guard';
import { LoginGuard } from './pages/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login', canActivate: [LoginGuard],
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register', canActivate: [LoginGuard],
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tela-inicial', canActivate: [LoginGuard],
    loadChildren: () => import('./pages/tela-inicial/tela-inicial.module').then( m => m.TelaInicialPageModule)
  },
  {
    path: 'home', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'objetivo', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/objetivo/objetivo.module').then( m => m.ObjetivoPageModule)
  },
  {
    path: 'tarefas', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tarefas/tarefas.module').then( m => m.TarefasPageModule)
  },
  {
    path: 'criar-tarefas', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/criar-tarefas/criar-tarefas.module').then( m => m.CriarTarefasPageModule)
  },
  {
    path: 'criar-tarefas/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/criar-tarefas/criar-tarefas.module').then( m => m.CriarTarefasPageModule)
  },
  {
    path: 'ver-tarefas', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/ver-tarefas/ver-tarefas.module').then( m => m.VerTarefasPageModule)
  },
  {
    path: 'ver-tarefas/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/ver-tarefas/ver-tarefas.module').then( m => m.VerTarefasPageModule)
  },
  {
    path: 'editar-tarefa', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/editar-tarefa/editar-tarefa.module').then( m => m.EditarTarefaPageModule)
  },
  {
    path: 'editar-tarefa/:id', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/editar-tarefa/editar-tarefa.module').then( m => m.EditarTarefaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
