import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriadorDeItemComponent } from './criador-de-item.component';

describe('CriadorDeItemComponent', () => {
  let component: CriadorDeItemComponent;
  let fixture: ComponentFixture<CriadorDeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriadorDeItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriadorDeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
