import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { TarefasPage } from './tarefas.page';

describe('TarefasPage', () => {
  let component: TarefasPage;
  let fixture: ComponentFixture<TarefasPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TarefasPage);
    router  = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('deveria ir para o home', () => {
    spyOn(router, 'navigate');

    component.home();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('deveria ir para a tela de criar tarefas', () => {
    spyOn(router, 'navigate');

    component.criarTarefas();

    expect(router.navigate).toHaveBeenCalledWith(['criar-tarefas']);
  });
  
  it('deveria ir para a tela de ver tarefas', () => {
    spyOn(router, 'navigate');

    component.verTarefa();

    expect(router.navigate).toHaveBeenCalledWith(['ver-tarefas']);
  });
  
});

