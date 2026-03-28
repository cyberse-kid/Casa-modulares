import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasPiloto } from './casas-piloto';

describe('CasasPiloto', () => {
  let component: CasasPiloto;
  let fixture: ComponentFixture<CasasPiloto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasasPiloto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasasPiloto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
