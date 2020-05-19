import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';

import { InterestsTabComponent } from './interests-tab.component';

describe('InterestsTabComponent', () => {
  let component: InterestsTabComponent;
  let fixture: ComponentFixture<InterestsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterestsTabComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterestsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
