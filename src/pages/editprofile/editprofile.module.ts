import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditprofilePage } from './editprofile';
import { ComponenetsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(EditprofilePage),
    ComponenetsModule
  ],
})
export class EditprofilePageModule {}
