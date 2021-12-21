import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appendFile } from 'fs';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('deveria ir para a tela de tarefas', () => {
    spyOn(router, 'navigate');

    component.tarefas();

    expect(router.navigate).toHaveBeenCalledWith(['tarefas']);
  });
  
  it('deveria ir para a tela de criar tarefas', () => {
    spyOn(router, 'navigate');

    component.criarTarefas();

    expect(router.navigate).toHaveBeenCalledWith(['criar-tarefas']);
  });
});
