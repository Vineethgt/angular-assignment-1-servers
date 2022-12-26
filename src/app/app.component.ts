import { Component } from '@angular/core';
import { AlertsService } from './utility/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverList:{name:string, status:string}[]=[]

  constructor(private alertss: AlertsService){}

  addServerEvent(serverData:{name:string, status:string}){
    if(this.serverList.length==0){
      this.serverList.push(serverData)
    }else{
    this.serverList.forEach(server =>{
      if(server.name == serverData.name){
        // alert("Already exists")
        this.alertss.validationAlert("Server already exists","Duplicate")
      }else{
        this.serverList.push(serverData)
      }
    })
  }
    
    console.log(typeof(this.serverList))
    console.log(this.serverList[0].name)
    // console.log(serverData)
    // console.log(this.serverList)
  }
  
  
}
