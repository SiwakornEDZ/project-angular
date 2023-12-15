import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsMetadataComponent } from './item-details-metadata.component';

describe('ItemDetailsMetadataComponent', () => {
  let component: ItemDetailsMetadataComponent;
  let fixture: ComponentFixture<ItemDetailsMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDetailsMetadataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDetailsMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
