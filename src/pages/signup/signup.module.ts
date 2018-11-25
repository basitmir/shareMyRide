import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { ComponenetsModule } from '../../components/components.module';
//import { SignupformComponent } from '../../components/signupform/signupform.components';
import {AngularFireAuthModule} from 'angularfire2/auth';
@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    ComponenetsModule,AngularFireAuthModule
  ],
})
export class SignupPageModule {}
