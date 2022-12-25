import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverList:{name:string, status:string}[]=[]

  addServerEvent(serverData:{name:string, status:string}){
    this.serverList.push(serverData)
    // console.log(serverData)
    // console.log(this.serverList)
  }
  
}
