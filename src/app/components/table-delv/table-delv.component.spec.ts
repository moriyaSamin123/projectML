import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDelvComponent } from './table-delv.component';

describe('TableDelvComponent', () => {
  let component: TableDelvComponent;
  let fixture: ComponentFixture<TableDelvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDelvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDelvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
