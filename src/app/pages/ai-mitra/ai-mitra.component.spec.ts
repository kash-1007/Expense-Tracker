import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMitraComponent } from './ai-mitra.component';

describe('AiMitraComponent', () => {
  let component: AiMitraComponent;
  let fixture: ComponentFixture<AiMitraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiMitraComponent]
    });
    fixture = TestBed.createComponent(AiMitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
