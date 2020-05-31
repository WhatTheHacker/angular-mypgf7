import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angulars';
  info = "I am a value of Input variable from another component";

  course = [];

  clickMe($event){
    console.log("Button clcked", $event);
  }


  isSelected: boolean = false;
}
