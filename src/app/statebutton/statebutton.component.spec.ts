import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebuttonComponent } from './statebutton.component';

describe('StatebuttonComponent', () => {
  let component: StatebuttonComponent;
  let fixture: ComponentFixture<StatebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatebuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
