import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCardComponent } from './sell-card.component';

describe('SellCardComponent', () => {
  let component: SellCardComponent;
  let fixture: ComponentFixture<SellCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
