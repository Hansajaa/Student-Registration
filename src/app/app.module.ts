import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SideMenuComponent } from './common/side-menu/side-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ViewStudentsComponent } from './pages/view-students/view-students.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    HomeComponent,
    StudentRegistrationComponent,
    FooterComponent,
    ViewStudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
