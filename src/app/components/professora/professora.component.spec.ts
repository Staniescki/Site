import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoraComponent } from './professora.component';

describe('ProfessoraComponent', () => {
  let component: ProfessoraComponent;
  let fixture: ComponentFixture<ProfessoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
