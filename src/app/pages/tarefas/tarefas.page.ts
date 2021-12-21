import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tarefa } from '../interfaces/tarefa';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {
  private tarefas = new Array<Tarefa>();
  private tarefasSubscription: Subscription;

  constructor(
    private router: Router,
    private tarefasServices: TarefaService
    ) {
      this.tarefasSubscription = this.tarefasServices.getTarefas().subscribe(data => {
        this.tarefas = data;
      });
     }

  ngOneDestroy(){
    this.tarefasSubscription.unsubscribe();
  }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['home']);
  }

  criarTarefas(){
    this.router.navigate(['criar-tarefas']);
  }
  
  verTarefa(){
    this.router.navigate(['ver-tarefas']);
  }

}
