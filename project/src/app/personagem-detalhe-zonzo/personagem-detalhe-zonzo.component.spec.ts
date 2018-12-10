import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemDetalheZonzoComponent } from './personagem-detalhe-zonzo.component';

describe('PersonagemDetalheZonzoComponent', () => {
  let component: PersonagemDetalheZonzoComponent;
  let fixture: ComponentFixture<PersonagemDetalheZonzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemDetalheZonzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemDetalheZonzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
