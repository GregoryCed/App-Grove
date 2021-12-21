import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { EditarTarefaPage } from './editar-tarefa.page';

describe('EditarTarefaPage', () => {
  let component: EditarTarefaPage;
  let fixture: ComponentFixture<EditarTarefaPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTarefaPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTarefaPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('deveria ir para a tela de tarefas', () => {
    spyOn(router, 'navigate');

    component.tarefas();

    expect(router.navigate).toHaveBeenCalledWith(['tarefas']);
  });

  it('deveria ir para o home', () => {
    spyOn(router, 'navigate');

    component.home();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

});
