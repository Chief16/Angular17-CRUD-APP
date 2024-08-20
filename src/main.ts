import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { DataService } from './app/data.service';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, MatTableModule, MatIconModule, MatToolbarModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatListModule),
        DataService,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
