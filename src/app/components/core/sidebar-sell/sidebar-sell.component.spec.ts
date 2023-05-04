import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSellComponent } from './sidebar-sell.component';

describe('SidebarSellComponent', () => {
  let component: SidebarSellComponent;
  let fixture: ComponentFixture<SidebarSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
