import { Component, Input } from '@angular/core';
import { Message } from '../../models/messages/messages';

/**
 * Generated class for the ChatmessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chatmessage',
  templateUrl: 'chatmessage.html'
})
export class ChatmessageComponent {

  @Input() chatMessage: Message
  @Input() chatIndex: number;

  text: string;

  constructor() {
   
  }

}
