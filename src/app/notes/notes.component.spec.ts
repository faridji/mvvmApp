import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';
import { MatListModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NotesService } from '../notes.service';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let service: NotesService;
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

    service = new NotesService();
    component = new NotesComponent(new FormBuilder(), service);

    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 2 controls.', () => {
    expect(component.editNoteForm.contains('title')).toBeTruthy();
    expect(component.editNoteForm.contains('text')).toBeTruthy();
  });

  it('should make the title and text controls required.', () => {
    let title_control = component.editNoteForm.get('title');
    let text_control = component.editNoteForm.get('text');

    title_control.setValue('');
    text_control.setValue('');

    expect(title_control.valid).toBeFalsy();
    expect(text_control.valid).toBeFalsy();
  });

  it('#selectedNote should return true or false', () => {
    expect(component.noteSelected()).toBeFalsy();
  });
});
