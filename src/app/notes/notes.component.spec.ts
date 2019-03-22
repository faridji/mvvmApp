import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';
import { MatListModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NotesService } from '../notes.service';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule,
        MatInputModule,

        ReactiveFormsModule,
      ],
      declarations: [ NotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new NotesComponent(new FormBuilder(), new NotesService());
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#selectedNote should return true or false', () => {
    expect(component.noteSelected()).toBeFalsy();
  });
});
