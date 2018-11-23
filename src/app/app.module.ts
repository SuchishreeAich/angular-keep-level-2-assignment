import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthenticationService } from './services/authentication.service';
import { NotesService } from './services/notes.service';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  ],
  providers: [
    AuthenticationService,
    NotesService,
    RouterService,
    CanActivateRouteGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
