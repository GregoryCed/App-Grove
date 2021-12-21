import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CriarTarefasPage } from './criar-tarefas.page';

describe('CriarTarefasPage', () => {
  let component: CriarTarefasPage;
  let fixture: ComponentFixture<CriarTarefasPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarTarefasPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarTarefasPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('deveria ir para o  home', () => {
    spyOn(router, 'navigate');

    component.home();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('deveria ir para a tela de tarefas', () => {
    spyOn(router, 'navigate');

    component.tarefas();

    expect(router.navigate).toHaveBeenCalledWith(['tarefas']);
  });
});
