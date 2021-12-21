import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { VerTarefasPage } from './ver-tarefas.page';

describe('VerTarefasPage', () => {
  let component: VerTarefasPage;
  let fixture: ComponentFixture<VerTarefasPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTarefasPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VerTarefasPage);
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

  it('deveria ir para a tela de ver tarefas', () => {
    spyOn(router, 'navigate');

    component.editarTarefas();

    expect(router.navigate).toHaveBeenCalledWith(['editar-tarefa']);
  });

});
