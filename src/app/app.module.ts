import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatCheckboxModule, MatDividerModule, MatIconModule, MatToolbar, MatToolbarModule, MatListModule, MatMenuModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notes', component: NotesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    
    ReactiveFormsModule,
    FormsModule,

    FlexLayoutModule,
    
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    

    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
