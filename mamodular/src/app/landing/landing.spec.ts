import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Landing } from './landing';

describe('Landing', () => {
  let component: Landing;
  let fixture: ComponentFixture<Landing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landing]
    }).compileComponents();

    fixture = TestBed.createComponent(Landing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 modelos', () => {
    expect(component.modelos.length).toBe(3);
  });

  it('should have 4 pasos de proceso', () => {
    expect(component.proceso.length).toBe(4);
  });

  it('should toggle menu', () => {
    expect(component.isMenuOpen()).toBeFalsy();
    component.toggleMenu();
    expect(component.isMenuOpen()).toBeTruthy();
  });
});