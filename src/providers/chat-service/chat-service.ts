
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChannnelMessages } from '../../models/channels/channel-messages.interface';
import { Channel } from '../../models/channels/channels.interface';

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatServiceProvider {

  constructor(private database: AngularFireDatabase) {
    console.log('Hello ChatServiceProvider Provider');
  }
 addChannel(channelName:string,firstName:string,lastName:string,phone:number){
   this.database.list(`/channel-names`).push({name:channelName,owner:firstName+lastName,phone:phone});

 }
 getChannelListRef(){
   return this.database.list(`channel-names`);
 }

 getChannelChatRef(channelKey:string){
   return this.database.list(`channels/${channelKey}`);
 }
 async sendChannelChatMessage(channelKey:string,message: ChannnelMessages){

      await this.database.list(`channels/${channelKey}`).push(message);
 }
 async sendAdminChannelChatMessage(channelKey:string,message: ChannnelMessages){
  //await this.database.list(`channels/${channelKey}`).push(message);
  await this.database.list(`channels/${channelKey}`).push(message);
  
}
filterData(filter:any){
  return this.database.list('/channel-names',ref=>ref.orderByChild('phone').equalTo(filter));


}

removeChannel(channel:any){
 // this.database.list(`channels`).remove(channel.key);
  return this.database.list<Channel>(`channel-names`).remove(channel.key); 
  
  //return this.database.list(``).remove(channelKey);
}

}
