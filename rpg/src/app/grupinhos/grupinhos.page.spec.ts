import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrupinhosPage } from './grupinhos.page';

describe('GrupinhosPage', () => {
  let component: GrupinhosPage;
  let fixture: ComponentFixture<GrupinhosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupinhosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrupinhosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
