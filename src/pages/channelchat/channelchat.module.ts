import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelchatPage } from './channelchat';
import { ComponenetsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ChannelchatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelchatPage),
    ComponenetsModule
  ],
})
export class ChannelchatPageModule {}
