import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatDividerModule, MatToolbarModule } from '@angular/material';

describe('AppComponent', () => {
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDividerModule,
        MatToolbarModule,
      ],
    }).compileComponents();

    app = new AppComponent();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Notes'`, () => {
    expect(app.title).toContain('Notes');
  });
});
