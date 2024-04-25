import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizacionRutasComponent } from './optimizacion-rutas.component';

describe('OptimizacionRutasComponent', () => {
  let component: OptimizacionRutasComponent;
  let fixture: ComponentFixture<OptimizacionRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizacionRutasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptimizacionRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
