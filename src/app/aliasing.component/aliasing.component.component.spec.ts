import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasingComponentComponent } from './aliasing.component.component';

describe('AliasingComponentComponent', () => {
  let component: AliasingComponentComponent;
  let fixture: ComponentFixture<AliasingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AliasingComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AliasingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
