import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpostFormComponent } from './newpost-form.component';

describe('NewpostFormComponent', () => {
  let component: NewpostFormComponent;
  let fixture: ComponentFixture<NewpostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewpostFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
