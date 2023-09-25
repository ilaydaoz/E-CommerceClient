import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogsComponent } from './delete-dialogs.component';

describe('DeleteDialogsComponent', () => {
  let component: DeleteDialogsComponent;
  let fixture: ComponentFixture<DeleteDialogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDialogsComponent]
    });
    fixture = TestBed.createComponent(DeleteDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
