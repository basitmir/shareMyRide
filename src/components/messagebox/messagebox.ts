import { Component, EventEmitter, Output } from '@angular/core';
//import { Content } from 'ionic-angular';

/**
 * Generated class for the MessageboxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'messagebox',
  templateUrl: 'messagebox.html'
})
export class MessageboxComponent {

@Output() sendMessage: EventEmitter<string>


  content: string;

  constructor() {
    this.sendMessage= new  EventEmitter<string>();
      }

      send(){
        this.sendMessage.emit(this.content);
        this.content="";
      }

}
