import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Tarefas',
      url: 'tarefas'
    },
    {
      title: 'Criar nova tarefa',
      url: 'criar-tarefas'
    }
  ];
  constructor() {}
}
