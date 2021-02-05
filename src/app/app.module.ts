import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './Components/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import {MatSelectModule} from '@angular/material/select';
import { ToolBarComponent } from './Components/tool-bar/tool-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { ConformationComponent } from './Components/conformation/conformation.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    ToolBarComponent,
    ConformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
