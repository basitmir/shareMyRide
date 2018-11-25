import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { LoginformComponent } from './loginform/loginform.components';
import { SignupformComponent } from './signupform/signupform.components';
import { EditprofileformComponent } from './editprofileform/editprofileform.component';
import { ProfileviewComponent } from './profileview/profileview..component';
//import { ProfilesearchComponent } from './profilesearch/profilesearch';
import { MessageboxComponent } from './messagebox/messagebox';
import { ChatmessageComponent } from './chatmessage/chatmessage';
//import { ProfileviewComponent } from './profileview/profileview';

@NgModule({
 declarations:[LoginformComponent,
    SignupformComponent,
    EditprofileformComponent,
    ProfileviewComponent,
    //ProfilesearchComponent,
    MessageboxComponent,
    ChatmessageComponent],
 imports:[IonicModule],
 exports:[LoginformComponent,
    SignupformComponent,
    EditprofileformComponent,
    ProfileviewComponent,
    //ProfilesearchComponent,
    MessageboxComponent,
    ChatmessageComponent
 ]

})
export class ComponenetsModule{


}