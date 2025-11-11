import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCheckComponent } from './update-check.component';

describe('UpdateCheckComponent', () => {
  let component: UpdateCheckComponent;
  let fixture: ComponentFixture<UpdateCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCheckComponent]
    });
    fixture = TestBed.createComponent(UpdateCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
