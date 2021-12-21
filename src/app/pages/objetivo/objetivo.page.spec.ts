import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ObjetivoPage } from './objetivo.page';

describe('ObjetivoPage', () => {
  let component: ObjetivoPage;
  let fixture: ComponentFixture<ObjetivoPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivoPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjetivoPage);
    router  = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('deveria ir para a tela home', () => {
    spyOn(router, 'navigate');

    component.home();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
