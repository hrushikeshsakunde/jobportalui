import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatGridListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobEditComponent } from './job-edit/job-edit.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatIconModule } from '@angular/material';
import { JobViewComponent } from './job-view/job-view.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JobEditComponent,
    JobViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgMatSearchBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
