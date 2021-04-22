import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from '../shared/footer/footer.component';
import { AuthFirebaseService } from './services/auth-firebase.service';
import { ValidateFormService } from './services/validate-form.service';



@NgModule({
  declarations: [
    LoginComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    AuthFirebaseService,
    ValidateFormService
  ],

})
export class LoginModule { }
