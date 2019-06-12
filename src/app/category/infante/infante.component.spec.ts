import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfanteComponent } from './infante.component';

describe('InfanteComponent', () => {
  let component: InfanteComponent;
  let fixture: ComponentFixture<InfanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
